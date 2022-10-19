

export const Login_Reducer=(state=false,action)=>{
     switch(action.type){
          case 'LOGIN':
               return  state=action.payload

               default : 
                return state
     }
}