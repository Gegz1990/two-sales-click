function exportToPDF() {
  const element = document.querySelector('.slideshow-container');
  html2pdf()
    .from(element)
    .set({
      filename: 'slideshow.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    })
    .save();
}