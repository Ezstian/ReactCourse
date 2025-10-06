import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from "./Card";
import Button from './Button/Button'
import Student from './Student'
import UserGreetings from "./UserGreetings";
import List from './List';
function App() {
    const fruits = [{id: 1, name:"apple", calories: 95},
        {id: 2, name:"orange", calories: 45},
        {id: 3, name:"banana", calories: 105},
        {id: 4, name:"coconut", calories: 159},
        {id: 5, name:"pineapple", calories: 37}
    ];
    const vegetables = [{id: 1, name:"cucumber", calories: 95},
        {id: 2, name:"onion", calories: 45},
        {id: 3, name:"carrot", calories: 105},
        {id: 4, name:"potatoes", calories: 159},
        {id: 5, name:"celery", calories: 37}
    ];
 return(
     <>
         {/*
         <Button/>
         <Student name="Spongebob" age={30} isStudent={true}/>
         <Student name="Mr.Crab" age={67} isStudent={false}/>
         <Student name="Plankton" age={65} isStudent={false}/>
         <Student name="Squidward" age={34} isStudent={true}/>
         <Student name="Warwick"/>
         */}

         <List items={fruits} category="Fruits"/>
         <List items={vegetables} category="Vegetables"/>
         <UserGreetings isLoggedIn={false} username="Talib" />
     </>
 );
}

export default App;
