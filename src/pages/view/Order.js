import React , { useEffect, useState } from 'react'
import Page from 'components/Page';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Table
} from 'reactstrap';
const tableTypes = ['', 'bordered', 'striped', 'hover'];
const Order = () => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    },[])

    return (
        <React.Fragment>
            <Page title="Order List" breadcrumbs={[{ name: 'orders', active: true }]}>
      <Row>
      <Col  lg={12} md={12}>
          <Card>
            <CardHeader>Order List</CardHeader>
            <CardBody>
            <Table responsive>
                <thead>
                  <tr>
                    <th>PO</th>
                    <th>PO Date</th>
                    <th>Vendor Name</th>
                    <th>Item Name </th>
                    <th>Quantity</th>
                    <th>Value</th>
                    <th>Date Of Delivery</th>
                    <th>Date Of Installation</th>
                    <th>Warranty Years</th>
                    <th>Warranty Upto</th>
                  </tr>
                </thead>
                <tbody>
                { data &&
                    data.map((item,index)=>{
                        return(
                                <tr key={index}>
                                    <th scope="row">{item.po_id}</th>
                                    <td>{item.po_date}</td>
                                    <td>{item.vendor_name}</td>
                                    <td>{item.item_name}</td>
                                    <td>{item.item_qty}</td>
                                    <td>{item.item_value}</td>
                                    <td>{item.dod}</td>
                                    <td>{item.doi}</td>
                                    <td>{item.wyears}</td>
                                    <td>{item.wupto}</td>
                                </tr>
                        )
                    })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
        </React.Fragment>
    )
}

export default Order;