<template>
  <div class="bg text-[14px]">
    <div class="relative flex flex-1 items-center justify-center pb-[40px]">
      <!-- 图标 -->
      <div class="flex items-center fixed top-[24px] left-[22px] text-[20px]">
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
        <span>Arco</span>
      </div>
      <!-- 主要内容 -->
      <!-- 登录 -->
      <div v-if="login" class="login">
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form w-[320px] h-[390px]"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          :rules="rules"
          ref="formRefLogin"
        >
          <div class="text-left">
            <p class="font-bold text-[24px] leading-[32px] text-[#1d2129]">
              登录 Arco
            </p>
            <p class="text-[16px] leading-[24px] text-[#86909c]">
              内部项目管理系统
            </p>
          </div>
          <a-form-item name="usernamel" class="mt-[40px] relative text-left">
            <a-input
              v-model:value="formState.usernamel"
              placeholder="请输入用户名"
              class="h-[40px]"
              name="username"
              :onblur="runIsUserExists"
              allow-clear
            >
              <template #prefix>
                <UserOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item name="passwordl" class="relative text-left">
            <a-input-password
              v-model:value="formState.passwordl"
              placeholder="请输入密码"
              class="h-[40px]"
              allow-clear
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item class="h-[39px] mb-[0]">
            <a-form-item name="remember" no-style>
              <a-checkbox
                v-model:checked="formState.rememberl"
                class="float-left"
                >记住密码</a-checkbox
              >
            </a-form-item>
            <span
              class="login-form-forgot float-right cursor-pointer"
              href=""
              @click="
                () => {
                  forgetPwd = true;
                  login = false;
                }
              "
              >忘记密码</span
            >
          </a-form-item>

          <a-form-item>
            <a-button
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="block w-[100%]"
              @click="onShow"
              :class="disabled ? 'bg-[#d9d9d9]' : 'bg-[#409eff]'"
              >登录</a-button
            >
            <a-button
              html-type="button"
              style="margin: 0 8px"
              @click="
                () => {
                  login = false;
                  forgetPwd = false;
                  register = true;
                  visible = true;
                }
              "
              class="block w-[100%]"
              >注册</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <!-- 注册 -->
      <div v-if="register" class="register">
        <a-form
          :model="userInfo"
          v-bind="layout"
          :rules="rules"
          name="nest-messages"
          @finish="onFinish"
          class="w-[320px]"
          ref="formRef"
        >
          <a-form-item name="username" class="text-left">
            <a-input
              v-model:value="userInfo.username"
              placeholder="请输入用户名"
              class="w-[100%]"
              allow-clear
              :onblur="runIsUserExists"
            >
              <template #prefix>
                <UserOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="email" class="relative text-left">
            <a-input
              v-model:value="userInfo.email"
              placeholder="请输入邮箱"
              class="w-[100%]"
              allow-clear
            >
              <template #prefix>
                <Icon
                  icon="ic:outline-alternate-email"
                  class="w-[12px] h-[12px] text-[#dcdfde]"
                />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="verificationCode"
            :rules="[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]"
            class="text-left"
          >
            <a-input
              type="text"
              placeholder="验证码"
              v-model:value="userInfo.verificationCode"
              allow-clear
            />
            <a-button
              type="primary"
              class="ml-[10px] rounded-[4px] cursor-pointer inline-block bg-[#ecf5ff] text-[#409eff] border-[#b3d8ff]"
              @click="
                () => isEmailExistsCode === 404 && runSendVerificationCodes()
              "
              >获取验证码</a-button
            >
          </a-form-item>
          <a-form-item name="pass" class="text-left">
            <a-input-password
              v-model:value="userInfo.pass"
              type="password"
              placeholder="设置密码"
              autocomplete="off"
              allow-clear
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item name="checkPass" class="text-left">
            <a-input-password
              v-model:value="userInfo.checkPass"
              type="password"
              autocomplete="off"
              allow-clear
              placeholder="确认密码"
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item class="goRegister w-[100%]">
            <a-button
              type="primary"
              html-type="submit"
              class="w-[150px]"
              @click="onRegister"
              >注册</a-button
            >
            <a-button
              html-type="button"
              style="margin: 0 8px"
              @click="
                () => {
                  login = true;
                  register = false;
                  forgetPwd = false;
                  visible = true;
                }
              "
              class="w-[150px]"
              >去登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <!-- 忘记密码 -->
      <div class="forgetPwd" v-if="forgetPwd">
        <a-form
          :model="userInfo"
          v-bind="layout"
          :rules="rules"
          name="nest-messages"
          @finish="onFinish"
          class="w-[320px]"
        >
          <a-form-item name="email" class="relative text-left">
            <a-input
              v-model:value="userInfo.email"
              placeholder="请输入邮箱"
              class="w-[100%]"
              allow-clear
            >
              <template #prefix>
                <Icon
                  icon="ic:outline-alternate-email"
                  class="w-[12px] h-[12px] text-[#dcdfde]"
                />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="verificationCode"
            :rules="[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]"
            class="text-left"
          >
            <a-input
              type="text"
              placeholder="验证码"
              v-model:value="userInfo.verificationCode"
              allow-clear
            />
            <a-button
              type="primary"
              class="ml-[10px] rounded-[4px] cursor-pointer inline-block bg-[#ecf5ff] text-[#409eff] border-[#b3d8ff]"
              @click="
                () => isEmailExistsCode === 404 && runSendVerificationCodes()
              "
              >获取验证码</a-button
            >
          </a-form-item>
          <a-form-item name="pass" class="text-left">
            <a-input-password
              v-model:value="userInfo.pass"
              type="password"
              placeholder="新密码"
              autocomplete="off"
              allow-clear
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item name="checkPass" class="text-left">
            <a-input-password
              v-model:value="userInfo.checkPass"
              type="password"
              autocomplete="off"
              allow-clear
              placeholder="确认密码"
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon text-[#dcdfde]" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item class="goRegister w-[100%]">
            <a-button type="primary" html-type="submit" class="w-[150px]"
              >重置密码</a-button
            >
            <a-button
              html-type="button"
              style="margin: 0 8px"
              @click="
                () => {
                  login = true;
                  register = false;
                  forgetPwd = false;
                  visible = true;
                }
              "
              class="w-[150px]"
              >去登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
    <!-- 验证滑块 -->
    <Vcode :show="isShow" @success="onSuccess" @close="onClose" />
  </div>
</template>
<script setup lang="ts">
import {
  isUserExists,
  sendVerificationCodes,
  registerUsers,
  isLoginExists,
} from "@/service"; // 引入接口
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { FormInstance, notification } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";
import { useRequest } from "vue-request";
import Vcode from "vue3-puzzle-vcode";
import router from "@/router";
let forgetPwd = ref(false); // 忘记密码页面
let register = ref(false); //注册页面
let login = ref(true); //登录页面
const isShow = ref(false); // 滑块
let success = false;
// 滑块
const onShow = () => {
  isShow.value = true;
};

const onClose = () => {
  isShow.value = false;
};

const onSuccess = () => {
  onClose(); // 验证成功，需要手动关闭模态框
  success = true;
  console.log(success);
  onLogin();
};
// 禁用
const disabled = computed(() => {
  return !(
    formState.usernamel &&
    formState.passwordl &&
    usernamelRegex.test(formState.usernamel) &&
    userPwdRegex.test(formState.passwordl)
  );
});
// 注册
const userInfo = reactive({
  username: "",
  email: "",
  pass: "",
  checkPass: "",
  verificationCode: "",
});
const { run: runIsUserExists } = useRequest(
  () => isUserExists({ username: userInfo.username ?? formState.usernamel }),
  { manual: true }
);
const { data: isEmailExistsCode, run: runIsEmailExists } = useRequest(
  () => isUserExists({ email: userInfo.email }),
  { manual: true }
);
const { data: isSendSuccess, run: runSendVerificationCodes } = useRequest(
  () => sendVerificationCodes({ target: userInfo.email, type: 1 }),
  { manual: true }
);
const { run: runLoginSuccess } = useRequest(
  async () => {
    const response = await isLoginExists({
      username: formState.usernamel,
      password: formState.passwordl,
    });
    // console.log(response);
    if (response === 0) {
      router.push("/index");
    }
  },
  { manual: true }
);
watchEffect(() => {
  if (isSendSuccess.value === 0) {
    notification.open({
      type: "success",
      message: `验证码已发送至${userInfo.email}邮箱，请注意查收`,
    });
  }
});
const visible = ref(false);
const formRef = ref<FormInstance>();
const formRefLogin = ref<FormInstance>();
const formState = reactive({
  usernamel: "",
  passwordl: "",
  rememberl: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const usernamelRegex = /^.{2,20}$/;
const userPwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/;
// 登录页面规则
let checkUserNamel = async (_rule: Rule, value: string) => {
  if (value == "") {
    return Promise.reject("请输入用户名");
  }
  if (!usernamelRegex.test(value)) {
    return Promise.reject("请输入正确的用户名");
  }
  const userNameCode = await isUserExists({ username: formState.usernamel });
  if (userNameCode) {
    return Promise.reject("用户名不存在");
  }
};
let checkUserPwd = async (_rule: Rule, value: string) => {
  if (value == "") {
    console.log(111);
    return Promise.reject("请输入密码");
  }
  if (!userPwdRegex.test(value)) {
    console.log(222);
    return Promise.reject("密码不能少于6位");
  }
};
// 注册页面规则
let checkUserName = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入用户名");
  }
  const usernameRegex = /^.{2,20}$/;
  if (usernameRegex.test(value) === false) {
    return Promise.reject("请输入正确的用户名");
  }
  const userNameCode = await isUserExists({ username: userInfo.username });
  if (!userNameCode) {
    return Promise.reject("用户已存在");
  }
};
let checkEmail = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入邮箱");
  }
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegex.test(value)) {
    return Promise.reject("请输入正确的邮箱格式");
  }
  runIsEmailExists();
  if (isEmailExistsCode.value === 0) {
    return Promise.reject("邮箱已存在");
  }
};
let validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请设置密码");
  } else {
    const pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/;
    if (!pwdRegex.test(userInfo.pass)) {
      return Promise.reject("请设置6-15位由数字和字母组成的密码");
    }
    return Promise.resolve();
  }
};
let validatePass2 = async (_rule: Rule, value: string) => {
  const pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/;
  if (value === "") {
    return Promise.reject("请确认密码");
  }
  if (value !== userInfo.pass && !pwdRegex.test(value)) {
    return Promise.reject("两次密码不一致");
  } else {
    return Promise.resolve();
  }
};
const rules: Record<string, Rule[]> = {
  username: [{ required: true, validator: checkUserName, trigger: "blur" }],
  usernamel: [{ required: true, validator: checkUserNamel, trigger: "blur" }],
  email: [{ required: true, validator: checkEmail, trigger: "blur" }],
  pass: [{ required: true, validator: validatePass, trigger: "blur" }],
  passwordl: [{ required: true, validator: checkUserPwd, trigger: "blur" }],
  checkPass: [{ required: true, validator: validatePass2, trigger: "blur" }],
};
const { run: runRegisterSuccess } = useRequest(
  () =>
    registerUsers({
      avatar: "",
      code: userInfo.verificationCode,
      email: userInfo.email,
      password: userInfo.pass,
      passwordConfirm: userInfo.checkPass,
      username: userInfo.username,
      verification_type: 1,
    }),
  { manual: true }
);
const onRegister = () => {
  if (formRef.value) {
    formRef.value
      .validate()
      .then((res) => {
        console.log(res);
        runRegisterSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
const onLogin = () => {
  if (formRefLogin.value) {
    formRefLogin.value
      .validate()
      .then((res) => {
        runLoginSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>
<style>
/* input,
button {
  height: 40px;
} */
.bg {
  display: flex;
  height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
body {
  background: #f5f5f5;
}
.ant-checkbox-inner {
  background-color: #409eff;
  border-color: #409eff;
}

.goRegister .ant-btn-primary {
  background-color: #409eff;
}
.login .ant-btn-default {
  margin-left: 0px !important;
}
.login .ant-btn-default {
  margin-top: 12px !important;
}
.ant-form-item-explain-error {
  margin-left: 20px;
}
.ant-col-16 {
  max-width: 100%;
}
.register .ant-form-item-control-input-content,
.forgetPwd .ant-form-item-control-input-content {
  display: flex;
  justify-content: space-between;
}
.ant-form-item-control-input {
  display: flex;
  justify-content: space-between;
}
.goRegister button {
  margin: 0px !important;
}
</style>
