import { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const dataArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(dataArr);
  const [inputFilterVal, setimputFilterVal] = useState('');

  const arrFilterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputFilterVal.toLowerCase().trim())
  );

  const handleImputFilterVal = ev => {
    setimputFilterVal(ev.target.value);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <SearchBox
          imputFilterVal={inputFilterVal}
          handleImputFilterVal={handleImputFilterVal}
        />
        <ContactList contacts={arrFilterContacts} />
      </div>
    </>
  );
}

export default App;
