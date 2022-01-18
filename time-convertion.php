<?php
/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Dont forget all variations. Such 12:00:01pm/am etc.

*/

function timeConversion($s)
{
    // Write your code here

    $splitAM = explode("AM", $s);
    $splitPM = explode("PM", $s);

    if (sizeof($splitAM) > 1) {

        $timeInt = explode(":", $splitAM[0]);

        if ($timeInt[0] >= 12) {
            $split = $splitAM[0];
            return "0" . date("G:i:s", strtotime($splitAM[0]) - 12 * 60 * 60);
        } else {

            return str_replace("AM", "", $s);
        }
    } else {

        $timeInt = explode(":", $splitPM[0]);

        if ($timeInt[0] >= 12) {
            return str_replace("PM", "", $s);
        } else {

            return  date("G:i:s", strtotime($splitPM[0]) + 12 * 60 * 60);
        }
    }
}
