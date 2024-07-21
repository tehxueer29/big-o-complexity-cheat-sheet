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
      index == 0 ? "basis-1/6" : index == 1 ? "basis-3/6" : "basis-2/6";
    return (
      <div className={`${basis} space-y-1`}>
        <div className="bg-white-200 py-3 text-center text-sm font-bold">
          {column.title}
        </div>
        {column.children}
      </div>
    );
  });

  return <div className="flex gap-1">{columnsEle}</div>;
}
