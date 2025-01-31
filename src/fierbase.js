import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpi6tufxQLApLR7aB-Yjzn8ndfQg24pXM",
  authDomain: "lesson-e1264.firebaseapp.com",
  projectId: "lesson-e1264",
  storageBucket: "lesson-e1264.appspot.com", // Исправлено на корректный формат storageBucket
  messagingSenderId: "678958059264",
  appId: "1:678958059264:web:c9958821036a673f212de5",
  measurementId: "G-LFKFR6VQND",
};

// Инициализация приложения Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Инициализация служб Firebase
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Экспортируем объекты для использования в других частях приложения
export { db, auth };
