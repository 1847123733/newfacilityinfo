<template>
    <div class="devicemonitor-box" v-loading="loading" >
      <div class="devicemonitor-box-fo1">
        <div class="devicemonitor-box-fo1-leth">
          {{list.deviceCode |roding(deviceinfo) }}
        </div>
        <div class="devicemonitor-box-fo1-rgt">
          <el-tooltip content="手动刷新" placement="top" effect="light"  >
            <i class="el-icon-refresh"  ></i>
          </el-tooltip>
          <el-tooltip content="查看图片" placement="top" effect="light">
            <i class="el-icon-picture-outline"  ></i>
          </el-tooltip>
          <el-tooltip content="快捷控制面板" placement="top" effect="light">
            <i class="el-icon-postcard"  ></i>
          </el-tooltip>

            <el-popover
              placement="right-start"
              width="160"
              trigger="hover"
              title="远程控制">
              <div>
                <div>运维管理:</div>
                <div class="yuancml" id="yuancml">
                  <el-radio-group v-model="resource">
                    <el-radio   :label="1">重启</el-radio>
                    <el-radio   :label="2">关机</el-radio>
                  </el-radio-group>
                </div>

              </div>
              <div style="text-align: right; margin: 0">
<!--                <el-button size="mini" type="text" @click="visible = false">取消</el-button>-->
                <el-button type="primary" size="mini" @click="visibles">下发</el-button>
              </div>
              <i slot="reference" class="el-icon-sold-out" ></i>
            </el-popover>
<!--          </el-tooltip>-->

        </div>
      </div>
      <div class="devicemonitor-box-fo2">
        <div class="devicemonitor-box-fo2-box">
          <el-image style="width: 100%;height: 170px"
                    :src="list.deviceWarningInfo.ImageUrl" ></el-image>
          <div class="zz cur">
            {{list.deviceCode}}
          </div>
          <el-tooltip content="点击抓拍" placement="right-end" effect="light"  >
            <div class="pp cur">
              <i class="el-icon-camera" style="font-size: 25px"></i>
            </div>
          </el-tooltip>

          <el-tooltip content="点击进入监控" placement="right-end" effect="light"  >
            <div class="kjann">
              <i class="el-icon-video-play" style="font-size: 50px;color: wheat"></i>
            </div>
          </el-tooltip>


        </div>

      </div>
      <div class="devicemonitor-box-fo3">
        <div class="devicemonitor-box-fo3-leth">
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>设备状态</span>
            <span v-if="list.deviceStateInfo.NetState  == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">在线</span>
            <span v-if="list.deviceStateInfo.NetState  == 2" class="devicemonitor-box-fo3-leth-zt zt-yc">离线</span>
            <span v-if="list.deviceStateInfo.NetState  == 0" class="devicemonitor-box-fo3-leth-zt zt-wz">未知</span>

          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>休眠状态</span>
            <span v-if="list.deviceStateInfo.DormancyState  == 1" class="devicemonitor-box-fo3-leth-zt zt-yc">休眠中</span>
            <span v-if="list.deviceStateInfo.DormancyState  == 2" class="devicemonitor-box-fo3-leth-zt zt-zc">未休眠</span>
            <span v-if="list.deviceStateInfo.DormancyState  == 0" class="devicemonitor-box-fo3-leth-zt zt-wz">未知</span>

          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>故障状态</span>
            <span v-if="list.deviceStateInfo.FaultState  == 1" class="devicemonitor-box-fo3-leth-zt zt-yc">有故障</span>
            <span v-if="list.deviceStateInfo.FaultState  == 2" class="devicemonitor-box-fo3-leth-zt zt-zc">无故障</span>
            <span v-if="list.deviceStateInfo.FaultState  == 0" class="devicemonitor-box-fo3-leth-zt zt-wz">未知</span>

<!--            <span class="devicemonitor-box-fo3-leth-zt zt-zc">未知</span>-->
          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>故障码</span>

