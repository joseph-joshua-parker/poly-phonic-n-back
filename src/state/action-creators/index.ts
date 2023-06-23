import {Dispatch} from 'redux';
import {
    ChangeStimNameAction,
    ChangeStimTokensAction, 
    DeltaNBackAction, 
    DeleteStimAction,
    NewStimAction
} from '../actions';
import { ActionTypes } from '../action-types';

export const ChangeStimName = (stimName: string, newName:string) : ChangeStimNameAction =>{
    Dispatch({
        type: ActionTypes.CHANGE_STIM_NAME,
        payload: {stimName, newName}
    })
}

export const ChangeStimTokens = () : ChangeStimTokensAction =>{

} 

export const DeltaNBack = (): DeltaNBackAction =>{

}

export const DeltaStim = (): DeleteStimAction =>{

}

export const NewStim = (): NewStimAction =>{

}


