<template>
  <div
    style="
      background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    "
    class="h-[100vh] overflow-hidden bg-no-repeat bg-center bg-[#f5f5f5]"
  >
    <!-- 头部Arco -->
    <div class="flex items-center mt-[2vw] ml-[2vw]">
      <svg
        data-v-37dfd6fc=""
        viewBox="0 0 24 24"
        fill="none"
        style="font-size: 30px; height: 30px"
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
        <path data-v-37dfd6fc="" fill="#16D2AC" d="M15 3h6v6h-6z"></path>
      </svg>
      <div class="text-[1.5vw] ml-[0.5vw]">Arco</div>
    </div>
    <!-- 登录页面 -->
    <div class="w-[320px] mx-auto mt-[6vw]" v-if="!login">
      <div>
        <div class="text-[24px] leading-[32px] text-[#1d2129] font-bold-500">
          登录 Arco
        </div>
        <div class="text-[#86909c] text-[16px] leading-[24px]">
          内部项目管理系统
        </div>
      </div>
      <a-form :model="userInfo" name="normal_login" class="login-form mt-[3vw]">
        <a-form-item
          name="username"
          :rules="[
            {
              required: true,
              // message: '请输入用户名',
              type: 'string',
              trigger: 'blur',
              min: 2,
              max: 20,
            },
          ]"
        >
          <a-input
            v-model:value="userInfo.username"
            placeholder="请输入用户名"
            allow-clear
          >
            <template #prefix>
              <UserOutlined
                class="site-form-item-icon text-[#C0C4CC] text-[15px]"
              />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[
            {
              required: true,
              message: '密码不能少于6位',
              whitespace: true,
              trigger: 'blur',
              min: 6,
            },
          ]"
        >
          <a-input-password
            allow-clear
            v-model:value="userInfo.password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <Icon icon="bx:lock" class="text-[#C0C4CC] text-[15px]"></Icon>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item class="mb-[0vw] text-[#2e9dff] h-[40p]">
          <a-checkbox v-model:checked="userInfo.remember" class="text-[#2e9dff]"
            >记住密码</a-checkbox
          >

          <a class="" href="" @click.prevent="forget_fn">忘记密码</a>
        </a-form-item>
      </a-form>
      <div class="w-[100%] bg-[#1677ff] rounded-[6px] text-center h-[40px]">
        <a-button type="primary" size="large" class="w-[100%]">登录</a-button>
      </div>
      <div
        class="w-[100%] bg-[#ffffff] mt-[1vw] h-[40px]"
        @click="resgister_fn"
      >
        <a-button type="default" size="large" :block="true">注册</a-button>
      </div>
    </div>
    <!-- 注册页面 -->
    <div class="w-[320px] mx-auto mt-[6vw]" v-if="resgister">
      <a-form
        :model="regInfo"
        name="normal_login"
        class="login-form mt-[3vw]"
        :rules="rules"
      >
        <a-form-item name="reg_username">
          <a-input
            v-model:value="regInfo.reg_username"
            placeholder="请输入用户名"
            allow-clear
            :onblur="runIsUsernameExists"
          >
            <template #prefix>
              <UserOutlined
                class="site-form-item-icon text-[#C0C4CC] text-[15px]"
              />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="registerMailbox">
          <a-input
            :onblur="runIsEmailExists"
            v-model:value="regInfo.registerMailbox"
            placeholder="请输入邮箱"
            allow-clear
          >
            <template #prefix>
              <Icon icon="ep:eleme" class="text-[#C0C4CC] text-[15px]" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="verificationCode">
          <a-input
            placeholder="验证码"
            class="w-[65%]"
            v-model:value="regInfo.verificationCode"
            autocomplete="current-password"
          >
          </a-input>
          <a-button
            type="primary"
            @click="runSendVerificationCodes"
            class="w-[111px] h-[40px] ml-[10px] bg-[#ecf5ff] border-[#b3d8ff] text-[#409EFF]"
            >获取验证码</a-button
          >
        </a-form-item>

        <a-form-item name="registerPassword">
          <a-input-password
            allow-clear
            v-model:value="regInfo.registerPassword"
            placeholder="设置密码"
          >
            <template #prefix>
              <Icon icon="bx:lock" class="text-[#C0C4CC] text-[15px]"></Icon>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="registerConfirmPassword">
          <a-input-password
            allow-clear
            type="password"
            v-model:value="regInfo.registerConfirmPassword"
            placeholder="确认密码"
          >
            <template #prefix>
              <Icon icon="bx:lock-open" class="text-[#C0C4CC] text-[15px]" />
            </template>
          </a-input-password>
        </a-form-item>
      </a-form>
      <div>
        <a-button type="primary" class="w-[154px] h-[39px] bg-[#1677ff]"
          >注册</a-button
        >
        <a-button
          type="default"
          class="w-[154px] h-[39px] ml-[10px]"
          @click="login_fn"
          >去登录</a-button
        >
      </div>
    </div>
    <!-- 忘记密码 -->
    <div class="w-[320px] mx-auto mt-[6vw]" v-if="forget">
      <a-form :model="regInfo" name="normal_login" class="login-form mt-[3vw]">
        <a-form-item :rules="[{ type: 'email' }]">
          <a-input
            v-model:value="regInfo.registerMailbox"
            placeholder="请输入邮箱"
            allow-clear
          >
          </a-input>
        </a-form-item>
        <a-form-item :rules="[{}]">
          <a-input placeholder="验证码" class="w-[65%]"> </a-input>
          <a-button
            type="primary"
            class="w-[111px] h-[40px] ml-[10px] bg-[#1677ff]"
            @click="runSendVerificationCodes"
            >获取验证码</a-button
          >
        </a-form-item>

        <a-form-item name="registerPassword">
          <a-input-password
            allow-clear
            v-model:value="regInfo.registerPassword"
            placeholder="新密码"
          >
          </a-input-password>
        </a-form-item>
        <a-form-item
          :rules="[
            {
              required: true,
              message: '密码不能少于6位',
              whitespace: true,
              trigger: 'blur',
              min: 6,
            },
          ]"
        >
          <a-input-password
            allow-clear
            v-model:value="userInfo.password"
            placeholder="确认密码"
          >
          </a-input-password>
        </a-form-item>
      </a-form>
      <div>
        <a-button type="primary" class="w-[154px] h-[39px] bg-[#1677ff]"
          >重置密码</a-button
        >
        <a-button
          type="default"
          class="w-[154px] h-[39px] ml-[10px]"
          @click="forget_fn"
          >去登录</a-button
        >
      </div>
    </div>
    <!-- 底部 -->
    <div
      class="text-center absolute right-0 bottom-0 w-[100%] leading-[3] text-[#999]"
    >
      © 2021 HOPU | 鄂ICP备29218126号-1
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
import { notification } from "ant-design-vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { isUserExists, sendVerificationCodes } from "@/service";
import type { Rule } from "ant-design-vue/es/form";
const login = ref(false); //登录
const forget = ref(false); //忘记密码
const resgister = ref(false); //注册
const resgister_fn = () => {
  resgister.value = !resgister.value;
  login.value = !login.value;
};
const login_fn = () => {
  resgister.value = !resgister.value;
  login.value = !login.value;
};
const forget_fn = () => {
  forget.value = !forget.value;
  login.value = !login.value;
};

