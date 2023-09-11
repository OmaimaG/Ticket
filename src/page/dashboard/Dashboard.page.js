import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchAlltickets} from './TicketsAction';
import {  useEffect } from 'react';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';

import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlltickets());
  }, [dispatch]);


  return (
    <Container>
      <Row>
        <Col>
    
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
       <Link to="/add-ticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
            </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: </div>
          <div>Pending tickets: </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
         <TicketTable />
        </Col>
      </Row>
    </Container>
  )
}
