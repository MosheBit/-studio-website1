// import { ref, set, get, remove, update } from 'firebase/database';
// import database from './firebaseConfig';

// // יצירת איש קשר חדש
// export const addContact = async (contact) => {
//   const newContactRef = ref(database, 'contacts/' + Date.now()); // מזהה ייחודי
//   await set(newContactRef, contact);
// };

// // קבלת כל אנשי הקשר
// export const getContacts = async () => {
//   const dbRef = ref(database, 'contacts');
//   const snapshot = await get(dbRef);
//   if (snapshot.exists()) {
//     const data = snapshot.val();
//     return Object.keys(data).map((key) => ({
//       id: key,
//       ...data[key],
//     }));
//   } else {
//     console.log("No data available");
//     return [];
//   }
// };

// // עדכון איש קשר קיים
// export const updateContact = async (id, updatedContact) => {
//   const contactRef = ref(database, `contacts/${id}`);
//   await update(contactRef, updatedContact);
// };

// // מחיקת איש קשר
// export const deleteContact = async (id) => {
//   const contactRef = ref(database, `contacts/${id}`);
//   await remove(contactRef);
// };
