using System.Drawing;
using GrandTheftMultiplayer.Server.Elements;

namespace dxDrawLib.Server.Elements
{
    public class DxWindow : DxElement
    {
        public event PlayerActionEvent OnPlayerClose;
        
        public string title;
        
        public DxWindow(string title, float x, float y, float width, float height, bool relative=true) : base(x, y, width, height, relative)
        {
            this.title = title;
        }

        public DxWindow(string title, float x, float y, float width, float height, bool relative, Color color) : base(x, y, width, height, relative, color)
        {
            this.title = title;
        }
        
        public override void RegisterEvents()
        {
            this.AddEvent("close", OnClose);
        }

        private void OnClose(Client client, object[] args)
        {
            OnPlayerClose?.Invoke(client);
        }
    }
}