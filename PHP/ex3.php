<?php
    $criaturaUm = $_GET['first-person'];
    $criaturaDois = $_GET['second-person'];
    $idadeUm = $_GET['first-age'];
    $idadeDois = $_GET['second-age'];

    echo "A soma das idades de $criaturaUm e $criaturaDois é ", $idadeUm + $idadeDois;
?>  