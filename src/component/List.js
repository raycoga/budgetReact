import React from 'react';
import Expense from './expense'
const List = ({expenses}) => {
    return (
       <div className="gastos-realizados">
           <h2>List</h2>
           {expenses.map(res=>{
               return(
<Expense  key={res.id} expense={res}/>
               )
           })}
       </div>
    );
};

export default List;