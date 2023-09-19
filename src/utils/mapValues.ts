export function mapValues<T, R>(
  obj: { [key: string]: T },
  mapper: (value: T, key: string) => R | null,
): { [key: string]: R } {
  return Object.fromEntries(
    Object.entries(obj)
      .map(([key, value]) => [key, mapper(value, key)])
      .filter(([, value]) => value != null),
  );
}
