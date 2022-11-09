import { createContext } from "react";

interface AppContextInterface {
  name: {}
}

export const CartContextData = createContext<string>('');

//provider para envelopar toda a aplicação
export const DataProvider = ({children}:any) => {
  return  (
    <CartContextData.Provider value={'teste'}>
      {children}
    </CartContextData.Provider>
  )
}