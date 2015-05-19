// ==UserScript==
// @name        kickass peerflix
// @namespace   Syzer
// @include     https://kickass.to/*
// @include     http://kat.cr/*
// @version     1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

var button = '.magnetlinkButton';

function addButton(button) {
    var newButton = $(button).clone().insertAfter(button).html('peerflix');

    var command = 'peerflix --vlc -f"./" "' + newButton.attr('href') + '"';

    newButton.click(function(e) {
        window.prompt("Ctrl+C, Enter", command);
        e.preventDefault();
    })
}

$( document ).ready(function() {
    addButton(button);
});
