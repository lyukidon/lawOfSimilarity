import React, {useState, useRef} from 'react';
import Froude from './Froude';
import Reynolds from './Reynolds';

function MenuPage(props) {

    const [obj, setObj]=useState([{

    }])

    const [inputs, setInputs]=useState({
        id:0,
        prototype: '',
        model: ''
    }) 

    const {prototype, model} = inputs

    const onChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            ...inputs,
            prototype: '',
            model: ''
        })
    }

    const nextId = useRef(1);

    const onCreate=(datatype)=>{
        const newObject={
            id:nextId.current,
            type:datatype,
            prototype,
            model
        }
        setObj([...obj, newObject])
        setInputs({
            ...inputs,
            prototype:'',
            model:''
        })
        nextId.current++;

        console.log(obj)

    }

    return (
        <div>
            <div>축소 비율</div>
            <div>{model/prototype}</div>
            <input
                type="number"
                name='prototype'
                value={prototype}
                onChange={onChange}
                placeholder='실제 크기 (m)'
            />
            <input 
                type="number"
                name='model'
                value={model}
                onChange={onChange}
                placeholder='축소 크기 (m)'
            />
            <button onClick={onReset} >초기화</button>
            <div>
                <button onClick={()=>onCreate('froude')}>FROUDE NUMBER</button>
            </div>
            <div>
                <button onClick={()=>onCreate('reynolds')}>REYNOLDS NUMBER</button>
            </div>
            <div>
                {
                    obj.map(
                            c => c.type === 'froude'
                            ?
                            <Froude scale={c.model/c.prototype} />
                            :
                            <Reynolds scale={c.model/c.prototype} />
                        )
                }
            </div>
        </div>
    );
}

export default MenuPage;