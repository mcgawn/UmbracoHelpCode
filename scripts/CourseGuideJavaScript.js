//Code to hide form on Submit

var x = location.hash;
if (x == "#submittrue") {
    document.getElementById("cgrForm").style.display = "none";
    document.getElementById("response").style.display = "block";
};
var w = location.hash;
if (w == "#applytrue") {
    document.getElementById("ApplyForm").style.display = "none";
    document.getElementById("response").style.display = "block";
};

var ss = location.hash;
if (ss == "#lpsubmit") {
    document.getElementById("cgrForm").style.display = "none";
    document.getElementById("response").style.display = "block";
};
var ss = location.hash;
if (ss == "#b2btrue") {
    document.getElementById("cgrForm").style.display = "none";
    document.getElementById("response").style.display = "block";
};


//B2b Side bar toggle

(function ($) {
    "use strict";
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });
    var myJqueryAlias = jQuery.noConflict();
    myJqueryAlias('#main').click(function () {
        if (myJqueryAlias('#rowActiveorNot').hasClass("active")) {
            myJqueryAlias('.row-offcanvas').toggleClass('active');
        }
    });

    var SidebarNavLi = jQuery.noConflict();
    SidebarNavLi('.sidebar-nav li').click(function () {
        if (SidebarNavLi('#rowActiveorNot').hasClass("active")) {
            SidebarNavLi('.row-offcanvas').toggleClass('active');
        }
    });

})(jQuery);


var Nlanding = jQuery.noConflict();
(function (Nlanding) {
    Nlanding(function () {
        Nlanding('#sortContainer').click(function () {
            if (Nlanding('#navbar-collapse-02').hasClass("in")) {
                Nlanding('#navbar-collapse-02').toggleClass('in');
            }
        });
         var LanidngNavLi = jQuery.noConflict();
         LanidngNavLi('.nav li').click(function () {
             if (Nlanding('#navbar-collapse-02').hasClass("in")) {
                 Nlanding('#navbar-collapse-02').toggleClass('in');
          }
       });
    });
})(jQuery);

// Other code using $ as an alias to the other library

//Ecommece Discount selection save to session cookie

function applyDiscount() {
    var str = document.getElementById("discountCode").value;
    var res = str.toUpperCase();
    if (res == "ICSLEARN5") {
        document.cookie = "discountCodeAmount=5 ;path=/";
        location.reload();
    }
    if (res == "ICSLEARN10") {
        document.cookie = "discountCodeAmount=10 ;path=/";
        location.reload();
    }
    if (res == "ICSLEARN15") {
        document.cookie = "discountCodeAmount=15 ;path=/";
        location.reload();
    }
    else {
        document.getElementById("discountInvalid").style.display = "block";
    }
};

//homepage form switch

