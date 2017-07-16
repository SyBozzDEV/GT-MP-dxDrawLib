/// <reference path="../../dxdrawlib.d.ts" />

class DxWindow extends DxElement {

	public closeButton: boolean = false;
	public colorHeader: Color;

	constructor(public title: string, X: number, Y: number, width: number, height: number, public relative: boolean = true, public color?: Color) {
		super(X, Y, width, height, relative, color);
		//this.color = new Color(200, 0, 0, 0);
		//this.colorHeader = new Color((this.color.a * 1.1), 0, 0, 0);
	}

	public draw(): void {
		if (this.visible) {
			//API.drawRectangle(this.X, this.Y, this.width, 20, this.colorHeader.r, this.colorHeader.g, this.colorHeader.b, this.colorHeader.a); // Window Title Header
			//API.drawRectangle(this.X, this.Y, this.width, this.height, this.color.r, this.color.g, this.color.b, this.color.a); // Window
			API.drawText("on", 0, 0, 1, 255, 255, 255, 255, 0, 0, false, false, 0);
			//API.drawText(this.title, this.X + (this.width / 2), this.Y, 0.25, 255, 255, 255, 255, 0, 1, false, false, 0); // Window Title
		}
	}

}
