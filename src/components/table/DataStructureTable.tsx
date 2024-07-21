import HeaderTD from "./HeaderTD";
import ComplexityTD from "./ComplexityTD";
import TableHeaders from "./TableHeaders";

export default function DataStructureTable() {
  const columns = [
    {
      title: "Data Structure",
      children: (
        <div>
          <HeaderTD text="" isSideHeader />
          <HeaderTD text="" isSideHeader />
          <HeaderTD text="Array" isSideHeader />
          <HeaderTD text="Stack" isSideHeader />
          <HeaderTD text="Queue" isSideHeader />
          <HeaderTD text="Singly-Linked List" isSideHeader />
          <HeaderTD text="Doubly-Linked List" isSideHeader />
          <HeaderTD text="Hash Table" isSideHeader />
          <HeaderTD text="Binary Search Tree" isSideHeader />
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
            <HeaderTD text="A" tooltip="Access" />
            <HeaderTD text="S" tooltip="Search" />
            <HeaderTD text="I" tooltip="Insert" />
            <HeaderTD text="D" tooltip="Delete" />
            <HeaderTD text="A" tooltip="Access" />
            <HeaderTD text="S" tooltip="Search" />
            <HeaderTD text="I" tooltip="Insert" />
            <HeaderTD text="D" tooltip="Delete" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <div />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <ComplexityTD complexity="O(1)" />
            <div />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(log n)" />
            <ComplexityTD complexity="O(log n)" />
            <ComplexityTD complexity="O(log n)" />
            <ComplexityTD complexity="O(log n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
            <ComplexityTD complexity="O(n)" />
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
          <ComplexityTD complexity="O(n)" />
          <ComplexityTD complexity="O(n)" />
          <ComplexityTD complexity="O(n)" />
          <ComplexityTD complexity="O(n)" />
          <ComplexityTD complexity="O(n)" />
          <ComplexityTD complexity="O(n)" />
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
