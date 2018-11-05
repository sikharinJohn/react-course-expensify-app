import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// }); 

// database.ref('expenses')
//     .once('value')
//     .then( (snapshot)=>{
//         const expenses = [];
//         snapshot.forEach( (childSnapshot) =>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach( (childSnapshot) =>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });


// database.ref('expenses/-LQCI9wRjhOv23TVyz9U').update({
//     description: 'Item description 2',
//     note: 'Item 2',
//     amount: '200',
//     createdAt: 200
// });

//database.ref('notes/-LQCGpIKRFPNCnj-Z_wA').remove();

// database.ref('notes/-LQCGpIKRFPNCnj-Z_wA').update({
//     body: 'Buy food'
// });
// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'React, Redux'
// });

// const firebaseNotes = {
//     notes: {
//         apidfsdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         asdfewfwd: {
//             title: 'Another note!',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// },{
//     id: '712123',
//     title: 'Another note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('/notes/12')

// const onValueChange = (snapshot) => {
//     console.log(snapshot.val());
// }

// const onValueChange = database.ref().on('value', (snapshot) => {
//         const val = snapshot.val();
//        console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//     }, (e) =>{
//         console.log('Error with data fetching', e);
//     });

// setTimeout( () =>{
//     database.ref('job').update({company: 'Amazon'});
// }, 3500);

// setTimeout( () =>{
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout( () =>{
//     database.ref('age').set(40)
// }, 10500);


// database.ref('location/city').once('value')
// .then( (snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch( (e)=>{
//     console.log('Error fetching data',e )
// });

// database.ref('isSingle')
//     .remove()
//     .then( ()=>{
//         console.log('Data was removed');
//     }).catch( (e) =>{
//         console.log('Did not remove data',e);
//     });

//database.ref('isSingle').set(null);

// database.ref().set({
//     name: 'Sikharin Wandee',
//     age: 33,
//     isSingle: false,
//     location: {
//         city: 'Phuket',
//         country: 'Thailand'
//     }
// }).then( () =>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('This failed.', e);
// });

//firebase.
  //   const database = firebase.database();
    // database.ref('isSingle')
    //     .remove()
    //     .then( ()=>{
    //         console.log('Data was removed');
    //     }).catch( (e) =>{
    //         console.log('Did not remove data',e);
    //     });
    //database.ref('isSingle').set(null);
    // database.ref().set({
    //     name: 'Sikharin Wandee',
    //     age: 33,
    //     stressLevel: 7,
    //     job:  {
    //       title:  'Software developer',
    //       company: 'Jetradar'
    //     },
    //     location: {
    //         city: 'Phuket',
    //         country: 'Thailand'
    //     }
    // }).then( () =>{
    //     console.log('Data is saved');
    // }).catch((e)=>{
    //     console.log('This failed.', e);
    // });

    // database.ref().update({
    //     stressLevel: 9,
    //     'job/company': 'BMW Car',
    //     'location/city': 'ULM',
    //     'location/country': 'Germany'
    // });
    
    // database.ref().update({
    //     job: 'FrontEnd developer',
    //    'location/city': 'Guernburg',
    //    'location/country': 'Germany'
    // });

    // database.ref().update({
    //     name: 'Juergen',
    //     age: 39,
    //     job: 'Nurse',
    //     isSingle: null
    // });

    // database.ref('location')
    //     .update({ city: 'Guenburg', country: 'Germany'})
    //     .then( () =>{
    //         console.log('Data was updated');
    //     }).catch( (e) => {
    //         console.log('Did not update data', e);
    //     });

//database.ref().set('This is my data.');

// database.ref('age').set(34);

// database.ref('location/city').set('Guernburg');

// database.ref('attributes').set({
//      height: 167,
//      weight: 60
// }).then( ()=>{
//     console.log('Second set call worked.');
// }).catch((e)=>{
//     console.log('Things didnt for second error', e);
// });

