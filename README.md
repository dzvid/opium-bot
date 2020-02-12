<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Opium bot</h3>

  <p align="center">
    Simple Twitter bot to post "x-word is the opium of the people.", every 20 minutes, where x-word is a random word.
    <br />
    <a href="https://github.com/tukno/opium-bot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tukno/opium-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/tukno/opium-bot/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

Main libraries and CLI tools used to built the project:

- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js;
- [Pluralize](https://github.com/blakeembrey/pluralize): Pluralize or singularize any word based on a count;
- [Random word API](hhttps://random-word-api.herokuapp.com/): API that returns a collection of random words;
- [Twit](https://github.com/ttezel/twit): Twitter API Client for node (REST & Streaming API);
- [Wordfilter](https://github.com/dariusk/wordfilter): A small module meant for use in text generators that lets you filter strings for bad words.

To manage the code style and formatting:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install NodeJS:

- [node](https://nodejs.org/en/)

Install a package manager:

- [yarn](https://classic.yarnpkg.com/lang/en/): Yarn 1.x (classic) was used in this project.

or

- npm

```sh
npm install npm@latest -g
```

- Obtain Twitter access keys/tokens

To create a bot for Twitter it is necessary to create a Twitter app to obtain the access keys/tokens. Create one account in Twitter (It is necessary to have a verified email associated with the account), then go to https://developer.twitter.com/apps to create the app and get your bot keys/tokens.

### Installation

I will assume you are using a Linux distribution.

1. Clone the repository:

   ```sh
   Using ssh:
   git clone git@github.com:tukno/opium-bot.git

   Or using https:
   git clone https://github.com/tukno/opium-bot.git
   ```

2. Install the project dependencies:

   ```sh
   cd opium-bot

   yarn
   ```

   or using npm:

   ```sh
   cd opium-bot

   npm install
   ```

3. Configure environment variables:

   - Run the following command to create your local .env file:

   ```sh
   cp .env.example .env
   ```

   the .env file has the following properties that needs to be set (use a text editor of your choice):

   - The Twitter consumer keys and access tokens you got at https://developer.twitter.com/apps
   - The time interval between tweets in minutes(default is 20 minutes)

   ```env
    # Twitter tokens
    TWITTER_CONSUMER_KEY=''
    TWITTER_CONSUMER_SECRET_KEY=''
    TWITTER_ACCESS_TOKEN=''
    TWITTER_ACCESS_TOKEN_SECRET=''

    INTERVAL_MINUTES=20
   ```

4. Well looks like you are done with configuration and ready to code! (I hope so :tada:), run the following commands to execute the bot locally:

   ```sh
   yarn dev
   ```

PS: I deployed this bot at Heroku. For instructions on how to deploy apps to Heroku, [check this](https://devcenter.heroku.com/articles/deploying-nodejs).

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/tukno/opium-bot/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

David Oliveira - oliveiradavid.dev@gmail.com

Project Link: [https://github.com/tukno/opium-bot](https://github.com/tukno/opium-bot)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)

  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tukno/opium-bot.svg?style=flat-square
[contributors-url]: https://github.com/tukno/opium-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tukno/opium-bot.svg?style=flat-square
[forks-url]: https://github.com/tukno/opium-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/tukno/opium-bot.svg?style=flat-square
[stars-url]: https://github.com/tukno/opium-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/tukno/opium-bot.svg?style=flat-square
[issues-url]: https://github.com/tukno/opium-bot/issues
[license-shield]: https://img.shields.io/github/license/tukno/opium-bot.svg?style=flat-square
[license-url]: https://github.com/tukno/opium-bot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tukno
[product-screenshot]: resources/images/app.gif
