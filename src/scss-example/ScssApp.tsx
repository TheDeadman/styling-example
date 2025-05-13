import { useState } from 'react'
import { SCSSLogos } from './ScssLogos/ScssLogos'
import { ScssCard } from './ScssCard/ScssCard'
import { ScssButtons } from './ScssButtons/ScssButtons'
import { Container } from '../Container'
import './App.css'

function CssApp() {
    const [count, setCount] = useState(0);


    return (
        <Container count={count}>
            <SCSSLogos />
            <h1>Vite + React</h1>
            <ScssCard count={count} setCount={setCount} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <ScssButtons />
        </Container>
    )
}

export default CssApp