var $j = jQuery.noConflict();
$j('#CourseCodeSelect option[id^="CIPD"]').hide();
$j('#CourseCodeSelect option[id^="AAT"]').hide();
$j('#CourseCodeSelect option[id^="A Level"]').hide();
$j('#CourseCodeSelect option[id^="Learning"]').hide();
$j('#CourseCodeSelect option[id^="GCSE"]').hide();
$j('#CourseCodeSelect option[id^="IGCSE"]').hide();
$j('#CourseCodeSelect option[id^="CIM"]').hide();
$j('#CourseCodeSelect option[id^="ILM"]').hide();
$j('#CourseCodeSelect option[id^="YMCA"]').hide();
$j('#CourseCodeSelect option[id^="CIPS"]').hide();
function changeFacultyListofCourses() {
    var e = document.getElementById("CourseInterestSelect");
    var interestcode = e.options[e.selectedIndex].value;
    var interesttext = e.options[e.selectedIndex].innerHTML;
    document.getElementById("FaculyValue").value = interestcode;
    switch (interesttext) {
        case "Accountancy":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="AAT"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="Personal"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "Human Resources":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="CIPD"]').show();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "A Level":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="A Level"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="Learning"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "GCSE and IGCSE":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="GCSE"]').show();
            $j('#CourseCodeSelect option[id^="IGCSE"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "Learning and Development":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="CIPD"]').show();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "Leadership and Management":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="ILM"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "Marketing":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="CIM"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            $j('#CourseCodeSelect option[id^="CIPS"]').hide();
            break;
        case "Procurement and Supply":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="CIPS"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[id^="YMCA"]').hide();
            break;
        case "Personal Fitness":
            var $j = jQuery.noConflict();
            $j('#CourseCodeSelect option[id^="YMCA"]').show();
            $j('#CourseCodeSelect option[id^="CIPD"]').hide();
            $j('#CourseCodeSelect option[id^="AAT"]').hide();
            $j('#CourseCodeSelect option[id^="A Level"]').hide();
            $j('#CourseCodeSelect option[id^="GCSE"]').hide();
            $j('#CourseCodeSelect option[id^="IGCSE"]').hide();
            $j('#CourseCodeSelect option[id^="CIM"]').hide();
            $j('#CourseCodeSelect option[id^="ILM"]').hide();
            $j('#CourseCodeSelect option[name^="CIPS"]').hide();
            break
    }
}

//Email when correction is found pass to email field

function theFunction() {
    var passEmail = document.getElementById("correctEmail").innerHTML;
    document.getElementById("email").value = passEmail;
    document.getElementById("loading").style.display = "none";
    return false;
};

//Experian API to check for email validation

function QASemail() {
    ga('send', 'event', 'Forms', 'Fillin', 'Email');
    var email = document.getElementById("email").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.experianmarketingservices.com/sync/queryresult/EmailValidate/1.0/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Auth-Token', '37bf5fbf-40db-494c-9bea-e6b8e0b23ea7');
    xhttp.send('{"Email":' + JSON.stringify(email) + '}');
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var result = xhttp.responseText;
            var data = JSON.parse(result);
            if (data.hasOwnProperty('Corrections')) {
                var CorrectionEmail = data.Corrections;
                document.getElementById("loading").style.display = "block";
                document.getElementById("loading").innerHTML = "You may have made a mistake did you mean <a href='' id='correctEmail' onclick='return theFunction();'>" + CorrectionEmail + "</a> ? click email to confirm";
                return false;
            }
            else if ((data.Certainty == "undeliverable") || (data.Certainty == "unreachable")
                || (data.Certainty == "illegitimate") || (data.Certainty == "disposable")) {
                document.getElementById("loading").style.display = "block";
                document.getElementById("loading").innerHTML = "Please check your email address";
                return false;
            }
            else {
                document.getElementById("loading").style.display = "none";
                return true;
            };
        };
    };
};

//pass refer faculty from drop down to field

function passReferFaculty() {
    var eRefer = document.getElementById("CourseCodeSelect");
    var schoolcodeRefer = eRefer.options[eRefer.selectedIndex].value;
    document.getElementById("FaculyValue").value = schoolcodeRefer;
    document.getElementById("00N24000001pXKN").value = schoolcodeRefer;
}

//On Sumit code for all forms (Website) to get the faculty and put to supergroup

