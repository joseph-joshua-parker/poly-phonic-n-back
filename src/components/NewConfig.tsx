import {useState} from 'react';
import DeltaButton from './DeltaButton';


const NewConfig: React.FC = ()=>{

    const [name, setName] = useState('');
    const [tokens, setTokens] = useState('');
    const [nback, setNBack] = useState(1);
    const [weight, setWeight] = useState(1);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        newStimHandler(name, tokens, nback, weight);
        
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                  Name:
                  <input value={tokens} onChange={(e)=>setName(e.target.value)} type="text" name="name"/>
              </label>
        </div>
 
          <div>
              <label>
                  Tokens:
                  <input value={tokens} onChange={(e)=>setTokens(e.target.value)} type="number" name="tokens"/>
              </label>
          </div>

          <div>
              <label>
                  nBack:
                  <DeltaButton setState={setNBack}>-1</DeltaButton>
                  <input value={nback} onChange={(e)=>setNBack(parseInt(e.target.value))} type="number" name="nback"/>
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
          
      </form> 
    )
}

export default NewConfig;