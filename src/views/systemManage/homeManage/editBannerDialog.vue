<template>
    <el-dialog title="编辑Banner图" :visible.sync="editBannerVisible" center>
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
                        :src="formData.image_or_video">
                    </el-image>
            </el-form-item>
            <el-form-item label="链接" :class="[errors.has('linkPlace') ? 'is-error' : '', 'is-required']">
                <el-input
                    type="textarea"
                    v-model="formData.linkPlace"
                    name="linkPlace"
                    data-vv-as="职位描述"
                    v-validate="'required|noSpace'"
                />
                <div class="el-form-item__error" v-if="errors.has('linkPlace')">{{errors.first('linkPlace')}}</div>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="submit" >确 认</el-button>
            <el-button type="primary" @click="editBannerVisible = false">取 消</el-button>
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
        dialogData: {}
    },
    data () {
        return {
            formData: {},
            editBannerVisible: false,
            tableLoading: false,
            fit: 'scale-down',
            type: 'success'
        }
    },
    watch: {
        value (val) {
            console.log(val)
            this.editBannerVisible = val
            this.errors.clear()
            this.formData = { ...this.dialogData }
        },
        editBannerVisible (val) {
            this.$emit('input', val)
        }
    },
    methods: {
        submit () {
            this.$validator.validateAll().then((valid) => {
                if (valid) {
                    let params = {
                        buildTime: this.formData.buildTime,
                        bannerSort: this.formData.bannerSort,
                        image_or_video: this.formData.image_or_video,
                        linkPlace: this.formData.linkPlace

                    }
                    this.$apis.editBanner(params).then(res => {
                        if (res.code === 2000) {
                            this.$message.success('添加成功')
                            this.editBannerVisible = false
                            this.$parent.queryList()
                        }
                    }).catch(error => {
                        console.error(error.message)
                    })
                }
            })
        }
    }
}
</script>
