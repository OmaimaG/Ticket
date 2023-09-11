
import {getAllTickets} from '../../api/ticketApi'
import { fetchTicketFail, fetchTicketLoading, fetchTicketSuccess } from './ticketSlice';

export const fetchAlltickets  = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getAllTickets();
    console.log(result)
  
      dispatch(fetchTicketSuccess(result.billets));
   
  } catch (error) {
    console.error("Erreur lors de la requête à l'API :", error);
    dispatch(fetchTicketFail("Erreur lors de la requête à l'API."));
  }
  
  }


// Import and use the generated reducer from your ticketSlice
