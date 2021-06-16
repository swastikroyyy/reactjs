import React, { Component } from 'react'

class Cmap extends Component {


    render() {
        const nums = [2, 3, 4, 5];
        //const ns = nums.map((noo, index) => <h1 key={index}>{noo}</h1>)
        return (
            <>
                <ul>
                    {

                        nums.map((nums) => <li>{nums}</li>)
                    }


                </ul>
            </>
        )
    }
}

export default Cmap
