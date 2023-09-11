import React from 'react'
import { Table} from 'react-bootstrap'
 // Utilisez la même casse que dans le fichier 'TicketsAction'

import {  useSelector } from 'react-redux/es/hooks/useSelector'

import { Link } from 'react-router-dom'
export const TicketTable= () => {
  const {tickets , isLoading , error} =useSelector ((state) => state.tickets)
if (isLoading) return <h3>Loading....</h3>
if (error) return <h3>{error}</h3>

  return (
 <Table striped bordered hover>
<thead>
<tr>
<th>#</th>
<th>subjects</th>
<th>Status</th>
<th>Opened Date</th>

</tr>

</thead>
<tbody>




{tickets && tickets.length ?
  tickets.map(row=>
    <tr key={row._id}>
    <td>{row._id}</td>
    
    
    <td>
      <Link to={`/ticket/${row._id}`}>
        {row.subject}
      </Link>
    </td>
    
    <td>{row.status}</td>
    <td>{row.openAt}</td>
    
    </tr>):
    <tr>
    <td colSpan="4" className='text-center'>no ticket show</td>
    
    </tr>
    }









</tbody>

 </Table>
  )
}
