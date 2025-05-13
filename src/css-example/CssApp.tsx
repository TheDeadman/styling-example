import { useState } from 'react'
import { CSSLogos } from './CssLogos/CssLogos'
import { CssCard } from './CssCard/CssCard'
import CssButtons from './CssButtons/CssButtons'
import { Container } from '../Container'
import './App.css'

function CssApp() {
    const [count, setCount] = useState(0);


    return (
        <Container count={count}>
            <CSSLogos />
            <h1>Vite + React</h1>
            <CssCard count={count} setCount={setCount} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <CssButtons />
        </Container>
    )
}

export default CssApp
