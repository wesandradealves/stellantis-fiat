
import { FC } from 'react';
import { createContext, useContext } from 'react';
import StradaStore from './StradaStore';

export const getStore = (): StradaStore => (new StradaStore());

const StoreContext = createContext({} as StradaStore);

interface IStoreProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: StradaStore;
}

export const StoreProvider: FC<IStoreProvider> = ({ value, children }): JSX.Element => (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
);

export function useMobxStores(): StradaStore {
    return useContext(StoreContext);
}
