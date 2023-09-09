
import { FC } from 'react';
import { createContext, useContext } from 'react';
import PulseStore from './PulseStore';

export const getStore = (): PulseStore => (new PulseStore());

const StoreContext = createContext({} as PulseStore);

interface IStoreProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: PulseStore;
}

export const StoreProvider: FC<IStoreProvider> = ({ value, children }): JSX.Element => (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
);

export function useMobxStores(): PulseStore {
    return useContext(StoreContext);
}
