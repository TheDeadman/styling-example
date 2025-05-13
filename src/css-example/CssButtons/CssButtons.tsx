import { memo } from 'react';
import './cssButtons.css';

const CssButtons = memo(() => {

    return (
        <div className="theme-buttons-container">
            <button>One</button>
            <button>Two</button>
        </div>
    )
});
CssButtons.displayName = "CssButtons";

export default CssButtons;