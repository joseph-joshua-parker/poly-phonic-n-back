import { useState } from "react";
import { StimConfig } from "../models/StimConfig";

import DeltaButton from "./DeltaButton";

import { stimAtom } from "../state/atoms/stimsAtom";
import {useRecoilState} from 'recoil';

interface StimConfigProp {
    atomId:string
}

const StimConfig: React.FC<StimConfigProp> = ({atomId})=>{

    const [isEditing, setIsEditing] = useState(false);
    const toggleEditing = ()=>setIsEditing(oldEditingState=>!oldEditingState);
    const [stim, setStim] = useRecoilState(stimAtom(atomId))
    const {name, tokens, weight, nBack} = stim;


    const deltaNBack = (val: number)=> setStim(oldStim  => {return {...oldStim, nBack: val+oldStim.nBack}})    
    const deltaWeight = (val: number)=> setStim(oldStim => {return {...oldStim, weight: val+oldStim.weight}})

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        toggleEditing();
        
    }

    const readStim = <>
                        <div>Tokens: {tokens}</div>
                        <div>nBack: {nBack}</div>
                        <div>Weight: {weight}</div>
                     </>

    const writeStim =   <div>
                            <div>
                                <label>
                                    Name:
                                    <input value={name} onChange={(e)=>setStim({...stim, name: e.target.value})} type="text" name="name"/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Tokens:
                                    <input value={tokens} onChange={(e)=>setStim({...stim, tokens: e.target.value})}  type="number" name="tokens"/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    nBack:
                                    <button onClick={()=>deltaNBack(-1)}>-1</button>
                                    <input value={nBack} onChange={(e)=>setStim({...stim, nBack: parseInt(e.target.value)})} type="number" name="nback"/>
                                    <button onClick={()=>deltaNBack(1)}>+1</button>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Weight:
                                    <button onClick={()=>deltaWeight(-1)}>-1</button>
                                    <input value={weight} onChange={(e)=>setStim({...stim, weight: parseInt(e.target.value)})} type="number" name="weight"/>
                                    <button onClick={()=>deltaWeight(-1)}>+1</button>
                                </label>
                            </div>

                            <button onClick={toggleEditing}>Done</button>
                        </div>


   return (
        <div>
            <h2>{name}: </h2><button onClick={toggleEditing} ></button>
            {!isEditing
                ? readStim
                : writeStim
            }
        </div>


   ) 
}

export default StimConfig;