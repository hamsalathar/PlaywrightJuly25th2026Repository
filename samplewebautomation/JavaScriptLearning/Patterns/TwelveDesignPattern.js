/*

  *******
   *****
    ***
     *
                         */

for(let i=5;i>=1;i--){

    let pattern = " "
    for(let j=1;j<=5-i;j++){


        pattern = pattern + " "
    }

    for(let k=1 ;k<=(2*i-1);k++){
        pattern = pattern + "*";
    }

    console.log(pattern);
}

console.log();