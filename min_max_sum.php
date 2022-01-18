<?php

/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

$arr = [1,2,3,4,5];

min sum is: 1+2+3+4 = 10
max sum is: 2+3+4+5 = 14

The tricky part of this question is hidden test cases. Same digits, long and recursive complicated arrays.

*/

function miniMaxSum($arr)
{
    // Write your code here
    $min = min($arr);
    $max = max($arr);

    if ($min == $max) {
        $total = $min * sizeof($arr) - $min;
        echo "$total $total";
    } else {
        $minArray = [];
        $maxArray = [];

        foreach ($arr as $val) {
            if ($val != $min) $minArray[] = $val;
            if ($val != $max) $maxArray[] = $val;
        }

        $minResult = array_sum($minArray);
        $maxResult = array_sum($maxArray);
        echo "$maxResult $minResult";
    }
}
