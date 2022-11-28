import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    user:null,
    patientsStats:null,
    notes:"",
    pdfUrl:"",
    patientsInfo:[],
    criteria:[],
    activeData:{},
    loading: false,
    
};
export const DataContext = createContext(INITIAL_STATE);

export const DataContextProvider = ({children}) =>{
    const dataReducer = (state, action) => {
        switch(action.type){
            case "LOADING":
                return {
                  loading: true
                }
            case "CRITERIA":
                return {
                    ...state,
                    criteria:action.payload 
                }
            case "LOAD_DATA":
                return {
                   ...state,
                   patientsStats:action.payload,
                   loading: false
                };
            case "LOAD_PATIENTS":
                return {
                   ...state,
                   patientsInfo:action.payload
                };
            case "ACTIVE_PATIENT":
                return {
                   ...state,
                   activeData:action.payload
                };
            case "GET_NOTES":
                return {
                   ...state,
                   notes:action.payload.provider_full_notes
                };
            case "GET_PDF":
                return {
                   ...state,
                   pdfUrl:action.payload.pdfURL
                };
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(dataReducer,INITIAL_STATE) 
    
    const value={
        user:state.user,
        patientsInfo:state.patientsInfo,
        patientsStats:state.patientsStats,
        notes:state.notes,
        pdfUrl: state.pdfUrl,
        criteria:state.criteria,
        activeData:state.activeData,
        loading: state.loading,
        dispatch
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}