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
 const Item = () => {
    return (
    <Page title="Items" breadcrumbs={[{ name: 'items', active: true }]}>
      <Row>
      <Col  lg={12} md={12}>
          <Card>
            <CardHeader>Items Input</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="itemname">Item Name</Label>
                  <Input
                    type="text"
                    name="item_name"
                    placeholder="item name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Item Make</Label>
                  <Input
                    type="text"
                    name="item_make"
                    placeholder="item make"
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
export default Item;