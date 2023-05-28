import Card from "../Card/Card";

const CardList = ({datalist, delBtn}) => {
    const cards = datalist.map(({id, ...otherProps}) => (
        <Card key={id} {...otherProps} id={id} delBtn={delBtn} />
    ));
    
    return <div>{cards}</div>
};
 
export default CardList;