const userInfo = reactive({
  username: "", //登录用户名
  password: "", //登录密码
  remember: true, //记住密码
});
const regInfo = reactive({
  reg_username: "", //注册用户名
  registerMailbox: "", //邮箱
  verificationCode: "", //验证码
  registerPassword: "", // 密码
  registerConfirmPassword: "",
});

const { data: isUsernameExistsCode, run: runIsUsernameExists } = useRequest(
  () => isUserExists({ username: regInfo.reg_username }),
  { manual: true }
);
console.log(isUsernameExistsCode);
const { data: isEmailExistsCode, run: runIsEmailExists } = useRequest(
  () => isUserExists({ email: regInfo.registerMailbox }),
  { manual: true }
);
const { data: isSendSuccess, run: runSendVerificationCodes } = useRequest(
  () => sendVerificationCodes({ target: regInfo.registerMailbox, type: 1 }),
  { manual: true }
);

watchEffect(() => {
  console.log(isSendSuccess.value);
  if (isSendSuccess.value === 0) {
    notification.open({
      type: "success",
      message: `验证码已发送至${regInfo.registerMailbox},请注意查收!`,
    });
  }
});

// 验证用户名的异步函数
let validateregisterUserName = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入用户名");
  }
  // 使用正则表达式检查用户名长度在2到20个字符之间
  const usernameRegex = /^.{2,20}$/;
  if (!usernameRegex.test(value)) {
    return Promise.reject("用户名长度应在2到20个字符之间");
  }

  // 验证用户名是否已存在
  const res = await isUserExists({ username: value });
  if (res === 0) {
    return Promise.reject("用户名已存在");
  }
  // 请求成功，用户名不存在
  return Promise.resolve();
};

