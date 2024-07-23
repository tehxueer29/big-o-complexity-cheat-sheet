import React from "react";
import HeaderTD from "./HeaderTD";
import TableHeaders from "./TableHeaders";
import ComplexityTD, { Complexity } from "./ComplexityTD";

interface TableItem {
  name: string;
  bestTime: Complexity;
  averageTime: Complexity;
  worstTime: Complexity;
  worstSpace: Complexity;
}

export default function ArraySortingTable() {
  const tableItems: TableItem[] = [
    {
      name: "Quicksort",
      bestTime: "O(n log n)",
      averageTime: "O(n log n)",
      worstTime: "O(n^2)",
      worstSpace: "O(log n)",
    },
    {
      name: "Mergesort",
      bestTime: "O(n log n)",
      averageTime: "O(n log n)",
      worstTime: "O(n log n)",
      worstSpace: "O(n)",
    },
  ];

  const columns = [
    {
      title: "Algorithm",
      children: (
        <div className="space-y-1">
          <HeaderTD text="" isSideHeader />
          {tableItems.map((item, index) => (
            <HeaderTD key={index} text={item.name} isSideHeader />
          ))}
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
          {tableItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <ComplexityTD complexity={item.bestTime} />
                <ComplexityTD complexity={item.averageTime} />
                <ComplexityTD complexity={item.worstTime} />
              </React.Fragment>
            );
          })}
        </div>
      ),
    },
    {
      title: "Space Complexity",
      children: (
        <>
          <HeaderTD text="Worst" />
          {tableItems.map((item, index) => (
            <ComplexityTD key={index} complexity={item.worstSpace} />
          ))}
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
