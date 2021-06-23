import Page from 'components/Page';
import React , { useState } from 'react';
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
} from 'reactstrap';

const Vendors = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === null || name === ""){
          alert("Please provide vendor name !");
        }
        else if(mobile === null || mobile === ""){
          alert("Please provide vendor mobile !");
        }
        else if(address === null || address === ""){
          alert("Please provide vendor address !");
        }
        else{

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
          
          var urlencoded = new URLSearchParams();
          urlencoded.append("vname", name);
          urlencoded.append("vmobile", mobile);
          urlencoded.append("vaddress", address);
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/vendor", requestOptions)
            .then(response =>{ 
              if(response.status === 200){
                console.log("SUCCESSS")
                return response.json();     
            }else if(response.status === 400){
                const err = JSON.stringify(response.json());
                alert("Please provide proper fields");
                console.log("SOMETHING WENT WRONG")
                this.setState({ requestFailed: true })
            }
            })
            .then(result => {
              alert("Successfully Added.....");
              setName('');
              setMobile('');
              setAddress('');
              console.log(result)})
            .catch(error => console.log('error', error));

        } 
    }

    const check = () => {
            const date1 = new Date('12/14/1997'); //m/d/y
            const date2 = new Date('06/15/2021');
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            alert(diffTime + " milliseconds");
            alert(diffDays + " days");
            const years = diffDays/365;
            const days1 = diffDays%365;
            alert(years + "Years" + days1 + "Days");
    }
    return (
    <Page title="Vendors" breadcrumbs={[{ name: 'vendors', active: true }]}>
      <Row>
      <Col  md={6}>
          <Card>
            <CardHeader>Vendors Input</CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Vendor Name</Label>
                  <Input
                    type="text"
                    name="vendor_name"
                    placeholder="vendor name"
                    value={name}
                    onChange={(e)=>{
                      const re = /^[a-zA-Z\b\s]+$/; //rules
                      if (e.target.value === "" || re.test(e.target.value)) {
                      setName(e.target.value)}                      
                      }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Vendor Mobile</Label>
                  <Input
                    type="text"
                    name="vendor_mobile"
                    placeholder="vendor mobile"
                    value={mobile}
                    maxlength={10}
                    onChange={(e)=>{
                       const re = /^[0-9\b]+$/; //rules
                        if (e.target.value === "" || re.test(e.target.value)) {
                         // setPhoneNumber(e.target.value);
                      setMobile(e.target.value)}
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Vendor Address</Label>
                  <Input
                    type="text"
                    name="vendor_"
                    placeholder="vendor address"
                    value={address}
                    onChange={(e)=>{
                      const re = /^[a-zA-Z\b\s]+$/; //rules
                      if (e.target.value === "" || re.test(e.target.value)) {
                      setAddress(e.target.value)}
                    }}
                  />
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
    )
}
export default Vendors;