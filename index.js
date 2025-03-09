function uploadFile() {
  let fileInput = document.getElementById("fileInput");
  let message = document.getElementById("message");

  if (fileInput.files.length > 0) {
    message.innerHTML =
      '<span class="text-success">File uploaded successfully!</span>';
  } else {
    message.innerHTML =
      '<span class="text-danger">Please select a file first.</span>';
  }
}