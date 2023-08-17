import {Add_To_Card,Remove_To_Cart} from '../constants'
export const addToCart = (data)=>{
   return{
    data : data,
    type : Add_To_Card
   }
    
}

export const removeToCart = ()=>{
   return{
    type : Remove_To_Cart
   }
    
}
