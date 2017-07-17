/// <reference path="../../dxdrawlib.d.ts" />

class DxWindow extends DxElement {

	public closeButton: boolean = false;
	public moveable: boolean = false;
	public colorHeader: Color;
	public colorTitle: Color;

	private _closeButtonClicked: boolean = false;
	private _headerClicked: boolean = false;
	private _offsetHeaderClicked_X: number = 0;
	private _offsetHeaderClicked_Y: number = 0;

	constructor(public title: string, X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this.colorHeader = new Color((this.color.a * 1.1), this.color.r, this.color.g, this.color.b);
		this.colorTitle = new Color(255, 255, 255, 255);
		this._offsetHeaderHeight = 25;
	}

	public draw(): void {
		if (this.visible) {
			API.drawText("on", 0, 0, 1, 255, 255, 255, 255, 0, 0, false, false, 0); // For Debug
			API.drawRectangle(this.X, this.Y, this.width, this._offsetHeaderHeight, this.colorHeader.r, this.colorHeader.g, this.colorHeader.b, this.colorHeader.a); // Window Title Header
			API.drawRectangle(this.X, this.Y, this.width, this.height, this.color.r, this.color.g, this.color.b, this.color.a); // Window
			API.drawText(this.title, this.X + (this.width / 2), this.Y, 0.25, this.colorTitle.r, this.colorTitle.g, this.colorTitle.b, this.colorTitle.a, 0, 1, false, false, 0); // Window Title

			if (this.closeButton) {
				API.drawText("[X]", this.X + this.width, this.Y, 0.25, this.colorTitle.r, this.colorTitle.g, this.colorTitle.b, this.colorTitle.a, 0, 2, false, false, 0);
			}

			if (API.isCursorShown()) {
				var mPos = API.getCursorPositionMaintainRatio();
				if (API.isDisabledControlJustPressed(24)) {
					if (this.closeButton && mPos.X > ((this.X + this.width) - 20) && mPos.X < (this.X + this.width) && mPos.Y > (this.Y) && mPos.Y < (this.Y + this._offsetHeaderHeight)) {
						this._closeButtonClicked = true;
					}
					if (mPos.X > this.X && mPos.X < ((this.X + this.width) - 20) && mPos.Y > this.Y && mPos.Y < (this.Y + this._offsetHeaderHeight) && !this._headerClicked) {
						this._offsetHeaderClicked_X = (mPos.X + this.parentX) - this.X;
						this._offsetHeaderClicked_Y = (mPos.Y + this.parentY) - this.Y;
						this._headerClicked = true;
					}
				}
				if (API.isControlJustReleased(24)) {
					if (this.closeButton && this._closeButtonClicked && mPos.X > ((this.X + this.width) - 20) && mPos.X < (this.X + this.width) && mPos.Y > (this.Y) && mPos.Y < (this.Y + this._offsetHeaderHeight)) {
						API.sendChatMessage("Close Button clicked");
						ServerEvents.TriggerServerEvent(this.id, "close");
					}
					this._closeButtonClicked = false;
					this._headerClicked = false;
				}
				if (API.isControlPressed(24)) {
					if (this._headerClicked && this.moveable) {
						this._X = mPos.X - this._offsetHeaderClicked_X;
						this._Y = mPos.Y - this._offsetHeaderClicked_Y;
					}
				}
			}
			this.drawChildren();
		}
	}

}
