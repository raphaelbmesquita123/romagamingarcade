import { createContext, ReactNode, useContext, useState } from 'react'

export const ApplicationContext = createContext({})

export function ApplicationContextProvider ({ children }) {


    return(
        
        <ApplicationContext.Provider
        value={{}}>

            { children } 
        </ApplicationContext.Provider>
    )
}

export const Application = () => {
    return useContext(ApplicationContext)
}