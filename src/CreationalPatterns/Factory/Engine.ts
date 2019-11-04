export interface Engine {
  start(): void;
  stop(): void;
}

export class LowPowerEngine implements Engine {
  start() {
    console.log("LowPowerEngine starts");
  }

  stop() {
    console.log("LowPowerEngine stopss");
  }
}

export class SuperPowerEngine implements Engine {
  start() {
    console.log("SuperPowerEngine starts");
  }

  stop() {
    console.log("SuperPowerEngine stopss");
  }
}