function saveSelectedValues() {
    var coursetext2 = document.getElementById("FaculyValue").value;
    switch (coursetext2) {
        case "A Level":
        case "GCSE and IGCSE":
            document.getElementById('00N24000002xMZj').value = "High School";
            document.getElementById("DistributionValue__c").value = "Robin High School";
            break;
        case "Learning and Development":
        case "Human Resources":
            document.getElementById('00N24000002xMZj').value = "Human Resources";
            document.getElementById("DistributionValue__c").value = "Robin Human Resources";
            break;
        case "Accountancy":
            document.getElementById('00N24000002xMZj').value = "Accountancy";
            document.getElementById("DistributionValue__c").value = "Robin Accountancy";
            break;
        case "Marketing":
            document.getElementById('00N24000002xMZj').value = "Marketing";
            document.getElementById("DistributionValue__c").value = "Robin Marketing";
            break;
        case "Leadership and Management":
            document.getElementById('00N24000002xMZj').value = "Leadership and Management";
            document.getElementById("DistributionValue__c").value = "Robin Leadership and Management";
            break;
        case "Procurement and Supply":
            document.getElementById('00N24000002xMZj').value = "Procurement and Supply";
            document.getElementById("DistributionValue__c").value = "Robin Procurement and Supply";
            break;
        case "Personal Fitness":
            document.getElementById('00N24000002xMZj').value = "Personal Fitness";
            document.getElementById("DistributionValue__c").value = "Robin Personal Fitness";
            break;
        default:
            text = "No Faculty";
    }
};

//Landing page Course selection save and also the list course Website partial on change event

function saveSelectedValues2() {
    var e = document.getElementById("CourseCodeSelect");
    var schoolcode = e.options[e.selectedIndex].value;
    var coursetext = e.options[e.selectedIndex].innerHTML;
    document.getElementById('00N24000001pXKN').value = schoolcode;
    document.getElementById('00N24000003Tqg0').value = coursetext;
    document.cookie = "schoolcoder=" + schoolcode + ";" + "path=/";
    localStorage.setItem("mysave5", coursetext);
    var coursetext2 = document.getElementById("FaculyValue").value;
    ga('send', 'event', 'Forms', 'Fillin', 'Drop Down Selected');
    switch (coursetext2) {
        case "A Level":
        case "GCSE and IGCSE":
            document.getElementById('00N24000002xMZj').value = "High School";
            document.getElementById("DistributionValue__c").value = "Robin High School";
            break;
        case "Learning and Development":
        case "Human Resources":
            document.getElementById('00N24000002xMZj').value = "Human Resources";
            document.getElementById("DistributionValue__c").value = "Robin Human Resources";
            break;
        case "Accountancy":
            document.getElementById('00N24000002xMZj').value = "Accountancy";
            document.getElementById("DistributionValue__c").value = "Robin Accountancy";
            break;
        case "Marketing":
            document.getElementById('00N24000002xMZj').value = "Marketing";
            document.getElementById("DistributionValue__c").value = "Robin Marketing";
            break;
        case "Corporate":
            document.getElementById('00N24000002xMZj').value = "Corporate";
            document.getElementById("DistributionValue__c").value = "Robin Corporate";
            break;
        case "Leadership and Management":
            document.getElementById('00N24000002xMZj').value = "Leadership and Management";
            document.getElementById("DistributionValue__c").value = "Robin Leadership and Management";
            break;
        case "Procurement and Supply":
            document.getElementById('00N24000002xMZj').value = "Procurement and Supply";
            document.getElementById("DistributionValue__c").value = "Robin Procurement and Supply";
            break;
        case "Personal Fitness":
            document.getElementById('00N24000002xMZj').value = "Personal Fitness";
            document.getElementById("DistributionValue__c").value = "Robin Personal Fitness";
            break;
        default:
            text = "No Faculty";
    }
};

