import {useState} from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { stimsArrayAtom, stimAtom } from '../state/atoms/stimsAtom';


import DeltaButton from './DeltaButton';
import StimConfig from './StimConfig';

interface AddConfigProps {
    toggle: ()=>void
    atomName:string
}



const EditConfigs: React.FC<AddConfigProps> = ({toggle, atomName})=>{
    console.log(atomName);





    const [stim, setStim] = useRecoilState(stimAtom(atomName));
    
    const [name, setName] = useState(stim.name);
    const [tokens, setTokens] = useState(stim.tokens);
    const [nBack, setNBack] = useState(stim.nBack);
    const [weight, setWeight] = useState(stim.weight);


    const handleStimChange = ()=>{
        setStim({name, tokens, nBack, weight})
        toggle();
    }
   
    return (
      <div>
        <div>
            <label>
                  Name:
                  <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name"/>
              </label>
        </div>
 
          <div> 
              <label>
                  Tokens:
                  <input value={tokens} onChange={(e)=>setTokens(e.target.value)} type="text" name="tokens"/>
              </label>
          </div>

          <div>
              <label>
                  nBack:
                  <DeltaButton setState={setNBack}>-1</DeltaButton>
                  <input value={nBack} onChange={(e)=>setNBack(parseInt(e.target.value))} type="number" name="nback"/>
                  <DeltaButton setState={setNBack}>+1</DeltaButton>
              </label>
          </div>

          <div>
              <label>
                  Weight:
                  <DeltaButton setState={setWeight}>-1</DeltaButton>
                  <input value={weight} onChange={(e)=>setWeight(parseInt(e.target.value))} type="number" name="weight"/>
                  <DeltaButton setState ={setWeight}>+1</DeltaButton>
              </label>
          </div>

          <button onClick={handleStimChange}>Submit</button>
          
      </div> 
    )
    
}

export default EditConfigs;