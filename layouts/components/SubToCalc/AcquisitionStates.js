import React from 'react';

export const PurchasePriceContext = React.createContext({
  purchasePrice: '',
  setPurchasePrice: () => {},
});

export const MortgageBalanceContext = React.createContext({
  mortgageBalance: '',
  setMortgageBalance: () => {},
});

export const MortgagePiContext = React.createContext({
  mortgagePi: '',
  setMortgagePi: () => {},
});

export const MortgageInterestContext = React.createContext({
  mortgageInterest: '',
  setMortgageInterest: () => {},
});
