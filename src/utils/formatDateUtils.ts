export function formatDate(dateString: string): string {
  const parsedDate = new Date(dateString);
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();
  return ` ${day}/${month}/${year}`;
}
