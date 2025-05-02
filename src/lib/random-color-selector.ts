export default function randomColorSelector(): number {
  const colorAmount = 5;
  return Math.floor(Math.random() * colorAmount);
}
