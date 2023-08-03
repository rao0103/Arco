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
              {{ determineTimes(hours) }}，{{
                isUserInfo?.username
              }}，祝你开心每一天！
            </p>
            <p class="text-[#737373]">{{ isUserInfo?.roles[0].name }}</p>
          </div>
        </div>
        <div class="text-center">
          <p class="text-[#737373]">项目总数</p>
          <p class="text-[30px] mt-[10px]">{{ total }}</p>
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
              class="h-[100%] leading-[24px] p-[10px] border-r border-b border-[#e8e8e8] text-[#737373] overflow-hidden relative w-1/4 hover:shadow-[0_0_6px_rgba(204,204,204,1)]"
              v-for="item in isOngoingProject"
              :key="item.id"
              @click="ongoingJump(item.id)"
            >
              <div
                class="text-[12px] text-center absolute top-0 right-0 w-[70px] bg-[#574EFECC] text-[#fff] pt-[10px] transform origin translate-x-1/2 rotate-45"
              >
                公开
              </div>
              <div class="w-[100%] h-[150px]">
                <img
                  :src="`http://192.168.122.36:1024${item.cover}`"
                  alt=""
                  class="w-[100%] h-[100%]"
                />
              </div>
              <div class="text-[#000000BF] truncate">{{ item.name }}</div>
              <div class="truncate">
                {{ item.intro ? item.intro : "暂无介绍" }}
              </div>
              <a-progress :percent="item.progress" :style="{ width: '100%' }" />
              <div
                class="flex justify-between items-center leading-[20px] pt-[10px]"
              >
                <div>{{ item.creator?.username }}</div>
                <div>
                  {{
                    Number(item.created_at.slice(0, 4)) != currentYear
                      ? item.created_at.slice(0, 11)
                      : item.created_at.slice(5, 11)
                  }}
                  {{ item.created_at.slice(11, 16) }}
                </div>
              </div>
            </div>
          </div>
          <a-pagination
            v-model:current="current"
            v-model:page-size="limit"
            :total="total"
            :pageSizeOptions="['2', '5', '8', '10']"
            class="pb-[20px] mt-[15px] text-center"
            :defaultPageSize="2"
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
                <div>我的任务 - {{ dataTask?.count }}</div>
                <a-space>
                  <a-select
                    ref="select"
                    v-model:value="CompletedOrNot"
                    style="width: 120px"
                  >
                    <a-select-option :value="0">未完成</a-select-option>
                    <a-select-option :value="1">已完成</a-select-option>
                  </a-select>
                </a-space>
              </div>
              <!-- 内容1 -->
              <div class="px-[20px]">
                <a-tabs
                  v-model:activeKey="IdentityID"
                  @tab-click="runTaskPriority"
                >
                  <a-tab-pane key="executor_ids">
                    <template #tab>
                      <span class="flex items-center">
                        <Icon icon="eva:list-fill" class="mr-[5px]" />
                        我执行的
                      </span>
                    </template>
                    <div class="h-[500px] px-[20px]">
                      <div
                        v-if="dataTask?.count == 0"
                        class="h-[510px] flex flex-col items-center justify-center w-[100%]"
                      >
                        <img
                          src="http://192.168.122.36:1024/static/img/empty.0bf7a80e.png"
                          alt=""
                          class="h-[160px]"
                        />
                        <div
                          class="leading-[40px] text-[16px] pl-[20px] text-[#00000073]"
                        >
                          空空如也~
                        </div>
                      </div>
                      <div v-else>
                        <div
                          class="flex justify-between items-center h-[48px] border-b border-[#e8e8e8]"
                          v-for="item in dataTask?.rows"
                          :key="item.id"
                        >
                          <span
                            class="h-[20px] px-[5px] leading-[19px] text-[12px] rounded-[4px]"
                            :class="priorityColor(item.task_priority_id)"
                          >
                            {{ priority(item.task_priority_id) }}
                          </span>
                          <div
                            class="flex-1 px-[10px] text-[#1B9AEe] cursor-pointer truncate"
                          >
                            {{ item.name }}
                          </div>
                          <div
                            class="w-[100px] cursor-pointer text-[#00000073] truncate"
                          >
                            {{ item.project.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane key="participator_id">
                    <template #tab>
                      <span class="flex items-center">
                        <Icon icon="octicon:people-24" class="mr-[5px]" />
                        我参与的
                      </span>
                    </template>
                    <div class="h-[500px] px-[20px]">
                      <div
                        v-if="dataTask?.count == 0"
                        class="h-[510px] flex flex-col items-center justify-center w-[100%]"
                      >
                        <img
                          src="http://192.168.122.36:1024/static/img/empty.0bf7a80e.png"
                          alt=""
                          class="h-[160px]"
                        />
                        <div
                          class="leading-[40px] text-[16px] pl-[20px] text-[#00000073]"
                        >
                          空空如也~
                        </div>
                      </div>
                      <div v-else>
                        <div
                          class="flex justify-between items-center h-[48px] border-b border-[#e8e8e8]"
                          v-for="item in dataTask?.rows"
                          :key="item.id"
                        >
                          <span
                            class="h-[20px] px-[5px] leading-[19px] text-[12px] rounded-[4px]"
                            :class="priorityColor(item.task_priority_id)"
                          >
                            {{ priority(item.task_priority_id) }}
                          </span>
                          <div
                            class="flex-1 px-[10px] text-[#1B9AEe] cursor-pointer truncate"
                          >
                            {{ item.name }}
                          </div>
                          <div
                            class="w-[100px] cursor-pointer text-[#00000073] truncate"
                          >
                            {{ item.project.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane key="creator_id">
                    <template #tab>
                      <span class="flex items-center">
                        <Icon icon="carbon:add-alt" class="mr-[5px]" />
                        我创建的
                      </span>
                    </template>
                    <div class="h-[500px] px-[20px]">
                      <div
                        v-if="dataTask?.count == 0"
                        class="h-[510px] flex flex-col items-center justify-center w-[100%]"
                      >
                        <img
                          src="http://192.168.122.36:1024/static/img/empty.0bf7a80e.png"
                          alt=""
                          class="h-[160px]"
                        />
                        <div
                          class="leading-[40px] text-[16px] pl-[20px] text-[#00000073]"
                        >
                          空空如也~
                        </div>
                      </div>
                      <div v-else>
                        <div
                          class="flex justify-between items-center h-[48px] border-b border-[#e8e8e8]"
                          v-for="item in dataTask?.rows"
                          :key="item.id"
                        >
                          <span
                            class="h-[20px] px-[5px] leading-[19px] text-[12px] rounded-[4px]"
                            :class="priorityColor(item.task_priority_id)"
                          >
                            {{ priority(item.task_priority_id) }}
                          </span>
                          <div
                            class="flex-1 px-[10px] text-[#1B9AEe] cursor-pointer truncate"
                          >
                            {{ item.name }}
                          </div>
                          <div
                            class="w-[100px] cursor-pointer text-[#00000073] truncate"
                          >
                            {{ item.project.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-tab-pane>
                </a-tabs>
              </div>
              <!-- 内容3 -->
              <div class="pb-[20px] mt-[20px]">
                <a-pagination
                  v-model:current="Taskcurrent"
                  :total="dataTask?.count"
                  :hideOnSinglePage="true"
                  class="px-[5px] py-[2px] text-[#000] text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRequest } from "vue-request";
import { userInfo, userOngoingProject, taskPrioritysList } from "@/service";
import usePagination from "@/hooks/usePagination";
import router from "@/router";
// date-fns

// 我的任务头部
const timeResult = ref("");
// 我的任务
const myTest = ref(false);
console.log(userInfo);
// 用户信息请求
const { data: isUserInfo } = useRequest(() => userInfo(), {
  onSuccess: () => {
    runTaskPriority();
  },
});
watchEffect(() => {
  console.log(isUserInfo);
});
// 进行中的项目数据请求
const { data } = useRequest(
  () => userOngoingProject({ is_recycle: 0, is_archived: 0 }),
  {
    onSuccess: () => {
      console.log(data);
    },
  }
);
// 进行中的项目页面跳转
const ongoingJump = (id: number) => {
  router.push({ path: "/Project/", query: { id } });
};
// 项目分页
// 每一页的数据条数
const limit = ref(12);
const { data: isOngoingProject, total, current } = usePagination(data, limit);
// const dataProject = Object.values(isOngoingProject).reverse();

// 我的任务
const CompletedOrNot = ref(0); // 未完成/已完成
const IdentityID = ref("executor_ids"); // 第五个参数的变化
const Taskcurrent = ref(1); // 我的任务分页默认页数
const dataTask = ref(); // 我的任务响应式数据
// 判断权重
const priority = (id: number) => {
  if (id === 2) {
    return "普通";
  } else if (id === 4) {
    return "紧急";
  } else {
    return "非常紧急";
  }
};
// 判断颜色
const priorityColor = (id: number) => {
  if (id === 2) {
    return "text-[#1B9AEe] border border-[#1B9AEe]";
  } else if (id === 4) {
    return "text-[#FA8C15] border border-[#FA8C15]";
  } else {
    return "text-[#E62412] border border-[#E62412]";
  }
};

// 我的任务请求
const { run: runTaskPriority } = useRequest(
  () =>
    taskPrioritysList({
      limit: 10,
      offset: (Taskcurrent.value - 1) * 10,
      is_done: CompletedOrNot.value, //完成状态
      is_recycle: 0,
      [IdentityID.value]: isUserInfo.value?.id,
      // eslint-disable-next-line no-undef
    } as MyTaskParmas),
  {
    manual: true,
    onSuccess(data) {
      //   console.log("Taskcurrent.value", (Taskcurrent.value - 1) * 10);
      //   console.log("CompletedOrNot.value", CompletedOrNot.value);

      dataTask.value = data;
      //   console.log("data", data);
      //   console.log(dataTask.value);
      //   console.log(Taskcurrent.value);

      console.log(isUserInfo.value?.id);
    },
  }
);
watch([CompletedOrNot, IdentityID, Taskcurrent], () => {
  runTaskPriority();
});
watch([CompletedOrNot, IdentityID], () => {
  Taskcurrent.value = 1;
});
// 判断上午还是下午好
const times = new Date();
const currentYear = times.getFullYear();
// console.log(currentYear);
console.log(times);
const hours = times.getHours();
console.log(hours);

const determineTimes = (hours: number) => {
  if (hours < 11) {
    return (timeResult.value = "上午好");
  } else if (hours <= 12 && hours >= 11) {
    return (timeResult.value = "中午好");
  } else if (hours > 12 && hours < 18) {
    return (timeResult.value = "下午好");
  } else {
    return (timeResult.value = "晚上好");
  }
};
</script>
<style>
body {
  background-color: #f5f5f5;
}
.ant-progress-text {
  display: none !important;
}
.ant-progress-bg {
  height: 3px !important;
}
.ant-progress-outer {
  padding-right: 0 !important;
}
.origin {
  transform-origin: top center;
}
</style>
