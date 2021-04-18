import { useContext } from "react";
import { store } from "../store/store";
import Cards from "./Cards";

const Hand = () => {
  const { state, dispatch } = useContext(store);
  return (
    <div className="Hand">
        <b>{"Hand"}</b>
        <br/>

        <button 
        onClick={() => {
            dispatch({ type: "SORT_HAND", payload: state.hand });
        }}
        >
            Sort
        </button>
        <div className="card-container">
          {state.hand.map((x, i) => (
            <Cards index={i} pattern={x.pattern} value={x.value} type = "deck" />
          ))}
        </div>
    </div>


   
    
  );
};

export default Hand;
