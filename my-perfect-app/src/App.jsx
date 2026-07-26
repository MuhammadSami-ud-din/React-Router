// import profilePic from './WhatsApp Image 2026-04-17 at 21.20.43.jpeg';
// import profilePicZ from './Screenshot 2026-06-19 at 10.40.26 PM.png';
 
// import video from './Mae Ni Mae Mere Geetan De Nainan Wich.mp4';
//  import video1 from "./Selahaddin Şemse'yi Arıyor - Kudüs Fatihi Selahaddin Eyyubi 2. Sezon Özel Sahneler_.mp4";
// import { useState } from 'react';
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



//escaping to javascript from jsx
// const users = [{
//  Name: "Muhammad Sami ud din",
//   age : 19,
//   image: profilePic,
//   description: "I am a student and I am a good person. Aik bnda hai wo apne ap ko 6 mahine bara btata hai budha khusar kahin ka.",
//   occupation: "Student"
// },{
//   Name: "Muhammad Zorain Haider",
//   age: 19.8,
//   image: profilePicZ,
//   description: "I am a teacher and I am a very bad  person. Aur aik baat btaun mein Sami se 6 mahine bara hun mene 6 mahine pehle a kr adhi dunya fatah kr li thi apni khachon se",
//   occupation:"Full time charsi at nehr wala pull"
// }];




// function MyButton() {
//   return (
//     <button className="sami">
//       Click me
//       </button>
//   );
// }

// export default function App(){
// return(
//   <div>
//  { 
//   users.map((user) => {
//   if(user.age < 19.5){
//     return(
//       <div>
//         <h1>{user.Name}</h1>
//         <h1>{user.age}🫣junior</h1>
//         <img src={user.image} alt="Profile"  className="avatar"/>
//        <p>Description: {user.description}</p>
//          <p>Occupation: {user.occupation}</p>

//       </div>
//     );
//   }else{
//     return(
//       <div>
//         <h1 >{user.Name}</h1>
//         <h1>{user.age}😂senior</h1>
//         <img src={user.image} alt="Profile"  className="avatar"/>
//         <p>Description: {user.description}</p>
//          <p>Occupation: {user.occupation}</p>
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

// import {useState} from 'react';

// export default function States(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }

//   return (
//     <>
//     <h1>Two button that update with each others used in states react</h1>
//     <MyButton count={count} onClick={handleClick} />
//     <MyButton count={count} onClick={handleClick} />
    
    
//     </>
//   )
// }


// function MyButton({count, onClick}){
//   return(
//    <button onClick={onClick}> Click Me Count: {count}</button>
//   )

// }













//escaping to javascript from jsx


// const users = [{
//   Name: "Muhammad Sami ud din",
//   age : 19,
//   image: profilePic,
//   description: "I am a student and I am a good person. Aik bnda hai wo apne ap ko 6 mahine bara btata hai budha khusar kahin ka.",
//   occupation: "Student"
// },{
//   Name: "Muhammad Zorain Haider",
//   age: 19.8,
//   image: profilePicZ,
//   description: "I am a teacher and I am a very bad person. Aur aik baat btaun mein Sami se 6 mahine bara hun mene 6 mahine pehle a kr adhi dunya fatah kr li thi apni khachon se",
//   occupation:"Full time charsi at nehr wala pull"
// }];

// export default function App(){
//   return (
//     <>
//       {users.map((user, i)=> {
       
//         if (user.age < 19.5) {
//           return (
//             <Condition 
//               key={i}
//               name={user.Name} 
//               age={user.age} 
//               img={user.image} 
//               desc={user.description} 
//               occ={user.occupation} 
//             />
//           )
//         } else {
//           return null;
//         }
//       })}
//     </>
//   )
// }


// function Condition({ name, age, img, desc, occ }) {
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <img src={img} alt="Profile" className="avatar" />
//         <p>Description: {desc}</p>
//         <p>Occupation: {occ}</p>
//       </div>
//     );
// }







// UseEffect in React Very Imprortant
// what it does is stop the running of that specific code in it until te page of react companent is loadedand done then it does its rendering and also to change the DOM it should be used because the react have nothing to do with the DOM

// import {useEffect , useRef , useState } from 'react'


// function VideoPlayer({isPlaying , src}){
//   const ref = useRef(null);

//   useEffect(()=>{
//     if(isPlaying){
//       ref.current.play();
//       console.log("play")
//     }else{
//       ref.current.pause();
//       console.log("pause")

//     }
//   },[isPlaying])

//   return(
//     <video src={src} ref={ref} />
//   )
// }


