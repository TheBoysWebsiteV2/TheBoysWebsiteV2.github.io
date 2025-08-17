/*
ϟAdmin login serviceϟ
*/

//ϟcreate variablesϟ
const urlParams = new URLSearchParams(window.location.search); const accountID = urlParams.get('accountID'); const qr = urlParams.get('qr');
/*var z = Math.floor(Math.random() * 1000000000000);
document.write("Session ID: " + z);
sessionStorage.setItem('session-id', z);*/
//hack prevention
console.info('ϟSCRIPT-LOAD: adminSecurityCheck.js [SUCCESFUL]');
var ca = sessionStorage.getItem('currentAccount'); var referrer = document.referrer;
if ((referrer == '') && (qr='f')) {
  window.location.replace('/login?source=loginsericewrongurl');
} else {
  if (ca == null) {
    //continue
  } else {
    window.location.replace('/login?source=loginsericeusernameinsessionstorage');
  }
}

console.info('Hack checks did not detect any hacks.');

if (accountID in idtouname) {
  username=idtouname[accountID]
  sessionStorage.setItem('currentAccount', username);
  sessionStorage.setItem('userRank', ranks[username]);
} else {
  window.location.replace('/login?source=accountNotFound');
}


//Head to admin home screen
if (ranks[username] == 'Full') {
    let websitewindow = window.open(
    "bw",
    "The Boys Website V2",
    "width=,height=600,left=200,top=150,toolbar=no,menubar=no,resizable=yes,scrollbars=yes"
  );
} else {
  window.location.replace('/dashboard');
}


/*
ϟAdmin login serviceϟ
*/

//ϟcreate variablesϟ
//const urlParams = new URLSearchParams(window.location.search); const username = urlParams.get('username'); const password = urlParams.get('password'); const accountIDforQR = urlParams.get('accountID');
///*var z = Math.floor(Math.random() * 1000000000000);
//document.write("Session ID: " + z);
//sessionStorage.setItem('session-id', z);*/
/////hack prevention
//console.info('ϟSCRIPT-LOAD: adminSecurityCheck.js [SUCCESFUL]');
//var ca = sessionStorage.getItem('currentAccount'); var referrer = document.referrer;
//if (referrer == '') {
//  window.location.replace('/login?source=loginsericewrongurl');
//} else if (referrer) {
//  if (ca == null) {
//    //continue
//  } else {
//    window.location.replace('/login?source=loginsericeusernameinsessionstorage');
//  }
//}
//
//console.info('Hack checks did not detect any hacks.');
//
//if (username in data) {
//    if (data[username] === password) {
//        sessionStorage.setItem('currentAccount', username);
//        sessionStorage.setItem('userRank', ranks[username]);
//    } else {
//        window.location.replace('/login?source=passwordWrong');
//    }
//} else {
//    window.location.replace('/login?source=accountNotFound');
//}
//
//Head to admin home screen
//
//window.location.replace('/dashboard');
