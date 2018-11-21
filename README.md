# EasyHttp
EasyHttp Library - to make AJAX requests in an easy and simple manner.

# Sample GET Request

```javascript
const http = new EasyHttp();
http.get("https://jsonplaceholder.typicode.com/posts", function(error, posts){
    if(error){
        console.log(error);
    }
    else{
        console.log(posts);
    }
});
```

# Sample POST Request

```javascript
const http = new EasyHttp();
http.post('https://jsonplaceholder.typicode.com/posts',data,function(error, post){
    if(error){
        console.log(error);
    }
    else{
        console.log(post);
    }
});

```

# Sample PUT Request

```javascript
const data = {
            title:"New Custom Post",
            body: "We are writing a custom post"
    };
const http = new EasyHttp();
http.put('https://jsonplaceholder.typicode.com/posts/1', data,function(error,response){
    if(error){
        console.log(error);
    }
    else{
        console.log(response);
    }
});
```

# Sample DELETE Request
```javascript
const http =  new EasyHttp();
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(error);
    }
    else{
        console.log(response);
    }
});
```

