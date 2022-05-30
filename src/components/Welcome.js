import react , {Component} from "react";

class Welcome extends Component{

    constructor(){
        super()
        this.state = {message : "Welcome Visitor",
                        name : "JBH"
    };
    }

    render(){
        return (
            <div>
                <h1>Welcom {this.state.name } and {this.state.message} </h1>
            </div>
        )
    }
}

export default Welcome;