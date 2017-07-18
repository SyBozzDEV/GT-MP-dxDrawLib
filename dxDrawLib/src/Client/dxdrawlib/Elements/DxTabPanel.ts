/// <reference path="../../dxdrawlib.d.ts" />

class DxTabPanel extends DxElement {

	private _haveTab: boolean = false;
	private _tabnames: string[] = [];
	private get _textSize(): number { return (this._offsetHeaderHeight / 100); }

	public enabled: boolean = true;

	public set headerHeight(value: number) { this._offsetHeaderHeight = DxScreen.maintainVertical(value); }
	public get headerHeight(): number { return this._offsetHeaderHeight; }

	constructor(X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y + this._offsetHeaderHeight, this.width, this.height - this._offsetHeaderHeight, this.color.r, this.color.g, this.color.b, this.color.a);
			if (this._haveTab) {
				for (var i = 0; i < this._tabnames.length; i++) {
					API.drawRectangle(this.X, this.Y, 35, this._offsetHeaderHeight, this.color.r, this.color.g, this.color.b, this.color.a);
					API.drawText(this._tabnames[i], this.X, this.Y, this._textSize, 255, 255, 255, 255, 0, justify.left, false, false, 0);
				}
			}
			this.drawChildren();
		}
	}

	protected calculate(): void {
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (this.enabled) {
				if (API.isDisabledControlJustPressed(24)) {

				}
				if (API.isControlJustReleased(24)) {

				}
				if (this.isPointInElement(mPos)) {

				}
			}
			else {

			}
		}
	}

	public addTab(title): void {
		this._tabnames.push(title);
		if (!this._haveTab) {
			this.headerHeight = 25;
			this._haveTab = true;
		}
	}

	public sync(): void {

	}
}