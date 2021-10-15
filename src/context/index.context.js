import React, { useState, createContext } from 'react';
export const LhotseContext = createContext(null);

const LhotseContextProvider = ({ children }) => {
    let [darkTheme, setTheme] = useState(false);
    let [base64File, setBase64] = useState('');
    let [fileName, setFileName] = useState('');


    return (
        <LhotseContext.Provider
            value={{
                darkTheme, setTheme,
                fileName, setFileName,
                base64File, setBase64
            }}
        >
            {children}
        </LhotseContext.Provider>
    )

};

export default LhotseContextProvider;
