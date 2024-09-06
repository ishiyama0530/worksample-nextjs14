export function getRandomString(max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * max).toString();
}
