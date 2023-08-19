import Filter from "./Filter/Filter";
import { Container } from "./App.styled";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


const App = () => {  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
      <ToastContainer />
    </Container>
  );
};
 
export default App;