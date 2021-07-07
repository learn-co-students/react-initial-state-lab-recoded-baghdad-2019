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
        let divText
        if(this.state.secondsLeft>0){
            divText=`${this.state.secondsLeft} seconds left before I go boom!`
        }else{
            divText="Boom!"
        }
        return(
            <div>
             {divText}
            </div>
        )
    }
}