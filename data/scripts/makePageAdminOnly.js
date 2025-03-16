let z=sessionStorage.getItem('currentAccount');
if (ranks[z] == 'Full') {
  //continue
} else {
  alert('Sorry, this page is currently Admin-Only. \nYou cannot visit this page at the moment. \nThis is probably because this page is under development.');
  window.location.replace('/dashboard');
}
