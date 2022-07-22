class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }
  
  _report(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  getCreateCard() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  putLike(cardsId) {
    return fetch(`${this._url}/cards/${cardsId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  deleteLike(cardsId) {
    return fetch(`${this._url}/cards/${cardsId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  deletePhoto(dataid) {
    return fetch(`${this._url}/cards/${dataid}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  patchUserInfo(name, job) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
      .then(this._report)
  }

  patchUserAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar `, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._report)
  }

  postNewPhoto(name, link) {
    return fetch(`${this._url}/cards `, {
     method: 'POST',
     headers: {
       authorization: this._token,
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name: name,
       link: link
     })
   })
      .then(this._report)
  }
}

export const api = new Api ('https://mesto.nomoreparties.co/v1/cohort-43', '857d549e-12c1-4ce2-8abd-cd5d9474c66a')