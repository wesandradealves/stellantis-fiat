
import { FC } from 'react';
import { createContext, useContext } from 'react';
import FastbackStore from "./FastbackStore";

export const getStore = (): FastbackStore => (new FastbackStore());

const StoreContext = createContext({} as FastbackStore);

interface IStoreProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: FastbackStore;
}

export const StoreProvider: FC<IStoreProvider> = ({ value, children }): JSX.Element => (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
);

export function useMobxStores(): FastbackStore {
    return useContext(StoreContext);
}
