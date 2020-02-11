import 'dotenv/config';
import Twit from 'twit';
import pluralize from 'pluralize';

import api from './services/api';
import botConfig from './config/twitter';
import wordfilter from './config/wordfilter';

class Bot {
  constructor() {
    this.twitterApi = new Twit(botConfig);

    this.INTERVAL_MINUTES = 0.5;
  }

  // Initiates the bot and set the cyclical sending of tweets
  init() {
    console.log('Bot started....');

    setInterval(
      this.processTweet.bind(this),
      this.INTERVAL_MINUTES * 60 * 1000
    );
  }

  // Fetch words, generate the tweet message and send it to Twitter.
  async processTweet() {
    const word = await this.fetchRandomWord();
    const message = this.mountMessage(word);

    if (typeof message !== 'undefined') {
      this.sendTweet(message);
    } else {
      console.log('Invalid message!');
    }
  }

  // Fetch an API key from Random Word API
  async fetchAPIKey() {
    try {
      const response = await api.get('/key');

      return response.data;
    } catch (error) {
      return undefined;
    }
  }

  // Fetch a word from random word API
  async fetchRandomWord() {
    try {
      const apiKey = await this.fetchAPIKey();
      if (typeof apiKey === 'undefined') {
        return undefined;
      }

      const response = await api.get('/word', {
        params: {
          number: 1,
          key: apiKey,
        },
      });

      if (response.data === 'wrong API key') {
        return undefined;
      }

      return response.data[0];
    } catch (error) {
      return undefined;
    }
  }

  // Capitalizes a string
  capitalize(s) {
    if (typeof s !== 'string') {
      return undefined;
    }

    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // Checks if the word is plural or singular, and returns a message according to the word.
  checkPluralSingularMessage(word) {
    if (pluralize.isPlural(word)) {
      return `${this.capitalize(word)} are the opium of the people.`;
    }

    return `${this.capitalize(word)} is the opium of the people.`;
  }

  // Mount the phrase
  // Check if it has offensive words
  mountMessage(word) {
    if (typeof word === undefined) {
      return undefined;
    }

    const message = this.checkPluralSingularMessage(word);

    // Check for offensive words
    if (wordfilter.blacklisted(message)) {
      return undefined;
    }

    return message;
  }

  // Tweet the phrase
  sendTweet(message) {
    this.twitterApi.post(
      'statuses/update',
      {
        status: message,
      },
      function(err, data, response) {
        if (err) {
          console.log('Error sending tweet!');
        } else {
          console.log('Tweet sent!');
        }
      }
    );
  }
}

export default new Bot();
