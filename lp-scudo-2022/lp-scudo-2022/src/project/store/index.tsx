
import { FC } from 'react';
import { createContext, useContext } from 'react';
import Store from './Store';

export const getStore = (): Store => (new Store());

const StoreContext = createContext({} as Store);

interface IStoreProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: Store;
}

export const StoreProvider: FC<IStoreProvider> = ({ value, children }): JSX.Element => (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
);

export function useMobxStores(): Store {
    return useContext(StoreContext);
}
