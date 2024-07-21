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
      <p className="rounded-md bg-white-400 p-1">{tooltip}</p>
      <div className="h-0 w-0 border-l-8 border-r-8 border-t-8 border-white-400 border-l-transparent border-r-transparent"></div>
    </div>
  ) : (
    ""
  );
  return (
    <div className="group/item flex flex-col items-center">
      <div
        className={`${bg} ${opacity} flex w-full justify-center items-center  py-3 text-center text-sm font-bold`}
      >
        {text} {text === "" ? "placeholder" : ""}
      </div>
      {showTooltip}
    </div>
  );
}
