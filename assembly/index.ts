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

export function changeLevel(level:Level):void{
    let user=storage.getSome<User>(level.userId.toString())
    assert(user.exists(),"Unkown user")
    user.level=level;
    storage.set(level.userId.toString(),user);
}

export function getCurrentUserLevel(userId:i64):Level{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    return user.level
}

export function updatePoints(points:Points):void{
    let user=storage.getSome<User>(points.userId.toString())
    assert(user.exists(),"Unkown user")
    user.points=points;
    storage.set(points.userId.toString(),user);
}

export function getCurrentUserPoints(userId:i64):Points{
    let user=storage.getSome<User>(userId.toString())
    assert(user.exists(),"Unkown user")
    return user.points
}
