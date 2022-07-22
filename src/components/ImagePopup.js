function ImagePopup(props) {
  return (
    <section className={`popup popup_open-photo ${props.card.link && 'popup_opened'}`}>
      <figure className="popup__figure">
        <button 
          className="popup__close popup__close_img" 
          type="reset" 
          aria-label="закрыть"
          onClick={props.onClose}
          ></button>
          <img 
          className="popup__item-img" 
          src={props.card.link} 
          alt={props.card.name}  
        />
        <figcaption>
          <h2 className="popup__item-title">{props.card.name}</h2>
        </figcaption>
      </figure>
    </section>
    );
  }
  
export default ImagePopup;
  