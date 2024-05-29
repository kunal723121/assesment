import { createContext, useContext ,useState} from "react"

let context=createContext()

let useAuth=()=>{
    return useContext(context)
}

let Auth=({children})=>{
    let[id,updateid]=useState(()=>{
        return localStorage.getItem("id")=="true";
    })
    return <context.Provider value={{id,updateid}}>
        {children}
    </context.Provider>
}
export {Auth,context,useAuth}