// Buttons.tsx

import { ThemedButton } from "./StyledButtons.styles";

interface ButtonsProps {
    variant: 'even' | 'odd';
}


// Functional component
export const StyledButtons = ({ variant }: ButtonsProps) => {
    return (
        <div>
            <ThemedButton $variant={variant}>One</ThemedButton>
            <ThemedButton $variant={variant}>Two</ThemedButton>
        </div>
    );
};
