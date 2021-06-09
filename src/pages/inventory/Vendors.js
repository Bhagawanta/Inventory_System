import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';

const Vendors = () => {
    return (
    <Page title="Vendors" breadcrumbs={[{ name: 'vendors', active: true }]}>
      <Row>
      <Col  lg={12} md={12}>
          <Card>
            <CardHeader>Vendors Input</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="vendorname">Vendor Name</Label>
                  <Input
                    type="text"
                    name="vendor_name"
                    placeholder="vendor name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Vendor Mobile</Label>
                  <Input
                    type="number"
                    name="vendor_mobile"
                    placeholder="vendor mobile"
                  />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup> */}
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