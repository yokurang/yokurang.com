// components/Paragraph.tsx
import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <div className="my-4">
      <p className="text-lg leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default Paragraph;
