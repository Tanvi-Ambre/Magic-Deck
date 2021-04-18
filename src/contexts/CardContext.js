import React, { createContext, Component } from 'react';

export const CardContext = createContext();

class CardContextProvider extends Component {
    state = { 

        patterns : ["Spades", "Clubs", "Hearts", "Diamonds"],
        numbers : ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"],
        deck : [],
        hand : [],
        drawCount : 1,
        type: 'INIT_DECK'
    }

    toggleType = (type)=>{
        this.setState({type: type})
    }
    render() { 
        return ( 
            <CardContext.Provider value={{...this.state, type: this.toggleType(()=>{

            })}}>
            {this.props.children}
            </CardContext.Provider>
         );
    }
}
 
export default CardContextProvider;