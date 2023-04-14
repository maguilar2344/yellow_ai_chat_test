(function () {
  var chatBot = {
    enabled: true,
    source:
      "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js",
    host: "https://r4.cloud.yellow.ai",
    bot: "x1659351377286",
    pluginKey: "YellowMessengerPlugin",
    pluginConfigKey: "ymConfig",
  };

  window[chatBot.pluginConfigKey] = {
    bot: chatBot.bot,
    host: chatBot.host,
  };

  // load ChatBot plugin script
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = chatBot.source;
  script.async = true;
  document.body.appendChild(script);
})();
