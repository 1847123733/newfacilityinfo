<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="车牌号" prop="carNumber">
        <el-input
          v-model="queryParams.carNumber"
          placeholder="请输入车牌号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

      <el-form-item label="停车时间" prop="parkingTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.parkingTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择停车时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="cyan" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['business:illegalparking:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['business:illegalparking:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['business:illegalparking:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['business:illegalparking:export']"
        >导出</el-button>
      </el-col>
	  <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="illegalparkingList" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="序号" align="center" type="index" width="50" />
<!--      <el-table-column label="主键" align="center" prop="parkingId" />-->
      <el-table-column label="车牌号" align="center" prop="carNumber"  width="100" show-overflow-tooltip/>
      <el-table-column label="拍照" align="center" prop="parkingPhoto"  show-overflow-tooltip/>

      <el-table-column label="停车地点" align="center" prop="parkingAddress" show-overflow-tooltip/>
<!--      <el-table-column label="经度" align="center" prop="longitude" />-->
<!--      <el-table-column label="纬度" align="center" prop="latitude" />-->
      <el-table-column label="停车时间" align="center" prop="parkingTime" width="180" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.parkingTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="离开时间" align="center" prop="leaveTime" width="180" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.leaveTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark"  show-overflow-tooltip/>
      <el-table-column label="操作" align="center"  width="150" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['business:illegalparking:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['business:illegalparking:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改违停信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false" >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="车牌号" prop="carNumber">
          <el-input v-model="form.carNumber" placeholder="请输入车牌号" />
        </el-form-item>
        <el-form-item label="拍照" prop="parkingPhoto">
          <el-input v-model="form.parkingPhoto" placeholder="请输入拍照" />
        </el-form-item>

        <el-form-item label="停车地点" prop="parkingAddress">
          <el-input v-model="form.parkingAddress" placeholder="请输入停车地点" />
        </el-form-item>
        <el-form-item label="停车时间" prop="parkingTime">
          <el-date-picker clearable size="small" style="width: 200px"
                          v-model="form.parkingTime"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择停车时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="离开时间" prop="leaveTime">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.leaveTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择离开时间">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listIllegalparking, getIllegalparking, delIllegalparking, addIllegalparking, updateIllegalparking, exportIllegalparking } from "@/api/business/illegalparking";

export default {
  name: "Illegalparking",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 违停信息表格数据
      illegalparkingList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        carNumber: null,
        parkingPhoto: null,
        parkingTime: null,
        parkingAddress: null,
        longitude: null,
        latitude: null,
        leaveTime: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询违停信息列表 */
    getList() {
      this.loading = true;
      listIllegalparking(this.queryParams).then(response => {
        this.illegalparkingList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        parkingId: null,
        carNumber: null,
        parkingPhoto: null,
        parkingTime: null,
        parkingAddress: null,
        longitude: null,
        latitude: null,
        leaveTime: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.parkingId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加违停信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const parkingId = row.parkingId || this.ids
      getIllegalparking(parkingId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改违停信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.parkingId != null) {
            updateIllegalparking(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addIllegalparking(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const parkingIds = row.parkingId || this.ids;
      this.$confirm('是否确认删除违停信息编号为"' + parkingIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delIllegalparking(parkingIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有违停信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportIllegalparking(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
