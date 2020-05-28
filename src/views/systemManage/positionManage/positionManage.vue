<template>
    <div>
        <div>
            <el-select v-model="value1" clearable  placeholder="请选择职位种类">
                <el-option
                v-for="item in option1"
                :key="item.value1"
                :label="item.label1"
                :value="item.value1">
                </el-option>
            </el-select>
            <el-select v-model="value2" style="margin-left: 20px" clearable placeholder="请选择发布状态">
                <el-option
                v-for="item in option2"
                :key="item.value2"
                :label="item.label2"
                :value="item.value2">
                </el-option>
            </el-select>
             <el-button style="margin-left: 20px" type="primary" @click="queryList">查询</el-button>
             <el-button style="margin-left: 20px" type="success" @click="addPositionVisible = true">添加</el-button>
        </div>
        <div style="margin-top:20px">
            <el-table
                :data="tableData"
                v-loading="tableLoading"
                element-loading-text="拼命加载中"
                height="500"
                border>
                <el-table-column
                prop="buildTime"
                label="创建时间"
                />
                <el-table-column prop="positionSort" label="职位分类" />
                <el-table-column prop="positionName" label="职位名称" />
                <el-table-column prop="workExp" label="工作经验" />
                <el-table-column prop="education" label="学历" />
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <el-tag
                            disable-transitions
                            :type="scope.row.positionStatus === 1 ? 'success' : 'danger'">
                            {{scope.row.positionStatus === 1 ? '已发布' : '已下架'}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="operator" label="操作人" />
                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button @click="editPositionOption(scope.row)" type="text">编辑</el-button>
                    <el-button @click="deletePosition(scope.row)" type="text">删除</el-button>
                    <el-button @click="freezePosition(scope.row)" type="text">
                        {{scope.row.positionStatus === 0 ? '发布' : '下架'}}
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <add-Position v-model="addPositionVisible" />
        <edit-Position v-model="editPositionVisible" :positionData='rowData' />
    </div>
</template>

<script>
import addPosition from './addPosition'
import editPosition from './editPosition'

export default {
    components: {
        addPosition,
        editPosition
    },
    data () {
        return {
            addPositionVisible: false,
            editPositionVisible: false,
            rowData: null,
            tableData: null,
            tableLoading: false,
            option1: [
                {
                    value1: '选项1',
                    label1: '产品'
                }, {
                    value1: '选项2',
                    label1: '设计'
                }, {
                    value1: '选项3',
                    label1: '职能'
                }
            ],
            value1: '',
            option2: [
                {
                    value2: '选项1',
                    label2: '所有'
                }, {
                    value2: '选项2',
                    label2: '已发布'
                }, {
                    value2: '选项3',
                    label2: '已下架'
                }
            ],
            value2: ''
        }
    },
    created () {
        this.queryList()
    },
    methods: {
        queryList () {
            this.tableLoading = true
            this.$apis.positionList(
                this.queryParams
            ).then(res => {
                this.tableLoading = false
                if (res.code === 2000) {
                    this.tableData = res.data.positionDtos
                }
            }).catch(error => {
                this.tableLoading = false
                console.error(error.message)
            })
        },
        freezePosition (row) {
            if (row.positionStatus === 0) {
                this.$confirm(`确认发布${row.positionName}?`).then(_ => {
                    let params = {
                        operatorId: row.operatorId,
                        positionStatus: 1
                    }
                    this.$apis.updatePositionStatus(params).then(res => {
                        if (res.code === 2000) {
                            this.$message.success('发布成功')
                            this.queryList()
                        }
                    }).catch(error => {
                        console.error(error.message)
                    })
                }).catch(_ => {})
            } else {
                this.$confirm(`确认下架${row.positionName}?`).then(_ => {
                    let params = {
                        operatorId: row.operatorId,
                        operatorStatus: 0
                    }
                    this.$apis.updatePositionStatus(params).then(res => {
                        if (res.code === 2000) {
                            this.$message.success('下架成功')
                            this.queryList()
                        }
                    }).catch(error => {
                        console.error(error.message)
                    })
                }).catch(_ => {})
            }
        },
        deletePosition (row) {
            this.$confirm(`确认删除${row.positionName}?`).then(_ => {
                this.$apis.deletePosition({
                    operatorId: row.operatorId
                }).then(res => {
                    if (res.code === 2000) {
                        this.$message.success('删除成功')
                        this.queryList()
                    }
                }).catch(error => {
                    console.error(error.message)
                })
            }).catch(_ => {})
        },
        editPositionOption (row) {
            this.rowData = row
            this.editPositionVisible = true
        }
    }
}
</script>
