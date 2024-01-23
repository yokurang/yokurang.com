import React, { ReactNode } from 'react';

type SummaryProps = {
  children: ReactNode;
}

const Summary: React.FC<SummaryProps> = ({ children }) => {
  return (
    <div className="my-8 bg-yellow-100 border-l-4 border-yellow-500 p-4">
      <h3 className="text-lg font-semibold mb-3 text-yellow-700">In Summary:</h3>
      <ul className="pl-5 list-disc">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="mb-2 text-gray-800">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
