import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactLIst";
import Filter from "./components/Filter";

function App () {
    return (
      <div className='container'>
        <h1>PhoneBook</h1>
        <ContactForm/>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    ) 
  };

export default App;


