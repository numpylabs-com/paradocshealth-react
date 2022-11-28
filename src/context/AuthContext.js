import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    user:null,
    isloading:false
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    
    const userReducer = (state, action) => {
        switch(action.type){
            case "LOADING":
                return {
                   isloading:true
                }
            case "LOGIN":
                return {
                   ...state,
                   user:action.payload.provider_id,
                   isloading:false
                };
            case "LOGIN_FAIL":
                return{
                    ...state,
                    isloading:false
                }
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE) 
    
    const value={
        user:state.user,
        isloading:state.isloading,
        dispatch
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}