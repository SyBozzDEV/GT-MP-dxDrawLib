/// <reference path="../../dxdrawlib.d.ts" />

class DxScrollbar extends DxElement {

	public enabled: boolean = true;
	public backColor: Color = new Color(255, 0, 0, 0);

	constructor(X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this.width, this.height, this.backColor.r, this.backColor.g, this.backColor.b, this.backColor.a);
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

	public sync(): void {

	}
}
