/// <reference path="../../dxdrawlib.d.ts" />

class DxWindow extends DxElement {

	private _closeButtonClicked: boolean = false;
	private _headerClicked: boolean = false;
	private _offsetHeaderClicked_X: number = 0;
	private _offsetHeaderClicked_Y: number = 0;

	//public set setParent(value: DxElement) { super.setNewParent(value); } // Not Supported at the moment
	public closeButton: boolean = false;
	public movable: boolean = false;
	public colorHeader: Color;
	public colorTitle: Color;

	constructor(public title: string, X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this.colorHeader = new Color((this.color.a * 1.1), this.color.r, this.color.g, this.color.b);
		this.colorTitle = new Color(255, 255, 255, 255);
		this._offsetHeaderHeight = 25;
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			if (this.debug) API.drawText("on", 0, 0, 1, 255, 255, 255, 255, 0, 0, false, false, 0); // For Debug
			API.drawRectangle(this.X, this.Y, this.width, this.height, this.color.r, this.color.g, this.color.b, this.color.a); // Window
			API.drawRectangle(this.X, this.Y, this.width, this._offsetHeaderHeight, this.colorHeader.r, this.colorHeader.g, this.colorHeader.b, this.colorHeader.a); // Window Title Header
			API.drawText(this.title, this.X + (this.width / 2), this.Y, 0.25, this.colorTitle.r, this.colorTitle.g, this.colorTitle.b, this.colorTitle.a, 0, justify.center, false, false, 0); // Window Title

			if (this.closeButton) {
				API.drawText("[X]", this.X + this.width, this.Y, 0.25, this.colorTitle.r, this.colorTitle.g, this.colorTitle.b, this.colorTitle.a, 0, justify.right, false, false, 0);
			}

			this.drawChildren();
		}
	}

	protected calculate(): void {
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (API.isDisabledControlJustPressed(24)) {
				if (this.isPointOnClose(mPos)) {
					this._closeButtonClicked = true;
				}
				if (this.isPointOnHeader(mPos) && !this._headerClicked) {
					this._offsetHeaderClicked_X = (mPos.X + this.parentX) - this.X;
					this._offsetHeaderClicked_Y = (mPos.Y + this.parentY) - this.Y;
					this._headerClicked = true;
				}
			}
			if (API.isControlJustReleased(24)) {
				if (this._closeButtonClicked && this.isPointOnClose(mPos)) {
					this.debugMessage(debug.window, "~g~Close Button clicked");
					ServerEvents.TriggerServerEvent(this.id, "close");
				}
				this._closeButtonClicked = false;
				this._headerClicked = false;
			}
			if (API.isControlPressed(24)) {
				if (this._headerClicked && this.movable) {
					this._X = mPos.X - this._offsetHeaderClicked_X;
					this._Y = mPos.Y - this._offsetHeaderClicked_Y;
				}
			}
		}
	}

	private isPointOnHeader(point: PointF): boolean {
		return isPointInArea(point, this.X, this.Y, this.width - (this.closeButton ? 20 : 0), this._offsetHeaderHeight);
	}

	private isPointOnClose(point: PointF): boolean {
		return this.closeButton && isPointInArea(point, this.X + this.width - 20, this.Y, this.width, this._offsetHeaderHeight);
	}

	public sync(data): void {

	}

}
