import React, { ReactNode } from 'react';

type SubHeadingProps = {
  children: ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return (
    <h2 className="mt-6 mb-4 text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
      {children}
    </h2>
  );
};

export default SubHeading;
