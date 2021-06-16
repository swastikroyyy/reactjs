import React from 'react'

const Props = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <h4>{props.msg}</h4>
            {props.children}

        </div>


    )
}
export default Props;
