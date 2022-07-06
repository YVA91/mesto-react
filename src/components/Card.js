function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }  

  return (
    <li className="photo__item">
      <img className="photo__item-img" 
        src={card.link} 
        alt={card.name} 
        onClick={handleClick}
      />
      <button className="photo__remove" type="button" aria-label="удалить фото"></button>
      <div className="photo__item-signature">
        <h2 className="photo__item-title">{card.name}</h2>
        <div className="photo__likes-conteiner">
          <button className="photo__item-like" type="button" aria-label="лайк"></button>
          <p className="photo__likes-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card; 