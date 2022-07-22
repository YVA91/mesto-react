import { useState, useEffect }from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCreateCard()])
      .then(([data, cards]) => {
        setCurrentUser(data);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen (true)
  }
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen (true)
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen (true)
  }
  function handleCardClick (card) {
    setSelectedCard (card)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen (false)
    setIsAddPlacePopupOpen (false)
    setIsEditAvatarPopupOpen (false)
    setSelectedCard({})
    
  }

  function handleUpdateUser(data) {
    api.patchUserInfo(data.name, data.about)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleUpdateAvatar(avatar) {
    api.patchUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const likeStatus = isLiked ? api.deleteLike(card._id) : api.putLike(card._id)
    likeStatus.then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardDelete(card) {
    api.deletePhoto(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddPlaceSubmit (card) {
    api.postNewPhoto(card.name, card.link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err)
    })
}


  return (
    < CurrentUserContext.Provider value={currentUser} >
      <Header/> 
      <Main
        onEditAvatar = {handleEditAvatarClick} 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />

      <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}> 
      </EditProfilePopup> 

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}>
      </EditAvatarPopup> 

      <AddPlacePopup
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}>
      </AddPlacePopup>

  
      <PopupWithForm
        name = "confirm"
        onClose = {closeAllPopups}
        title = "Вы уверены?"
        buttonText = "Да">
      </PopupWithForm>

      <ImagePopup
        onClose = {closeAllPopups}
        card = {selectedCard}
      />

     <Footer/>
    </CurrentUserContext.Provider>
  );
  }

export default App;
