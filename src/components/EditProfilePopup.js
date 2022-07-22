import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  function handleChangeUserName(e) {
    setUserName(e.target.value);
  }
  function handleChangeUserDescription(e) {
    setUserDescription(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name: userName, 
      about: userDescription,
    });
  }

  return (
    <PopupWithForm
      name = "new-name"
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      title = "Редактировать профиль"
      buttonText = "Сохранить"
      onSubmit = {handleSubmit}>
        
      <fieldset className="popup__form-item">
        <label className="popup__field">
          <input 
            className="popup__field-item" 
            id="name" 
            type="text"  
            value={userName || ""} 
            required
            minLength="2"
            maxLength="60"
            placeholder="Имя"
            onChange={handleChangeUserName} />
          <span className="popup__field-item-error" id="name-error"></span>
        </label>
        <label className="popup__field">
          <input 
            className="popup__field-item" 
            id="job" 
            type="text"  
            value={userDescription  || ""} 
            minLength="2"
            maxLength="60"
            placeholder="О себе"
            required
            onChange={handleChangeUserDescription}/>
          <span className="popup__field-item-error popup__field-item-error_visible" id="job-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;