

import './App.css';
//import { PrivateRoute } from './components/privateroute/PrivateRoute.comp';
import {AddTicket} from './page/add-ticket/AddTicket.page'
import Entry from './page/entry/Entry.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Ticket } from './page/ticket/Ticket.page';
import { Dashboard } from "./page/dashboard/Dashboard.page"
import  Register from "./page/register/Register.page"

function App() {
 
  //const user = localStorage.getItem("token");

  return (
    

    <div className="App">
     <Router>
      <Routes><Route path="/" element={<Register />} />
        <Route path="/entry" element={<Entry />} />
        
        <Route path="/dashboard/*" element={<DefaultLayout><Dashboard /></DefaultLayout>} />
        <Route path="/add-ticket" element={<DefaultLayout><AddTicket /></DefaultLayout>} />
        <Route path="/ticket" element={<DefaultLayout><Ticket /></DefaultLayout>} />
        <Route
        path="/ticket/:tId"
        element={
          <DefaultLayout>
            <Ticket />
          </DefaultLayout>
        }
      />
      </Routes>
    </Router>
    
    
  </div>
    
  );
}

export default App;
