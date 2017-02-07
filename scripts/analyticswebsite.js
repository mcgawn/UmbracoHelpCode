var apply = window.location.href.substring();
var hashapply = apply.substring(apply.lastIndexOf('#') + 1);
var callback = document.cookie.replace(/(?:(?:^|.*;\s*)callbackcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (hashapply == 'applytrue') {
  ga('send', 'event', 'Apply Now', 'click', 'Apply Submit');
  fbq('track', 'Lead');
  /* <![CDATA[ */
  var google_conversion_id = 956627819;
  var google_conversion_language = "en";
  var google_conversion_format = "3";
  var google_conversion_color = "ffffff";
  var google_conversion_label = "uNCxCMCutFoQ6_aTyAM";
  var google_remarketing_only = false;
  var google_conversion_value = 0;
  /* ]]> */
  document.getElementById("responseGA").innerHTML = '<script src="//www.googleadservices.com/pagead/conversion.js"></script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/956627819/?value=0&label=uNCxCMCutFoQ6_aTyAM&amp;guid=ON&amp;script=0"/></div></noscript>';
}
else if (hashapply == 'submittrue') {
  fbq('track', 'Lead');
  ga('send', 'event', 'CGR', 'click', 'CGR Submit');
  document.getElementById("responseGA").innerHTML = "&frasl;&#42;&lt;![CDATA[ */\nvar google_conversion_id = 956627819;\nvar google_conversion_language = 'en';\nvar google_conversion_format = '3';\nvar google_conversion_color = 'ffffff';\nvar google_conversion_label = 'DJ48CIKytFoQ6_aTyAM';\nvar google_remarketing_only = false;\nvar google_conversion_value = 0;\n/* ]]&gt&frasl;&#42;<script src='//www.googleadservices.com/pagead/conversion.js'></script><noscript><div style='display:inline;'><img height='1' width='1' style='border-style:none;' alt='' src='//www.googleadservices.com/pagead/conversion/956627819/?value=0&label=DJ48CIKytFoQ6_aTyAM&amp;guid=ON&amp;script=0'/></div></noscript>";
};

//Video
try {
  var checkYoutubeIframe = false;
  //Verify all iFrames from the page
  $("iframe").each(function () {
    //Check if you a YT iFrame
    if ($(this).attr('src').indexOf("youtube.com/embed") >= 0) {
      checkYoutubeIframe = true;
      //Add the YT ID
      if ($(this).attr('id') == undefined || $(this).attr('id').indexOf("youTubePlayer") == -1) {
        $(this).attr('id', 'youTubePlayer')
      }
      //Add Enable JS API parameter
      if ($(this).attr('src').indexOf("enablejsapi=1") == -1) {
        if ($(this).attr('src').indexOf("?") >= 0) {
          var src = $(this).attr('src') + "&enablejsapi=1&rel=0"
          $(this).attr('src', src)
        }
        else {
          var src = $(this).attr('src') + "?enablejsapi=1"
          $(this).attr('src', src)
        }
      }
    }
  })

  //Call logic if there is an iFrame on the page
  if (checkYoutubeIframe) {
    //Include YT API
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //Call the YT Tracker Function
    function onYouTubeIframeAPIReady(event) {
      player = new YT.Player('youTubePlayer', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    function onPlayerReady(event) { }
    //Tracker
    function onPlayerStateChange(event) {
      // track when user clicks to Play
      if (event.data == YT.PlayerState.PLAYING) {
        ga('send', 'event', 'Videos', 'Play');
      }
      // track when user clicks to Pause
      if (event.data == YT.PlayerState.PAUSED) {
        ga('send', 'event', 'Videos', 'Pause');
      }
      // track when user clicks to Pause
      if (event.data == YT.PlayerState.ENDED) {
        ga('send', 'event', 'Videos', 'Watch to End');
      }
    }
  }
} catch (e) { }

if (typeof jQuery != 'undefined') {
  var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
  var baseHref = '';
  if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');
  var hrefRedirect = '';
  jQuery('.LiveAgent').on('click', function () {
    ga('send', 'event', 'webchat', 'click', 'webchatbutton');
  });
  jQuery('body').on('click', 'a', function (event) {
    var el = jQuery(this);
    var track = true;
    var VLE = 'https://community.icslearn.co.uk/#login';
    var href = (typeof (el.attr('href')) != 'undefined') ? el.attr('href') : '';
    var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
    if (!href.match(/^javascript:/i)) {
      var elEv = []; elEv.value = 1, elEv.non_i = false;
      if (href.match(/^mailto\:/i)) {
        elEv.category = 'mailto';
        elEv.action = 'click';
        elEv.label = href.replace(/^mailto\:/i, '');
        elEv.loc = href;
      }
      else if (href.match("https://community.icslearn.co.uk/login/forgot_password.php")) {
        elEv.category = 'password';
        elEv.action = 'click';
        elEv.label = 'forgotpassword';
        elEv.non_i = true;
        elEv.loc = href;
        location.reload();
      }
      else if (href.match(VLE)) {
        elEv.category = 'VLE';
        elEv.action = 'click';
        elEv.label = href.replace(VLE);
        elEv.non_i = true;
        elEv.loc = href;
      }
      else if (href.match(filetypes)) {
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        elEv.category = 'download';
        elEv.action = 'click-' + extension[0];
        elEv.label = href.replace(/ /g, '-');
        elEv.loc = baseHref + href;
      }
      else if (href.match(/^https?\:/i) && !isThisDomain) {
        elEv.category = 'external';
        elEv.action = 'click';
        elEv.label = href.replace(/^https?\:\/\//i, '');
        elEv.non_i = true;
        elEv.loc = href;
      }
      else if (href.match(/^tel\:/i)) {
        elEv.category = 'Phonecall';
        elEv.action = 'click';
        elEv.label = href.replace(/^tel\:/i, '');
        elEv.loc = href;
      }

      else track = false;

      if (track) {

        window.uetq = window.uetq || [];
        window.uetq.push({ 'ec': elEv.category, 'ea': elEv.action, 'el': elEv.label, 'ev': elEv.value });

        if (elEv.category == 'download') {
          ga('send', 'pageview', elEv.label.toLowerCase());
        }

        var ret = true;
        if ((elEv.category == 'external' || elEv.category == 'download') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank')) {
          hrefRedirect = elEv.loc;

          ga('send', 'event', elEv.category, elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {
            'nonInteraction': elEv.non_i,
            'hitCallback': gaHitCallbackHandler
          });

          ret = false;
        }
        else {
          ga('send', 'event', elEv.category, elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {
            'nonInteraction': elEv.non_i
          });
        }

        return ret;
      }
    }
  });

  gaHitCallbackHandler = function () {
    window.location.href = hrefRedirect;
  }
}