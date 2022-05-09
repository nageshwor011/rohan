import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import getRequiredDataApi from "../services/getRequiredData";
import PreductionReasultModel from "./PreductionReasultModel";

// Function to verify form

function verifyForm(props) {
  const {
    itemType,
    itemFatContent,
    year,
    itemMrp,
    location,
    outletSize,
    outletType,
  } = props;

  if (!itemType) return { isVerified: false, message: "Select a item type" };
  if (!itemFatContent)
    return { isVerified: false, message: "Select a item fat content" };
  if (!outletSize)
    return { isVerified: false, message: "Select a outlet size" };
  if (!location) return { isVerified: false, message: "Select a location" };
  if (!outletType) return { isVerified: false, message: "Select a outer type" };
  if (!itemType) return { isVerified: false, message: "Select a item type" };
  if (!year) return { isVerified: false, message: "Select a year" };
  if (year.length < 3) return { isVerified: false, message: "Invalid date" };
  if (Number(year) < 1987)
    return { isVerified: false, message: "Invalid date" };
  if (!itemMrp) return { isVerified: false, message: "Enter a MRP price" };

  return { isVerified: true, message: "Verified" };
}

const PredictionForm = () => {
  const [itemType, setItemType] = useState(null);
  const [itemFatContent, setItemFatContent] = useState(null);
  const [year, setYear] = useState(null);
  const [itemMrp, setItemMrp] = useState(null);
  const [location, setLocation] = useState(null);
  const [outletSize, setOutletSize] = useState(null);
  const [outletType, setOutletType] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [requiredData, setRequiredData] = useState(null);
  const [result, setResult] = useState();

  // Function to set minimal required data

  async function setRequredData() {
    const requiredDataRes = await getRequiredDataApi();
    setRequiredData(requiredDataRes);
  }

  useEffect(() => {
    setRequredData();
  }, []);

  // Function to reset all fileds

  function resetHandler() {
    setItemType(null);
    setItemFatContent(null);
    setYear(null);
    setItemMrp(null);
    setLocation(null);
    setOutletSize(null);
    setOutletType(null);
    setRequredData(null);
    setResult(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { isVerified, message } = verifyForm({
      itemType,
      itemFatContent,
      year,
      itemMrp,
      location,
      outletSize,
      outletType,
    });

    if (!isVerified) {
      toast.error(message);
      return;
    }
  }

  return (
    <div>
      <div className="container"></div>
      <Form onSubmit={handleSubmit}>
        <Container fluid className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
          <Row>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">
                item type
              </Label>
              <Input
                type="select"
                value={itemType || ""}
                onChange={(e) => setItemType(e.target.value)}
              >
                <option value="none" selected hidden>
                  Select an Option
                </option>
                {requiredData &&
                  requiredData.item_type.map((data, index) => (
                    <option key={index} value={data[0]}>
                      {data[1]}
                    </option>
                  ))}
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">
                item fat content
              </Label>
              <Input
                type="select"
                value={itemFatContent || ""}
                onChange={(e) => setItemFatContent(e.target.value)}
              >
                <option value="none" selected hidden>
                  Select an Option
                </option>

                {requiredData &&
                  requiredData.item_fat_content.map((data, index) => (
                    <option key={index} value={data[0]}>
                      {data[1]}
                    </option>
                  ))}
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">
                outlet size
              </Label>
              <Input
                type="select"
                value={outletSize || ""}
                onChange={(e) => setOutletSize(e.target.value)}
              >
                <option value="none" selected hidden>
                  Select an Option
                </option>

                {requiredData &&
                  requiredData.outlet_size.map((data, index) => (
                    <option key={index} value={data[0]}>
                      {data[1]}
                    </option>
                  ))}
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">
                outlet location type
              </Label>
              <Input
                type="select"
                value={location || ""}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="none" selected hidden>
                  Select an Option
                </option>

                {requiredData &&
                  requiredData.outlet_location.map((data, index) => (
                    <option key={index} value={data[0]}>
                      {data[1]}
                    </option>
                  ))}
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">
                outlet type
              </Label>
              <Input
                type="select"
                value={outletType || ""}
                onChange={(e) => setOutletType(e.target.value)}
              >
                <option value="none" selected hidden>
                  Select an Option
                </option>

                {requiredData &&
                  requiredData.outlet_size.map((data, index) => (
                    <option key={index} value={data[0]}>
                      {data[1]}
                    </option>
                  ))}
              </Input>
            </Col>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">Year</Label>
              <Input
                type="text"
                value={year || ""}
                onChange={(e) => {
                  if (!e.target.value.length) {
                    setYear(null);
                    return;
                  }

                  if (e.target.value.length > 4) return;

                  if (isNaN(e.target.value)) {
                    setYear(null);
                    return;
                  }
                  if (Number(e.target.value) <= 0) return;
                  setYear(e.target.value);
                }}
              />
            </Col>
            <Col sx={12} md={6} className="mt-4">
              <Label className="text-capitalize text-secondary">
                MRP price
              </Label>
              <Input
                type="text"
                value={itemMrp || ""}
                onChange={(e) => {
                  if (!e.target.value.length) {
                    setItemMrp(null);
                    return;
                  }
                  if (isNaN(e.target.value)) {
                    setItemMrp(null);
                    return;
                  }
                  if (Number(e.target.value) <= 0) return;
                  setItemMrp(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="pt-5">
            <Col sx={12} className="d-flex justify-content-end">
              <Button color="primary " type="submit" outline>
                Predict Sales
              </Button>
              <Button
                color="danger ms-3"
                type="button"
                outline
                onClick={resetHandler}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>

      <PreductionReasultModel
        open={openModal}
        setOpen={setOpenModal}
        data={""}
      />
    </div>
  );
};

export default PredictionForm;
