export class LocalStorageLRUCache {
  private _localStorageKey;
  private _maxSize;

  constructor(options: { localStorageKey: string; maxSize: number }) {
    this._localStorageKey = options.localStorageKey;
    this._maxSize = options.maxSize;
  }

  public set(key: string, value: string): void {
    const lru = this.readLRU();
    lru.delete(key);
    lru.set(key, value);
    this.writeLRU(lru);
  }

  public get(key: string): string | null {
    const lru = this.readLRU();
    const cachedValue = lru.get(key);
    if (cachedValue === undefined) {
      return null;
    }

    lru.delete(key);
    lru.set(key, cachedValue);
    this.writeLRU(lru);
    return cachedValue;
  }

  private readLRU(): Map<string, string> {
    const rawData = localStorage.getItem(this._localStorageKey);
    const data = JSON.parse(rawData ?? '{}');
    return new Map(Array.isArray(data) ? data : []);
  }

  private writeLRU(lru: Map<string, string>): void {
    let maxSize = this._maxSize;
    for (;;) {
      try {
        const trimmedPairs = Array.from(lru).slice(-maxSize);
        const rawData = JSON.stringify(trimmedPairs);
        localStorage.setItem(this._localStorageKey, rawData);
        this._maxSize = maxSize;
        break;
      } catch (error) {
        if (maxSize <= 1) {
          throw error;
        }
        console.warn(
          `Can't write LRU cache with ${maxSize} entries. Retrying...`,
        );
        maxSize -= 1;
      }
    }
  }
}
