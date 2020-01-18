(function() {
    "use strict";

    alert('Введите 4 числа которые вы хотите возвести в квадрат.');

    let fNum = prompt('Введите первое число:'),
        sNum = prompt('Введите второе число:'),
        tNum = prompt('Введите третье число:'),
        foNum = prompt('Введите четвёртое число:');
    
    let arr = [fNum, sNum, tNum, foNum];
    
    function map(foo, arr){
        var narr = [];
            for(var i=0; i<arr.length; ++i){
                narr.push(square(arr[i]))
            }		
        return narr
    }

    function square(x) { return x * x; }
    alert(`Ваши числа: ${(map(square, arr))}`)

    }());