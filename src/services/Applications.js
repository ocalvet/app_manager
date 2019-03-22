class Applications {
  constructor(auth) {
    this.auth = auth;
  }
  getAll = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/applications`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.auth.getUser().token}`
          }
        }
      );
      const json = await response.json();
      return json.data;
    } catch (e) {
      console.log('ERROR', e);
      throw new Error('There was an error check the console');
    }
  };
}

export default Applications;
