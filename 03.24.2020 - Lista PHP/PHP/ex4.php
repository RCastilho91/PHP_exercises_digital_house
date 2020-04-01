<?php
    $VA = $_GET['first-var'];
    $VB = $_GET['second-var'];

    echo "Em ordem, as variáveis eram ", $VA," (VA) e ",$VB," (VB)";

    $VT = $VA;
    $VA = $VB;
    $VB = $VT;

    echo "<p>Reorganizado, VA é ", $VA, ", VB é ", $VB," e a resposta pra tudo é 42.</p>";
?>
