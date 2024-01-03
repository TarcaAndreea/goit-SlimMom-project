import React from 'react';
import { ContactForm } from 'components/NavBar/navBar';
import { Filter } from 'components/Footer/filter';
import { ContactList } from 'components/CalculatorCalorieForm/calculatorCalorieForm';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsAuthenticated } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <UserMenu />
      <h1 style={{ paddingLeft: '30px', fontSize: '40px' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ paddingLeft: '500px', fontSize: '40px' }}>Contacts</h2>
      <Filter />
      {isAuthenticated && <ContactList />}
    </div>
  );
}
