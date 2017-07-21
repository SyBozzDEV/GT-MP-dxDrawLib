/// <reference path="../../dxdrawlib.d.ts" />

class DxCheckbox extends DxElement {

	private get _textSize(): number { return (this.height / 90); }
	private get _text(): string { return (((this.text.length * (this._textSize * 40)) > (this.width - this.height)) ? this.text.substring(0, Math.round((this.width - this.height) / (this._textSize * 40))) + ((Math.round((this.width - this.height) / (this._textSize * 38)) == this.text.length) ? "" : "...") : this.text); }
	private get _getRoundHeight(): number { return Math.round(this.height * 10) / 10 }
	private _clicked: boolean = false;

	public backColor: Color = new Color(255, 255, 255, 255);
	public textColor: Color = new Color(255, 255, 255, 255);
	public onClick: () => void = (function () { });
	public enabled: boolean = true;

	constructor(public text: string, X: number, Y: number, width: number, height: number, public selected: boolean = false, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this._getRoundHeight, this._getRoundHeight, this.backColor.r, this.backColor.g, this.backColor.b, this.backColor.a);
			API.drawText(this._text, this.X + (this._getRoundHeight), this.Y, this._textSize, this.textColor.r, this.textColor.g, this.textColor.b, this.textColor.a, 0, justify.left, false, false, 0);
			if (this.selected) {
				API.drawText("X", this.X + (this.height / 2), this.Y, this._textSize, this.color.r, this.color.g, this.color.b, this.color.a, 0, justify.center, false, false, 0);
			}
			if (!this.enabled) {
				API.drawRectangle(this.X, this.Y, this._getRoundHeight, this._getRoundHeight, 0, 0, 0, 75);
			}
		}
	}

	protected calculate(): void {
		if (API.isCursorShown()) {
			if (this.enabled) {
				var mPos = API.getCursorPositionMaintainRatio();
				if (API.isDisabledControlJustPressed(24)) {
					if (this.isPointInElement(mPos)) {
						this._clicked = true;
					}
				}
				if (API.isControlJustReleased(24)) {
					if (this.isPointInElement(mPos) && this._clicked) {
						this.debugMessage(debug.DxCheckbox, "~g~Checkbox clicked");
						this.selected = !this.selected;
						this.onClick();
					}
					this._clicked = false;
				}
				if (API.isControlPressed(24)) {

				}
			}
			else {
				// disabled
			}
		}
	}

	public sync(): void {

	}

}
