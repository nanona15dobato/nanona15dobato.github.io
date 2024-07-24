var elementsString = '<meta name="msapplication-square70x70logo" content="https://nanona15dobato.github.io/favicons/site-tile-70x70.png"><meta name="msapplication-square150x150logo" content="https://nanona15dobato.github.io/favicons/site-tile-150x150.png"><meta name="msapplication-wide310x150logo" content="https://nanona15dobato.github.io/favicons/site-tile-310x150.png"><meta name="msapplication-square310x310logo" content="https://nanona15dobato.github.io/favicons/site-tile-310x310.png"><meta name="msapplication-TileColor" content="#0078d7"><link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://nanona15dobato.github.io/favicons/favicon.ico"><link rel="icon" type="image/vnd.microsoft.icon" href="https://nanona15dobato.github.io/favicons/favicon.ico"><link rel="apple-touch-icon" sizes="57x57" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="https://nanona15dobato.github.io/favicons/apple-touch-icon-180x180.png"><link rel="icon" type="image/png" sizes="36x36" href="https://nanona15dobato.github.io/favicons/android-chrome-36x36.png"><link rel="icon" type="image/png" sizes="48x48" href="https://nanona15dobato.github.io/favicons/android-chrome-48x48.png"><link rel="icon" type="image/png" sizes="72x72" href="https://nanona15dobato.github.io/favicons/android-chrome-72x72.png"><link rel="icon" type="image/png" sizes="96x96" href="https://nanona15dobato.github.io/favicons/android-chrome-96x96.png"><link rel="icon" type="image/png" sizes="128x128" href="https://nanona15dobato.github.io/favicons/android-chrome-128x128.png"><link rel="icon" type="image/png" sizes="144x144" href="https://nanona15dobato.github.io/favicons/android-chrome-144x144.png"><link rel="icon" type="image/png" sizes="152x152" href="https://nanona15dobato.github.io/favicons/android-chrome-152x152.png"><link rel="icon" type="image/png" sizes="192x192" href="https://nanona15dobato.github.io/favicons/android-chrome-192x192.png"><link rel="icon" type="image/png" sizes="256x256" href="https://nanona15dobato.github.io/favicons/android-chrome-256x256.png"><link rel="icon" type="image/png" sizes="384x384" href="https://nanona15dobato.github.io/favicons/android-chrome-384x384.png"><link rel="icon" type="image/png" sizes="512x512" href="https://nanona15dobato.github.io/favicons/android-chrome-512x512.png"><link rel="icon" type="image/png" sizes="36x36" href="https://nanona15dobato.github.io/favicons/icon-36x36.png"><link rel="icon" type="image/png" sizes="48x48" href="https://nanona15dobato.github.io/favicons/icon-48x48.png"><link rel="icon" type="image/png" sizes="72x72" href="https://nanona15dobato.github.io/favicons/icon-72x72.png"><link rel="icon" type="image/png" sizes="96x96" href="https://nanona15dobato.github.io/favicons/icon-96x96.png"><link rel="icon" type="image/png" sizes="128x128" href="https://nanona15dobato.github.io/favicons/icon-128x128.png"><link rel="icon" type="image/png" sizes="144x144" href="https://nanona15dobato.github.io/favicons/icon-144x144.png"><link rel="icon" type="image/png" sizes="152x152" href="https://nanona15dobato.github.io/favicons/icon-152x152.png"><link rel="icon" type="image/png" sizes="160x160" href="https://nanona15dobato.github.io/favicons/icon-160x160.png"><link rel="icon" type="image/png" sizes="192x192" href="https://nanona15dobato.github.io/favicons/icon-192x192.png"><link rel="icon" type="image/png" sizes="196x196" href="https://nanona15dobato.github.io/favicons/icon-196x196.png"><link rel="icon" type="image/png" sizes="256x256" href="https://nanona15dobato.github.io/favicons/icon-256x256.png"><link rel="icon" type="image/png" sizes="384x384" href="https://nanona15dobato.github.io/favicons/icon-384x384.png"><link rel="icon" type="image/png" sizes="512x512" href="https://nanona15dobato.github.io/favicons/icon-512x512.png"><link rel="icon" type="image/png" sizes="16x16" href="https://nanona15dobato.github.io/favicons/icon-16x16.png"><link rel="icon" type="image/png" sizes="24x24" href="https://nanona15dobato.github.io/favicons/icon-24x24.png"><link rel="icon" type="image/png" sizes="32x32" href="https://nanona15dobato.github.io/favicons/icon-32x32.png"><link rel="manifest" href="https://nanona15dobato.github.io/favicons/manifest.json">';
var tempDiv = document.createElement('div');
tempDiv.innerHTML = elementsString;
while (tempDiv.firstChild) {
    document.head.appendChild(tempDiv.firstChild);
}
    
    var mmm = document.getElementById("menu");
    mmm.innerHTML = `</div>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
    }
  
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      color: white;
      padding: 10px;
    }
  
    .site-icon {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  
    .site-icon img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  
    .menu-title {
      font-weight: bold;
      flex-grow: 1;
    }
  
    .menu-links {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: relative;
    }
  
    .menu-links li {
      position: relative;
    }
  
    .menu-links a {
      display: block;
      padding: 5px 15px;
      color: white;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
  
    .menu-links li:hover>a {
      background-color: #555;
    }
  
    .sub-menu {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      background-color: #444;
      left: auto;
      right: 0;
      border-radius: 5px;
      margin-top: 5px;
      min-width: 150px;
      transition: visibility 0s linear 1s, opacity 0.5s linear;
    }
  
    .menu-links li:hover .sub-menu {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    }
  
    .hamburger {
      display: none;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
      height: 30px;
      z-index: 15;
    }
  
    .hamburger div {
      background-color: white;
      height: 3px;
      width: 30px;
      margin: 4px 0;
      transition: all 0.3s ease-in-out;
    }
  
    .hm-link {
      display: flex;
      float: left;
    }
  
    .hm-link a {
      display: block;
      width: 20px;
      height: 20px;
      text-align: center;
      margin-bottom: 10px;
    }
  
    .hm-link img {
      width: 20px;
      height: 20px;
      height: auto;
      cursor: pointer;
    }
  
    .change .bar1 {
      transform: rotate(-45deg) translate(-8px, 6px);
    }
  
    .change .bar2 {
      opacity: 0;
    }
  
    .change .bar3 {
      transform: rotate(45deg) translate(-8px, -6px);
    }
  
    .overlay {
      display: none;
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }
  
    .overlay a {
      padding: 10px;
      text-decoration: none;
      font-size: 22px;
      color: white;
      display: block;
      transition: 0.3s;
    }
  
    .overlay .closebtn {
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 60px;
    }
  
    @media (max-width: 992px) {
  
      .menu-links,
      .sub-menu {
        display: none;
      }
  
      .hamburger {
        display: flex;
        z-index: 10;
      }
  
      .overlay {
        display: block;
      }
    }
  </style>
  
  <body>
  
    <div class="menu-header">
      <div class="site-icon"><img src="https://nanona15dobato.github.io/logo.png" alt="icon"></div>
      <div class="menu-title"><a href="https://nanona15dobato.github.io/"><span style="color: #ffff1a">なノな</span><span
            style="color: #0000ff;font-weight:bold;-webkit-text-stroke: 0.5px #ffff1a;text-stroke: 0.5px #0000ff;">15</span><span
            style="color: #ffff1a;">どバと</span></a></div>
      <ul class="menu-links">
        <li><a></a></li>
        <li>
          <a href="https://nanona15dobato.github.io/jawp-Wikipediholism-test/">JAWP中毒テスト ▾</a>
          <ul class="sub-menu">
            <li><a href="https://nanona15dobato.github.io/jawp-Wikipediholism-test/kaito.html">回答確認</a></li>
            <li><a href="https://nanona15dobato.github.io/jawp-Wikipediholism-test/shusei.html">回答修正</a></li>
          </ul>
        </li>
        <li><a href="https://nanona15dobato.github.io/jawp-100-Questions-for-Wikipedians/">100の質問</a></li>
        <li>
          <a>リンク ▾</a>
          <ul class="sub-menu">
            <li><a
                href="https://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:%E3%81%AA%E3%83%8E%E3%81%AA15%E3%81%A9%E3%83%90%E3%81%A8">JAWP</a>
            </li>
            <li><a href="https://github.com/nanona15dobato">GitHub</a></li>
            <li><a href="https://twitter.com/nanona15dobato">𝕏(旧Twitter)</a></li>
          </ul>
        </li>
      </ul>
      <div class="hamburger" onclick="toggleMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  
    <div id="myNav" class="overlay">
      <a href="https://nanona15dobato.github.io/"><span style="color: #ffff1a">なノな</span><span
          style="color: #0000ff;font-weight:bold;-webkit-text-stroke: 0.5px #ffff1a;text-stroke: 0.5px #0000ff;">15</span><span
          style="color: #ffff1a;">どバと</span></a>
      <a href="https://nanona15dobato.github.io/jawp-Wikipediholism-test/">JAWP中毒テスト</a>
      <a href="https://nanona15dobato.github.io/jawp-Wikipediholism-test/kaito.html">　回答確認</a>
      <a href="https://nanona15dobato.github.io/jawp-Wikipediholism-test/shusei.html">　回答修正</a>
      <a href="https://nanona15dobato.github.io/jawp-100-Questions-for-Wikipedians/">100の質問</a>
      <div class="hm-link">
        <a
          href="https://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:%E3%81%AA%E3%83%8E%E3%81%AA15%E3%81%A9%E3%83%90%E3%81%A8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg"
            style="filter: invert(100%);">
        </a>
        <a href="https://github.com/nanona15dobato">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg">
        </a>
        <a href="https://twitter.com/nanona15dobato">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png">
        </a>
      </div>
    </div>
  
    <div>`;

function toggleMenu(hamburger) {
    hamburger.classList.toggle('change');
    var overlay = document.getElementById("myNav");
    if (overlay.style.width === '100%') {
        overlay.style.width = '0%';
    } else {
        overlay.style.width = '100%';
    }
}
