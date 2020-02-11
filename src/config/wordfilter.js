import wordfilter from 'wordfilter';

const words = ['tits', 'insanity', 'pussy', 'dick'];

words.map(word => wordfilter.removeWord(word));

export default wordfilter;
