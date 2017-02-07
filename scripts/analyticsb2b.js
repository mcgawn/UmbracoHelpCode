//Check hash value and send event or conversion

var apply = window.location.href.substring();
var hashapply = apply.substring(apply.lastIndexOf('#') + 1);
var callback = document.cookie.replace(/(?:(?:^|.*;\s*)callbackcookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (hashapply == 'b2btrue') {
    ga('send', 'event', 'b2bform', 'click', 'B2B Submit');
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
else if (hashapply == 'about') {ga('send', 'pageview', '/about' , true);}
else if (hashapply == 'hrtrain') { ga('send', 'pageview', '/hrtraining', true); }
else if (hashapply == 'acctrain') { ga('send', 'pageview', '/acctraining', true); }
else if (hashapply == 'reviews') { ga('send', 'pageview', '/reviews', true); }
else if (hashapply == 'acctrain') { ga('send', 'pageview', '/tutors', true); }
else if (hashapply == 'contact') { ga('send', 'pageview', '/contact', true); }

//Video Tracking

try {
  var checkYoutubeIframe = false;
  $("iframe").each(function () {
    if ($(this).attr('src').indexOf("youtube.com/embed") >= 0) {
      checkYoutubeIframe = true;
      if ($(this).attr('id') == undefined || $(this).attr('id').indexOf("youTubePlayer") == -1) {
        $(this).attr('id', 'youTubePlayer')
      }
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

  if (checkYoutubeIframe) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    function onYouTubeIframeAPIReady(event) {
      player = new YT.Player('youTubePlayer', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    function onPlayerReady(event) { }
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        ga('send', 'event', 'b2bVideos', 'Play');
      }
      if (event.data == YT.PlayerState.PAUSED) {
        ga('send', 'event', 'b2bVideos', 'Pause');
      }
      if (event.data == YT.PlayerState.ENDED) {
        ga('send', 'event', 'b2bVideos', 'Watch to End');
      }
    }
  }
} catch (e) { }

//Auto Event Tracking

if (typeof jQuery != 'undefined') {
  var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
  var baseHref = '';
  if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');
  var hrefRedirect = '';
  jQuery('.LiveAgent').on('click', function () {
      ga('send', 'event', 'b2bwebchat', 'click', 'b2bwebchatbutton', true);
  });
  jQuery('body').on('click', 'a', function (event) {
    var el = jQuery(this);
    var track = true;
    var href = (typeof (el.attr('href')) != 'undefined') ? el.attr('href') : '';
    var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
    if (!href.match(/^javascript:/i)) {
      var elEv = []; elEv.value = 1, elEv.non_i = false;

      if (href.match(/^mailto\:/i)) {
        elEv.category = 'b2bmailto ';
        elEv.action = 'click';
        elEv.label = href.replace(/^mailto\:/i, '');
        elEv.loc = href;
      }
      else if (href.match(filetypes)) {
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        elEv.category = 'b2bdownload';
        elEv.action = 'click-' + extension[0];
        elEv.label = href.replace(/ /g, '-');
        elEv.loc = baseHref + href;
      }
      else if (href.match(/^https?\:/i) && !isThisDomain) {
        elEv.category = 'b2bexternal';
        elEv.action = 'click';
        elEv.label = href.replace(/^https?\:\/\//i, '');
        elEv.non_i = true;
        elEv.loc = href;
      }
      else if (href.match(/^tel\:/i)) {
        elEv.category = 'b2bPhonecall';
        elEv.action = 'click';
        elEv.label = href.replace(/^tel\:/i, '');
        elEv.loc = href;
      }

      else track = false;

      if (track) {

        window.uetq = window.uetq || [];
        window.uetq.push({ 'ec': elEv.category, 'ea': elEv.action, 'el': elEv.label, 'ev': elEv.value });

        if (elEv.category == 'b2bdownload') {
          ga('send', 'pageview', elEv.label.toLowerCase());
        }

        var ret = true;

        if ((elEv.category == 'b2bexternal' || elEv.category == 'b2bdownload') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank')) {
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