function saveSelectedValues3() {

    var checkSelect1 = document.getElementById("CourseCodeSelect")
    var schoolcode1 = checkSelect1.options[checkSelect1.selectedIndex].value;

    var checkSelect2 = document.getElementById("CourseCodeSelect_Footer")
    var schoolcode2 = checkSelect2.options[checkSelect2.selectedIndex].value;

    if (schoolcode1 != "0") {
        var e = document.getElementById("CourseCodeSelect");
        var schoolcode = e.options[e.selectedIndex].value;
    }
    else if (schoolcode2 != "0") {
        var e = document.getElementById("CourseCodeSelect_Footer");
        var schoolcode = e.options[e.selectedIndex].value;
    }

    var coursetext = e.options[e.selectedIndex].innerHTML;
    document.getElementById('00N24000001pXKN').value = schoolcode;
    document.getElementById('00N24000003Tqg0').value = coursetext;
    document.cookie = "schoolcoder=" + schoolcode + ";" + "path=/";
    localStorage.setItem("mysave5", coursetext);
    var coursetext2 = document.getElementById("FaculyValue").value;
    ga('send', 'event', 'Forms', 'Fillin', 'Drop Down Selected');
    switch (coursetext2) {
        case "A Level":
        case "GCSE and IGCSE":
            document.getElementById('00N24000002xMZj').value = "High School";
            document.getElementById("DistributionValue__c").value = "Robin High School";
            break;
        case "Learning and Development":
        case "Human Resources":
            document.getElementById('00N24000002xMZj').value = "Human Resources";
            document.getElementById("DistributionValue__c").value = "Robin Human Resources";
            break;
        case "Accountancy":
            document.getElementById('00N24000002xMZj').value = "Accountancy";
            document.getElementById("DistributionValue__c").value = "Robin Accountancy";
            break;
        case "Marketing":
            document.getElementById('00N24000002xMZj').value = "Marketing";
            document.getElementById("DistributionValue__c").value = "Robin Marketing";
            break;
        case "Corporate":
            document.getElementById('00N24000002xMZj').value = "Corporate";
            document.getElementById("DistributionValue__c").value = "Robin Corporate";
            break;
        case "Leadership and Management":
            document.getElementById('00N24000002xMZj').value = "Leadership and Management";
            document.getElementById("DistributionValue__c").value = "Robin Leadership and Management";
            break;
        case "Procurement and Supply":
            document.getElementById('00N24000002xMZj').value = "Procurement and Supply";
            document.getElementById("DistributionValue__c").value = "Robin Procurement and Supply";
            break;
        case "Personal Fitness":
            document.getElementById('00N24000002xMZj').value = "Personal Fitness";
            document.getElementById("DistributionValue__c").value = "Robin Personal Fitness";
            break;
        default:
            text = "No Faculty";
    }
};


//Scroll Event Code

function getDepth() {
    return Math.floor(
      (
        (window.pageYOffset + window.innerHeight) /
        document.body.scrollHeight
      ) * 100
    )
}
var depth = getDepth()
var didScroll = false
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    function beforeUnload() {
        ga('send', 'event', 'Scroll', 'Scroll', 'Mobile Depth Scrolled %', depth)
    }
}
else {
    function beforeUnload() {
        ga('send', 'event', 'Scroll', 'Scroll', 'Desktop Depth Scrolled %', depth)
    }
}
function onScroll() {
    didScroll = true
}
window.addEventListener("scroll", onScroll)
window.addEventListener("beforeunload", beforeUnload)
function throttleScroll() {
    if (didScroll) {
        var tempDepth = getDepth()
        if (tempDepth > depth) {
            depth = tempDepth
        }
        didScroll = false
    }
    setTimeout(throttleScroll, 100)
}
setTimeout(throttleScroll, 100)

//Twitter Tracking Pixel

!function (e, n, u, a) {
    e.twq || (a = e.twq = function () {
        a.exe ? a.exe.apply(a, arguments) :
        a.queue.push(arguments);
    }, a.version = '1', a.queue = [], t = n.createElement(u),
    t.async = !0, t.src = '//static.ads-twitter.com/uwt.js', s = n.getElementsByTagName(u)[0],
    s.parentNode.insertBefore(t, s))
}(window, document, 'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init', 'nvav0');
twq('track', 'PageView');

