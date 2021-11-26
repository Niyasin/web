const https=require('https');
https.get('https://www.google.com/search?q=golden+butterfly&tbm=isch',(res)=>{
if(res.statusCode !==200){
console.log(res.statusCode);
res.resume();
return;
}
let data='';
res.on('data',(chunk)=>{
data+=chunk;
});
res.on('close',()=>{
console.log("compleated");
console.log(data);
})
});