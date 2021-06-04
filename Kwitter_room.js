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

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    
    window.location="Kwitter_room.html";
  }