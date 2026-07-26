import { useContext } from "react"
import  { LevelContext} from './levelcontext.jsx';

export  function Heading({children}){
    const levelCon = useContext(LevelContext);
    
  
       switch (levelCon) {
        case 1:
            return <h1>{children}</h1>;
            case 2:
            return <h2>{children}</h2>;
            
            case 3:
            return <h3>{children}</h3>;
            
          default:
            return <p>error</p>

          
       
        
            
       
       }
    
}