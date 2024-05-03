import { createContext } from "react";


const NotesContext = createContext(null);

export function NotesProvider(){
    return(
        <NotesContext.Provider value={}>

        </NotesContext.Provider>
    )
}