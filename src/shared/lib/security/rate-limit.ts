const windowMs = 10 * 60 * 1000;
const limit = 5;
const storage = new Map<string, number[]>();

export function isRateLimited(key: string) {
  const now = Date.now();
  const entries = storage.get(key) ?? [];
  const fresh = entries.filter((timestamp) => now - timestamp < windowMs);

  if (fresh.length >= limit) {
    storage.set(key, fresh);
    return true;
  }

  fresh.push(now);
  storage.set(key, fresh);
  return false;
}
