import {User} from "./User";
import {Context,storage} from "near-sdk-as"
import {Level} from "./Level";
import {Points} from "./Points";

export function createUser():User{
    let nextUserId=100;
    if (storage.contains("nextId")){
       nextUserId=storage.getPrimitive("nextId",100)
    }
    let level =new Level(nextUserId,1)

    let points=new Points(nextUserId,0);

    let user=new User(nextUserId,level,points)
    storage.set<User>(nextUserId.toString(),user)
    storage.set<i64>("nextId",nextUserId+113)
    return user
}

export function getUser(userId:i64):User{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    return user
}

export function changeLevel(userId:i64,level:i64):void{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    user.level.levelNumber=level;
    storage.set(userId.toString(),user);
}

export function getCurrentUserLevel(userId:i64):Level{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    return user.level
}

export function updatePoints(userId:i64,points:i64):void{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    user.points.points=points;
    storage.set(userId.toString(),user);
}

export function getCurrentUserPoints(userId:i64):Points{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    return user.points
}
