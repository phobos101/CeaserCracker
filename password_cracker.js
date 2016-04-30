(function(enteredKey, i) {
    'use strict';

    var fs = require('fs');

    var list = [];

    function start() {
        function readLines(input, addToList) {
            var remaining = '';

            input.on('data', function(data) {
                remaining += data;
                var index = remaining.indexOf('\n');
                while (index > -1) {
                    var line = remaining.substring(0, index);
                    remaining = remaining.substring(index + 1);
                    addToList(line);
                    index = remaining.indexOf('\n');
                };
            });

            input.on('end', function() {
                if (remaining.length > 0) {
                    addToList(remaining);
                } else {
                    checkCipher()
                };
            });
        }

        function addToList(data) {
            list.push(data);
        };

        var input = fs.createReadStream(process.argv[3]);
        readLines(input, addToList);
    };

    function checkCipher() {
        var found = false;

        do {
            for (var n = 1; n < 26; n++) {
                var text = createCipher(list[i], n)

                if (text === 'Not Found') {
                    found = true;
                    break;
                }
                console.log('Trying key: ' + text);

                found = tryKey(text);
                if (found) break;
            };
            i++;
        }
        while (found == false)
    };

    function createCipher(word, offset) {
        if (!word) return 'Not Found';
        var charArray = word.split('').map(function(char) {
            return char.charCodeAt(0);
        });
        var encipheredCharArray = charArray.map(function(char) {
            if ((char + offset) > 126) {
                // if the ASCII code is above 126, then wrap round.
                //First valid chaarcter is 32 so we wrap round and then add on 33.
                return String.fromCharCode((char + offset) - (126 - 33));
            } else {
                return String.fromCharCode(char + offset);
            }
        });
        var cipherText = encipheredCharArray.join('');

        return cipherText;
    };

    function tryKey(cipherText) {
        if (cipherText === enteredKey) {
            console.log('\n=======\nFOUND: Key ' + enteredKey + ' = ' + list[i] + '\n=======');
            return true;
        };
        return false;
    };

    start()

})(process.argv[2], 0);
