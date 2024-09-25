const textEncoder = new TextEncoder();

export async function computeHash(str: string): Promise<string | null> {
  if (crypto?.subtle?.digest == null) {
    return null;
  }

  const data = textEncoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return hashHex;
}
