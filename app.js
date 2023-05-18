// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDMIFPGYnLBZYN6OQtQNjyE3IDtbntHO2I',
//   authDomain: 'test-capstone-project-386905.firebaseapp.com',
//   projectId: 'test-capstone-project-386905',
//   storageBucket: 'test-capstone-project-386905.appspot.com',
//   messagingSenderId: '698829315763',
//   appId: '1:698829315763:web:be3de12ef1be5e3dc45ac6'
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)

// app.post('/register', async (req, res) => {
//   try {
//     const { email, username, password } = req.body
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user
//         console.log(user)
//       })
//       .catch((error) => {
//         var errorCode = error.code
//         var errorMessage = error.message
//         console.log(error)
//       })
//     res.redirect('/')
//   } catch (e) {
//     res.redirect('register')
//   }
// })

// app.use((req, res, next) => {
//   var user = firebase.auth().currentUser
//   res.locals.currentUser = user
//   next()
// })

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       var user = userCredential.user
//     })
//     .catch((error) => {
//       var errorCode = error.code
//       var errorMessage = error.message
//     })
//   res.redirect('/')
// })

// app.get('/logout', function (req, res) {
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       res.redirect('/login')
//     })
//     .catch((error) => {
//       // An error happened.
//     })
// })
