import {useContext, useEffect} from 'react';
import {store} from '../store/store';
import Cards from './Cards'


const Deck = () => {
    const {state, dispatch} = useContext(store);
    useEffect(()=>{
        dispatch({type : "INIT_DECK"})
    },[dispatch]);

    return ( 
        <div className="Deck"> 
            <b> {"Deck"}</b>
            <br/>
                <button
                    onClick={()=>{
                        dispatch({type: "SHUFFLE_DECK", payload: state.deck})
                    }}
                >
                    Shuffle
                </button>

                <div className="card-container">
                    {state.deck.map((x, i) => (
                    <Cards index={i} pattern={x.pattern} value={x.value} type = "deck" />
                    ))}
                </div>
            </div>

     );
}
 
export default Deck;
