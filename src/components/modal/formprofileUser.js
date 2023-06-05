// import React, { useState, useEffect } from 'react';
// import  firebase from 'firebase/app';
// import  'firebase/auth';
// import 'firebase/firestore';

// function MyComponent() {
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     // Récupère l'utilisateur actuellement authentifié à partir de Firebase
//     const user = firebase.auth().currentUser;

//     if (user) {
//       // Si l'utilisateur est authentifié, récupère son profil complet
//       user
//         .getIdTokenResult()
//         .then((idTokenResult) => {
//           const profile = idTokenResult.claims;

//           // Met à jour l'état avec le profil complet de l'utilisateur
//           setUserProfile(profile);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       {userProfile ? (
//         <div>
//           <h2>Profil de {userProfile.name}</h2>
//           <p>Email : {userProfile.email}</p>
//           <p>Téléphone : {userProfile.phone_number}</p>
//         </div>
//       ) : (
//         <h2>Chargement...</h2>
//       )}
//     </div>
//   );
// }

// export default MyComponent;