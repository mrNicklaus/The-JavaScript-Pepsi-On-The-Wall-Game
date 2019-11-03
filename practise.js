var num = 99;
while (num > 0) {
    if(num > 1){
        console.log(num + ' bottles of pepsi on the wall! ' + num 
                    + ' bottles of pepsi! Take one down, pass it around...\n' + (num - 1) 
                    + ' bottles of pepsi on the wall!');
    }else{
        console.log(num + ' bottle of pepsi on the wall! ' + num 
                    + ' bottle of pepsi! Take one down, pass it around...\n' 
                    + (num - 1) + ' bottles of pepsi on the wall!');
    }
    num -= 1;
}

