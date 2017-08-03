/// <reference path="../../dxdrawlib.d.ts" />

class DxProgressBar extends DxElement {

	private get _getRoundHeight(): number { return Math.round(this.height * 10) / 10 }
	private get _innerRectangel(): number { return (this._getRoundHeight * this._pointOffset) }
	private _progress: number = 0;
	private _pointOffset: number;

	public backColor: Color = new Color(255, 255, 255, 255);
	public set progress(value: number) { value = clamp(value, 0, 100); this._progress = ((this.width - (this._innerRectangel * 2)) / 100) * value; }
	public get progress(): number { return this._progress / ((this.width - (this._innerRectangel * 2)) / 100); }
	public set pointOffset(value: number) { this._pointOffset = Math.round((clamp((1 - value), 0, 0.9) / 2) * 100) / 100; }
	public get pointOffset(): number { return 1 - this._pointOffset; }

	constructor(X: number, Y: number, width: number, height: number, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this.pointOffset = 0.9;
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this.width, this.height, this.backColor.r, this.backColor.g, this.backColor.b, this.backColor.a);
			API.drawRectangle(this.X + this._innerRectangel, this.Y + this._innerRectangel, this._progress, this.height - (this._innerRectangel * 2), this.color.r, this.color.g, this.color.b, this.color.a);
			this.drawChildren();
		}
	}

	protected calculate(): void {

	}

	public sync(): void {

	}
}
