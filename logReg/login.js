import appBody from './body.js';

const logInCall = () => {

  appBody.innerHTML = `

    <div class="login-container">

      <h1 class="login-container__title">Login</h1>

      <form class="form" action="#" method="post">

        <input class="form__input" type="text" name="username" placeholder="Username" required>

        <input class="form__input" type="password" name="password" placeholder="Password" required>

        <button class="form__button login" type="submit">Login</button>

        <p class="form__profile-link create-profile">If you don't have a profile already, click here to create a profile</p>

      </form>

    </div>

  `

}

export default logInCall;