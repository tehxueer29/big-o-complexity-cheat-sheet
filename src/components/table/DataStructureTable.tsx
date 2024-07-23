import HeaderTD from "./HeaderTD";
import ComplexityTD, { Complexity } from "./ComplexityTD";
import TableHeaders from "./TableHeaders";
import React from "react";

interface TableItem {
  name: string;
  averageTime: {
    access: Complexity;
    search: Complexity;
    insert: Complexity;
    delete: Complexity;
  };
  worstTime: {
    access: Complexity;
    search: Complexity;
    insert: Complexity;
    delete: Complexity;
  };
  worstSpace: Complexity;
}

export default function DataStructureTable() {
  const tableItems: TableItem[] = [
    {
      name: "Array",
      averageTime: {
        access: "O(1)",
        search: "O(n)",
        insert: "O(n)",
        delete: "O(n)",
      },
      worstTime: {
        access: "O(1)",
        search: "O(n)",
        insert: "O(n)",
        delete: "O(n)",
      },
      worstSpace: "O(n)",
    },
    {
      name: "Stack",
      averageTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstSpace: "O(n)",
    },
    {
      name: "Queue",
      averageTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstSpace: "O(n)",
    },
    {
      name: "Singly-Linked List",
      averageTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstSpace: "O(n)",
    },
    {
      name: "Doubly-Linked List",
      averageTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstSpace: "O(n)",
    },
    {
      name: "Hash Table",
      averageTime: {
        access: "",
        search: "O(1)",
        insert: "O(1)",
        delete: "O(1)",
      },
      worstTime: {
        access: "",
        search: "O(n)",
        insert: "O(n)",
        delete: "O(n)",
      },
      worstSpace: "O(n)",
    },
    {
      name: "Binary Search Tree",
      averageTime: {
        access: "O(log n)",
        search: "O(log n)",
        insert: "O(log n)",
        delete: "O(log n)",
      },
      worstTime: {
        access: "O(n)",
        search: "O(n)",
        insert: "O(n)",
        delete: "O(n)",
      },
      worstSpace: "O(n)",
    },
  ];

  const operations = ["Access", "Search", "Insert", "Delete"];

  const columns = [
    {
      title: "Data Structure",
      children: (
        <div className="space-y-1">
          <HeaderTD text="" isSideHeader />
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
        <>
          <div className="grid grid-cols-2 gap-1">
            <HeaderTD text="Average" />
            <HeaderTD text="Worst" />
          </div>
          <div className="grid grid-cols-8 gap-1">
            {operations.map((operation, index) => (
              <HeaderTD key={index} text={operation[0]} tooltip={operation} />
            ))}
            {operations.map((operation, index) => (
              <HeaderTD key={index} text={operation[0]} tooltip={operation} />
            ))}

            {tableItems.map((item, index) => {
              const complexities = (
                <React.Fragment key={index}>
                  <ComplexityTD complexity={item.averageTime.access} />
                  <ComplexityTD complexity={item.averageTime.search} />
                  <ComplexityTD complexity={item.averageTime.insert} />
                  <ComplexityTD complexity={item.averageTime.delete} />
                  <ComplexityTD complexity={item.worstTime.access} />
                  <ComplexityTD complexity={item.worstTime.search} />
                  <ComplexityTD complexity={item.worstTime.insert} />
                  <ComplexityTD complexity={item.worstTime.delete} />
                </React.Fragment>
              );

              return complexities;
            })}
          </div>
        </>
      ),
    },
    {
      title: "Space Complexity",
      children: (
        <>
          <HeaderTD text="Worst" />
          <HeaderTD text="" isSideHeader />
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
