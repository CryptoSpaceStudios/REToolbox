import { createContext } from 'react';

const defaultContextValue = {
  entryFee: 0,
  setEntryFee: () => {},
};

export const EntryFeeContext = createContext(defaultContextValue);
