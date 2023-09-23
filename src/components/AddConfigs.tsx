import {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import { stimsArrayAtom } from '../state/atoms/stimsAtom';


import DeltaButton from './DeltaButton';
import StimConfig, {defaultConfig} from '../models/StimConfig';
import useConfigForm from '../hooks/useConfigForm';

interface AddConfigProps {
    toggle: ()=>void
    stimConfig ?: StimConfig
}

const AddConfigs: React.FC<AddConfigProps> = ({toggle})=>{
    
    const [{name, tokens, nBack, weight}, setConfig] = useState<StimConfig>(defaultConfig);
    const {handleChange, deltaParam} = useConfigForm(setConfig);

    const setStims = useSetRecoilState(stimsArrayAtom);



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

export default AddConfigs;