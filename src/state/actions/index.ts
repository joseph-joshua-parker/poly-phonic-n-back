import { ActionTypes } from "../action-types";

export interface DeltaNBackAction {
    type: ActionTypes.DELTA_N_BACK,
    payload: {
        stimName: string,
        delta: number
    }
}

export interface ChangeStimNameAction{
    type: ActionTypes.CHANGE_STIM_NAME,
    payload: {
        stimName: string,
        newName: string
    }
}

export interface ChangeStimTokensAction{
    type: ActionTypes.CHANGE_STIM_TOKENS,
    payload: {
        stimName: string,
        newTokens: string
    }
}

export interface DeleteStimAction{
    type: ActionTypes.DELETE_STIM,
    payload: string
}

export interface NewStimAction{
    type: ActionTypes.NEW_STIM
    payload: {
        name: string,
        tokens: string
    }
}



export type ExistingConfigAction =  
                    | ChangeStimNameAction 
                    | ChangeStimTokensAction
                    | DeltaNBackAction

export type StructuralConfigAction = 
                    | NewStimAction
                    | DeleteStimAction
