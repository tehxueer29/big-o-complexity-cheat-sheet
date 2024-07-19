import Section from "../Section";
import Chip from "../Chip";

export default function Introduction() {
  const chips = [
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
    {
      link: "https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms",
      text: "How I Mastered DSA ↗",
    },
  ];

  const chipsEle = chips.map((chip) => (
    <Chip link={chip.link}>{chip.text}</Chip>
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
            className="text-primary-500 hover:text-primary-700 underline underline-offset-2 transition"
          >
            GitHub
          </a>
        </p>
      </Section>
    </>
  );
}
