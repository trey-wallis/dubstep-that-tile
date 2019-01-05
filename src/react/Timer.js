import { NUM_DECIMAL_TIME } from './GameConstants'
import { observable, decorate, computed } from "mobx";

class Timer {

	constructor(){
		this.startTime = 0;
		this.currentTime = 0;
		this.isRunning = false;
		this.lastTime = 0;
	}

	start(){
		this.startTime = new Date().getTime();
		this.isRunning = true;
		this.measure();
	}

	measure(){
		if (!this.isRunning) return;

		this.currentTime = new Date().getTime();
		setTimeout(() => this.measure(), 10);
	}

	stop(){
		this.isRunning = false;
	}

	reset(){
		this.lastTime = this.elapsed;
		this.startTime = 0;
		this.currentTime = 0;
	}

	get elapsed(){
		return this.currentTime - this.startTime;
	}

	get displayElapsed(){
		return (this.elapsed / 1000).toFixed(NUM_DECIMAL_TIME);
	}

	get displayLastTime(){
		return (this.lastTime / 1000).toFixed(NUM_DECIMAL_TIME);
	}
}

export default Timer;

decorate(Timer, {
	currentTime: observable,
	startTime: observable,
	displayElapsed: computed,
})