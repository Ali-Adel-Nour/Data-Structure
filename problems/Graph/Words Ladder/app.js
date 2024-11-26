const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getNeighbors(word, unvisitedWords) {
    const unvisitedNeighbors = [];
    for (let j = 0; j < word.length; j++) {
        for (const letter of alphabet) {
            const w = word.slice(0, j) + letter + word.slice(j + 1);
            if (unvisitedWords.has(w)) {
                unvisitedNeighbors.push(w);
                unvisitedWords.delete(w); // mark next_word as visited
            }
        }
    }
    return unvisitedNeighbors;
}

var ladderLength = function(beginWord, endWord, wordList) {
    if (beginWord === endWord) return 1;
    const unvisitedWords = new Set(wordList);
    const queue = [[beginWord, 1]];
    unvisitedWords.delete(beginWord);
    while (queue.length > 0) {
        const [word, distance] = queue.shift();
        for (const w of getNeighbors(word, unvisitedWords)) {
            if (w === endWord) return distance + 1;
            queue.push([w, distance + 1]);
        }
    }
    return 0;
};