import React, { useEffect, useState } from 'react';

export const Ticker = () => {
    const array = useState(new Date())
    const current = array[0];
    const setCurrent = array[1]

    // componentDidMount() {
    //     this.ticker = setInterval(() => {
    //         this.setState({
    //             date: new Date()
    //         })
    //     }, 1000);
    // }

// выполняется когда компонент удаляется из дома
    // componentWillUnmount() {
    //     clearInterval(this.ticker)
    // }

    useEffect(() => {
        console.log('mounted')
        const ticker =  setInterval(() => {
            setCurrent(new Date())
        }, 1000)

        return () => {
            console.log('unMounted')
            clearInterval(ticker)
        }
    }, [setCurrent])

    return (
        <time>{current.toLocaleTimeString()}</time>
     )
}