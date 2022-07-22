import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName (e) {
    setName(e.target.value);
  }
  function handleChangeLink (e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({name, link});
  } 
 
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]); 

  return (
    <PopupWithForm
        name = "new-photo"
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        title = "Новое место"
        buttonText = "Сохранить"
        onSubmit={handleSubmit}>
    
        <fieldset className="popup__form-item">
          <label className="popup__field">
            <input 
              className="popup__field-item" 
              id="title" 
              type="text"  
              placeholder="Название"  
              required
              minLength="2"
              maxLength="60"
              value={name}
              onChange={handleChangeName}/>
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
                value={link}
                onChange={handleChangeLink}/>
              <span className="popup__field-item-error" id="link-error"></span>
            </label>
        </fieldset>
      </PopupWithForm>
  );
}

export default AddPlacePopup;