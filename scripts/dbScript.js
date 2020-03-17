function signOut(){

  let openRequest = indexedDB.open("project", 1);
  var db;



  openRequest.onsuccess = function() { console.log("success");

      db = openRequest.result;
      db.onversionchange = function() { db.close(); };

              let transaction2 = db.transaction("LogInUser", "readwrite");
              let logInUser = transaction2.objectStore("LogInUser");

              logInUser.put({
                k: "UN",
                v: ""
              });


              window.location.href = "index.html";
        }
}
