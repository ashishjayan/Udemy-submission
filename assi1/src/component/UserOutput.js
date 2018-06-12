import React from 'react';
import './output.css';

const UserOutput = (props) => {
    return (

        <div className="UserOutput">
            <p>I like dogs, dogs are cool. I have one</p>
            <p>{props.name}</p>


            </div>

    )
}
export default UserOutput;