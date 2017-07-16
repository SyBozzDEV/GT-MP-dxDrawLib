﻿using System.Drawing;

namespace dxDrawLib.Server.Elements
{
    public class DxWindow : DxElement
    {
        public string title;
        
        public DxWindow(string title, float x, float y, float width, float height, bool relative=true) : base(x, y, width, height, relative)
        {
            this.title = title;
        }

        public DxWindow(string title, float x, float y, float width, float height, bool relative, Color color) : base(x, y, width, height, relative, color)
        {
            this.title = title;
        }
    }
}