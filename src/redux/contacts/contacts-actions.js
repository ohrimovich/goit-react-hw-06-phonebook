// import types from './contacts-types'
import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const addContact = createAction('contacts/add', (name, number) => ({
      payload: {
        name,
        number,
        id: nanoid()
    }
}))

// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         name,
//         number,
//         id: nanoid()
//     }
// });

const deleteContact = createAction('contacts/delete')

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

const changeFilter = createAction('contacts/changeFilter')

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });

export default {addContact, deleteContact,changeFilter}