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

	constructor(a: number|string = 200, r: number = 0, g: number = 0, b: number = 0) {
		if(typeof a == "number") {
			this.a = a;
			this.r = r;
			this.g = g;
			this.b = b;
		} else if(typeof a == "string") {	
			if(a.charAt(0) == '#') a = a.substr(1);
			let value = parseInt(a, 16);
			
			if (a.length == 8) this._a = (value >> 8 * 3) & 255;
			else this._a = 255;

			this._r = (value >> 8 * 2) & 255;
			this._g = (value >> 8) & 255;
			this._b = value & 255;
		}		
	}
	
	public set(a: number, r: number, g: number, b: number): void {
		this.a = a;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	public Lighten(factor: number): Color
	{
		this.r = (this._r + (255 - this._r) * factor);
		this.g = (this._g + (255 - this._g) * factor);
		this.b = (this._b + (255 - this._b) * factor);
		return this;
	}
	
	public Darken(factor: number): Color
	{
		this.r = this._r * (1 - factor);
		this.g = this._g * (1 - factor);
		this.b = this._b * (1 - factor);
		return this;
	}
	
	public Clone(): Color {
		return new Color(this._a, this._r, this._g, this._b);
	}
}
