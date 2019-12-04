import React from 'react';

const Expense = ({expense}) => {
   /*  removeExpense=id=>{
        
    } */
    return (
        <li className="gastos">
            <p>
                {expense.spendingName}
                    <span className="gasto">$ {expense.amountSpent}</span>
                    {/* <button type="button" onClick={()=>removeExpense(expense.id)}>Delete</button> */}
            </p>
        </li>
    );
};

export default Expense;