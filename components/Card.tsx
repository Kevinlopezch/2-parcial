import React from "react";

interface CardProps {
  title: string;
  code: string;
  description: string;
  updatedAt: string;
  index: number;
  color?: string;
}

const Card = ({
  title,
  code,
  description,
  updatedAt,
  index,
  color,
}: CardProps) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden border border-gray-200 w-80">
      <div
        className={`text-white px-4 py-2 h-14 flex justify-between items-center ${
          color || "bg-purple-500"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-sm">
            {index}
          </div>
          <span className="font-semibold">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{code}</span>
          <span className="text-white">♦</span>{" "}
          {/* Puedes usar un ícono si prefieres */}
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
      <div className="border-t border-gray-300 mx-4"></div>

      <div className="px-4 py-3 text-gray-500 text-xs  ">
        Last Updated <span className="float-right">{updatedAt}</span>
      </div>
    </div>
  );
};

export default Card;
