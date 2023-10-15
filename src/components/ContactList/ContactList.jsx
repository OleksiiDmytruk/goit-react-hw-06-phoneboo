import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Btn } from './ContactList.styled';
import { deleteContact } from 'redax/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter);
  const filterContacts = contacts.filter(el =>
    el.contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filterContacts.map(({ id, contact: { name, number } }) => (
        <Item key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
