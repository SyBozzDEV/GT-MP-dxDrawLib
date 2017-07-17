/// <reference path="../../dxdrawlib.d.ts" />

class DxButton extends DxElement {

	private _textSize: number;
	private _activeColor: Color;
	private _text: string;

	public enabled: boolean = false;
	public textColor: Color = new Color(255, 255, 255, 255);
	//public color: Color = new Color(255);
	public hoverColor: Color = new Color(this.color.a, 255, 0, 0);
	public clickColor: Color = new Color(this.color.a, 0, 0, 255);
	public disabledColor: Color = new Color(255, 10, 10, 10);


	constructor(public text: string, X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this._activeColor = this.color;
		this.hoverColor.a = this.color.a;
		this.clickColor.a = this.color.a;
		//API.sendChatMessage("w:" + this.width + " h:" + this.height);
		this._textSize = (this.height / 100);
		this.text = (((this.text.length * (this._textSize * 40)) > this.width) ? this.text.substring(0, Math.round(this.width / (this._textSize * 40))) + "..." : this.text);
	}

	public draw(): void {
		if (this.visible) {
			API.drawRectangle(this.X, this.Y, this.width, this.height, this._activeColor.r, this._activeColor.g, this._activeColor.b, this._activeColor.a);
			//API.drawText(this.text, (this.X + (this.width / 2)), (this.Y + (this.height / 10)), (this.height / 100), this.textColor.r, this.textColor.g, this.textColor.b, this.textColor.a, 0, 1, false, false, 0);
			API.drawText(this.text, (this.X + (this.width / 2)), (this.Y + (this.height / 10)), this._textSize, this.textColor.r, this.textColor.g, this.textColor.b, this.textColor.a, 0, 1, false, false, 0);
			if (API.isCursorShown()) {
				var mPos = API.getCursorPositionMaintainRatio();
				if (this.isPointInElement(mPos)) {
					this._activeColor = this.hoverColor;
				}
				else this._activeColor = this.color;
			}

			this.drawChildren();
		}
	}
}
