import Page from 'components/Page';
import React, { useState } from 'react';
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
 const Item = () => {

    const [name, setName] = useState('');
    const [make, setMake] = useState('');
    const [value, setValue] = useState('');
    const [alt, setAlt] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //alert("Hello"+name);
        if(name === ""|| name === null){
          alert("Please enter item name");
        }
        else if(make === ""|| make === null){
          alert("Please enter item make");
        }
        else if(value === ""|| value === null){
          alert("Please enter item value");
        }
        else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("itemname", name);
        urlencoded.append("itemmake", make);
        urlencoded.append("itemprice", value);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        fetch("http://localhost:3001/item", requestOptions)
          .then(response =>{
            if(response.status === 200){
                console.log("SUCCESSS")
                return response.json();     
            }else if(response.status === 400){
                const err = JSON.stringify(response.json());
                alert("Please provide proper fields");
                console.log("SOMETHING WENT WRONG")
                this.setState({ requestFailed: true })
            }})
          .then(result => {
            alert("Successfully Added....");
            setName('');
            setMake('');
            setValue('');
            console.log(result)
          })
          .catch(error => console.log('error', error));
            }
          }
    return (
    <Page title="Items" breadcrumbs={[{ name: 'items', active: true }]}>
      <Row>
      <Col md={6}>
          <Card>
            <CardHeader>Items Input</CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Item Name</Label>
                  <Input
                    type="text"
                    name="item_name"
                    placeholder="item name"
                    value={name}
                    onChange={(e)=>{
                      const re = /^[a-zA-Z0-9\b\s\x28-\x29\x2D]+$/; //rules
                      if (e.target.value === "" || re.test(e.target.value)) {
                      setName(e.target.value)}
                      
                      }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Item Make</Label>
                  <Input
                    type="text"
                    name="item_make"
                    placeholder="item make"
                    value={make}
                    onChange={(e)=>{
                      const re = /^[a-zA-Z\b\s]+$/; //rules
                      if (e.target.value === "" || re.test(e.target.value)) {
                      setMake(e.target.value)}
                      }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Item Value</Label>
                  <Input
                    type="text"
                    name="item_value"
                    placeholder="item value"
                    value={value}
                    onChange={(e)=>{
                      const re = /^[0-9\b]+$/; //rules
                      if (e.target.value === "" || re.test(e.target.value)) {
                      setValue(e.target.value)}
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
export default Item;