// import profilePic from './WhatsApp Image 2026-04-17 at 21.20.43.jpeg';
// // function MyButton() {
// //   return (
// //     <button className="sami">
// //       Click me
// //       </button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <div>
// //       <h1>Ye mera area hai aur mere area mein koi kaddam rkhne ka nahi</h1>
// //       <MyButton />
// //     </div>
// //   );
// // }



// //escaping to javascript from jsx
// const users = [{
//  Name: "Muhammad Sami ud din",
//   age : 19,
//   image: profilePic
// },{
//   Name: "Muhammad Zorain Haider",
//   age: 25,
//   image: profilePic
// }];




// // function MyButton() {
// //   return (
// //     <button className="sami">
// //       Click me
// //       </button>
// //   );
// // }

// export default function App(){
// return(
//   <div>
//  { 
//   users.map((user) => {
//   if(user.age < 20){
//     return(
//       <div>
//         <h1>{user.Name}</h1>
//         <h1>{user.age}🫣junior</h1>
//         <img src={user.image} alt="Profile"  className="avatar"/>
//       </div>
//     );
//   }else{
//     return(
//       <div>
//         <h1 >{user.Name}</h1>
//         <h1>{user.age}😂senior</h1>
//         <img src={user.image} alt="Profile"  className="avatar"/>
//       </div>
//     );
//   }})
// }
// </div>
// )
// }



// export default function App(){

// return(
//       <div>
//         <h1>{user[1].Name}</h1>
//         <h1>{user[1].age}</h1>
//         <img src={user[1].image} alt="Profile"  className="avatar"/>
//       </div>
      
// )
    
//     }







//Rendering list items in react using map function
// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];




// export default function productList() {
  
  
//    const ProductItems = products.map(product => 
//       <li key= {product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'pink'
//       }}>
//         {product.title}
//         </li>
//     );
  
  
//   return (
//     <>
//     <ul>{ProductItems}</ul>  
//     </>
    
//   );
// }





// Event responding


// export default function ClickButton(){
  
//   function handleClick(){
//     alert("You Clicked me my man 😎 Awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
//   }

//   return(
//     <button onClick={handleClick}>Click Me</button>
//   )
// }




//Using state in react. {Usestate}

// import {useState} from 'react';

// export default function States(){
//   return (
//     <>
//     <h1>Two button that update seperatley but eith the same one logic used in sttes react</h1>
//     <MyButton />
//      <MyButton />
//       <MyButton />
//        <MyButton />

    
    
//     </>
//   )
// }


// function MyButton(){
//   const [count , setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }

//   return(
//     <button onClick={handleClick}> Click Me Count: {count}</button>
//   )
// }



//using Props in react 

import {useState} from 'react';

export default function States(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
    <h1>Two button that update with each others used in states react</h1>
    <MyButton count={count} onClick={handleClick} />
    <MyButton count={count} onClick={handleClick} />
    
    
    </>
  )
}


function MyButton({count, onClick}){
  return(
   <button onClick={onClick}> Click Me Count: {count}</button>
  )

}