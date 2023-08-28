import React, { ReactNode } from 'react';

type ReferencesProps = {
  children: ReactNode;
}

const References: React.FC<ReferencesProps> = ({ children }) => {
  return (
    <div className="mt-8 border-t-2 border-gray-200 pt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-600">References:</h3>
      <ul className="pl-5 list-decimal">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="mb-2 text-gray-700">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
