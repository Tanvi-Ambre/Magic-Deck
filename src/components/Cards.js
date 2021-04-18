const Cards = (props) => {
    return ( 
        <div className={`${props.pattern} card`} key={`${props.type}-${props.index}`}>{`${props.value} of ${props.pattern}`}</div> 
     );
}
 
export default Cards;