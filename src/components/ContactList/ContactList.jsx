import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";
import { ItemText, ListItem } from "components/ContactList/ContactList.styled";
import { Avatar, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts); 
  
  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.map(visibleContact => (
        <ListItem key={visibleContact.id}>
          <Avatar alt={visibleContact.name} src="/static/images/avatar/2.jpg" />
          <ItemText>
            {visibleContact.name}: {visibleContact.number}
          </ItemText>
              
          <IconButton onClick={() => (dispatch(deleteContact(visibleContact.id)))} aria-label="delete">
            <DeleteIcon />
          </IconButton>

        </ListItem>
      ))}
    </ul>
  );
};