

import discord
from discord.ext import commands
import ssl 

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context
token = "https://discord.com/api/oauth2/authorize?client_id=814892962647244811&permissions=2148001856&scope=bot"
class MyClient(discord.Client):
    async def on_connect(self):
        print('[LOGS] Connecting to discord!')

    async def on_ready(self):
        print('[LOGS] Bot is ready!')
        print("""[LOGS] Logged in: {}\n[LOGS] ID: {}\n[LOGS] Number of users: {}""".format(self.bot.user.name, self.bot.user.id, len(set(self.bot.get_all_members()))))
        await self.bot.change_presence(activity=discord.Game(name="Weeke is a god!"))

    async def on_resumed(self):
        print("\n[LOGS] Bot has resumed session!")

    async def on_message(self, message):
    # don't respond to ourselves
        if message.author == self.user:
            return

        if message.content == 'ping':
            await self.send(f'Client Latency: {round(self.bot.latency * 1000)}')

client = MyClient()
client.run(token)
