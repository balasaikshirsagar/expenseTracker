import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import { uniqueId } from '../utils';




const transactionData = [

    {   
        id: uniqueId(),
        name: 'Salary',
        amount: 3000,
        type: 'income'
    },

    {   
        id: uniqueId(),
        name: 'Grocery',
        amount: 100,
        type: 'expense'
    },


    {   
        id: uniqueId(),
        name: 'camera',
        amount: 600,
        type: 'expense'
    }



];

function ExpenseTracker(){

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const [transactions, setTransactions] = useState(transactionData);
   
    
    const saveState = () =>{
        localStorage.setItem('expenseTrackerState', JSON.stringify(transactions));

    }


    

    const calculateExpenses = () =>{
        let income =0, expense =0;

        transactions.forEach((data) =>{
            if(data.type === 'income'){
                income = income + data.amount;

            }
            else if(data.type === 'expense'){
                expense = expense + data.amount;
            }
        });

        saveState();


      setIncome(income);
      setExpense(expense);


    }

    const handleAddTransaction = transaction =>{
             let newTransactions = [...transactions, transaction];
             setTransactions(newTransactions);
             calculateExpenses();
             
    }

    const handleDeleteTransaction = id =>{
        console.log(id);
       const newTransactions = transactions.filter((item) => item.id !== id);
         setTransactions(newTransactions);
    }

    useEffect(() =>{
        let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
        if(localState){
            setTransactions(localState);
        }
        else{ 
              calculateExpenses();
            }
     
    }, []);


    useEffect(() =>{
      
        calculateExpenses();
    }, [transactions]);


    


    return(
        <div>
            <h1 id="heading">SAI's Expense Tracker App</h1> 
           <Expense income = {income} expense ={expense}/>
           <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
           <TransactionForm onNewTransaction ={handleAddTransaction}/>
        </div>
    )
}

export default ExpenseTracker;