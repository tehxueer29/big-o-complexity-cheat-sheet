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
    const basis =
      index == 0 ? "basis-1/6" : index == 1 ? "basis-4/6" : "basis-1/6";

    return (
      <div key={index} className={`${basis} space-y-1`}>
        <div className="bg-white-200 py-3 text-center md:text-xs font-bold text-[0.5rem] text-nowrap">
          {column.title}
        </div>
        {column.children}
      </div>
    );
  });

  return <div className="flex gap-1">{columnsEle}</div>;
}
