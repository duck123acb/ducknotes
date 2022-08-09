const textbox = document.getElementById("text");
const downloadBtn = document.getElementById("download");

function download() {
	var myFile = new File([textbox.value], "notes.txt", {type: "text/plain;charset=utf-8"});
    saveAs(myFile);
}

function upload() {
    let fr = new FileReader();
	fr.addEventListener('load', (event) => {
    	textbox.value = event.target.result;
  	});
}

uploadBtn.addEventListener("change", function () {
	upload();
});

downloadBtn.addEventListener("click", function() {
	download();
});
