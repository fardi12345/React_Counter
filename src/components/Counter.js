import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {

    state={
        count:0,
    }

    add=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    remove=()=>{
        this.setState({
            count:0,
        })
    }
    reduce=()=>{
        this.setState({
            count:this.state.count-1
        })
        if(this.state.count===0)
        {
            this.setState({
                count:0
            })
        }
    }
    render() {
        return (
            <div>

                 <h2 className="mt-5">Counter</h2>

                  <p className="mt-4"><b>{this.state.count}</b></p>
                  <button onClick={this.add}  className="btn btn-primary btn_plus">+</button>
                  <button disabled={!this.state.count} onClick={this.remove} className="btn btn-danger ml-5 btn_0">0-la</  button>
                  <button disabled={!this.state.count} onClick={this.reduce}  className="btn btn-primary btn_minus ml-5" id="minus">-</button>
            </div>
        )
    }
}

export default Counter;