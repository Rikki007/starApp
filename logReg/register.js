import appBody from './body.js';

const registerCall = () => {

  appBody.innerHTML = `

    <div class="login-container">

      <h1 class="login-container__title">Register</h1>

      <form class="form" action="#" method="post">

        <input class="form__input" type="text" name="username" placeholder="Username" required>

        <input class="form__input" type="password" name="password" placeholder="Password" required>

        <button class="form__button register" type="submit">Register</button>

        <p href="#" class="form__profile-link enter-profile">If you have a profile already, click here to log in</p>

      </form>

    </div>

  `

}

export default registerCall;