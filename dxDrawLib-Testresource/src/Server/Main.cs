using dxDrawLib.Server;
using GrandTheftMultiplayer.Server.API;

namespace dxDrawLibResource.Server
{
    public class Main : Script
    {

        public Main()
        {
            API.consoleOutput("[DxDrawLib-Resource] Starting testresource...");
            DxDrawLib.Setup(API);
            
            API.consoleOutput("[DxDrawLib-Resource] Testresource started!");
        }
        
    }
}