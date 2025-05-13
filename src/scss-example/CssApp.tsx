import { useState } from 'react'
import { CSSLogos } from './ScssLogos/CssLogos'
import './App.css'
import { CssCard } from './ScssCard/ScssCard'

function CssApp() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <CSSLogos />
            <h1>Vite + React</h1>
            <CssCard count={count} setCount={setCount} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default CssApp
