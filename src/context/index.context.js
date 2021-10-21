import { useState, createContext } from 'react';
export const LhotseContext = createContext(null);

const LhotseContextProvider = ({ children }) => {
    const [darkTheme, setTheme] = useState(false);
    const [base64File, setBase64] = useState('');
    const [fileName, setFileName] = useState('');


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
