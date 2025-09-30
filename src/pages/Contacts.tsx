import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { addContact } from "../store/contactsSlice";
import { Button } from "../components/common/Button";


export default function Contacts() {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  return <div>
    <h1>Contacts</h1>

    <Button
      variant="outlined"
      label="+ Add Customer"
      disabled={false}
      onClick={() => {
        // Dispatch the addContact action with a new contact object
        dispatch(
          addContact({ id: Date.now().toString(), name: "New Contact", phone: "123456789" })
        );
      }
      }
    />

    <ul>
      {contacts.items.map(contact => (
        <li key={contact.id}>{contact.name} - {contact.phone}</li>
      ))}
    </ul>
  </div>;
}
