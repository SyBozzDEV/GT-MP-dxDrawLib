/// <reference path="../../dxdrawlib.d.ts" />

class DxRadioButtonGroups {

	public groups: string[] = [];

	public add(element: DxRadioButton): void {
		var group = element.group;
		if (this.groups[group] == null) {
			this.groups[group] = [];
		}
		this.groups[group].push(element);
	}

	public changeKey(element: DxRadioButton): void {
		var group = element.group;
		if (this.groups[group] != null) {
			var index = this.groups[group].indexOf(element);
			if (index > -1) {
				this.groups[group].splice(index, 1);
			}
		}
	}

	public changeSelected(element: DxRadioButton): void {
		var group = element.group;
		for (var i = 0; i < this.groups[group].length; i++) {
			if (this.groups[group][i] != element) {
				this.groups[group][i].selected = false;
			}
		}
	}

	public getSelectedFromGroup(group: string): DxRadioButton {
		if (this.groups[group] != null) {
			for (var i = 0; i < this.groups[group].length; i++) {
				var select = this.groups[group][i].selected;
				if (select) {
					return this.groups[group][i];
				}
			}
			return null;
		}
		return null;
	}
}

function getSelectedRadioButton(group: string, parent: DxElement): DxRadioButton {
	return parent.DxRadioButtonGroups.getSelectedFromGroup(group);
}
