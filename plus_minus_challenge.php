<?php
/*
Given an array of integers, solve the ratios of its elements that are positive, negative, and zero. 
Return the decimal value of each fraction on a new line with places after the decimal.

 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus($arr) {
    $minus = 0;
    $zero= 0;
    $positive = 0;
    
    foreach($arr as $val){
    
    if ($val<0) $minus++; 
    elseif($val==0) $zero++;
    else $positive++;
    }
    
    $dimensions = sizeof($arr);
    
    if ($minus==0)  $minusRatio = 0;
    else $minusRatio = $minus/$dimensions;
    
    if ($zero==0) $zeroRatio = 0;
    else $zeroRatio = $zero/$dimensions;
    
    if ($positive==0) $positiveRatio = 0; 
    $positiveRatio = $positive/$dimensions;
    
    printf("%.6f\n",$positiveRatio);
    printf("%.6f\n",$minusRatio);
    printf("%.6f\n",$zeroRatio);
    
}
?>