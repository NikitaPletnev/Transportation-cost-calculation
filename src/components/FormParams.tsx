import React from 'react';
import {InputElementInterface} from "./interfaces/InputElementInterface";

interface FormParamsInterface {
    title: string;
    elements: InputElementInterface[]
}

const FormParams = ({title, elements}: FormParamsInterface) => {
    return (
        <div>
            <p>{title}</p>
            <label>
                <input className={elements[0].inputClass} name={elements[0].inputClass} type={"number"} required/>
                <i className={elements[0].tooltipClass}/>
            </label>
            <label>
                <input className={elements[1].inputClass} name={elements[1].inputClass} type={"number"} required/>
                <i className={elements[1].tooltipClass}/>
            </label>
        </div>
    )
}

export default FormParams;
