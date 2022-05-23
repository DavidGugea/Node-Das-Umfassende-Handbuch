import { wordCount as wc } from "./word_count_ecma";
const sentence = 'Wo viel Licht ist, ist auch viel Schatten.';
const wordCount = wc(sentence);

console.log(sentence);
for(let i in wordCount) {
    console.log(wordCount[i] + ' x ' + i);
}