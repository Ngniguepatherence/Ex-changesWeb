import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

function ProfileModal(props) {
  const firestore = useFirestore();
  const [username, setUsername] = useState(props.user.username);
  const [avatar, setAvatar] = useState(props.user.avatar);
  const [status, setStatus] = useState(props.user.status);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: validate form values

    // Save form values to database
    await firestore.collection('utilisateurs').doc(props.user.id).update({
      nom:username,
      avatar: avatar,
      status: status
    });

    // Close modal
    props.onClose();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <h2>Modifier le profil</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nomd'utilisateur:</label>
          <input type="text" id="nom" name="nom" value={username} onChange={handleUsernameChange} /><br /><br />

          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" name="avatar" value={avatar} onChange={handleAvatarChange} /><br /><br />

          <label htmlFor="status">Statut:</label>
          <input type="text" id="status" name="status" value={status} onChange={handleStatusChange} /><br /><br />

          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;