// ==UserScript==
// @name        kickass peerflix
// @namespace   Syzer
// @include     https://kickass.to/*
// @version     1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

$( document ).ready(function() {
    var mine = $('.magnetlinkButton').clone().insertAfter('.magnetlinkButton');

    var command = 'peerflix --vlc -f"./" "' + mine.attr('href') + '"';

    mine.click(function(e) {
        window.prompt("Ctrl+C, Enter", command);
        e.preventDefault();
    })

});
