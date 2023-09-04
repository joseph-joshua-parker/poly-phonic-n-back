import { ReactNode } from "react";
import { SetterOrUpdater } from "recoil";
import { Dispatch, SetStateAction } from "react";

interface DeltaProps {
    children: string;
    setState:  Dispatch<SetStateAction<number>> | SetterOrUpdater<number>
}

const DeltaButton: React.FC<DeltaProps> = ({children, setState})=>{
    return <button onClick={()=>setState((val)=>val+parseInt(children))} > {children}</button>
}

export default DeltaButton;