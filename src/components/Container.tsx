import React, {FormEvent, useState} from 'react';
import '../styles/Container.css'
import '../styles/Inputs.css'
import {calculateCost} from "../api/helper";
import FormParams from "./FormParams";
import {InputElementInterface} from "./interfaces/InputElementInterface";
import Loader from "./Loader";

const Container = () => {

    const [loading, setLoading] = useState(false);
    const [cost, setCost] = useState('');

    const inputElements: InputElementInterface[] = [
        {inputClass: 'numbers_kilometers', tooltipClass: 'tool_tip_1'},
        {inputClass: 'price_kilometers', tooltipClass: 'tool_tip_2'},
        {inputClass: 'number_hours', tooltipClass: 'tool_tip_3'},
        {inputClass: 'price_hours', tooltipClass: 'tool_tip_4'},
    ]

    const getCost = (e: FormEvent<any>): void => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target as any).entries());
        setLoading(true)
        calculateCost(formData).then((response) => {
            response.json().then((resource) => {
                setCost(resource?.result || 0);
                setLoading(false)
            })
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        })
    }

    const renderCost = () => {
        if (loading) {
            return <Loader/>
        }
        return (
            <span className={(!!cost.length || parseInt(cost) <= 0) ? 'disadvantageous' : 'profitable'}>
                        {cost}
                    </span>
        )
    }

    return (
        <section>
            <form onSubmit={getCost}>
                <div>
                    <FormParams title={'Distance parameters'} elements={inputElements.slice(0, 2)}/>
                    <FormParams title={'Time parameters'} elements={inputElements.slice(2, 4)}/>
                </div>
                <p>Total income</p>
                <label>
                    <input className='total_income' name={'total_income'} type={"number"} required/>
                    <i className='tool_tip_5'/>
                </label>
                <button type={"submit"}>Calculate cost</button>
                <p className='cost'>Transportation cost:&nbsp;
                    {renderCost()}
                </p>
            </form>
        </section>
    )
}

export default Container;
