<template>
    <el-dialog title="新增职位" :visible.sync="addPositionVisible" center>
        <el-form
            class="lk-form"
            label-position="right"
            label-width="100px">
            <el-form-item label="职位分类">
                <el-select
                v-model="formData.positionSort"
                name="positionSort">
                    <el-option label="产品" value="chanpin"></el-option>
                    <el-option label="设计" value="sheji"></el-option>
                    <el-option label="技术" value="jishu"></el-option>
                    <el-option label="管理" value="guanli"></el-option>
                    <el-option label="其他" value="qita"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="职位名称" :class="[errors.has('positionName') ? 'is-error' : '', 'is-required']">
                <el-input
                    v-model="formData.positionName"
                    name="positionName"
                    data-vv-as="职位名称"
                    v-validate="'required|noSpace|minMax:2,18'"
                />
                <div class="el-form-item__error" v-if="errors.has('positionName')">{{errors.first('positionName')}}</div>
            </el-form-item>
            <el-form-item label="工作经验">
                <el-select
                v-model="formData.workExp"
                name="workExp">
                    <el-option label="应届毕业生" value="exp1"></el-option>
                    <el-option label="三年及以下" value="exp2"></el-option>
                    <el-option label="三到五年" value="exp3"></el-option>
                    <el-option label="五到十年" value="exp4"></el-option>
                    <el-option label="十年以上" value="exp5"></el-option>
                    <el-option label="无要求" value="exp6"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学历要求">
                <el-select
                v-model="formData.education"
                name="education">
                    <el-option label="大专" value="college"></el-option>
                    <el-option label="本科" value="undergraduate"></el-option>
                    <el-option label="硕士" value="master"></el-option>
                    <el-option label="博士" value="doctor"></el-option>
                    <el-option label="无要求" value="no_request"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否全职">
                <el-radio-group
                v-model="radio">
                <el-radio :label="0" >是</el-radio>
                <el-radio :label="1" >否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="职位描述" :class="[errors.has('positionMessage') ? 'is-error' : '', 'is-required']">
                <el-input
                    type="textarea"
                    v-model="formData.positionMessage"
                    name="positionMassage"
                    data-vv-as="职位描述"
                    v-validate="'required|noSpace|minMax:2,18'"
                />
                <div class="el-form-item__error" v-if="errors.has('positionMessage')">{{errors.first('positionMessage')}}</div>
            </el-form-item>
            <el-form-item label="任职要求" :class="[errors.has('job_requirements') ? 'is-error' : '', 'is-required']">
                <el-input
                    type="textarea"
                    v-model="formData.job_requirements"
                    name="job_requirements"
                    data-vv-as="任职要求"
                    v-validate="'required|noSpace|minMax:2,18'"
                />
                <div class="el-form-item__error" v-if="errors.has('job_requirements')">{{errors.first('job_requirements')}}</div>
            </el-form-item>
            <el-form-item label="联系方式" :class="[errors.has('contact_information') ? 'is-error' : '', 'is-required']">
                <el-input
                    type="textarea"
                    v-model="formData.contact_information"
                    name="contact_information"
                    data-vv-as="联系方式"
                    v-validate="'required|noSpace|minMax:2,18'"
                />
                <div class="el-form-item__error" v-if="errors.has('contact_information')">{{errors.first('contact_information')}}</div>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button type="primary" @click="submit">确 认</el-button>
            <el-button @click="close">取 消</el-button>
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
            formData: {},
            addPositionVisible: false,
            radio: 1
        }
    },
    watch: {
        value (val) {
            console.log(val)
            this.addPositionVisible = val
            this.errors.clear()
            this.formData = {}
        },
        addPositionVisible (val) {
            this.$emit('input', val)
        }
    },
    methods: {
        submit () {
            this.$validator.validateAll().then((valid) => {
                if (valid) {
                    let params = {
                        positionSort: this.formData.positionSort,
                        positionName: this.formData.positionName,
                        workExp: this.formData.workExp,
                        education: this.formData.education,
                        radio: this.formData.radio,
                        positionMassage: this.formData.positionMassage,
                        job_requirements: this.formData.job_requirements,
                        contact_information: this.formData.contact_information
                    }
                    this.$apis.addPosition(params).then(res => {
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
        },
        close () {
            this.addPositionVisible = false
        }
    }
}
</script>
