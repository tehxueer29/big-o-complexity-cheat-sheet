import React from "react";

interface ChipProps {
  children?: React.ReactNode;
  link?: string;
}

export default function Card({ children, link }: ChipProps) {
  const linkTag: keyof JSX.IntrinsicElements = link ? "a" : "div";
  const linkAttr = link ? { href: link, target: "_blank" } : {};

  return (
    <>
      {React.createElement(
        linkTag,
        {
          className:
            "rounded-full bg-white-200 px-3 py-1 inline-block hover:bg-white-400 transition",
          ...linkAttr,
        },
        children,
      )}
    </>
  );
}
