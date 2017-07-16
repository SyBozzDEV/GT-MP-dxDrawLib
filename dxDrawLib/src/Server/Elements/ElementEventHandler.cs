using System;
using System.Collections.Generic;
using GrandTheftMultiplayer.Server.Elements;

namespace dxDrawLib.Server.Elements
{
    public abstract class ElementEventHandler
    {
        private readonly Dictionary<string, Action<Client, object[]>> _events = new Dictionary<string, Action<Client, object[]>>();

        public abstract void RegisterEvents();

        protected void AddEvent(string eventname, Action<Client, object[]> callback)
        {
            if (this._events.ContainsKey(eventname)) return;
            this._events.Add(eventname, callback);
        }
        
        public void HandleEvent(Client client, string eventname, object[] args)
        {
            if (!this._events.ContainsKey(eventname)) return;
            _events[eventname](client, args);
        }

        public static void HandleEvent(Client sender, int elementId, string eventname, object[] args)
        {
            if (!DxElement.Elements.ContainsKey(elementId)) return;
            DxElement.Elements[elementId].HandleEvent(sender, eventname, args);
        }
        
    }
}