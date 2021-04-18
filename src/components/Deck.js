import {useContext, useEffect} from 'react';
import {store} from '../store/store';
import Cards from './Cards'
import Button from '../components/Button'

const Deck = () => {
    const {state, dispatch} = useContext(store);
    useEffect(()=>{
        dispatch({type : "INIT_DECK"})
    },[dispatch]);

    return ( 
        <div className="Deck"> 
            <b> {"Deck"}</b>
            <br/>
                <Button 
                    onClick={()=>{
                        dispatch({type: "SHUFFLE_DECK", payload: state.deck})
                    }}
                >
                    Shuffle
                </Button>

                <div className="card-container">
                    {state.deck.map((x, i) => (
                    <Cards index={i} pattern={x.pattern} value={x.value} type = "deck" />
                    ))}
                </div>
            </div>

     );
}
 
export default Deck;