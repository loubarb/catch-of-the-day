import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcyATaZ2Hv3ToDs9pOUJoPf_x26MCeSvg",
    authDomain: "catch-of-the-day-lou-barb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lou-barb-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;