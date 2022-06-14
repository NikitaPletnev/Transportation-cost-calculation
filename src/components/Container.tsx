import React from 'react';
import '../styles/Container.css'
import '../styles/Inputs.css'

const Container = () => {
    return (
        <section>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = Object.fromEntries(new FormData(e.target as any).entries())
                console.log(formData);
            }}>
                <div>
                    <div>
                        <p>Distance parameters </p>
                        <input className='numbers-kilometers' name={'numbers-kilometers'} type={"number"} required/>
                        <i className='tool-tip-1'/>
                        <input className='price-kilometers' name={'price-kilometers'} type={"number"} required/>
                        <i className='tool-tip-2'/>
                    </div>
                    <div>
                        <p>Time parameters</p>
                        <input className='number-hours' name={'number-hours'} type={"number"} required/>
                        <i className='tool-tip-3'/>
                        <input className='price-hours' name={'price-hours'} type={"number"} required/>
                        <i className='tool-tip-4'/>
                    </div>
                </div>
                <p>Total income</p>
                <input className='total-income' name={'total-income'} type={"number"} required/>
                <i className='tool-tip-5'/>
                <button type={"submit"}>Calculate cost</button>
            <p className='cost'>Transportation cost: </p>
            </form>
        </section>
    )
}

export default Container;
