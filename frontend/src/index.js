import ReactDOM  from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";

ReactDOM.render(
    <GoogleOAuthProvider clientId="422396320187-q9uf07o3o89bgqmj8mm3i35a8tlc9t8l.apps.googleusercontent.com"><App/></GoogleOAuthProvider>
  ,document.getElementById("kunal"))