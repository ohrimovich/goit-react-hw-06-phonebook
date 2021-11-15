import React from "react";
import { connect } from "react-redux";
import contactsAction from '../../redux/contacts/contacts-actions'
import { useState} from "react";
import s from './ContactForm.module.scss';

function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
 
    const handlerChange = e => {
        const { value } = e.currentTarget;
        switch (e.currentTarget.name) {
            case 'name': setName(value);
                break
            case 'number': setNumber(value);
                break;
            default: return;
        }        
    };

   const  reset = () => {
        setName('');
        setNumber('');
    }
    
    const handlerSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);
        reset();
    }
        return (
            <form className={s.form} onSubmit={handlerSubmit}>
                <label className={s.label}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handlerChange}
                        autoComplete="off"
                    />
                </label>
                <label className={s.label}>
                    Number
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handlerChange}
                        autoComplete="off"
                    />
                </label>
                <button type='submit' className={s.button}>Add contact</button>
            </form>
        )
    }

//   const formSubmitHandler = ( name ) => {
//     if (contacts.find(contact => contact.name === name)) {
//       alert( name + 'is already in contacts' )
//       return;
//     }

const mapDispatchToProps = dispatch => ({
        onSubmit: (name, number) => dispatch(contactsAction.addContact(name, number))
    })
export default connect(null,mapDispatchToProps)(ContactForm);