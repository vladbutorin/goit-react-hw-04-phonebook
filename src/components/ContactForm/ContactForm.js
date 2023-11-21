import React, { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || number.trim() === '') {
            alert('Please enter name and phone number');
            return;
        }

        onAddContact(name.trim(), number.trim());

        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Label>Name:</Label>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                />

                <Label>Number:</Label>
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <Button type="submit">Add contact</Button>
        </Form>
    );
};

export default ContactForm;