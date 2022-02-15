import React from 'react';
import './button.css';
function Button({ label }) {
    return (<div data-testid="buttonID" className="button-style">
        mode {label}
    </div>);
}

export default Button