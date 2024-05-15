let abc, defg, a2

var firebaseConfig = {
  apiKey: "AIzaSyCb44FGoUhJ2swDDTkG8uhFsn3V72oc4Hk",
  authDomain: "login-7ab5b.firebaseapp.com",
  projectId: "login-7ab5b",
  storageBucket: "login-7ab5b.appspot.com",
  messagingSenderId: "758773760067",
  appId: "1:758773760067:web:376883ad21ee41080754f6"
    };
    firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  db.collection('product11').doc('link').get().then((결과)=>{
    a2 = String(Number(결과.data().count) + 1)
    db.collection('product11').doc('link').update({"count" : a2})  
  })
  db.collection('product').doc('nuru').get().then((결과)=>{
    abc = 결과.data().kt
      console.log(abc)
  })
  db.collection('product').doc('nuru').get().then((결과)=>{
    defg = 결과.data().te
      console.log(defg)
  }).then(() => {
    const gesipanR = document.querySelectorAll('.katalkLink')
    console.log(abc)
    for(let a of gesipanR) {
        a.href = abc
    }
    const gesipanD = document.querySelectorAll('.teleLink')
    console.log(defg)
    for(let a of gesipanD) {
        a.href = defg
    }
  })