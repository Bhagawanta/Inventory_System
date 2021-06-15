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
const Vendor = () => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/vendors", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    },[])

    return (
        <React.Fragment>
            <Page title="Items List" breadcrumbs={[{ name: 'vendors', active: true }]}>
      <Row>
      <Col  lg={12} md={12}>
          <Card>
            <CardHeader>Items List</CardHeader>
            <CardBody>
            <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Vendor Name</th>
                    <th>Vendor Mobile</th>
                    <th>Vendor Address</th>
                  </tr>
                </thead>
                <tbody>
                { data &&
                    data.map((item,index)=>{
                        return(
                                <tr key={index}>
                                    <th scope="row">{item.vendor_id}</th>
                                    <td>{item.vendor_name}</td>
                                    <td>{item.vendor_mobile}</td>
                                    <td>{item.vendor_address}</td>
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

export default Vendor;