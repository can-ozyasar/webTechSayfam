const app = new Vue({
    el: '#app',
    data: {
      formData: {
        name: '',
        surname: '',
        email: '',
        gender: '',
        contactPreference: '',
        hobbies: [],
        message: ''
      },
      submitted: false,
      validForm: false
    },
    methods: {
      clearForm() {
        this.formData = {
          name: '',
          surname: '',
          email: '',
          gender: '',
          contactPreference: '',
          hobbies: [],
          message: ''
        };
        this.submitted = false;
        this.validForm = false;
      },
      vueValidation() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
          this.formData.name &&
          this.formData.surname &&
          emailRegex.test(this.formData.email) &&
          this.formData.gender &&
          this.formData.contactPreference &&
          this.formData.hobbies.length > 0 &&
          this.formData.message
        ) {
          this.validForm = true;
        } else {
          this.validForm = false;
        }
      },
      jsValidation() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
          emailRegex.test(this.formData.email) &&
          this.formData.name &&
          this.formData.surname &&
          this.formData.gender &&
          this.formData.contactPreference &&
          this.formData.hobbies.length > 0 &&
          this.formData.message
        ) {
          this.validForm = true;
        } else {
          this.validForm = false;
        }
      },
       submitForm() {
        if (this.validForm) {
          const formData = new FormData();
          formData.append('name', this.formData.name);
          formData.append('surname', this.formData.surname);
          formData.append('email', this.formData.email);
          formData.append('gender', this.formData.gender);
          formData.append('contactPreference', this.formData.contactPreference);
          this.formData.hobbies.forEach(hobby => formData.append('hobbies[]', hobby));
          formData.append('message', this.formData.message);
      
          // Form verilerini yerel depolamaya kaydet
          localStorage.setItem('formData', JSON.stringify(this.formData));
      
          // Yeni sayfaya yönlendirme
          window.location.href = 'goster.html';
      
          // Formun gönderilmesi işlemi burada yapılabilir.
          fetch('iletisim.php', {
            method: 'POST',
            body: formData
          })
          .then(response => response.text())
          .then(data => {
            console.log(data); // PHP dosyasından gelen yanıtı konsola yazdırır
            this.submitted = true; // Form başarıyla gönderildiğinde submitted değerini true yapalım
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
      }
    }
  });
  