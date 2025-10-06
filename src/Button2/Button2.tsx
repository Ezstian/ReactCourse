import button from "../Button/Button";

function Button2(){
    let count =0;
   // const handleClick = (name: string) => {
   //     if(count < 3 ){
   //         count ++;
   //         console.log(`${name} you clicked me!${count} time/s`);
   //     }
   //     else{
   //         console.log(`${name} stop clicking me`);
   //     }
   // }
   //  return (<button onClick={() =>handleClick("BRO")}>Click me</button>);
    const handleClick = (e:any) => e.target.textContent = "OUCH!!!";
    return (<button onClick={(e)=> handleClick(e)}>Click me 😒</button>)
}

export default Button2;