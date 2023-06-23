import { ReactNode } from "react";

interface DeltaProps {
    children: string;
}

const DeltaButton: React.FC<DeltaProps> = ({children})=>{
    return <button>{children}</button>
}

export default DeltaButton;