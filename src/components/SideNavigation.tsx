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
      <div className="xl:flex pb-11 xl:pb-0">
        <div className="p-3 font-bold md:ps-40 md:pt-0 xl:pe-12 xl:ps-24">
          <div className="md:pt-11 xl:sticky xl:top-0">
            {SectionLinks.map((sectionLink, index) => (
              <SectionLink
                title={sectionLink.title}
                childTitle={sectionLink.childTitle}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="h-3 bg-white-200 xl:h-auto xl:w-3"></div>
      </div>
    </>
  );
}
