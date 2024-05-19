import React from 'react';

function TransactionHistory({transactions, onDeleteTransaction}){
    return(
        <>
        <h2 id="transhistory">Transaction History</h2>

        <ul id="translist"> 

            {
                transactions.map((data) =>  <li key={data.id}> {data.type ==="income"?" + ":" - "}{data.name}  ${data.amount} <button className='btn btn-success ms-5 mt-2' onClick={()=>onDeleteTransaction(data.id)}>X</button></li>
                )
            }
         

        </ul>
        </>
    )
}

export default TransactionHistory;