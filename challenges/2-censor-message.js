/**
 * Given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: all words from the list must be scrubbed out and replaced with five asterisks (*****).

 * @param {string} message 
 * @param {string[]} banList 
 * @returns {string} 'scrubbedMessage' with words in the 'banList' replaced by '****'
 */

function censorMessage(message, banList) {
  let rawWords = message.split(" ");

  let scrubbedWords = [];

  for (let word of rawWords) {
    let lowercaseWord = word.toLowerCase();
    if (banList.includes(lowercaseWord)) {
      scrubbedWords.push("*****");
    } else {
      scrubbedWords.push(word);
    }
  }

  let scrubbedMessage = scrubbedWords.join(" ");
  return scrubbedMessage;
}

console.log(
  censorMessage("don't mess with cats", ["mess"]),
  `should be "don't ***** with cats"`
);
console.log(
  censorMessage("Are you sure that this is safe", ["are", "is"]),
  `should be "***** you sure that this ***** safe"`
);
console.log(
  censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]),
  `should be "I CANNOT ***** *****"`
);
