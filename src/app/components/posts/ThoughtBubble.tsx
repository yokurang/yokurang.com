import React, { ReactNode } from 'react';

type ThoughtBubbleProps = {
  children: ReactNode;
}

const ThoughtBubble: React.FC<ThoughtBubbleProps> = ({ children }) => {
  return (
    <div className="relative my-4">
      <div className="absolute -top-5 left-1/4 w-5 h-5 bg-gray-100 rounded-full"></div>
      <div className="border-2 border-gray-300 bg-gray-100 rounded-xl p-6">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">My Thinking:</h3>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default ThoughtBubble;
