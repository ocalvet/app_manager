import axios from 'axios';

class Applications {
  constructor(auth) {
    this.auth = auth;
  }
  getAll = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/applications`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth.getUser().token}`
        }
      });
      return response.data.data;
    } catch (e) {
      console.log('ERROR', e);
      throw new Error('There was an error check the console');
    }
  };
}

export default Applications;
