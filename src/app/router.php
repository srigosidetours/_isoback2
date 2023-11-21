<?php

// Enrutamiento
$paginaActual = 'app/pages/Inicio.php';

$paginas = ['inicio', 'acercade', 'contacto'];

$menu='';
foreach($paginas as $pagina){
    $menu.= "<a href='index.php?pagina={$pagina}'>{$pagina}</a><br>";
}

if(isset($_GET['pagina'])) {
  if(in_array($_GET['pagina'], $paginas)) {
    $paginaActual = "app/pages/{$_GET['pagina']}.php";
  }
}
