import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle ';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts(initialContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isNameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`The contact ${name} already exists in the phonebook.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
    setFilter('');
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setFilter('');
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        title="Find contacts by name: "
        value={filter}
        onChange={handleFilterChange}
      />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
      <GlobalStyle />
    </div>
  );
};

export default App;