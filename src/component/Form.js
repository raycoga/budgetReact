import React,{useState} from 'react';
import Error from './error'
import shortid from 'shortid'

const Form = (props) => {
    const {setexpense,setcreateExpense}=props
    const [spendingName, setspendingName] = useState("")
    const [amountSpent, setamountSpent] = useState("")
    const [error, seterror] = useState(false)
 
    const addSpent=e=>{
        e.preventDefault()

        if (amountSpent <= 0 || isNaN(amountSpent) || amountSpent === null || spendingName==='') {
            seterror(true)
            return
        } 

        setexpense({
            spendingName:spendingName,
            amountSpent:amountSpent,
            id:shortid.generate(),
        })
        setcreateExpense(true)
        seterror(false)
        setspendingName("")
        setamountSpent("")
    }

    return (
        <form onSubmit={addSpent}>
            <h2>Add your expenses here</h2>
            <Error error={error} message='Both fields are required or Wrong Budget' />
            <div className="campo">
                <label >Spending Name</label>
                <input type="text" className='u-full-width' placeholder="EG Transport" onChange={e=>setspendingName(e.target.value)} value={spendingName}/>
            </div>
            <div className="campo">
                <label >Amount spent</label>
                <input type="text" className='u-full-width' placeholder="EG 300" onChange={e=>setamountSpent(parseInt(e.target.value,10))} value={amountSpent}/>
            </div>
            <input type="submit" className='button-primary u-full-width' value='Add Expense'/>
        </form>
    );
};

export default Form;