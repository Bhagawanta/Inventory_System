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
import validator  from 'validator';

const Vendors = () => {
    // const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; 
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === null || name === ""){
          alert("Please provide owner name !");
        }
        else if(mobile === null || mobile === ""){
          alert("Please provide owner mobile !");
        }
        else if(email === null || email === ""){
          alert("Please provide owner email !");
        }
        else if(email.length>0){
                if (validator.isEmail(email)) {
                // setEmailError('Valid Email :)')
                setEmailError("");
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                
                var urlencoded = new URLSearchParams();
                urlencoded.append("owner_name", name);
                urlencoded.append("owner_mobile", mobile);
                urlencoded.append("owner_email", email);
                
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: urlencoded,
                  redirect: 'follow'
                };
                
                fetch("http://localhost:3001/owner", requestOptions)
                  .then(response =>{ 
                    if(response.status === 200){
                    //   console.log("SUCCESSS")
                      return response.json();     
                  }else if(response.status === 400){
                    //   const err = JSON.stringify(response.json());
                      const err = response.json();
                      console.log(err);
                      alert("Please provide proper fields");
                    //   console.log("SOMETHING WENT WRONG")
                      this.setState({ requestFailed: true })
                  }
                  })
                  .then(result => {
                    alert("Successfully Added.....");
                    setName('');
                    setMobile('');
                    setEmail('');
                    // console.log(result)
                })
                  .catch(error => console.log('error', error));
                } 
                else {
                setEmailError('Enter valid Email!')
                alert("Please enter valid email !");
                }
        }
    }

    // const check = () => {
    //         const date1 = new Date('12/14/1997'); //m/d/y
    //         const date2 = new Date('06/15/2021');
    //         const diffTime = Math.abs(date2 - date1);
    //         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //         alert(diffTime + " milliseconds");
    //         alert(diffDays + " days");
    //         const years = diffDays/365;
    //         const days1 = diffDays%365;
    //         alert(years + "Years" + days1 + "Days");
    // }
    return (
    <Page title="Owner" breadcrumbs={[{ name: 'owners', active: true }]}>
      <Row>
      <Col  md={6}>
          <Card>
            <CardHeader>Owner Input</CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Owner Name</Label>
                  <Input
                    type="text"
                    name="vendor_name"
                    placeholder="owner name"
                    value={name}
                    onChange={(e)=>{
                      const re = /^[a-zA-Z\b\s]+$/; //rules
                      if (e.target.value === "" || re.test(e.target.value)) {
                      setName(e.target.value)}                      
                      }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Owner Mobile</Label>
                  <Input
                    type="text"
                    name="vendor_mobile"
                    placeholder="owner mobile"
                    value={mobile}
                    maxLength={10}
                    onChange={(e)=>{
                       const re = /^[0-9\b]+$/; //rules
                        if (e.target.value === "" || re.test(e.target.value)) {
                         // setPhoneNumber(e.target.value);
                      setMobile(e.target.value)}
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Owner Email</Label>
                  <Input
                    type="text"
                    name="vendor_"
                    placeholder="owner email"
                    value={email}
                    onChange={(e)=>{
                        // var email = e.target.value
                        // if (validator.isEmail(email)) {
                        // setEmailError('Valid Email :)')
                        // setEmail(e.target.value);
                        // } else {
                        // setEmailError('Enter valid Email!')
                        // }
                    //   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //rules
                    //   if (e.target.value === "" || re.test(e.target.value)) {
                      setEmail(e.target.value)
                    }}
                  />
                  <span style={{fontWeight: 'bold',color: 'red',}}>{emailError}</span>
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