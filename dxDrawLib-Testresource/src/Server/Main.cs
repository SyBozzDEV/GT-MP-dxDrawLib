using dxDrawLib.Server;
using GrandTheftMultiplayer.Server.API;

namespace dxDrawLibResource.Server
{
    public class Main : Script
    {

        public Main()
        {
            DxDrawLib.Setup(API);
        }
        
    }
}