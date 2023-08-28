import React, { ReactNode } from 'react';

type ProblemProps = {
  children: ReactNode;
}

const Problem: React.FC<ProblemProps> = ({ children }) => {
  return (
    <div className="my-8 bg-red-50 border border-red-200 rounded-md p-4 shadow-md">
      <p className="text-gray-800 text-lg font-medium leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default Problem;
