import appBody from './body.js';
import logInCall from './login.js';
import registerCall from './register.js';

const logRegSwitch = () => {

  const switchLink = document.querySelector('.form__profile-link');
  if(switchLink) {

    switchLink.addEventListener('click', () => {

      if(switchLink.classList.contains('create-profile')) {
        appBody.innerHTML = '';
        registerCall();
        logRegSwitch();
      }

      if(switchLink.classList.contains('enter-profile')) {
        appBody.innerHTML = '';
        logInCall();
        logRegSwitch();
      }

    });

  }

}

export default logRegSwitch;