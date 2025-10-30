import React from "react";

function Statehandling() {
    const[state, setState] = React.useState(20);
     
    function increasecounter() {
        setState(state + 5);
    }
    return (
        <div>
            <h1>State Handling Component</h1>
            <h2>counter value</h2>
            <button onclick={increasecounter}>increase value </button>
            <button onclick={() => setState(state - 5)}>decrease value </button>
            
        </div>
    )
}   
export default Statehandling;