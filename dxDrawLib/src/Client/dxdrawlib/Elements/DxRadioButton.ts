/// <reference path="../../dxdrawlib.d.ts" />

class DxRadioButton extends DxElement {

	private _group: string;
	private _clicked: boolean = false;
	private _selected: boolean;
	private get _innerRectangel(): number { return (this.height * 0.1) }
	private get _textSize(): number { return (this.height / 100); }
	//private get _text(): string { return (((this.text.length * (this._textSize * 40)) > this.width) ? this.text.substring(0, Math.round(this.width / (this._textSize * 40))) + "..." : this.text); }
	private _radioButtonGroup: DxRadioButtonGroups = DxScreen.RadioButtonGroups;
	private _selectedColor: Color;

	public enabled: boolean = true;
	public backColor: Color;
	public colorUnselected: Color = new Color(0, 0, 0, 0);

	//set setParent(value: DxElement) { this.changeParent(value); } // Not Supported at the moment
	set selected(value: boolean) { this._selected = value; if (value) this._radioButtonGroup.changeSelected(this); }
	get selected(): boolean { return this._selected }
	set group(value: string) { this._radioButtonGroup.deleteElementFromGroup(this); this._group = value; this._radioButtonGroup.add(this); this.selected = false; }
	get group(): string { return this._group; }

	constructor(public text: string, group: string, X: number, Y: number, width: number, height: number, selected: boolean = false, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this._group = ((group != null) ? group : "");

		if (this.getParent != null) this._radioButtonGroup = this.getParent.DxRadioButtonGroups;
		else this._radioButtonGroup = DxScreen.RadioButtonGroups;

		this._radioButtonGroup.add(this);

		this._selectedColor = this.color;
		this.backColor = new Color(255, 255, 255, 255);
		this.selected = selected;
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this.height, this.height, this.backColor.r, this.backColor.g, this.backColor.b, this.backColor.a);
			API.drawRectangle(this.X + this._innerRectangel, this.Y + this._innerRectangel, this.height - (this._innerRectangel * 2), this.height - (this._innerRectangel * 2), this._selectedColor.r, this._selectedColor.g, this._selectedColor.b, this._selectedColor.a);
			API.drawText(this.text, this.X + (this.height), this.Y, this._textSize, 255, 255, 255, 255, 0, justify.left, false, false, 0);
		}
	}

	protected calculate(): void {
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (this.enabled) {
				if (API.isDisabledControlJustPressed(24)) {
					if (this.isPointInElement(mPos)) {
						this._clicked = true;
					}
				}
				if (API.isControlJustReleased(24)) {
					if (this.isPointInElement(mPos) && this._clicked) {
						if (!this.selected) {
							this.selected = true;
							this._selectedColor = this.color;
						}
						else {
							this.selected = false;
							this._selectedColor = this.colorUnselected;
						}
						this.debugMessage(debug.radiobutton, "~g~Change selected index");
					}
					this._clicked = false;
				}
				if (this.isPointInElement(mPos)) {
					
				}
			}
			else {

			}
		}
		if (this.selected) this._selectedColor.a = 255;
		else this._selectedColor.a = 0;
	}

	private changeParent(parent: DxElement): void {
		this._radioButtonGroup.deleteElementFromGroup(this);
		super.setNewParent(parent);
		if (this.getParent != null) this._radioButtonGroup = this.getParent.DxRadioButtonGroups;
		else this._radioButtonGroup = DxScreen.RadioButtonGroups;
	}
	
	public sync(data): void {
		
	}
}
