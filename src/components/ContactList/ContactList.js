import React from 'react';
import { Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
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
};

export default ContactList;