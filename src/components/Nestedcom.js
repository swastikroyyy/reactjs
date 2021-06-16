import React from 'react'

const data = [
    {
        name: 'swas',
        email: 'swastik.roy@gmail.com'
    },
    {
        name: 'swastik',
        email: 'swastik.roy1995@gmail.com'
    },
    {
        name: 'subb',
        email: 'swubbb.roy1995@gmail.com'
    }
];
const Contact = (props) =>
    <div>
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>
    </div>

export default function Nestedcom() {
    return (
        <div>

            {data.map(info =>
                <Contact {...info} />
            )}


        </div>
    )
}
