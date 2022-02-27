<template>
    <div>
        <h2>学生姓名：{{ stuName }}</h2>
        <h2>学生班级：{{ stuClass }}</h2>
        <button @click="showStuClass">点我提示学生班级</button>
    </div>
</template>

<script>
// 暴露组件的配置对象 省略Vue.extend()
     export default {
        name: 'Student',
        data() {
            return {
                stuName:'张三',
                stuClass:'高三一班'
            }
        },
        methods: {
            showStuClass() {
                alert(this.stuClass)
            }
        },
    }
   
</script>
