interface HeaderTDProps {
  text: string;
  isSideHeader?: boolean;
  tooltip?: React.ReactNode;
}

export default function HeaderTD({
  text,
  isSideHeader,
  tooltip,
}: HeaderTDProps) {
  const bg = isSideHeader ? "" : "bg-white-200";
  const opacity = text === "" ? "opacity-0" : "";
  const showTooltip = tooltip ? (
    <div className="invisible absolute flex -translate-y-full flex-col items-center text-xs font-bold opacity-0 transition group-hover/item:visible group-hover/item:opacity-100">
      <p className="rounded-md bg-black-800 p-2 text-white-100">{tooltip}</p>
      <div className="border-l-8 border-r-8 border-t-8 border-black-800 border-l-transparent border-r-transparent"></div>
    </div>
  ) : (
    ""
  );
  return (
    <div className="group/item flex flex-col items-center">
      <div
        className={`${bg} ${opacity} flex w-full items-center justify-center py-3 text-center text-[0.5rem]  font-bold md:text-[0.6rem] lg:text-xs`}
      >
        <p className="truncate">
          {text} {text === "" ? "placeholder" : ""}
        </p>
      </div>
      {showTooltip}
    </div>
  );
}
