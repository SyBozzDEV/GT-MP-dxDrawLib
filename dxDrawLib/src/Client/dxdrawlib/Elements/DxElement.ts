/// <reference path="../../dxdrawlib.d.ts" />

abstract class DxElement {

	private _X: number;
	private _Y: number;
	private _width: number;
	private _height: number;

	public visible: boolean = false;

	set X(value: number) { this._X = DxElement.calculateSize(value, 1, this.relative); }
	get X(): number { return this._X; }
	set Y(value: number) { this._Y = DxElement.calculateSize(value, 2, this.relative); }
	get Y(): number { return this._Y; }
	set width(value: number) { this._width = DxElement.calculateSize(value, 1, this.relative); }
	get width(): number { return this._width; }
	set height(value: number) { this._height = DxElement.calculateSize(value, 2, this.relative); }
	get height(): number { return this._height; }

	constructor(X: number, Y: number, width: number, height: number, public relative: boolean = true, public color?: Color) {

		this.X = X;
		this.Y = Y;
		this.width = width;
		this.height = height;

		if (this.color == null) this.color = new Color();
	}

	private static calculateSize(value: number, type: number, relative: boolean): number {
		var result: number;

		switch (type) {
			case 1: // For X and width
				result = (relative) ? clamp(DxScreen.width * value, 0, DxScreen.width) : clamp(value, 0, DxScreen.width);
				break;
			case 2: // For Y and height
				result = (relative) ? clamp(DxScreen.height * value, 0, DxScreen.height) : clamp(value, 0, DxScreen.height);
				break;
		}

		return result;
	}

	public abstract draw(): void;

}
