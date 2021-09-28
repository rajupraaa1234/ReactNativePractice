let arr = [];
for(let i=0;i<100;i++){
    arr.push(`Item no : ${i}`);
}

let lastItem = '';

export const FakeServer = qty =>
   new Promise((resolve,reject)=>{
       let newArr;
       const lastItemIndex = arr.indexOf(lastItem);
       if(lastItemIndex==arr.length-1){
           return resolve('done');
       }
       if(!lastItem){
            newArr = [...arr].slice(0,qty);
            lastItem = [...newArr].pop();
       }else{
            const nnewIndex = arr.indexOf(lastItem)+1;
            newArr = [...arr].slice(nnewIndex,nnewIndex+qty);
            lastItem = [...newArr].pop();
       }
       setTimeout(()=>{
           resolve(newArr);
       },1000);
});