// export default function VideoPlayerMind(){
//   const [isPlaying , setIsPlaying] = useState(false);
//   const [text , setText] = useState('');

//   return(
//     <>
//     <input value={text}  onChange={e => setText(e.target.value)} />
//     <button onClick={()=>{
      
//       setIsPlaying(!isPlaying)}}> {isPlaying ? 'pause' : 'play'} </button>
//     <VideoPlayer src={video}  isPlaying={isPlaying} alt="video"></VideoPlayer>
    
    
//     </>
//   )
// }




// import {useEffect  } from 'react'

// function connection(){
//  return{
//    connect(){
//     console.log("connecting............. ruk ja yaar sbr kr kr rha hun na .......connected")
//   }
// ,
//    disconnect(){
//       console.log("disconnecting............. mil gya sakoon.......disconnected")
// }


// }
  
// };


// export default function App(){
  
//   useEffect(()=>{
//     const connection1 = connection();
//     connection1.connect();
//    return ()=>{
//     connection1.disconnect();
//    }


//   },[])
// }



// //pitfall

//  const connectionRef = useRef(null);
//   useEffect(() => {
//     // 🚩 This wont fix the bug!!!
//     if (!connectionRef.current) {
//       connectionRef.current = createConnection();
//       connectionRef.current.connect();
//     }
//   }, []);


// subsrcbing in effects

// import { useState, useEffect } from 'react';

// function ScrollLogger() {
//   useEffect(() => {
//     function handleScroll() {
//       console.log('📜 Scroll Position:', window.scrollY);
//     }

//     console.log('➕ Subscribing to scroll...');
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       console.log('➖ Unsubscribing from scroll...');
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ height: '200vh', padding: '20px' }}>
//       <h2>Scroll down and watch the console log sequence!</h2>
//     </div>
//   );
// }

// export default function App() {
//   const [showLogger, setShowLogger] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowLogger(!showLogger)}>
//         {showLogger ? 'Unmount Logger' : 'Mount Logger'}
//       </button>
//       {showLogger && <ScrollLogger />}
//     </div>
//   );
// }





//practice
// import { useState, useEffect } from 'react';

// function Playground() {
//   const [text, setText] = useState('a');

//   useEffect(() => {
//     function onTimeout() {
//       console.log('⏰ ' + text);
//     }

//     console.log('🔵 Schedule "' + text + '" log');
//     const timeoutId = setTimeout(onTimeout, 3000);

//     return () => {
//       console.log('🟡 Cancel "' + text + '" log');
//       clearTimeout(timeoutId);
//     };
//   }, [text]);

//   return (
//     <>
//       <label>
//         What to log:{' '}
//         <input
//           value={text}
//           onChange={e => setText(e.target.value)}
//         />
//       </label>
//       <h1>{text}</h1>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Unmount' : 'Mount'} the component
//       </button>
//       {show && <hr />}
//       {show && <Playground />}
//     </>
//   );
// }





//practice


//  import { useState, useEffect } from 'react';

//  function Effe(){


//   const [value , setValue] = useState('a');
// useEffect(()=>{
  
   
//     console.log(`schedule ${value} log`);
//    const ontimeout = setTimeout(()=>{
//         console.log("✋"+ value);
//    },3000)

   
//    return(()=>{
    
//   console.log(` cance log`);
//   clearTimeout(ontimeout);
  
  
//    })

  
// },[value])

//  return(
//   <>
//     <h1 >{value}</h1>
//     <input value={value} onChange={(e)=> setValue(e.target.value)} />
//     </>
//    );
//  }

// export default function App(){
//   const [isShow , setIsShow] = useState(false);
  

// return(
//   <>
//   <button value={isShow} onClick={()=>setIsShow(!isShow)}>{isShow ? "dont show" : "show"}</button>
 
//   {isShow && <Effe /> }
  
//   </>
// )

// }



// import { useContext } from 'react';
import { Heading} from './heading.jsx'
import Section from './section.jsx';

export default function Example(){
return (
  <>
  <Section level={1}>
    <Heading>Heading</Heading>
    <Heading>Heading</Heading>
    <Heading>Heading</Heading>
    <Heading>Heading</Heading>

  </Section>
  <Section level={2}>
    <Heading>sub-Heading</Heading>
   <Heading>sub-Heading</Heading>
   <Heading>sub-Heading</Heading>
   <Heading>sub-Heading</Heading>
  </Section>
  <Section level={3}>
    <Heading>sub-sub-Heading</Heading>
   <Heading>sub-sub-Heading</Heading>
   <Heading>sub-sub-Heading</Heading>
   <Heading>sub-sub-Heading</Heading>
    
  </Section>
  
  
  </>
)


}


