<template>
    <el-dialog title="编辑Banner图" :visible.sync="visitBannerVisible" center>
        <el-form
            class="lk-form"
            label-position="right"
            label-width="100px">
            <el-form-item label="创建时间">
                {{formData.buildTime}}
            </el-form-item>
            <el-form-item label="类型">
                    <el-tag
                        v-model="formData.bannerSort"
                        :type= "type">
                        {{formData.bannerSort === 1 ? '视频' : '图片'}}
                    </el-tag>
            </el-form-item>
            <el-form-item label="图片/封面图">
                    <el-image
                        v-model="formData.image_or_video"
                        :fit="fit"
                        :src = "formData.bannerSort===1? getImageUrl(formData.image_or_video):formData.image_or_video">
                    </el-image>
            </el-form-item>
            <el-form-item label="链接">
                {{formData.linkPlace}}
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="visitBannerVisible = false" >确 认</el-button>
            <el-button type="primary" @click="visitBannerVisible = false">取 消</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        visitData: {}
    },
    data () {
        return {
            formData: {},
            visitBannerVisible: false,
            tableLoading: false,
            fit: 'scale-down',
            type: 'success'
        }
    },
    methods: {
        getImageUrl (url) {
            return url + '?x-oss-process=video/snapshot,t_10000,m_fast'
        }
    },
    watch: {
        value (val) {
            console.log(val)
            this.visitBannerVisible = val
            this.errors.clear()
            this.formData = { ...this.visitData }
        },
        visitBannerVisible (val) {
            this.$emit('input', val)
        }
    }
}
</script>
