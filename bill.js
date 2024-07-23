function calculate(){
   // console.log("test");
    let arr=[];
    for (let i=1;i<=6;i++){
        let value=document.querySelector("#m"+i).value;
                   arr.push(Number(value));
    }
   // console.log(arr);
    arr.sort((a,b) => a-b);
    let maximum=document.querySelector("#max");
    maximum.innerHTML="maximum : Rs"+arr[arr.length-1];
    let minimum=document.querySelector("#min");
    minimum.innerHTML="minimum : Rs"+arr[0];
    let average=document.querySelector("#avg"); 
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+= arr[i];
 }
 let a=sum/arr.length;
 avg.innerHTML="average: Rs"+a.toFixed(3);
}
