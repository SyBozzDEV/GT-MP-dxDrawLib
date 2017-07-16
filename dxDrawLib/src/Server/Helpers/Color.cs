using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace dxDrawLib.Server.Helpers
{
    public class Color
    {

        [JsonProperty("a")]
        private int _a;
        [JsonProperty("r")]
        private int _r;
        [JsonProperty("g")]
        private int _g;
        [JsonProperty("b")]
        private int _b;

        public Color(System.Drawing.Color color) : this(color.A, color.R, color.G, color.B) {}

        public Color(int a, int r, int g, int b)
        {
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        }
        
        [JsonIgnore]
        public int a
        {
            set { this._a = Helpers.Clamp(value, 0, 255); }
            get { return this._a; }
        }

        [JsonIgnore]
        public int r
        {
            set { this._r = Helpers.Clamp(value, 0, 255); }
            get { return this._r; }
        }

        [JsonIgnore]
        public int g
        {
            set { this._g = Helpers.Clamp(value, 0, 255); }
            get { return this._g; }
        }

        [JsonIgnore]
        public int b
        {
            set { this._b = Helpers.Clamp(value, 0, 255); }
            get { return this._b; }
        }

    }
}