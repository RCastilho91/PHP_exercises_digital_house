<?php
    $inSeconds = $_GET['segundos'];

    function overAnHour($seconds) {
        $conversionHours = $seconds / 3600;
        $rest = $seconds % 3600;
        
        $conversionMinutes = $rest / 60;
        
        $conversionSeconds = $rest % 60;
        
        echo $seconds, " segundos se convertem em ",floor($conversionHours), " horas, ", floor($conversionMinutes), " minutos e ", $conversionSeconds," segundos.";
    }
    
    function lessThanAnHour($seconds) {
        $conversionMinutes = $seconds / 60;
        $conversionSeconds = $seconds % 60;
        
        echo $seconds, " segundos se convertem em ", floor($conversionMinutes), " minutos e ", $conversionSeconds," segundos.";
    }
    
    function justSeconds($seconds) {
        if($seconds == 1){
            echo "Um segundo é um segundo, oras! Tente alguma coisa maior do que 60!";
        } else {
            echo $seconds, " segundos são ", $seconds, " segundos, oras! Tente alguma coisa maior do que 60!";
        }
    }
    
    if ($inSeconds >= 3600) {
        overAnHour($inSeconds);
    } elseif ($inSeconds < 3600 & $inSeconds >= 60) {
        lessThanAnHour($inSeconds);
    } else {
        justSeconds($inSeconds);
    }
?>
