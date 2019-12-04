import React, { useState, useEffect } from 'react';
import Ask from './component/Ask'
import Form from './component/Form'
import List from './component/List'
import BudgetControl from './component/BudgetControl'
function App() {
  const [budget, setBudget] = useState(0)
  const [remaining, setremaining] = useState(0)
  const [askBudget, setaskBudget] = useState(true)
  const [createExpense, setcreateExpense] = useState(false)
  const [expense, setexpense] = useState({})
  const [expenses, setexpenses] = useState([])

  useEffect(() => {
    if(createExpense){
      let aux = [...expenses, expense]
      setexpenses(aux)

      const remainingBudget = remaining - expense.amountSpent
      setremaining(remainingBudget)
      setcreateExpense(false)
    }
  }, [expense,createExpense,expenses,remaining]);

  return (
    <div className="App container">
      <header>
        <h1> Weekly expenses</h1>
        <div className="contenido-principal contenido">
          {askBudget ? <Ask setBudget={setBudget} setaskBudget={setaskBudget} setremaining={setremaining} /> : (
            <div className="row">
              <div className="one-half column">
                <Form setexpense={setexpense}  setcreateExpense={setcreateExpense}/>
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}

        </div>
      </header>
    </div>
  );
}

export default App;
