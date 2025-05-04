export function getBackgroundColor(index: number): string {
  const tailwindColorClasses = [
    "bg-green",
    "bg-blue",
    "bg-yellow",
    "bg-orange",
    "bg-purple",
  ];
  return tailwindColorClasses[index % tailwindColorClasses.length];
}

export function getTextColor(index: number): string {
  const tailwindColorClasses = [
    "text-green",
    "text-blue",
    "text-yellow",
    "text-orange",
    "text-purple",
  ];
  return tailwindColorClasses[index % tailwindColorClasses.length];
}

export function getBorderColor(index: number): string {
  const tailwindColorClasses = [
    "border-green",
    "border-blue",
    "border-yellow",
    "border-orange",
    "border-purple",
  ];
  return tailwindColorClasses[index % tailwindColorClasses.length];
}
