


const Home = () => {
    return ( 

        <div className="section">
            <div className="Deck"> 
            <b> {"Deck"}</b>
            <br/>
           
                
                <button >Shuffle</button>
            </div>

            <div className="Controls">
                <b>{"Controls"}</b>
                <br/>
           
                <button >Save</button>
                <button >Reset</button>

                <h5>Draw Cards</h5>
                <button >Draw</button>

            </div>
            
            <div className="Hand">
                <b>{"Hand"}</b>
                <br/>
           
                <button >Sort</button>
            </div>
        </div>
        
       
        
    );
}
 
export default Home;