import {useNavigate} from 'react-router-dom';

import { useRecoilState, useRecoilValue } from "recoil";
import { stimConfigsAtom, activeStimsAtom } from "../state/atoms/stimsAtom";
import EditConfigs from "./EditConfigs";
import { STRING_PARAMS } from "../models/StimConfig";
import {legendStyle, fieldsetStyle} from '../shared/cssVariables';

interface ReadConfigProps {
    name:string
}

const ReadConfigs: React.FC<ReadConfigProps> = ({name})=>{
    const [stim, setStim] = useRecoilState(stimConfigsAtom(name))
    const {tokens, nBack, weight} = stim
    const navigate = useNavigate();

    const [isUsing, setIsUsing] = useRecoilState(activeStimsAtom);
    
    const handleDelete = ()=>{
        setStim(prev=>prev.filter(stim=>stim.name != name));
    }


    const usingStyle = isUsing ?  {opacity:1} : {opacity:0.5}
    const sliderId = 'using-' + name;
    return (        
            <div style={usingStyle} className="card ">
                <div className="card-header">
                    <div className="card-header-title">{name}</div>
                </div>

                <div className = "card-content">
                    <p>Tokens: {tokens}</p>
                    <p>nBack: {nBack}</p>
                    <p>Weight: {weight}</p>
                </div>
            
                <div className="card-footer">
                    <div className="field is-inline-block">
                            <input id={sliderId} type="checkbox" name="isUsing" className="switch "
                            checked={isUsing} onChange={()=>setIsUsing(prev=>!prev)}/>
                            <label  htmlFor={sliderId}></label>
                        </div>
                    <button style={{marginTop:'3.5px'}} className="button is-small" onClick={()=>navigate(`edit-config/${name}`)}>Edit</button>
                    <button style={{marginTop:'3.5px'}} className="button is-small" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )




    
}

export default ReadConfigs;