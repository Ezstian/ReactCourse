function List(){
    const fruits = [{id:1, name:"apple",calories: 95},
                            {id:2 ,name:"orange",calories: 56},
                            {id:3 ,name:"banana", calories: 34}];

    fruits.sort();

    const listItems = fruits.map(fruits=>
        <li key={fruits.id}>{fruits.name}</li>);
    return (<ol>{listItems}</ol>);
};

export default List;