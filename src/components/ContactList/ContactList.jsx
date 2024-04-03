import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactList = ({ contacts, children, deleteContact }) => {
    return (
      <div className={style.contacts}>
        <h2>Contacts</h2>
        {children}
        <ul className={style.contactsContainer}>
          {contacts.map(({ id, name, number }) => (
            <li className={style.contactsItem} key={id}>
              <p className={style.contactsName}>{name}</p>
              <p className={style.contactsNumber}> {number}</p>
              <button
                onClick={() => {
                  deleteContact(id);
                }}
                className={style.button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    deleteContact: PropTypes.func,
  };