<?php

     $valor = $_GET['that-float'];

    if ($valor != floor($valor)){
        echo "A conversão pra inteiro é ",floor($valor);
   } else {
       echo "Favor colocar um número não inteiro";
    }
?>