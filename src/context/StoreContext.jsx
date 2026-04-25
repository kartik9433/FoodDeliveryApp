import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets1";

export const StoreContext = createContext(null);

const StroreContextProvider = (props)=>{
    const contextValue= {
        food_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
              {props.children}
        </StoreContext.Provider>
    )
}
export default StroreContextProvider;