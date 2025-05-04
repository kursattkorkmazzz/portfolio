export function getBackgroundColor(index: number): string {
  const tailwindColorClasses = [
    "bg-green",
    "bg-blue",
    "bg-yellow",
    "bg-purple",
    "bg-orange",
  ];
  return tailwindColorClasses[index % tailwindColorClasses.length];
}

export function getTextColor(index: number): string {
  const tailwindColorClasses = [
    "text-green",
    "text-blue",
    "text-yellow",
    "text-purple",
    "text-orange",
  ];
  return tailwindColorClasses[index % tailwindColorClasses.length];
}

export function getBorderColor(index: number): string {
  const tailwindColorClasses = [
    "border-green",
    "border-blue",
    "border-yellow",
    "border-purple",
    "border-orange",
  ];
  return tailwindColorClasses[index % tailwindColorClasses.length];
}
