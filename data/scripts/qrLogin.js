const urlParams = new URLSearchParams(window.location.search); const accountID = urlParams.get('accountID');
window.loation.replace('loginservice?accountID=' + accountID);
