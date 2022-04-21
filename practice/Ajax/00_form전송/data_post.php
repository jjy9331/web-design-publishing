<?php
	$a = $_POST["a"]; //POST방식으로 전송된 name="a"값을 받아 변수$a에 저장
	$b = $_POST["b"]; //POST방식으로 전송된 name="b"값을 받아 변수$b에 저장
	$c = $_POST["c"]; //POST방식으로 전송된 name="c"값을 받아 변수$c에 저장

	echo($a+$b+$c); //$a+$b+$c결과 값을 출력
?>