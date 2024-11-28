importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBvUk_Y9LGV3chVX5tohGpJab3WKzwI0pM",
  authDomain: "projeto-teste-315f0.firebaseapp.com",
  projectId: "projeto-teste-315f0",
  storageBucket: "projeto-teste-315f0.firebasestorage.app",
  messagingSenderId: "744542245081",
  appId: "1:744542245081:web:5cac56de683b6f5d5daec8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});