// 验证邮箱的异步函数
let validateEmail = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入邮箱地址");
  } else {
    // 使用正则表达式验证邮箱格式
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com|icloud\.com|qq\.com|163\.com|sina\.com|126\.com|aliyun\.com|yeah\.net)$/i;
    if (!emailRegex.test(value)) {
      return Promise.reject("请输入有效的邮箱地址");
    }

    // 验证邮箱是否已注册
    const res = await isUserExists({ email: value });
    if (res === 0) {
      return Promise.reject("邮箱已注册");
    }
    // 请求成功，邮箱未注册
    return Promise.resolve();
  }
};

// 验证验证码的异步函数
let validateVerificationCode = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入验证码");
  } else {
    return Promise.resolve();
  }
};

// 验证密码的异步函数
let validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入密码");
  }

  // 使用正则表达式检查密码长度在6到15个字符之间
  const passwordRegex = /^.{6,15}$/;
  if (!passwordRegex.test(value)) {
    return Promise.reject("密码长度应在6到15个字符之间");
  }

  // 使用正则表达式验证密码必须是字母和数字的组合
  const passwordCombinationRegex = /^(?=.*\d)(?=.*[a-zA-Z]).*$/;
  if (!passwordCombinationRegex.test(value)) {
    return Promise.reject("密码必须是字母和数字的组合");
  }

  return Promise.resolve();
};

// 验证确认密码是否匹配的异步函数
let confirmPassword = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请再次输入密码");
  } else if (value !== regInfo.registerPassword) {
    return Promise.reject("确认密码与设置密码不同,请重新输入");
  } else {
    return Promise.resolve();
  }
};

// 定义表单规则，包含每个字段的验证规则
const rules: Record<string, Rule[]> = {
  // 用户名
  reg_username: [
    { required: true, validator: validateregisterUserName, trigger: "blur" },
  ],
  // 邮箱
  registerMailbox: [
    { required: true, validator: validateEmail, trigger: "blur" },
  ],
  // 验证码
  verificationCode: [
    { required: true, validator: validateVerificationCode, trigger: "blur" },
  ],
  // 密码
  registerPassword: [
    { required: true, validator: validatePass, trigger: "blur" },
  ],
  // 确认密码
  registerConfirmPassword: [
    { required: true, validator: confirmPassword, trigger: "blur" },
  ],
};
</script>
<style>
.ant-form-item-control-input .ant-form-item-control-input-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.ant-input-affix-wrapper {
  height: 40px;
}
.ant-input {
  height: 100%;
}
</style>
