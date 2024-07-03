import  { useReducer, createContext } from 'react';
import { useDefaultContext } from "./defaultContext.jsx";
import { STORAGE_KEY } from '../../const.js';
import { saveToStorage } from '../../utils/localStorage.js';

const AppContext = createContext({
  state: { locale: 'en' }, 
  dispatch: () => null,
});

let reducer = (state, action) => {
    switch (action.type) {
        case "setLocale":
            saveToStorage(STORAGE_KEY, action.locale);
            return { ...state, locale: action.locale };
        default:
            return state;
    }
};

const AppContextProvider = ({ children }) => {
    const defaultContext = useDefaultContext();
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };
