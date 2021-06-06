const { Client, Collection } = require('discord.js');
const { readdir } = require('fs');
const EventManager = require('./structures/EventManager');

module.exports = class extends Client {
    constructor (options = {}) {
        super(options);
        this.events = new EventManager(this);
    };
    reloadEvent(eventName) {
        const event = this.events.events.includes(eventName);
        if (!event) return false;

        const dir = `./events/${eventName}.js`;
        const status = this.events.remove(eventName);
        if (!status) return status;

        delete require.cache[require.resolve(dir)];

        try {
            const Event = require(dir);
            const event = new Event(this);
            this.events.add(eventName, event);
            return true;
        } catch (e) {
            return e;
        };
    };
    login(token) {
        return super.login(token);
    };
    loadEvents(path) {
		readdir(path, (err, files) => {
			if (err) console.error(err);

			files.forEach(em => {
				const event = new (require(`../${path}/${em}`))(this);
				this.events.add(em.split(".")[0], event);
			});
		});
		return this;
	};
};