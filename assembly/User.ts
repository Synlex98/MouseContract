import {Level} from "./Level";
import {Points} from "./Points";
@nearBindgen
export class User{
 private _userId:i64
  private _level:Level
private _points:Points


 constructor(userId: i64, level: Level, points: Points) {
  this._userId = userId;
  this._level = level;
  this._points = points;
 }


 get userId(): i64 {
  return this._userId;
 }

 set userId(value: i64) {
  this._userId = value;
 }

 get level(): Level {
  return this._level;
 }

 set level(value: Level) {
  this._level = value;
 }

 get points(): Points {
  return this._points;
 }

 set points(value: Points) {
  this._points = value;
 }

 exists():boolean{
  return this !=null
 }

}