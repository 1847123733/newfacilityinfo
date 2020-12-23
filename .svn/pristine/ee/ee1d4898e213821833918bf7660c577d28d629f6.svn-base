<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" >
      <el-form-item label="姓名" prop="personName">
        <el-input
          v-model="queryParams.personName"
          placeholder="请输入姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="personTel">
        <el-input
          v-model="queryParams.personTel"
          placeholder="请输入手机号"
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
          v-hasPermi="['business:personinfo:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['business:personinfo:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['business:personinfo:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['business:personinfo:export']"
        >导出</el-button>
      </el-col>
	  <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="personinfoList" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="序号" align="center" type="index" width="50" />
<!--      <el-table-column label="主键" align="center" prop="personId" />-->
      <el-table-column label="业主姓名" align="center" prop="personName"  width="90" show-overflow-tooltip/>
      <el-table-column label="手机号" align="center" prop="personTel" width="110" show-overflow-tooltip/>
      <el-table-column label="面部照片地址" align="center" prop="facephotoUrl"  show-overflow-tooltip/>
      <el-table-column label="详细地址" align="center" prop="address" show-overflow-tooltip />
      <el-table-column label="创建时间" align="center" prop="createTime" width="160" show-overflow-tooltip/>
      <el-table-column label="最近更新时间" align="center" prop="updateTime" width="160" show-overflow-tooltip/>
      <el-table-column label="是否有车" align="center" prop="haveCar" width="90" >
        <template slot-scope="scope">
          <el-tag  type="warning" v-if="scope.row.haveCar == false">无车</el-tag>
          <el-popover placement="top" trigger="hover"    v-if="scope.row.haveCar == true">
            <div class="look">
              <div>车牌号：
                <span v-if="scope.row.carNumber == '' ||scope.row.carNumber == null ">暂无车牌号信息</span>
                <span v-else>{{scope.row.carNumber}}</span>
              </div>
            </div>
            <el-tag slot="reference"  > 有车</el-tag>
          </el-popover>


        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" width="180" show-overflow-tooltip/>
      <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['business:personinfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['business:personinfo:remove']"
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

    <!-- 添加或修改业主信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="姓名" prop="personName">
          <el-input v-model="form.personName" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="personTel">
          <el-input v-model="form.personTel" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="面部照片地址" prop="facephotoUrl">
          <el-input v-model="form.facephotoUrl" placeholder="请输入面部照片地址" />
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入详细地址" />
        </el-form-item>
        <el-form-item label="是否有车" prop="haveCar">
            <el-radio-group v-model="form.haveCar">
              <el-radio :label="false">无车</el-radio>
              <el-radio :label="true">有车</el-radio>
            </el-radio-group>
<!--          <el-input v-model="form.delFlag" placeholder="请输入删除标志" />-->
        </el-form-item>
        <el-form-item label="车牌号" prop="carNumber" v-show="zt">
          <el-input v-model="form.carNumber"  placeholder="请输入车牌号" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入备注" />
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
import { listPersoninfo, getPersoninfo, delPersoninfo, addPersoninfo, updatePersoninfo, exportPersoninfo } from "@/api/business/personinfo";

export default {
  name: "Personinfo",
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
      // 业主信息表格数据
      personinfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        personName: null,
        personTel: null,
        facephotoUrl: null,
        address: null,
        haveCar: null,
      },
      // 表单参数
      form: {
        haveCar: false,
      },
      // 表单校验
      rules: {
      },
      zt:false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询业主信息列表 */
    getList() {
      this.loading = true;
      listPersoninfo(this.queryParams).then(response => {
        this.personinfoList = response.rows;
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
        personId: null,
        personName: null,
        personTel: null,
        facephotoUrl: null,
        address: null,
        haveCar: false,
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
      this.ids = selection.map(item => item.personId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加业主信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const personId = row.personId || this.ids
      getPersoninfo(personId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改业主信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.personId != null) {
            updatePersoninfo(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addPersoninfo(this.form).then(response => {
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
      const personIds = row.personId || this.ids;
      this.$confirm('是否确认删除业主信息编号为"' + personIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delPersoninfo(personIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有业主信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportPersoninfo(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  },
  watch:{
    "form.haveCar"(newValue){
      // console.log(newValue)
        if (newValue){
          this.zt = true
        }else {
          this.zt = false
        }
    }
  }
};
</script>
