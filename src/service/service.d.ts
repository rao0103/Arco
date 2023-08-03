interface IBaseResponse<T = null> {
  code: 0 | 404;
  data: T;
  msg: string;
}
type TLoginResponse = IBaseResponse<{
  accessToken: string;
  refreshToken: string;
  csrf: string;
}>;
type ILoginResponse = IBaseResponse<{
  accessToken: string;
  csrf: string;
  refreshToken: string;
}>;
type ResponseData = {
  id: number;
  user_id_github: number;
  username: string;
  department_id: object;
  nickname: string;
  email: string;
  state: number;
  phone: string;
  avatar: string;
  company: string;
  city: string;
  last_login: string;
  created_at: string;
  updated_at: string;
  roles: {
    id: number;
    name: string;
    is_default: number;
    created_at: string;
    updated_at: string;
    user_roles: {
      id: number;
      user_id: number;
      role_id: number;
      created_at: string;
      updated_at: string;
    };
    permissions: {
      id: number;
      url: string;
      action: string;
      role_permissions: {
        id: number;
        role_id: number;
        permission_id: number;
        created_at: string;
        updated_at: string;
      };
    }[];
  }[];
  permissions: string[];
};
type IuserInfo = IBaseResponse<ResponseData>;
type TOverviewData = IBaseResponse<{
  taskCount: number;
  done: number;
  undone: number;
  overdue: number;
  unreceived: number;
  dueToday: number;
  completedOverdue: number;
  taskPriority: {
    [key: string]: number;
  };
  taskState: {
    [key: string]: number;
  };
  taskType: {
    [key: string]: number;
  };
}>;
type TaskLogData = IBaseResponse<{
  count: number;
  rows: {
    id: number;
    remark: string;
    task_id: number;
    project_id: number;
    operator_id: number;
    icon: string;
    content: string;
    is_comment: number;
    type: string;
    created_at: string;
    updated_at: string;
    operator: {
      id: number;
      user_id_github: number;
      username: string;
      department_id: number | null;
      nickname: string;
      password: string;
      email: string;
      state: number;
      phone: string;
      avatar: string;
      company: string;
      city: string;
      last_login: string;
      created_at: string;
      deleted_at: string | null;
    };
    task: { id: number; name: string };
  };
}>;
type TAllItem = IBaseResponse<{
  count: number;
  rows: {
    id: number;
    name: string;
    parent_id: number;
    manager_id: number;
    project_template_id: number;
    progress: number;
    cover: string;
    is_recycle: number;
    is_archived: number;
    is_private: number;
    is_auto_progress: number;
    state: number;
    intro: string;
    created_at: string;
    updated_at: string;
    creator: {
      username: string;
      id: number;
      avatar: string;
    };
    collector: never[]; // Assuming it's an array of any type
    member: {
      id: number;
      user_id_github: number;
      username: string;
      department_id: number | null;
      nickname: string;
      email: string;
      state: number;
      phone: string;
      avatar: string;
      company: string;
      city: string;
      last_login: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      user_projects: {
        id: number;
        user_id: number;
        project_id: number;
        created_at: string;
        updated_at: string;
      };
    };
  };
}>;
// 路由
type TLayout = IBaseResponse<
  {
    id: number;
    name: string;
    path: string;
    parent_id: number;
    icon: string;
    title: string;
    hidden: number;
    always_show: number;
    keep_alive: number;
    target: string;
    component: string | (() => Promise<any>);
    redirect: string;
    sort: number;
    role_menus: {
      id: number;
      role_id: number;
      menu_id: number;
      created_at: string;
      updated_at: string;
    };
  }[]
>;
// 进行中的项目
type IuserOngoingProject = IBaseResponse<ResponseDataProject>;
type MyTaskParmas =
  | {
      limit: number;
      offset: number;
      is_done: number;
      is_recycle: number;
      participator_id: number;
    }
  | {
      limit: number;
      offset: number;
      is_done: number;
      is_recycle: number;
      executor_ids: number;
    }
  | {
      limit: number;
      offset: number;
      is_done: number;
      is_recycle: number;
      creator_id: number;
    };
type ResponseDataMyTask = {
  code: number;
  data: {
    count: number;
    rows: {
      id: number;
      name: string;
      creator_id: number;
      project_id: number;
      parent_id: number;
      task_list_id: number;
      task_state_id: number;
      task_type_id: number;
      task_priority_id: number;
      executor_id: number;
      start_date: string;
      end_date: string;
      remark: object;
      is_done: number;
      is_privacy: number;
      is_recycle: number;
      likes: number;
      plan_work_hours: number;
      sort: number;
      created_at: string;
      updated_at: string;
      task_tags: undefined[];
      executor: { username: string; id: number; avatar: string };
      participators: { id: number; username: string; avatar: string }[];
      project: {
        id: number;
        name: string;
        member: { id: number; username: string }[];
      };
      likers: undefined[];
    }[];
  };
  msg: string;
};
type MyTask = IBaseResponse<ResponseDataMyTask>;
type Tlist = {
  code: 0 | 404;
  data: {
    count: number;
    rows: {
      id: number;
      name: string;
      owner_id: number;
      parent_id: number;
      sort: number;
      created_at: string;
      updated_at: string;
    }[];
  };
  msg: string;
};
type Tmember = {
  code: number;
  data: {
    count: number;
    rows: [
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: object;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: object;
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: object;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: object;
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: {
          id: number;
          user_projects: {
            id: number;
            user_id: number;
            project_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      },
      {
        id: number;
        user_id_github: number;
        username: string;
        department_id: number;
        nickname: string;
        email: string;
        state: number;
        phone: string;
        avatar: string;
        company: string;
        city: string;
        last_login: string;
        created_at: string;
        updated_at: string;
        projects: undefined[];
        roles: {
          id: number;
          name: string;
          user_roles: {
            id: number;
            user_id: number;
            role_id: number;
            created_at: string;
            updated_at: string;
          };
        }[];
        department: { id: number; name: string };
      }
    ];
  };
  msg: string;
};
type TchangeNepartmentName = {
  code: number;
  data: {
    error: string;
    detail: {
      message: string;
      type: string;
      path: string;
      value: string;
      origin: string;
      instance: object;
      validatorKey: string;
      validatorName: object;
      validatorArgs: undefined[];
    }[];
  };
  msg: string;
};
