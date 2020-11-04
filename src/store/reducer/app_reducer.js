


const INITIAL_STATE = {
    app_name: "eChat",
    email:"anas24ashrafi@gmail.com",
    data:[]
}

export default ( state = INITIAL_STATE,action) =>{
    console.log("app_reducer==>", action)
    switch (action.type){
        case "Owais":
        return({
            ...state,
            app_name:action.data
        })
    }
 return state;
}