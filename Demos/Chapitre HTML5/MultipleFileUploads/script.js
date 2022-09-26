const fileCatcher = document.getElementById('file-catcher');
const fileInput = document.getElementById('file-input');
const fileListDisplay = document.getElementById('file-list-display');

let fileList = [];

fileCatcher.addEventListener('submit', function (evt) {
  evt.preventDefault();
  fileList.forEach(file => sendFile(file));
});

fileInput.addEventListener('change', function (evt) {
  fileList = [];
  for (var i = 0; i < fileInput.files.length; i++) {
    fileList.push(fileInput.files[i]);
  }
  renderFileList();
});

function renderFileList() {
  fileListDisplay.innerHTML = '';
  fileList.forEach(function (file, index) {
    var fileDisplayEl = document.createElement('p');
    fileDisplayEl.textContent = `(${index + 1}): ${file.name}`;
    fileListDisplay.appendChild(fileDisplayEl);
  });
};

function sendFile(file) {
  var formData = new FormData();
  var request = new XMLHttpRequest();

  formData.set('file', file);
  request.open("POST", 'https://jsonplaceholder.typicode.com/photos');
  request.send(formData);
};