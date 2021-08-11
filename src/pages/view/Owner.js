import React , { useEffect, useState } from 'react'
import Page from 'components/Page';
import {
    // Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    // Form,
    // FormGroup,
    // Input,
    // Label,
    Row,
    Table
} from 'reactstrap';
// const tableTypes = ['', 'bordered', 'striped', 'hover'];
const Owner = () => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/owners", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    },[])

    return (
        <React.Fragment>
            <Page title="Owner List" breadcrumbs={[{ name: 'owners', active: true }]}>
      <Row>
      <Col  lg={12} md={12}>
          <Card>
            <CardHeader>Owner List</CardHeader>
            <CardBody>
            <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Owner Name</th>
                    <th>Owner Mobile</th>
                    <th>Owner Email</th>
                  </tr>
                </thead>
                <tbody>
                { data &&
                    data.map((item,index)=>{
                        return(
                                <tr key={index}>
                                    <th scope="row">{item.owner_id}</th>
                                    <td>{item.owner_name}</td>
                                    <td>{item.owner_mobile}</td>
                                    <td>{item.owner_email}</td>
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

export default Owner;