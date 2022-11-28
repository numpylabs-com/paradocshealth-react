import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    uploadModel:false,
    addModel:false,
};
export const ModelContext = createContext(INITIAL_STATE);

export const ModelContextProvider = ({children}) =>{
    
    const userReducer = (state, action) => {
        switch(action.type){
            case "UPLOAD_MODEL":
                return {
                   uploadModel:!state.uploadModel,
                };
            case "ADD_MODEL":
                return {
                   addModel:!state.addModel,
                };
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE) 
    
    const value={
        uploadModel:state.uploadModel,
        addModel:state.addModel,
        dispatch
    }
    return (
        <ModelContext.Provider value={value}>
            {children}
        </ModelContext.Provider>
    );
}