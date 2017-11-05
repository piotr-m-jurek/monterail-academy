<template>
<el-container>
  <el-header>
    <container>
      <slot name="header"/>
    </container>
  </el-header>
  <el-main>
    <container>
      <slot name="content"/>
    </container>
  </el-main>
</el-container>
  
</template>

<script>
import Container from './Container'
export default {
  components: {
    Container
  }
}
</script>
