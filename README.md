###Rob's Ceaser cipher cracker

This is a basic dictionary cracker made for fun as a coding exercise.

The program will look at the first work in the dictionary and offset it by 1.
It will then compare the resultant ciphertext against the provided key, if it matches, then the first word in the dictionary is the plaintext password!

If there is no match, it increments the offset by 1 and checks again. It will increment in this way 26 times. Why 26? Kinda a mix between an arbitrary number and number of letters in the alphabet. If no match after all the increments, then the program proceeds to the next word in the dictionary file.

#####Usage

`node password_cracker.js <key> <dictionary file>`
