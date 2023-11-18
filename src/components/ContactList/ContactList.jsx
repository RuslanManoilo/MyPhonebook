import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";
import { ItemBtn, ItemText, ListItem } from "components/ContactList/ContactList.styled";


export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts); 
  
  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.map(visibleContact => (
        <ListItem key={visibleContact.id}>
          <ItemText>
            {visibleContact.name}: {visibleContact.number}
          </ItemText>
              
          <ItemBtn onClick={() => (dispatch(deleteContact(visibleContact.id)))}>
            Delete
          </ItemBtn>

        </ListItem>
      ))}
    </ul>
  );
};