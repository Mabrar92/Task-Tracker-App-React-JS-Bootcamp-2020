import React ,{useContext} from 'react'
import {GlobalState} from '../Context/GlobalState'
import Transaction from './Transaction'

export const TransactionList = () => {
  const {transactions}  = useContext(GlobalState);

    return (
        <>
              <h3>History</h3>
      <ul  className="list">
         {transactions.map(transaction => (<Transaction  Key={transaction.id} transaction={transaction}/>)) }
    
      </ul>
        </>
    )
}
