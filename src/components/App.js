import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';

function App() {


const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);


function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen (true)
}
function handleEditProfileClick () {
  setIsEditProfilePopupOpen (true)
}
function handleAddPlaceClick () {
  setIsAddPlacePopupOpen (true)
}

function closeAllPopups () {
  setIsEditProfilePopupOpen (false)
  setIsAddPlacePopupOpen (false)
  setIsEditAvatarPopupOpen (false)
}

  return (
    <>
     <Header/> 
      <Main
        onEditAvatar = {handleEditAvatarClick} 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
      />
      <PopupWithForm
      name = "new-name"
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllPopups}
      title = "Редактировать профиль"
      buttonText = "Сохранить">
    
      <fieldset className="popup__form-item">
          <label className="popup__field">
            <input 
            className="popup__field-item" 
            id="name" 
            type="text"  
            placeholder="Имя" 
            required
            minLength="2"
            maxLength="60"
            />
            <span className="popup__field-item-error" id="name-error"></span>
          </label>
          <label className="popup__field">
            <input 
              className="popup__field-item" 
              id="job" 
              type="text"  
              placeholder="О себе"
              minLength="2"
              maxLength="60"
              required />
            <span className="popup__field-item-error popup__field-item-error_visible" id="job-error"></span>
          </label>
      </fieldset>
      </PopupWithForm>

      <PopupWithForm
      name = "new-photo"
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllPopups}
      title = "Новое место"
      buttonText = "Сохранить">
    
      <fieldset className="popup__form-item">
              <label className="popup__field">
                <input 
                className="popup__field-item" 
                id="title" 
                type="text"  
                placeholder="Название"  
                required
                minLength="2"
                maxLength="60" />
                <span className="popup__field-item-error" id="title-error"></span>
              </label>
              <label className="popup__field">
                <input 
                className="popup__field-item" 
                id="link" 
                type="url" 
                placeholder="Ссылка на картинку"
                required
                minLength="2"
                maxLength="60" />
                <span className="popup__field-item-error" id="link-error"></span>
              </label>
            </fieldset>
      </PopupWithForm>


      <PopupWithForm
      name = "new-avatar"
      isOpen = {isEditAvatarPopupOpen}
      onClose = {closeAllPopups}
      title = "Обновить аватар"
      buttonText = "Сохранить">
    
      <fieldset className="popup__form-item">
        <label className="popup__field">
          <input 
          className="popup__field-item" 
          id="avatar" 
          type="url" 
          placeholder="Ссылка на картинку"  
          required
          minLength="2"
          maxLength="60" />
          <span className="popup__field-item-error" id="avatar-error"></span>
       </label>
      </fieldset>
      </PopupWithForm>


  

     <Footer/>
    </>
  );
}

export default App;
