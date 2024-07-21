interface ComplexityTDProps {
  complexity:
    | "O(1)"
    | "O(log n)"
    | "O(n)"
    | "O(n log n)"
    | "O(n^2)"
    | "O(2^n)"
    | "O(n!)"
    | "O(n^n)";
}

export default function ComplexityTD({ complexity }: ComplexityTDProps) {
  const cellColor =
    complexity == "O(1)"
      ? "bg-green-500"
      : complexity == "O(log n)"
        ? "bg-green-400"
        : complexity == "O(n)"
          ? "bg-yellow"
          : complexity == "O(n log n)"
            ? "bg-orange"
            : complexity == "O(n^2)"
              ? "bg-red"
              : "";
  return (
    <>
      <div
        className={`${cellColor} flex basis-1/12 justify-center py-3 text-center text-xs font-bold`}
      >
        {complexity}
      </div>
    </>
  );
}
