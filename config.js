// =====================================================================
//  הגדרות החיבור של מערכת המלאי החטיבתית
//  ממלאים פעם אחת לפי מדריך ההתקנה (README.md), שלב 3.
//  זה פרויקט Firebase חדש ונפרד מהאפליקציות האחרות.
// =====================================================================
window.APP_CONFIG = {

  // מעתיקים מ-Firebase Console ← Project settings ← Your apps ← SDK setup and configuration ← Config
  firebase: {
    apiKey: "AIzaSyCUHx8AJGqdqkuATGMtqK6L1y3QgrGxCnU",
    authDomain: "inventory-55-2a551.firebaseapp.com",
    projectId: "inventory-55-2a551",
    storageBucket: "inventory-55-2a551.firebasestorage.app",
    messagingSenderId: "196637399669",
    appId: "1:196637399669:web:6bc3fc7d8e98442a81f63c"
  },

  // המייל של בעל המערכת. הוא רואה הכל, מבצע את הייבוא הראשון ומוסיף את מנהלי ההרשאות.
  // חייב להיות זהה למייל שמופיע בקובץ firestore.rules.
  ownerEmail: "kfirdaabul1@gmail.com",

  // השם שמופיע בכותרת לפני הכניסה
  appName: "תקשוב 55"
};
