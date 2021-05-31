    if(message.content === "INSERT TEXT") { //if someone types the text in the " ", the bot will respond as the embed.
 let embed = new Discord.MessageEmbed()
 .setTitle("This is a title.") //you can add or remove these
 .setDescription("This is the description.")
 .addFields( //Fields are like paragraphs, meaning the 'name' being the title and 'value' being the desc
        {
          name: '`Field 1',
          value: '`This is field one.',
          inline: true,
          },
		{
     name: 'Field 2.',
          value: 'You can markdown texts, such as **bold**, *italics*, __underline__, ~~strikethrough~~, and `codeblock`.',
          inline: true,
        }
      )
 .setColor("RANDOM")
 .setFooter("This is a footer.")
 message.channel.send(embed)
}
