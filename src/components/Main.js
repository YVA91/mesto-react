import { useContext} from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
 
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <img className="profile__avatar" src={currentUser.avatar} alt="аватарка" />
          <button className="profile__avatar-edit" type="button" aria-label="изменить" onClick={props.onEditAvatar}></button>
        </div>
        <div>
          <div className="profile__name-edit">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
      </section>

      <section>
        <ul className="photo">
          {props.cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
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