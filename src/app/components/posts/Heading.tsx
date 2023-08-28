// components/SectionHeading.tsx
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-1 inline-block relative">
        {children}
        <hr className="border-t border-gray-300 absolute bottom-0 left-0 w-full" />
      </h2>
    </div>
  );
}

export default Heading;
