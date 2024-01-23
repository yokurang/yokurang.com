// components/Definition.tsx
import React from "react";
import { ReactNode } from "react";

interface DefinitionProps {
  term: string;
  children: ReactNode;
}

const Definition: React.FC<DefinitionProps> = ({ term, children }) => {
  return (
    <div className="border-l-4 border-green-400 pl-4 my-4">
      <strong className="font-semibold">{term}:</strong> {children}
    </div>
  );
}

export default Definition;
