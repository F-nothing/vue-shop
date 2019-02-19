// function sort(elemnts) {
//     for(var i =0;i<elemnts.length-1;i++){
//         // console.log(elemnts[i])
//         for(var j=0;j<elemnts.length-i-1;j++){
//             if(elemnts[j]>elemnts[j+1]){
//                 var swap = elemnts[j];
//                 elemnts[j] = elemnts[j+1];
//                 elemnts[j+1] = swap
//             }
//         }
//     }
// }
// var elemnts = [3,1,5,7,2,4,9,6,10,8];
// console.log('befaor'+elemnts);
// sort(elemnts);
// console.log(sort(elemnts));
//

var arr=[9,4,2,5,72,17,2,1];
console.log(selectionSort(arr));
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

