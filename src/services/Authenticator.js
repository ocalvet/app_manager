const axios = require('axios');

class Authenticator {
  authenticate = async (username, password) => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/auth/signin`,
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        })
      });
      if (response.status !== 200) throw new Error('Error in response');
      const json = await response.json();
      localStorage.setItem('user', JSON.stringify(json));
      return json;
    } catch (e) {
      console.log('ERROR', e);
      this.signout();
      throw new Error('Wrong user name or password');
    }
  };

  getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  signout = () => {
    localStorage.removeItem('user');
  };
}

export default Authenticator;
