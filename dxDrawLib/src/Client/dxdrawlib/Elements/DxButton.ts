/// <reference path="../../dxdrawlib.d.ts" />

class DxButton extends DxElement {

	public enabled: boolean = false;
	public textColor: Color = new Color(255, 255, 255, 255);

	constructor(public text: string, X: number, Y: number, width: number, height: number, relative: boolean = true, color?: Color, public parent?: DxElement) {
		super(X, Y, width, height, relative, color);
	}


	public draw(): void {

	}
}
