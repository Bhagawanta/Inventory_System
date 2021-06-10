import Page from 'components/Page';
import React, { useState, useEffect } from 'react';
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

const Orders = () => {

    const [po, setPo] = useState('');
    const [podate, setPodate] = useState('');
    const [vname, setVname] = useState([]);
    const [iname, setIname] = useState([]);
    const [qty, setQty] = useState('');
    const [value, setValue] = useState('');
    const [dod, setDod] = useState('');
    const [doi, setDoi] = useState('');
    const [wyears, setWyears] = useState('');
    const [wupto, setWupto] = useState('');
    const [vendorid, setVendorid] = useState('');
    const [itemid, setItemid] = useState('');



    useEffect(()=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3001/vendorlist", requestOptions)
        .then(response => response.json())
        .then(result => {
            setVname(result)
          console.log(result)
        })
        .catch(error => console.log('error', error));
      
      fetch("http://localhost:3001/itemlist", requestOptions)
        .then(response => response.json())
        .then(result => {
            setIname(result)
          console.log(result)
        })
        .catch(error => console.log('error', error));
          
    },[])


    const checkValue = (e) => {

        e.preventDefault();
        const qty = e.target.value;

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost:3001/itemvalue/"+itemid, requestOptions)
          .then(response => response.json())
          .then(result => {
            // const json = JSON.parse(result);
            // const data = json["item_price"];
            const data = result[0]["item_price"]
            const value = qty*data
            setValue(value)
            console.log(value)
          })
          .catch(error => console.log('error', error));

          setQty(e.target.value)

    }

    const handleSubmit = (e) => {
          e.preventDefault();
          // alert(vendorid + "Hello " +itemid )
        
          if(po === null || po === ""){
            alert("Please provide field !");
          }
          else if(podate === null || podate === ""){
            alert("Please provide field !");
          }else if(vname === null || vname === ""){
            alert("Please provide field !");
          }else if(iname === null || iname === ""){
            alert("Please provide field !");
          }else if(qty === null || qty === ""){
            alert("Please provide field !");
          }else if(value === null || value === ""){
            alert("Please provide field !");
          }else if(dod === null || dod === ""){
            alert("Please provide field !");
          }else if(doi === null || doi === ""){
            alert("Please provide field !");
          }else if(wyears === null || wyears === ""){
            alert("Please provide field !");
          }else if(wupto === null || wupto === ""){
            alert("Please provide field !");
          }
          else {
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

              var urlencoded = new URLSearchParams();
              urlencoded.append("poid", po);
              urlencoded.append("podate", podate);
              urlencoded.append("iqty", qty);
              urlencoded.append("ivalue", value);
              urlencoded.append("dod", dod);
              urlencoded.append("doi", doi);
              urlencoded.append("wyears", wyears);
              urlencoded.append("wupto", wupto);
              urlencoded.append("vendorid", vendorid);
              urlencoded.append("itemid", itemid);

              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
              };

              fetch("http://localhost:3001/order", requestOptions)
                .then(response => response.json())
                .then(result => {
                  alert("Successfully Added....");
                  console.log(result)})
                .catch(error => console.log('error', error));
          }
    }
 
    return (
        <Page title="Orders" breadcrumbs={[{ name: 'orders', active: true }]}>
        <Row>
        <Col  lg={12} md={12}>
            <Card>
              <CardHeader>Order Input</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>PO ID</Label>
                    <Input
                      type="text"
                      name="po_id"
                      placeholder="po id"
                      value={po}
                      onChange={(e)=>setPo(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label >PO Date</Label>
                    <Input
                      type="date"
                      name="po_date"
                      placeholder="po date"
                      value={podate}
                      onChange={(e)=>setPodate(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                  <Label for="exampleSelect">Vendor Name</Label>
                  <Input type="select" name="vendor_name" onChange={(e)=>setVendorid(e.target.value)}>
                    { vname && (
                     vname.map((item,index)=>{
                       return(
                      <option key={index} dropdown={item} value={item.vendor_id}>{item.vendor_name}</option>
                       )
                     })
                    )}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Item Name</Label>
                  <Input type="select" name="item_name" onChange={(e)=>setItemid(e.target.value)}>
                  { iname && (
                     iname.map((item,index)=>{
                       return(
                      <option key={index} dropdown={item} value={item.item_id}>{item.item_name}</option>
                       )
                     })
                    )}
                  </Input>
                </FormGroup>
                  <FormGroup>
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      name="quantity"
                      placeholder="quantity"
                      value={qty}
                      onChange={checkValue}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Value</Label>
                    <Input
                      type="number"
                      name="value"
                      value={value}
                      onChange={(e)=>setValue(e.target.value)}
                      readOnly={true}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Date of Delivery</Label>
                    <Input
                      type="date"
                      name="dod"
                      placeholder="date of delivery"
                      value={dod}
                      onChange={(e)=>setDod(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Date of Installation</Label>
                    <Input
                      type="date"
                      name="doi"
                      placeholder="date of installation"
                      value={doi}
                      onChange={(e)=>setDoi(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Warranty in Years</Label>
                    <Input
                      type="number"
                      name="wyear"
                      placeholder="warranty in years"
                      value={wyears}
                      onChange={(e)=>setWyears(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Warranty Upto</Label>
                    <Input
                      type="date"
                      name="wupto"
                      placeholder="warranty upto"
                      value={wupto}
                      onChange={(e)=>setWupto(e.target.value)}
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

export default Orders;