import {changeLevel, createUser, getCurrentUserLevel, getCurrentUserPoints, getUser, updatePoints} from "../index";
import {Points} from "../Points";
import {Level} from "../Level";
describe("Create a user", () => {
    it('Tries to create a user ', () => {
        let createdUser = createUser();
        log(createdUser)
        assert(createdUser.exists(),"User was not created")
    })
})


describe("Gets an already created user", () => {
    it('Returns the user ', () => {
        let fetchedUser = getUser(i32(100));
        log(fetchedUser)
        expect(i32(100)).toBe(i32(fetchedUser.userId))
    })
})

describe("Adds user points", () => {
    it('Confirms user points changed ', () => {
        let points=new Points(100,10)
        updatePoints(points)
        let fetchedUser = getUser(i32(100));
        log(fetchedUser)
        expect(i32(fetchedUser.points.points)).toBeGreaterThan(i32(10))
    })
})

describe("Updates the user level", () => {
    it('Confirms user points changed ', () => {
        let firstUser = getUser(i32(100));
        let level=new Level(100,12)
        changeLevel(level)
        let fetchedUser = getUser(i32(100));
        log(fetchedUser)
        assert(i32(fetchedUser.level.levelNumber) != firstUser.level.levelNumber)
    })
})

describe("Gets user points", () => {
    it('Get points for an existing user ', () => {
        let points = getCurrentUserPoints(100);
        log(points)
       assert(points!=null)
    })
})


describe("Gets user level", () => {
    it('Get level for an existing user ', () => {
        let levels = getCurrentUserLevel(100);
        log(levels)
        assert(levels!=null)
    })
})







