<template>
    <div>
       <div :class="[ 'form-group', !!error && 'has-error' ]">
      <input 
        v-if="type === 'text'" 
        type="text"  
        :name="name"
        class="form-control" 
        @input="updateInput" 
        :value="modelValue"
        @blur="$emit('validate')"
        @keypress="$emit('validate')"
        autocomplete="off"
      />
      <input 
        v-if="type === 'password'" 
        type="password" 
        :name="name"
        class="form-control" 
        @input="updateInput"  
        :value="modelValue"
        @blur="$emit('validate')"
        @keypress="$emit('validate')"
        autocomplete="off"
      />
      <div v-if="prefix" class="input-group">
        <span class="input-group-text url-group-text">{{ prefix }}</span>
        <input 
          type="text" 
          class="form-control" 
          @input="updateInput" 
          :value="modelValue"
          autocomplete="off"
        />
      </div>
      <p class="form-input-hint" v-if="!!error">{{ error }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    prefix:String,
    name: { required: true },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: { required: true }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  width: 100%;
  max-width: 100%;
  padding: 0 15px;
  background: #f8f8f8;
  color: #000;
  border: 1px solid #ddd;
  font-size: 14px;
  height: 40px;
  border-radius: 7px;
  box-shadow: none;
  transition: none;
  font-weight: 200;
}
.input-group-text.url-group-text {
  border-color: transparent;
  background-color: #f8f8f8;
  font-size: 14px;
  color: #A4A4A4;
  font-weight: 100;
  padding: 8px 5px 8px 15px;
}
.form-input-hint{
  color: red;
}
</style>
