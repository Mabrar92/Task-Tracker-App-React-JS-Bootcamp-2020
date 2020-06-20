import React, {useContext}from 'react'
import {GlobalState} from '../Context/GlobalState'

export default function Transaction({transaction}) {

const {delete_transaction} = useContext(GlobalState);

    const sign = transaction.amount>0 ? '+' : '-' ;
    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>delete_transaction(transaction.id)} className="delete-btn">x</button>
        </li> )
    
}
