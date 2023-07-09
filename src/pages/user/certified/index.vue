<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>认证信息</span>
            </div>
        </template>
        <!-- 提示部分 -->
        <div class="tip">
            <span>
                <el-icon>
                    <InfoFilled />
                </el-icon>
                <span>您还未进行实名认证，认证后才能添加就诊人，为了不影响后续步骤，建议提前进行实名认证。</span>
            </span>
        </div>
        <!-- 卡片身体：认证成功 / 未认证 -->
        <div class="success" v-if="userInfo?.authStatus == 1">
            <el-descriptions class="margin-top" title="用户信息" :column="1" border>
                <el-descriptions-item label-align="center" width="50">
                    <template #label>
                        <div class="cell-item">
                            用户姓名
                        </div>
                    </template>
                    {{ userInfo.name }}
                </el-descriptions-item>
                <el-descriptions-item label-align="center" width="50">
                    <template #label>
                        <div class="cell-item">
                            证件类型
                        </div>
                    </template>
                    {{ userInfo.certificatesType == 10 ? '身份证' : '户口本' }}
                </el-descriptions-item>
                <el-descriptions-item label-align="center" width="50">
                    <template #label>
                        <div class="cell-item">
                            证件号码
                        </div>
                    </template>
                    {{ userInfo.certificatesNo }}
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="fail" v-else>
            <el-form style="width: 60%; margin: 20px auto;" label-width="80px">
                <el-form-item label="用户姓名">
                    <el-input placeholder="请输入用户姓名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="证件类型">
                    <el-select placeholder="请选择证件类型" v-model="form.certificatesType">
                        <el-option :label="item.name" :value="item.value" v-for="item in certificateType"
                            :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码">
                    <el-input placeholder="请输入证件号码" v-model="form.certificatesNo"></el-input>
                </el-form-item>
                <el-form-item label="上传证件">
                    <!-- action：upload组件向服务器提交图片的路径 -->
                    <!-- limit：上传限制个数 -->
                    <!-- on-exceed：超出上传数量的钩子-->
                    <!-- on-success：文件上传成功的钩子 -->
                    <!-- on-preview：点击文件列表中已上传的文件时的钩子（预览） -->
                    <!-- on-remove：删除文件的钩子 -->
                    <el-upload ref="upload" :on-preview="previewHandler" :limit="1" :on-exceed="exceedHandler"
                        list-type="picture-card" action="/api/oss/file/fileUpload?fileHost=userAuah" method="post"
                        :on-success="successHandler" :on-remove="handleRemove">
                        <img style="height: 100%;width: 100%;" src="../../../assets/images/auth_example.png" alt="">
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img style="height: 100%;width: 100%;" w-full :src="form.certificatesUrl" alt="Preview Image" />
                    </el-dialog>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="authMethod">提交</el-button>
                    <el-button @click="beEmpty">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
import { onMounted, ref, reactive } from 'vue';
import { getUserInfo, getCertificateType, userAuth } from '@/api/user/index.ts'
import type { GetUserInfoResponseData, GetCertificateTypeResponseData, CertificateTypeData, UserAuthParams } from '@/api/user/type.ts'
import { ElMessage } from 'element-plus';

// 存储用户信息
const userInfo: any = ref<GetUserInfoResponseData>()
// 储存证件类型
//@ts-ignore
const certificateType: CertificateTypeData = ref([])
// 收集用户的表单数据
const form = reactive<UserAuthParams>({
    name: '',
    certificatesType: '',
    certificatesNo: '',
    certificatesUrl: ''
})
// 图片预览的相关数据
let dialogVisible = ref<boolean>(false)
// upload实例
let upload: any = ref()

onMounted(() => {
    // 获取用户信息
    getUserInfoMethod()
    // 获取用户证件类型
    getCertificateTypeMethod()
})


// 获取用户信息的方法
const getUserInfoMethod = async () => {
    let res: GetUserInfoResponseData = await getUserInfo()
    if (res.code === 200) {
        //@ts-ignore
        userInfo.value = res.data
    }
}
// 获取用户证件类型的方法
const getCertificateTypeMethod = async () => {
    let res: GetCertificateTypeResponseData = await getCertificateType('certificatesType')
    // console.log(res)
    if (res.code === 200) {
        //@ts-ignore
        certificateType.value = res.data
    }
}
// 上传图片超出数量的钩子
const exceedHandler = (files: any, fileList: any) => {
    // console.log(files, fileList)
    //@ts-ignore
    ElMessage.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
}
// 上传图片成功的钩子
const successHandler = (res: any) => {
    // console.log(res)
    // 上传成功后，将图片的路径赋值给form.certificatesUrl
    form.certificatesUrl = res.data
    //@ts-ignore
    ElMessage.success('上传成功')
}

// 会员认证的方法
const authMethod = async () => {
    try {
        let res: any = await userAuth(form)
        if (res.code === 200) {
            //@ts-ignore
            ElMessage.success('认证成功')
            getUserInfoMethod()
        }
    } catch (error) {
        ElMessage.error("认证失败！")
    }
}
// 预览图片的方法
const previewHandler = () => {
    // console.log(file)
    //@ts-ignore
    // window.open(file.url)
    dialogVisible.value = true
}
// 删除文件的钩子
const handleRemove = () => {
    // 置form.certificatesUrl为空
    form.certificatesUrl = ''
    //@ts-ignore
    ElMessage.warning('删除成功')
}
// 取消按钮的回调
const beEmpty = () => {
    // 清空上传文件的列表
    upload.value.clearFiles()
    form.name = ''
    form.certificatesType = ''
    form.certificatesNo = ''
    form.certificatesUrl = ''
}
















</script>

<style scoped lang="scss">
.box-card {
    .tip {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        span {
            color: #7f7f7f;
            display: flex;
            align-items: center;
        }
    }

    .success {
        margin-top: 20px;
    }
}
</style>