import { inputTaskDOMDisplay } from "./addtodo.js";
import { newProject } from "./newproject.js";
import { Projects } from "./projects.js";
import { displayCompletedTasksOnDOM } from "./displaycompletetasks.js";

inputTaskDOMDisplay;
newProject;
Projects.retrieveData();
const completedTasks = document.getElementById("completed");
completedTasks.addEventListener("click", () => {
  Projects.projectsArray.completedTasks.forEach((task) => {
    Projects.clearAllProjectsFromDOM();
    displayCompletedTasksOnDOM(task);
  });
  Projects.completedTasksIsClicked.completedClicked = true;
  Projects.showSelectedProject();
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Signs-in Friendly Chat.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

// Initialize firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

initFirebaseAuth();
signIn();
