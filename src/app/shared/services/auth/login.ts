export interface UserDetails {
	authToken : string;
	name : string;
	role : string;
	document : string;
	id : number;
	authorities : Authorities[];
	list : any;
}
export class Authorities{
	authority:string;
}