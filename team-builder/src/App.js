import React, { useState } from 'react';
import './App.css';
import TeamForm from './Form';
import TeamMember from './TeamMember';
const initialFormValues = {
 name: '',
 favoriteColor: '',


}


export default function App() {
  
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {

    setFormValues({ ...formValues, [inputName]: inputValue });
  }
  const [teamCards, setTeamCards] = useState([]);
  const submitForm = () => {
    
    const newTeamMember = {
    
      name: formValues.name.trim(),
      favoriteColor: formValues.favoriteColor
      
    }

    if (!newTeamMember.name || !newTeamMember.favoriteColor) {
      console.log(formValues);
      return 
    }  
    setTeamCards([...teamCards, newTeamMember]);
  }
  return (
    <div className="App">
      <h1>hello world</h1>
    <TeamForm
    update={updateForm}
    submit={submitForm}
    values={formValues}
    />
    {teamCards.map(teamCard => <TeamMember key={teamCard.uuid} details={teamCard}/>)}
   </div>
  );



}
