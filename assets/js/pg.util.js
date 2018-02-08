/*
** bettehub@hpping.kr
** date: 2017-12-08
*/

(function() {
  var advLayerID = document.getElementById('advLayer');
  var todayNoMoreID = document.getElementById('todayNoMore');
  var closeAdvID = document.getElementById('closeAdvBanner');

  // console.log(document.cookie.indexOf('adv-layer'));
  if(document.cookie.indexOf('adv-layer') === -1) {
    showBanner(advLayerID);
    expireBanner(advLayerID, todayNoMoreID, closeAdvID);
  } else {
    hideBanner(advLayerID);
  }

})();

function showBanner(banner) {
  return banner.style.display = 'block';
}

function hideBanner(banner) {
  return banner.style.display = 'none';
}

function expireBanner(banner, today, close) {
  close.addEventListener('click', function(e) {
      if(today.checked) {
          setCookie('adv-layer', 'show', 1);
      }
      hideBanner(banner);
    e.preventDefault();
  });
}

/**
* @param name String
* @param value String
* @param expiredays Number
*
*/

function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  // console.log(todayDate.getDate());
  todayDate.setDate(todayDate.getDate() + expiredays);
  // console.log(todayDate.getDate());
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toUTCString() + ";"
}
