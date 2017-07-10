# purpose
For the challenge of freeCodeCamp's ["Build a Random Quote Machine"](https://www.freecodecamp.com/challenges/build-a-random-quote-machine), and for fun of playing with something cool.

# build by

## jQuery.ajax() with a Quotes API

* got the API from [Random Famous Quotes](https://market.mashape.com/andruxnet/random-famous-quotes), which was served on Mashape marketplace, and needs to register before using it.
* was tended to use jQuery.getJSON method, but somehow couldn't cross the "MIME" and "CORS" errors when working at CodePen.
* was tended to find a Chinese poem API but didn't get one.

## Tweet

* choose a pure link solution to make the tweet button, by using Javascript to rebuild the button after a new quote was present.
* followed [Twitter Publish](https://publish.twitter.com/) to load it's widgets.js and make the "official" tweet button, but found it no good when meet the AdBlock users. Also, custom a tweet button is not allowed, so I away from this road.  
* was open a new specific window after the click of this button by using "window.open" method, but found it does not perform the same way across browsers, so I away from this road and simply just use the "_blank".
* was tended to make Facebook Feed Dialog, but couldn't find a way to put the quote into it's content, so here's no Facebook. Instead, I made a "mail" button to be a company. 


## Bootstrap v4.0.0-alpha.6

* tried to gain the advantage of it's RWD and easy-to-layout framework.
* was familiar of v3.3.7, but being attracted for the new Outline Buttons, Flexbox, Fixed Position
* made the .card in the center of the screen by using .d-flex property, but still, need to set \<html>'s and \<body>'s height to 100% in CSS manually.

## Font Awesome v4.7.0

* love it's icons and spinning feature! 
* cause of a faster spinning requirement, I override .fa-spin-faster in the CSS.

## Google Fonts

* just for a whim, pick up a web font ["Love Ya Like A Sister"](https://fonts.google.com/specimen/Love+Ya+Like+A+Sister) for decorating, and the result which is surprisingly good. 
* As a man who speaking Chinese, I stubbornly import another web font ["明體"](https://fonts.google.com/earlyaccess#cwTeXMing), which is useless and superfluous.

## Trianglify

* really like to use Trianglify(https://qrohlf.com/trianglify/) everywhere!
* I tweak a bit by trigger it when the window is being resized.

## GitHub Gist

* export this CodePen to my GitHub Gist for another way of code demonstration.
* wrote a readme.md inside the Gist (it's a trick to stick the infomation on the top when browsing this gist), and play with Markdown-Writing a little.
* frame the Gist inside the modal, another way of memorizing this challenge.