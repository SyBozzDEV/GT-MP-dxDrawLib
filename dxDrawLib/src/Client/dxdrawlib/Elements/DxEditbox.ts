/// <reference path="../../dxdrawlib.d.ts" />

class DxEditBox extends DxElement {

	private _clicked: boolean = false;
	private _selected: boolean = false;
	private _text: string;

	public set text(value: string) { this._text = value.replace("\n", ""); }
	public get text(): string { return this._text; }

	public masked: boolean = false;
	public maxLength: number = 0;
	public readOnly: boolean = false;

	constructor(text: string, X: number, Y: number, width: number, height: number, relative?: boolean, color: Color = new Color(255, 255, 255, 255), parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			
			this.drawChildren();
		}
	}

	protected calculate(): void {
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (!this.readOnly) {
				if (API.isDisabledControlJustPressed(24)) {
					if (this.isPointInElement(mPos)) {
						this._clicked = true;
					}
				}
				if (API.isControlJustReleased(24)) {
					if (this.isPointInElement(mPos) && this._clicked) {
						this._selected = true;
					}
					else this._selected = false;
					this._clicked = false;
				}
				if (this.isPointInElement(mPos)) {

				}
			}
			else {

			}
		}
	}

	public sync(): void {

	}
}
