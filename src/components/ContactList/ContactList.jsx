import css from './ContactList.module.css';
import Contact from './Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} phone={number} />;
      })}
    </ul>
  );
};

export default ContactList;
