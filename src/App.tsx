import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from "./Card";
import Button from './Button/Button'
import Student from './Student'
import UserGreetings from "./UserGreetings";
import List from './List';
function App() {
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
         <List/>
     </>
 );
}

export default App;
