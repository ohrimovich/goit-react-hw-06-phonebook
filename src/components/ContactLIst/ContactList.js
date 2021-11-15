import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import s from './ContactList.module.scss'


function ContactList({contacts, deleteContact}) {
    return (
        <ul className={s.list}>
            {contacts.map(contact => <li className={s.item} key={contact.id}><span className={s.name}>{contact.name}</span>:<span className={s.number}>{contact.number}</span> 
            <button className={s.button} type='button' onClick={() => deleteContact(contact.id)}>Delete</button></li>)}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

  const getFilteredContactList = (allContacts, filterValue) => {
            return allContacts.filter(
      contact => contact.name.toLocaleLowerCase()
        .includes(filterValue.toLocaleLowerCase())
    )
  }

const mapStateToProps = ({contacts: {items, filter}}) => ({
    contacts: getFilteredContactList(items, filter)
})

const mapDispatchToProps = dispatch =>  ({
    deleteContact: (id) => dispatch(contactsActions.deleteContact(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);