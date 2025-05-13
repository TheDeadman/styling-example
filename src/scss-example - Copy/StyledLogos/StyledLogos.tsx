// Logos.tsx
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import { Logo, LogoLink } from './StyledLogos.styles';


export const StyledLogos = () => {
    return (
        <div>
            <LogoLink href="https://vite.dev" target="_blank">
                <Logo src={viteLogo} alt="Vite logo" />
            </LogoLink>
            <LogoLink href="https://react.dev" target="_blank">
                <Logo $isReact src={reactLogo} alt="React logo" />
            </LogoLink>
        </div>
    );
};
