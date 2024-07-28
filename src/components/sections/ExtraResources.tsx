import Section from "../Section";
import Chip from "../Chip";

export default function ExtraResources() {
  const chips = [
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/57bd4963-462f-4294-a972-4012691fc729",
      text: "Algorithmic Complexity ↗",
    },
    {
      link: "https://leetcode.com/discuss/study-guide/1800120/become-master-in-linked-list",
      text: "Linked List ↗",
    },
    {
      link: "https://www.amazon.com/Data-Structures-Algorithms-Made-Easy-ebook/dp/B0CBW278NC/",
      text: "Data Structures And Algorithms Made Easy ↗",
    },
    {
      link: "https://visualgo.net/en",
      text: "VisuAlgo ↗",
    },
    {
      link: "https://medium.com/jl-codes/understanding-sorting-algorithms-af6222995c8",
      text: "Sorting Algorithms ↗",
    },
    {
      link: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu",
      text: "William Fiset's Data Structure Playlist ↗",
    },
  ];

  const chipsEle = chips.map((chip, index) => (
    <Chip key={index} link={chip.link}>{chip.text}</Chip>
  ));

  return (
    <>
      <Section title="Extra Resources" mainSection={true}>
        <div className="flex flex-wrap gap-3">{chipsEle}</div>
        <p className="font-bold">
          ✎ Edit this page on{" "}
          <a
            href="https://github.com/tehxueer29/big-o-complexity-cheat-sheet"
            target="_blank"
            className="text-primary-500 underline underline-offset-2 transition hover:text-primary-700"
          >
            GitHub
          </a>
        </p>
      </Section>
    </>
  );
}
