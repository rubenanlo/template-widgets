import { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { widgets } from "@/library/widgets";
import { observable } from "mobx";

const generalStoreContext = createContext(null);

export const GeneralStoreProvider = ({ children }) => {
  const generalState = useLocalObservable(() => ({
    // --- OBSERVABLES ---
    isWidgetsOn: false,
    selectedSource: "bbc-news",
    widgetsDisplay: observable(widgets), // Ensure widgets are deeply observable

    // --- ACTIONS:SETTERS ---
    setIsWidgetsOn(value) {
      this.isWidgetsOn = value;
    },
    setSelectedSource(value) {
      this.selectedSource = value;
    },
    toggleWidgetDisplay(index) {
      this.widgetsDisplay[index].display = !this.widgetsDisplay[index].display;
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
