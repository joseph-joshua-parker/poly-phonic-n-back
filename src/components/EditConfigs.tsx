
import {NUM_PARAMS, STRING_PARAMS} from '../models/StimConfig';
import useConfigForm from '../hooks/useConfigForm';
import {useParams, useNavigate} from 'react-router-dom';



const EditConfigs = ()=>{
 
    let name = useParams().name ?? 'new';
    const navigate = useNavigate();
    const {config, setConfig, handleInput, handleDelta, addStimConfig} = useConfigForm(name);
    console.log(config);
    const {tokens, nBack, weight} = config;


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        navigate(-1);
        addStimConfig();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label className="label is-small "  htmlFor="name">Name</label>
                <div className="control">
                    <input style={{width:'55%'}} className="input  is-small" value={config.name} id="name" onChange={handleInput} type="text" name="name"/>
                </div>
    
            
                <label className=" label is-small " htmlFor="tokens">Tokens</label>
                <div className="control" >
                    <input style={{width:'55%'}} className="input is-small" value={tokens} id="tokens" onChange={handleInput} type="text" name="tokens"/>
                </div>

            
                <label className="label is-small " htmlFor="nBack">nBack</label>
                <div className="control ">
                    <button className="button is-small " type="button" onClick={()=>handleDelta(NUM_PARAMS.nBack, -1)}>-1</button>
                    <input style={{width:'33%'}} className=" is-small input " value={nBack} id="nBack" onChange={handleInput} type="number" name="nback"/>
                    <button className="button is-small "  type="button" onClick={()=>handleDelta(NUM_PARAMS.nBack, +1)}>+1</button>
                </div>
            
                <label className="label is-small"  htmlFor="weight">Weight</label>
                <div className="control">
                    <button className="button is-small" type="button" onClick={()=>handleDelta(NUM_PARAMS.Weight, -1)}>-1</button>
                    <input style={{width:'33%'}} className="is-small input" value={weight} id="weight" onChange={handleInput} type="number" name="weight"/>
                    <button className="button is-small" type="button" onClick={()=>handleDelta(NUM_PARAMS.Weight, +1)}>+1</button>
                </div>

                <div className="control ">
                    <button className="button  is-small" type="button" onClick={()=>(navigate(-1))}>Cancel</button>
                    <button className="button  is-small" disabled={!name} type="submit">Submit</button>
                </div>
            </div>
        </form> 
    )
}


export default EditConfigs;