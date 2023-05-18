const Firestore = require('@google-cloud/firestore')

const db = new Firestore({
  projectId: 'test-capstone-project-386905',
  keyFilename: './serviceaccount.json'
})

async function setDocument(db, name, uId, country) {
  // [START firestore_data_set_from_map]
  const data = {
    name: name,
    uId: uId,
    country: country
  }

  // Add a new document in collection "cities" with ID 'LA'
  const res = await db.collection('User').doc(uId).set(data)
  // [END firestore_data_set_from_map]

  console.log('Set: ', res)
  console.log(typeof data)
}

async function getDocument(db, data) {
  const cityRef = db.collection('cities').doc(data)
  const doc = await cityRef.get()
  if (!doc.exists) {
    console.log('No such document!')
  } else {
    console.log('Document data:', doc.data())
  }
}

setDocument(db, 'Jakarta', 'c306dsx2686', 'Indonesia')
//getDocument(db, 'DKI Jakarta')
