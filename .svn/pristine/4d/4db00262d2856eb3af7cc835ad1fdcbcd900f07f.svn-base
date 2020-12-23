<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="投放地点" prop="putPointId">
        <el-select v-model="queryParams.putPointId" filterable placeholder="请选择投放地点" @change="addressListchange">
          <el-option
            v-for="item in addressList"
            :key="item.index"
            :label="item.label"
            :value="item.index">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="margin-left: 100px" class="dddd">
        <el-button  style="margin-right: 15px" @click="sdxs">手动刷新</el-button>


        <el-dropdown @command="handleCommand" trigger="click">


          <progresse @progresses="progresses" :value="dingshi" :isOpen="isOpen" :loading="loading"></progresse>

          <el-dropdown-menu slot="dropdown" style="width: 100px" >
            <el-dropdown-item command="5000">5秒</el-dropdown-item>
            <el-dropdown-item command="10000">10秒</el-dropdown-item>
            <el-dropdown-item command="15000">15秒</el-dropdown-item>
            <el-dropdown-item command="30000">30秒</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

<!--        <span style="margin-left: 15px;color: #E65D6E">当前刷新周期为{{dingshi}}毫秒</span>-->


      </el-form-item>
    </el-form>
    <div class="monitoring-box">
      <div class="monitoring-box-top"></div>
      <div class="monitoring-box-box">

        <monitor :lists="item" v-for="item in getAllDeviceInfo" :loading="loading" :deviceinfos="deviceListinfo"></monitor>
      </div>
    </div>
  </div>
</template>

<script>
  import { listPutpoint } from "@/api/manage/putpoint";
  import { listDevice } from "@/api/manage/device";
  import { getAllDeviceInfoByCodes } from "@/api/service/query";
  import monitor from '@/views/components/devicemonitor/devicemonitor';
  // 一个走马灯
  // import progress from '@/views/components/progressbar/progressbar';
  import progresse from '@/views/components/progressbar/progressbar';

  export default {
    name: "device",
    components:{
      monitor,progresse
    },
    data(){
      return{
        // 查询条件
        queryParams:{
          putPointId:''
        },
        // 显示搜索条件
        showSearch: true,
        // 投放地点
        addressList:[],
        // 对应投放地点相应设备
        deviceList:[],
        deviceListinfo:[],
        loading:false,
        // 定时器
        dingshi:10000,
        // 是否进入定时
        isOpen:false,
        // 设备信息
        getAllDeviceInfo:[]
      }
    },
    created() {
      this.getddList()


    },
    methods:{
      // 请求投放地点
      getddList() {
        this.loading = true;
        listPutpoint().then(response => {
          let obj = {};
          let arr = [];
          for (let i = 0; i < response.rows.length; i++){
            obj={};
            obj.index =  response.rows[i].putPointId;
            obj.label = response.rows[i].pointName;
            arr.push(obj);
          }
          this.queryParams.putPointId = arr[0].index
          this.addressList = arr;
          this.getddshebList()
          this.loading = false;
        });
      },
      // 请求对应地点相应设备
      getddshebList(){
        let that = this
        that.deviceList = []
        that.deviceListinfo = []
        that.loading = true;
        that.isOpen = false
        listDevice(that.queryParams).then(response => {
          // that.deviceList = response.rows;
          // console.log(response,'8888')
          for (let i = 0 ; i < response.rows.length ; i++){
            that.deviceList.push(response.rows[i].deviceCode)

          }
          // console.log(that.deviceList,'9999')
          let obj = {
            deviceCode:'',
            deviceName:'',
          }
          for (let o = 0 ; o<response.rows.length ; o++){
            obj = {
              deviceCode:'',
              deviceName:'',
            }
            obj.deviceCode = response.rows[o].deviceCode
            obj.deviceName = response.rows[o].deviceName
            that.deviceListinfo.push(obj)
            // console.log(that.deviceListinfo,'9999')
          }
          // console.log(that.deviceListinfo,'100010')
          // console.log(that.deviceList,'请求对应地点相应设备')

          setTimeout(() => {
            that.getAllDeviceInfoByCode()
            that.isOpen = true
            that.loading = false;
          },100)

        });
      },
      // 请求设备完整信息
      getAllDeviceInfoByCode(){
        let that = this
        that.loading = true;
        that.isOpen = false
        getAllDeviceInfoByCodes({
          deviceCodes :that.deviceList
        }).then(response => {
          // console.log(response,'请求设备完整信息')
          that.isOpen = true
          that.loading = false;
          that.getAllDeviceInfo = response.data
          // console.log(that.getAllDeviceInfo)
        })
      },

      // 切换投放地点
      addressListchange(val){
        console.log(val)
        this.isOpen = false;
        this.queryParams.putPointId  = val
        this.getddshebList()
      },
      // 切换定时秒数
      handleCommand(command){
        // console.log()
        this.isOpen = false
        this.dingshi = Number(command)

        setTimeout(() => {
          this.isOpen = true
        },0)
      },
      // 子组件 循环了一次了
      progresses(){
        if (this.isOpen){
          // console.log('子组件 循环了一次了')
          // todo！！！！！
          this.getddshebList()
        }


      },
      // 手动刷新
      sdxs(){
        this.isOpen = false
        this.getddshebList()
        setTimeout(() => {
          this.isOpen = true
        },0)
      },
    }
  }
</script>

<style scoped>
  .el-form{ display: flex;justify-content: space-between }
  .monitoring-box-top{ width: 100%;border-bottom: 1px solid #ccc;padding: 5px 0px;box-sizing: border-box;margin-top: 10px }
  .monitoring-box-box{ padding: 10px ;box-sizing: border-box;display: flex;justify-content: flex-start;margin-top: 10px }
  .monitoring-box-box>*{ margin-right: 20px }
  .app-container >>> .dddd .el-form-item__content{ display: flex }
</style>
