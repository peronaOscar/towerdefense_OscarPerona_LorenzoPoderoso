// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000e0e0e010101011002020508020201010e0e0e010101011002020508020201010e0101030303011002020508020201010e0101030301011002020508020201010b0b0b0b0b0b0b11020205080202010102020202020202020202050802020101020202020202020202020508020201010202070412121212121205080202010102020508060606060606060902020101020205080202020a02020202020201010202050802020202020202020202010f020205080202020f0f0f0f0f0f0f0f0f020205080202020f0f0f0f0f0f0f0f0f020202020202020101010101010c010d0202020202020201010101010c0c010102020202020202010101010101010101`, img`
2 2 2 2 2 2 2 . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark0,sprites.dungeon.hazardLava1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn4,sprites.dungeon.doorLockedSouth,sprites.dungeon.greenOuterNorth0,sprites.dungeon.stairLarge,sprites.dungeon.floorDark2,sprites.builtin.oceanSand8,sprites.swamp.swampTile16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthEast,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
