<?php
    session_start();
    $useraddress = $_POST['input_address'];
    $_SESSION['user_address'] = $useraddress;
    header('Location: ./main.php');
?>
