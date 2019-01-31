var name = 'Harv' + Game.time;

Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE], name, {memory: {role: 'harvester', working: false}});
Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE], 'Harv' + Game.time, {memory: {role: 'harvester', working: false}}); 
Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE], 'Upg' + Game.time, {memory: {role: 'upgrader', working: false}}); 
Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE], 'Build' + Game.time, {memory: {role: 'builder', working: false}});

Game.creeps[name].memory.working = false;

//[WORK,CARRY,MOVE]
//[WORK,CARRY,MOVE,MOVE,MOVE]
//[WORK,CARRY,CARRY,MOVE,MOVE]
//[WORK,CARRY,CARRY,CARRY,MOVE]
//[WORK,WORK,CARRY,MOVE]

Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Harv' + Game.time, {memory: {role: 'harvester', working: false}});
Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], 'Upg' + Game.time, {memory: {role: 'upgrader', working: false}});

Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE], 'Harv' + Game.time, {memory: {role: 'harvester', working: false}});
Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE], 'Upg' + Game.time, {memory: {role: 'upgrader', working: false}});

Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], 'Harv' + Game.time, {memory: {role: 'harvester', working: false}});
Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], 'Upg' + Game.time, {memory: {role: 'upgrader', working: false}});


module.exports.loop = function () {
	var starttime = Date.now();
	
	console.log("CPU Used: "+ Game.cpu.getUsed() + " | CPU Limit: " + Game.cpu.tickLimit + " | Time Spent: " + (Date.now() - starttime));
};
