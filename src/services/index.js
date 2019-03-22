import Authenticator from './Authenticator';
import Applications from './Applications';

const auth = new Authenticator();
const services = {
  auth,
  applications: new Applications(auth)
};

export default services;
