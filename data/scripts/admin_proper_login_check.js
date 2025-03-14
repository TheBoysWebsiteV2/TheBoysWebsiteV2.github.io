console.info('ϟSCRIPT-LOAD: admin_proper_login_check.js');
var username = sessionStorage.getItem('currentAccount'); 
var rank = sessionStorage.getItem('userRank');
if (username in data) {
    if (ranks[username] == rank) {
        //continue
    } else {
        sessionStorage.setItem('errorText', 'Your account data was not right. This could be caused by going to the Admin Home Page without going through the login page. Otherwise, this is probably just a rare error. ');
        sessionStorage.setItem('buttonText', 'Click here to continue');
        sessionStorage.setItem('buttonSite',  '/login');
        window.location.replace('/error');
    }
} else {
    sessionStorage.setItem('errorText', 'Your account data was not right. This could be caused by going to the Admin Home Page without going through the login page. Otherwise, this is probably just a rare error. ');
    sessionStorage.setItem('buttonText', 'Click here to continue');
    sessionStorage.setItem('buttonSite', '/login');
    window.location.replace('/error');
}
if (lockedAccounts[username] == 'TRUE') {
    window.location.replace('/locked-account');
} else{
    //continue
}
