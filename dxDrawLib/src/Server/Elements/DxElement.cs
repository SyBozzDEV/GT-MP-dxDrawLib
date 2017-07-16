using Newtonsoft.Json;

namespace dxDrawLib.Server.Elements
{
    public abstract class DxElement
    {
        private static int lastInt;
        protected readonly int id;
        
        protected float x;
        protected float y;

        protected DxElement(float x, float y)
        {
            this.id = lastInt++;
            this.x = x;
            this.y = y;
        }

        public void Show()
        {
            DxDrawLib.API.sendChatMessageToAll(this.GetSyncString());
        }

        public void Hide()
        {
            
        }

        private string GetSyncString()
        {
            return JsonConvert.SerializeObject(this);
        }

    }
}