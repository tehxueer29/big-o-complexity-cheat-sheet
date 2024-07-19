interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <>
      <div className="rounded-md bg-white-200">{children}</div>
    </>
  );
}
