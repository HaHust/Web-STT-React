import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCmIdz_Phk5Hs_eAsJIfGo5ZjFEKE7FudA",
    authDomain: "stt2020-1a190.firebaseapp.com",
    databaseURL: "https://stt2020-1a190.firebaseio.com",
    projectId: "stt2020-1a190",
    storageBucket: "stt2020-1a190.appspot.com",
    messagingSenderId: "885386550333",
    appId: "1:885386550333:web:2f986ebfbd13d8fe8d9e54",
    measurementId: "G-QEWFSP2XP8"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase