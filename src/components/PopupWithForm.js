function PopupWithForm(props) {
  
  return (
    <section className={`popup popup_${props.name} ${props.isOpen && 'popup_opened' }`}>
      <div className="popup__container">
        <button className="popup__close" type="reset" aria-label="закрыть" onClick={props.onClose}></button>
        <form name="profile" className="popup__form" id="resetformnewname" onSubmit={props.onSubmit} >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__save" type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
        </form>
      </div>
  </section>
  );
}

export default PopupWithForm;