/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// funcion que inicaliza la aplicación
//import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// se importa función para obtener los servicios de firestore y conectar a la BdD
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { printComments } from "../lib/views/post.js"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiGtmDy7pXtGBhp7DQ-P7kNTGPLcYCT1w",
    authDomain: "scl019-social-network.firebaseapp.com",
    projectId: "scl019-social-network",
    storageBucket: "scl019-social-network.appspot.com",
    messagingSenderId: "688901907009",
    appId: "1:688901907009:web:17e9dc19d24585836f9cc0"
};
//guarda la info del proyecto
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// se rea una const db (data base) y se llama a getFirestore y dentro se pasa la app (aplication)
// dentro de db se accede a firestore
// para poder acceder a la variable se exporta
//dentro de const db se tiene acceso a firestore
const db = getFirestore(app);
//export const auth = getAuth(app); // Initialize Firebasegit
//export const user = auth.currentUser; // autentifica el usuario


// guardar datos post
export const createPost = async(comment) => { // Add a new document with a generated id.

    /*const date = Timestamp.fromDate(new Date());
    const name = auth.currentUser.displayName;
    const userId = auth.currentUser.uid;
    const likes = [];
    const likesCounter = 0;*/
    await addDoc(collection(db, "post"), { comment }); //guardamos la coleccion post 
};
// Leer datos de post
export const readDataPost = () => {
    const q = query(collection(db, "post"), orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => { //onSnapshot escucha los elementos del documento
        const CommentBox = [];
        querySnapshot.forEach((doc) => { //QuerySnapshot accede a los objetos que llama de doc por medio del array
            console.log("documentos", doc)
            CommentBox.push({
                id: doc.id,
                datepost: Date.now(),
                data: doc.data(),
                comment: doc.data().comment,
                likesCounter: 0,
                likes: []
            })
        })
        printComments(CommentBox);
        return CommentBox
    });
};

// Borrar datos
export const postDelete = async(id) => {
    await deleteDoc(doc(db, 'post', id));
    console.log(await deleteDoc);
};

// Editar datos
export const editPost = async(id, comment) => {
    const refreshPost = doc(db, 'post', id);
    await updateDoc(refreshPost, {
        comment: comment,
    });
};