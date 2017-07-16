/// <reference path="../../dxdrawlib.d.ts" />

class ServerEvents {

    private static validEvents = [
        "dxdrawlib_sync"
    ];

    public static HandleEvent(eventname, args) {
        if(ServerEvents.validEvents.indexOf(eventname) == -1) return;

        API.sendChatMessage("SERVEREVENT: " + eventname);
    }

    public static TriggerServerEvent(elementId: number, eventname: string, ...args: object[]) {
        var serverElement = ElementTransformer.ClientElementToServer(elementId);
        API.triggerServerEvent("dxdrawlib_event", serverElement, eventname, args);
    }


}
