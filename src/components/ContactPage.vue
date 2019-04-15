<template>
  <div class="contactpage">
    <Menu />
    <div class="contactform">
      <div class="contactformcontent">
        <form novalidate class="md-layout" @submit.prevent="validateEmailForm">
        <span class='error-message'>{{errorMessage}}</span>
        <span v-if="emailSent" class='success-message'>Email Succesfully Sent</span>
        <div class="row">
          <div class="contactformitem half">
            <label>First Name</label>
            <input type="text" name="firstname" autocomplete="firstname" v-model="form.firstname" :disabled="sending" v-bind:class="{ error: !$v.form.firstname.required && submitClicked }" />
            <span class="error" v-if="!$v.form.firstname.required && submitClicked">First Name is required</span>
          </div>
          <div class="contactformitem half">
            <label>Last Name</label>
            <input type="text" name="lastname" autocomplete="lastname" v-model="form.lastname" :disabled="sending" v-bind:class="{ error: !$v.form.lastname.required && submitClicked }" />
            <span class="error" v-if="!$v.form.lastname.required && submitClicked">Last Name is required</span>
          </div>
        </div>
        <div class="row">
          <div class="contactformitem half">
            <label>Email</label>
            <input type="text" id="emailaddress" name="emailaddress" autocomplete="email-addresses" v-model="form.emailaddress" :disabled="sending" v-bind:class="{ error: (!$v.form.emailaddress.required || !$v.form.emailaddress.email ) && submitClicked }" />
            <span class="error" v-if="!$v.form.emailaddress.required && submitClicked">Email address is required</span>
            <span class="error" v-if="$v.form.emailaddress.required && !$v.form.emailaddress.email && submitClicked">Email address should be in valid format e.g john@example.com</span>
          </div>
          <div class="contactformitem half">
            <label>Phone Number</label>
            <input type="text" name="phoneno" value="" autocomplete="phoneno" v-model="form.phoneno" :disabled="sending" v-bind:class="{ error: !$v.form.phoneno.required && submitClicked }" />
            <span class="error" v-if="!$v.form.phoneno.required && submitClicked">Phone No is required</span>
          </div>
        </div>
        <div class="row">
          <div class="contactformitem half">
            <label>Company Name</label>
            <input type="text" name="companyname" autocomplete="companyname" v-model="form.companyname" :disabled="sending" v-bind:class="{ error: !$v.form.companyname.required && submitClicked }" />
            <span class="error" v-if="!$v.form.companyname.required && submitClicked">Company Name is required</span>
          </div>
          <div class="contactformitem half">
            <label>Your Title / Role</label>
            <input type="text" name="title" autocomplete="title" v-model="form.title" :disabled="sending" v-bind:class="{ error: !$v.form.title.required && submitClicked }" />
            <span class="error" v-if="!$v.form.title.required && submitClicked">Title is required</span>
          </div>
        </div>
        <div class="contactformitem full">
          <label>Your Message</label>
          <textarea name="message" autocomplete="message" v-model="form.message" :disabled="sending" v-bind:class="{ error: !$v.form.message.required && submitClicked }" />
          <span class="error" v-if="!$v.form.message.required && submitClicked">Message is required</span>
        </div>
        <input type="submit" value="Submit" class="submitButton" :disabled="sending" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import { validationMixin } from 'vuelidate'
import {sendEmail} from '../services/sendEmail'

import {
  required, email
} from 'vuelidate/lib/validators'

export default {
  name: 'Contact',
  mixins: [validationMixin],
  components: {
    Menu
  },
  mounted () {
    let vm = this;
    $(document).ready(function () {
      $('.submitButton').click(function () {
        vm.submitClicked = true;
      })
    })
  },
  data () {
    return {
      form: {
        firstname: null,
        lastname: null,
        emailaddress: null,
        phoneno: null,
        companyname: null,
        title: null,
        message: null
      },
      emailSent: false,
      sending: false,
      submitClicked: false,
      errorMessage: null
    }
  },
  validations: {
    form: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      emailaddress: {
        required,
        email
      },
      phoneno: {
        required
      },
      companyname: {
        required
      },
      title: {
        required
      },
      message: {
        required
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },

    clearForm () {
      this.$v.$reset()
      this.form.firstname = null
      this.form.lastname = null
      this.form.emailaddress = null
      this.form.phoneno = null
      this.form.companyname = null
      this.form.title = null
      this.form.message = null
    },

    sendEmail () {
      this.sending = true
      sendEmail(this.form).then(() => {
        this.emailSent = true
        this.sending = false
        this.errorMessage = null
        this.clearForm()
      }).catch(() => {
        this.emailSent = false
        this.sending = false
        this.errorMessage = 'Error occured while sending email. Please try again!'
      })
    },

    validateEmailForm () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sendEmail()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contactform{
  width: 90%;
  background: #fbfbff;
  margin: auto;
  margin-top: 140px;
}
.contactformcontent{
  margin: 0 10%;
  padding: 5% 0;
}
.row{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
}
input.error, textarea.error{
  border: 1px solid #f00 !important;
}
.contactformitem label, .contactformitem input, .contactformitem textarea{
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.contactformitem input, .contactformitem textarea{
  margin-bottom: 5px;
}
.contactformitem label{
  font-family: RaleWayBold;
  font-size: 14px;
  color: #2a2d34;
}
.contactformitem input{
  font-family: RaleWayBold;
  font-size: 14px;
  margin-top: 32px;
  height: 59px;
  border: solid 1px #000000;
  padding: 10px;
}
.contactformitem textarea{
  font-family: RaleWayBold;
  font-size: 14px;
  margin-top: 32px;
  height: 210px;
  border: solid 1px #000000;
  padding: 10px;
}
.submitButton{
  width: 100%;
  height: 63px;
  background-color: #000000;
  border: 1px solid #000;
  margin-top: 32px;
  color: #fff;
  font-family: LatoBlack;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.7px;
}
.half{
  width: 48%;
}
.full{
  width: 100%;
}
.error{
  font-family: LatoBlack;
  font-size: 13px;
}
@media only screen and (max-width: 600px) {
  .introduction .left, .introduction .right, .introduction .right img{
    width: 100%;
  }
  .row{
    flex-direction: column;
  }
  .half{
    width: 100%;
  }
  .half:first-child{
    margin-bottom: 32px;
  }
}
</style>
