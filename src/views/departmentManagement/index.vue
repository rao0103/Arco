<template>
  <a-layout class="h-[100vh]">
    <a-layout-content style="padding: 0 50px" class="w-[1100px] m-auto">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span> 成员 </span>
              </template>
              <a-menu-item key="1">
                <div class="flex items-center">
                  <Icon
                    icon="akar-icons:people-group"
                    class="mr-[10px]"
                  />所有成员
                </div>
              </a-menu-item>
              <a-menu-item key="2">
                <div class="flex items-center">
                  <Icon
                    icon="fluent-mdl2:people-add"
                    class="mr-[10px]"
                  />新加入的成员
                </div>
              </a-menu-item>
              <a-menu-item key="3">
                <div class="flex items-center">
                  <Icon
                    icon="ant-design:user-outlined"
                    class="mr-[10px]"
                  />未分配部门的成员
                </div>
              </a-menu-item>
              <a-menu-item key="4">
                <div class="flex items-center">
                  <Icon icon="tabler:user-x" class="mr-[10px]" />停用的成员
                </div>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub1">
              <template #title>
                <div class="flex justify-between items-center">
                  <div>部门</div>
                  <div class="cursor-not-allowed flex items-center text-[#ccc]">
                    <Icon icon="gala:add" />
                    创建部门
                  </div>
                </div>
              </template>
              <a-menu-item
                v-for="(item, index) in getDepartmentList?.rows
                  .slice()
                  .sort((a, b) => b.sort - a.sort)"
                :key="String(index + 5)"
                @click="handleClick(item.id)"
              >
                <div class="flex items-center">
                  <Icon
                    icon="teenyicons:git-branch-outline"
                    class="mr-[10px]"
                  />{{ item.name }}
                </div>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <div v-if="selectedKeys2[0] === '1'">
            <div
              class="flex justify-between mb-[18px] leading-[30px] text-[18px]"
            >
              <div>
                所有成员.
                <span>{{ getMemberInfo?.rows.length }}</span>
              </div>
            </div>
            <ul>
              <li
                v-for="(item, index) in getMemberInfo?.rows"
                :key="index"
                class="flex py-[12px] border-t-[1px] border-[#ccc]"
              >
                <img
                  :src="item?.avatar"
                  alt=""
                  class="w-[32px] h-[32px] mr-[15px] rounded-[50%]"
                />
                <div class="leading-[22px]">
                  <p class="cursor-pointer text-left">{{ item.username }}</p>
                  <p class="flex text-[#000] text-opacity-50">
                    <span class="mr-[10px]">{{ item?.email }}</span>
                    <!-- <span>{{ item?.department.name }}</span> -->
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-else-if="selectedKeys2[0] === '2'">
            <div
              class="flex justify-between mb-[18px] leading-[30px] text-[18px]"
            >
              <div>
                新加入的成员.
                <span>{{ getNewMemberInfo?.rows.length }}</span>
              </div>
            </div>
            <ul>
              <li
                v-for="(item, index) in getNewMemberInfo?.rows"
                :key="index"
                class="flex py-[12px] border-t-[1px] border-[#ccc]"
              >
                <img
                  :src="item?.avatar"
                  alt=""
                  class="w-[32px] h-[32px] mr-[15px] rounded-[50%]"
                />

                <div class="leading-[22px]">
                  <p class="cursor-pointer text-left">{{ item.username }}</p>
                  <p class="flex text-[#000] text-opacity-50">
                    <span class="mr-[10px]">{{ item?.email }}</span>
                    <!-- <span>{{ item?.department.name }}</span> -->
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-else-if="selectedKeys2[0] === '3'">
            <div
              class="flex justify-between mb-[18px] leading-[30px] text-[18px]"
            >
              <div>
                未分配部门的成员.
                <span>{{ getUndistributedMemberInfo?.rows.length }}</span>
              </div>
            </div>
            <ul>
              <li
                v-for="(item, index) in getUndistributedMemberInfo?.rows"
                :key="index"
                class="flex py-[12px] border-t-[1px] border-[#ccc]"
              >
                <img
                  :src="item?.avatar"
                  alt=""
                  class="w-[32px] h-[32px] mr-[15px] rounded-[50%]"
                />
                <div class="leading-[22px]">
                  <p class="cursor-pointer text-left">{{ item.username }}</p>
                  <p class="flex text-[#000] text-opacity-50">
                    <span class="mr-[10px]">{{ item?.email }}</span>
                    <!-- <span>{{ item?.department.name }}</span> -->
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-else-if="selectedKeys2[0] === '4'">
            <div
              class="flex justify-between mb-[18px] leading-[30px] text-[18px]"
            >
              <div>
                停用的成员.
                <span>{{ getDeactivateMembers?.rows.length }}</span>
              </div>
            </div>
            <ul>
              <li
                v-for="(item, index) in getDeactivateMembers?.rows"
                :key="index"
                class="flex py-[12px] border-t-[1px] border-[#ccc]"
              >
                <img
                  :src="item?.avatar"
                  alt=""
                  class="w-[32px] h-[32px] mr-[15px] rounded-[50%]"
                />
                <div class="leading-[22px]">
                  <p class="cursor-pointer text-left">{{ item.username }}</p>
                  <p class="flex text-[#000] text-opacity-50">
                    <span class="mr-[10px]">{{ item?.email }}</span>
                    <!-- <span>{{ item?.department.name }}</span> -->
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div
            v-else-if="
              selectedKeys2[0] === '5' ||
              selectedKeys2[0] === '6' ||
              selectedKeys2[0] === '7'
            "
          >
            <div
              class="flex justify-between mb-[18px] leading-[30px] text-[18px] items-center"
            >
              <div>
                {{ getDepartmentDetails.data?.rows[0].department.name }}.{{
                  getDepartmentDetails.data?.rows.length
                }}
              </div>
              <div class="flex items-center">
                <a-button type="link" disabled class="flex items-center">
                  <Icon icon="uiw:user-add" class="mr-[5px]" />添加成员
                </a-button>
                <a-button
                  type="link"
                  class="flex items-center"
                  @click="showModal"
                >
                  <Icon icon="circum:edit" class="mr-[5px]" />编辑部门
                </a-button>
                <a-button type="link" disabled class="flex items-center">
                  <Icon icon="fa6-regular:trash-can" class="mr-[5px]" />
                  删除部门
                </a-button>
              </div>
            </div>
            <ul>
              <li
                v-for="(item, index) in getDepartmentDetails.data?.rows"
                :key="index"
                class="flex py-[12px] border-t-[1px] border-[#ccc]"
              >
                <img
                  :src="item?.avatar"
                  alt=""
                  class="w-[32px] h-[32px] mr-[15px] rounded-[50%]"
                />
                <div class="leading-[22px]">
                  <p class="cursor-pointer text-left">{{ item?.username }}</p>
                  <p class="flex text-[#000] text-opacity-50">
                    <span class="mr-[10px]">{{ item?.email }}</span>
                    <span>{{ item?.department.name }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
  <a-modal
    v-model:open="open"
    title="编辑部门"
    @ok="handleCancel"
    :width="400"
    class="h-[300px]"
  >
    <template #footer></template>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      :rules="rules"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="部门名称" name="departmentName">
        <a-input v-model:value="formState.departmentName" />
      </a-form-item>
      <a-form-item label="排序" name="sort">
        <a-input v-model:value="formState.sort" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" class="bg-[#1677ff]"
          >编辑{{ getDepartmentDetails.data?.rows[0].department }}</a-button
        >
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import {
  departmentList,
  departmentDetails,
  memberInfo,
  newMemberInfo,
  undistributedMemberInfo,
  deactivateMembers,
  changeDepartmentName,
} from "@/service";
import { useRequest } from "vue-request";
import type { Rule } from "ant-design-vue/es/form";
import { ref } from "vue";

const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const getDepartmentDetails = ref();
const open = ref<boolean>(false);
const showModal = () => {
  open.value = true;
};
const handleCancel = () => {
  open.value = false;
};
// 所有成员信息请求
const { data: getMemberInfo } = useRequest(() => memberInfo(""));
// 新加入成员信息请求
const { data: getNewMemberInfo } = useRequest(() => newMemberInfo());
// 未分配部门的成员信息请求
const { data: getUndistributedMemberInfo } = useRequest(() =>
  undistributedMemberInfo()
);
// 停用成员信息请求
const { data: getDeactivateMembers } = useRequest(() => deactivateMembers());
// 部门信息请求
const { data: getDepartmentList } = useRequest(() => departmentList());
// 部门详细数据请求
const handleClick = (id: number) => {
  const res = useRequest(() => departmentDetails(id));
  getDepartmentDetails.value = res;
  console.log(getDepartmentDetails);
};

interface FormState {
  departmentName: string;
  sort: string;
}
const formState = reactive<FormState>({
  departmentName: "",
  sort: "",
});
const departmentNameCode = ref();
const isdepartmentName = (data: {
  id: number;
  name: string;
  owner_id: number;
  parent_id: number;
  sort: number;
  created_at: string;
  updated_at: string;
}) => {
  const res = useRequest(() => changeDepartmentName(data));
  departmentNameCode.value = res;
  console.log(departmentNameCode);
};
// 更改部门名称规则
let changeDepartmentNameRules = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入部门名称");
  }
};
const rules: Record<string, Rule[]> = {
  departmentName: [
    { required: true, validator: changeDepartmentNameRules, trigger: "blur" },
  ],
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.ant-menu-item,
.ant-menu-item-only-child {
  padding-left: 10px !important;
}

.ant-menu-submenu-arrow {
  display: none;
}

.ant-menu-submenu-title {
  padding: 0px 10px 0px 0px !important;
}

.ant-layout {
  padding-top: 100px;
}

.ant-layout-has-sider {
  padding: 20px !important;
  height: 778px !important;
}

.ant-menu {
  background: #fff !important;
}

.ant-menu-item-selected {
  border-right: 2px solid blue;
  border-radius: 0px !important;
}
.ant-modal-content {
  height: 300px;
}
.ant-modal-header {
  margin-bottom: 20px !important;
}
.ant-modal-body {
  height: 150px;
  border-top: 1px solid #ccc;
  padding-top: 30px;
}
.ant-btn {
  padding: 4px 4px;
}

.ant-layout {
  padding-top: 20px;
}
</style>
