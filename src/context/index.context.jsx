import React, { createContext, useState } from 'react';
export const LhotseContext = createContext(null);

const LhotseContextProvider = ({ children }) => {
    let [theme, setTheme] = useState('light');
    let [base64File, setBase64] = useState('');
    let [fileName, setFileName] = useState('');


    return (
        <LhotseContext.Provider
            value={{
                theme, setTheme,
                fileName, setFileName,
                base64File, setBase64
            }}
        >
            {children}
        </LhotseContext.Provider>
    )

};

export default LhotseContextProvider;
