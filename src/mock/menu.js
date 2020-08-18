var menusInfo = {
  data: [
    {
        "id": "M0015",
        "name": "权限管理",
        "childMenus": [
            {
                "id": "M0017",
                "pId": "M0015",
                "name": "角色管理",
                "childMenus": [
                    {
                        "id": "M0020",
                        "pId": "M0017",
                        "name": "查看角色",
                        "childMenus": []
                    }
                ]
            },
            {
                "id": "M0018",
                "pId": "M0015",
                "name": "菜单管理",
                "childMenus": [
                    {
                        "id": "M0021",
                        "pId": "M0018",
                        "name": "查看菜单",
                        "childMenus": []
                    }
                ]
            },
            {
                "id": "M0016",
                "pId": "M0015",
                "name": "用户管理",
                "childMenus": [
                    {
                        "id": "M0019",
                        "pId": "M0016",
                        "name": "查看用户",
                        "url": "viewUser.html",
                        "childMenus": []
                    }
                ]
            }
        ]
    },
    {
        "id": "M0001",
        "name": "主页",
        "url": "https://www.baidu.com",
        "childMenus": []
    },
    {
        "id": "M0002",
        "name": "完善信息",
        "childMenus": []
    },
    {
        "id": "M0003",
        "name": "查看已选",
        "childMenus": []
    },
    {
        "id": "M0004",
        "name": "修改密码",
        "childMenus": []
    },
    {
        "id": "M0005",
        "name": "个人信息",
        "childMenus": []
    },
    {
        "id": "M0006",
        "name": "选择老师",
        "childMenus": []
    },
    {
        "id": "M0007",
        "name": "修改信息",
        "childMenus": []
    },
    {
        "id": "M0008",
        "name": "主页内容",
        "childMenus": []
    },
    {
        "id": "M0009",
        "name": "添加指导老师",
        "childMenus": []
    },
    {
        "id": "M0010",
        "name": "添加学生",
        "childMenus": []
    },
    {
        "id": "M0011",
        "name": "查看指导老师",
        "childMenus": []
    },
    {
        "id": "M0012",
        "name": "查看学生状态",
        "childMenus": []
    },
    {
        "id": "M0013",
        "name": "批量导入数据",
        "childMenus": []
    },
    {
        "id": "M0014",
        "name": "重置密码",
        "childMenus": []
    }
],
  meta: {
    msg: '获取菜单成功',
    status: 200
  }
}

var menus = {
  menusInfo
}

export default menus
