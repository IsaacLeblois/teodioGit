// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, doc, firebase, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
import { async } from "@firebase/util";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Rfzxo7pKQ17XPbG3rpzMId94sIepp6M",
  authDomain: "coderhouse-teodiogit.firebaseapp.com",
  projectId: "coderhouse-teodiogit",
  storageBucket: "coderhouse-teodiogit.appspot.com",
  messagingSenderId: "487524796717",
  appId: "1:487524796717:web:0d95f276fda2c21456aba4",
  measurementId: "G-DDYR9NZ2NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const getFirebase = () => { return app }

// Obtener todos los items
export async function getAllPlanes(){
  const miColec = collection(db, "items")
  const planesSnap = await getDocs(miColec)

  const result = planesSnap.docs.map( item => {
    return { ...item.data(), id: item.id }
  })

  return result
}

// Obtener un solo item
export async function getPlane(id){
  const miColec = collection(db, "items")
  const docref = doc(miColec, id)

  const resultDoc = await getDoc(docref)

  return {...resultDoc.data(), id: resultDoc.id}
}

// Obtener filtrado por categoria
export async function getCategory(category){
  const miColec = collection(db, "items")
  const queryCategory = query(miColec, where("manufacturer", "==", category))
  const planesSnap = await getDocs(queryCategory)


  return planesSnap.docs.map(item => {
    return {...item.data(), id: item.id}
  })

}

export async function sendOrder(orderData){
  const miColec = collection(db, "orders")
  const orderDoc = await addDoc(miColec, orderData)
  console.log(orderDoc.id)
  return orderDoc.id
}