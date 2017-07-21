using dxDrawLib.Server.Helpers;
using GrandTheftMultiplayer.Server.Elements;

namespace dxDrawLib.Server.Elements
{
    public class DxWindow : DxElement
    {
        public event PlayerActionEvent OnPlayerClose;
        
        public string title;
        public Color colorHeader;
        public Color colorTitle;
        public bool movable;
        public bool closeButton;
        public bool debug;
        
        public DxWindow(string title, float x, float y, float width, float height, bool relative = false, Color color = null, DxElement parent=null) 
            : base(x, y, width, height, relative, color, parent)
        {
            this.title         = title;
            this.colorHeader   = new Color((int)(200 * 1.1f),0,0,0);
            this.colorTitle    = new Color(255,255,255,255);
        }
        
        public override void RegisterEvents()
        {
            this.RegisterEventHandler("close", OnClose);
        }

        private void OnClose(Client client, object[] args)
        {
            client.sendChatMessage("SERVER: WINDOW CLOSE");
            OnPlayerClose?.Invoke(client);
        }
    }
}