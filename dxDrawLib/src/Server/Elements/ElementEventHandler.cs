using System;
using System.Collections.Generic;
using System.Linq;
using dxDrawLib.Server.ClientInterface;
using GrandTheftMultiplayer.Server.Elements;
using Newtonsoft.Json;

namespace dxDrawLib.Server.Elements
{
    public abstract class ElementEventHandler
    {
        private readonly Dictionary<string, Action<Client, object[]>> _events = new Dictionary<string, Action<Client, object[]>>();

        public abstract void RegisterEvents();

        protected void RegisterEventHandler(string eventname, Action<Client, object[]> callback)
        {
            if (this._events.ContainsKey(eventname)) return;
            this._events.Add(eventname, callback);
        }
        
        public void HandleEvent(Client client, string eventname, object[] args)
        {
            if (!this._events.ContainsKey(eventname)) return;
            _events[eventname](client, args);
        }

        public static void HandleIncomingEvent(Client sender, int elementId, string eventname, object[] args)
        {
            if (!DxElement.Elements.ContainsKey(elementId)) return;
            DxElement.Elements[elementId].HandleEvent(sender, eventname, args);
        }

        protected void TriggerEvent(Client client, string elementevent, params object[] args)
        {
            ClientEvents.TriggerEvent(client, "event", Id(), elementevent, JsonConvert.SerializeObject(args));
        }

        protected abstract int Id();

    }
}