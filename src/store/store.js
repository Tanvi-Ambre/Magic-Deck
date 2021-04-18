import {createContext, useReducer} from 'react';
import {Randomize, Sort} from '../utils/utils'
const initState = {
    patterns : ["Clubs","Spades", "Hearts", "Diamonds"],
    values : [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"],
    deck : [],
    hand : [],
    drawCount : 1,
}

export const store =  createContext(initState);

const { Provider } = store;

const reducer = (state, action) => {
    let prevState = {...state};

    switch(action.type){

        case "RESET_CARDS":
            prevState = initState;

        case "INIT_DECK":
            prevState.deck = [];
            prevState.patterns.forEach((x)=>{
                prevState.values.forEach((y)=>{
                    prevState.deck.push({
                        pattern:x,
                        value:y
                    })
                })
            })
    
            break;
            
        case "SHUFFLE_DECK":
            prevState.deck = Randomize(action.payload);
            break;

        
        
        case "UPDATE_DRAW_NO":
            prevState.drawCount = action.payload;
            break;
        case "DRAW_CARDS":
            let hand = [...prevState.hand];
            let deck = [...prevState.deck];
            for (let i = 0; i < action.payload.drawCount; i++) {
               
              hand.push(action.payload.deck[i]);
              deck.shift();
            }
            prevState.hand = hand;
            prevState.deck = deck;
            break;

        case "SORT_HAND":
                prevState.hand = Sort(
                  action.payload,
                  prevState.patterns,
                  prevState.values
                );
                console.log(prevState.hand);
            break;
        default:
            break;
    }

    return prevState;

}

export const StateProvider = (props) =>{
    const [state, dispatch] = useReducer(reducer,initState);
    return <Provider value={{state, dispatch}}>{props.children}</Provider>
}