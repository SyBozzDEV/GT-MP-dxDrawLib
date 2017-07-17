/// <reference path="../../dxdrawlib.d.ts" />

class ElementSyncer {

    public static OnSyncElement(received: string) {
        let data: {type: string,  id: number, element: any} = JSON.parse(received);
        let eD = data.element;
        
        let cElementId = ElementTransformer.ServerElementToClient(data.id);
        let element: DxElement;
        
        // ELEMENT DOESN'T EXISTS, CREATE ONE
        if (cElementId == -1) {
            
            switch(data.type) {
                case "window": {
                    
                    element = new DxWindow(eD.title, eD.x, eD.y, eD.width, eD.height, eD.relative, new Color(eD.color.a,  eD.color.r, eD.color.g, eD.color.b));
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

}
