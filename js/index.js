$(document).ready(function() {
  doContentLoad();
  triBG();
});

//資料呈現流程
function doContentLoad() {
  $(".share-button").remove();
  fadeWords(false);
  showLoadingButton(true);
  getContent();
  // showLoader(true);  //觸發全螢幕loader效果，但不耐常看，暫且封印
  // 暫且等候 getContent 完成資料撈取，並讓按鈕轉個一圈
  setTimeout(function() {
    showLoadingButton(false); // showLoader(false);
    fadeWords(true);
  }, 1000);
  setTimeout(function() {
    setEmailButton();
    setTweetButton();
    setFacebookButton();
  }, 1500);
}

//設定內容，API 來源採用了 Random Famous Quotes 方案 (https://market.mashape.com/andruxnet/random-famous-quotes)
var content = document.getElementById("content");
var writer = document.getElementById("writer");
var book = document.getElementById("book");
var fullcontent = "";
var quoteURL =
  "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1";
var XMashapeKey = "YME1sY3qkbmshdfRzX3N7qzBxYpJp1oV1JzjsnLyLrJRw0YtSx";
function getContent() {
  //由於 jQuery.getJSON() 在 CodePen 上取用第三方 API 時，遇有 MIME 及 CORS 錯誤，我暫時不會解決，故採用 jQuery.ajax 土法煉鋼
  $.ajax({
    headers: {
      'X-Mashape-Key': 'YME1sY3qkbmshdfRzX3N7qzBxYpJp1oV1JzjsnLyLrJRw0YtSx',
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: quoteURL
  })
    .done(function(response) {
    writer.innerHTML = response.author;
    content.innerHTML = response.quote;
    fullcontent = response.quote + " --" + response.author
  })
    .fail(function() {
    content.innerHTML = "cannot hear the quotes...";
  });
}

// 放置 Tweet 按鈕
function setTweetButton() {
  // 客製化 Twitter Publish 方案，使 data-text 能填入當下的文句 (https://publish.twitter.com/) 
  // $.getScript("https://platform.twitter.com/widgets.js");
  // $(".twitter-share-button").remove();
  // var tweet = $("<a>").attr("class", "twitter-share-button");
  // tweet.attr("data-text", fullcontent);
  // $("#shareButtons").append(tweet);
  // twttr.widgets.load(document.getElementById("shareButtons")); //重新呼叫twitter的wedget.js來重製一次tweet按鈕，並預限在shareButtons內搜尋，以加速其搜尋

  // 純 html 方案，可客製化按鈕樣式，並減少 js 套件載入量 (https://dev.twitter.com/web/tweet-button/web-intent)
  var tweetURL = encodeURI("https://twitter.com/share?text=" + fullcontent + "&url=" + "https://codepen.io/meyu/full/oWBWPO/");
  var tweet = $("<a>").attr("class","share-button btn btn-sm btn-outline-secondary fa fa-twitter");
  tweet.attr("href", tweetURL);
  tweet.attr("target", "_blank");
  $("#shareButtons").append(tweet);
}

// 放置 email 分享按鈕
function setEmailButton() {
  var emailURL = encodeURI("mailto:?subject=" + fullcontent + "&body=" + window.location.href);
  var sendEmail = $("<a>").attr("class","share-button btn btn-sm btn-outline-secondary fa fa-envelope");
  sendEmail.attr("href", emailURL);
  sendEmail.attr("target","_blank");
  $("#shareButtons").append(sendEmail);
}

//讓文句淡入淡出，比較不刺眼
function fadeWords(fadeIn) {
  var speed = "slow";
  var opacity = 0;
  if (fadeIn) {
    $("#content").fadeTo(speed, 1);
    $("#writer").fadeTo(speed, 1);
    $("#book").fadeTo(speed, 1);
  } else {
    $("#content").fadeTo(speed, opacity);
    $("#writer").fadeTo(speed, opacity);
    $("#book").fadeTo(speed, opacity);
  }
}

//設定背景主題，採用 Trianglify 方案 (https://qrohlf.com/trianglify/)
function triBG() {
  var pattern = Trianglify({
    cell_size: 36,
    width: window.innerWidth,
    height: window.innerHeight
  });
  document.body.style.backgroundImage = "url(" + pattern.png() + ")";
}

//全螢幕Loader特效展示，採用 CSS Loader 的方案 (https://www.raphaelfabeni.com.br/css-loader/)
var loader = document.getElementById("loader");
function showLoader(show) {
  if (show) {
    loader.classList.add("is-active");
  } else {
    loader.classList.remove("is-active");
  }
}

//按鈕Loading特效，旋轉方法採用 font awasome 的 fa-spin 來完成
var btn = document.getElementById("getNewContent");
var spin = document.getElementById("fa-spin");
function showLoadingButton(show) {
  if (show) {
    btn.disabled = true;
    spin.classList.add("fa-spin-faster");
  } else {
    btn.disabled = false;
    spin.classList.remove("fa-spin-faster");
  }
}

//視窗縮放時，要做一下畫面調整
//由於Trianglify是依據畫面大小產出對應的圖片，故視窗縮放時，要重製一下，畫面才會平衡
var t;
$(window).resize(function() {
  clearTimeout(t); //使圖片重製動作時，不會有累積觸發多次而致閃爍的情況
  t = setTimeout(function() {
    triBG();
  }, 800); //延遅一下，但視窗縮放好後再重製，效果會更直覺
});