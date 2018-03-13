# slack-weatherbot
A SlackBot that displays weather conditions ... only in the Czech Republic! I lived there for over 8 years; sometimes I get nostalgic.... But customize away to display weather conditions in your favorite cities.

![slack weather bot demo](https://github.com/tinuola/slack-weatherbot/blob/master/img/slack-weatherbot.gif)

### Create a Simple Weather Slack Bot with Webtask 

Requirements:
* [Slack Account](https://slack.com/signin) and workspace
* [Weeather Underground API key](https://www.wunderground.com/weather/api/)
* [Webtask account]((https://webtask.io/cli))

Create a Webtask account and set up Webtask's command line interface (CLI)
 * Create a simple webtask; a webtask url will be generated
 * Using Webtask's web editor, create a secret: TRIGGER_WORD and set it to a specific word that will activate the bot in Slack. (Example: "forecast").
 * Replace your starter code with code from webtask-weather.js (the js file in this repository)

Create a Weather Underground account; a unique API key will be generated
 * Using Webtask's web editor, create another secret: API_KEY, and set it to the Weather Underground's API key.

Set up a Slack workspace and create a channel (example: "Weather") in the workspace where the bot should work
 * In your workspace settings, go to Administration --> Manage apps --> Browse the App Directory
 * Type (and select) "Ougoing Webhooks"
 * Click "Add Configuration"
 * Click "Add Outgoing WebHook Configuration"
 * Under "Integrations Settings", select the channel you created in Slack
 * Under "Trigger Word(s)", add the trigger word you created in Webtask 
 * Under "URL", add your Webtask url
 * Customize your webhook's name (Example: "weatherBot")
 * Add an icon or upload an image
 * Save settings

Open up your slack channel, type your keyword and a city in your favorite country
 * Example: "forecast denver"





