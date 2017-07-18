using dxDrawLib.Server;
using dxDrawLib.Server.Elements;
using GrandTheftMultiplayer.Server.API;
using GrandTheftMultiplayer.Server.Elements;

namespace dxDrawLibResource.Server
{
    public class Main : Script
    {

        private DxWindow window;

        public Main()
        {
            API.consoleOutput("[DxDrawLib-Resource] Starting testresource...");
            DxDrawLib.Setup(API);
            
            SetUpTestwindow();

            API.onPlayerFinishedDownload += OnPlayerFinishedDownload;
            
            API.consoleOutput("[DxDrawLib-Resource] Testresource started!");
        }

        public void SetUpTestwindow()
        {
            window = new DxWindow("Test", 100, 100, 500, 500, false);
            window.moveable = true;
            window.visible = true;
        }

        public void OnPlayerFinishedDownload(Client client)
        {
            window.Show(client);
        }
        
    }
}