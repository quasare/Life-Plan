import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var firebaseConfig = {
	apiKey            : 'AIzaSyDZY07zGooKGvXIZNBuIb-oKRthbFV5Pm4',
	authDomain        : 'thomasadams-marioplan.firebaseapp.com',
	databaseURL       : 'https://thomasadams-marioplan.firebaseio.com',
	projectId         : 'thomasadams-marioplan',
	storageBucket     : '',
	messagingSenderId : '834101308461',
	appId             : '1:834101308461:web:74faf85c4b633f01'
};
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
