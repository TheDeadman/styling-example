import { StyledButton, StyledCardComponent } from "./StyledCard.styles";

interface CardProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const StyledCard = ({ count, setCount }: CardProps) => {
    const variant = count % 2 === 0 ? 'even' : 'odd';

    return (
        <StyledCardComponent>
            <StyledButton $variant={variant} onClick={() => setCount((c) => c + 1)}>
                count is {count}
            </StyledButton>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </StyledCardComponent>
    );
};
