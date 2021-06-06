module.exports = class {
    constructor (client) {
        this.client = client;
    };

    async run() {
        console.log(`Conected!\nVersion: ${require('../../package.json').version}\nCreator: "White"#0007`);
    };
};