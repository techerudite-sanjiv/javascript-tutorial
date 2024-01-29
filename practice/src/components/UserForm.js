import "./userform.css"
import Select from 'react-select';
import React, { useState } from 'react'
import ProfilePictureUploader from './LogoDesign'
import { Button, Card, Form, Row, Col, Input, Label, Modal, } from 'reactstrap'


const UserForm = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [memberData, setMemberData] = useState([{ id: 1, value: '' }]);
  const [propertyData, setPropertyData] = useState([{ id: 1, value: '' }]);



  //Property repeater
  const addPropertyItem = () => {
    setPropertyData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, value: '' },
    ]);
  };

  const propertyHandleChange = (id, value) => {
    setPropertyData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };
  const propertyRemoveItem = (id) => {
    setPropertyData((prevData) => prevData.filter((item) => item.id !== id));
  };

  //Member repeater
  const addMemberData = () => {
    setMemberData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, value: '' },
    ]);
  };

  const memberHandleChange = (id, value) => {
    setMemberData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };
  const memberRemoveItem = (id) => {
    setMemberData((prevData) => prevData.filter((item) => item.id !== id));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => { }
  const handleContactSubmit = (e) => { }


  const options = [
    { value: 'single', label: 'Single' },
    { value: 'double', label: 'Double' },
  ];
  const propertyOptions = [
    { value: 'hostel', label: 'Hostel' },
    { value: 'private', label: 'Private' },
  ];

  return (
    <div>

      <Card className='contact-form-box '>

        <div>
          <h3 className='text-center'>Property Setup</h3>
          <ProfilePictureUploader />
        </div>

        <Form className='form-data' onSubmit={handleContactSubmit}>
          <Row>
            <Col className="mb-3" md="12">
              <Label className="form-label">Registered Brand name <span className='text-danger'>*</span></Label>
              <Input className="mb-0" type="text" id="name" name='first_name' onChange={handleChange} />

            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Number of Properties <span className='text-danger'>*</span></Label>
              <Select
                options={options}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding:"5px 0",
                    borderRadius:10,
                    borderColor: state.isFocused ? '#bac2ba' : '#bac2ba',
                  }),
                }}
              />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Property Name <span className='text-danger'>*</span></Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Property Type <span className='text-danger'>*</span></Label>
              <Select
                options={propertyOptions}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding:"5px 0",
                    borderRadius:10,
                    borderColor: state.isFocused ? '#bac2ba' : '#bac2ba',
                  }),
                }}
              />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Phone number <span className='text-danger'>*</span></Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Email Address <span className='text-danger'>*</span></Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Address <span className='text-danger'>*</span></Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">State </Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">City</Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Label className="form-label">Pincode</Label>
              <Input className="mb-0" type="text" id="email" name='email' onChange={handleChange} />
            </Col>
            <Col className="mb-3" md="12">
              <Button onClick={toggle} color=""> <i className="fa-regular fa-plus" ></i> Add property Details <span className='text-danger'>*</span></Button>
            </Col>
          </Row>
          <br />
        </Form>
      </Card>

      <Modal isOpen={modal} toggle={toggle} >
        <div className='custom-modal'>
          <h4 className='text-center'>Property Details</h4>
          <Form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-between py-4'>
              <Label>Property Space Name <span className='important'>(minimum one required)</span></Label>
              <div className='add-btn' type="button" onClick={addPropertyItem}>
                <i className="fa-regular fa-plus" ></i>
              </div>
            </div>
            {propertyData.map((item) => (
              <Col className="mb-3" md="12">
                <div key={item.id} className='d-flex gap-2 custom-modal-inp'>
                  <Input
                    type="text"
                    value={item.value}
                    onChange={(e) => propertyHandleChange(item.id, e.target.value)}
                  />
                  <div className='remove-btn' type="button" onClick={() => propertyRemoveItem(item.id)}>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </Col>
            ))}

          </Form>
          <Form onSubmit={handleSubmit} >
            <div className='d-flex justify-content-between py-4'>
              <Label>Add Members <span className='important'>(minimum one required)</span></Label>
              <div className='add-btn' type="button" onClick={addMemberData}>
                <i className="fa-regular fa-plus" ></i>
              </div>
            </div>
            {memberData.map((item) => (
              <Col className="mb-3" md="12">
                <div key={item.id} className='d-flex gap-2  custom-modal-inp'>
                  <Input
                    type="text"
                    value={item.value}
                    onChange={(e) => memberHandleChange(item.id, e.target.value)}
                  />
                  <div className='remove-btn' type="button" onClick={() => memberRemoveItem(item.id)}>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </Col>
            ))}
          </Form>
          <Col className="mb-3 custom-modal-btn" md="12">
            <Button className='d-flex' onClick={toggle} type="submit">Cancel</Button>
          </Col>
          <Col className="mb-3 custom-modal-btn" md="12">
            <Button onClick={toggle} type="submit">Save</Button>
          </Col>
        </div>
      </Modal>

    </div>
  )
}

export default UserForm