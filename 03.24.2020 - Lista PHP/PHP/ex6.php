<?php
    $F = $_GET['fahrenheit'];
    $C = ( ($F - 32) * 5 ) / 9;

    echo $F, " F convertido em C é ",$C;
?>
