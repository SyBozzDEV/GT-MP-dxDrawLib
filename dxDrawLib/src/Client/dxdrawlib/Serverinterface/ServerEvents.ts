/// <reference path="../../dxdrawlib.d.ts" />

class ServerEvents {

    private static EVENT_PREFIX = "dxdrawlib_";

    private static validEvents = [
        ServerEvents.EVENT_PREFIX + "_sync"
    ];

    public static HandleEvent(eventname, args) {
        if(ServerEvents.validEvents.indexOf(eventname) == -1) return;

        API.sendChatMessage("SERVEREVENT: " + eventname);

        switch(eventname) {
            case ServerEvents.EVENT_PREFIX + "_sync": {
                ElementSyncer.OnSyncElement(args[0]);
                break;
            }
        }
    }

    public static TriggerServerEvent(elementId: number, eventname: string, ...args: object[]) {
        var serverElement = ElementTransformer.ClientElementToServer(elementId);
        if(serverElement == -1) return;
        API.triggerServerEvent("dxdrawlib_event", serverElement, eventname, args);
    }


}
