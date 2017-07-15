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
            
            
        }
        
    }
}