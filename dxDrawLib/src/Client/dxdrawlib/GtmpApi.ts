/// <reference path="../dxdrawlib.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("[DxDrawLib] Starting clientside scripts...");
});

API.onServerEventTrigger.connect(function(eventname, args)  {
    ServerEvents.HandleEvent(eventname, args);
});
