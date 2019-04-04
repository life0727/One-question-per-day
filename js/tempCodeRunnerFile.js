      
      function getNum() {
          var num = 1
          while(num){
              if(num % 2 == 1 && num % 3 == 0 && num % 4 == 1 && num % 5 == 4 && num % 6 == 3 && num % 7 == 0 && num % 8 == 1 && num % 9 == 0){
                return num 
              }
              num ++
          }
      } 
     console.log(getNum())