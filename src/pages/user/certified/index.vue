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
                    <el-input placeholder="请输入用户姓名"></el-input>
                </el-form-item>
                <el-form-item label="证件类型">
                    <el-select placeholder="请选择证件类型">
                        <el-option :label="item.name" :value="item.value" v-for="item in certificateType"
                            :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件号码">
                    <el-input placeholder="请输入证件号码"></el-input>
                </el-form-item>
                <el-form-item label="上传证件">
                    <el-upload list-type="picture-card">
                        <img style="height: 100%;width: 100%;" src="../../../assets/images/auth_example.png" alt="">
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
import { getUserInfo, getCertificateType } from '@/api/user/index.ts'
import type { GetUserInfoResponseData, GetCertificateTypeResponseData, CertificateTypeData } from '@/api/user/type.ts'

// 存储用户信息
const userInfo: any = ref<GetUserInfoResponseData>()
// 储存证件类型
//@ts-ignore
const certificateType: CertificateTypeData = ref([])

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
    console.log(res)
    if (res.code === 200) {
        //@ts-ignore
        certificateType.value = res.data
    }
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