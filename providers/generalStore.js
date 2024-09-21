import { useLocalObservable } from "mobx-react-lite";
import { createContext, useContext } from "react";

const generalStoreContext = createContext(null);

export const GeneralStoreProvider = ({ children }) => {
  const generalState = useLocalObservable(() => ({
    // --- OBSERVABLES ---
    isWidgetsOn: false, // to state when to trigger the loading animation (only applicable to move from index to slug)

    // --- ACTIONS:SETTERS ---
    setIsWidgetsOn(value) {
      this.isWidgetsOn = value;
    },
  }));

  return (
    <generalStoreContext.Provider value={generalState}>
      {children}
    </generalStoreContext.Provider>
  );
};

export const useGeneralStore = () => {
  const state = useContext(generalStoreContext);
  if (!state)
    throw new Error(
      "Cannot use useGeneralStore outside of GeneralStoreContext",
    );
  return state;
};
