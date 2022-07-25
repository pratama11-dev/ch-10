import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
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
  apiKey: "AIzaSyCb-T20PtA5x2i41rpqHP6e_by47DcH3x8",
  authDomain: "binar-fsw20-platinum.firebaseapp.com",
  projectId: "binar-fsw20-platinum",
  storageBucket: "binar-fsw20-platinum.appspot.com",
  messagingSenderId: "216935647513",
  appId: "1:216935647513:web:845bb4e62a1f9e855b5d88",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

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

async function updateLeaderboardDb(user, result) {
  const d = doc(db, "users_leaderboard", user.uid);
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
      name: user.name,
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
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  sendPasswordResetEmail,
  logout,
  getUser,
  updatePhotoProfile,
  getLeaderBoards,
  updateLeaderboardDb as updateLeaderboard,
  storage,
};
