<template>
  <form class="form">
    <div class="container">
      <slot name="heading">
        <h1>Form</h1>
      </slot>
      <slot name="description">
        <p>Use this form to submit your data.</p>
      </slot>
      <hr />
      <slot name="fields">
        <p>Add form fields here.</p>
      </slot>
      <div class="clearfix">
        <slot name="actions">
          <button type="submit" class="actnbtn">Submit</button>
        </slot>
      </div>
      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form'
};
</script>
