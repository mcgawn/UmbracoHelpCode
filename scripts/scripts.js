/// <reference path="jquery-1.7.1.min.js" />

//<![CDATA[
jQuery(document).ready(function($){if($.fn.tooltip()){$('[class="tooltip_hover"]').tooltip();}
$(".carousel").jCarouselLite({btnNext:".next",btnPrev:".prev",easing:"swing",vertical:true,auto:4000,speed:500,visible:3,scroll:1,mouseWheel:true});$(".video").fitVids();$('input, textarea').placeholder();});
//]]>

//DOM Ready
$(function () {

    //Hover popover for employee grid
    $("a[rel=popover]").popover({ placement: 'left' }).click(function(e) {
        //If we click link we just prevent it
        e.preventDefault();
    });

    //For each comment reply - hide it
    $(".comment-replies").each(function (e) {
        if ($(this).find(".comment").length > 0) {
            $(this).find("div.comment-reply").hide();
        } else {
            $(this).hide();
        }
    });

    //Toggle comment link
    $("a.toggle-comment").click(function (e) {
        if ($(this).parent().next(".comment-replies").find(".comment").length > 0) {
            $(this).parent().next(".comment-replies").find(".comment-reply").fadeToggle("fast");
        }
        else {
            $(this).parent().next(".comment-replies").fadeToggle("fast");
        }
        e.preventDefault();
    });

    //Toggle File Upload
    $("a.toggle-upload").click(function (e) {
        $(this).next(".status-upload").slideToggle("fast");
        e.preventDefault();
    });

    //Like a post
    //attach jQuery to all links with the class "post-link"
    $("a.post-like").click(function (e) {
        //get the current link
        var link = $(this);
        //get the statusID from its rel attribute
        var statusId = link.attr("rel");

        //Call the likestatus url and update the link with the returned value
        $.getJSON("/api/Likes?statusId=" + statusId, function(data) {
            link.find("span").html(data);
        });
        
        //stop the link from doing anything
        e.preventDefault();
    });


    //Comment on post with /base
    $("input.post-comment").click(function (e) {
        var link = $(this);
        var s = link.parent().find("textarea").val();
        var id = link.attr("rel");

        $.post("/base/Comments/Create/" + id, { comment: s }, function (data) {
            alert("Comment has been posted");
        });

        link.parent().next(".comment-replies").find(".comment-reply").fadeToggle("fast");

        e.preventDefault();
    });



    $("input.tokeninput").tokenInput("/base/Mentions/Members/", {
        theme: "facebook",
        propertyToSearch: "Name",
        tokenValue: "Id"
    });
});

/* SIGNALR RELATED */
var notifier = $.connection.notificationHub;
notifier.client.updateStream = function (value) {
    
    var html = "<div class='alert span12'><button class='close' data-dismiss='alert'>x</button><div class='row'>" +
               "<div class='span1'><img src='" + value.AuthorAvatar + "'></div>" +
               "<div class='span8'><em>" + value.AuthorName + "</em>: " + value.StatusMessage + "</div>" +
               "</div></div>";


    var container = $("#notifications .row");
    container.empty();
    container.append(html);
};

/* Starting the signalR hub connections */
$.connection.hub.start()
                .done(function () {
                    console.log('Connected to signalR notification hub');
                })
                .fail(function () {
                    alert("Could not Connect to signalR notification hub");
                });