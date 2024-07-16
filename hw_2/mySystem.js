import os from 'os'

export default class MySystem{
    machine;
    type;
    hostname;
    freemem;
    homedir;

    setMachine(){
        this.machine = os.machine();
        return this.machine;
    }

    setType(){
        this.type = os.type();
        return this.type;
    }

    setHostname(){
        this.hostname = os.hostname();
        return this.hostname;
    }

    setFreemem(){
        this.freemem = os.freemem();
        return this.freemem;
    }

    setHomedir(){
        this.homedir = os.homedir();
        return this.homedir;
    }
}