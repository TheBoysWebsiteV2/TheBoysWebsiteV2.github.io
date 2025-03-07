//hack prevention
console.info('ϟSCRIPT-LOAD: adminSecurityCheck.js [SUCCESFUL]');
var ca = sessionStorage.getItem('currentAccount'); var referrer = document.referrer;
if (referrer == '') {
  window.location.replace('/login?source=loginsericewrongurl');
} else if (referrer) {
  if (ca == null) {
    //continue
  } else {
    window.location.replace('/login?source=loginsericeusernameinsessionstorage');
  }
}
console.info('Hack checks did not detect any hacks.');
console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
