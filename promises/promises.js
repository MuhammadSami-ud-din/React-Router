// GetUser()
// .then((user) => fetch(user.id))
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// } )



// async function getUserData() {
//   const user = await GetUser();
//   const response = await fetch(user.id);
//   const data = await response.json();
//   console.log(data);



// }f


// [func1 , func2 , func3]
// .reduce((p , f) => p.then(f) , Promise.resolve())






const newPromise = new Promise ((resolve)=>{
 setTimeout(()=>{
    resolve ("done");
 }, 1000) 
})




newPromise.then((result) =>{
console.log(result);
})