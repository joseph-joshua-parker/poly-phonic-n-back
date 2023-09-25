import { useRecoilState, useRecoilValue } from "recoil";
import StimConfig, { NUM_PARAMS, STRING_PARAMS } from "../models/StimConfig";
import { historyAtom } from "../state/atoms/historyAtom";
import { stimsArrayAtom, activeStimsAtom } from "../state/atoms/stimsAtom";
import { useState } from "react";

const useGameEngine = ()=>{
    const [history, setHistory] = useRecoilState(historyAtom);
    const stimsArray = useRecoilValue(stimsArrayAtom); 
    



    const usedStims = stimsArray.filter(stim=>useRecoilState(activeStimsAtom(stim.name)));
    
    
        

    const [guess, setGuess] = useState('');
    const [misses, setMisses] = useState(0);
    const [hits, setHits] = useState(0)

    const tokenPool = usedStims
        .map(stim=>{ 
            const weight = stim[NUM_PARAMS.Weight];
            const name = stim[STRING_PARAMS.Name]

            return new Array<string>(weight).fill(name, 0, weight)
        })
        .flat();



    const doesItMatch = ()=>{
        const recentToken =  history[history.length-1];
        const stim = usedStims.filter(stim=>stim.tokens.includes(recentToken))[0];
        const {nBack} = stim;
        const correspondingToken = history[history.length - nBack - 1];

        return recentToken == correspondingToken;
    }

    const markPlayerPreviousResponse = () =>{
        if(doesItMatch() && guess == 'yes')         setHits(prev=>prev+1);
        else if(!doesItMatch() && guess == 'no')    setHits(prev=>prev+1);
        else                                        setMisses(prev=>prev+1);

        setGuess('');
    }

    const chooseToken = ()=>{
        markPlayerPreviousResponse()

        const chosenToken = tokenPool[Math.floor(Math.random()*tokenPool.length-1)];
        setHistory(prev=>[...prev, chosenToken]);
     }

     return {setGuess, chooseToken};
}

export default useGameEngine;