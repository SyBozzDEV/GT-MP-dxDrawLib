﻿declare namespace GTA.Math {

	class Matrix {
		readonly HasInverse: boolean;
		readonly IsIdentity: boolean;
		readonly Identity: GTA.Math.Matrix;
		Item: number;
		FromArray(floatArray: any[]): GTA.Math.Matrix;
		Determinant(): number;
		Inverse(matrix: GTA.Math.Matrix): GTA.Math.Matrix;
		Inverse(): void;
		TransformPoint(point: GTA.Math.Vector3): GTA.Math.Vector3;
		InverseTransformPoint(point: GTA.Math.Vector3): GTA.Math.Vector3;
		Add(left: GTA.Math.Matrix, right: GTA.Math.Matrix): GTA.Math.Matrix;
		Subtract(left: GTA.Math.Matrix, right: GTA.Math.Matrix): GTA.Math.Matrix;
		Multiply(left: GTA.Math.Matrix, right: number): GTA.Math.Matrix;
		Multiply(left: GTA.Math.Matrix, right: GTA.Math.Matrix): GTA.Math.Matrix;
		Divide(left: GTA.Math.Matrix, right: number): GTA.Math.Matrix;
		Divide(left: GTA.Math.Matrix, right: GTA.Math.Matrix): GTA.Math.Matrix;
		Negate(matrix: GTA.Math.Matrix): GTA.Math.Matrix;
		Lerp(start: GTA.Math.Matrix, end: GTA.Math.Matrix, amount: number): GTA.Math.Matrix;
		RotationX(angle: number): GTA.Math.Matrix;
		RotationY(angle: number): GTA.Math.Matrix;
		RotationZ(angle: number): GTA.Math.Matrix;
		RotationAxis(axis: GTA.Math.Vector3, angle: number): GTA.Math.Matrix;
		RotationQuaternion(rotation: GTA.Math.Quaternion): GTA.Math.Matrix;
		RotationYawPitchRoll(yaw: number, pitch: number, roll: number): GTA.Math.Matrix;
		Scaling(scale: GTA.Math.Vector3): GTA.Math.Matrix;
		Scaling(x: number, y: number, z: number): GTA.Math.Matrix;
		Translation(amount: GTA.Math.Vector3): GTA.Math.Matrix;
		Translation(x: number, y: number, z: number): GTA.Math.Matrix;
		Transpose(matrix: GTA.Math.Matrix): GTA.Math.Matrix;
		ToArray(): any[];
		ToString(): string;
		GetHashCode(): number;
		Equals(value1: any, value2: any): boolean;
		Equals(other: GTA.Math.Matrix): boolean;
		Equals(obj: any): boolean;
	}

	class Quaternion {
		readonly Angle: number;
		readonly Axis: GTA.Math.Vector3;
		readonly Identity: GTA.Math.Quaternion;
		constructor(value: GTA.Math.Vector3, w: number);
		constructor(x: number, y: number, z: number, w: number);
		Length(): number;
		LengthSquared(): number;
		Normalize(quaternion: GTA.Math.Quaternion): GTA.Math.Quaternion;
		Normalize(): void;
		Conjugate(): void;
		Invert(quaternion: GTA.Math.Quaternion): GTA.Math.Quaternion;
		Invert(): void;
		Add(left: GTA.Math.Quaternion, right: GTA.Math.Quaternion): GTA.Math.Quaternion;
		Divide(left: GTA.Math.Quaternion, right: GTA.Math.Quaternion): GTA.Math.Quaternion;
		Dot(left: GTA.Math.Quaternion, right: GTA.Math.Quaternion): number;
		Lerp(start: GTA.Math.Quaternion, end: GTA.Math.Quaternion, amount: number): GTA.Math.Quaternion;
		Slerp(start: GTA.Math.Quaternion, end: GTA.Math.Quaternion, amount: number): GTA.Math.Quaternion;
		SlerpUnclamped(a: GTA.Math.Quaternion, b: GTA.Math.Quaternion, t: number): GTA.Math.Quaternion;
		FromToRotation(fromDirection: GTA.Math.Vector3, toDirection: GTA.Math.Vector3): GTA.Math.Quaternion;
		RotateTowards(from: GTA.Math.Quaternion, to: GTA.Math.Quaternion, maxDegreesDelta: number): GTA.Math.Quaternion;
		Multiply(quaternion: GTA.Math.Quaternion, scale: number): GTA.Math.Quaternion;
		Multiply(left: GTA.Math.Quaternion, right: GTA.Math.Quaternion): GTA.Math.Quaternion;
		Negate(quaternion: GTA.Math.Quaternion): GTA.Math.Quaternion;
		AngleBetween(a: GTA.Math.Quaternion, b: GTA.Math.Quaternion): number;
		Euler(euler: GTA.Math.Vector3): GTA.Math.Quaternion;
		Euler(x: number, y: number, z: number): GTA.Math.Quaternion;
		RotationAxis(axis: GTA.Math.Vector3, angle: number): GTA.Math.Quaternion;
		RotationMatrix(matrix: GTA.Math.Matrix): GTA.Math.Quaternion;
		RotationYawPitchRoll(yaw: number, pitch: number, roll: number): GTA.Math.Quaternion;
		Subtract(left: GTA.Math.Quaternion, right: GTA.Math.Quaternion): GTA.Math.Quaternion;
		ToString(): string;
		GetHashCode(): number;
		Equals(value1: any, value2: any): boolean;
		Equals(other: GTA.Math.Quaternion): boolean;
		Equals(obj: any): boolean;
	}

	class Vector3 {
		Item: number;
		readonly RelativeBottom: GTA.Math.Vector3;
		readonly RelativeTop: GTA.Math.Vector3;
		readonly RelativeBack: GTA.Math.Vector3;
		readonly RelativeFront: GTA.Math.Vector3;
		readonly RelativeLeft: GTA.Math.Vector3;
		readonly RelativeRight: GTA.Math.Vector3;
		readonly WorldWest: GTA.Math.Vector3;
		readonly WorldEast: GTA.Math.Vector3;
		readonly WorldSouth: GTA.Math.Vector3;
		readonly WorldNorth: GTA.Math.Vector3;
		readonly WorldDown: GTA.Math.Vector3;
		readonly WorldUp: GTA.Math.Vector3;
		readonly Zero: GTA.Math.Vector3;
		readonly Normalized: GTA.Math.Vector3;
		constructor(x: number, y: number, z: number);
		Length(): number;
		LengthSquared(): number;
		Normalize(vector: GTA.Math.Vector3): GTA.Math.Vector3;
		Normalize(): void;
		DistanceTo(position: GTA.Math.Vector3): number;
		DistanceToSquared(position: GTA.Math.Vector3): number;
		DistanceTo2D(position: GTA.Math.Vector3): number;
		DistanceToSquared2D(position: GTA.Math.Vector3): number;
		Distance(position1: GTA.Math.Vector3, position2: GTA.Math.Vector3): number;
		DistanceSquared(position1: GTA.Math.Vector3, position2: GTA.Math.Vector3): number;
		Distance2D(position1: GTA.Math.Vector3, position2: GTA.Math.Vector3): number;
		DistanceSquared2D(position1: GTA.Math.Vector3, position2: GTA.Math.Vector3): number;
		Angle(from: GTA.Math.Vector3, to: GTA.Math.Vector3): number;
		SignedAngle(from: GTA.Math.Vector3, to: GTA.Math.Vector3, planeNormal: GTA.Math.Vector3): number;
		ToHeading(): number;
		Around(distance: number): GTA.Math.Vector3;
		RandomXY(): GTA.Math.Vector3;
		RandomXYZ(): GTA.Math.Vector3;
		Add(left: GTA.Math.Vector3, right: GTA.Math.Vector3): GTA.Math.Vector3;
		Subtract(left: GTA.Math.Vector3, right: GTA.Math.Vector3): GTA.Math.Vector3;
		Multiply(value: GTA.Math.Vector3, scale: number): GTA.Math.Vector3;
		Modulate(left: GTA.Math.Vector3, right: GTA.Math.Vector3): GTA.Math.Vector3;
		Divide(value: GTA.Math.Vector3, scale: number): GTA.Math.Vector3;
		Negate(value: GTA.Math.Vector3): GTA.Math.Vector3;
		Clamp(value: GTA.Math.Vector3, min: GTA.Math.Vector3, max: GTA.Math.Vector3): GTA.Math.Vector3;
		Lerp(start: GTA.Math.Vector3, end: GTA.Math.Vector3, amount: number): GTA.Math.Vector3;
		Dot(left: GTA.Math.Vector3, right: GTA.Math.Vector3): number;
		Cross(left: GTA.Math.Vector3, right: GTA.Math.Vector3): GTA.Math.Vector3;
		Project(vector: GTA.Math.Vector3, onNormal: GTA.Math.Vector3): GTA.Math.Vector3;
		ProjectOnPlane(vector: GTA.Math.Vector3, planeNormal: GTA.Math.Vector3): GTA.Math.Vector3;
		Reflect(vector: GTA.Math.Vector3, normal: GTA.Math.Vector3): GTA.Math.Vector3;
		Minimize(value1: GTA.Math.Vector3, value2: GTA.Math.Vector3): GTA.Math.Vector3;
		Maximize(value1: GTA.Math.Vector3, value2: GTA.Math.Vector3): GTA.Math.Vector3;
		ToString(): string;
		GetHashCode(): number;
		Equals(value1: any, value2: any): boolean;
		Equals(other: GTA.Math.Vector3): boolean;
		Equals(obj: any): boolean;
	}

}
