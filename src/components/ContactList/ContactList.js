import React, { Component } from 'react';
import { Button } from './ContactList.styled';

class ContactList extends Component {
    render() {
        const { contacts, onDeleteContact } = this.props;

        return (
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}: {contact.number}
                        <Button type="button" onClick={() => onDeleteContact(contact.id)}>
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default ContactList;