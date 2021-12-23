import React,{useState} from 'react'
import {Card,Button,Table,Container,Row,Col} from 'react-bootstrap';
import './Qutation.css'
const Qutation = () => {
    const[date,setDate]=useState("22-08-2017")
    const[qutation,setQutation]=useState("8623/2017.18")
    const[state,setState]=useState("")

    function handleChange (e){
        setState(e.target.value)
    }
    return (
        <Container fluid>
            <div className='Header bg-success'>
                <h2>Quotation</h2>
            </div>
            <div className="qt_date">
                <h>Date: <span>{date}</span></h>
                <p>Quotaton No.<span>{qutation}</span></p>
            </div>
           <Container className="card__container">
           <Row>
               <Col xs={6}>
           <Card className="card_one ml4" style={{ width: '30rem' }} >
            <Card.Header variant="Success">SHIPPER</Card.Header>
            <Card.Body>
                <Card.Title>Advanture Ranz PVt Ltd.</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            
            </Card.Body>
            </Card>
            </Col>
            <Col xs={6}>
            <Card className="card_two" style={{ width: '30rem' }} >
            <Card.Header variant="Success">RECIVE</Card.Header>
            <Card.Body>
                <Card.Title>Advanture Ranz PVt Ltd.</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            
            </Card.Body>
            </Card>
            </Col>
               </Row>
               </Container>
             <div className="tables">
                 <div className="tb1">
                    <p>Note Remark:<p value={state} onChange={e=>setState(e.target.value)}></p> </p>
                 </div>
                 <Table bordered stripe hover>
                       <thead className="bg-success">
                           <th>MODE TRANSPORT</th>
                           <th>TOTAL NUMBER OF PACKAGES</th>
                           <th>TOTAL GROSS WEIGHT</th>
                       </thead>
                       <tbody>
                           <tr>
                               <td>BY ROAD</td>
                               <td>23</td>
                               <td>345kg</td>
                           </tr>
                       </tbody>
                 </Table>
             <Table className="tb3" striped  hover>
            
  <thead className='bg-success'>
    <tr>
      <th>S.N.</th>
      <th>DESCRIPTION</th>
      <th>HSN Code</th>
      <th>Quantity</th>
      <th>RATE</th>
      <th>AMOUNT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td value={state} onChange={handleChange}>1</td>
      <td value={state} onChange={handleChange}>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
    <td>3</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr><td></td></tr>
  </tbody>
</Table>
<Table rowCount={2}>
  <div className="row">
    <div className="col-6 thank">
        <h3>THANK YOU FOR YOUR BUSINESS</h3>
        <p>Signature/Stam</p>
        <p>Place:</p>
        <p>Date:</p>
    </div>
      <div className="col-6">
         <Table bordered>
             <thead>
                 <tr>
                     <th>Freight Charge</th>
                     <th>4500.00</th>
                 </tr>
             </thead>
             <thead className="bg-success">
                 <tr>
                     <th>TOTAL AMOUNT</th>
                     <th>15581.00</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>SGST @9%</td>
                     <td>1402.00</td>
                 </tr>
                 <tr>
                     <td>SGST @9%</td>
                     <td>1402.00</td>
                 </tr>
             </tbody>
             <tfoot className="bg-success">
                 <tr>
                     <td>GRAND TOTAL</td>
                     <td>18385.00</td>
                 </tr>
             </tfoot>
         </Table>
      </div>
  </div>
</Table>
             </div>
            
           </Container>
           

    )
}

export default Qutation
