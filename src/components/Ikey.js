import React from 'react'

function Ikey() {
    const name = ['swa', 'guddu', 'swastik', 'swa']
    const namString = name.map((no, index) => <h4 key={index}>{no}{index}</h4>)
    return (
        <div>{namString}</div>
    )
}

export default Ikey
