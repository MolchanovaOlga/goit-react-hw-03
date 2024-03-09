import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              id={id}
              name={name}
              phone={number}
              handleDelete={handleDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
