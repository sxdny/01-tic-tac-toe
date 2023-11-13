import { useState } from 'react';

export function Cell({ key }) {
    
    const [isSelected, setisSelected] = useState(false);

    // al darle click, cambiamos el estado
    const handleClick = () => {
        setisSelected(!isSelected);
    }

    const text = isSelected ? '❌' : '⚪';
    const cellClassName = isSelected
        ? 'cellContent isSelected'
        : 'cellContent'

    return (
        <button className={cellClassName} onClick={handleClick}>
            {text}
        </button>
    )
}