/// <reference path="../../dxdrawlib.d.ts" />

function clamp(value: number, min: number, max: number): number {
	return (value < min) ? min : ((value > max) ? max : value);
}

function isbetween(value: number, min: number, max: number): boolean {
	return value >= min && value <= max;
}

function isPointInArea(point: PointF, originX: number, originY: number, width: number, height: number): boolean {
	return isbetween(point.X, originX, originX + width) && isbetween(point.Y, originY, originY + height);
}
