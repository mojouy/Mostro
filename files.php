<?php
// Define the path to file
$file = 'files/Curriculum_Santiago_Mollajoli.pdf';

if(!file)
{
	die('file not found');
}
else
{
	header("Cache-Control: public");
	header("Content-Description: File Transfer");
	header("Content-Disposition: attachment; filename=Curriculum_Santiago_Mollajoli.pdf");
	header("Content-Type: application/pdf");
	header("Content-Transfer-Encoding: binary");

readfile($file);
}
?>