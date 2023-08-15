import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXIJ7DiHxeHJDVOfjxXF0H1GwuEUaxR3Q",
    authDomain: "react-coderhouse-7aef4.firebaseapp.com",
    projectId: "react-coderhouse-7aef4",
    storageBucket: "react-coderhouse-7aef4.appspot.com",
    messagingSenderId: "433239826421",
    appId: "1:433239826421:web:17d00bdced4cc4fe648abc"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

const getAllDiscs = async () => {
    const discsRef = collection(db, "discs");
    const snapShot = await getDocs(discsRef);
    const list = snapShot.docs;

    const allDiscs = list.map(
        (item) => { return { ...item.data(), id: item.id }; }
    );

    return allDiscs;
}

const getGenre = async (genreId) => {
    const discsRef = collection(db, "discs");
    const que = query( discsRef, where("genre", "==", genreId) );
    const snapShot = await getDocs(que);
    
    const list = snapShot.docs;
    const genreList = list.map(
        (item) => { return { ...item.data(), id: item.id }; }
    );

    return genreList;
}

const getDisc = async (id) => {
    const discRef = doc(db, "discs", id);
    const snapShot = await getDoc(discRef);

    if ( snapShot.exists() )
        return {...snapShot.data(), id: snapShot.id };
    else
        return null;
}

const makeOrder = async (order) => {
    const colRef = collection(db, "orders");
    const orderDone = await addDoc (colRef, order);

    return orderDone.id;
}

const getOrder = async (id) => {
    const docRef = doc(db, "orders", id);
    const snapShot = await getDoc(docRef);

    return {...snapShot.data(), id: snapShot.id};
}

export { getAllDiscs, getGenre, getDisc, makeOrder, getOrder };