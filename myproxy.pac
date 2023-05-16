var domains = {
    "google.com": 1,
    "gstatic.com": 1,
    "google.com.tw": 1,
    "google.com.hk": 1,
    "mail.google.com": 1,
    "chrome.google.com": 1,
    "scholar.google.com": 1,
    "translate.google.com": 1,
    "youtube.com": 1,
    "ytimg.com": 1,
    "ggpht.com": 1,
    "google.com.sg": 1,
    "play.google.com": 1,
    "googlevideo.com": 1,
    "jnn-pa.googleapis.com": 1,
    "googleusercontent.com": 1,
    "twitter.com": 1,
    "twimg.com": 1,
    "github.com": 1,
    "pixiv.net": 1,
    "pixiv.org": 1,
    "pximg.net": 1,
    "akamaihd.net": 1,
    "steamstatic.com": 1,
    "steamcommunity.com": 1,
    "steampowered.com": 1,
    "store.steampowered.com": 1,
    "openai.com": 1,
    "api.openai.com": 1,
    "chat.openai.com": 1,
    "platform.openai.com": 1,
    "tiktok.com": 1,
    "ttwstatic.com": 1,
    "tiktokcdn.com": 1,
    "twitch.tv": 1,
    "v2aky.net": 1,
    "v2aky.com": 1,
    "netflix.com": 1,
    "pornhub.com": 1
    
};
 
var proxy = "SOCKS5 127.0.0.1:7890; DIRECT;";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}