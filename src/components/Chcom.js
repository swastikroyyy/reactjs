import React from 'react'

function Chcom(props) {
    return (
        <div>
            <button onClick={() => props.grt('child')}>greet</button>
        </div>
    )
}

export default Chcom
