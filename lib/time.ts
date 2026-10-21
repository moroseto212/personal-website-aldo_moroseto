export async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export async function getBuildDate(): Promise<string> {
  "use cache";
  return new Date().toISOString();
}
