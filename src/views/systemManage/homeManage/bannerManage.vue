<template>
    <div>
        <div>
            <el-button style="margin-left: 20px" type="success" @click="addBannerVisible=true">添加</el-button>
            <el-button style="margin-left: 20px" type="success" @click="sequenceBannerVisible=true">排序</el-button>
        </div>
        <div style="margin-top:20px">
            <el-table
                id="table"
                row-key="id"
                :data="tableData"
                v-loading="tableLoading"
                element-loading-text="拼命加载中"
                :default-sort="{prop: 'sortNum', order: 'ascending'}"
                height="500px"
                border>
                <el-table-column prop="buildTime" label="创建时间" />
                <el-table-column label="类型">
                    <template slot-scope="scope">
                            <el-tag
                                disable-transitions
                                :type= "type">
                                {{scope.row.bannerSort === 1 ? '视频' : '图片'}}
                            </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="图片/封面图">
                    <template slot-scope="scope">
                            <el-image
                                v-if="scope.row.bannerSort === 0"
                                :fit="fit"
                                :src="scope.row.image_or_video">
                            </el-image>
                            <el-image
                                v-if="scope.row.bannerSort === 1"
                                :fit="fit"
                                :src="getImageUrl(scope.row.image_or_video)">
                            </el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="linkPlace" label="关联链接/视频地址">
                </el-table-column>
                <el-table-column prop="operator" label="操作人" />
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="editBannerOption(scope.row)" type="text">编辑</el-button>
                        <el-button @click="visitBanner(scope.row)" type="text">查看</el-button>
                        <el-button @click="deleteBanner(scope.row)" type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <addBanner v-model="addBannerVisible" />
        <sequenceBanner v-model="sequenceBannerVisible" />
        <editBanner v-model="editBannerVisible" :dialogData='rowData'/>
        <visitBanner v-model="visitBannerVisible" :visitData='rowData'/>
    </div>
</template>
<script>
import Sortable from 'sortablejs'
import addBanner from './addBannerDialog'
import sequenceBanner from './sequenceBannerDialog'
import editBanner from './editBannerDialog'
import visitBanner from './visitBannerDialog'
export default {
    components: {
        addBanner,
        sequenceBanner,
        editBanner,
        visitBanner
    },
    data () {
        return {
            addBannerVisible: false,
            sequenceBannerVisible: false,
            editBannerVisible: false,
            visitBannerVisible: false,
            tableData: null,
            rowData: null,
            tableLoading: false,
            fromData: {},
            fit: 'scale-down',
            type: 'success'
        }
    },
    created () {
        this.queryList()
    },
    mounted () {
        this.rowDrop()
    },
    methods: {
        getImageUrl (url) {
            return url + '?x-oss-process=video/snapshot,t_10000,m_fast'
        },
        rowDrop () {
            const tbody = document.querySelector('#table tbody')
            const _this = this
            Sortable.create(tbody, {
                onEnd ({ newIndex, oldIndex }) {
                    const currRow = _this.tableData.splice(oldIndex, 1)[0]
                    _this.tableData.splice(newIndex, 0, currRow)
                }
            })
        },
        queryList () {
            this.tableLoading = true
            this.$apis.bannerList(
                this.queryParams
            ).then(res => {
                this.tableLoading = false
                if (res.code === 2000) {
                    this.tableData = res.data.bannerDtos
                }
            }).catch(error => {
                this.tableLoading = false
                console.error(error.message)
            })
        },
        editBannerOption (row) {
            this.rowData = row
            this.editBannerVisible = true
        },
        visitBanner (row) {
            this.rowData = row
            this.visitBannerVisible = true
        },
        deleteBanner (row) {
            this.$confirm('确认删除?').then(_ => {
                this.$apis.deleteBanner({
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
        }
    }
}
</script>
