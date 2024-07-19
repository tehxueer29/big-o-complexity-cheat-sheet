import HeaderTD from "./HeaderTD";
import ComplexityTD from "./ComplexityTD";
import TableHeaders from "./TableHeaders";

export default function ArraySortingTable() {
  const columns = [
    {
      title: "Algorithm",
      children: (
        <div>
          <HeaderTD text="" isSideHeader />
          <HeaderTD text="Quicksort" isSideHeader />
          <HeaderTD text="Mergesort" isSideHeader />
        </div>
      ),
    },
    {
      title: "Time Complexity",
      children: (
        <div className="grid grid-cols-3 gap-1">
          <HeaderTD text="Best" />
          <HeaderTD text="Average" />
          <HeaderTD text="Worst" />
          <ComplexityTD complexity="O(n log n)" />
          <ComplexityTD complexity="O(n log n)" />
          <ComplexityTD complexity="O(n^2)" />
          <ComplexityTD complexity="O(n log n)" />
          <ComplexityTD complexity="O(n log n)" />
          <ComplexityTD complexity="O(n log n)" />
        </div>
      ),
    },
    {
      title: "Space Complexity",
      children: (
        <>
          <HeaderTD text="Worst" />
          <ComplexityTD complexity="O(log n)" />
          <ComplexityTD complexity="O(n)" />
        </>
      ),
    },
  ];

  return (
    <div className="space-y-1">
      <TableHeaders col1={columns[0]} col2={columns[1]} col3={columns[2]} />
    </div>
  );
}
