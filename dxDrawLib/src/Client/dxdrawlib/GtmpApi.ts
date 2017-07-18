/// <reference path="../dxdrawlib.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("[DxDrawLib] Starting clientside scripts...");
});

API.onServerEventTrigger.connect(function(eventname, args)  {
    ServerEvents.HandleEvent(eventname, args);    
});

API.onUpdate.connect(function() {
    for(let element of DxElement.elements) {
        if (element != null && element.getParent == null) {
            element.draw();
        }
    } 
});
