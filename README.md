# Craft3 Starter
This is a simple starting repo for basic [Craft](https://craftcms.com) projects. I'm using TailwindCSS, Laravel Mix, and plain ole' JavaScript in this project. This is a great starting point for any simple or complex Craft project. I <3 Craft, if you have never tried it as a CMS, you should.

## Requirements
- Using PHP >7.1.23
- Using Node >v9.10.1

## Installation
Install Composer. `composer install --ignore-platform-reqs`.

Install Yarn. `yarn install`. If you get build issues, run `nvm use stable` and make sure stable is above the Node version listed in the requirements.

Run your PHP server, and point the host to the `web` folder. 

You'll need to create a new security key before running the installer. Double check all the requirements on [this page](https://docs.craftcms.com/v3/installation.html).

*Note: If you are not familiar with PHP and all of this is Greek to you, there is a super awesome tutorial over on Craft's website: [Craft CMS Tutorial](https://docs.craftcms.com/tutorial/)*

## Starting
At this point, if all went well, you should be able to acces the site. Once you can, you can start the Laravel Mix build using: `npm start`. This will watch your `src/` folder for changes and recompile.

At this point you're all set!

## Contribution
Anyone is welcome to add some helpful Craft plugins or fix bugs they encounter, just make a PR!

## Contact
Lukas Coffey - coffeylukas@gmail.com