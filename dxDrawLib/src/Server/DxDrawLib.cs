using dxDrawLib.Server.ClientInterface;
using GrandTheftMultiplayer.Server.API;

namespace dxDrawLib.Server
{
    public static class DxDrawLib
    {
        // ReSharper disable once InconsistentNaming
        internal static API API;

        public static void Setup(API api)
        {
            DxDrawLib.API = api;
            API.consoleOutput("[DxDrawLib] Setting up...");
            
            ClientEvents.Init();
            
            API.consoleOutput("[DxDrawLib] Successfully set up!");
        }
        
    }
}