import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
  Promise.all([api.getUserInfo(), api.getCreateCard()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <img className="profile__avatar" src= {userAvatar} alt="аватарка" />
          <button className="profile__avatar-edit" type="button" aria-label="изменить" onClick={props.onEditAvatar}></button>
        </div>
        <div>
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
      </section>

      <section>
        <ul className="photo">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
              />)
            })
          }
        </ul>
      </section>


      <section className="popup popup_open-photo ">
        <figure className="popup__figure">
          <button className="popup__close popup__close_img" type="reset" aria-label="закрыть"></button>
          <img className="popup__item-img" src="#" alt="#" />
          <figcaption>
            <h2 className="popup__item-title">#</h2>
          </figcaption>
        </figure>
      </section>



      <section className="popup popup_confirm">
        <div className="popup__container">
          <button className="popup__close popup__close_photo" type="reset" aria-label="закрыть"></button>
          <form name="profile" className="popup__form">
            <h2 className="popup__title popup__title_indent-confirm">Вы уверены?</h2>
            <button className="popup__save popup__save_indent-confirm" type="submit" aria-label="Да">Да</button>
          </form>
        </div>
      </section>

    </main>
  );
}

export default Main;