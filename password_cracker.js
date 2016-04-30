(function(enteredKey, i) {
    'use strict';

    const LIST = [
        'test1',
        'test2',
        'test3',
        'test4',
        'test5'
    ];

    function checkCipher() {
        var found = false;

        do {
            for (var n = 1; n < 26; n++) {
                var text = createCipher(LIST[i], n)
                console.log('Trying key: ' + text)

                if (text === 'Not Found') {
                    found = true;
                    console.log(text);
                    break;
                };

                found = tryKey(text)
                if (found) break;
            }
            i++
        }
        while (found == false)
    }

    function createCipher(word, offset) {
        if (!word) return 'Not Found';
        var charArray = word.split('').map(function(char) {
            return char.charCodeAt(0);
        });
        var encipheredCharArray = charArray.map(function(char) {
            return String.fromCharCode(char + offset);
        });
        var cipherText = encipheredCharArray.join('');

        return cipherText;
    };

    function tryKey(cipherText) {
        if (cipherText === enteredKey) {
            console.log('\n=======\nFOUND: Key ' + enteredKey + ' = ' + LIST[i] + '\n=======');
            return true;
        }
        return false;
    };

    checkCipher()

})(process.argv[2], 0);
