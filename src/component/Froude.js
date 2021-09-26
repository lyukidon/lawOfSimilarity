import React from 'react';

function froude(props) {
    const {prototype, model, scale} = props
    return (
        <div>
            <div>Scale(축척): {scale}</div>
            <div className="Geometrical Similarity">
                <div>Length(길이): {prototype * scale}</div>
                <div>Area(면적): {prototype * scale**2}</div>
                <div>Volumn(체적): {prototype * scale**3}</div>
            </div>
            <div className="Kinematic Similarity">
                 {/* data위치에 각각의 값을 넣어야함..  */}
                <div>Time(시간): { data * scale**(1/2)}</div>
                <div>Velocity(속도): { data * scale**(1/2)}</div>
                <div>가속도: 1</div>
                <div>Discharge(유량): { data * scale**(5/2)}</div>
                <div>각속도: { data * scale**(-1/2)}</div>
                <div>각가속도: { data * scale**(-1)}</div>
            </div>
            <div className="Dynamic Similarity">
                <div>힘: { data * scale**(3)}</div>
                <div>질량: { data * scale**(3)}</div>
                <div>일: { data * scale**(4)}</div>
                <div>동력: { data * scale**(7/2)}</div>
            </div>
        </div>
    );
}

export default froude