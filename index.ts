//made by Blue00123

//cps 사용여부 (true/false)
let usecpsactionbar: boolean = true;

events.playerJoin.on((ev) => {
    bedrockServer.executeCommand(`scoreboard objectives add cps dummy`);
});

events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((ev, ni) => {
    const playerName = ni.getActor()?.getName();
    if (ev.sound === 42) {
            bedrockServer.executeCommand(`scoreboard players add ${playerName} cps 1`);
        if (usecpsactionbar) {
            bedrockServer.executeCommand(`titleraw @a actionbar {"rawtext":[{"text":"§l§fCPS:§e "},{"score":{"name":"*","objective":"cps"}}]},{"text":""}]}`);`);
        }
    }
});

events.playerAttack.on((ev) => {
    const playerName = ev.player.getName();
    bedrockServer.executeCommand(`scoreboard players add ${playerName} cps 1`);
    if (usecpsactionbar) {
        bedrockServer.executeCommand(`titleraw @a actionbar {"rawtext":[{"text":"§l§fCPS:§e "},{"score":{"name":"*","objective":"cps"}},{"text":""}]}`);
    }
    
});

const cool = setInterval(() => {
    bedrockServer.executeCommand(`scoreboard players set @a cps 0`);
},1000);

events.serverClose.on(() => {
    clearInterval(cool)
})
