interface SectionProps {
  title: string;
  firstSection?: boolean;
  mainSection?: boolean;
  children?: React.ReactNode;
}

export default function Section({
  title,
  firstSection,
  mainSection,
  children,
}: SectionProps) {
  const fontSize = mainSection ? "text-4xl" : "text-2xl";
  const padding = mainSection ? "space-y-11 mb-11" : "space-y-8 mb-8";
  return (
    <>
      <div className={padding}>
        {firstSection ? "" : <div className="h-0.5 bg-white-200" />}
        <div className={`${fontSize} font-bold`}>{title}</div>
        {children}
        {/* <div>{firstSection}</div>
        <div>{mainSection}</div> */}
      </div>
    </>
  );
}
