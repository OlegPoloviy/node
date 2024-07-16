import mySystem from 'system_oleg';

const system = new mySystem;

system.setFreemem();
console.log(system.freemem);

system.setHomedir();
console.log(system.homedir);