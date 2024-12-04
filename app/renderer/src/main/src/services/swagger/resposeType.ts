/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export declare namespace API {
    export interface YakVersionsInfoResponse {
        data: YakVersionsInfoDetail[]
    }
    export interface YakVersionsInfoDetail {
        type: string
        content: string
    }
    export interface YakitPluginParam {
        field: string
        default_value: string
        type_verbose: string
        field_verbose: string
        help: string
        required?: boolean
        group?: string
        extra_setting?: string
        method_type?: string
    }
    export interface WsRequest {
        /**
         * 类型必传, messageLog 消息通知, notepad 共享记事本
         */
        messageType: string
        params: object
    }
    export interface WebsocketFlowResponse extends Paging {
        data: WebsocketFlowList[]
    }
    export interface WebsocketFlowList extends GormBaseModel, WebsocketFlowDetail {}
    export interface WebsocketFlowDetail {
        websocketRequestHash: string
        frameIndex: number
        fromServer: boolean
        messageType: string
        data: string
        dataSizeVerbose: string
        dataLength: number
        dataVerbose: string
        isJson: boolean
        isProtobuf: boolean
    }
    export interface UserOrdinaryResponse {
        data: UserList[]
    }
    export interface UserListResponse extends Paging {
        data: UserList[]
    }
    export interface UserList {
        id: number
        created_at: number
        updated_at: number
        name: string
        from_platform: string
        email?: string
        appid: string
        head_img: string
        role: string
    }
    export interface UserInfoByToken {
        token: string
    }
    export interface UserData {
        from_platform: string
        appid: string
        head_img: string
        name: string
        token: string
        role: string
        user_id: number
        uid?: string
        /**
         * 判断是否首次登录
         */
        loginTime?: number
        /**
         * 企业版用户是否有审核权限
         */
        checkPlugin: boolean
    }
    export interface UrmUserListResponse extends Paging {
        data: UrmUserList[]
    }
    export interface UrmUserList {
        id: number
        created_at: number
        user_name: string
        head_img: string
        from_platform: string
        uid: string
        department_id?: number
        department_name?: string
        role_id?: number
        role_name?: string
        department_parent_id?: number
        department_parent_name?: string
    }
    export interface UrmLoginRequest {
        user_name: string
        pwd: string
    }
    export interface UrmEditListResponse {
        data: UrmUserList
    }
    export interface UpUserInfoRequest {
        old_pwd?: string
        pwd?: string
        confirm_pwd?: string
        head_img?: string
    }
    export interface UpPluginsUserRequest {
        uuid: string[]
        user_id: number
    }
    export interface UpPluginsPrivateRequest {
        uuid: string
        is_private: boolean
    }
    export interface UploadDataResponseDetail {
        userName: string
        fileName: string
        filePath: string
    }
    export interface UploadDataResponse extends Paging {
        data: UploadDataList[]
    }
    export interface UploadDataList extends GormBaseModel, UploadDataResponseDetail {}
    export interface UpdateUserRole {
        appid: string[]
        operation: string
        role?: string
    }
    export interface TouristRequest {
        macCode: string
    }
    export interface TouristIncrResponse {
        data: TouristIncrDetail[]
    }
    export interface TouristIncrDetail {
        /**
         * 图表纵坐标
         */
        count: number
        /**
         * 图表横坐标
         */
        searchTime: string
    }
    export interface TouristCityResponse {
        /**
         * 总数
         */
        total: number
        /**
         * 日期
         */
        date: number
        data: TouristCityCount[]
    }
    export interface TouristCityCount {
        city: string
        count: number
    }
    export interface TouristAndUserResponse {
        /**
         * 总游客数
         */
        touristTotal: number
        /**
         * 总登录用户数
         */
        loginTotal: number
        /**
         * 日增量
         */
        dayNew: number
        /**
         * 日增率
         */
        dayGain: string
        /**
         * up 增 down 减
         */
        dayGainUpOrDown?: string
        /**
         * 日活
         */
        dayActive: number
        /**
         * 日活增率
         */
        dayActiveGain: string
        /**
         * up 增 down 减
         */
        dayActiveGainUpOrDown: string
        /**
         * 周增量
         */
        weekNew: number
        /**
         * 周增率
         */
        weekGain: string
        /**
         * up 增 down 减
         */
        weekGainUpOrDown?: string
        /**
         * 周活
         */
        weekActive: number
        /**
         * 周活增率
         */
        weekActiveGain: string
        /**
         * up 增 down 减
         */
        weekActiveGainUpOrDown: string
        /**
         * 月增量
         */
        monthNew: number
        /**
         * 月增率
         */
        monthGain: string
        /**
         * up 增 down 减
         */
        monthGainUpOrDown?: string
        /**
         * 月活
         */
        monthActive: number
        /**
         * 月活增率
         */
        monthActiveGain: string
        /**
         * up 增 down 减
         */
        monthActiveGainUpOrDown: string
        dayTimes: number
        /**
         * 当天时长增率
         */
        dayTimesGain: string
        /**
         * up 增 down 减
         */
        dayTimesGainUpOrDown: string
        weekTimes: number
        /**
         * 本周时长增率
         */
        weekTimesGain: string
        /**
         * up 增 down 减
         */
        weekTimesGainUpOrDown: string
        monthTimes: number
        /**
         * 本月时长增率
         */
        monthTimesGain: string
        /**
         * up 增 down 减
         */
        monthTimesGainUpOrDown: string
        /**
         * 机构总数
         */
        institutionTotal: number
    }
    export interface TouristActiveResponse {
        data: TouristActiveDetail[]
    }
    export interface TouristActiveDetail {
        /**
         * 图表纵坐标
         */
        count: number
        /**
         * 图表横坐标
         */
        searchTime: string
    }
    export interface SystemConfigResponse extends Paging {
        data: SystemConfigList[]
    }
    export interface SystemConfigList extends GormBaseModel, SystemConfigDetail {}
    export interface SystemConfigDetail {
        configName: string
        isOpen: boolean
        content: string
    }
    export interface ShareResponse {
        share_id: string
        extract_code?: string
        token?: string
    }
    export interface ShareRequest {
        expired_time: number
        module: string
        share_content: string
        pwd: boolean
        share_id?: string
        limit_num?: number
        token?: string
    }
    export interface RoleListResponse extends Paging {
        data: RoleList[]
    }
    export interface RoleList {
        id: number
        name: string
        createdAt: number
        checkPlugin: boolean
    }
    export interface RiskUploadResponse extends Paging {
        data: RiskLists[]
    }
    export interface RiskTypes {
        risk_type: string
    }
    export interface RiskTypeResponse {
        data: RiskTypes[]
    }
    export interface RiskRequest {
        projectName: string
        content: string
    }
    export interface RiskLists extends GormBaseModel, RiskList {}
    export interface RiskList {
        hash: string
        user_name: string
        rish_hash: string
        ip: string
        ip_integer: number
        url: string
        port: number
        host: string
        title: string
        title_verbose: string
        risk_type: string
        risk_type_verbose: string
        parameter: string
        payload: string
        details: string
        severity: string
        from_yak_script: string
        waiting_verified: boolean
        reverse_token: string
        runtime_id: string
        quoted_request: string
        quoted_response: string
        is_potential: boolean
        cve: string
        description: string
        solution: string
        risk_created_at: number
        project_name: string
    }
    export interface RemoteTunnelResponse {
        server: string
        secret: string
        gen_tls_crt: string
    }
    export interface RemoteStatusResponse {
        status: boolean
        /**
         * 控制端人员
         */
        user_name: string
    }
    export interface RemoteResponse extends Paging {
        data: RemoteLists[]
    }
    export interface RemoteOperationResponseData {
        port: number
        note: string
        id: string
        auth: string
        host: string
    }
    export interface RemoteOperationResponse {
        data: RemoteOperationResponseData[]
    }
    export interface RemoteOperationRequest {
        tunnel: string
        addr: string
        auth: string
        note: string
        /**
         * true 连接, false 断开连接
         */
        status: boolean
    }
    export interface RemoteLists extends GormBaseModel, RemoteList {}
    export interface RemoteList {
        hash: string
        addr: string
        status: boolean
        user_name: string
        head_img: string
    }
    export interface ProjectListResponse extends Paging {
        data: ProjectList[]
    }
    export interface ProjectListDetail {
        userName: string
        fileName: string
        fileSize: string
        filePath: string
    }
    export interface ProjectList extends GormBaseModel, ProjectListDetail {}
    export interface Principle {
        user: string
        role: string
        user_id: number
        head_img: string
        from_platform: string
        uid: string
    }
    export interface PostPluginsResponse extends PluginsDetail {
        isUpdate?: boolean
    }
    export interface PostNotepadRequest {
        hash?: string
        title: string
        content: string
    }
    export interface PostNotepadPermissionRequest {
        notepadHash: string
        userId: number[]
        /**
         *  'view', 'edit' 读写权限 '' 默认移除
         */
        permissionType: string
    }
    export interface PluginTypeListResponse {
        data: PluginTypeList[]
    }
    export interface PluginTypeList {
        id: number
        script_name: string
    }
    export interface PluginTopSearchResponse {
        data: PluginTopSearch[]
    }
    export interface PluginTopSearch {
        member: string
        score: number
    }
    export interface PluginsWhereListRequest extends PluginsWhere, PluginsWhereList {}
    export interface PluginsWhereList {
        token?: string
        /**
         * 审核流程更新,需要提示强制更新版本
         */
        upgrade?: boolean
    }
    export interface PluginsWhereDownloadRequest extends PluginsWhere, PluginsWhereDownload {}
    export interface PluginsWhereDownload {
        /**
         * 勾选删除
         */
        uuid?: string[]
        page?: number
        limit?: number
        token?: string
    }
    export interface PluginsWhereDeleteRequest extends PluginsWhere, PluginsWhereDelete {}
    export interface PluginsWhereDelete {
        /**
         * 删除原因
         */
        description?: string
        /**
         * 勾选删除
         */
        uuid?: string[]
    }
    export interface PluginsWhere {
        /** 这个其实是一个boolean类型的数组，
         * 但是后端没法表达boolean数组，
         * 所以每次更新时，需要将后端的转换定义名改成《boolean》
         */
        is_private?: boolean[]
        keywords?: string
        plugin_type?: string[]
        tags?: string[]
        user_name?: string
        user_id?: number
        /**
         * 默认 为所有时间, 当天 day, 本周 week, 本月 month, 年 year
         */
        time_search?: string
        /**
         * 默认首页, mine 个人, recycle 回收站 check 审核页面, other 其他情况(针对yakit下载所以不区分私密公开)
         */
        listType?: string
        /**
         * 审核状态,0待审核，1通过审核，2审核不通过，3审核中
         */
        status?: number[]
        /**
         * 根据插件名批量搜索
         */
        script_name?: string[]
        pluginGroup?: PluginsWherePluginGroup
        excludePluginTypes?: string[]
        /**
         * scriptName/help 模糊搜索
         */
        fieldKeywords?: string
    }
    export interface PluginsWherePluginGroup {
        unSetGroup?: boolean
        group?: string[]
    }
    export interface PluginsWhereIsPrivate {}
    export interface PluginsSearchResponse {
        data: PluginsSearch[]
    }
    export interface PluginsSearchRequest {
        /**
         * 默认首页 mine 个人, recycle 回收站 check 审核页面
         */
        listType?: string
        token?: string
    }
    export interface PluginsSearchData {
        value: string
        count: number
        label: string
    }
    export interface PluginsSearch {
        groupKey: string
        groupName: string
        sort: number
        data: PluginsSearchData[]
    }
    export interface PluginsRiskDetail {
        level: string
        typeVerbose: string
        cve: string
        /**
         * 漏洞描述
         */
        description: string
        /**
         * 修复建议
         */
        solution: string
    }
    export interface PluginsResponse {
        id: number
        uuid: string
    }
    export interface PluginsRequest {
        type?: string
        content?: string
        params?: YakitPluginParam[]
        help?: string
        tags?: string[]
        script_name: string
        enable_plugin_selector?: boolean
        plugin_selector_types?: string
        is_general_module?: boolean
        download_total?: number
        is_private?: boolean
        group?: string
        riskInfo?: PluginsRiskDetail[]
        isCorePlugin?: boolean
        /**
         * 插件附件
         */
        pluginSupplement?: string
        pluginEnvKey?: string[]
    }
    export interface PluginsRecycleRequest extends PluginsWhere, PluginsRecycle {}
    export interface PluginsRecycle {
        /**
         * 勾选删除
         */
        uuid?: string[]
        /**
         * 必传, true 彻底删除, false还原
         */
        dumpType: string
    }
    export interface PluginsLogsTabResponse {
        data: PluginsLogsTab[]
    }
    export interface PluginsLogsTab {
        tabName: string
        count: number
    }
    export interface PluginsLogsResponse extends Paging {
        data: PluginsLogsDetail[]
    }
    export interface PluginsLogsDetailExpand {
        /**
         * 上级评论内容
         */
        parentComment?: LogsDetail
        /**
         * 合并处理人信息
         */
        handleUser?: HandleUser
    }
    export interface PluginsLogsDetail extends LogsDetail, PluginsLogsDetailExpand {}
    export interface PluginsListResponse extends Paging {
        data: PluginsDetail[]
    }
    export interface PluginsGroupWhere {
        uuid?: string[]
    }
    export interface PluginsGroupResponse {
        setGroup: string[]
        allGroup: string[]
    }
    export interface PluginsGroupRequest extends PluginsWhere, PluginsGroupWhere {}
    export interface PluginsGroup {
        uuid: string[]
        saveGroup: string[]
        removeGroup: string[]
    }
    export interface PluginsEditRequest extends PluginsRequest, PluginsEdit {}
    export interface PluginsEdit {
        /**
         * 为空时默认走新建 不为空时默认走修改
         */
        uuid?: string
        /**
         * 修改必传描述(我这没写成必传是因为新增和修改是一个按钮)
         */
        logDescription?: string
    }
    export interface PluginsDetail extends GormBaseModel {
        type: string
        script_name: string
        tags: string
        content: string
        params?: YakitPluginParam[]
        authors: string
        user_id?: number
        head_img: string
        /**
         * 插件发布的时间
         */
        published_at: number
        /**
         * 下载次数
         */
        downloaded_total: number
        /**
         * 获得推荐的次数
         */
        stars: number
        /**
         * 审核状态
         */
        status: number
        official: boolean
        /**
         * 当前用户是否已点赞
         */
        is_stars: boolean
        help?: string
        enable_plugin_selector?: boolean
        plugin_selector_types?: string
        is_general_module?: boolean
        contributors?: string
        uuid: string
        is_private: boolean
        /**
         * 复制源插件
         */
        base_plugin_id?: number
        /**
         * 复制源插件名
         */
        base_script_name?: string
        group?: string
        riskInfo?: PluginsRiskDetail[]
        /**
         * 是否为内置插件
         */
        isCorePlugin?: boolean
        /**
         * 协作者
         */
        collaborator?: CollaboratorInfo[]
        isAuthor?: boolean
        /**
         * 插件附件
         */
        pluginSupplement?: string
        pluginEnvKey?: string[]
    }
    export interface PluginsAuditRequest extends PluginsRequest, PluginsAudit {}
    export interface PluginsAuditDetailResponse extends PluginsDetail, PluginsAuditDetail, PluginsAuditButton {}
    export interface PluginsAuditDetailRequest {
        uuid: string
        /**
         * 请求页面 默认(check) 审核详情页 log 日志详情页
         */
        list_type?: string
        /**
         * 日志页跳转到详情页必传
         */
        up_log_id?: number
    }
    export interface PluginsAuditDetail {
        /**
         * 修改人
         */
        apply_user_name?: string
        /**
         * 修改人
         */
        apply_user_id?: number
        /**
         * 描述
         */
        logDescription?: string
        apply_user_head_img?: string
        /**
         * 处理状态 0 待处理  1合并  2拒绝
         */
        merge_status?: number
        /**
         * 日志id
         */
        up_log_id?: number
        merge_before_plugins?: PluginsAuditDetailMergeBeforePlugins
    }
    export interface PluginsAuditDetailMergeBeforePlugins {
        type?: string
        script_name?: string
        tags?: string
        content?: string
        params?: YakitPluginParam[]
        /**
         * 审核状态
         */
        status?: number
        official?: boolean
        help?: string
        enable_plugin_selector?: boolean
        plugin_selector_types?: string
        is_general_module?: boolean
        uuid?: string
        is_private?: boolean
        stars?: number
        download_total?: number
        group?: string
        riskInfo?: PluginsRiskDetail[]
        /**
         * 是否为内置插件
         */
        isCorePlugin?: boolean
        pluginEnvKey?: string[]
    }
    export interface PluginsAuditButton {
        /**
         * true 显示钢笔标签, false 其他
         */
        pen?: boolean
        /**
         * true 表示禁用, false 其他
         */
        disable?: boolean
    }
    export interface PluginsAudit {
        pageType?: string
        /**
         * 审核 'true' 通过 'false' 不通过
         */
        status: string
        /**
         * 必传
         */
        uuid: string
        /**
         * 不通过时必传
         */
        logDescription?: string
        /**
         * 默认不传为管理审核页面， 'log' 为日志审核页面
         */
        listType?: string
        /**
         * 有对比的审核页 必传此id
         */
        upPluginLogId?: number
    }
    export interface PluginMergeRequest extends PluginsRequest, PluginMerge {}
    export interface PluginMerge {
        /**
         * 审核 'true' 通过 'false' 不通过
         */
        status: string
        /**
         * 必传
         */
        uuid: string
        /**
         * 不通过时必传
         */
        logDescription?: string
        /**
         * 有对比的审核页 必传此id
         */
        upPluginLogId: number
    }
    export interface PluginIncreResponse {
        day_incre_num: number
        yesterday_incre_num: number
        week_incre_num: number
        lastWeek_incre_num: number
    }
    export interface PluginAuditRequest extends PluginsRequest, PluginAudit {}
    export interface PluginAudit {
        /**
         * 审核 'true' 通过 'false' 不通过
         */
        status: string
        /**
         * 必传
         */
        uuid: string
        /**
         * 不通过时必传
         */
        logDescription?: string
    }
    export interface ParentComment {
        /**
         * 操作人名称
         */
        userName: string
        /**
         * 操作人头像
         */
        headImg: string
        /**
         * 操作人是否是作者 true 是   false否
         */
        isAuthors: boolean
        /**
         * 审核状态
         */
        checkStatus: number
        /**
         * 描述/评论
         */
        description: string
        /**
         * 作者权限 admin:管理员 trusted:信任用户 ordinary:普通用户 auditor:审核员
         */
        userRole: string
    }
    export interface Paging {
        pagemeta: PageMeta
    }
    export interface PageMeta {
        /**
         * 页面索引
         */
        page: number
        /**
         * 页面数据条数限制
         */
        limit: number
        /**
         * 总共数据条数
         */
        total: number
        /**
         * 总页数
         */
        total_page: number
    }
    export interface OperationsResponse extends Paging {
        data: Operation[]
    }
    export interface Operation extends GormBaseModel, NewOperation {}
    export interface NotepadDownloadWhere {
        hash?: string
    }
    export interface NotepadDownloadRequest extends GetNotepadRequest, NotepadDownloadWhere {}
    export interface NewUrmResponse {
        user_name: string
        password: string
    }
    export interface NewUrmRequest {
        user_name: string
        department: number
        role_id: number
    }
    export interface NewRoleRequest {
        id?: number
        name: string
        pluginType?: string
        pluginIds?: string
        plugin?: PluginTypeList[]
    }
    export interface NewOperation {
        type: string
        trigger_user_unique_id: string
        operation_plugin_id: string
        extra?: string
    }
    export interface NavigationBarsResponse {
        data: NavigationBarsListResponse[]
    }
    export interface NavigationBarsListResponse {
        card: string
        link?: string
        otherLink?: string
        sort?: number
    }
    export interface MITMRuleExtractedDataResponse extends Paging {
        data: MITMRuleExtractedDataList[]
    }
    export interface MITMRuleExtractedDataList extends GormBaseModel, MITMRuleExtractedDataDetail {}
    export interface MITMRuleExtractedDataDetail {
        sourceType: string
        traceId: string
        regexp: string
        ruleName: string
        data: string
    }
    export interface MessageLogWhereRequest {
        isAll: boolean
        hash: string
    }
    export interface MessageLogResponse extends Paging {
        data: MessageLogDetail[]
    }
    export interface MessageLogRequest {
        afterId?: number
        beforeId?: number
        isRead?: string
    }
    export interface MessageLogDetail extends GormBaseModel {
        handlerUserName: string
        handlerHeadImag: string
        handlerRole: string
        upPluginType: string
        scriptName: string
        /**
         * 插件uuid
         */
        uuid: string
        /**
         * 日志id
         */
        upPluginLogId: number
        isRead: boolean
        hash: string
        description: string
        status: number
        /**
         * 协作文档ID
         */
        notepadHash?: string
        /**
         * 协作文档标题
         */
        notepadTitle?: string
    }
    export interface LogsRequest {
        uuid: string
        token?: string
        afterId?: number
        beforeId?: number
        logType?: string
    }
    export interface LogsDetail extends GormBaseModel {
        /**
         * 操作人名称
         */
        userName: string
        /**
         * 操作人头像
         */
        headImg: string
        /**
         * 作者权限 admin:管理员 trusted:信任用户 ordinary:普通用户 auditor:审核员
         */
        userRole: string
        /**
         * 操作人是否是插件作者 true 是   false否
         */
        isAuthors: boolean
        /**
         * 审核状态
         */
        checkStatus: number
        /**
         * 日志类型 submit:新增 delete:删除  update:修改  check:审核 recover:恢复 applyMerge: 合并申请  comment:评论
         */
        logType: string
        /**
         * 描述/评论
         */
        description: string
        /**
         * 登陆用户是否是插件作者
         */
        loginIsPluginUser: boolean
        /**
         * 登录用户是否是日志操作者
         */
        loginIsLogUser?: boolean
    }
    export interface IsExtractCodeResponse {
        is_extract_code: boolean
    }
    export interface HTTPHeader {
        header?: string
        value?: string
    }
    export interface HTTPFlowWhere {
        userName?: string
        projectName?: string
        sourceType?: string
        methods?: string
        searchURL?: string
        statusCode?: string
        haveCommonParams?: boolean
        haveBody?: boolean
        searchContentType?: string
        beforeUpdatedAt?: number
        afterUpdatedAt?: number
        keyword?: string
        onlyWebsocket?: boolean
        /**
         * 查询包含在这个 URL 中的搜索结果
         */
        includeInUrl?: string[]
        /**
         * 不查询当前 URL 中的结果
         */
        excludeInUrl?: string[]
        /**
         * 仅查看当前 IP 对应的结果或不包含
         */
        includeInIP?: string[]
        excludeInIP?: string[]
        includeInWhere?: string[]
        tags?: string[]
        haveParamsTotal?: string
        color?: string[]
        offsetId?: number
        afterBodyLength?: number
        beforeBodyLength?: number
        isWebsocket?: string
        runtimeId?: string
        fromPlugin?: string
        full?: boolean
        includePath?: string[]
        excludePath?: string[]
        includeSuffix?: string[]
        excludeSuffix?: string[]
        excludeContentType?: string[]
    }
    export interface HTTPFlowRequest {
        projectName: string
        content: string
        projectDescription?: string
    }
    export interface HTTPFlowListResponse extends Paging {
        data: HTTPFlowList[]
    }
    export interface HTTPFlowList extends GormBaseModel, HTTPFlowDetail {}
    export interface HTTPFlowDetail {
        isHTTPS?: boolean
        url?: string
        requestHeader?: HTTPHeader[]
        request?: string
        responseHeader?: HTTPHeader[]
        response?: string
        sourceType?: string
        path?: string
        method?: string
        bodyLength?: number
        bodySizeVerbose?: string
        requestLength?: number
        requestSizeVerbose?: string
        contentType?: string
        statusCode?: number
        getParamsTotal?: number
        postParamsTotal?: number
        cookieParamsTotal?: number
        httpflowUpdatedAt?: number
        httpflowCreatedAt?: number
        hash?: string
        getParams?: FuzzableParam[]
        postParams?: FuzzableParam[]
        cookieParams?: FuzzableParam[]
        hostPort?: string
        ipAddress?: string
        htmlTitle?: string
        tags?: string
        noFixContentLength?: boolean
        isWebsocket?: boolean
        websocketHash?: string
        /**
         * 标记 UTF8 Invalid
         */
        invalidForUTF8Request?: boolean
        invalidForUTF8Response?: boolean
        rawRequestBodyBase64?: string
        rawResponseBodyBase64?: string
        /**
         * 可以安全的传输到 Fuzzer 的 HTTPRequest
         */
        safeHTTPRequest?: string
        domains?: string[]
        rootDomains?: string[]
        jsonObjects?: string[]
        isTooLargeResponse?: boolean
        tooLargeResponseHeaderFile?: string
        tooLargeResponseBodyFile?: string
        disableRenderStyles?: boolean
        projectName?: string
        userName?: string
        projectDescription?: string
    }
    export interface HTTPFlowDeleteWhere {
        deleteAll?: boolean
        id?: number[]
        itemHash?: string[]
        urlPrefix?: string
        urlPrefixBatch?: string[]
    }
    export interface HTTPFlowDeleteRequest extends HTTPFlowDeleteWhere, HTTPFlowWhere {}
    export interface HTTPFlowBareResponse {
        id: number
        data: string
    }
    export interface HandleUser {
        /**
         * 流程操作人名称
         */
        handleUserName?: string
        /**
         * 流程操作人头像
         */
        handleHeadImg?: string
        /**
         * 流程作者权限 admin:管理员 trusted:信任用户 ordinary:普通用户 auditor:审核员
         */
        handleUserRole?: string
        /**
         * 是否是作者
         */
        isAuthor?: boolean
    }
    export interface GroupResponseDetail {
        value: string
        total: number
        default: boolean
    }
    export interface GroupResponse {
        data: GroupResponseDetail[]
    }
    export interface GroupRequest extends PluginsWhere, PluginsGroup {}
    export interface GormBaseModel {
        id: number
        created_at: number
        updated_at: number
    }
    export interface GetRiskWhere {
        hash?: string[]
        search?: string
        net_work?: string
        ports?: string
        risk_type?: string
        token?: string
        waiting_verified?: boolean
        severity?: string
        user_name?: string
    }
    export interface GetRemoteWhere {
        user_name?: string
        start_time?: number
        end_time?: number
        status?: string
    }
    export interface GetNotepadResponse extends Paging {
        data: GetNotepadList[]
    }
    export interface GetNotepadRequest {
        keywords?: string
        /**
         * 作者名称
         */
        user?: string
        /**
         * 协作者名称
         */
        collaborator?: string
    }
    export interface GetNotepadList extends GormBaseModel, GetNotepadDetail {}
    export interface GetNotepadDetail {
        title: string
        content: string
        userName: string
        headImg: string
        /**
         * 协作者
         */
        collaborator: CollaboratorInfo[]
        hash: string
    }
    export interface FuzzableParam {
        position?: string
        paramName?: string
        originValue?: string
        autoTemplate?: string
        isHTTPS?: boolean
    }
    export interface ExtractResponse {
        extract_content: string
        module: string
    }
    export interface EditUrmRequest {
        uid: string
        user_name?: string
        department?: number
        role_id?: number
    }
    export interface DepartmentListResponse extends Paging {
        data: DepartmentList[]
    }
    export interface DepartmentList {
        id: number
        name: string
        userNum: number
        /**
         * 是否有二级分组
         */
        exist_group?: boolean
    }
    export interface DepartmentGroupList {
        data: DepartmentList[]
    }
    export interface DeleteUrm {
        uid: string[]
    }
    export interface DeleteResource {
        csrf_token?: string
        file_name: string[]
        /**
         * 删除图片传'img' 视频传 'video'
         */
        file_type: string
    }
    export interface DeletePluginUuid {
        uuid: string[]
        dump: boolean
        keywords?: string
        is_recycle?: boolean
    }
    export interface DeleteOssResource {
        file_name: string[]
    }
    export interface DeleteNotepadWhere {
        hash?: string
    }
    export interface DeleteNotepadRequest extends GetNotepadRequest, DeleteNotepadWhere {}
    export interface CopyPluginsRequest extends PluginsRequest, CopyPlugins {}
    export interface CopyPlugins {
        /**
         * 复制插件id
         */
        base_plugin_id: number
    }
    export interface CompanyLicenseConfigResponse extends Paging {
        data: CompanyLicenseConfigList[]
    }
    export interface CompanyLicenseConfigList {
        id: number
        company: string
        maxActivationNum: number
        useActivationNum: number
        maxUser: number
        durationDate: number
        currentTime?: number
    }
    export interface CommentLogRequest {
        uuid: string
        logId?: number
        description?: string
    }
    export interface CollaboratorInfo {
        user_id: number
        head_img: string
        user_name: string
        role?: string
    }
    export interface ActionSucceeded {
        /**
         * 来源于哪个 API
         */
        from: string
        /**
         * 执行状态
         */
        ok: boolean
    }
    export interface ActionFailed {
        /**
         * 来源于哪个 API
         */
        from: string
        /**
         * 执行状态
         */
        ok: boolean
        reason: string
    }
}
