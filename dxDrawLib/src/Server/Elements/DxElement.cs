using System;
using System.Collections.Generic;
using dxDrawLib.Server.Helpers;
using dxDrawLib.Server.SyncEntities;
using GrandTheftMultiplayer.Server.Elements;
using Newtonsoft.Json;
// ReSharper disable InconsistentNaming

namespace dxDrawLib.Server.Elements
{
    public abstract class DxElement : ElementEventHandler
    {
        public delegate void PlayerActionEvent(Client client);
        
        public static readonly Dictionary<int, DxElement> Elements = new Dictionary<int, DxElement>();
        
        internal static int lastInt = 1;
        public readonly int id;
        
        public float x;
        public float y;
        public float width;
        public float height;
        public bool relative;

        public Color color;

        internal DxElement _parent;
        internal List<DxElement> _children = new List<DxElement>();

        private bool _visible;

        [JsonIgnore]
        public DxElement parent
        {
            set
            {
                if (this._parent == value) return;
                
                this._parent?._children.Remove(this);
                this._parent = value;
                this._parent?._children.Add(this);
            }
            get { return this._parent; }
        }
        
        [JsonProperty("parent")]
        internal int parentId => this._parent?.id ?? -1;

        [JsonIgnore]
        public IEnumerable<DxElement> children => this._children.AsReadOnly();

        [JsonIgnore]
        public bool visible
        {
            set
            {
                _visible = value;
                this.Sync();
            }
            get { return _visible; }
        }

        protected DxElement(float x, float y, float width, float height, bool relative = true)
            : this(x, y, width, height, relative, new Color(200, 0, 0, 0)) {}
        
        protected DxElement(float x, float y, float width, float height, bool relative, Color color)
        {
            this.id         = lastInt++;
            this.x          = x;
            this.y          = y;
            this.width      = width;
            this.height     = height;
            this.relative   = relative;

            this.color = color;
            
            Elements.Add(this.id, this);
        }

        private void Sync()
        {
            string syncText = this.GetSyncString();
            DxDrawLib.API.consoleOutput(syncText);
        }

        private void Unsync()
        {
            
        }

        public void Delete()
        {
            Unsync();
            Elements.Remove(id);
        }

        private string GetSyncString()
        {
            Type type = this.GetType();
            string typeName = "generic";
            if (type == typeof(DxWindow))  typeName = "window";
            if (type == typeof(DxButton))  typeName = "button";
            
            return JsonConvert.SerializeObject(new SyncEntity
            {
                type = typeName,
                id = this.id,
                element = this
            });
        }

        protected override int Id() => this.id;
    }
}