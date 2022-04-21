<?php
	$a = $_GET["a"]; //get방식으로 전송받은 데이터를 $a변수에 저장
	$b = $_GET["b"];
	$c = $_GET["c"];
	$d = $_GET["d"];

	//echo($a); //$a변수의 값을 요청한 곳으로 보냄
	echo($a.$b.$c);
	//echo($c+$d);
?>