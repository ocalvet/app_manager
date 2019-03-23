import axios from 'axios';

class Authenticator {
  authenticate = async (username, password) => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/auth/signin`,
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        data: {
          username,
          password
        }
      });
      if (response.status !== 200) throw new Error('Error in response');
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
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
