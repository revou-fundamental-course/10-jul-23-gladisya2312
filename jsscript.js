
function calculateBMI(event) {
    event.preventDefault(); // Prevent form submission
  
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('result').innerHTML = 'Masukkan berat dan tinggi yang valid.';
      document.getElementById('bmiDescription').innerHTML = '';
      return;
    }
  
    var bmi = weight / Math.pow(height / 100, 2);
    var category;
  
    if (gender === 'male') {
      if (bmi < 18.5) {
        category = 'Kurus';
      } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
      } else if (bmi >= 25 && bmi < 30) {
        category = 'Gemuk';
      } else {
        category = 'Obesitas';
      }
    } else if (gender === 'female') {
      if (bmi < 18.5) {
        category = 'Kurus';
      } else if (bmi >= 18.5 && bmi < 24) {
        category = 'Normal';
      } else if (bmi >= 24 && bmi < 29) {
        category = 'Gemuk';
      } else {
        category = 'Obesitas';
      }
    }
  
    document.getElementById('result').innerHTML = 'BMI Anda: ' + bmi.toFixed(2) + ' (' + category + ')';
    document.getElementById('bmiDescription').innerHTML = getBMIDescription(category);
  }
  
  // Function to get BMI description
  function getBMIDescription(category) {
    switch (category) {
      case 'Kurus':
        return 'Anda termasuk dalam kategori kurus. Sebaiknya konsultasikan dengan dokter atau ahli gizi.';
      case 'Normal':
        return 'Anda termasuk dalam kategori berat badan normal. Pertahankan gaya hidup sehat!';
      case 'Gemuk':
        return 'Anda termasuk dalam kategori gemuk. Pertimbangkan untuk melakukan aktivitas fisik dan mengatur pola makan. BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.';
        case 'Overweight':
          return 'Anda termasuk dalam kategori overweight. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini makan Anda dianjurkan untuk menurunkan berat badan hingga batas normal. BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.';
        default:
          return '';
      }
    }
  