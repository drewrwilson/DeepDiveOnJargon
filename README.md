# Use all of the jargon

Record any of the strange things you've heard around the office which we may have initially suspected aren't actually real words.


## How to contribute
1. Edit the `words.txt` file with one word or phrase per line
2. You're done

# FAQ
* How do I know if it's a good word to add?
![Thought leader](https://github.com/drewrwilson/DeepDiveOnJargon/raw/master/thought-leadership-graph.png "Thought leadership")

# Programmatic usage as an npm module

You can do it!

`$ npm install deepdive`

```js
var jargon = require('deepdive')

console.log(jargon.random())
// => 'industry disruptor'
```

## api

- `deepdive` is an array of words

- `deepdive.random()` returns a random word 

- `deepdive.stream()` returns a readable stream of all of the words

## running the tests

we've got those.

`$ npm test`

# command line usage

we can do that too!

## installation

first you'll need to [install node on your system](http://nodejs.org/download/)

then `$ npm install -g deepdive`

and now you can run it from the console:
```
$ deepdive
leverage
```
which means you can do crazy things like
```
$ cowsay `deepdive`
 ________
< buy-in >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
