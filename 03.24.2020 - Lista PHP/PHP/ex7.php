<?php
    $dist = $_GET['distancia'];
    $consum = $_GET['consumo'];
    $price = $_GET['gasolina'];

    echo "O custo da viagem será de R$", ($dist / $consum) * $price;
?>
