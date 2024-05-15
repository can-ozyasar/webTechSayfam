new Vue({
    el: '#app',
    data: {
      formData: {
        name: '',
        email: '',
        gender: '',
        contactPreference: '',
        hobbies: [],
        message: ''
      },
      submitted: false,
      vueValid: false,
      jsValid: false
    },
    computed: {
      validForm() {
        return this.vueValid && this.jsValid;
      }
    },
    methods: {
      submitForm() {
        // Form submit işlemi burada gerçekleştirilebilir
        // Bu örnekte sadece gönderilen bilgilerin görüntülenmesi sağlanmıştır
        this.submitted = true;
      },
      clearForm() {
        this.formData.name = '';
        this.formData.email = '';
        this.formData.gender = '';
        this.formData.contactPreference = '';
        this.formData.hobbies = [];
        this.formData.message = '';
        this.submitted = false;
        this.vueValid = false;
        this.jsValid = false;
      },
      vueValidation() {
        // Vue.js ile formun kontrolü burada gerçekleştirilebilir
        // Boş olup olmadığını kontrol etmek için formData'nın değerlerini kullanabiliriz
        this.vueValid = this.formData.name !== '' && this.formData.email !== '' && this.formData.gender !== '' && this.formData.contactPreference !== '' && this.formData.hobbies.length > 0 && this.formData.message !== '';
      },
      jsValidation() {
        // JavaScript ile formun kontrolü burada gerçekleştirilebilir
        // Örneğin, e-posta formatını kontrol edebiliriz
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.jsValid = emailPattern.test(this.formData.email);
      }
    }
  });
