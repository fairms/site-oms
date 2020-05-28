<template>
    <el-dialog title="添加Banner图" :visible.sync="addBannerVisible" center>
        <el-form
            class="lk-form"
            label-position="right"
            label-width="100px">
            <el-form-item label="请选择类型">
                <el-select v-model="form.Show">
                    <el-option label="添加图片" value="0"></el-option>
                    <el-option label="添加视频" value="1"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form
        class="lk-form"
        label-position="right"
        label-width="100px"
        v-if="form.Show==0">
            <el-form-item label="请上传图片">
                <el-upload
                    class="upload-demo"
                    name="file"
                    drag
                    action="https://192.168.9.167/upload/"
                    :on-success="handleImageSuccess"
                    :on-error="imageUploadError"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-form-item>
            <el-form-item label="提示">
                <div><a>尺寸：3840 X 1160;</a></div>
                <div><a>大小：2M以内;</a></div>
                <div><a>格式：png或jpg;</a></div>
            </el-form-item>
            <el-form-item label="图片链接">
                <el-input v-model="formData.LInk" name="123"/>
            </el-form-item>
        </el-form>
        <el-form
        class="lk-form"
        label-position="right"
        label-width="100px"
        v-if="form.Show==1">
             <el-form-item label="请上传视频">
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://192.168.9.167/upload/"
                    :on-success="handleVideoSuccess"
                    :on-error="videoUploadError"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-form-item>
            <el-form-item label="提示">
                <div><a>请保持视频大小在10M以内</a></div>
            </el-form-item>
            <el-form-item label="视频链接">
                <el-input v-model="formData.LInk" name="123"/>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="submit" >确 认</el-button>
            <el-button type="primary" @click="addBannerVisible = false">取 消</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            form: {
                show: 0
            },
            formData: {},
            addBannerVisible: false,
            image_or_video: '',
            formBannerSort: ''
        }
    },
    watch: {
        value (val) {
            console.log(val)
            this.addBannerVisible = val
            this.errors.clear()
            this.formData = {}
        },
        addBannerVisible (val) {
            this.$emit('input', val)
        }
    },
    methods: {
        getTime () {
            let date1 = new Date()
            let year = date1.getFullYear()
            let month = date1.getMonth() + 1
            let day = date1.getDate()
            let hours = date1.getHours()
            let minutes = date1.getMinutes()
            let seconds = date1.getSeconds()
            let nowDate
            nowDate = year + '年' + month + '月' + day + '日' + hours + ':' + minutes + ':' + seconds
            return nowDate
        },
        handleImageSuccess (response, file, fileList) {
            console.log(response)
        },
        handleVideoSuccess (response, file, fileList) {
            console.log(response)
        },
        imageUploadError: function (response, file, fileList) {
            console.log(response)
        },
        videoUploadError: function (response, file, fileList) {
            console.log(response)
        },
        submit () {
            this.$validator.validateAll().then((valid) => {
                if (valid) {
                    let params = {
                        bulidTime: this.nowDate,
                        bannerSort: this.form.Show,
                        image_or_video: this.response,
                        linkPlace: this.formData.Link
                    }
                    this.$apis.addBanner(params).then(res => {
                        if (res.code === 2000) {
                            this.$message.success('添加成功')
                            this.addPositionVisible = false
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
