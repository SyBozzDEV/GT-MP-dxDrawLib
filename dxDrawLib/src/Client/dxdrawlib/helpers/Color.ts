/// <reference path="../../dxdrawlib.d.ts" />

class Color {

	private _a: number;
	private _r: number;
	private _g: number;
	private _b: number;

	set a(value: number) { this._a = Math.round(clamp(value, 0, 255)); }
	get a(): number { return this._a; }
	set r(value: number) { this._r = Math.round(clamp(value, 0, 255)); }
	get r(): number { return this._r; }
	set g(value: number) { this._g = Math.round(clamp(value, 0, 255)); }
	get g(): number { return this._g; }
	set b(value: number) { this._b = Math.round(clamp(value, 0, 255)); }
	get b(): number { return this._b; }

	constructor(a: number = 200, r: number = 0, g: number = 0, b: number = 0) {
		this.a = a;
		this.r = r;
		this.g = g;
		this.b = b;
	}
}
