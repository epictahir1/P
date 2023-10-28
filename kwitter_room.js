const firebaseConfig = {
      apiKey: "AIzaSyCzk7zFU7xDeOSKdBsE_Uj_ZKGfgNPoj0U",
      authDomain: "food-ordering-app-dd1d1.firebaseapp.com",
      databaseURL: "https://food-ordering-app-dd1d1-default-rtdb.firebaseio.com",
      projectId: "food-ordering-app-dd1d1",
      storageBucket: "food-ordering-app-dd1d1.appspot.com",
      messagingSenderId: "17778393532",
      appId: "1:17778393532:web:3e6a7d2cd1046da34d6bb9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
