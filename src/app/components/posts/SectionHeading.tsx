// components/SectionHeading.tsx
import { ReactNode } from "react";

interface SectionHeadingProps {
  heading: string;
  children: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading, children }) => {
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-lg leading-relaxed">{children}</p>
    </div>
  );
}

export default SectionHeading;
