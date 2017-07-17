using System;
using System.Collections.Generic;
using System.Linq;
using dxDrawLib.Server.ClientInterface;
using GrandTheftMultiplayer.Server.Elements;

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
        
        protected void TriggerEvent(string eventname, params object[] args)
        {
            // TODO: Implement playerloop
        }

        protected void TriggerEvent(Client client, string eventname, params object[] args)
        {
            ClientEvents.TriggerEvent(client, "event", Id(), eventname, args.ToList());
        }

        protected abstract int Id();

    }
}