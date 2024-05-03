import { createContext, useContext } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

export function NotesProvider({ children }) {
  return (
    <NotesContext.Provider>
      <NotesDispatchContext.Provider>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch (){
    return useContext(NotesDispatchContext);
}