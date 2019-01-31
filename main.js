// import modules
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    var starttime = Date.now();
    // check for memory entries of died creeps by iterating over Memory.creeps
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    //console.log('Memory Cleared!');

    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        let creep = Game.creeps[name];

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
    //console.log('Orders Given!');

    // goal: have 10 harvesters and as many upgraders as possible
    var minimumNumberOfHarvesters = 10;
    // _.sum will count the number of properties in Game.creeps filtered by the
    //  arrow function, which checks for the creep being a harvester
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var creepbot = undefined;

    // if not enough harvesters
    if (numberOfHarvesters < minimumNumberOfHarvesters) {
        // try to spawn one
        //name = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined,{ role: 'harvester', working: false});
        creepbot = Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Harv' + Game.time, {memory: {role: 'harvester', working: false}}); 
    }
    else {
        // else try to spawn an upgrader
        // small change from what you saw in the video: for upgraders it makes
        //  more sense to have two move parts because they have to travel further
        //name = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,MOVE], undefined,{ role: 'upgrader', working: false});
        creepbot = Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upg' + Game.time, {memory: {role: 'upgrader', working: false}});


    }

    // print name to console if spawning was a success
    // name > 0 would not work since string > 0 returns false
    if (!(creepbot < 0)) {
        console.log("Spawned new creep: ", creepbot);
    }

    if(Game.cpu.getUsed() > Game.cpu.tickLimit / 2) {
		console.log("Used half of CPU already!");
	}

	console.log("CPU Used: "+ Game.cpu.getUsed() + " | CPU Limit: " + Game.cpu.tickLimit + " | Time Spent: " + (Date.now() - starttime));
};
