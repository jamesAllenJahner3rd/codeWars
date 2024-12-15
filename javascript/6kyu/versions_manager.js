class VersionMimic{
  constructor(aMajor,aMinor,aPatch){
    console.log(aMajor,aMinor,aPatch );
    [this._major, this._minor, this._patch] = [aMajor, aMinor, aPatch].map(e=> {
      console.log(e)
      if (isNaN(e)  ){
        throw new Error('Error occured while parsing version!')
      }
      return Number(e)||0;
    });
    console.log('parsed',this._major,this._minor,this._patch );
    this.versionLegacy = []   ; 
    
  }
  versionLegacyUpdater(){
    this.versionLegacy.push([this._major, this._minor, this._patch]);
  };
  major(){ 
    this.versionLegacyUpdater()  ;   
   this._major += 1;
   this._minor = 0;
   this._patch = 0;
   console.log('major',this._major,this._minor,this._patch );
    return this;
  }
  minor(){
    this.versionLegacyUpdater() ;
    
    this._minor += 1;
    this._patch = 0;
    console.log('minor',this._major,this._minor,this._patch );
    return this;
  };
   patch(){
    this.versionLegacyUpdater() ;
    this._patch += 1;
    console.log('patch',this._major,this._minor,this._patch );
    return this;
  } // this.versionLegacy.pop() ;
   rollback(){
    if(this.versionLegacy.length < 1){
      throw new Error("Cannot rollback!")
    }
    [this._major, this._minor, this._patch] = this.versionLegacy.pop(); 
    console.log('rollback', this._major, this._minor, this._patch);
    return this;
  };
   release(){
     console.log('release',this._major,this._minor,this._patch );
    return [this._major,this._minor,this._patch ].join('.');
  };
};
function vm(versionInput ="0.0.1"){
  versionInput= versionInput||'0.0.1';
  console.log(versionInput);
  let versionArray = versionInput.split('.');
  console.log(versionArray);
  return new VersionMimic(versionArray[0]||0,versionArray[1]||0,versionArray[2]||0);
}  ;
   vm("1.2.3").major().patch().rollback().release();
  
 
/*const  vm =(version ='0.0.1',oldVersions =[])=>{
    console.log("version:",version) 
   if (version === ''){version ='0.0.1'}
//  console.log("started:",oldVersions)  
   let history = oldVersions;
   let versionArray=[];
   history.push(version);
  //console.log(string, history)
//             history.push(string);
           versionArray = version.split('.')
         // console.log('hint.versionArray:',versionArray)
          versionArray.splice(3);
         versionArray= [versionArray[0]||0,versionArray[1]||0,versionArray[2]||0]
        // console.log('hint.versionArray:',versionArray,!versionArray.every((num) => isNaN(num) === false && parseInt(num) == +num))
           if(!versionArray.every((num) => isNaN(num) === false && parseInt(num) == +num)){
             throw new Error("Error occured while parsing version!");
             }
          // console.log("hint:",history)
            version = [versionArray[0]||0,versionArray[1]||0,versionArray[2]||0].join('.')
 
  return {
      /* hint(string){
           //console.log(string, history)
//             history.push(string);
           versionArray = string.split('.')
         // console.log('hint.versionArray:',versionArray)
          versionArray.splice(3);
         versionArray= [versionArray[0]||0,versionArray[1]||0,versionArray[2]||0]
         console.log('hint.versionArray:',versionArray)
           if(!versionArray.every((num) => isNaN(num) == false && parseInt(num) == num)){
             throw new Error("Error occurred while parsing version!");
             }
          // console.log("hint:",history)
            version = [versionArray[0]||0,versionArray[1]||0,versionArray[2]||0].join('.')
           },
       major(){
          // this.hint(version);
         //  console.log("major:",history)
           versionArray[0] =`${+versionArray[0] +1}`;
           versionArray[1]='0' ;
           versionArray[2] ='0';
           version = [versionArray[0],versionArray[1],versionArray[2]].join('.')
           console.log("major:", version)
           return vm(version,history);
        }, // increase MAJOR by 1, set MINOR and PATCH to 0
       minor(){
        //  this.hint(version);
           //console.log("minor:",history)
           versionArray[1] =`${+versionArray[1] +1}`;
           versionArray[2] ='0';
           version = versionArray.join('.')
         console.log("minor:", version)
           return vm(version,history);
       },   //increase MINOR by 1, set PATCH to 0
       patch(){
         //  this.hint(version);
         //  console.log("patch:", history)
           versionArray[2] =`${+versionArray[2] +1}`;
           version = versionArray.join('.')
         console.log("patch:", version)
           return vm(version,history);
       },  //increase PATCH by 1
       rollback(){
         //  console.log("rollback:", history,history[history.length-1])
           if(history.length <=1){
               throw new Error("Cannot rollback!");
           }
         history.pop()
           version = history[history.length - 1]
         //  console.log('rollback.version:',version)
         history.pop()
           return vm(version,history);
       },
       release(){
        // console.log("release:",version)
       //  this.hint(version)
         console.log("release:",version)
           return  version;
       } return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
  }    
} */


/*
parameter a number formated  "{MAJOR}.{MINOR}.{PATCH}" where minor and patch are optional
return object, if format is incorrect  return "Error occured while parsing version!"
include chainable methods: 
major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback()
1.2.3.release() > 1.2.3
1-2-3.release() > "Error occured while parsing version!"
1.2.3.minor.release() > 1.3.0


*/ 

/** In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!*/
/**
class VM {
    constructor(major, minor, patch) {
        this.rollbackVersions = [];
        this.version = { major, minor, patch };
    }

    major() {
        this.updateRollbackVersion();
        this.version.major += 1;
        this.version.minor = 0;
        this.version.patch = 0;
        return this;
    }

    minor() {
        this.updateRollbackVersion();
        this.version.minor += 1;
        this.version.patch = 0;
        return this;
    }

    patch() {
        this.handleDefaultPatch();
        this.updateRollbackVersion();
        this.version.patch += 1;
        return this;
    }

    rollback() {
        if (this.rollbackVersions.length === 0)
            throw new Error('Cannot rollback!');
        this.version = this.rollbackVersions[this.rollbackVersions.length - 1];
        this.rollbackVersions.pop();
        return this;
    }

    release() {
        this.handleDefaultPatch();
        const { major, minor, patch } = this.version;
        return [major, minor, patch].join('.');
    }

    // handle default value for patch
    handleDefaultPatch() {
        if (
            this.version.major === 0 &&
            this.version.minor === 0 &&
            this.version.patch === 0
        ) {
            this.version.patch = 1;
        }
    }

    updateRollbackVersion() {
        const { major, minor, patch } = this.version;
        this.rollbackVersions.push({ major, minor, patch });
    }
}

const vm = (version = '') => {
    // default value
    version += version.trim().length === 0 ? '0.0.0' : '.0.0.0';
    let versions = version
        .split('.')
        .filter((str) => str !== '')
        .slice(0, 3);
    // handle version is not number/decimal
    versions = versions.map((v) => {
        if (Number(v) != v)
            // means the version is include chars
            throw new Error('Error occured while parsing version!');
        return Number(v);
    });

    return new VM(versions[0], versions[1], versions[2]); */