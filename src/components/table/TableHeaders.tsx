interface Column {
  title: string;
  children: React.ReactNode;
}

interface TableHeadersProps {
  col1: Column;
  col2: Column;
  col3: Column;
}

export default function TableHeaders({ col1, col2, col3 }: TableHeadersProps) {
  const columns = [col1, col2, col3];

  const columnsEle = columns.map((column, index) => {
    const basis = index == 1 ? "basis-4/6" : "basis-1/6";

    return (
      <div key={index} className={`${basis} space-y-1`}>
        <div className="text-nowrap bg-white-200 py-3 text-center text-[0.5rem] font-bold md:text-xs">
          {column.title}
        </div>
        {column.children}
      </div>
    );
  });

  return <div className="flex gap-1">{columnsEle}</div>;
}
