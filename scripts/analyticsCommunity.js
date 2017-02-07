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
    var Livechat = 'https://public.mc.hostedcc.com/icslearn/forms/Chat/community_ICS';
    var href = (typeof (el.attr('href')) != 'undefined') ? el.attr('href') : '';
    var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
    if (!href.match(/^javascript:/i)) {
      var elEv = []; elEv.value = 1, elEv.non_i = false;
      if (href.match(/^mailto\:/i)) {
        elEv.category = 'mailto VLE';
        elEv.action = 'click';
        elEv.label = href.replace(/^mailto\:/i, '');
        elEv.loc = href;
      }
      else if (href.match(Livechat)) {
        elEv.category = 'webchat VLE';
        elEv.action = 'click';
        elEv.label = 'webchatbutton VLE';
        elEv.non_i = false;
        elEv.loc = href;
        location.reload();
      }
      else if (href.match(filetypes)) {
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        elEv.category = 'download VLE';
        elEv.action = 'click-' + extension[0];
        elEv.label = href.replace(/ /g, '-');
        elEv.loc = baseHref + href;
      }
      else if (href.match(/^https?\:/i) && !isThisDomain) {
        elEv.category = 'external VLE';
        elEv.action = 'click';
        elEv.label = href.replace(/^https?\:\/\//i, '');
        elEv.non_i = true;
        elEv.loc = href;
      }
      else if (href.match(/^tel\:/i)) {
        elEv.category = 'Phonecall VLE';
        elEv.action = 'click';
        elEv.label = href.replace(/^tel\:/i, '');
        elEv.non_i = false;
        elEv.loc = href;
      }
      else track = false;

      if (track) {

        if (elEv.category == 'download VLE') {
          ga('send', 'pageview', elEv.label.toLowerCase());
        }

        var ret = true;

        if ((elEv.category == 'external VLE' || elEv.category == 'download VLE') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank')) {
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
};
