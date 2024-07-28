type SectionLink = { name: string; link: string };

interface SectionLinkProps {
  title: SectionLink;
  childTitle: SectionLink[];
}

export default function SectionLink({ title, childTitle }: SectionLinkProps) {
  return (
    <div className="flex flex-col gap-3 mb-9">
      <a href={title.link} className="text-xl">
        {title.name}
      </a>
      <div className="flex flex-col gap-2">
        {childTitle.map((child, index) => (
          <a
            href={child.link}
            className="text-nowrap text-black-800 opacity-70 hover:opacity-90 transition"
            key={index}
          >
            {child.name}
          </a>
        ))}
      </div>
    </div>
  );
}
