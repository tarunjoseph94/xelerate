const express=require('express');
const templatesjs = require('templatesjs');
const server=express();
const fs=require('fs');
const  port = process.env.PORT || 3000;
templatesjs.dir = "./templates/";

server.get('/',function(req,res){
  fs.readFile("index.html", function(err,data){ // provided the file above is ./ index.html
    if(err)
      throw err;
    templatesjs.set(data,function(err,dat){
            if(err)
              throw err;
            res.write(dat);
            res.end();
          });
  });
});

server.use(express.static(__dirname+'/assets'));
server.listen(port, () => console.log('Listening on '+ port ));
