import { useState } from "react";
import React from 'react';

function Froude(props) {
    const {prototype, model, scale} = props

    const [data, setData]=useState({

    })

    const onChange=e=>{
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    
    return (
        <div>
            <div>Scale(축척): {model}/{prototype} {scale}</div>
            <div className="Geometrical Similarity">
                <div>Length(길이): 
                    <input type="text" name="length" onChange={onChange} />
                    {data.length * scale}
                </div>
                <div>Area(면적): 
                    <input type="text" name="area" onChange={onChange} />
                    {data.area * scale**2}
                </div>
                <div>Volumn(체적): 
                    <input type="text" name="volumn" onChange={onChange} />
                    {data.volumn * scale**3}
                </div>
            </div>
            <div className="Kinematic Similarity">
                <div>
                    Time(시간): 
                    <input type="text" name="time" onChange={onChange} />
                    {data.time * scale**(1/2)}
                    </div>
                <div>Velocity(속도): 
                    <input type="text" name="velocity" onChange={onChange} />
                    {data.velocity * scale**(1/2)}
                    </div>
                <div>가속도: 1
                    
                        </div>
                <div>Discharge(유량): 
                    <input type="text" name="discharge" onChange={onChange} />
                    {data.discharge * scale**(5/2)}
                    </div>
                <div>각속도: 
                    <input type="text" name="angularVelocity" onChange={onChange} />
                    {data.angualrVelocity * scale**(-1/2)}
                    </div>
                <div>각가속도: 
                    <input type="text" name="angularAcceleration" onChange={onChange} />
                    {data.angualrAcceleration * scale**(-1)}
                    </div>
            </div>
            <div className="Dynamic Similarity">
                <div>힘: 
                    <input type="text" name="force" onChange={onChange} />
                    {data.force * scale**(3)}
                    </div>
                <div>질량: 
                    <input type="text" name="mass" onChange={onChange} />
                    {data.mass * scale**(3)}
                    </div>
                <div>일: 
                    <input type="text" name="work" onChange={onChange} />
                    {data.work * scale**(4)}
                    </div>
                <div>동력: 
                    <input type="text" name="power" onChange={onChange} />
                    {data.power * scale**(7/2)}
                    </div>
            </div>
        </div>
    );
}

export default Froude;