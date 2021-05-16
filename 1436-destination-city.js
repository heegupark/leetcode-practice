// 1436. Destination City
// Question
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1
// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2
// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".

// Example 3
// Input: paths = [["A","Z"]]
// Output: "Z"

const destCity = (paths) => {
    const outs = {}; // { b: 1, d: 1, c: 1}
    const noouts = {}; // {a: 1}
    for (let path of paths) {
        const origin = path[0];
        const dest = path[1];
        outs[origin] = 1;
        delete noouts[origin];
        if (!(dest in outs)) {
            noouts[dest]= 1;
        }
    }
    return Object.keys(noouts)[0];
};

console.log(destCity([["B","C"],["D","B"],["C","A"]]));
