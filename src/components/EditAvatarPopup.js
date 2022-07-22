import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const avatarRef = useRef()

  useEffect(() => {
    avatarRef.current.value=""
  })

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  } 
  
  return (
    <PopupWithForm
      name = "new-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title = "Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}>

      <fieldset className="popup__form-item">
        <label className="popup__field">
          <input 
            className="popup__field-item" 
            id="avatar" 
            type="url" 
            placeholder="Ссылка на картинку"
            required
            ref={avatarRef}/>
          <span className="popup__field-item-error" id="avatar-error"></span>
      </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;