<!--            <span v-if="list.deviceStateInfo.FaultCode  == 1" class="devicemonitor-box-fo3-leth-zt zt-yc">有故障</span>-->
<!--            <span v-if="list.deviceStateInfo.FaultCode  == 2" class="devicemonitor-box-fo3-leth-zt zt-zc">无故障</span>-->
<!--            <span v-if="list.deviceStateInfo.FaultCode  == 0" class="devicemonitor-box-fo3-leth-zt zt-wz">未知</span>-->
            <span class="devicemonitor-box-fo3-leth-zt ">{{list.deviceStateInfo.FaultCode}}</span>
          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>预警状态</span>
            <span v-if="list.deviceStateInfo.WarningState  == 1" class="devicemonitor-box-fo3-leth-zt zt-yc">有预警</span>
            <span v-if="list.deviceStateInfo.WarningState  == 2" class="devicemonitor-box-fo3-leth-zt zt-zc">无预警</span>
            <span v-if="list.deviceStateInfo.WarningState  == 0" class="devicemonitor-box-fo3-leth-zt zt-wz">未知</span>
          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>预警码</span>
            <span class="devicemonitor-box-fo3-leth-zt ">{{list.deviceStateInfo.WarningCode}}</span>
          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>设备离线原因</span>
            <span v-if="list.deviceStateInfo.OfflineReason  == 1" class="devicemonitor-box-fo3-leth-zt zt-yc">断网</span>
            <span v-if="list.deviceStateInfo.OfflineReason  == 2" class="devicemonitor-box-fo3-leth-zt zt-yc">重启</span>
            <span v-if="list.deviceStateInfo.OfflineReason  == 3" class="devicemonitor-box-fo3-leth-zt zt-yc">断电</span>
            <span v-if="list.deviceStateInfo.OfflineReason  == 4" class="devicemonitor-box-fo3-leth-zt zt-yc">升级</span>
            <span v-if="list.deviceStateInfo.OfflineReason  == 255" class="devicemonitor-box-fo3-leth-zt zt-yc">其他</span>
            <span v-if="list.deviceStateInfo.OfflineReason  == 0" class="devicemonitor-box-fo3-leth-zt zt-wz">未知</span>
          </div>
          <div class="devicemonitor-box-fo3-leth-box ">
            <span>电池剩余电量</span>
            <span v-if="list.deviceStateInfo.CurrentPower  >= 80" class="devicemonitor-box-fo3-leth-zt zt-zc ">{{list.deviceStateInfo.CurrentPower}}%</span>
            <span v-else-if="list.deviceStateInfo.CurrentPower  >= 60" class="devicemonitor-box-fo3-leth-zt zt-yc">{{list.deviceStateInfo.CurrentPower}}%</span>
            <span v-else class="devicemonitor-box-fo3-leth-zt zt-wz">{{list.deviceStateInfo.CurrentPower}}%</span>
<!--            <span class="devicemonitor-box-fo3-leth-zt"></span>-->
          </div>
        </div>
        <el-divider  direction="vertical"></el-divider>
        <div class="devicemonitor-box-fo3-rht">
          <div  class="cur gnb">
            <el-popover
              placement="right-start"
              width="160"
              trigger="hover"
              title="功能包状态">
              <div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>电量监测:</span>
                  <span v-if="list.devicePackageInfo.BatteryMonitor == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.BatteryMonitor == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>人体检测:</span>
                  <span v-if="list.devicePackageInfo.BodyRecogniton == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.BodyRecogniton == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>设备控制:</span>
                  <span v-if="list.devicePackageInfo.DeviceControl == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.DeviceControl == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>显示设置:</span>
                  <span v-if="list.devicePackageInfo.DisplaySetting == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.DisplaySetting == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>错误监测:</span>
                  <span v-if="list.devicePackageInfo.FaultMonitor == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.FaultMonitor == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>本地服务器:</span>
                  <span v-if="list.devicePackageInfo.LocalServer == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.LocalServer == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>模式管理:</span>
                  <span v-if="list.devicePackageInfo.ModeManagement == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.ModeManagement == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>导航:</span>
                  <span v-if="list.devicePackageInfo.Navigation == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.Navigation == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>远程控制:</span>
                  <span v-if="list.devicePackageInfo.RemoteControl == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.RemoteControl == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>通用模块:</span>
                  <span v-if="list.devicePackageInfo.RobotCommon == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.RobotCommon == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>任务管理:</span>
                  <span v-if="list.devicePackageInfo.TaskManagement == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.TaskManagement == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
                <div class="devicemonitor-box-fo3-leth-box ">
                  <span>语音交互:</span>
                  <span v-if="list.devicePackageInfo.VoiceInteraction == 1" class="devicemonitor-box-fo3-leth-zt zt-zc">正常</span>
                  <span v-if="list.devicePackageInfo.VoiceInteraction == 0" class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>
                </div>
              </div>
              <div class="devicemonitor-box-fo3-leth-box " slot="reference">
                <span>功能包状态</span>
                <span class="devicemonitor-box-fo3-leth-zt " :class="gnbzt ? 'zt-zc' : 'zt-yc'">{{gnbzt ? '正常' : '异常'}}</span>
