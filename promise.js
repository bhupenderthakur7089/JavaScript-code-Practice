// let posts=[{title:"Post1",body:"this is Post 1"},
//              {title:"Post2",body:"this is Post 2"}];

// let users=[{name:"Abhishek", lastSeen:"10th June"},
//             {name:"Rahul", lastSeen:"1st May"}];
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             resolve(post);
//         },1000)
//     })
// }
// function updateLastSeen(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             users.forEach(user => {
//                 if(user.name==name){
//                     user.lastSeen=new Date().getDate();
//                     resolve(user);
//                 }                
//             });
//         },2000)
//     })
// }
// Promise.all([createPost({title:"post3",body:"this is post3"}), updateLastSeen("Rahul")]).then((resolves)=>console.log(resolves[1].name+" created the Post: '"+resolves[0].body+"' and his last Seen is "+resolves[1].lastSeen));

//husband and wife goes to movie theatre
function getTicket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Movie Ticket');
        }, 2000);
    })
}
function getPopCorn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Popcorn');
        }, 1000);
    })
}
function getButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Butter');
        }, 1000);
    })
}
function getColdDrink() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cold Drink');
        }, 1000);
    })
}
console.log('Person1 Buys the Tiket');
console.log('Person2 Buys the Tiket');
async function person3BuysTicket() {
    let ticket =await getTicket();
    console.log(`Wife: I have the ${ticket}`);
    console.log('Husband: Lets go in then');
    console.log('Wife: But first I need popcorns');
    let popcorn=await getPopCorn();
    console.log(`Husband: I Got the ${popcorn}`);
    console.log('Wife: I need Butter on the popcorns');
    let butter=await getButter();
    console.log(`Husband: I Got the ${butter}`);
    console.log('Wife: lastly I just want a Cold Drink');
    let coldDrink=await getColdDrink();
    console.log(`Husband: I Got the ${coldDrink} now lets go quickly as we are already late`);
    console.log('Wife: lets go Honey');
    return ticket;
}
person3BuysTicket().then((ticket)=>console.log(`Person3 shows ${ticket}`));
console.log('Person4 Buys the Ticket');
console.log('Person5 Buys the Ticket');

