/* eslint-disable */
<template>
    <el-dialog title="Banner图排序" :visible.sync="sequenceBannerVisible" center>
        <el-table
                id="table"
                row-key="id"
                :data="tableData"
                v-loading="tableLoading"
                element-loading-text="拼命加载中"
                :default-sort="{prop: 'sortNum', order: 'ascending'}"
                height="300px"
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
            </el-table>
        <span slot="footer">
            <!-- <el-button type="primary" @click="" >确 认</el-button> -->
            <el-button type="primary" @click="sequenceBannerVisible = false">取 消</el-button>
        </span>
    </el-dialog>
</template>

<script>
import Sortable from 'sortablejs'

export default {
    components: {
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
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
    watch: {
        value (val) {
            console.log(val)
            this.sequenceBannerVisible = val
            this.errors.clear()
            this.formData = {}
        },
        sequenceBannerVisible (val) {
            this.$emit('input', val)
        }
    },
    created () {
        this.queryList()
    },
    updated () {
        this.rowDrop()
    },
    methods: {
        getImageUrl (url) {
            return url + '?x-oss-process=video/snapshot,t_10000,m_fast'
        },
        rowDrop () {
            const tbody = document.querySelectorAll('#table tbody')[1]
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
            this.$apis.editBanner(
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
        }
    }
}
</script>
