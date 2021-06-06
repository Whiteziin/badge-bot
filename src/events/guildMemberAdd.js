module.exports = class {
    constructor (client) {
        this.client = client;
    };

    async run(member) {
        if (member.user.flags.has("EARLY_SUPPORTER")) member.roles.add(process.env.earlysupporterID);
        if (member.user.flags.has("VERIFIED_DEVELOPER")) member.roles.add(process.env.developerID);
        if (member.user.flags.has("DISCORD_PARTNER")) member.roles.add(process.env.partnerID);
        if (member.user.flags.has("HYPESQUAD_EVENTS")) member.roles.add(process.env.hypesquadID);
        if (member.user.flags.has("BUGHUNTER_LEVEL_1") || member.user.flags.has("BUGHUNTER_LEVEL_2")) member.roles.add(process.env.bughunterID);
    };
};