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
  document.getElementById("user_name").innerHTML += "Welcome " + user_name + " !";

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    
    window.location="Kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
   Room_names = childKey;
   //Start code
      console.log("Room Name -",Room_names);
      row = "<div class='room_name' id="+Room_names +"onClick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
   //End code
   });});}
  getData();

function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location = "Kwitter_page.html";
  }

  function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location("kwitter_room.html"); 
}