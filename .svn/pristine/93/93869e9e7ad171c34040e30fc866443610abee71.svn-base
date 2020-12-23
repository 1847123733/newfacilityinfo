<template>
    <div class="progresse-box">
      <span class="yuanl">
        定时刷新
      </span>
      <span class="xshi">{{avalue.value/1000}}秒</span>
      <div class="progresse-box-cont"></div>
    </div>
</template>

<script type="text/javascript">
  import $ from 'jquery'
  export default {
    name: "progressbar",
    props:{
      value:{
        type:Number,
        default: 10000
      },
      isOpen:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return{
        avalue : {
          value:this.value,
          isOpen:this.isOpen
        }
      }
    },
    watch:{
      isOpen(newVal,oldVal){
        if (newVal){
          this.avalue.isOpen = newVal
          this.csh()
        }else {
          $(".progresse-box-cont").stop(false, true);
        }
      },
      value(newVal,oldVal){
        this.avalue.value = newVal
        // console.log(newVal)

      }

    },
    methods:{
      dingshi(){
        let that = this;
        // console.log(that.avalue,'1')
        $('.progresse-box-cont').animate({
          width:"100%"
        },that.avalue.value,function () {
          that.$emit('progresses')
          $(this).css('width','0%')
          that.dingshi()
        })
      },
      csh(){
        let that = this;

        // console.log(that.avalue,'2');
        $('.progresse-box-cont').animate({
          width:"100%"
        },that.avalue.value,function () {
          that.$emit('progresses')
          $(this).css('width','0%')
          // that.dingshi()
        });
      }
    }
  }
</script>

<style scoped>
  .progresse-box{
    width: 98px;height: 36px;cursor: pointer;
    border: 1px solid #cccccc;border-radius: 5px;
    text-align: center;line-height: 36px;font-size: 14px;
    position: relative;overflow: hidden;
  }
  .progresse-box-cont{ position: relative;bottom: 3px;width: 0%;height: 2px;background-color: #20B2AA }
  .progresse-box:hover .xshi{
    display: block;
  }
  .progresse-box:hover .yuanl{
    display: none;
  }
  .xshi{ display: none }
</style>
