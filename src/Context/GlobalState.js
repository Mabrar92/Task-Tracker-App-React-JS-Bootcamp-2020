import React, { createContext,useReducer } from 'react'

import AppReducer from './AppReducer'

//initial state
const initialState = {

    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
]

}
//create context 
export const GlobalState=createContext(initialState);

//provider

export const GlobalStateProvider = ({children}) =>
{
    const [state,dispatch] = useReducer(AppReducer , initialState)
    
    //Actions
    function delete_transaction (id) {

        dispatch ({
            type : 'DELETE_TRANSACTION',
            payload : id

        });
    }

        function add_transaction (transaction) {

            dispatch({
                type : 'ADD_TRANSACTION',
                payload : transaction
            });
        }

    return (
    <GlobalState.Provider value={{
        transactions: state.transactions,
        delete_transaction,
        add_transaction
        }}>
            {children}

    </GlobalState.Provider>

    )
}