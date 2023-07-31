<template>
  <div class="bg-[#f5f5f5] p-[20px] text-[14px]">
    <div>
      <div
        class="px-[30px] h-[120px] flex justify-between items-center mb-[20px] bg-[#fff]"
      >
        <div class="flex items-center">
          <div class="mr-[20px] w-[64px] h-[64px] rounded-full">
            <img :src="isUserInfo?.avatar" alt="" class="rounded-full" />
          </div>
          <div class="leading-[33px]">
            <p class="text-[20px]">
              上午好，{{ isUserInfo?.username }}，祝你开心每一天！
            </p>
            <p class="text-[#737373]">普通用户</p>
          </div>
        </div>
        <div class="text-center">
          <p class="text-[#737373]">项目总数</p>
          <p class="text-[30px] mt-[10px]">24</p>
        </div>
      </div>
      <div class="flex justify-between">
        <!-- 左 -->
        <div class="w-[66.66667%] bg-[#fff] mb-[20px]">
          <div
            class="bg-[#fff] h-[60px] p-[20px] flex justify-between items-center border-b border-[#e8e8e8]"
          >
            <div class="text-[16px]">进行中的项目</div>
            <div class="text-[#409EFF]">全部项目</div>
          </div>
          <div class="flex flex-wrap min-h-[500px]">
            <div
              class="h-[100%] leading-[24px] p-[10px] border-r border-b border-[#e8e8e8] text-[#737373] overflow-hidden relative w-1/4"
              v-for="item in 12"
              :key="item"
            >
              <div
                class="text-[12px] text-center absolute top-0 right-0 w-[70px] bg-[#574EFECC] text-[#fff] pt-[10px] transform origin-top origin-center translate-x-1/2 rotate-45"
              >
                公开
              </div>
              <div class="w-[100%] h-[150px]"></div>
              <div class="text-[#000000BF]">水涨船高日式风格</div>
              <div>暂无介绍</div>
              <a-progress :percent="0" />
              <div
                class="flex justify-between items-center leading-[20px] pt-[10px]"
              >
                <div>熊桑</div>
                <div>4月29日 03:36</div>
              </div>
            </div>
          </div>
          <a-pagination
            v-model:current="current"
            :total="50"
            show-less-items
            class="pb-[20px] mt-[15px] text-center"
          />
        </div>
        <!-- 右 -->
        <div class="flex justify-between w-[33.33333%]">
          <div class="px-[10px] w-[100%]">
            <div class="bg-[#fff]">
              <!-- 我的任务头部 -->
              <div
                class="flex items-center justify-between h-[60px] px-[20px] border-b border-[#e8e8e8]"
              >
                <div>我的任务 - 0</div>
                <a-space>
                  <a-select
                    ref="select"
                    v-model:value="value1"
                    style="width: 120px"
                    :options="options2"
                  >
                    <a-select-option value="jack">未完成</a-select-option>
                  </a-select>
                </a-space>
              </div>
              <!-- 内容1 -->
              <div class="px-[20px]">
                <a-tabs v-model:activeKey="activeKey">
                  <a-tab-pane key="1">
                    <template #tab>
                      <span class="flex items-center">
                        <Icon icon="eva:list-fill" class="mr-[5px]" />
                        我执行的
                      </span>
                    </template>
                    <div class="h-[500px] px-[20px]">
                      <div
                        v-if="myTest"
                        class="h-[510px] flex flex-col items-center justify-center w-[100%]"
                      >
                        <img
                          src="http://192.168.122.36:1024/static/img/empty.0bf7a80e.png"
                          alt=""
                          class="h-[160px]"
                        />
                      </div>
                      <div v-else></div>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane key="2">
                    <template #tab>
                      <span class="flex items-center">
                        <Icon icon="octicon:people-24" class="mr-[5px]" />
                        我参与的
                      </span>
                    </template>
                    <div class="h-[500px] px-[20px]">
                      <div
                        v-if="myTest"
                        class="h-[510px] flex flex-col items-center justify-center w-[100%]"
                      >
                        <img
                          src="http://192.168.122.36:1024/static/img/empty.0bf7a80e.png"
                          alt=""
                          class="h-[160px]"
                        />
                      </div>
                      <div v-else></div>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane key="3">
                    <template #tab>
                      <span class="flex items-center">
                        <Icon icon="carbon:add-alt" class="mr-[5px]" />
                        我创建的
                      </span>
                    </template>
                    <div class="h-[500px] px-[20px]">
                      <div
                        v-if="myTest"
                        class="h-[510px] flex flex-col items-center justify-center w-[100%]"
                      >
                        <img
                          src="http://192.168.122.36:1024/static/img/empty.0bf7a80e.png"
                          alt=""
                          class="h-[160px]"
                        />
                      </div>
                      <div v-else></div>
                    </div>
                  </a-tab-pane>
                </a-tabs>
              </div>
              <!-- 内容2 -->

              <!-- 内容3 -->
              <div class="h-[32px] pb-[20px] mt-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { SelectProps } from "ant-design-vue";
import { useRequest } from "vue-request";
import { userInfo } from "@/service";
// 我的任务头部
const value1 = ref("未完成");
const options2 = ref<SelectProps["options"]>([
  {
    value: "未完成",
    label: "未完成",
  },
  {
    value: "已完成",
    label: "已完成",
  },
]);
// 我的任务标签页
const activeKey = ref("1");
// 我的任务
const myTest = ref(true);
// 分页
const current = ref(2);
console.log(userInfo);
// 用户信息请求
const { data: isUserInfo } = useRequest(() => userInfo(), {});
</script>
<style>
.ant-progress-text {
  display: none !important;
}
.ant-progress-bg {
  height: 3px !important;
}
</style>
