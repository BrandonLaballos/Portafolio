function downloadImage() {
    const url = '../images/img-cv.jpg';
  
    const enlace = document.createElement('a');
    enlace.href = url;
  
    enlace.setAttribute('download', 'CV-Brandon-Laballos.jpg');
  
    document.body.appendChild(enlace);
  
    enlace.click();
  
    document.body.removeChild(enlace);
  }