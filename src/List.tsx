function List(){
    const fruits = [{id:1, name:"apple",calories: 95},
                            {id:2 ,name:"orange",calories: 126},
                             {id:3 ,name:"pineapple", calories: 134},
                            {id:4 ,name:"watermelon", calories: 54},
                            {id:5 ,name:"banana", calories: 34}];

    //fruits.sort((a,b)=>a.name.localeCompare(b.name));//ALPHABETICAL
    //fruits.sort((a,b)=>b.name.localeCompare(a.name); //REVERSE ALPHABETICAL
    //fruits.sort((a,b)=>a.calories - b.calories); //Numeric order
    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    const listItems = lowCalFruit.map(lowCalFruit=>
        <li key={lowCalFruit.id}>
            {lowCalFruit.name}: &nbsp;{lowCalFruit.calories} calories</li>);
    return (<ol>{listItems}</ol>);
};

export default List;