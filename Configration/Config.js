import RNFirebase from 'react-native-firebase';

let config = {
    apiKey: "AIzaSyAwAwg3Xff9TlcvHGj0dQPWWeu3txrddXI",
    authDomain: "crashanalyticsfrendy.firebaseapp.com",
    databaseURL: "https://crashanalyticsfrendy.firebaseio.com",
    projectId: "crashanalyticsfrendy",
    storageBucket: "",
    messagingSenderId: "297026418032",
    appId: "1:297026418032:web:8d5a696ad345e145"
};

let app = RNFirebase.initializeApp(config);
export const db = app.database();