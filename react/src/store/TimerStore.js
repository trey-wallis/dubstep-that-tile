import { NUM_DECIMAL_TIME } from '../constants/GameConstants';
import { computed, decorate, observable } from "mobx";

class TimerStore {

	constructor(){
		this.startTime = 0;
		this.currentTime = 0;
		this.isRunning = false;
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
		this.startTime = 0;
		this.currentTime = 0;
	}

	get elapsed(){
		return ((this.currentTime - this.startTime) / 1000).toFixed(NUM_DECIMAL_TIME);
	}
}

decorate(TimerStore, {
	currentTime: observable,
	startTime: observable,
	elapsed: computed,
})

const timerStore = window.timerStore = new TimerStore();

export default timerStore;
