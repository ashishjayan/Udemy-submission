import React from 'react';


const UserInput = (props) => {
    return (

        <div><input onChange={props.changed} value={props.username}/> </div>

    )
}

export default UserInput;