import React from 'react'

const Fmf = () => {
    let inpu = null;

    let onClick = () => {
        inpu.focus();
    }
    return (
        <>
            <div>
                <span> my NAME</span>

                <input ref={(input) => { inpu = input }} type="text" />


                <input type="submit" value="submit" onClick={onClick} />
            </div>

        </>
    )
}

export default Fmf
