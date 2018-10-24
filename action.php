<?php
 $path = 'data.txt';
 echo $path;
 if (isset($_POST['field1']) && isset($_POST['field2'])) {
    $fh = fopen($path,"w");
    echo $fh;
    $string = $_POST['field2'].':'.$_POST['field1'];
    echo $string;
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
	echo exec('python action.py')
 }
?>
