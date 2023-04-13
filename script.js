const html = document.documentElement
const avatarImg = document.querySelector('#profile img')

function changeAvatarImageByMode() {
  if (html.classList.contains('light')) {
    avatarImg.setAttribute('src', './assets/avatar-light.png')
    avatarImg.setAttribute('alt', 'Foto do Mayk Brito sorrindo, de jaqueta preta e óculos de sol com fundo degrade linear horizontal roxo e azul')
  } else {
    avatarImg.setAttribute('src', './assets/avatar.png')
    avatarImg.setAttribute('alt', 'Foto do Mayk Brito sorrindo, de jaqueta preta e óculos com fundo degrade linear horizontal roxo e azul')
  }
}

function toggleMode() {
  html.classList.toggle('light')
  changeAvatarImageByMode()
}