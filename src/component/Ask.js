import React, { Fragment, useState } from 'react';
import Error from './error'
const Ask = (props) => {
const{setBudget,setaskBudget,setremaining}=props
    const [quantity, setquantity] = useState(0)
    const [error, seterror] = useState(false)

    const addBudget = e => {
        e.preventDefault()
        if (quantity <= 0 || isNaN(quantity) || quantity === null) {
            seterror(true)
            return
        } 
        seterror(false)
        setBudget(quantity)
        setremaining(quantity)
        setaskBudget(false)
    }

    return (
        <Fragment>
            <h2> Set your budget</h2>
            <Error error={error}  />
            <form onSubmit={addBudget} message='The budget is wrong'>
                <input type="number" className="u-full-width" placeholder="Add your budget" onChange={e => setquantity(parseInt(e.target.value, 10))} />
                <input type="submit" className="button-primary u-full-width" value="Define budget" />
            </form>
        </Fragment>
    );
};

export default Ask;