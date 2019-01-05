import React from 'react';
import { autorun, observable, decorate, computed } from "mobx";

class DomainStore {
	score_data = [
		{

		},
		{

		},
		{

		}

	];
}

decorate(DomainStore, {
	data: observable
})

const domain = new DomainStore();

export default domain;

autorun(()=>{
	console.log("New data:", domain.data);
})