<template>
  <div>
    <div class="login-form">
      <div class="text-center">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn" :class="{ 'btn-primary' : !isActive}" @click="handleClick">SignUp</button>
          <button type="button" class="btn" :class="{ 'btn-primary' : isActive}" @click="handleClick">Login</button>
        </div>
      </div>
      <!--Sign Up-->
      <div class="tab" :class="{ active: !isActive}">
        <form 
        @submit="signupValidate"
        autocomplete="off"
        >
        <div class="col-md-12">
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <Input 
              type='text' 
              v-model="values.email" 
              name="email"
              @validate="validate('email')"
              :error="errors.email"
            />
            <!-- <p class="text-danger">{{errors.email}}</p> -->
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1" class="form-label">Username</label>
            <Input 
              prefix='Vizzual.io' 
              v-model="values.url" 
              name="url"
            />
          </div>
        </div>   
        <div class="col-md-12">
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <Input 
              type='password' 
              v-model="values.password"
              @validate="validate('password')"
              name="password"
              :error="errors.password"
            />
          </div>
          <!-- <p class="text-danger">{{errors.password}}</p> -->
        </div>
        <div class="col-md-12 text-center">
          <button class="btn btn-theme">Sign Up</button>
        </div>
        </form>
      </div>      
      <!--Login-->
      <div class="tab" :class="{ active: isActive}">
        <div class="mt-5 alert alert-warning text-center" role="alert">
        We upgraded our system. If you face problems logging in, please  <a href="https://vizzual.io/forgotpassword" class="text-decoration-underline">reset your password</a>.
        </div>
        <form 
          @submit="loginValidate"
          autocomplete="off"
        >
        <div class="col-md-12">
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <Input 
              type='text' 
              v-model="values.loginemail" 
              name="loginemail"
              @validate="validate('loginemail')"
              :error="errors.loginemail"
            />
          </div>
        </div>      
        <div class="col-md-12">
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <Input 
              type='password' 
              v-model="values.loginpassword"
              name="loginpassword"
              @validate="validate('loginpassword')"
              :error="errors.loginpassword"
            />
          </div>
        </div>
        <div class="col-md-12 text-center">
          <button class="btn btn-theme">Login</button>
        </div>
        </form>
      </div>      
    </div>
  </div>
</template>

<script>
import Input from '../Input'
import loginFormSchema from '../../helpers/signupValidSchema'

export default {
  name: 'SignUp',
  components: {
    Input,
  },
  data() {
    return {
      errors:{
        email:'',
        password:'',
        loginemail:'',
        loginpassword:''
      },
      isActive: true,
      values: {
        email:'',
        password:'',
        url:'',
        loginemail:'',
        loginpassword:''
      }
    }
  },
  methods: {
    handleClick () {
      this.isActive = !this.isActive
    },
    signupValidate: function (e) {
      e.preventDefault();
      loginFormSchema
      .validate(this.values, { abortEarly: false })
      .then(
        alert('success')
      )
      .catch(err => {
        err.inner.forEach(error => {
          this.errors = { ...this.errors, [error.path]: error.message };
        });
      });
    },
    loginValidate: function (e) {
      e.preventDefault();
      loginFormSchema
      .validate(this.values, { abortEarly: false })
      .then()
      .catch(err => {
        err.inner.forEach(error => {
          this.errors = { ...this.errors, [error.path]: error.message };
        });
      });
    },
     validate(field) {
      loginFormSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch(err => {
          this.errors[err.path] = err.message;
        });
    }
  }

}
</script>

<style>
html,body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.login-form{
  max-width: 450px;
  margin: 0 auto;
  padding: 30px 0;
}
.btn-theme{
  background: linear-gradient(180deg, #ff534f 0%, #ff534f 100%);
  min-width: 170px !important;
  font-size: 20px;
  line-height: 20px;
  font-weight: 800;
  padding: 10px 12px;
  color: #fff;
}
.btn-group .btn{
  border: none;
  display: inline-block;
  color: #a4a4a4;
  background: #efeff1;
  font-size: 14px;
  line-height: 14px;
  padding: 9px 12px;
  min-width: 85px;
}
.btn-group .btn:focus{
  box-shadow: none;
}
.btn-group .btn.btn-primary{
  background: #4d21ff;
  color: #fff;
}
.btn-group .btn:first-child{
  border-radius: 25px 0 0 25px;
}
.btn-group .btn:last-child  {
  border-radius: 0 25px 25px 0;
}
.tab{
  display: none;
}
.tab.active{
  display: block;
}
.has-error .form-control{
  border-color: #ff534f;
}
</style>
