import { Injectable } from '@angular/core'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { Storage } from '@ionic/storage'
import { Device } from '@ionic-native/device'
import { Platform} from 'ionic-angular'
import { BehaviorSubject} from 'rxjs/Rx'

@Injectable()
export class DbaProvider {
    private dba: SQLiteObject
    id: number
    name: string
    public f: Date
    public date: string
    public hour: string
    public userName: string
    public idRequest: string
    public saveGC: Array<Array<String>> = new Array<Array<String>>()
    private dataBaseStatus : BehaviorSubject<boolean>
    public optional_01: string
    public queryGrid: string
    public queryD1: string

    constructor (
        private sqLite: SQLite,
        private storage: Storage,
        private device: Device,
        private platform: Platform
        )
    {
        this.dataBaseStatus = new BehaviorSubject(false)
        this.platform.ready().then(() => {
            this.createDataBaseFile()
            this.searchIdDevice('optional')
        })
    }

    public createDataBaseFile() {
        this.sqLite.create({
            name: 'authDb.db',
            location: 'default'
        })
        .then((db: SQLiteObject) => {
            this.dba = db
            this.createTables()
        })
        .catch(e => console.log(`Error creating data base ${e}`))
    }

    public createTables(): void {
        this.dba.executeSql("CREATE TABLE IF NOT EXISTS 'USUARIO' ( 'optional01' TEXT, 'grilla' TEXT, 'fechaHora' TEXT, 'time_01' NUMBER,'requestId' TEXT, 'dUno' TEXT)", []).then(() => {
            this.dataBaseStatus.next(true)
        }).catch(e => console.log(`Error creating data base ${e}`))

        this.dba.executeSql("CREATE TABLE IF NOT EXISTS 'ADMIN_DEVICE' ( 'ID' TEXT, 'DATO1' TEXT,'DATO2' TEXT, 'DATO3' TEXT)", []).then(() => {
            console.log("tabla user create ADMIN_DEVICE")
            this.dataBaseStatus.next(true)
        }).catch(e => console.log(`Error creating ADMIN_DEVICE table ${e}`))
    }

    public getStatusDataBase() {
        return this.dataBaseStatus.asObservable()
    }

    public saveBd(option01) {
        this.optional_01 = option01
    
        this.storage.get('userName').then((val) => {
            if(val != null){
                this.userName = val
            }
        })

        this.storage.get('saveGC').then((val) => {
            if(val != null){
              this.saveGC = val
            }
        })
      
        this.storage.get('REQUESTID').then((val) => {
            if(val != null){
              this.idRequest = val
            }
        })

        const userName: string = this.userName;
        let grid: Array<Array<String>> = new Array<Array<String>>();
        grid = this.saveGC;
        const requestId: string = this.idRequest;

        const f = new Date();
        let date;
        let hour;
        let dateHour;

        let time;

        date = `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`
        hour = `${f.getHours()}:${f.getMinutes()}m${f.getSeconds}s`
        dateHour = `${date}-${hour}`
        time = f.getFullYear() + (f.getMonth() + 1) + f.getDate() + f.getHours() + + f.getMinutes() + f.getSeconds();

        const stringSQL: string = "INSERT INTO 'USUARIO' (optional01, fechaHora, time_01) VALUES ('" + option01 + "', '" + dateHour + "', '" + time + "')"

        this.dba.executeSql(stringSQL, []).then(() => {
            console.log("An user was added succesfuly")
        }).catch(e => console.log("Error trying saving " + JSON.stringify(e)))
    }

    public saveUpdatedData(grid) {
        this.dba.executeSql("UPDATE 'USUARIO' SET grilla = '"+ grid +"' where time_01 = (select MAX(time_01) from USUARIO)", [])
        .then(() => {console.log("edited succesfuly");}).catch(e => console.log(`Error trying saving ${e}`))
    }

   public searchIdDevice(deviceId: string):string {
        const sql:string = 'select optional01 from USUARIO where time_01 = (select MAX(time_01) from USUARIO) '
        const response = this.executeQuery(sql)

        response.then((data) => {           
            if(data.rows){
            if(data.rows.length > 0){
                for(let i= 0; i < data.rows.length; i++) {           
                    deviceId = (data.rows.item(i).optional_01)    
                    this.optional_01 = deviceId
                    console.log("mensaje => optional_01" + this.optional_01) 
                }
            }
            }
        })
        .catch(e => console.log("Error al consultar " + JSON.stringify(e)))
    
        return this.optional_01
    }

    async executeQuery(sql) {
        return await this.dba.executeSql(sql, [] )
    }

    public dropTable(): string[] {
        const table: string[]= []
        this.dba.executeSql('DELETE FROM USUARIO', [] )
        .then((data) => {
            if(data == null){
            return
            }
            
        })
        .catch(e => alert("Error al ELIMINAR " + JSON.stringify(e)))
        
        return table
    }

