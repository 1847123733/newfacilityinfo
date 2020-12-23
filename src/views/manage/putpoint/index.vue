<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="82px">
      <el-form-item label="投放点名称" prop="pointName">
        <el-input
          v-model="queryParams.pointName"
          placeholder="请输入投放点名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
<!--      <el-form-item label="省" prop="provinceId">-->
<!--        <el-input-->
<!--          v-model="queryParams.provinceId"-->
<!--          placeholder="请输入省"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="市" prop="city">-->
<!--        <el-input-->
<!--          v-model="queryParams.city"-->
<!--          placeholder="请输入市"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="区" prop="area">-->
<!--        <el-input-->
<!--          v-model="queryParams.area"-->
<!--          placeholder="请输入区"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
      <el-form-item label="具体地点" prop="address">
        <el-input
          v-model="queryParams.address"
          placeholder="请输入具体地点"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="使用状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择使用状态" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
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
          v-hasPermi="['manage:putpoint:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['manage:putpoint:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['manage:putpoint:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['manage:putpoint:export']"
        >导出</el-button>
      </el-col>
	  <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="putpointList" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="序号" align="center" type="index" width="50" />
      <el-table-column label="投放点名称" align="center" prop="pointName" show-overflow-tooltip />
<!--      <el-table-column label="省" align="center" prop="provinceId" />-->
<!--      <el-table-column label="市" align="center" prop="city" />-->
<!--      <el-table-column label="区" align="center" prop="area" />-->
      <el-table-column label="具体地点" align="center" prop="address" show-overflow-tooltip />
      <el-table-column label="使用状态" align="center" prop="status" width="90"  show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.status === '1'">使用</span>
          <span v-if="scope.row.status === '0'">不使用</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" show-overflow-tooltip/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['manage:putpoint:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['manage:putpoint:remove']"
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

    <!-- 添加或修改设备投放地点对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="90px">
        <el-form-item label="投放点名称" prop="pointName">
          <el-input v-model="form.pointName" placeholder="请输入投放点名称" />
        </el-form-item>
<!--        <el-form-item label="省" prop="provinceId">-->
<!--          <el-input v-model="form.provinceId" placeholder="请输入省" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="市" prop="city">-->
<!--          <el-input v-model="form.city" placeholder="请输入市" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="区" prop="area">-->
<!--          <el-input v-model="form.area" placeholder="请输入区" />-->
<!--        </el-form-item>-->
        <el-form-item label="具体地点" prop="address">
          <el-input v-model="form.address" placeholder="请输入具体地点" />
        </el-form-item>
        <el-form-item label="使用状态">
          <el-radio-group v-model="form.status">
            <el-radio label="1">请选择字典生成</el-radio>
            <el-radio label="0">不使用</el-radio>
          </el-radio-group>
        </el-form-item>
<!--        <el-form-item label="删除标志" prop="delFlag">-->
<!--          <el-input v-model="form.delFlag" placeholder="请输入删除标志" />-->
<!--        </el-form-item>-->
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
import { listPutpoint, getPutpoint, delPutpoint, addPutpoint, updatePutpoint, exportPutpoint } from "@/api/manage/putpoint";

export default {
  name: "Putpoint",
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
      // 设备投放地点表格数据
      putpointList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        pointName: null,
        provinceId: null,
        city: null,
        area: null,
        address: null,
        status: null,
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
    /** 查询设备投放地点列表 */
    getList() {
      this.loading = true;
      listPutpoint(this.queryParams).then(response => {
        this.putpointList = response.rows;
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
        putPointId: null,
        pointName: null,
        provinceId: null,
        city: null,
        area: null,
        address: null,
        status: "0",
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
      this.ids = selection.map(item => item.putPointId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加设备投放地点";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const putPointId = row.putPointId || this.ids
      getPutpoint(putPointId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改设备投放地点";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.putPointId != null) {
            updatePutpoint(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addPutpoint(this.form).then(response => {
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
      const putPointIds = row.putPointId || this.ids;
      this.$confirm('是否确认删除设备投放地点编号为"' + putPointIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delPutpoint(putPointIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有设备投放地点数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportPutpoint(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
