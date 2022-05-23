const wc = require('./word_count_common.js');
const sentence = 'Wo viel Licht ist, ist auch viel Schatten.';
const wordCount = wc(sentence);

console.log(sentence);
for(let i in wordCount) {
    console.log(wordCount[i] + ' x ' + i);
}