import { ADD_TO_FAVOURITES } from "./cartTypes";
import { REMOVE_FROM_FAVOURITES } from "./cartTypes";

export const addToFavourites=(id)=>{
    return{
        type:ADD_TO_FAVOURITES,
        id: id
    }
}

export const removeFromFavourites=(id)=>{
    return{
        type:REMOVE_FROM_FAVOURITES,
        id: id
    }
}
