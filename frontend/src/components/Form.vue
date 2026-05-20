<template>
  <form class="form">
    <slot name="heading"><h1>Form</h1></slot>
    <slot name="description"><p>Use this form to submit your data.</p></slot>
    <slot name="fields"></slot>
    <div class="clearfix">
      <slot name="actions">
        <button type="submit" class="actnbtn">Submit</button>
      </slot>
    </div>
    <div class="extra">
      <slot name="extra"></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form'
};
</script>
