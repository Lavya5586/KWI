var firebaseConfig = {
    apiKey: "AIzaSyAYzkSwLMXNogl88XfsxWhTlvc0C6yQ0KM",
    authDomain: "new-kwitter-db9c4.firebaseapp.com",
    databaseURL: "https://new-kwitter-db9c4-default-rtdb.firebaseio.com",
    projectId: "new-kwitter-db9c4",
    storageBucket: "new-kwitter-db9c4.appspot.com",
    messagingSenderId: "51762573319",
    appId: "1:51762573319:web:f8c7860fe02db34b4efaa2",
    measurementId: "G-3F97HWFWNT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() 
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();