import React, { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.trim() === '' || this.state.number.trim() === '') {
            alert('Please enter name and phone number');
            return;
        }

        this.props.onAddContact(this.state.name.trim(), this.state.number.trim());

        this.setState({
            name: '',
            number: ''
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                    />

                    <Label>Number:</Label>
                    <Input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
}

export default ContactForm;