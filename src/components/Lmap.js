import React from 'react'
import Stu from './Stu'

function Lmap() {
    const students = [
        {
            roll: 1,
            name: 'swas',


            stream: 'MCA'
        },
        {
            roll: 2,
            name: 'swastik',


            stream: 'CA'
        },
        {
            roll: 3,
            name: 'som',


            stream: 'BCA'
        },
        {
            roll: 9,
            name: 'andha',


            stream: 'MOney'
        }
    ]
    const naList = students.map(stu => <Stu key={stu.roll} stu={stu} />)
    return <div>{naList}</div>
}

export default Lmap