/*<![CDATA[*/(function (w, a, b, d, s) { w[a] = w[a] || {}; w[a][b] = w[a][b] || { q: [], track: function (r, e, t) { this.q.push({ r: r, e: e, t: t || +new Date }); } }; var e = d.createElement(s); var f = d.getElementsByTagName(s)[0]; e.async = 1; e.src = '//info.Icslearn.co.uk/cdnr/200/acton/bn/tracker/18327'; f.parentNode.insertBefore(e, f); })(window, 'ActOn', 'Beacon', document, 'script'); ActOn.Beacon.track();/*]]>*/

//Ecommerce check ticks before fore 

function showconfirm() {
    if (document.getElementById('check1').checked && document.getElementById('check2').checked && document.getElementById('check3').checked) {
        div = document.getElementById('confirmorder');
        div.style.display = "block";
        document.getElementById('checkboxes').style.display = "none";
        document.getElementById('confirmorder').style.display = "block";
    }
};

//Response tap init code

var adiInit = "26522", adiRVO = true;
var adiFunc = null;
(function () {
    var adiSrc = document.createElement("script"); adiSrc.type = "text/javascript";
    adiSrc.async = true;
    adiSrc.src = ("https:" == document.location.protocol ? "https://static-ssl" : "http://static-cdn")
      + ".responsetap.com/static/scripts/rTapTrack.min.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(adiSrc, s);
})();

//Response tap Tel: replacement code

function rTapPostReplacement() {
    var classnameRtap = document.getElementById("RTapPass").className;
    var trackingNum = jQuery("a." + classnameRtap + "")[0].text.split(' ').join('');
    jQuery("a." + classnameRtap + "").attr('href', 'tel:' + trackingNum + '');
};

//var Now = new Date();
//var CurrentDay = Now.getDay();
//var OpeningTime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 9, 00);
//var ClosingTime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 17, 00);
//var Open = (Now.getTime() > OpeningTime.getTime() && Now.getTime() < ClosingTime.getTime())
//document.getElementById("open").style.display  = "none";
//document.getElementById("closed").style.display  = "none";
//if (CurrentDay !== 0 && CurrentDay !== 6 && Open) {
//	document.getElementById("open").style.display = "block";
//};

//Function to get the school code list for online enrolments

function getCourseCode() {
    var element = document.getElementById("commentsContent").innerHTML.replace(/(<([^>]+)>)/ig, "");
    document.getElementById('comments').value = element;
};

//Ecommerce to pass billinf details to  stuident details if they are the same buy check box

function checkAddressqq() {
    var chkBox = document.getElementById('checkAddress');
    if (chkBox.checked) {
        document.getElementById('first_nameS').value = document.getElementById('first_name').value;
        document.getElementById('last_nameS').value = document.getElementById('last_name').value;
        document.getElementById('telephoneS').value = document.getElementById('telephone').value;
        document.getElementById('emailS').value = document.getElementById('email').value;
        document.getElementById('companyS').value = document.getElementById('company').value;
    }
};

//Function to test form is valid for e-commerce

