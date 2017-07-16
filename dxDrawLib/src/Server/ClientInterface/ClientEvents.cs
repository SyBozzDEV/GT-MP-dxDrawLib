using System;
using System.Linq;
using dxDrawLib.Server.Elements;
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
                    if (!DxElement.Elements.ContainsKey(element)) return;
                    
                    string elementEvent = Convert.ToString(args[1]);

                    object[] eventArgs = new object[args.Length - 2];
                    for (int i = 2; i < args.Length - 2; i++) eventArgs[i] = args[i - 2];
                    
                    DxElement.Elements[element]?.HandleEvent(sender, elementEvent, eventArgs);
                    
                    break;
            }
            
        }

        public static void TriggerEvent(Client client, string eventname, params object[] args)
        {
            client.triggerEvent(EVENT_PREFIX + eventname, args);
        }
        
    }
}