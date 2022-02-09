@nearBindgen
export class Level{
   private _userId:i64
    private _levelNumber:i64


    constructor(userId: i64, levelNumber: i64) {
        this._userId = userId;
        this._levelNumber = levelNumber;
    }


    get userId(): i64 {
        return this._userId;
    }

    set userId(value: i64) {
        this._userId = value;
    }

    get levelNumber(): i64 {
        return this._levelNumber;
    }

    set levelNumber(value: i64) {
        this._levelNumber = value;
    }
}