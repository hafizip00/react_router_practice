import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
  super(props)

  this.state = {
     message : 0
  };

}

increament(){
  // this.setState({
  //   message : this.state.message + 1
  // },()=>{
  // console.log(this.state.message);
  // })

this.setState((preState , props)=>
({
  message : preState.message + 1
})
)


}

increamentByfive(){
  this.increament()
  this.increament()
  this.increament()
  this.increament()
  this.increament()
}

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={this.increamentByfive.bind(this)}>increament</button>
      </div>
    )
  }
}

export default Counter