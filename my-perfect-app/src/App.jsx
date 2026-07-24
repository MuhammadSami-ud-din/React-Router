import profilePic from './WhatsApp Image 2026-04-17 at 21.20.43.jpeg';
// function MyButton() {
//   return (
//     <button className="sami">
//       Click me
//       </button>
//   );
// }

// export default function App(){
//   return(
//     <div>
//       <h1>Ye mera area hai aur mere area mein koi kaddam rkhne ka nahi</h1>
//       <MyButton />
//     </div>
//   );
// }



//escaping to javascript from jsx
const users = [{
 Name: "Muhammad Sami ud din",
  age : 19,
  image: profilePic
},{
  Name: "Muhammad Zorain Haider",
  age: 25,
  image: profilePic
}];




// function MyButton() {
//   return (
//     <button className="sami">
//       Click me
//       </button>
//   );
// }

export default function App(){
return(
  <div>
 { 
  users.map((user) => {
  if(user.age < 20){
    return(
      <div>
        <h1>{user.Name}</h1>
        <h1>{user.age}🫣junior</h1>
        <img src={user.image} alt="Profile"  className="avatar"/>
      </div>
    );
  }else{
    return(
      <div>
        <h1 >{user.Name}</h1>
        <h1>{user.age}😂senior</h1>
        <img src={user.image} alt="Profile"  className="avatar"/>
      </div>
    );
  }})
}
</div>
)
}



// export default function App(){

// return(
//       <div>
//         <h1>{user[1].Name}</h1>
//         <h1>{user[1].age}</h1>
//         <img src={user[1].image} alt="Profile"  className="avatar"/>
//       </div>
      
// )
    
//     }

