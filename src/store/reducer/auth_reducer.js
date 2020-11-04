


const INITIAL_STATE = {
    username: "Anas",
    email:"anas24ashrafi@gmail.com"

}

export default ( state = INITIAL_STATE,action) =>{
    console.log("auth_reducer",action )
 return state;
}