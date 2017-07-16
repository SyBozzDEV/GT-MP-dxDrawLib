using System.Drawing;
using Newtonsoft.Json;

namespace dxDrawLib.Server.Elements
{
    public abstract class DxElement
    {
        private static int lastInt;
        protected readonly int id;
        
        protected float x;
        protected float y;
        protected float width;
        protected float height;

        protected bool relative;

        protected Color color;

        private bool _visible;

        public bool Visible
        {
            set
            {
                _visible = value;
                this.Sync();
            }
            get { return _visible; }
        }

        protected DxElement(float x, float y, float width, float height)
        {
            this.id         = lastInt++;
            this.x          = x;
            this.y          = y;
            this.width      = width;
            this.height     = height;
            
            this.relative   = true;
            this.color = Color.FromArgb(200, 0, 0, 0);
        }
        
        protected DxElement(float x, float y, float width, float height, bool relative)
        {
            this.id         = lastInt++;
            this.x          = x;
            this.y          = y;
            this.width      = width;
            this.height     = height;
            this.relative   = relative;

            this.color = Color.FromArgb(200, 0, 0, 0);
        }
        
        protected DxElement(float x, float y, float width, float height, bool relative, Color color)
        {
            this.id         = lastInt++;
            this.x          = x;
            this.y          = y;
            this.width      = width;
            this.height     = height;
            this.relative   = relative;

            this.color = color;
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