"use client";
import React, { useState, useEffect } from 'react';

const Age: React.FC = () => {
    const [age, setAge] = useState<number>();

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
        const birthTime = new Date('2002-04-10T00:00:00');
        setAge(Number(((Date.now() - birthTime.getTime()) / divisor).toFixed(10)));
    };

    useEffect(() => {
        const timer = setInterval(tick, 50);
        return () => clearInterval(timer);
    }, []);

    return <>{age}</>;
};

export default Age;
