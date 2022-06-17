//made by Blue00123

const CPS: any = {};
events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni) => {
        const playerName = ni.getActor()!.getName();
        if (pkt.sound === 42 || pkt.sound === 43) {
            if (!CPS[playerName]) {
                CPS[playerName] = 0;
            }
            CPS[playerName]++;
            bedrockServer.executeCommand(`title ${playerName} actionbar CPS :${CPS[playerName]}`);
            setTimeout(() => {
                CPS[playerName]--;
                bedrockServer.executeCommand(`title ${playerName} actionbar CPS :${CPS[playerName]}`);
            }, 1000);
    }
});
