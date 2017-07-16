/// <reference path="../../dxdrawlib.d.ts" />

function clamp(value: number, min: number, max: number): number {
	var result: number;

	result = (value < min) ? min : ((value > max) ? max : value);

	return result;
}
