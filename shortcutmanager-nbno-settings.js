// ==UserScript==
// @ShortcutManager
// @name Select next search result on nb.no
// @namespace uME8HxMIXcDP
// @key Alt+j
// @include http://*nb.no/*
// ==/UserScript==
window.location = $('a.thumbSelected').next().attr('href');

// ==UserScript==
// @ShortcutManager
// @name Select the previous search result on nb.no
// @namespace uME8HxMIXcDP
// @key Alt+k
// @include http://*nb.no/*
// ==/UserScript==
window.location = $('a.thumbSelected').prev().attr('href');
