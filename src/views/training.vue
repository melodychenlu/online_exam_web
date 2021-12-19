<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
      <el-form-item label="人员姓名" prop="name">
        <el-input v-model="formLabelAlign.name" style="width: 50%"></el-input>
      </el-form-item>

      <el-button type="primary" @click="onSubmit" style="margin-left:700px">确认提交</el-button>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "training"
}
</script>

<style scoped>

</style>