//EasyHttp Library Constructor function
function EasyHttp(){
    this.xhr = new XMLHttpRequest();
}

//GET Method -> returns a stringified JSON object as response.
EasyHttp.prototype.get = function(url,callback){
    this.xhr.open('GET', url, true);
    const self = this;
    console.log(self);
    this.xhr.onload = function(){
        if(self.xhr.status===200){
         callback(null, self.xhr.responseText);
            
        }
        else{
            callback(`Something went wrong ${self.xhr.status}`);
        }
    }

    this.xhr.send();
}

// POST Method -> returns the newly added data as response.
EasyHttp.prototype.post = function(url, data, callback){
    this.xhr.open('POST', url, true);
    this.xhr.setRequestHeader('Content-type', 'application/json');
    const self = this;
    this.xhr.onload = function(){
        //201 created -> https://httpstatuses.com/201
        if(self.xhr.status===201)
        {
            callback(null,self.xhr.responseText);
        }
        else{
            callback(`Something went wrong ${self.xhr.status}`);
        }
       
    }

    this.xhr.send(JSON.stringify(data));
}

//PUT METHOD -> returns the updated data aas response.
EasyHttp.prototype.put = function(url, data, callback){
    this.xhr.open('PUT',url, true);
    this.xhr.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.xhr.onload = function(){
        if(self.xhr.status===200){
            callback(null, self.xhr.responseText);
        }
        else{
            callback(`Something went wrong ${self.xhr.status}`);
        }
    }

    this.xhr.send(JSON.stringify(data));
}

//DELETE Method -> Returns an empty object on deletion as response.

EasyHttp.prototype.delete = function(url,callback){
    this.xhr.open('DELETE',url,true);
    let self = this;
    this.xhr.onload = function(){
        if(self.xhr.status===200){
            callback(null,self.xhr.responseText);
        }
        else{
            callback(`Something went wrong ${self.xhr.status}`)
        }
    }


    this.xhr.send();
}