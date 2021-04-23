import React from "react";

export const Display = (props) => {
    return(
        <div className='display'>
            <section>
                <p>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)+ ":"}</p>
            </section>
            <section>
                <p>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2) + ":"}</p>
            </section>
            <section>
                <p>{("0" + ((props.time / 10) % 100)).slice(-2)}</p>
            </section>
        </div>
    );
}