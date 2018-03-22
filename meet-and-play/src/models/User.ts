export interface User{

    //This section stores the user's account details (encrypt password)
    id: string;
    email: string;      //Used for notifications and sign up
    name: string;       //Used in user's profile tab
    password: string;   //Used in sign up and login
    confirmPassword: string;  //Used for sign up validation only

    //Variables from back end
    favouriteSports: any;

    //Additional info
    phone: string;
    photoUrl: string;
    birthDate: string;

}
