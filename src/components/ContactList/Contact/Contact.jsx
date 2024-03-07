import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

import css from './Contact.module.css';

const Contact = ({ name, phone }) => {
  return (
    <li className={css.item}>
      <div className={css.container}>
        <p className={css.text}>
          <MdPerson className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <MdPhone className={css.icon} />
          {phone}
        </p>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
