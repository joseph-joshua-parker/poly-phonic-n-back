import { StimConfig } from "../models/StimConfig";


const ReadConfigs: React.FC<StimConfig> = ({tokens, weight, nBack})=>{
    return (
        <div>
            <div>Tokens: {tokens}</div>
            <div>nBack: {nBack}</div>
            <div>Weight: {weight}</div>
        </div>
    )
}

export default ReadConfigs;