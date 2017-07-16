/// <reference path="../../dxdrawlib.d.ts" />

class DxElement {

	constructor(public X: number, public Y: number, public width: number, public height: number, public relative: boolean = true, public color?: Color) {

		if (this.relative) {
			this.X = DxScreen.width / this.X;
			this.Y = DxScreen.height / this.Y;
			this.width = DxScreen.width / this.width;
			this.height = DxScreen.height / this.height;
		}

		this.X = (this.X > DxScreen.width) ? DxScreen.width : ((this.X < 0) ? 0 : this.X);
		this.Y = (this.Y > DxScreen.height) ? DxScreen.height : ((this.Y < 0) ? 0 : this.Y);
		this.width = (this.width > DxScreen.width) ? DxScreen.width : ((this.width < 0) ? 0 : this.width);
		this.height = (this.height > DxScreen.height) ? DxScreen.height : ((this.height < 0) ? 0 : this.height);

		if (this.color == null) this.color = new Color();
	}

}
