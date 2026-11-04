/**
 * Tutor conversations share the existing per-user AI quota with question and
 * course generation. A separate in-memory counter would fail across instances.
 *
 * Keep the operator-configurable cap conservative until real traffic and
 * provider billing have been measured.
 */
export function tutorDailyRequestLimit(
  env: Record<string,string|undefined> = process.env
): number {
  const raw = env.TUTOR_DAILY_REQUEST_LIMIT?.trim();
  if (!raw) return 30;
  const count = Number(raw);
  if (!Number.isFinite(count) || !Number.isInteger(count)) return 30;
  return Math.max(1,Math.min(100,count));
}
