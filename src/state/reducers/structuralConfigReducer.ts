import { ActionTypes } from "../action-types";
import { StructuralConfigAction } from "../actions";
import { StimConfig } from '../../models/StimConfig';
import { Stim } from "../../models/Stim";

interface ConfigState {
    stims: Array<StimConfig>,
}

const initialState: ConfigState = {
    stims: new Array<StimConfig>()
};

const structuralConfigReducer = (
)

const existingConfigReducer = (
    state: ConfigState = initialState,
    action: StructuralConfigAction
) => {
    switch(action.type){
        case ActionTypes.NEW_STIM: {
            const {tokens, name} = action.payload;
            const newStims = [... state.stims, {tokens, name}];
            return {stims: newStims}
        }

        case ActionTypes.DELETE_STIM: {
            const deletedName = action.payload
            const newStims = state.stims.filter(config => 
                config.stim.name !== deletedName
            );
            
            return {stims: newStims}  
        }
    }
}