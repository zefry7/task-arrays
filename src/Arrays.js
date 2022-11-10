/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let massive1 = (data + '').split(',');

    massive1.sort(function (a, b) {
        return a - b;
    });

    let str = massive1[0] + '';

    for (let i = 1; i < massive1.length; ++i) {
        str += ',' + massive1[i];
    }

    return str;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let massive = (data + '').split(',');

    for (let i = massive.length; i >= 0; --i) {
        if (parseInt(massive[i]) > 100) {
            massive.splice(i, 1);
        }
    }

    for (let i = 0; i < massive.length; ++i) {
        massive[i] = parseInt(massive[i]);
    }

    return massive;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let massive = new Array(0);

    for (let i = 0; i < 10; ++i) {
        if (i % 2 == 0) {
            massive[i] = array1.shift();
        } else {
            massive[i] = array2.shift();
        }
    }

    return massive;
}
