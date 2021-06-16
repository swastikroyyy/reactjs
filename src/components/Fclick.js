import React from 'react'

function Fclick() {
    function change(e) {


        e.preventDefault();


        console.log("hello")
    }


    return (
        <>
            <a href="https://reactjs.org/docs/handling-events.html" onClick={change}>click</a>
            <h1>heyyy how r u?</h1>


        </>
    )
}

export default Fclick
