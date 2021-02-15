import { AuthenticationService } from "../services/authentication.service";

//The app initializer runs before the app starts up, and it attempts to automatically authenticate the user by calling authenticationService.refreshToken() to get a new JWT token from the api. 
//If the user has logged in previously (without logging out) and the browser still contains a valid refresh token cookie, they will be automatically logged in when the app loads.
export function appInitializer(authenticationServices : AuthenticationService) {
    return () => new Promise(resolve => {
        authenticationServices.refreshToken().subscribe().add(resolve);
        //The call to the .subscribe() method triggers the request to the api,
        //The .add() method is used for executing additional logic after the request completes (success or failure)
    })
}