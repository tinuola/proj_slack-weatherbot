# Slack WeatherBot
Create a Simple Weather Slack Bot with Webtask
<br />

A SlackBot that displays weather conditions ... only in the Czech Republic! I lived there for over 8 years; sometimes I get nostalgic.... But customize away to display weather conditions in your favorite cities.
<br />
![slack weather bot demo](https://github.com/tinuola/slack-weatherbot/blob/master/img/slack-weatherbot.gif)

### Create a Simple Weather Slack Bot with Webtask 

Requirements:
* [Slack Account](https://slack.com/) and workspace
* [Weeather Underground](https://www.wunderground.com/weather/api/) API Key
* [Webtask account](https://webtask.io/cli)

Create a Webtask account and set up Webtask's command line interface (CLI)
 * Create a simple webtask; a webtask url will be generated
 * In Webtask's web editor, create a secret called TRIGGER_WORD and set its value to a specific word. (Example: "forecast") This word will activate the bot in Slack. 
 * Replace your starter code with code from webtask-weather.js (the js file in this repository)
<br />
Create a Weather Underground account; a unique API key will be generated
 * In Webtask's web editor, create another secret: API_KEY, and set its value to the Weather Underground's API key
<br />
Set up a Slack workspace and create a channel. (Example: "Weather")
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
<br />
Open up your Slack channel, type your keyword and a city in your favorite country
 * Example: "forecast denver"


