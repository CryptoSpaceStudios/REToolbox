// SubToCalcStates.js
import React, { createContext } from 'react';

const createNumberContext = (defaultValue = '') => createContext({
  value: defaultValue,
  setValue: () => {},
});

/* Entry Fee Form States */
export const EntryFeeContext = createContext({
    entryFee: 0,
    setEntryFee: () => {},
});

export const SellerPaymentContext = createNumberContext();
export const ClosingTitleCostsContext = createNumberContext();
export const LeadCostsContext = createNumberContext();
export const PaymentsOwedContext = createNumberContext();
export const PrepCostsContext = createNumberContext();
export const HoldTimeCostsContext = createNumberContext();
export const MarketingFeesContext = createNumberContext();

/* Acquisition Form States */
export const PurchasePriceContext = createNumberContext();
export const MortgageBalanceContext = createNumberContext();
export const MortgagePiContext = createNumberContext();
export const MortgageInterestContext = createNumberContext();