    public searchGrid() {
        return new Promise((resolve, reject) => {
        const sql:string = 'select grilla from USUARIO where time_01 = (select MAX(time_01) from USUARIO) '
        const response = this.executeQueryGrid(sql)
        
        response.then((data) => {           
          
          if (data.rows) {
            if (data.rows.length > 0) {
              for(let i= 0; i < data.rows.length; i++){           
               this.queryGrid = (data.rows.item(i).grid) 
               console.log("mensaje=>  searchGrilla  " + this.queryGrid)
               resolve(this.queryGrid)    
              }
              
            }
          } else{ resolve("")}
        })
        .catch(e => {
            console.log("Error al consultar " + JSON.stringify(e))
            resolve("")})
        })

    }

    async executeQueryGrid(sql){
        return await this.dba.executeSql(sql, [] );
    }

    public updateD1(text) {
        this.dba.executeSql("UPDATE 'USUARIO' SET dUno = '"+ text +"' where time_01 = (select MAX(time_01) from USUARIO)", [])
        .then(() => {
        console.log("Modifico correctamente!");
        })
        .catch(e => console.log("Error al Actualizar " + JSON.stringify(e)));
    }

    public getD1(): string {
        var sql:string = "select dUno from USUARIO where time_01 = (select MAX(time_01) from USUARIO) ";
        var response = this.executeQuery(sql);
        
        response.then((data) => {           
            if(data.rows){
                if(data.rows.length > 0){
                    for(var i=0; i<data.rows.length; i++) {           
                    this.queryD1 = (data.rows.item(i).dUno);  
                    console.log("this.queryD1: "+this.queryD1);          
                    }
              
                }
            }
        })

        .catch(e => console.log("Error al consultar " + JSON.stringify(e)));
        return this.queryD1;
    }

    public searchIdFinger() {
        return new Promise((resolve, reject) => {
            var deviceId: any;
        
            var sql: string = 'select optional01 from USUARIO where time_01 = (select MAX(time_01) from USUARIO) ';
            var response = this.executeQuery(sql);
      
            response.then((data) => {
                if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                    deviceId = (data.rows.item(i).optional01);
                    this.optional_01 = deviceId; 
                    console.log("mensaje=>userNameDb:"+deviceId);
                                
                    resolve(deviceId);
                    }
                } else { resolve(""); }
                } else { resolve(""); }
            })
            .catch(e => console.log("Error al consultar " + JSON.stringify(e)));
      
        });
    }

    public deviceExists() {
        console.log("mensaje=> deviceExists entro");
        
       return new Promise((resolve, reject) => {
         var deviceId: any;
     
         var sql: string = 'select optional01 from USUARIO where time_01 = (select MAX(time_01) from USUARIO) ';
         var response = this.executeQuery(sql);
     
         response.then((data) => {
           if (data.rows) {
             if (data.rows.length > 0) {
               for (var i = 0; i < data.rows.length; i++) {
                 deviceId = (data.rows.item(i).optional01);
                 this.optional_01 = deviceId; 
                 console.log("mensaje=>userNameDb:"+deviceId);
                           
                 resolve(deviceId);
               }
             } else { resolve(""); }
           } else { resolve(""); }
         })
           .catch(e =>{
             console.log("Error al consultar " + JSON.stringify(e));
             
             reject(e);} );
     
       });
    }

    public searchDeviceConfig() {
        return new Promise((resolve, reject) => {
      
      
          var sql: string = 'select ID ,DATO1 ,DATO2, DATO3 from ADMIN_DEVICE ';
          var response = this.executeQuery(sql);
      
          response.then((data) => {
            if (data.rows) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  let datos = {
                    'ID': (data.rows.item(i).ID),
                    'DATO1': (data.rows.item(i).DATO1),
                    'DATO2': (data.rows.item(i).DATO2),
                    'DATO3': (data.rows.item(i).DATO3)
                  };
                  console.log("sql=> " + JSON.stringify(datos))
                  resolve(datos);
                }
              } else { resolve(""); }
            } else { resolve(""); }
          })
            .catch(e => console.log("Error al consultar ADMIN_DEVICE" + JSON.stringify(e)));
      
        });
    }

    public deleteDeviceConfig() {
        this.dba.executeSql('DELETE FROM ADMIN_DEVICE', []).then((data) => {
            console.log("Elimino correctamente ADMIN_DEVICE");
            return;
        })
        .catch(e => console.log("Error al ELIMINAR " + JSON.stringify(e)));
      
    }

    public saveDeviceConfig(ID, DATO1, DATO2, DATO3) {
        var stringSQL: string = "INSERT INTO 'ADMIN_DEVICE' (ID ,DATO1 ,DATO2, DATO3) VALUES ('" + ID + "', '" + DATO1 + "', '" + DATO2 + "', '" + DATO3 + "')";
      
        this.dba.executeSql(stringSQL, []).then(() => {
            console.log("se inserto con exito en saveDeviceConfig");
        })
        .catch(e => console.log("Error al guardar saveDeviceConfig" + JSON.stringify(e)));
      
    }
      
      
}