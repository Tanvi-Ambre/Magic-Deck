import {useContext} from 'react';
import {store} from '../store/store';

const Controls = () => {
    const {state, dispatch} = useContext(store);
    return ( 
        <div className="Controls">
                <b>{"Controls"}</b>
                <br/>
           
                
                <button 
                onClick={() => {
                    dispatch({
                      type: "RESET_CARDS",
                    });
                  }}
                >
                    Reset
                </button>

                <h5>Draw Cards</h5>
                <input
                    type="number"
                    value={state.drawCount}
                    onChange={(e)=>{
                        dispatch({ type: "UPDATE_DRAW_NO", payload: e.target.value });
                    }}
                />
                <button 
                    onClick={()=>{
                        dispatch({
                            type:"DRAW_CARDS",
                            payload:{
                                deck: state.deck,
                                hand: state.hand,
                                drawCount: state.drawCount
                            }
                        })
                    }}
                >
                    Draw
                </button>

            </div>
     );
}
 
export default Controls;