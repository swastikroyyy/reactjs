import React, { Component } from 'react'

class Cstate extends Component {
    state = {
        users: [

            { id: 1, name: 'swas', strm: 'mca' },
            { id: 2, name: 'swastik', strm: 'bca' }
        ]

    }
    render() {
        const nUser = this.state.users.map(user => {
            return (
                <h2>{user.id}
                    { user.name}
                </h2>
            )

        });
        return (
            <>{nUser}
            </>
        )

    }

}


export default Cstate
