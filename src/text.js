// const func = (data) => {
//     const splitAddition = data.split("+");
//     const arr = [];
//     splitAddition && splitAddition.length > 0 && splitAddition.forEach((add) => {
//         if(add.includes("-")){
//             const splittedArr = add.split("-");
//             let subtractionSolution = 0;
//             splittedArr && splittedArr.length > 0 && splittedArr.map((splitNum,i) => {
//                 if(i == 0){
//                     subtractionSolution = Number(splitNum);
//                 }else{
//                     subtractionSolution -= Number(splitNum);
//                 }
//             });
//             arr.push(subtractionSolution) ;
//         }else{
//             arr.push(add);
//         }
//     });

//     let sum = 0;
//     arr && arr.length >0 && arr.map((a) => {
//         sum += Number(a);
//     });
//     console.log("SUM : - ", sum);
// }

// const resp = func("5+7-2+9-16");