// 1232. Check If It Is a Straight Line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = (coordinates) => {
    const length = coordinates.length;
    if (coordinates.length === 2) return true;
    for (let i = 0; i < length - 2; ++i) {
        if ((coordinates[i+2][1] - coordinates[i+1][1]) * (coordinates[i+1][0] - coordinates[i][0]) !== (coordinates[i+1][1] - coordinates[i][1]) * (coordinates[i + 2][0] - coordinates[i+1][0])) return false;
    }
  return true;
};
