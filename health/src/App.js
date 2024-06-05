import Profile from './Profile';
import Navigation from './Navigation';
import Footer from './Footer';
import React, { useState } from 'react';
import logo from './logo.svg';
import SurveyForm from './SurveyForm';

function App({person}) {
  return (
    <div className="profile-page">
      <Navigation />
      <SurveyForm />
      <Footer />
    </div>
  );
}



const ProfilePage = () => {
  // Example data for the person's profile
  const [person] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    location: 'New York, USA',
    avatar: logo, // URL to the person's avatar image
    // Add more profile information as needed
  });

  return (
    <div className="survey-page">
      <Profile person={person} />
      {/* Add survey questions and other content here */}
    </div>
  );
}

export default App;
