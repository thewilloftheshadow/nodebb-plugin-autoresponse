# nodebb-plugin-autoresponse

A NodeBB autoresponse plugin based on https://github.com/NodeBB/nodebb-plugin-autoresponse
This plugin has commands specifically for the Peaceful Shadows to start with, but customization is coming soon!

# Usage

```
npm install nodebb-plugin-autoresponse
```
* Or install via ACP > Extend > Plugins
* then login to your NodeBB ACP > Extend > Plugins to activate
* Then restart your instance
* Then visit `/admin/plugins/autoresponse` or Plugins > AutoResponse, delegate a user to be the `bot` that replies to the users.
* Then when creating a topic or a post type one of the predefined commands as listed below
```diff
+ /pingpong
```
You can submit multiple commands in one post, but they must be on separate lines. The bot will respond all in one posts on separate lines as you did.


### Notes 
Keep in the mind the following points:

* if you see an error `[[error:no-privileges]]` in the logs, that means that the delegated bot does not have write access to that specific category/topic, you need to make sure the bot can reply everywhere.
* if you see `[[error:too-many-posts-newbie...]]` in the logs, that means that the bot is newly created.

