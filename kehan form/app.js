
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase ,set,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJWB0OHfrj0YkRpQTI8SN4grwIdnKhlp8",
    authDomain: "bootstrap-ass-01.firebaseapp.com",
    databaseURL: "https://bootstrap-ass-01-default-rtdb.firebaseio.com",
    projectId: "bootstrap-ass-01",
    storageBucket: "bootstrap-ass-01.appspot.com",
    messagingSenderId: "163527082444",
    appId: "1:163527082444:web:e132898787bfa8eca95d69",
    measurementId: "G-BR021VJWXD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database  = getDatabase();

  var first = document.getElementById('fn')
    var last = document.getElementById('ln')
    var email = document.getElementById('email')
    var pass = document.getElementById('psw')
    var contact = document.getElementById('con')
    var course = document.getElementById('Course')
    var parent = document.getElementById('parent')

    window.clearAll = function () {

        first.value = ""
    
        last.value = ""
    
        email.value = ""
    
        pass.value = ""
    
        contact.value = ""
    
        course.value = ""
    
    }

    window.getvalue = function () {
        var obj = {
            firstName: first.value,
            LastName: last.value,
            Email: email.value,
            Password: pass.value,
            Contact: contact.value,
            Course: course.value,
        }
        // console.log(obj);
        obj.id = Math.random().toString().slice(2)
        const studentData = ref(database, `students/${obj.id}/`)
        set(studentData, obj)

        .then(function () {

        window.location.assign('./index.html')

    })

    .catch(function (error) {

        console.log(error);

    });

   

    clearAll();


    }

    function getdata() {
        var arr = [];
        const studentData = ref(database, "students/");
        onChildAdded(studentData, function (dt) {
            arr.push(dt.val())
            console.log(arr);
            parent.innerHTML = ""
            for (var i = 0; i < arr.length; i++) {
                parent.innerHTML += `<li>${arr[i].firstName}</li>`
                parent.innerHTML += `<li>${arr[i].lasttName}</li>`
                parent.innerHTML += `<li>${arr[i].Email}</li>`
                parent.innerHTML += `<li>${arr[i].Password}</li>`
                parent.innerHTML += `<li>${arr[i].Contact}</li>`
                parent.innerHTML += `<li>${arr[i].Course}</li>`
            }
        })
    }


    getdata()



