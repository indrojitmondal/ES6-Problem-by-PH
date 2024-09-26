// 
const friends =['Kisaloy Mallick','Hironmoy Dhali','Tanmoy Bairagi','Faisal Hossain'];
const lengthCheck = (friends) =>{
    let l = friends.length;
    const newFriends=[];
    for (const friend of friends) {
        if(friend.length %2 ===0){
            newFriends.push(friend);
        }
    }
    return newFriends;
}
console.log(lengthCheck(friends));