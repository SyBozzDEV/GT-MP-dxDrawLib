/// <reference path="../../dxdrawlib.d.ts" />

class ElementSyncer {

    public static OnSyncElement(received: string) {
        let data: {type: string,  id: number, element: any} = JSON.parse(received);
        let eD = data.element;
        
        let cElementId = ElementTransformer.ServerElementToClient(data.id);
        let element;
        
        // ELEMENT DOESN'T EXISTS, CREATE ONE
        switch(data.type) {
            case "window": {
                API.sendChatMessage("CREATE WINDOW: " + eD.title + " -> " + cElementId);
                if (cElementId === -1) element = new DxWindow(eD.title, eD.x, eD.y, eD.width, eD.height, eD.relative, new Color(eD.color.a,  eD.color.r, eD.color.g, eD.color.b));

                element.colorHeader.set(eD.colorHeader.a, eD.colorHeader.r, eD.colorHeader.g, eD.colorHeader.b);
                element.colorTitle.set(eD.colorTitle.a, eD.colorTitle.r, eD.colorTitle.g, eD.colorTitle.b);
                element.movable = 
                element.visible = true;
                break;
            }
            case "button": {

                break;
            }
            default: {
                return;
            }
        }
    }
}
