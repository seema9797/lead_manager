import React from 'react'
import { Row, Col, Card, CardBody } from "reactstrap"
import {Stack,Button} from 'react-bootstrap';
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    InvoiceData,
    Quatation,
  } from "../../store/data/action";
  
const Invoices = () => {
    return (
       <div>
        <Row>
          <Col xl={12}>
            <Card className="bg-secondary">
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <h4 className="card-title mb-4 bgStyle">Invoice</h4>
                  </Col>
                  <Col lg={6}>
                    <Stack gap={3}>
                      <Link to="/import_invoice"><Button
                        color="primary"
                       
                       
                        style={{ float: "right" }}
                      >
                        invoice
                      </Button>
                      </Link>
                      <Link to="/import_quotation">
                        <Button variant="warning" 
                         className="mr-3"
                          style={{float:"right"}} 
                          >Quotation
                        </Button>{' '}
                      </Link>
                    </Stack>
                  </Col>
                </Row>
                </CardBody>
               </Card>
               </Col>
               </Row>
       </div>
    )
}

export default Invoices
