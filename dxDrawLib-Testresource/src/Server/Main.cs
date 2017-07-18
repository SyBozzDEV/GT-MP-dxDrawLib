using dxDrawLib.Server;
using dxDrawLib.Server.Elements;
using dxDrawLib.Server.Helpers;
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
            window.movable = true;
            window.closeButton = true;
            window.debug = true;
            window.colorHeader = new Color(200, 230, 0,0);
            
            var innerWindow = new DxWindow("Innerwindow", 0.1f, 0.1f, 0.5f, 0.5f, true, new Color(200, 33, 33, 33), window);
            innerWindow.movable = true;
            innerWindow.closeButton = true;
            innerWindow.debug = true;
            innerWindow.colorHeader = new Color(220, 0, 230,0);
        }

        public void OnPlayerFinishedDownload(Client client)
        {
            window.Show(client);
        }
        
    }
}