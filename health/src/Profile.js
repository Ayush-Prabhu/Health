
import './App.css';


function Profile({person}) {
    return (
      <div className="profile-page">
        <h1>Profile Page</h1>
        <div className="profile-info">
          <img className="profile" src={person.avatar} alt={person.name} />
          <h2>{person.name}</h2>
          <p>Email: {person.email}</p>
          <p>Age: {person.age}</p>
          <p>Location: {person.location}</p>
          {/* Add more profile information here */}
        </div>
      </div>
    );
  }
  
  
  
//   const SurveyPage = () => {
//     // Example data for the person's profile
//     const [person] = useState({
//       name: 'John Doe',
//       email: 'john@example.com',
//       age: 30,
//       location: 'New York, USA',
//       avatar: logo, // URL to the person's avatar image
//       // Add more profile information as needed
//     });
  
//     return (
//       <div className="survey-page">
//         <Profile person={person} />
//         {/* Add survey questions and other content here */}
//       </div>
//     );
//   }

   export default Profile;