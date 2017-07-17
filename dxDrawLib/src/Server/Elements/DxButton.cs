using dxDrawLib.Server.Helpers;

namespace dxDrawLib.Server.Elements
{
    public class DxButton : DxElement
    {
        public DxButton(float x, float y, float width, float height, bool relative = true) : base(x, y, width, height, relative)
        {
        }

        public DxButton(float x, float y, float width, float height, bool relative, Color color) : base(x, y, width, height, relative, color)
        {
        }

        public override void RegisterEvents()
        {
            
        }
    }
}