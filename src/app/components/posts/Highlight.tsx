// components/Highlight.tsx
import React from "react";
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return (
    <div className="my-4">
      <span className="bg-yellow-200 px-2 py-1 rounded text-sm sm:text-base font-medium">
        {children}
      </span>
    </div>
  );
}

export default Highlight;
