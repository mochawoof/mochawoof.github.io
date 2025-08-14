for ($i = 0; $i -le 377; $i++) {
	Invoke-WebRequest -Uri ("http://cdn.supersmashflash.com/ssf2/433c66e550884701aad475c2ff8a27fb7/data/DAT$i.ssf") -OutFile ("DAT$i.ssf")
}