<template>
    <div class="yell">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
// 暴露组件的配置对象 省略Vue.extend()
     export default {
        name: 'School',
        data() {
            return {
                schoolName:'清华大学',
                address:'北京市海淀区双清路30号'
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        },
    }
   
</script>

<style>
    .yell {
        background-color: aqua;
    }
</style>
