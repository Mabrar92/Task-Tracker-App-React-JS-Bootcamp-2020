import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpense } from './component/incomeExpense';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';

import {GlobalStateProvider} from './Context/GlobalState';

function App() {
  return (

   <GlobalStateProvider>

   <Header/>
   <div className="container">
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
   </div>

   </GlobalStateProvider>

  );
}

export default App;
