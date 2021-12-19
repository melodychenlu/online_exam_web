<template>

  <div>
    <el-tabs v-model="activeName"  type='card' @tab-click="handleClick">
      <el-tab-pane label="首页" name="first"></el-tab-pane>

      <el-tab-pane label="个人信息" name="second">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
          <el-form-item label="人员姓名" prop="name">
            <el-input v-model="formLabelAlign.name" style="width: 50%"></el-input>
          </el-form-item>
          <el-form-item label="人员工号" prop="number">
            <el-input v-model="formLabelAlign.number" style="width: 50%"></el-input>
          </el-form-item>
          <el-form-item label="部门名称" prop="department">
            <el-input v-model="formLabelAlign.department" style="width: 50%"></el-input>
          </el-form-item>
          <el-form-item label="主管领导" prop="leader">
            <el-input v-model="formLabelAlign.leader" style="width: 50%"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="formLabelAlign.phone" style="width: 50%"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit" style="margin-left:700px">确认提交</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="企业培训" name="third" style="width: 50%">



      </el-tab-pane>

    </el-tabs>


  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Personal",
  data() {
    return {
      activeName:'second',
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        number: '',
        department:'',
        leader:'',
        phone:''

      }
    };
  },

  rules:{
    name:[
      {require:true, message:'请输入姓名', trigger:'blur'}
    ],
    number:[
      {require:true, message:'请输入工号', trigger:'blur'}
    ],
    department:[
      {require:true, message:'请输入部门名称', trigger:'blur'}
    ],
    leader:[
      {require:true, message:'请输入直属领导名称', trigger:'blur'}
    ],
    phone:[
      {require:true, message:'请输入手机号码', trigger:'blur'}
    ]

  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
      },
    onSubmit(){
      axios.post('http://localhost:8081/userInfo/insert',{
        name:this.name,
        number:this.number,
        department:this.department,
        leader:this.leader,
        phone:this.phone
      }).then(function (response){
        console.log(response)
        alert('提交成功')
      })

    }
  }
}
</script>

<style scoped>

</style>