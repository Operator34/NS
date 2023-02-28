const state = {
    profilePage:{
        posts: [
            {id:1, message:"Привет. Как твои дела", likesCount: 12  },
            {id:2, message:"Отлично", likesCount: 11},
            {id:3, message:"Какие планы?", likesCount: 15},
            {id:4, message:"Буду отдыхать", likesCount: 17},
            {id:5, message:"Понятно", likesCount: 19},
        ]
    },
    dialogsPage:{
        messages: [
            {id:1, message:"Привет"},
            {id:2, message:"Как твои дела?"},
            {id:3, message:"Отлично"}
        ],
        dialogs: [
            { id:1, name: "Димыч"},
            { id:2, name: "Макс" },
            { id:3, name: "Витя" },
            { id:4, name: "Саша" },
            { id:5, name: "Валера" },
        ]
    },
    sideBar:{
        userFriends:[
            {id:1, name: "Dimich"},
            {id:2, name: "Max"},
            {id:3, name: "Vitya"},
            {id:4, name: "Sasha"},
            {id:5, name: "Valera"},
            {id:6, name: "Nick"},

        ]
    }

}
export default state