<template>
    <div class="tab-control">
        <div class="tab-item"
             v-for="(item,index) in title"
             :class="{active:index === currentIndex}" :key="index" @click="tabClick(index)">
             <div>{{item.num}}</div>
            <div>{{item.name}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #ffffff;
    height: 3.44rem;
    font-size: .88rem
    }
    .tab-item{
        flex: 1;
    }
    .tab-item :first-child{
      font-weight: 600;
      margin-top: .72rem
    }
    .active
    {
        color: #1E87F0;
        border-bottom: 3px solid #1E87F0

    }
    .active span
    {
      padding: 0.44rem 0 .8rem 0;
    }
</style>