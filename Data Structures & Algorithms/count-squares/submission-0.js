class CountSquares {
    constructor() {
        this.graph = Array.from({length: 1000}, () => new Array(1000).fill(0))
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.graph[point[0]][point[1]]++;
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let directions = [[-1, 1], [1, 1], [1, -1], [-1, -1]]
        let squares = 0;
        let graph = this.graph;

        for (let [xChange, yChange] of directions) {
            let x = point[0];
            let y = point[1];

            x += xChange
            y += yChange
            while (Math.min(x, y) >= 0 &&
                    Math.max(x, y) < 1000) {
                //console.log('considering points', x, y, 'and', x, point[1], 'and', point[0], y)
                if (graph[x][y] && graph[x][point[1]] && graph[point[0]][y]) {
                    //console.log('found square')
                //console.log(graph[x][y], graph[x][point[1]], graph[point[0]][y])

                    
                    squares += graph[x][y] * graph[x][point[1]] * graph[point[0]][y]
                }
                
                x += xChange
                y += yChange
            }
        }
        return squares
    }
}
