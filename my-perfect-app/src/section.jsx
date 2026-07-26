import { LevelContext } from "./levelcontext.jsx"


export default function Section ({children , level}){
    return(
    
        <section>
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
        
        
    )
}