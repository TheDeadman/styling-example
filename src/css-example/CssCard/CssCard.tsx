import { memo } from 'react';
import './cssCard.css';

interface CardProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const CssCard = memo(({ count, setCount }: CardProps) => {
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
});

CssCard.displayName = "CssCard";