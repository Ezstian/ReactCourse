import PropTypes from "prop-types";
type ListProps = {
    items: { id: number; name: string; calories: number }[];
    category: string;
};
function List(props: ListProps) {

    const itemList = props.items;
    const category = props.category;
    const listItems = itemList.map((items)=><li key={items.id}>
                                                            {items.name}:
                                                            &nbsp; <b>{items.calories}</b></li>);
    return (<>
        <h3>{category}</h3>
    <ol>{listItems}</ol>
    </>);
}
export default List;