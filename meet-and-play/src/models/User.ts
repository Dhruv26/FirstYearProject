export interface User{

    //This section stores the user's account details (encrypt password)
    email: string;      //Used for notifications and sign up
    username: string;   //Used in sign up and login
    password: string;   //Used in sign up and login
    password2: string;  //Used for sign up validation only
    name: string;       //Used in user's profile tab

    //This section stores the user's settings
    allowNotifications: boolean;
    nameVisible: boolean;
    showLocation: boolean;
    performanceRatings: boolean;
    enhancedContrast: boolean;

    //Variables from back end
    favouriteSport: string;

    //Additional info
    phone: string;
    url: string;

}
