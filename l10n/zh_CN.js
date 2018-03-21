OC.L10N.register(
    "user_saml",
    {
    "Saved" : "已保存",
    "X.509 certificate of the Service Provider" : "服务商 X.509 认证",
    "Private key of the Service Provider" : "服务商私钥",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "表明 SP 发送的 <samlp:logoutRequest> nameID 将被加密.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "指示此SP发送的<samlp：AuthnRequest>消息是否将被签名。 [SP的元数据将提供此信息]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "指示该 SP 发送的  <samlp:logoutRequest>  消息是否将被签名.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "指示该 SP 发送的  <samlp:logoutResponse> 消息是否将被签名.",
    "Whether the metadata should be signed." : "是否元数据将被签名.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "表示此SP接收的<samlp：Response>，<samlp：LogoutRequest>和<samlp：LogoutResponse>的要求。",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "表示此SP接收到的<saml：Assertion>元素需要签名。 [SP的元数据将提供此信息]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "表示要对此SP接收到的<saml：Assertion>元素进行加密。",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "表示此SP收到的SAMLResponse上的NameID元素的要求。",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "表示对此SP接收到的NameID进行加密的要求。",
    "Indicates if the SP will validate all received XML." : "指定 SP 是否验证所有接收到的 XML。",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL - 将SAML数据编码为小写，默认情况下，该工具包使用大写。 在签名验证时启用ADFS兼容性。",
    "Attribute to map the UID to." : "映射到 UID 的属性。",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "仅允许身份验证，如果账户存在于其他后端。（例如 LDAP）",
    "Attribute to map the displayname to." : "映射到显示名称的属性。",
    "Attribute to map the email address to." : "映射到 E-mai 的属性。",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "为 %s 桌面客户端使用 SAML 认证（需要重新验证用户）",
    "SSO & SAML authentication" : "SSO & SAML 认证",
    "Open documentation" : "打开文档",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "请选择是否要使用Nextcloud内置的SAML提供商进行身份验证，还是要根据环境变量进行身份验证。",
    "Use built-in SAML authentication" : "使用内置 SAML 认证",
    "Use environment variable" : "使用环境变量",
    "General" : "常规",
    "Service Provider Data" : "数据服务提供商。",
    "If your Service Provider should use certificates you can optionally specify them here." : "如果您的服务提供商使用证书，您可以在这里选择指定。",
    "Show Service Provider settings…" : "显示服务器供应商设置...",
    "Identity Provider Data" : "身份提供者的数据",
    "Configure your IdP settings here." : "在这里配置你的 ldP 设置。",
    "Identifier of the IdP entity (must be a URI)" : "IdP实体的标识符(必须是URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL的目标，其中SP将发送验证请求消息",
    "Show optional Identity Provider settings…" : "显示可选的身份提供者设置...",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL在SP发送SLO请求的IdP的位置",
    "Public X.509 certificate of the IdP" : "公共X.509证书的IdP",
    "Attribute mapping" : "属性映射",
    "If you want to optionally map attributes to the user you can configure these here." : "如果要选择将属性映射到用户，可以在这里配置。",
    "Show attribute mapping settings…" : "显示属性映射设置...",
    "Security settings" : "安全设置",
    "For increased security we recommend enabling the following settings if supported by your environment." : "为了提升安全性，如果你的环境支持，建议启用以下设置。",
    "Show security settings…" : "显示安全设置...",
    "Signatures and encryption offered" : "提供签名和加密",
    "Signatures and encryption required" : "需要签名和加密",
    "Download metadata XML" : "下载元数据 XML",
    "Metadata invalid" : "元数据无效",
    "Metadata valid" : "元数据有效",
    "Account not provisioned." : "帐户未配置。",
    "Your account is not provisioned, access to this service is thus not possible." : "您的帐户未配置，因此无法访问此服务。",
    "Indicates if the SP will validate all received XMLs." : "指定 SP 是否验证所有接收到的 XML。",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "身份验证将在后台设置账户后生效。（如：LDAP轻量目录访问协议）",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "确保配置一个可通过 SSO 访问实例的管理员用户。将不再允许使用常规账户 %s 登录。",
    "Show Service Provider settings ..." : "显示服务供应商设置...",
    "Show optional Identity Provider settings ..." : "显示可选的个性提供设置...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "如果你想映射 SAML 属性到用户，可在此设置。",
    "Show attribute mapping settings ..." : "显示属性映射设置...",
    "Show security settings ..." : "显示安全设置..."
},
"nplurals=1; plural=0;");
