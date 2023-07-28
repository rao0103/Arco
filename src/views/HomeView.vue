<template>
  <div class="w-screen h-screen bg">
    <!-- logo开始 -->
    <div
      class="flex items-center fixed top-[24px] left-[22px] z-10 scale-[0.8]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        style="height: 40px"
        class="mr-[5px]"
      >
        <path
          data-v-37dfd6fc=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4.737a4.263 4.263 0 100-8.526 4.263 4.263 0 000 8.526z"
          fill="#165DFF"
        ></path>
        <path
          data-v-37dfd6fc=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.263 7.737H21v4.353l-.013.384h-4.75c.024-.237.026-.41.026-.41V7.737zM11.526 3.013c.207-.01.402-.013.402-.013h4.335v4.737h-4.35s-.202.004-.387.025v-4.75z"
          fill="#165DFF"
        ></path>
        <path fill="#16D2AC" d="M15 3h6v6h-6z"></path>
      </svg>
      <span class="text-[24px] font-bold text-[#303133]">Arco</span>
    </div>

    <!-- 注册 -->
    <div
      class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[324px]"
    >
      <!-- 注册 -->
      <a-form ref="formRef" name="custom-validation" :model="userInfo">
        <!-- 请输入用户名 -->
        <a-form-item
          name="userName"
          :rules="[
            {
              required: false,
              message: '请输入用户名!',
            },
          ]"
        >
          <a-input
            allowClear
            placeholder="请输入用户名"
            class="h-[40px]"
            type="text"
            :onblur="runIsUsernameExists"
            v-model:value="userInfo.username"
          >
            <template #prefix>
              <Icon icon="majesticons:user" class="text-[#c2c7ce]" />
            </template>
          </a-input>
        </a-form-item>

        <!-- 请输入邮箱 -->
        <a-form-item
          name="mailbox"
          :rules="[
            {
              required: true,
              message: '请输入邮箱!',
            },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '请输入有效的邮箱地址',
            },
          ]"
        >
          <a-input
            allowClear
            placeholder="请输入邮箱"
            class="h-[40px]"
            type="text"
            :onblur="runIsEmailExists"
            v-model:value="userInfo.mailbox"
          >
            <template #prefix>
              <Icon icon="majesticons:mail" class="text-[#c2c7ce]" />
            </template>
          </a-input>
        </a-form-item>

        <!-- 验证码 -->
        <a-form-item
          name="verificationCode"
          :rules="[
            {
              required: true,
              message: '请输入验证码!',
            },
          ]"
        >
          <a-input
            class="h-[40px]"
            placeholder="验证码"
            type="text"
            v-model:value="userInfo.verificationCode"
          >
          </a-input>
          <a-button
            class="h-[40px] flex-1 bg-[#ecf5ff] text-[#409EFF] shadow-none border-1 border-[#b3d8ff]"
            type="primary"
            style="margin-left: 10px"
            @click="runSendVerificationCodes"
            >获取验证码
          </a-button>
        </a-form-item>

        <!-- 设置密码 -->
        <a-form-item
          name="password"
          :rules="[
            {
              required: true,
              message: '请输入密码!',
            },
            {
              pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/,
              message: '请包含数字字母且长度为6-15字符',
            },
          ]"
        >
          <a-input-password
            allowClear
            placeholder="设置密码"
            class="h-[40px]"
            type="password"
            v-model:value="userInfo.password"
          >
            <template #prefix>
              <Icon
                icon="solar:lock-password-unlocked-bold-duotone"
                class="text-[#c2c7ce]"
              />
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 确认密码 -->
        <a-form-item
          name="confirmPassword"
          :rules="[
            {
              required: true,
              message: '请确认密码!',
            },
            {
              pattern: userInfo.password,
              message:
                '两次密码不一致                                         ',
            },
          ]"
        >
          <a-input-password
            allowClear
            placeholder="确认密码"
            class="h-[40px]"
            type="password"
            v-model:value="userInfo.confirmPassword"
          >
            <template #prefix>
              <Icon
                icon="solar:lock-password-bold-duotone"
                class="text-[#c2c7ce]"
              />
            </template>
          </a-input-password>
        </a-form-item>

        <!-- 注册按钮 登录按钮 -->
        <div class="flex items-center">
          <a-button
            class="h-[40px] flex-1 bg-[#409eff]"
            type="primary"
            html-type="submit"
            >注册
          </a-button>
          <a-button
            class="h-[40px] flex-1 bg-[#ffffff]"
            style="margin-left: 10px"
            >去登录
          </a-button>
        </div>
      </a-form>
    </div>
    <!-- 底部信息 -->
    <div
      class="fixed bottom-0 w-screen flex items-center justify-center h-[48px] text-[#999] text-[20px]"
    >
      <Icon
        icon="ic:baseline-copyright"
        class="text-[#999] text-[20px] mr-[5px]"
      />
      2021 HOPU | 鄂ICP备29218126号-1
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from "ant-design-vue";
import { notification } from "ant-design-vue";
import { isUserExists, sendVerificationCodes } from "@/service";
import { useRequest } from "vue-request";
const userInfo = reactive({
  username: "",
  mailbox: "",
  verificationCode: "",
  password: "",
  confirmPassword: "",
});
const { data: isUsernameExistsCode, run: runIsUsernameExists } = useRequest(
  () => isUserExists({ username: userInfo.username }),
  { manual: true }
);
const { data: isEmailExistsCode, run: runIsEmailExists } = useRequest(
  () => isUserExists({ email: userInfo.mailbox }),
  { manual: true }
);
const { data: isSendSuccess, run: runSendVerificationCodes } = useRequest(
  () => sendVerificationCodes({ target: userInfo.mailbox, type: 1 }),
  { manual: true }
);
watchEffect(() => {
  if (isSendSuccess.value === 0) {
    notification.open({
      type: "success",
      message: `验证码已发送至${userInfo.mailbox},请注意查收!`,
    });
  }
});
const formRef = ref<FormInstance>();
</script>

<style lang="scss">
.ant-form-item-control-input-content {
  display: flex;
}

.ant-input-clear-icon {
  display: flex;
}
</style>

<style lang="scss" scoped>
.bg {
  background: #f5f5f5 url(../assets/images/bg.svg) no-repeat center 110px;
  background-size: 100%;
}
</style>
