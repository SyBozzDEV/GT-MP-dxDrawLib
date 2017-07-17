/// <reference path="../../dxdrawlib.d.ts" />

abstract class DxElement {

	public static elements: DxElement[] = [];
	public static lastId: number = 1;
	protected _id: number;

	public DxRadioButtonGroups: DxRadioButtonGroups = new DxRadioButtonGroups();

	protected _offsetHeaderHeight = 0;
	protected _X: number;
	protected _Y: number;
	private _width: number;
	private _height: number;
	private _visible: boolean;
	private _debug: boolean = false;
	private _parent: DxElement;

	set debug(value: boolean) { this._debug = value; for (var i = 0; i < this.children.length; i++) { this.children[i].debug = value; } }
	get debug(): boolean { return this._debug; }
	set parent(value: DxElement) { this.setNewParent(value); }
	get parent(): DxElement { return this._parent; }

	public children: DxElement[] = [];

	get visible(): boolean { return this._visible; }
	set visible(value: boolean) { this._visible = value; for (var i = 0; i < this.children.length; i++) { this.children[i].visible = value; } }

	get parentX(): number { return this.parent == null ? 0 : this.parent.X; }
	get parentY(): number { return this.parent == null ? 0 : this.parent.Y + this.parent._offsetHeaderHeight; }
	get parentWidth(): number { return this.parent == null ? DxScreen.width : this.parent.width; }
	get parentHeight(): number { return this.parent == null ? DxScreen.height : this.parent.height - this.parent._offsetHeaderHeight; }
	//get parentHeaderOffset(): number { return ((this.parent == null) ? 0 : this.parent._offsetHeaderHeight);}

	get id(): number { return this._id; }
	set X(value: number) { this._X = this.calculateSize(value, 1); }
	get X(): number { return (this.parentX + this._X); }
	set Y(value: number) { this._Y = this.calculateSize(value, 2); }
	get Y(): number { return (this.parentY + this._Y); }
	set width(value: number) { this._width = this.calculateSize(value, 1); }
	get width(): number { return this._width; }
	set height(value: number) { this._height = this.calculateSize(value, 2); }
	get height(): number { return this._height; }

	constructor(X: number, Y: number, width: number, height: number, public relative: boolean = true, public color?: Color, parent?: DxElement) {

		if (this.relative == null) this.relative = true;
		if (this.color == null) this.color = new Color();
		if (parent != null) {
			this._parent = parent;
			this._parent.children.push(this);
		}

		this._id = DxElement.lastId++;
		this.X = X;
		this.Y = Y;
		this.width = width;
		this.height = height;
		
		DxElement.elements[this._id] = this;
	}

	private calculateSize(value: number, type: number): number {
		var result: number;

		switch (type) {
			case 1: // For X and width
				result = (this.relative) ? clamp(this.parentWidth * value, 0, this.parentWidth) : clamp(value, 0, this.parentWidth);
				break;
			case 2: // For Y and height
				result = (this.relative) ? clamp(this.parentHeight * value, 0, this.parentHeight) : clamp(value, 0, this.parentHeight);
				break;
		}

		return result;
	}

	public isPointInElement(point: PointF): boolean {
		return isPointInArea(point, this.X, this.Y, this.width, this.height);
	}

	protected drawChildren(): void {
		for (var i = 0; i < this.children.length; i++) {
			this.children[i].draw();
		}
	}

	protected setNewParent(newParent: DxElement) {
		if (this._parent != null) {
			var index = this._parent.children.indexOf(this);
			if (index > -1) {
				this._parent.children.splice(index, 1);
			}
		}
		this._parent = newParent;
	}

	protected debugMessage(type: number, message: string): void {
		if (this.debug) {
			var typeStr: string = "~b~";
			switch (type) {
				case 0:
					typeStr += "[DxWindow]";
					break;
				case 1:
					typeStr += "[DxButton]";
					break;
				case 2:
					typeStr += "[DxRadioButton]";
					break;
				case 3:
					typeStr += "[DxRadioButton]";
					break;
			}
			API.sendChatMessage(typeStr, message);
		}
	}

	public abstract draw(): void;
	protected abstract calculate(): void;
	public abstract sync(data): void;

}
