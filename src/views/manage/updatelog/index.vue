<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="设备主键" prop="deviceId">
        <el-input
          v-model="queryParams.deviceId"
          placeholder="请输入设备主键"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="设备编号" prop="deviceCode">
        <el-input
          v-model="queryParams.deviceCode"
          placeholder="请输入设备编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="软件版本号" prop="versionCode">
        <el-input
          v-model="queryParams.versionCode"
          placeholder="请输入软件版本号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="升级结果" prop="updateSuccess">
        <el-input
          v-model="queryParams.updateSuccess"
          placeholder="请输入升级结果"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="失败原因" prop="failReasion">
        <el-input
          v-model="queryParams.failReasion"
          placeholder="请输入失败原因"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
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
          v-hasPermi="['manage:updatelog:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['manage:updatelog:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['manage:updatelog:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['manage:updatelog:export']"
        >导出</el-button>
      </el-col>
	  <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="updatelogList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="主键" align="center" prop="updateLogId" />
      <el-table-column label="设备主键" align="center" prop="deviceId" />
      <el-table-column label="设备编号" align="center" prop="deviceCode" />
      <el-table-column label="软件版本号" align="center" prop="versionCode" />
      <el-table-column label="升级结果" align="center" prop="updateSuccess" />
      <el-table-column label="失败原因" align="center" prop="failReasion" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['manage:updatelog:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['manage:updatelog:remove']"
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

    <!-- 添加或修改设备升级日志对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="设备主键" prop="deviceId">
          <el-input v-model="form.deviceId" placeholder="请输入设备主键" />
        </el-form-item>
        <el-form-item label="设备编号" prop="deviceCode">
          <el-input v-model="form.deviceCode" placeholder="请输入设备编号" />
        </el-form-item>
        <el-form-item label="软件版本号" prop="versionCode">
          <el-input v-model="form.versionCode" placeholder="请输入软件版本号" />
        </el-form-item>
        <el-form-item label="升级结果" prop="updateSuccess">
          <el-input v-model="form.updateSuccess" placeholder="请输入升级结果" />
        </el-form-item>
        <el-form-item label="失败原因" prop="failReasion">
          <el-input v-model="form.failReasion" placeholder="请输入失败原因" />
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
import { listUpdatelog, getUpdatelog, delUpdatelog, addUpdatelog, updateUpdatelog, exportUpdatelog } from "@/api/manage/updatelog";

export default {
  name: "Updatelog",
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
      // 设备升级日志表格数据
      updatelogList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        deviceId: null,
        deviceCode: null,
        versionCode: null,
        updateSuccess: null,
        failReasion: null
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
    /** 查询设备升级日志列表 */
    getList() {
      this.loading = true;
      listUpdatelog(this.queryParams).then(response => {
        this.updatelogList = response.rows;
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
        updateLogId: null,
        deviceId: null,
        deviceCode: null,
        versionCode: null,
        updateTime: null,
        updateSuccess: null,
        failReasion: null
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
      this.ids = selection.map(item => item.updateLogId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加设备升级日志";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const updateLogId = row.updateLogId || this.ids
      getUpdatelog(updateLogId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改设备升级日志";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.updateLogId != null) {
            updateUpdatelog(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addUpdatelog(this.form).then(response => {
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
      const updateLogIds = row.updateLogId || this.ids;
      this.$confirm('是否确认删除设备升级日志编号为"' + updateLogIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delUpdatelog(updateLogIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有设备升级日志数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportUpdatelog(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
