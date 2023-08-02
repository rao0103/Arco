<template>
  <div class="flex h-[65px] bg-white">
    <div
      class="w-[180px] flex items-center justify-center cursor-pointer h-[100%]"
    >
      <svg data-v-74f95c37="" width="36" height="36" fill="none">
        <path
          data-v-74f95c37=""
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 31.5c11.375 0 19.5-9.035 19.5-19.787H24c0 6.892-5.045 12.284-12 12.284V31.5z"
          fill="#16D2AC"
        ></path>
        <path
          data-v-74f95c37=""
          d="M4.5 4.5H12v19.508H4.5V4.5z"
          fill="#165DFF"
        ></path>
        <path
          data-v-74f95c37=""
          d="M24 4.5v7.503H4.5V4.5H24zM31.5 4.5v7.503H24V4.5h7.5z"
          fill="#165DFF"
        ></path>
      </svg>
      <span class="ml-[6px] text-[26px] text-[#333]">Arco</span>
    </div>
    <div class="flex h-[100%] flex-1">
      <div class="flex items-center flex-1">
        <div
          class="flex items-center justify-center px-[20px] cursor-pointer text-[16px]"
        >
          <Icon icon="ep:monitor" class="text-[16px] mr-[8px]" />
          <span>工作台</span>
        </div>
        <div
          class="flex items-center justify-center px-[20px] cursor-pointer text-[16px]"
        >
          <Icon
            icon="fluent:data-histogram-20-filled"
            class="text-[16px] mr-[8px]"
          />
          <span>项目</span>
        </div>
        <div
          class="flex items-center justify-center px-[20px] cursor-pointer text-[16px]"
        >
          <Icon icon="fa6-solid:user-check" class="text-[14px] mr-[8px]" />
          <span>部门</span>
        </div>
      </div>
      <div class="flex items-center justify-end flex-1">
        <div class="w-[60px] h-[100%] flex justify-center items-center">
          <Icon icon="octicon:people-24" />
        </div>
        <div class="w-[60px] h-[100%] flex justify-center items-center">
          <Icon icon="bi:bell" />
        </div>
        <div
          class="pl-[20px] pr-[40px] h-[100%] flex items-center cursor-pointer"
        >
          <div
            v-if="isUserInfo?.avatar"
            class="w-[32px] h-[32px] rounded-[32px] mr-[10px]"
          >
            <img :src="isUserInfo?.avatar" class="rounded-full" />
          </div>
          <Icon v-else icon="system-uicons:picture" class="mr-[10px]" />
          <span>{{ isUserInfo?.username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userInfo } from "../../service";
import { useRequest } from "vue-request";
// 用户信息请求
const { data: isUserInfo } = useRequest(() => userInfo(), {});
</script>
