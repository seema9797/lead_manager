import React,{useState} from 'react'
import {Row,Container,Col,Form,Table} from 'react-bootstrap';
import './invoice.css'
const Invoice = () => {
    const[state,setState]=useState();

    function handleChange(e){
        setState(e.target.value)
    }
    return (
        <Container className="mt-4">
            <Row>
              <Col xs={4}>
              <Form.Control type="text" placeholder="set../Timer" onClick={handleChange} />
              <br/><br/>
              <Form.Control type="text" placeholder="Program name" onClick={handleChange}/>
              <br/><br/>
              <Form.Control type="text" placeholder="Teaching Location" onClick={handleChange}/>
              <br/><br/>
              <Form.Control type="text" placeholder="Institute Name"onClick={handleChange} />
              <br/><br/>
              <Form.Control type="text" placeholder="Email"onClick={handleChange} />
              <br/><br/>
              </Col>
              <Col xs={7}>
              <Table bordered striped  hover>
            
            <thead className='bg-info'>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Attendence</th>
               
              </tr>
            </thead>
            <tbody className="sizemin">
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                
                <td>{handleChange}</td>
                <td>{handleChange}</td>
                <td>{handleChange}</td>
              </tr>
            
            </tbody>
          </Table>
          
              </Col>
              <Col xs={7}>
                  <p>Send Pament to<input type="text" value={state} onClick={handleChange} className="inputChange"/>            Dummy text not visible</p>
                  <p>Address:</p><input type="text" value={state} onClick={handleChange}/>
              </Col>
            </Row>
        </Container>
    )
}

export default Invoice
