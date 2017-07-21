using System;
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


        public Color(string hex)
        {
            if (hex.StartsWith("#")) hex = hex.Substring(1);
            int length = hex.Length;
            
            long value = Convert.ToInt32(hex, 16);

            if (length == 8) this._a = (int) (value >> 8 * 3) & 255;
            else this._a = 255;
            
            this._r = (int) (value >> 8 * 2) & 255;
            this._g = (int) (value >> 8 * 1) & 255;
            this._b = (int) value & 255;
        }
        
        public Color(int a, int r, int g, int b)
        {
            this.a = a;
            this.r = r;
            this.g = g;
            this.b = b;
        }
        
        public Color(int r, int g, int b)
        {
            this.a = 255;
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

        public void Lighten(float factor)
        {
            this.r = (int) (this._r + (255 - this._r) * factor);
            this.g = (int) (this._g + (255 - this._g) * factor);
            this.b = (int) (this._b + (255 - this._b) * factor);
        }

        public void Darken(float factor)
        {
            this.r = (int) (this._r * (1 - factor));
            this.g = (int) (this._g * (1 - factor));
            this.b = (int) (this._b * (1 - factor));
        }

        public Color Clone() => new Color(this._a, this._r, this._g, this._b);

    }
}