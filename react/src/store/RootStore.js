import LevelStore from './LevelStore';
import UIStore from './UIStore';
import DomainStore from './DomainStore';

/*
* The root store contains all of our other stores.
* It it passed down as a react property in the AppProvider class
*/
class RootStore {

	constructor(){
		this.levelStore = new LevelStore(this);
		this.uiStore = new UIStore(this);
		this.domainStore = new DomainStore(this);
	}

	get level(){
		return this.levelStore;
	}

	get ui(){
		return this.uiStore;
	}

	get domain(){
		return this.domainStore;
	}
}

//Intialize our root store
const rootStore = window.root = new RootStore();

export default rootStore;