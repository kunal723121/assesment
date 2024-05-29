import ReactDOM  from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";

ReactDOM.render(<Auth0Provider
    domain="dev-x61tseooao8kjaa6.us.auth0.com"
    clientId="Jhmxn39k8KfQr3v15qwzbnvgjcjdw83y"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><App/></Auth0Provider>,document.getElementById("kunal"))