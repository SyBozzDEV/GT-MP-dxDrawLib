/// <reference path="../../dxdrawlib.d.ts" />

class ServerEvents {

    private static validEvents = [
        "dxdrawlib_sync"
    ];

    public static HandleEvent(eventname, args) {
        if(ServerEvents.validEvents.indexOf(eventname) == -1) return;

        API.sendChatMessage("SERVEREVENT: " + eventname);

    }


}
