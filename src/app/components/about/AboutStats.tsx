import React from 'react';
import Age from './MyAge';

const Stats: React.FC = () => {
    const data = [
        {
            key: 'age',
            label: 'Current age',
            value: <Age />,
        },
        {
            key: 'countries',
            label: 'Countries visited',
            value: 5,
        },
        {
            key: 'location',
            label: 'Current city',
            value: 'Singapore',
        },
    ];

    return (
        <div className="bg-white shadow-md rounded-lg p-4 md:p-8 mb-4 md:mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Some Stats About Me</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 text-gray-700">
                {data.map((item) => (
                    <div key={item.key} className="border-b border-gray-200 pb-4">
                        <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">{item.label}</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Stats;
