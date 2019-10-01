
    /* User ID randomiser
     * will work wery soon
     * (i hope so)*/

function getRandomId() {
    return Math.floor((Math.random() + Math.random() * 10) * 10);
};

function CreateNewUser(){
   State.UsersData.push ({ id:getRandomId(), user: "Random Name" })
};



let State = {
    UsersData: [
        {  id: getRandomId(), user: "John Inspruker" },
        {  id: 1, user: "Sanya" },
        {  id: 2, user: "Mother's friend's son" },
        {  id: 3, user: "Elon Musk" },
        {  id: 4, user: "Bill Gates" },
        {  id: 5, user: "Werner von Braun" },
        {  id: 6, user: "Vasya" },
        {  id: 7, user: "Some dude" }
    ],
    MessagesData: [
        { id: 0, message: "Hi" },
        { id: 1, message: "Yo" },
        { id: 2, message: "In" },
        { id: 3, message: "Elon" },
        { id: 4, message: "We" },
        { id: 5, message: "Trust" },
        { id: 6, message: "Just" },
        { id: 7, message: "read the" },
        { id: 8, message: "instructions" }
    ],
    PostsData:[

    ]
};

CreateNewUser();

export default State