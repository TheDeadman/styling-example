import { useState } from 'react'
import { StyledLogos } from './StyledLogos/StyledLogos'
import { StyledCard } from './StyledCard/StyledCard'
import { StyledButtons } from './StyledButtons/StyledButtons'
import { Container } from '../Container'
import './App.css'

function StyledApp() {
    const [count, setCount] = useState(0);


    return (
        <Container count={count}>
            <StyledLogos />
            <h1>Vite + React</h1>
            <StyledCard count={count} setCount={setCount} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <StyledButtons variant={count % 2 === 0 ? 'even' : 'odd'} />
        </Container>
    )
}

export default StyledApp
