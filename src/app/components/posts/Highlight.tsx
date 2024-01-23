// components/Highlight.tsx
import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return (
    <div className="my-8 border-l-4 border-yellow-500 pl-4 shadow-sm bg-gray-50 rounded-lg">
      <p className="text-lg leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}

export default Highlight;
