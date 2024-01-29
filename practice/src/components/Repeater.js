import React, { useState } from 'react';
import { Button, Form, Label } from 'reactstrap';

const FormCustomRepeater = () => {
    const [formData, setFormData] = useState([{ id: 1, value: '' }]);

    const handleAddItem = () => {
        setFormData((prevData) => [
            ...prevData,
            { id: prevData.length + 1, value: '' },
        ]);
    };

    const handleRemoveItem = (id) => {
        setFormData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleChange = (id, value) => {
        setFormData((prevData) =>
            prevData.map((item) => (item.id === id ? { ...item, value } : item))
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>Property Space Name <span>(minimum one required)</span></Label> 
             <Button type="button" onClick={handleAddItem}>
                Add Item
            </Button>
            {formData.map((item) => (
                <div key={item.id}>
                    <input
                        type="text"
                        value={item.value}
                        onChange={(e) => handleChange(item.id, e.target.value)}
                    />
                    <Button type="button" onClick={() => handleRemoveItem(item.id)}>
                        Remove
                    </Button>
                </div>
            ))}

            <Button type="submit">Cancel</Button>
            <Button type="submit">Save</Button>
        </Form>
    );
};

export default FormCustomRepeater;
