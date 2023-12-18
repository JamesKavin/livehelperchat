import { writable } from 'svelte/store';

export const lhcList = writable({
    onlineusers : {"list" : []},
    onlineusersGrouped : [],
    onlineusers_tt : 0,
    department_online : [],
    department_online_dpgroups : [],
    department_onlineNames: [],

    lhcCoreLoaded : false,
    lhcVersion: 0,
    last_actions_index: 0,
    last_actions: [],
    userDepartments: [],
    userProductNames: [],
    userDepartmentsGroups: [],
    userGroups: [],
    userList: [],
    widgets: [],
    additionalColumns: [],
    excludeIcons: [],
    notifIcons: [],
    departmentd: [],
    departmentd_dpgroups: [],
    departmentdNames: [],
    operatord: [],
    operatord_dpgroups: [],
    operatord_ugroups: [],
    operatordNames: [],
    actived: [],
    actived_products: [],
    actived_dpgroups: [],
    actived_ugroups: [],
    activedNames: [],
    mcd: [],
    mcd_products: [],
    mcd_dpgroups: [],
    mcdNames: [],
    unreadd: [],
    unreadd_products: [],
    unreadd_dpgroups: [],
    unreaddNames: [],
    pendingd: [],
    pendingd_products: [],
    pendingd_dpgroups: [],
    pendingd_ugroups: [],
    pendingdNames: [],
    botd: [],
    botd_products: [],
    botd_dpgroups: [],
    botd_ugroups: [],
    botdNames: [],
    subjectd: [],
    subjectd_products: [],
    subjectd_dpgroups: [],
    subjectd_ugroups: [],
    subjectdNames: [],
    closedd: [],
    closedd_products: [],
    closedd_dpgroups: [],
    closeddNames: [],
    statusNotifications: [],
    toggleWidgetData: [],
    isListLoaded: false,
    activeu: [],
    pendingu: [],
    subjectu: [],
    oopu: [],
    custom_extension_filter : '',
    depFilterText : '',
    userFilterText : '',
    limitb : "10",
    limita : "10",
    limitu : "10",
    limitp : "10",
    limito : String(confLH.dlist.op_n),
    limitc : "10",
    limitd : "10",
    limitmc : "10",
    limitgc : "10",
    limits : "10",
    new_group_type : "1",
    bot_st: {},
    departmentd_hide_dep : false,
    departmentd_hide_dgroup : false,
    lmtoggle : false,
    rmtoggle : false,
    current_user_id : confLH.user_id,
    group_chats: []
});

export const lhcTranslations = writable({});
export const lhcLanguages = writable({});