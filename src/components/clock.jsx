import React from 'react';
import { Ticker } from './ticker';
import { Timer } from './timer';
import { Buddy } from './buddy'

export const Clock = class Clock extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            open: true,
            timer: 1000
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(({open}) => ({
            open: !open
        }))
    }

     render() {
        const { open } = this.state

         return (
            <div className='clock'>
                <button onClick={this.toggle}> {open ? 'Close' : 'Open'} Clock </button>
                {open ? <Ticker name="newClock"/> : null}
                <Timer name="newClock" time={20}/>
                <Buddy name="Albert"/>
            </div>
         )
     }
}