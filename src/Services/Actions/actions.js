import {Add_To_Card} from '../constants'
import {Remove_To_Cart} from '../constants'

export const addToCart = (data)=>{
   return{
    data : data,
    type : Add_To_Card
   }
    
}

export const removeToCart = (data)=>{
    return{
     data : data,
     type : Remove_To_Cart
    }
     
 }