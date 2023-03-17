import React from "react";

export const CardSegment = ({
  title,
  subtitle,
  background,
  children,
}: {
  title: string;
  subtitle: string;
  background: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex mb-2">
      <div
        className={`flex align-items-center justify-content-center  border-round mb-1 p-2 ${background}`}
        style={{ width: "3rem", height: "3rem" }}
      >
        {children}
      </div>
      <div className="flex flex-column justify-content-between ml-3 w-7rem">
        <span className="block text-500 text-sm">{subtitle}</span>
        <span className="text-900 font-medium">{title}</span>
      </div>
    </div>
  );
};
