import React from 'react';

function froude(props) {
    return (
        <div>
            <div>
                Scale: {props.scale}
            </div>
            <div>
                Length: {props.scale}
            </div>
            <div>
                Area: {props.scale**2}
            </div>
            <div>
                Volume: {props.scale**3}
            </div>
            <div>
                Time: {props.scale**(1/2)}
            </div>
            <div>
                Velocity: {props.scale**(1/2)}
            </div>
            <div>
                Discharge: {props.scale**(5/2)}
            </div>
            <div>
                Pressure: {props.scale}
            </div>
            <div>
                Manning'n: {props.scale**(1/6)}
            </div>
        </div>
    );
}

export default froude