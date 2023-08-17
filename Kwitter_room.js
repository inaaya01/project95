var firebaseConfig = {
    apiKey: "AIzaSyAUU56iEdDggEZ0XPr6efTpzooT8GgBlpI",
    authDomain: "kwitter-project-da766.firebaseapp.com",
    databaseURL: "https://kwitter-project-da766-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-da766",
    storageBucket: "kwitter-project-da766.appspot.com",
    messagingSenderId: "1076882167987",
    appId: "1:1076882167987:web:bdc6554417cb7dd529f8c6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom() {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
  
        window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
  
  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "kwitter.html";
  }