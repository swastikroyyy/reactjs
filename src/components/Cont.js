import React from 'react'

const Cont = (props) => {
    console.log(props);
    const renderCont = props.contacts.map((contact) => {
        return (
            <div>
                <div>{contact.name}</div>
                <div>{contact.password}</div>
            </div>
        )
    })
    return (
        <div>
            <h2>{renderCont}</h2>

        </div>
    )
}

export default Cont
