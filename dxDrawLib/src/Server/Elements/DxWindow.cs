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
        
        public DxWindow(string title, float x, float y, float width, float height, bool relative=true) 
            : this(title, x, y, width, height, relative, new Color(200,0,0,0)) {}
        
        public DxWindow(string title, float x, float y, float width, float height, bool relative, Color color) 
            : this(title, x, y, width, height, relative, color, new Color((int)(200 * 1.1f),0,0,0)) {}
        
        public DxWindow(string title, float x, float y, float width, float height, bool relative, Color color, Color colorHeader) 
            : this(title, x, y, width, height, relative, color, colorHeader, new Color(255, 255, 255, 255)) {}

        public DxWindow(string title, float x, float y, float width, float height, bool relative, Color color, Color colorHeader, Color colorTitle) : base(x, y, width, height, relative, color)
        {
            this.title         = title;
            this.colorHeader   = colorHeader;
            this.colorTitle    = colorTitle;
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