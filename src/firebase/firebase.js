import firebase from 'firebase/app';
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC63gpCSZU37eKKtHwRB7lg_nh2JUP0WYU",
    authDomain: "expensify-10e82.firebaseapp.com",
    databaseURL: "https://expensify-10e82-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "expensify-10e82",
    storageBucket: "expensify-10e82.appspot.com",
    messagingSenderId: "75399975234",
    appId: "1:75399975234:web:0929ea5ac4ce99e575f8db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref().on('value', (snapshot) => {
// 	const expenses = [];
		
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 	console.log(snapshot.val());
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
		
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// const expenses = [{
// 	description: 'First Expense',
// 	amount: 213131,
// 	note: 'Lot of money',
// 	createdAt: 31321321321
// }, {
// 	description: 'Second Expense',
// 	amount: 5531,
// 	note: 'Lot of money',
// 	createdAt: 72727272
// }, {
// 	description: 'Third Expense',
// 	amount: 131,
// 	note: 'Lot of money',
// 	createdAt: 7271111
// }];

// expenses.map((expense) => {
// 	database.ref('expenses').push(expense);
// });

// database.ref('notes/-MRKNuGEq3LEPcnruugO').remove();


// database.ref('notes').push({
// 	title: 'Course topics',
// 	body: 'react native, angular, python'
// });

// const fireBaseNotes = {
//     notes: {
//         dsgfdddsadsadsa: {
//             body: 'This is my note',
//             title: 'Note'
//         },
//         dsadsdadsfdgadsa: {
//             body: 'Another note',
//             title: 'Second note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     body: 'This is my note',
//     title: 'Note'
// }, {
//     id: '3213s',
//     body: 'Another note',
//     title: 'Second note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref().update({
//     'location/city': 'Hafnarfjörður',
//     isSingle: true,
//     age: 27,
//     stressLevel: 5
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Júlli',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'software dev',
//         company: 'Tiro'
//     },
//     isSingle: false,
//     location: {
//         'city': 'Reykjavík',
//         'country': 'Iceland'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed: ', e);
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('removing data worked!');
//     }).catch((e) => {
//         console.log('Removing data dit not work!', e);
//     });