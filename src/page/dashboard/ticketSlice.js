import {createSlice} from '@reduxjs/toolkit'

const initialState = {

    tickets :[],
    isLoading :false ,
    error : ""
}
const ticketListSlic = createSlice({
name :'ticketListe',
initialState ,
reducers : {
fetchTicketLoading: (state) => {
state.isLoading=true

},
fetchTicketSuccess: (state,action) => {
    state.tickets = action.payload
    state.isLoading= false
    
    },
    fetchTicketFail: (state,{payload}) => {
        state.error = false
        state.isLoading= payload
        
        }
    

}


})
const { reducer ,actions} = ticketListSlic;
export const {fetchTicketFail,fetchTicketLoading,fetchTicketSuccess}= actions;
export default reducer ;
