/// <reference path="../../dxdrawlib.d.ts" />

class DxWindow extends DxElement {

	constructor(public X: number, public Y: number, public width: number, public height: number, public relative: boolean = true, public color?: Color) {
		super(X, Y, width, height, relative, color);
    }

	public draw(): void {
	
	}

}
