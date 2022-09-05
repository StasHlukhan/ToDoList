/// <reference types="react-scripts" />

interface IJSWindow {
	google: any;
}

interface ISidebarButton {
	buttonText: string;
	getPath: (...args) => string;
}
interface IBonusesButton {
	buttonText: string;
	getPath:()=> string;
}

interface IUserInfo {
	name:string;
	surname:string;
	job:string;
	age:number;
	email:string;
	skype:string;
	tags:ITag[];
}

interface ITag{
	tagName:string;
}


interface Iphrase {
	quote: string;
	author: string;
}
interface IaddTask  {
	type:any
}