<!--                <span class="devicemonitor-box-fo3-leth-zt zt-yc">异常</span>-->
              </div>
            </el-popover>
          </div>
          <div  class="yd" style="font-size: 14px">
            <div>运动状态：</div>
            <div style="padding: 10px 0px 0px 15%;box-sizing: border-box">
              <div>
                <span>基础运动方向：</span>
                <span v-if="list.deviceMotionInfo.Direction == 0">停止</span>
                <span v-if="list.deviceMotionInfo.Direction == 1">前进</span>
                <span v-if="list.deviceMotionInfo.Direction == 2">后退</span>
                <span v-if="list.deviceMotionInfo.Direction == 3">左转</span>
                <span v-if="list.deviceMotionInfo.Direction == 4">右转</span>
              </div>
              <div>
                <span>基础运动速度：</span>
                <span v-if="list.deviceMotionInfo.Direction == 0 || list.deviceMotionInfo.Direction == 1  ||list.deviceMotionInfo.Direction == 2 ">{{list.deviceMotionInfo.Speed}}m/s</span>
                <span v-if="list.deviceMotionInfo.Direction == 3 || list.deviceMotionInfo.Direction == 4 ">{{list.deviceMotionInfo.Speed}}rad/s</span>
              </div>

            </div>

          </div>
          <div class="yd" style="font-size: 14px">
            <div>
              <div>上次更新时间:</div>
              <div style="padding: 10px 0px 0px 15%;box-sizing: border-box">{{list.deviceMotionInfo.LastUpdateTime}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="devicemonitor-box-fo4">
        <div class="devicemonitor-box-fo3-leth-box ">
          <span>硬件版本号</span>
          <span class="devicemonitor-box-fo3-leth-zt">V{{list.deviceStateInfo.HwVersion}}</span>
        </div>
        <div class="devicemonitor-box-fo3-leth-box ">
          <span>软件版本号</span>
          <span class="devicemonitor-box-fo3-leth-zt">V{{list.deviceStateInfo.SwVersion}}</span>
        </div>
        <div class="devicemonitor-box-fo3-leth-box ">
          <span>上次更新时间</span>
          <span class="devicemonitor-box-fo3-leth-zt">{{list.deviceStateInfo.LastUpdateTime}}</span>
        </div>

      </div>
    </div>
</template>

<script>
  export default {
    name: "devicemonitor",
    props:{
      lists:{
        type:Object ,
        default(){
          return {}
        }
      },
      loading:{
        type:Boolean,
        default (){
          return false
        }
      },
      deviceinfos:{
        type:Array,
        default (){
          return []
        }
      }
    },
    data(){
      return{
        resource:1,
        deviceinfo:this.deviceinfos,
        list:this.lists
      }
    },
    created() {
      this.deviceinfo = this.deviceinfos
      this.list = this.lists
    },
    watch:{
      deviceinfos(newVal,oldVal){
        if (newVal){
          this.deviceinfo = this.deviceinfos
        }
      },
      lists(newVal,oldVal){
        if (newVal){
          this.list = this.lists
        }
      }

    },
    methods:{
      // 下发命令
      visibles(){
        this.msgSuccess("命令成功");
        console.log(this.list,'当前数据')
      }
    },
    computed:{
      gnbzt(){
        let arr =  Object.values(this.lists.devicePackageInfo)
         arr.forEach((item, index, array) => {
            if (item === 0){
              return false
            }else {
              return true
            }
          });
      },
      deviceCode(){
        if (this.deviceinfos.length == 0 ||  this.lists.length == 0) return
        else {
          let obj =  this.deviceinfos.filter((item, index, array) => {
            return item.deviceCode == this.lists.deviceCode
          });
          return obj[0].deviceName
        }
      }
    },
    filters:{
      roding(val,deviceinfo){
        console.log(val,deviceinfo)
        if (deviceinfo.length == 0)return
        let arr = deviceinfo.filter(item =>  item.deviceCode == val )
        console.log(arr)
        return arr[0].deviceName
      }
    }
  }
</script>

<style scoped>
  .devicemonitor-box{
    border: 1px solid #cccccc;border-radius: 10px;
    width: 24%;height: 500px;
    padding: 10px 15px;box-sizing: border-box;
    display: flex;flex-direction: column;
    min-width: 352px;
  }
  .devicemonitor-box-fo1{ display: flex;justify-content: space-between }
  .devicemonitor-box-fo1-rgt>*{ margin-right: 5px }
  .devicemonitor-box-fo2{ width: 100% }
  .devicemonitor-box-fo3{ height: 200px;display: flex;justify-content: space-between;border-bottom:1px solid #cccccc;  }
  .devicemonitor-box-fo3-leth{ width: 50%;display: flex;flex-direction: column;justify-content: space-between }
  .devicemonitor-box-fo3-rht{ width: 50%;display: flex;flex-direction: column;justify-content: space-around }
  .el-divider{ height: 100%;background-color: black;width: 2px }
  .devicemonitor-box-fo3-leth-box{ display: flex;justify-content: space-between;font-size: 14px;height: 15px;line-height: 15px }
  .devicemonitor-box-fo4{ flex: 1;padding: 10px 0px;box-sizing: border-box;display: flex;flex-direction: column;justify-content: space-between }
  .el-radio-group{ display: flex;flex-direction: column }
  .yuancml{ padding: 5px 15px; box-sizing: border-box; }
  .cur{ cursor: pointer; }
  .devicemonitor-box-fo2-box{ position: relative; }
  .devicemonitor-box-fo2-box:hover .kjann{ display: block }
  .zz{
    position: absolute;bottom: 10px;right: 5px;
    padding: 10px 15px;box-sizing: border-box;
    background-color: #ffba00;border-radius: 5px;
  }
  .pp{
    position: absolute;top: 10px;right: 10px;
    padding: 6px 20px;box-sizing: border-box;
    background-color: rgb(247,226,49);border-radius: 5px;
  }
  .kjann{
    position: absolute;top: 50%;left: 50%;transform:translate(-50%,-50%);display: none;
  }

  .zt-zc{ position:relative }
  .zt-zc::after{
    top: 3px;
    left: -11px;
    width: 10px;
    height: 10px;
    position: absolute;
    content: "";
    background-color: lawngreen;
    border-radius: 10px;
  }
  .zt-wz{ position:relative }
  .zt-wz::after{
    top: 3px;
    left: -11px;
    width: 10px;
    height: 10px;
    position: absolute;
    content: "";
    background-color: #777777;
    border-radius: 10px;
  }
  .zt-yc{ position:relative }
  .zt-yc::after{
    top: 3px;
    left: -11px;
    width: 10px;
    height: 10px;
    position: absolute;
    content: "";
    background-color: #E65D6E;
    border-radius: 10px;
  }
</style>
