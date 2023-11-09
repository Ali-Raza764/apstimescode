import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9PHasvCovJqft9R1sYoU5ytNCHdUKzBk",
  authDomain: "apstimes-290cf.firebaseapp.com",
  projectId: "apstimes-290cf",
  storageBucket: "apstimes-290cf.appspot.com",
  messagingSenderId: "905738302384",
  appId: "1:905738302384:web:38648d0a8515cef1c51c75",
  measurementId: "G-4CZYX21W7V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
export { auth, app, storage };

// storage
export async function upload(file) {
  const fileRef = ref(storage, 'blogs-images/'+file.name);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL  = await getDownloadURL(fileRef);
  console.log(photoURL);

  return photoURL;
}
