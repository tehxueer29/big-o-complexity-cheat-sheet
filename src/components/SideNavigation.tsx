import SectionLink from "./SectionLink";

const SectionLinks = [
  {
    title: { name: "Introduction", link: "#Introduction" },
    childTitle: [
      { name: "Big O Complexity Chart", link: "#BigOComplexityChart" },
      { name: "Data Structure Operations", link: "#DataStructureOperations" },
      { name: "Array Sorting Algorithms", link: "#ArraySortingAlgorithms" },
    ],
  },
  {
    title: { name: "Extra Resources", link: "#ExtraResources" },
    childTitle: [
      { name: "Links", link: "#ExtraResources" },
      { name: "GitHub", link: "#ExtraResources" },
    ],
  },
];

export default function SideNavigation() {
  return (
    <>
      <div className="flex">
        <div className="m-auto p-3 font-bold md:pt-0 lg:px-11 lg:pb-11 lg:ps-28 xl:m-0">
          <div className="md:pt-11 xl:sticky xl:top-0">
            {SectionLinks.map((sectionLink) => (
              <SectionLink
                title={sectionLink.title}
                childTitle={sectionLink.childTitle}
              />
            ))}
          </div>
        </div>
        <div className="bg-white-200 xl:w-3"></div>
      </div>
    </>
  );
}
