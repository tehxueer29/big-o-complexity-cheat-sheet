import Introduction from "./sections/Introduction";
import BigOComplexityChart from "./sections/BigOComplexityChart";
import DataStructureOperations from "./sections/DataStructureOperations";
import ArraySortingAlgorithms from "./sections/ArraySortingAlgorithms";
import ExtraResources from "./sections/ExtraResources";

export default function ContentBody() {
  return (
    <>
      <div className="grow px-3 md:pb-32 xl:pt-20 md:px-40 xl:px-30 2xl:px-96">
        <Introduction />
        <BigOComplexityChart />
        <DataStructureOperations />
        <ArraySortingAlgorithms />
        <ExtraResources />
      </div>
    </>
  );
}
