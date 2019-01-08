import React from 'react';
import { observable, decorate, computed } from "mobx";

class DomainStore {

	constructor(root){
		this.root = root;
	}
}

decorate(DomainStore, {
	data: observable
})

export default DomainStore;