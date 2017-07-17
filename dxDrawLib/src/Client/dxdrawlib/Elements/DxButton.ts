/// <reference path="../../dxdrawlib.d.ts" />

class DxButton extends DxElement {

	private _activeColor: Color;
	private _activeTextColor: Color;
	private get _textSize(): number { return (this.height / 100); }
	private get _text(): string { return (((this.text.length * (this._textSize * 40)) > this.width) ? this.text.substring(0, Math.round(this.width / (this._textSize * 40))) + "..." : this.text); }
	private _buttonClicked: boolean = false;

	public enabled: boolean = true;
	public textColor: Color = new Color(255, 255, 255, 255);
	public hoverColor: Color = new Color(this.color.a, 255, 0, 0);
	public clickColor: Color = new Color(this.color.a, 0, 0, 255);
	public disabledColor: Color = new Color(255, 10, 10, 10);


	constructor(public text: string, X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this._activeColor = this.color;
		this._activeTextColor = this.textColor;
		this.hoverColor.a = this.color.a;
		this.clickColor.a = this.color.a;
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this.width, this.height, this._activeColor.r, this._activeColor.g, this._activeColor.b, this._activeColor.a);
			API.drawText(this._text, (this.X + (this.width / 2)), (this.Y + (this.height / 10)), this._textSize, this._activeTextColor.r, this._activeTextColor.g, this._activeTextColor.b, this._activeTextColor.a, 0, justify.center, false, false, 0);

			this.drawChildren();
		}
	}

	protected calculate(): void {
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (this.enabled) {
				if (API.isDisabledControlJustPressed(24)) {
					if (this.isPointInElement(mPos)) {
						this._buttonClicked = true;
					}
				}
				if (API.isControlJustReleased(24)) {
					if (this.isPointInElement(mPos) && this._buttonClicked) {
						this.debugMessage(debug.button, "~g~Button clicked");
					}
					this._buttonClicked = false;
				}
				if (this.isPointInElement(mPos)) {
					if (this._buttonClicked) {
						this._activeColor = this.clickColor;
					}
					else this._activeColor = this.hoverColor;
				}
				else this._activeColor = this.color;
			}
			else {
				this._activeColor = this.disabledColor;
				this._activeTextColor = new Color(255, 20, 20, 20);
			}
		}
	}

	public sync(data): void {

	}
}
