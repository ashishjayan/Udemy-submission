import React, {Component} from 'react';
import UserOutput from "./component/UserOutput";
import './App.css';
import UserInput from "./component/UserInput";

class App extends Component {
    state = {
        username: "David"
    }



userNameChangeHandler = event => {
    this.setState({
        username: event.target.value
    });
}

    render()
    {







        return (
            <div className="App">

                    <div>
                        <UserOutput name={this.state.username}/>

                        <UserOutput/>


                        <UserInput changed={this.userNameChangeHandler}/>


                    </div>
            </div>
        );
    }
}

export default App;
