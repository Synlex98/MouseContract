@nearBindgen
export class Points{
    private _userId:i64
    private _points:i64


    constructor(userId: i64, points: i64) {
        this._userId = userId;
        this._points = points;
    }


    get userId(): i64 {
        return this._userId;
    }

    set userId(value: i64) {
        this._userId = value;
    }

    get points(): i64 {
        return this._points;
    }

    set points(value: i64) {
        this._points = value;
    }
}