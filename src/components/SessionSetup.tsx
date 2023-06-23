import DeltaButton from './DeltaButton';

import {StimConfig} from '../models/StimConfig';

interface SetupProps {
    configs: Array<StimConfig>;
}


const SessionSetup: React.FC<SetupProps> = ({configs}) => {
    const stimList = configs.map(({stim: {name, tokens}, nBack})=>{
        return (
            <div>
                <div>{name}</div>
                <DeltaButton>-1</DeltaButton>
                <input value={nBack}/>
                <DeltaButton>+1</DeltaButton>
            </div>
        )});

    return  <div>
                {stimList}
                <button> + </button>
            </div>
}

export default SessionSetup;