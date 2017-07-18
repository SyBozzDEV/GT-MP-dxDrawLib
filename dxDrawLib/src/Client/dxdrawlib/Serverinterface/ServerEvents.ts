/// <reference path="../../dxdrawlib.d.ts" />

class ServerEvents {

    public static HandleEvent(eventname, args) {
        API.sendChatMessage("SERVEREVENT: " + eventname);
        if(eventname != "dxdrawlib_event") return;
        let result = ServerEvents.ProcessIncomingEvent(args);
        
        switch (result.event) {
            case "sync": {
                ElementSyncer.SyncElement(result.data[0]);
                return;
            }
            case "hide": {
                ElementSyncer.HideServerElement(result.data[0]);
                return;
            }
            default: {
                // TODO: Implement clientside eventhandler
            }
        }
        
    }
    
    private static ProcessIncomingEvent(eventdata): {element: number, event: string, data: any[]} {
        return {
            element: eventdata[0],
            event: eventdata[1],
            data: JSON.parse(eventdata[2])
        };
    }

    public static TriggerServerEvent(elementId: number, eventname: string, ...args: object[]) {
        let serverElement = ElementTransformer.ClientElementToServer(elementId);
        if(serverElement == -1) return;
        API.triggerServerEvent("dxdrawlib_event", serverElement, eventname, args);
    }


}
