import { ActionTypes } from "../action-types";
import { ExistingConfigAction } from "../actions";
import { StimConfig } from "../../models/StimConfig";

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
    action: ExistingConfigAction
) => {

    const {stimName} = action.payload;
    const selectedStim = state.stims.find(({stim})=> stim.name === stimName);
    const newStims = state.stims.filter(config => 
        config.stim.name !== stimName
    );

    if(!selectedStim)   return;

    switch(action.type){ 
        case ActionTypes.CHANGE_STIM_NAME: {
            selectedStim.stim.name = action.payload.newName;
            return [...newStims, selectedStim];
        }

        case ActionTypes.CHANGE_STIM_TOKENS: {
            selectedStim.stim.tokens = action.payload.newTokens;
            return [...newStims, selectedStim];
        }

        case ActionTypes.DELTA_N_BACK: {
            selectedStim.nBack += action.payload.delta;
            return [...newStims, selectedStim]
        }
    }
}