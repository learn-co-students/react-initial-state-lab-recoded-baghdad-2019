// your Bomb code here!
import React from 'react'
export default class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state={
            secondsLeft:props.initialCount
        }
    }
    render(){
      let Text
      if(this.state.secondsLeft!=0){
        Text=`${this.state.secondsLeft} seconds left before I go boom!`
      }
      else {
        Text="Boom!"
      }
      return(
        <div>{Text}</div>
      )
    }
}
