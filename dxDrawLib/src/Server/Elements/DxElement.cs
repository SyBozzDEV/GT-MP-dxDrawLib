using System.Collections.Generic;
using dxDrawLib.Server.Helpers;
using GrandTheftMultiplayer.Server.Elements;
using Newtonsoft.Json;

namespace dxDrawLib.Server.Elements
{
    public abstract class DxElement : ElementEventHandler
    {
        public delegate void PlayerActionEvent(Client client);
        
        public static readonly Dictionary<int, DxElement> Elements = new Dictionary<int, DxElement>();
        
        internal static int lastInt;
        public readonly int id;
        
        public float x;
        public float y;
        public float width;
        public float height;

        public bool relative;

        public Color color;

        private bool _visible;

        [JsonIgnore]
        public bool Visible
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
            DxDrawLib.API.consoleOutput(this.GetSyncString());
        }

        private void Unsync()
        {
            
        }

        public void Delete()
        {
            Unsync();
        }

        private string GetSyncString()
        {
            return JsonConvert.SerializeObject(this);
        }

    }
}