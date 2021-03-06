import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { NamedAPIResourceList, Pokemon } from "pokenode-ts";

const initialState: any = {
  searchText: "",
  useDreamWorldSprites: false,
  pokemonList: {} as NamedAPIResourceList,
  pokemon: [] as Pokemon[],
};

const Store = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
