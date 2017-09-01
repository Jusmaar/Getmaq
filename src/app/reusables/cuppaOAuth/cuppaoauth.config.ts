export class cuppaoauthConfig {
  private authServerBaseUrl = 'http://34.227.201.151:8080';
  /* public url = 'http://www.easymaq.com'; */
  public url = 'http://localhost:4200';
  config = {
    'loginRoute': 'login',
    'facebook': {
      'authEndpoint': this.authServerBaseUrl + '/auth/facebook',
      'clientId': '1043795972423359',
      'redirectURI': this.url + '/pe/home'
    },
    'google': {
      'authEndpoint': this.authServerBaseUrl + '/auth/google',
      'clientId': '1059623871602-fuvr36gooa28v7hk06p8ft09hosbfffi.apps.googleusercontent.com',
      'redirectURI': this.url + '/pe/home'
    }
  }
}
