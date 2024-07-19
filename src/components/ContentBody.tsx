import Introduction from "./sections/Introduction";
import BigOComplexityChart from "./sections/BigOComplexityChart";
import DataStructureOperations from "./sections/DataStructureOperations";
import ArraySortingAlgorithms from "./sections/ArraySortingAlgorithms";
import ExtraResources from "./sections/ExtraResources";

export default function ContentBody() {
  return (
    <>
      <div className="grow px-80 pb-32 pt-20">
        <Introduction />
        <BigOComplexityChart />
        <DataStructureOperations />
        <ArraySortingAlgorithms />
        <ExtraResources />
      </div>
    </>
  );
}
