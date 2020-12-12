const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('744558838568452166') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Sunar`)
        .setDescription(`
-çal   ➠ Belirtilen müziği oynatmayı sağlar.
-geç   ➠ Sıradaki müziğe geçiş yapar.
-sıra  ➠ Müzik sırasını gösterir.
-dur   ➠  Müziği durkaklatır.
-kapat ➠ Belirtilen müziği fbi tarafından kapatmayı sağlar.
-çalan ➠ Çalan şarkıyı gösterir. `)   
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setFooter(`${message.author.username} Afro Music`,message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};