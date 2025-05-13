import './scssCard.scss';

interface CardProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const ScssCard = ({ count, setCount }: CardProps) => {
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
}