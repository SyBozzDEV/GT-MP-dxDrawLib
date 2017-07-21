using dxDrawLib.Server.Helpers;

namespace dxDrawLib.Server.Elements
{
    public class DxButton : DxElement
    {
        
        public bool enabled = true;
        public Color textColor = new Color(255, 255, 255, 255);
        public Color hoverColor;
        public Color clickColor;
        public Color disabledColor = new Color(255, 10, 10, 10);
        
        public DxButton(float x, float y, float width, float height, bool relative = false, Color color = null, DxElement parent = null) 
            : base(x, y, width, height, relative, color, parent)
        {
            this.hoverColor = new Color(this.color.a, 255, 0, 0);
            this.clickColor = new Color(this.color.a, 0, 0, 255);
        }

        public override void RegisterEvents()
        {
            
        }
    }
}