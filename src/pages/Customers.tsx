import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { addContact } from "../store/contactsSlice";


export default function Customers() {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  return <div>
    <h1>Customers</h1>

    <button onClick={() => {
      // Dispatch the addContact action with a new contact object
      dispatch(
        addContact({ id: Date.now().toString(), name: "New Contact", phone: "123456789" })
      );
    }
    }>Add Customer</button>
    <ul>
      {contacts.items.map(contact => (
        <li key={contact.id}>{contact.name} - {contact.phone}</li>
      ))}
    </ul>
  </div>;
}
