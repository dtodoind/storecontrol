import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBmOdsxDCo4oyTyVORtTht4OKRXOQZaHVk",
    authDomain: "image-storage-a6baa.firebaseapp.com",
    projectId: "image-storage-a6baa",
    storageBucket: "image-storage-a6baa.appspot.com",
    messagingSenderId: "936688574823",
    appId: "1:936688574823:web:2dbe87bd472bbff66acfc2",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
