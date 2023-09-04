import {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import { stimsArrayAtom } from '../state/atoms/stimsAtom';


import DeltaButton from './DeltaButton';
import StimConfig from './StimConfig';

interface AddConfigProps {
    toggle: ()=>void
    stimConfig ?: StimConfig
}

const AddConfigs: React.FC<AddConfigProps> = ({toggle})=>{
    
    const [name, setName] = useState('');
    const [tokens, setTokens] = useState('');
    const [nBack, setNBack] = useState(1);
    const [weight, setWeight] = useState(1);

    const setStims = useSetRecoilState(stimsArrayAtom);

    const handleSubmit = (e:any)=>{
        e.preventDefault();

        setStims((currentStims)=>[
            ...currentStims,
            {name, tokens, nBack, weight}
        ])
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

          <button onClick={handleSubmit}>Submit</button>
          
      </div> 
    )
    
}

export default AddConfigs;