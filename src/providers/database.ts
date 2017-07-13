 //  https://ampersandacademy.com/tutorials/ionic-framework-version-2/sqlite-native-plugin-example

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

import { MolaItem } from '../providers/mola-item/mola-item';


/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Database {

	public userName: string;
	public molaName: string;

	public itemList: MolaItem[];

	constructor(public http: Http, private sqlite: SQLite, private platform: Platform) {
		console.log('Hello Database Provider');
		platform.ready().then(() => {
			this.sqlite.create({
				name: 'holamola.db',
				location: 'default'
			})
			.then((db: SQLiteObject) => {
				db.executeSql('CREATE TABLE IF NOT EXISTS playerInfo(id INTEGER PRIMARY KEY AUTOINCREMENT, userName TEXT, molaName TEXT)', {})
				.then(() => {

					db.executeSql('SELECT * FROM playerInfo', [])
					.then((data) =>{
						if (data.rows.length > 0)
						{
							this.userName = data.rows.item(0).userName;
							this.molaName = data.rows.item(0).molaName;
						}
						else
						{
							db.executeSql('INSERT INTO playerInfo(userName, molaName) VALUES("USER", "MOLA")', [])
							.then(() => console.log("INSERTED NAMES") )
							.catch(e => {
								console.log(e);
								alert("Failed to insert player info");
							});

							this.userName = 'USER';
							this.molaName = 'MOLA';
						}
					})
					
				})
				.catch(e => console.log(e));

				db.executeSql('CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, icon TEXT, quantity NUMBER, cost NUMBER, description STRING, type STRING', {})
				.then(() =>{
					db.executeSql('SELECT * FROM items', [])
					.then((data) =>{
						if (data.rows.length > 0)
						{
							for (var i = 0; i < data.rows.length; i++)
							{
								var tempItem = new MolaItem(data.rows.item(i).id, data.rows.item(i).name, data.rows.item(i).icon, data.rows.item(i).quantity, data.rows.item(i).cost, data.rows.item(i).description, data.rows.item(i).type );
								this.itemList.push(tempItem);
							}
						}
					})
				})
				.catch(e => console.log(e));


			})
		})

	}

	updateDatabaseValue(column, variable, value){
		this.platform.ready().then(() => {
			this.sqlite.create({
				name: 'holamola.db',
				location: 'default'
			})
			.then((db: SQLiteObject) => {
				let sqlString = "UPDATE " + column + " SET " + variable + " ='" + value + "'";
				db.executeSql(sqlString, [])
				.then(() => {
					console.log("Updated the database"); 
				})
				.catch(e => {
					console.log(e);
					alert("Database update failed.");
				});
				this.molaName = value;		
			})
		})
	}

	getUserName(){
		return this.userName;
	}
	getMolaName(){
		return this.molaName;
	}






}
