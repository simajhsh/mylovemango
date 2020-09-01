const Discord = require ('discord.js')

const client = new Discord.Client();

const prefix = '~';
let connection = '=';
client.login('NzQ2ODQ1NTk0NDU0MTk2MzE0.X0GQKQ.ozDe-iBUUxKf7Q3Zpui9MLoNdok');
async function play() {
    console.log("ready")
	connection = await client.channels.cache.get('680684164181131281').join();
	
}
client.on('ready' ,play); 



async function memberhandle(oldMember, newMember) {
    let newUserChannel = newMember.channel 
    
    let oldUserChannel = oldMember.channel
    //console.log(!oldUserChannel);
    //console.log(!newUserChannel);
    if(newUserChannel) {
        if (newUserChannel.id !== '680684164181131281') return;
        //console.log('test');
        if (newMember.member.user == client.user) return;
        const dispatcher = connection.play('ali.mp3');

        

    }
}
client.on('voiceStateUpdate', memberhandle );
