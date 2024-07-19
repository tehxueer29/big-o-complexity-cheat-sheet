interface HeaderTDProps {
  text: string;
  isSideHeader?: boolean;
}

export default function HeaderTD({ text, isSideHeader }: HeaderTDProps) {
  const bg = isSideHeader ? "" : "bg-white-200";
  const opacity = text === "" ? "opacity-0" : "";
  return (
    <>
      <div className={`${bg} ${opacity} px-6 py-3 text-center font-bold`}>
        {text} {text === "" ? "placeholder" : ""}
      </div>
    </>
  );
}
