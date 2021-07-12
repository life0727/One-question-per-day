function format(val) {
    let nVal= ['', '', ''];
    let fr = 1000;
     let num = 3;
     while (val / fr >= 1) {
         fr *= 10;
         num += 1;
     }
     if (num <= 4) { // 千
         nVal[1] = '千';
         nVal[0] = parseInt(val / 1000) + '';
     } else if (num <= 8) { // 万
         const str = parseInt(num - 4) / 3 > 1 ? '千万' : '万';
         const fm = '万' === str ? 10000 : 10000000;
         nVal[1] = str;
         nVal[0] = (val / fm) + '';
     } else if (num <= 16) {// 亿
         let str = (num - 8) / 3 > 1 ? '千亿' : '亿';
         str = (num - 8) / 4 > 1 ? '万亿' : str;
         str= (num - 8) / 7 > 1 ? '千万亿' : str;

         let fm = 1;
         if ('亿' === str) {
             fm = 100000000;
         } else if ('千亿' === str) {
             fm = 100000000000;
         } else if ('万亿' === str) {
             fm = 1000000000000;
         } else if ('千万亿' === str) {
             fm = 1000000000000000;
         }
         nVal[1] = str;
         nVal[0] = parseInt(val / fm) + '';
     }
     if (val < 1000) {
         nVal[1] = '';
         nVal[0] = val + '';
     }
    return nVal.join('');
}
