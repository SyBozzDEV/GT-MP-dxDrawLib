/// <reference path="../../dxdrawlib.d.ts" />

class Color {

	constructor(public r: number, public g: number, public b: number, public a: number) {
		this.r = (this.r > 255) ? 255 : ((this.r < 0) ? 0 : this.r);
		this.g = (this.g > 255) ? 255 : ((this.g < 0) ? 0 : this.g);
		this.b = (this.b > 255) ? 255 : ((this.b < 0) ? 0 : this.b);
		this.a = (this.a > 255) ? 255 : ((this.a < 0) ? 0 : this.a);
	}
}
