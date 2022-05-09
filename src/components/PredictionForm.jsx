import { useState } from "react";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import PreductionReasultModel from "./PreductionReasultModel";

const PredictionForm = () => {
    const [itemType, setItemType ] = useState(null);
    const [itemFatContent, setItemFatContent ] = useState(null);
    const [year, setYear ] = useState(null);
    const [itemMrp, setItemMrp ] = useState(null);
    const [location, setLocation ] = useState(null);
    const [outletSize, setOutletSize ] = useState(null);
    const [outletType, setOutletType ] = useState(null);

    const [openModal, setOpenModal] = useState(true)
    const [result, setResult] = useState()

    console.log("item type", itemType);
  return (
    <div>
      <div className="container"></div>
      <Form>
        <Container fluid className="mx-auto mt-5" style={{maxWidth:'850px'}}>
          <Row>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary" >item type</Label>
              <Input type="select" 
              value={itemType || ""}
              onChange={(e)=> setItemType(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary">item fat content</Label>
              <Input type="select" 
              
              value={itemFatContent || ""}
              onChange={(e)=> setItemFatContent(e.target.value)}
              >
                 <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary">outlet size</Label>
              <Input type="select"
              value={outletSize || ""}
              onChange={(e)=> setOutletSize(e.target.value)}
              >
              <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary">outlet location type</Label>
              <Input type="select"
              value={location || ""}
              onChange={(e)=> setLocation(e.target.value)}
              >
              <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary">outlet type</Label>
              <Input type="select"
              value={outletType || ""}
              onChange={(e)=> setOutletType(e.target.value)}
              >
              <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary">Year</Label>
              <Input type="text" 
              value={year || ""}
              onChange={(e)=> setYear(e.target.value)}
              />
            </Col>
            <Col sx={12} md={6} className="mt-3">
              <Label className="text-capitalize text-secondary">MRP price</Label>
              <Input type="number"
              min={1}
              value={itemMrp || ""} 

               onChange={(e)=> setItemMrp(e.target.value)}
              />
            </Col>
            
          </Row>
          <Row className="pt-5">
          <Col sx={12} className="d-flex justify-content-end">
            <Button color="primary " outline>Predict Sales</Button>
            <Button color="danger ms-3" outline>Cancel</Button>
            </Col>
          </Row>
        </Container>
      </Form>

      <PreductionReasultModel open={openModal} setOpen={setOpenModal} data={''}/>
    </div>
  );
};

export default PredictionForm;
