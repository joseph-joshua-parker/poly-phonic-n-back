import DeltaButton from "./DeltaButton";
import useConfigForm from "../hooks/useConfigForm";

const ConfigForm  = ()=>{

    const {config, setConfig, handleChange, deltaParam} = useConfigForm();
    const {name, tokens, nBack, weight} = config;

    return (
        <div>
            <div>
                <label>
                    Name:
                    <input value={name} id="name" onChange={handleChange} type="text" name="name"/>
                </label>
            </div>
    
            <div>
                <label>
                    Tokens:
                    <input value={tokens} id="tokens" onChange={handleChange} type="text" name="tokens"/>
                </label>
            </div>

            <div>
                <label>
                    nBack:
                    <DeltaButton setState={()=>deltaParam('nBack', nBack-1)}>-1</DeltaButton>
                    <input value={nBack} id="nBack" onChange={handleChange} type="number" name="nback"/>
                    <DeltaButton setState={()=>deltaParam('nBack', nBack+1)}>+1</DeltaButton>
                </label>
            </div>

            <div>
                <label>
                    Weight:
                    <DeltaButton setState={()=>deltaParam('weight', weight-1)}>-1</DeltaButton>
                    <input value={weight} id="weight" onChange={handleChange} type="number" name="weight"/>
                    <DeltaButton setState ={()=>deltaParam('weight', weight-1)}>+1</DeltaButton>
                </label>
            </div>
        </div> 
        )
 }