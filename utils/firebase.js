import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  doc,
  collection,
  where,
  setDoc,
  updateDoc,
  getDoc,
  orderBy,
  limit,
  addDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcGFSQJASwJPwrrzMk6VURy3G871MX4A4",
  authDomain: "binar-ch-10.firebaseapp.com",
  projectId: "binar-ch-10",
  storageBucket: "binar-ch-10.appspot.com",
  messagingSenderId: "538177211643",
  appId: "1:538177211643:web:8ed9ce9ee0dbb03f91f45e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithTwitter = async () => {
  try {
    const res = await signInWithPopup(auth, twitterProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "twitter",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "facebook",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

async function logInWithEmailAndPassword(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

async function getUser(uid) {
  const docRef = collection(db, "users");
  const q = query(docRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0];
}

async function getAllUsers() {
  // const aha = db.firestore();
  const q = query(collection(db, "users"));
  const aa = await getDocs(q);

  const usr = aa.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return usr;
}

async function updatePhotoProfile(uid, downloadUrl) {
  // Cari data dari collection users yang mempunyai dokument sama dgn uid
  // update dengan profile url-nya
  await updateDoc(doc(db, "users", uid), {
    profileUrl: downloadUrl,
  });
}

async function getLeaderBoards() {
  const ref = collection(db, "users_leaderboard");
  const q = query(ref, orderBy("score", "desc"), limit(5));
  const d = await getDocs(q);
  return d.docs.map((d) => d.data());
}

async function updateLeaderboardDb(userUid, userName, result) {
  const d = doc(db, "users_leaderboard", userUid);
  const docs = await getDoc(d);

  const data = docs.data();

  const asignScore = result === "WIN" ? 2 : result === "LOSE" ? -1 : 0;
  const compare = (prms, prms2) => (prms === prms2 ? 1 : 0);

  const win = compare(result, "WIN");
  const lose = compare(result, "LOSE");
  const draw = compare(result, "DRAW");

  if (data) {
    const score = data.draw * 0 + data.lose * -1 + data.win * 2;
    await updateDoc(d, {
      win: data.win + win,
      lose: data.lose + lose,
      draw: data.draw + draw,
      score: score + asignScore,
    });
  } else {
    await setDoc(d, {
      name: userName,
      win,
      lose,
      draw,
      score: asignScore,
    });
  }
}

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sendPasswordResetEmail,
  logout,
  getUser,
  getAllUsers,
  updatePhotoProfile,
  getLeaderBoards,
  updateLeaderboardDb as updateLeaderboard,
  storage,
};
