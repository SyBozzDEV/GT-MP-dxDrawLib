using dxDrawLib.Server;
using dxDrawLib.Server.Elements;
using GrandTheftMultiplayer.Server.API;

namespace dxDrawLibResource.Server
{
    public class Main : Script
    {

        public Main()
        {
            API.consoleOutput("[DxDrawLib-Resource] Starting testresource...");
            DxDrawLib.Setup(API);
            
            SetUpTestwindow();
            
            API.consoleOutput("[DxDrawLib-Resource] Testresource started!");
        }

        public void SetUpTestwindow()
        {
            DxWindow window = new DxWindow("Test", 0, 0, 0, 0);
            window.Visible = true;
        }
        
    }
}