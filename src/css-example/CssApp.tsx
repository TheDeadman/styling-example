import { useState } from 'react'
import { CSSLogos } from './CssLogos/CssLogos'
import './App.css'
import { CssCard } from './CssCard/CssCard'
import { Container } from '../Container'

function CssApp() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    return (
        <Container count={count} className={theme}>
            <CSSLogos />
            <h1>Vite + React</h1>
            <CssCard count={count} setCount={setCount} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <button onClick={() => setTheme('dark')}>Dark Theme</button>
            <button onClick={() => setTheme('light')}>Light Theme</button>
        </Container>
    )
}

export default CssApp
