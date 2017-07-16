/// <reference path="../../dxdrawlib.d.ts" />

class ElementTransformer {

    public static transformations: number[] = []; // transformations[CLIENTID] = SERVERID

    public static ClientElementToServer(elementid: number): number {
        var serverId = ElementTransformer.transformations[elementid];
        if(serverId == null) return -1;
        else return serverId;
    }

    public static ServerElementToClient(elementid: number): number {
        return ElementTransformer.transformations.indexOf(elementid);
    }

}
