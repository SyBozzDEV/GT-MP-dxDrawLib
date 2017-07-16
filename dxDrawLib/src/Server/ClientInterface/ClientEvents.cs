using System;
using System.Linq;
using GrandTheftMultiplayer.Server.Elements;

namespace dxDrawLib.Server.ClientInterface
{
    public static class ClientEvents
    {

        private const string EVENT_PREFIX = "dxdrawlib_";

        private static readonly string[] ValidEvents =
        {
            EVENT_PREFIX + "event"
        };

        public static void Init()
        {
            DxDrawLib.API.onClientEventTrigger += HandleEvents;
        }
        
        public static void HandleEvents(Client sender, string eventname, object[] args)
        {
            if (!ValidEvents.Contains(eventname)) return;

            switch (eventname)
            {
                case EVENT_PREFIX + "event":
                    int element         = Convert.ToInt32(args[0]);
                    string elementEvent = Convert.ToString(args[0]);
                    
                    
                    
                    break;
            }
            
        }

        public static void TriggerEvent(Client client, string eventname, params object[] args)
        {
            client.triggerEvent(EVENT_PREFIX + eventname, args);
        }
        
    }
}