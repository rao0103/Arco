interface IBaseResponse<T = null> {
  code: 0 | 404;
  data: T;
  msg: string;
}
type ILoginResponse = IBaseResponse<{
  accessToken: string;
  csrf: string;
  refreshToken: string;
}>;
// 用户信息
type ResponseDataUserInfo = {
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
type IuserInfo = IBaseResponse<ResponseDataUserInfo>;
// 进行中的项目
type IuserOngoingProject = IBaseResponse<ResponseDataProject>;
type ResponseDataProject = {
  count: number;
  rows: [
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    },
    {
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
      creator: { username: string; id: number; avatar: string };
      collector: undefined[];
      member: {
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
        deleted_at: object;
        user_projects: {
          id: number;
          user_id: number;
          project_id: number;
          created_at: string;
          updated_at: string;
        };
      }[];
    }
  ];
};
// 我的任务
type MyTask = IBaseResponse<ResponseDataMyTask>;
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
type MyTaskParmas = | {
  limit: number
  offset: number
  is_done: number
  is_recycle: number
  participator_id: number
} | {
  limit: number
  offset: number
  is_done: number
  is_recycle: number
  executor_ids: number
} | {
  limit: number
  offset: number
  is_done: number
  is_recycle: number
  creator_id: number
}