function showmerchant() {

    document.getElementById("validationErrorSal").style.display = "none";
    document.getElementById("validationErrorFName").style.display = "none";
    document.getElementById("validationErrorLName").style.display = "none";
    document.getElementById("validationErrorPhone").style.display = "none";
    document.getElementById("validationErrorEmail").style.display = "none";
    document.getElementById("validationErrorAddress1").style.display = "none";

    var e = document.getElementById("Fax");
    var faxJoin = e.options[e.selectedIndex].value;
    document.cookie = "Salutation=" + faxJoin + ";" + "path=/";
    if (faxJoin.length < 1 || faxJoin == "") {
        document.getElementById("validationErrorSal").style.display = "block";
        document.getElementById('validationErrorSal').innerHTML = "Please select a title";
        return false;
    }

    var FFname = document.getElementById('first_name').value;
    if (FFname.length < 2 || /\d+/g.test(FFname)) {
        document.getElementById("validationErrorFName").style.display = "block";
        document.getElementById('validationErrorFName').innerHTML = "Please enter a valid first name";
        return false;
    }

    var LLname = document.getElementById('last_name').value;
    if (LLname.length < 2 || /\d+/g.test(LLname)) {
        document.getElementById("validationErrorLName").style.display = "block";
        document.getElementById('validationErrorLName').innerHTML = "Please enter a valid last name";
        return false;
    }

    var telephone = document.getElementById('telephone').value;
    var telNoSpace = telephone.replace(/[\(\)\.\-\ ]/g, '');
    if (telNoSpace.length < 10 || isNaN(parseInt(telNoSpace))) {
        document.getElementById("validationErrorPhone").style.display = "block";
        document.getElementById('validationErrorPhone').innerHTML = "Please enter a valid mobile number";
        return false;
    }

    var email = document.getElementById('email').value;
    var emailNoSpace = email.replace(/^\s+|\s+$/, '');
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"' '\[\]]/;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (!emailFilter.test(emailNoSpace) || illegalChars.test(emailNoSpace) || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("email").focus;
        document.getElementById("validationErrorEmail").style.display = "block";
        document.getElementById('validationErrorEmail').innerHTML = "Please enter a valid email address";
        return false;
    }

    var address1 = document.getElementById('address1').value;
    if (address1.length < 2) {
        document.getElementById("validationErrorAddress1").style.display = "block";
        document.getElementById('validationErrorAddress1').innerHTML = "Please enter an Address";
        return false;
    }

    var dob = document.getElementById('company').value;
    var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (!pattern.test(dob)) {
        document.getElementById("validationErrorDob").style.display = "block";
        document.getElementById('validationErrorDob').innerHTML = "Please correct the date format (dd/mm/yyyy)";
        return false;
    }

    var paymentMethod = document.getElementById("paymentMethod");
    var paymentMethodVal = paymentMethod.options[paymentMethod.selectedIndex].value;
    if (paymentMethodVal.length < 1 || paymentMethodVal == "") {
        document.getElementById("validationErrorpaymentMethod").style.display = "block";
        document.getElementById('validationErrorpaymentMethod').innerHTML = "Please select a card provider";
        return false;
    }

    var Fname = document.getElementById('first_nameS').value;
    document.cookie = "FirstName=" + Fname + ";" + "path=/";
    var Lname = document.getElementById('last_nameS').value;
    document.cookie = "LastName=" + Lname + ";" + "path=/";

    var nameFull = faxJoin + " " + document.getElementById('first_name').value + " " + document.getElementById('last_name').value;
    document.getElementById('bname').value = nameFull;

    var name = nameFull;

    var bzip = document.getElementById('zip').value;
    var bcity = document.getElementById('city').value;
    var m = document.getElementById("expmonth");
    var expmonthPass = m.options[m.selectedIndex].value;
    var expmonth = expmonthPass;
    var y = document.getElementById("expyear");
    var expyearPass = y.options[y.selectedIndex].value;
    var expyear = expyearPass;

    if (document.getElementById('first_nameS').value != "" || document.getElementById('last_nameS').value != "") {
        var nameFullS = document.getElementById('first_nameS').value + " " + document.getElementById('last_nameS').value;
        document.getElementById('sname').value = nameFullS;
    }

    var el = document.getElementsByName("phone")[0];
    var val = el.value.replace(/\s/g, "");
    phone.value = val;

    div = document.getElementById('merchant');
    div.style.display = "block";
    document.getElementById('confirmationorder').style.display = "none";
    document.getElementById('validationError').style.display = "none";
    return true;
};

//facebook tracking pixel code

!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }; if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
}(window,
document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1090305677653429', {
    em: 'insert_email_variable,'
});
fbq('track', 'PageView');

(function (w, d, t, r, u) { var f, n, i; w[u] = w[u] || [], f = function () { var o = { ti: "4000679" }; o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad") }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { var s = this.readyState; s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null) }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i) })(window, document, "script", "//bat.bing.com/bat.js", "uetq");