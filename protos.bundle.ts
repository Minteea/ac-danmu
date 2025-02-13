export const protoJson = {
  nested: {
    AcFunDanmu: {
      nested: {
        AccessPoint: {
          fields: {
            addressType: {
              type: "AddressType",
              id: 1,
            },
            port: {
              type: "uint32",
              id: 2,
            },
            ipV4: {
              type: "fixed32",
              id: 3,
            },
            ipV6: {
              type: "bytes",
              id: 4,
            },
            domain: {
              type: "string",
              id: 5,
            },
            quic: {
              type: "fixed32",
              id: 6,
            },
            quicV6: {
              type: "bytes",
              id: 7,
            },
          },
          nested: {
            AddressType: {
              values: {
                kIPV4: 0,
                kIPV6: 1,
                kDomain: 2,
                kQuic: 3,
                kQuicV6: 4,
              },
            },
          },
        },
        AccessPointsConfig: {
          fields: {
            optimalAps: {
              rule: "repeated",
              type: "AccessPoint",
              id: 1,
            },
            backupAps: {
              rule: "repeated",
              type: "AccessPoint",
              id: 2,
            },
            availablePorts: {
              rule: "repeated",
              type: "uint32",
              id: 3,
            },
            foreceLastConnectedAp: {
              type: "AccessPoint",
              id: 4,
            },
          },
        },
        AcFunUserInfo: {
          fields: {
            userId: {
              type: "int64",
              id: 1,
            },
            name: {
              type: "string",
              id: 2,
            },
          },
        },
        AcfunActionSignalThrowBanana: {
          fields: {
            visitor: {
              type: "AcFunUserInfo",
              id: 1,
            },
            count: {
              type: "int32",
              id: 2,
            },
            sendTimeMs: {
              type: "int64",
              id: 3,
            },
          },
        },
        AcfunStateSignalDisplayInfo: {
          fields: {
            bananaCount: {
              type: "string",
              id: 1,
            },
          },
        },
        AcfunActionSignalJoinClub: {
          fields: {
            fansInfo: {
              type: "AcFunUserInfo",
              id: 1,
            },
            uperInfo: {
              type: "AcFunUserInfo",
              id: 2,
            },
            joinTimeMs: {
              type: "int64",
              id: 3,
            },
          },
        },
        AppInfo: {
          fields: {
            appName: {
              type: "string",
              id: 1,
            },
            appVersion: {
              type: "string",
              id: 2,
            },
            appChannel: {
              type: "string",
              id: 3,
            },
            sdkVersion: {
              type: "string",
              id: 4,
            },
            linkVersion: {
              type: "string",
              id: 5,
            },
            extensionInfo: {
              keyType: "string",
              type: "string",
              id: 11,
            },
          },
        },
        DeviceInfo: {
          fields: {
            platformType: {
              type: "PlatformType",
              id: 1,
            },
            osVersion: {
              type: "string",
              id: 2,
            },
            deviceModel: {
              type: "string",
              id: 3,
            },
            imeiMd5: {
              type: "bytes",
              id: 4,
            },
            deviceId: {
              type: "string",
              id: 5,
            },
            softDid: {
              type: "string",
              id: 6,
            },
            kwaiDid: {
              type: "string",
              id: 7,
            },
            manufacturer: {
              type: "string",
              id: 8,
            },
            deviceName: {
              type: "string",
              id: 9,
            },
          },
          nested: {
            PlatformType: {
              values: {
                kInvalid: 0,
                kAndroid: 1,
                kiOS: 2,
                kWindows: 3,
                WECHAT_ANDROID: 4,
                WECHAT_IOS: 5,
                H5: 6,
                H5_ANDROID: 7,
                H5_IOS: 8,
                H5_WINDOWS: 9,
                H5_MAC: 10,
                kPlatformNum: 11,
              },
            },
          },
        },
        DownstreamPayload: {
          fields: {
            command: {
              type: "string",
              id: 1,
            },
            seqId: {
              type: "int64",
              id: 2,
            },
            errorCode: {
              type: "int32",
              id: 3,
            },
            payloadData: {
              type: "bytes",
              id: 4,
            },
            errorMsg: {
              type: "string",
              id: 5,
            },
            errorData: {
              type: "bytes",
              id: 6,
            },
            subBiz: {
              type: "string",
              id: 7,
            },
            klinkPushId: {
              type: "int64",
              id: 8,
            },
          },
        },
        EnvInfo: {
          fields: {
            networkType: {
              type: "NetworkType",
              id: 1,
            },
            appName: {
              type: "bytes",
              id: 2,
            },
          },
          nested: {
            NetworkType: {
              values: {
                kInvalid: 0,
                kWIFI: 1,
                kCellular: 2,
              },
            },
          },
        },
        ErrorMessage: {
          fields: {
            localeMessages: {
              rule: "repeated",
              type: "LocaleMessage",
              id: 1,
            },
          },
        },
        LocaleMessage: {
          fields: {
            locale: {
              type: "string",
              id: 1,
            },
            errorMessage: {
              keyType: "int32",
              type: "string",
              id: 2,
            },
          },
        },
        FrontendInfo: {
          fields: {
            ip: {
              type: "string",
              id: 1,
            },
            port: {
              type: "int32",
              id: 2,
            },
          },
        },
        I18nCopyWriting: {
          fields: {
            formatKey: {
              type: "string",
              id: 1,
            },
            formatParam: {
              rule: "repeated",
              type: "string",
              id: 2,
            },
          },
        },
        Im: {
          nested: {
            Basic: {
              fields: {},
              nested: {
                PacketHeader: {
                  fields: {
                    appId: {
                      type: "int32",
                      id: 1,
                    },
                    uid: {
                      type: "int64",
                      id: 2,
                    },
                    instanceId: {
                      type: "int64",
                      id: 3,
                    },
                    flags: {
                      type: "uint32",
                      id: 5,
                    },
                    encodingType: {
                      type: "EncodingType",
                      id: 6,
                    },
                    decodedPayloadLen: {
                      type: "int32",
                      id: 7,
                    },
                    encryptionMode: {
                      type: "EncryptionMode",
                      id: 8,
                    },
                    tokenInfo: {
                      type: "TokenInfo",
                      id: 9,
                    },
                    seqId: {
                      type: "int64",
                      id: 10,
                    },
                    features: {
                      rule: "repeated",
                      type: "Feature",
                      id: 11,
                    },
                    kpn: {
                      type: "string",
                      id: 12,
                    },
                  },
                  nested: {
                    Flags: {
                      options: {
                        allow_alias: true,
                      },
                      values: {
                        kDirUpstream: 0,
                        kDirDownstream: 1,
                        kDirMask: 1,
                      },
                    },
                    EncodingType: {
                      values: {
                        kEncodingNone: 0,
                        kEncodingLz4: 1,
                      },
                    },
                    EncryptionMode: {
                      values: {
                        kEncryptionNone: 0,
                        kEncryptionServiceToken: 1,
                        kEncryptionSessionKey: 2,
                      },
                    },
                    Feature: {
                      values: {
                        kReserve: 0,
                        kCompressLz4: 1,
                      },
                    },
                  },
                },
                User: {
                  fields: {
                    appId: {
                      type: "int32",
                      id: 1,
                    },
                    uid: {
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                UserInstance: {
                  fields: {
                    user: {
                      type: "User",
                      id: 1,
                    },
                    instanceId: {
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                UpstreamPayload: {
                  fields: {
                    command: {
                      type: "string",
                      id: 1,
                    },
                    seqId: {
                      type: "int64",
                      id: 2,
                    },
                    retryCount: {
                      type: "uint32",
                      id: 3,
                    },
                    payloadData: {
                      type: "bytes",
                      id: 4,
                    },
                    userInstance: {
                      type: "UserInstance",
                      id: 5,
                    },
                    errorCode: {
                      type: "int32",
                      id: 6,
                    },
                    settingInfo: {
                      type: "SettingInfo",
                      id: 7,
                    },
                    requestBasicInfo: {
                      type: "RequestBasicInfo",
                      id: 8,
                    },
                    subBiz: {
                      type: "string",
                      id: 9,
                    },
                    frontendInfo: {
                      type: "FrontendInfo",
                      id: 10,
                    },
                    kpn: {
                      type: "string",
                      id: 11,
                    },
                    anonymouseUser: {
                      type: "bool",
                      id: 12,
                    },
                  },
                },
                DownstreamPayload: {
                  fields: {
                    command: {
                      type: "string",
                      id: 1,
                    },
                    seqId: {
                      type: "int64",
                      id: 2,
                    },
                    errorCode: {
                      type: "int32",
                      id: 3,
                    },
                    payloadData: {
                      type: "bytes",
                      id: 4,
                    },
                    errorMsg: {
                      type: "string",
                      id: 5,
                    },
                    errorData: {
                      type: "bytes",
                      id: 6,
                    },
                    subBiz: {
                      type: "string",
                      id: 7,
                    },
                  },
                },
                PingRequest: {
                  fields: {
                    pingType: {
                      type: "PingType",
                      id: 1,
                    },
                    pingRound: {
                      type: "uint32",
                      id: 2,
                    },
                  },
                  nested: {
                    PingType: {
                      values: {
                        kInvalid: 0,
                        kPriorRegister: 1,
                        kPostRegister: 2,
                      },
                    },
                  },
                },
                PingResponse: {
                  fields: {
                    serverTimestamp: {
                      type: "sfixed32",
                      id: 1,
                    },
                    clientIp: {
                      type: "fixed32",
                      id: 2,
                    },
                    redirectIp: {
                      type: "fixed32",
                      id: 3,
                    },
                    redirectPort: {
                      type: "uint32",
                      id: 4,
                    },
                  },
                },
                RegisterRequest: {
                  fields: {
                    appInfo: {
                      type: "AppInfo",
                      id: 1,
                    },
                    deviceInfo: {
                      type: "DeviceInfo",
                      id: 2,
                    },
                    envInfo: {
                      type: "EnvInfo",
                      id: 3,
                    },
                    presenceStatus: {
                      type: "PresenceStatus",
                      id: 4,
                    },
                    appActiveStatus: {
                      type: "ActiveStatus",
                      id: 5,
                    },
                    appCustomStatus: {
                      type: "bytes",
                      id: 6,
                    },
                    pushServiceToken: {
                      type: "PushServiceToken",
                      id: 7,
                    },
                    instanceId: {
                      type: "int64",
                      id: 8,
                    },
                    pushServiceTokenList: {
                      rule: "repeated",
                      type: "PushServiceToken",
                      id: 9,
                    },
                    keepaliveIntervalSec: {
                      type: "int32",
                      id: 10,
                    },
                    ztCommonInfo: {
                      type: "ZtCommonInfo",
                      id: 11,
                    },
                  },
                  nested: {
                    PresenceStatus: {
                      values: {
                        kPresenceOffline: 0,
                        kPresenceOnline: 1,
                      },
                    },
                    ActiveStatus: {
                      values: {
                        kInvalid: 0,
                        kAppInForeground: 1,
                        kAppinBackground: 2,
                      },
                    },
                  },
                },
                RegisterResponse: {
                  fields: {
                    accessPointsConfig: {
                      type: "AccessPointsConfig",
                      id: 1,
                    },
                    sessKey: {
                      type: "bytes",
                      id: 2,
                    },
                    instanceId: {
                      type: "int64",
                      id: 3,
                    },
                    sdkOption: {
                      type: "SdkOption",
                      id: 4,
                    },
                    accessPointsCOnfigIpv6: {
                      type: "AccessPointsConfig",
                      id: 5,
                    },
                  },
                },
                AccessPointsConfig: {
                  fields: {
                    optimalAps: {
                      rule: "repeated",
                      type: "AccessPoint",
                      id: 1,
                    },
                    backupAps: {
                      rule: "repeated",
                      type: "AccessPoint",
                      id: 2,
                    },
                    availablePorts: {
                      rule: "repeated",
                      type: "uint32",
                      id: 3,
                    },
                    foreceLastConnectedAp: {
                      type: "AccessPoint",
                      id: 4,
                    },
                  },
                },
                UnregisterRequest: {
                  fields: {},
                },
                UnregisterResponse: {
                  fields: {},
                },
                KeepAliveRequest: {
                  fields: {
                    presenceStatus: {
                      type: "RegisterRequest.PresenceStatus",
                      id: 1,
                    },
                    appActiveStatus: {
                      type: "RegisterRequest.ActiveStatus",
                      id: 2,
                    },
                    pushServiceToken: {
                      type: "PushServiceToken",
                      id: 3,
                    },
                    pushServiceTokenList: {
                      rule: "repeated",
                      type: "PushServiceToken",
                      id: 4,
                    },
                    keepaliveIntervalSec: {
                      type: "int32",
                      id: 5,
                    },
                  },
                },
                KeepAliveResponse: {
                  fields: {
                    accessPointsConfig: {
                      type: "AccessPointsConfig",
                      id: 1,
                    },
                    serverMsec: {
                      type: "int64",
                      id: 2,
                    },
                    accessPointsConfigIpv6: {
                      type: "AccessPointsConfig",
                      id: 3,
                    },
                  },
                },
                AccessPoint: {
                  fields: {
                    addressType: {
                      type: "AddressType",
                      id: 1,
                    },
                    port: {
                      type: "uint32",
                      id: 2,
                    },
                    ipV4: {
                      type: "fixed32",
                      id: 3,
                    },
                    ipV6: {
                      type: "bytes",
                      id: 4,
                    },
                    domain: {
                      type: "string",
                      id: 5,
                    },
                  },
                  nested: {
                    AddressType: {
                      values: {
                        kIPV4: 0,
                        kIPV6: 1,
                        kDomain: 2,
                      },
                    },
                  },
                },
                TokenInfo: {
                  fields: {
                    tokenType: {
                      type: "TokenType",
                      id: 1,
                    },
                    token: {
                      type: "bytes",
                      id: 2,
                    },
                  },
                  nested: {
                    TokenType: {
                      values: {
                        kInvalid: 0,
                        kServiceToken: 1,
                      },
                    },
                  },
                },
                PushServiceToken: {
                  fields: {
                    pushType: {
                      type: "PushType",
                      id: 1,
                    },
                    token: {
                      type: "bytes",
                      id: 2,
                    },
                    isPassThrough: {
                      type: "bool",
                      id: 3,
                    },
                  },
                  nested: {
                    PushType: {
                      values: {
                        kPushTypeInvalid: 0,
                        kPushTypeAPNS: 1,
                        kPushTypeXmPush: 2,
                        kPushTypeJgPush: 3,
                        kPushTypeGtPUsh: 4,
                        kPushTypeOpPush: 5,
                        kPushTYpeVvPush: 6,
                        kPushTypeHwPush: 7,
                        kPushTYpeFcm: 8,
                      },
                    },
                  },
                },
                SettingInfo: {
                  fields: {
                    locale: {
                      type: "string",
                      id: 1,
                    },
                    timezone: {
                      type: "sint32",
                      id: 2,
                    },
                  },
                },
                AppInfo: {
                  fields: {
                    appName: {
                      type: "string",
                      id: 1,
                    },
                    appVersion: {
                      type: "string",
                      id: 2,
                    },
                    appChannel: {
                      type: "string",
                      id: 3,
                    },
                    sdkVersion: {
                      type: "string",
                      id: 4,
                    },
                    extensionInfo: {
                      type: "string",
                      id: 11,
                    },
                  },
                },
                DeviceInfo: {
                  fields: {
                    platformType: {
                      type: "PlatformType",
                      id: 1,
                    },
                    osVersion: {
                      type: "string",
                      id: 2,
                    },
                    deviceModel: {
                      type: "string",
                      id: 3,
                    },
                    imeiMd5: {
                      type: "bytes",
                      id: 4,
                    },
                    deviceId: {
                      type: "string",
                      id: 5,
                    },
                    softDid: {
                      type: "string",
                      id: 6,
                    },
                    kwaiDid: {
                      type: "string",
                      id: 7,
                    },
                    manufacturer: {
                      type: "string",
                      id: 8,
                    },
                    deviceName: {
                      type: "string",
                      id: 9,
                    },
                  },
                  nested: {
                    PlatformType: {
                      values: {
                        kInvalid: 0,
                        kAndroid: 1,
                        kiOS: 2,
                        kWindows: 3,
                        WECHAT_ANDROID: 4,
                        WECHAT_IOS: 5,
                        H5: 6,
                        kPlatformNum: 7,
                      },
                    },
                  },
                },
                EnvInfo: {
                  fields: {
                    networkType: {
                      type: "NetworkType",
                      id: 1,
                    },
                    appName: {
                      type: "bytes",
                      id: 2,
                    },
                  },
                  nested: {
                    NetworkType: {
                      values: {
                        kInvalid: 0,
                        kWIFI: 1,
                        kCellular: 2,
                      },
                    },
                  },
                },
                SharePlatform: {
                  values: {
                    kSharePlatformInvalid: 0,
                    kSharePlatformWechat: 1,
                    kSharePlatformWechatMoments: 2,
                    kSharePlatformQQ: 3,
                    kSharePlatformQzone: 4,
                    kSharePlatformWeibo: 5,
                    kSharePlatformKuaishou: 6,
                    kSharePlatformFacebook: 7,
                    kSharePlatformTwitter: 8,
                    kSharePlatformGoogle: 9,
                    kSharePlatformKakao: 10,
                    kSharePlatformZalo: 11,
                  },
                },
                RequestBasicInfo: {
                  fields: {
                    clientType: {
                      type: "DeviceInfo.PlatformType",
                      id: 1,
                    },
                    deviceId: {
                      type: "string",
                      id: 2,
                    },
                    clientIp: {
                      type: "string",
                      id: 3,
                    },
                    appVersion: {
                      type: "string",
                      id: 4,
                    },
                    channel: {
                      type: "string",
                      id: 5,
                    },
                    appInfo: {
                      type: "AppInfo",
                      id: 6,
                    },
                    deviceInfo: {
                      type: "DeviceInfo",
                      id: 7,
                    },
                    envInfo: {
                      type: "EnvInfo",
                      id: 8,
                    },
                    clientPort: {
                      type: "int32",
                      id: 9,
                    },
                    location: {
                      type: "string",
                      id: 10,
                    },
                    kpf: {
                      type: "string",
                      id: 11,
                    },
                  },
                },
                SyncCookie: {
                  fields: {
                    syncOffset: {
                      type: "int64",
                      id: 1,
                    },
                  },
                },
                I18nCopyWriting: {
                  fields: {
                    formatKey: {
                      type: "string",
                      id: 1,
                    },
                    formatParam: {
                      rule: "repeated",
                      type: "string",
                      id: 2,
                    },
                  },
                },
                SdkOption: {
                  fields: {
                    reportIntervalSeconds: {
                      type: "int32",
                      id: 1,
                    },
                    reportSecurity: {
                      type: "string",
                      id: 2,
                    },
                    lz4CompressionThresholdBytes: {
                      type: "int32",
                      id: 3,
                    },
                    netCheckServers: {
                      rule: "repeated",
                      type: "string",
                      id: 4,
                    },
                  },
                },
                ZtCommonInfo: {
                  fields: {
                    kpn: {
                      type: "string",
                      id: 1,
                    },
                    kpf: {
                      type: "string",
                      id: 2,
                    },
                    subBiz: {
                      type: "string",
                      id: 3,
                    },
                    uid: {
                      type: "int64",
                      id: 4,
                    },
                    did: {
                      type: "string",
                      id: 5,
                    },
                    clientIp: {
                      type: "int64",
                      id: 6,
                    },
                    appVer: {
                      type: "string",
                      id: 7,
                    },
                    ver: {
                      type: "string",
                      id: 8,
                    },
                    lat: {
                      type: "string",
                      id: 9,
                    },
                    lon: {
                      type: "string",
                      id: 10,
                    },
                    mond: {
                      type: "string",
                      id: 11,
                    },
                    net: {
                      type: "string",
                      id: 12,
                    },
                    sys: {
                      type: "string",
                      id: 13,
                    },
                    c: {
                      type: "string",
                      id: 14,
                    },
                    language: {
                      type: "string",
                      id: 15,
                    },
                    countryCode: {
                      type: "string",
                      id: 16,
                    },
                  },
                },
                FrontendInfo: {
                  fields: {
                    ip: {
                      type: "string",
                      id: 1,
                    },
                    port: {
                      type: "int32",
                      id: 2,
                    },
                  },
                },
              },
            },
            Message: {
              fields: {},
              nested: {
                Message: {
                  fields: {
                    seqId: {
                      type: "int64",
                      id: 1,
                    },
                    clientSeqId: {
                      type: "int64",
                      id: 2,
                    },
                    timestampMs: {
                      type: "int64",
                      id: 3,
                    },
                    fromUser: {
                      type: "Basic.User",
                      id: 4,
                    },
                    targetId: {
                      type: "int64",
                      id: 5,
                    },
                    toUser: {
                      type: "Basic.User",
                      id: 6,
                    },
                    title: {
                      type: "string",
                      id: 7,
                    },
                    contentType: {
                      type: "int32",
                      id: 8,
                    },
                    content: {
                      type: "bytes",
                      id: 9,
                    },
                    buckupTips: {
                      type: "string",
                      id: 10,
                    },
                    receivers: {
                      rule: "repeated",
                      type: "Basic.User",
                      id: 11,
                    },
                    notContentUnread: {
                      type: "bool",
                      id: 12,
                    },
                    sessionPriority: {
                      type: "int32",
                      id: 13,
                    },
                    sessionCategoryId: {
                      type: "int32",
                      id: 14,
                    },
                    sessionAccountType: {
                      type: "int32",
                      id: 15,
                    },
                    notAutoCreateSession: {
                      type: "bool",
                      id: 16,
                    },
                    userRelationship: {
                      type: "int32",
                      id: 17,
                    },
                    strTargetId: {
                      type: "string",
                      id: 18,
                    },
                    excludeReceivers: {
                      rule: "repeated",
                      type: "Basic.User",
                      id: 19,
                    },
                    markDelte: {
                      type: "bool",
                      id: 20,
                    },
                    reminder: {
                      type: "Reminder",
                      id: 21,
                    },
                    extra: {
                      type: "bytes",
                      id: 22,
                    },
                    receiptRequired: {
                      type: "bool",
                      id: 23,
                    },
                  },
                },
                KsUserRelationShip: {
                  values: {
                    kUNKNOW: 0,
                    FOLLOW_EACH_OTHER: 1,
                    TO_FOLLOW_FROM: 2,
                    FROM_FOLLOW_TO: 3,
                  },
                },
                SendMessageResponse: {
                  fields: {
                    clientSeqId: {
                      type: "int64",
                      id: 1,
                    },
                    messageTimestamp: {
                      type: "int64",
                      id: 2,
                    },
                    seqId: {
                      type: "int64",
                      id: 3,
                    },
                    sessionAccountType: {
                      type: "int32",
                      id: 4,
                    },
                    sessionPriority: {
                      type: "int32",
                      id: 5,
                    },
                    sessionCategoryId: {
                      type: "int32",
                      id: 6,
                    },
                  },
                },
                PullOldRequest: {
                  fields: {
                    target: {
                      type: "Basic.User",
                      id: 1,
                    },
                    minSeq: {
                      type: "int64",
                      id: 2,
                    },
                    maxSeq: {
                      type: "int64",
                      id: 3,
                    },
                    count: {
                      type: "int32",
                      id: 4,
                    },
                    targetId: {
                      type: "int64",
                      id: 5,
                    },
                    strTargetId: {
                      type: "string",
                      id: 6,
                    },
                  },
                },
                PullOldResponse: {
                  fields: {
                    messages: {
                      rule: "repeated",
                      type: "Message",
                      id: 1,
                    },
                    serverTime: {
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                PullNewRequest: {
                  fields: {
                    target: {
                      type: "Basic.User",
                      id: 1,
                    },
                    minSeq: {
                      type: "int64",
                      id: 2,
                    },
                    count: {
                      type: "int32",
                      id: 3,
                    },
                    targetId: {
                      type: "int64",
                      id: 4,
                    },
                    strTargetId: {
                      type: "string",
                      id: 5,
                    },
                  },
                },
                PullNewResponse: {
                  fields: {
                    messages: {
                      rule: "repeated",
                      type: "Message",
                      id: 1,
                    },
                  },
                },
                SessionListRequest: {
                  fields: {
                    syncCookie: {
                      type: "Basic.SyncCookie",
                      id: 1,
                    },
                    categoryId: {
                      type: "int32",
                      id: 2,
                    },
                    localDataStatus: {
                      type: "int32",
                      id: 3,
                    },
                  },
                },
                ChatSession: {
                  fields: {
                    target: {
                      type: "Basic.User",
                      id: 1,
                    },
                    maxSeqId: {
                      type: "int64",
                      id: 2,
                    },
                    readSeqId: {
                      type: "int64",
                      id: 3,
                    },
                    unreadMsgCount: {
                      type: "int32",
                      id: 4,
                    },
                    latestMessage: {
                      rule: "repeated",
                      type: "Message",
                      id: 5,
                    },
                    chatTargetType: {
                      type: "ChatTargetType",
                      id: 8,
                    },
                    targetId: {
                      type: "int64",
                      id: 9,
                    },
                    activeTime: {
                      type: "int64",
                      id: 10,
                    },
                    priority: {
                      type: "int32",
                      id: 11,
                    },
                    categoryId: {
                      type: "int32",
                      id: 12,
                    },
                    cursor: {
                      type: "string",
                      id: 13,
                    },
                    accountType: {
                      type: "int32",
                      id: 14,
                    },
                    aggregateSession: {
                      type: "bool",
                      id: 15,
                    },
                    jumpCategoryId: {
                      type: "int32",
                      id: 16,
                    },
                    expireAt: {
                      type: "int64",
                      id: 17,
                    },
                    effectiveFrom: {
                      type: "int64",
                      id: 18,
                    },
                    strTargetId: {
                      type: "string",
                      id: 19,
                    },
                    remindBody: {
                      rule: "repeated",
                      type: "RemindBody",
                      id: 20,
                    },
                    targetReadSeqId: {
                      type: "int64",
                      id: 21,
                    },
                  },
                },
                Reminder: {
                  fields: {
                    originText: {
                      type: "string",
                      id: 1,
                    },
                    remindBody: {
                      rule: "repeated",
                      type: "RemindBody",
                      id: 2,
                    },
                  },
                },
                RemindBody: {
                  fields: {
                    remindType: {
                      type: "RemindType",
                      id: 1,
                    },
                    seqId: {
                      type: "int64",
                      id: 2,
                    },
                    targetId: {
                      type: "int64",
                      id: 3,
                    },
                    userName: {
                      type: "string",
                      id: 4,
                    },
                    startIndex: {
                      type: "int32",
                      id: 5,
                    },
                    length: {
                      type: "int32",
                      id: 6,
                    },
                  },
                  nested: {
                    RemindType: {
                      values: {
                        UNKNOWN: 0,
                        AT_ALL: 1,
                        AT_USER: 2,
                        GROUP_BULLETIN: 3,
                        RECEIPT_MESSAGE: 4,
                        GROUP_JOIN_REQUEST: 5,
                      },
                    },
                  },
                },
                AccountType: {
                  values: {
                    UNKNOWN: 0,
                    OFFICIAL: 1,
                    NORMAL: 2,
                    STRANGER: 3,
                  },
                },
                ChatTargetType: {
                  values: {
                    CTT_USER: 0,
                    CTT_CHAT_ROOM: 2,
                    CTT_MULTI_PLAYER_ROOM: 3,
                    CTT_GROUP: 4,
                    CTT_CHANNEL: 5,
                    CTT_AGGREGATE: 6,
                  },
                },
                ChatTarget: {
                  fields: {
                    targetId: {
                      type: "string",
                      id: 1,
                    },
                    targetType: {
                      type: "ChatTargetType",
                      id: 2,
                    },
                  },
                },
                SessionListResponse: {
                  fields: {
                    syncCookie: {
                      type: "Basic.SyncCookie",
                      id: 1,
                    },
                    sessions: {
                      rule: "repeated",
                      type: "ChatSession",
                      id: 2,
                    },
                    notFullFetch: {
                      type: "bool",
                      id: 3,
                    },
                    serverTime: {
                      type: "int64",
                      id: 4,
                    },
                    clearLocalData: {
                      type: "bool",
                      id: 5,
                    },
                    categoryId: {
                      type: "int32",
                      id: 6,
                    },
                    clientDataStatus: {
                      type: "int32",
                      id: 7,
                    },
                  },
                },
                SessionPageListRequest: {
                  fields: {
                    cursor: {
                      type: "string",
                      id: 1,
                    },
                    count: {
                      type: "int32",
                      id: 2,
                    },
                    categoryId: {
                      type: "int32",
                      id: 3,
                    },
                  },
                },
                SessionPageListResponse: {
                  fields: {
                    hasMore: {
                      type: "bool",
                      id: 1,
                    },
                    sessions: {
                      rule: "repeated",
                      type: "ChatSession",
                      id: 2,
                    },
                  },
                },
                SessionRemoveRequest: {
                  fields: {
                    targetId: {
                      type: "int64",
                      id: 1,
                    },
                    chatTargetType: {
                      type: "ChatTargetType",
                      id: 2,
                    },
                    categoryId: {
                      type: "int32",
                      id: 3,
                    },
                    strTargetId: {
                      type: "string",
                      id: 4,
                    },
                    notCleanAllMessages: {
                      type: "bool",
                      id: 5,
                    },
                  },
                },
                SessionRemoveResponse: {
                  fields: {},
                },
                SessionCleanRequest: {
                  fields: {
                    chatTarget: {
                      type: "ChatTarget",
                      id: 1,
                    },
                  },
                },
                SessionCleanResponse: {
                  fields: {},
                },
                MessageDeleteRequest: {
                  fields: {
                    targetId: {
                      type: "int64",
                      id: 1,
                    },
                    chatTargetType: {
                      type: "ChatTargetType",
                      id: 2,
                    },
                    seqId: {
                      rule: "repeated",
                      type: "int64",
                      id: 3,
                    },
                    strTargetId: {
                      type: "string",
                      id: 4,
                    },
                  },
                },
                MessageDeleteResponse: {
                  fields: {},
                },
                MessageCancelRequest: {
                  fields: {
                    chatTarget: {
                      type: "ChatTarget",
                      id: 1,
                    },
                    seqId: {
                      rule: "repeated",
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                MessageCancelResponse: {
                  fields: {},
                },
                MessageClearRequest: {
                  fields: {
                    chatTarget: {
                      type: "ChatTarget",
                      id: 1,
                    },
                  },
                },
                MessageClearResponse: {
                  fields: {},
                },
                ReadSeqInfo: {
                  fields: {
                    chatTarget: {
                      type: "ChatTarget",
                      id: 1,
                    },
                    readSeq: {
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                MessageReadSeqRequest: {
                  fields: {
                    chatTarget: {
                      rule: "repeated",
                      type: "ChatTarget",
                      id: 1,
                    },
                  },
                },
                MessageReadSeqResponse: {
                  fields: {
                    readSeqInfo: {
                      rule: "repeated",
                      type: "ReadSeqInfo",
                      id: 1,
                    },
                  },
                },
                MessageReadPush: {
                  fields: {
                    targetId: {
                      type: "int64",
                      id: 1,
                    },
                    readSeq: {
                      type: "int64",
                      id: 2,
                    },
                    chatTargetType: {
                      type: "ChatTargetType",
                      id: 3,
                    },
                    strTargetId: {
                      type: "string",
                      id: 4,
                    },
                  },
                },
                AllUnreadCountRequest: {
                  fields: {},
                },
                AllUnreadCountResponse: {
                  fields: {
                    allUnreadCount: {
                      type: "int32",
                      id: 1,
                    },
                  },
                },
                MessageReadAllRequest: {
                  fields: {
                    sessionCategoryId: {
                      type: "int32",
                      id: 1,
                    },
                  },
                },
                MessageReadAllResponse: {
                  fields: {
                    readAllTimestamp: {
                      type: "int64",
                      id: 1,
                    },
                  },
                },
                SesionStickyOnTopRequest: {
                  fields: {
                    chatTarget: {
                      type: "ChatTarget",
                      id: 1,
                    },
                    stickyOnTop: {
                      type: "bool",
                      id: 2,
                    },
                  },
                },
                SessionStickyOnTopResponse: {
                  fields: {
                    session: {
                      type: "ChatSession",
                      id: 1,
                    },
                  },
                },
                SessionRaw: {
                  fields: {
                    raw: {
                      keyType: "string",
                      type: "bytes",
                      id: 1,
                    },
                  },
                },
                MessageRecallRequest: {
                  fields: {
                    chatTarget: {
                      type: "ChatTarget",
                      id: 1,
                    },
                    seqId: {
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                MessageRecallResponse: {
                  fields: {},
                },
                MessageReceiptRequest: {
                  fields: {
                    messageReceiptInfo: {
                      rule: "repeated",
                      type: "MessageReceiptInfo",
                      id: 1,
                    },
                    chatTarget: {
                      type: "ChatTarget",
                      id: 2,
                    },
                  },
                },
                MessageReceiptResponse: {
                  fields: {},
                },
                MessageReceiptInfo: {
                  fields: {
                    readSeq: {
                      type: "int64",
                      id: 1,
                    },
                  },
                },
                MessageReceiptCountGetRequest: {
                  fields: {
                    seqId: {
                      rule: "repeated",
                      type: "int64",
                      id: 1,
                    },
                    chatTarget: {
                      type: "ChatTarget",
                      id: 2,
                    },
                  },
                },
                MessageReceiptCountGetResponse: {
                  fields: {
                    status: {
                      rule: "repeated",
                      type: "MessageReceiptStatus",
                      id: 1,
                    },
                  },
                },
                MessageReceiptStatus: {
                  fields: {
                    readCount: {
                      type: "int32",
                      id: 1,
                    },
                    unreadCount: {
                      type: "int32",
                      id: 2,
                    },
                    seqId: {
                      type: "int64",
                      id: 3,
                    },
                    serverTime: {
                      type: "int64",
                      id: 4,
                    },
                  },
                },
                MessageReceiptDetailGetRequest: {
                  fields: {
                    seqId: {
                      type: "int64",
                      id: 1,
                    },
                    chatTarget: {
                      type: "ChatTarget",
                      id: 2,
                    },
                  },
                },
                MessageReceiptDetailGetResponse: {
                  fields: {
                    readUser: {
                      rule: "repeated",
                      type: "Basic.User",
                      id: 1,
                    },
                    unreadUser: {
                      rule: "repeated",
                      type: "Basic.User",
                      id: 2,
                    },
                  },
                },
                MessageBatchSendRequest: {
                  fields: {
                    message: {
                      rule: "repeated",
                      type: "Message",
                      id: 1,
                    },
                  },
                },
                MessageBatchSendResponse: {
                  fields: {
                    response: {
                      rule: "repeated",
                      type: "SendMessageResponse",
                      id: 1,
                    },
                  },
                },
                ImageAttachment: {
                  fields: {
                    mimeType: {
                      type: "string",
                      id: 1,
                    },
                    url: {
                      type: "string",
                      id: 2,
                    },
                    width: {
                      type: "int32",
                      id: 3,
                    },
                    height: {
                      type: "int32",
                      id: 4,
                    },
                    lengthInBytes: {
                      type: "int64",
                      id: 5,
                    },
                  },
                },
                AudioAttachment: {
                  fields: {
                    mimeType: {
                      type: "string",
                      id: 1,
                    },
                    url: {
                      type: "string",
                      id: 2,
                    },
                    width: {
                      type: "int32",
                      id: 3,
                    },
                    height: {
                      type: "int32",
                      id: 4,
                    },
                    lengthInBytes: {
                      type: "int64",
                      id: 5,
                    },
                  },
                },
                GifAttachment: {
                  fields: {
                    mimeType: {
                      type: "string",
                      id: 1,
                    },
                    url: {
                      type: "string",
                      id: 2,
                    },
                    width: {
                      type: "int32",
                      id: 3,
                    },
                    height: {
                      type: "int32",
                      id: 4,
                    },
                    thumbaUrl: {
                      type: "string",
                      id: 5,
                    },
                    text: {
                      type: "string",
                      id: 6,
                    },
                  },
                },
                Attachment: {
                  oneofs: {
                    attacmnent: {
                      oneof: ["imageAttachment", "audioAttachment"],
                    },
                  },
                  fields: {
                    imageAttachment: {
                      type: "ImageAttachment",
                      id: 1,
                    },
                    audioAttachment: {
                      type: "AudioAttachment",
                      id: 2,
                    },
                  },
                },
                Attachments: {
                  fields: {
                    attachments: {
                      rule: "repeated",
                      type: "Attachment",
                      id: 1,
                    },
                  },
                },
                PlaceHolderMessage: {
                  fields: {
                    minSeq: {
                      type: "int64",
                      id: 1,
                    },
                    maxSeq: {
                      type: "int64",
                      id: 2,
                    },
                  },
                },
                ImageTextMessage: {
                  fields: {
                    title: {
                      type: "string",
                      id: 1,
                    },
                    description: {
                      type: "string",
                      id: 2,
                    },
                    imageUrl: {
                      type: "string",
                      id: 3,
                    },
                    actionUrl: {
                      type: "string",
                      id: 4,
                    },
                    width: {
                      type: "int32",
                      id: 5,
                    },
                    aspectRatio: {
                      type: "float",
                      id: 6,
                    },
                  },
                },
                RichTextMessage: {
                  fields: {
                    richTextMessage: {
                      type: "RichTextNoticeMessage",
                      id: 1,
                    },
                  },
                },
                SystemUser: {
                  values: {
                    kSystemUserInvalid: 0,
                    SYSTEM_USER_ID: 10000,
                  },
                },
                NoticeMessage: {
                  fields: {
                    richTextNotice: {
                      type: "RichTextNoticeMessage",
                      id: 2,
                    },
                    msg: {
                      type: "string",
                      id: 5,
                    },
                    i18nCopyWriting: {
                      type: "Basic.I18nCopyWriting",
                      id: 10,
                    },
                  },
                },
                RichTextNoticeMessage: {
                  fields: {
                    items: {
                      rule: "repeated",
                      type: "RichTextItem",
                      id: 1,
                    },
                  },
                  nested: {
                    RichTextItem: {
                      fields: {
                        color: {
                          type: "int32",
                          id: 1,
                        },
                        start: {
                          type: "int32",
                          id: 2,
                        },
                        len: {
                          type: "int32",
                          id: 3,
                        },
                        clickAction: {
                          type: "string",
                          id: 4,
                        },
                        underline: {
                          type: "bool",
                          id: 5,
                        },
                      },
                    },
                  },
                },
              },
            },
            Cloud: {
              fields: {},
              nested: {
                Channel: {
                  fields: {},
                  nested: {
                    ChannelSubscribeRequest: {
                      fields: {
                        channelId: {
                          type: "string",
                          id: 1,
                        },
                        setBarrier: {
                          type: "bool",
                          id: 2,
                        },
                      },
                    },
                    ChannelSubscribeResponse: {
                      fields: {},
                    },
                    ChannelUnsubscribeRequest: {
                      fields: {
                        channelId: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    ChannelSubscribersGetRequest: {
                      fields: {
                        channelId: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    ChannelSubscribersGetResposne: {
                      fields: {
                        subscriber: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 1,
                        },
                      },
                    },
                    ChannelBasicInfo: {
                      fields: {
                        channelId: {
                          type: "string",
                          id: 1,
                        },
                        subscriberCount: {
                          type: "int32",
                          id: 2,
                        },
                      },
                    },
                    UserActionInfo: {
                      fields: {
                        user: {
                          type: "Basic.User",
                          id: 1,
                        },
                        action: {
                          type: "UserAction",
                          id: 2,
                        },
                        timestamp: {
                          type: "int64",
                          id: 3,
                        },
                      },
                    },
                    UserAction: {
                      values: {
                        USER_ACTION_UNKNOWN: 0,
                        USER_JOIN_CHANNEL: 1,
                        USER_QUIT_CHANNEL: 2,
                        USER_OFFLINE: 3,
                      },
                    },
                    ChannelBasicInfoGetRequest: {
                      fields: {
                        channelId: {
                          rule: "repeated",
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    ChannelBasicInfoGetResponse: {
                      fields: {
                        basicInfo: {
                          rule: "repeated",
                          type: "ChannelBasicInfo",
                          id: 1,
                        },
                      },
                    },
                    ChannelHeartbeatRequest: {
                      fields: {
                        channelId: {
                          rule: "repeated",
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    ChannelHeartbeatResponse: {
                      fields: {
                        notExistChannelId: {
                          rule: "repeated",
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    ChannelBasicInfoNotify: {
                      fields: {
                        userActionInfo: {
                          type: "UserActionInfo",
                          id: 1,
                        },
                        basicInfo: {
                          type: "ChannelBasicInfo",
                          id: 2,
                        },
                      },
                    },
                  },
                },
                Config: {
                  fields: {},
                  nested: {
                    ClientConfigGetRequest: {
                      fields: {
                        version: {
                          type: "uint32",
                          id: 1,
                        },
                      },
                    },
                    ClientConfigGetResponse: {
                      fields: {
                        version: {
                          type: "uint32",
                          id: 1,
                        },
                        clientConfig: {
                          type: "ClientConfig",
                          id: 2,
                        },
                      },
                    },
                    NetworkQualityDetectionConfig: {
                      fields: {
                        detectionDomain: {
                          type: "string",
                          id: 1,
                        },
                        detectionInvervalSec: {
                          type: "int32",
                          id: 2,
                        },
                      },
                    },
                    ClientConfig: {
                      fields: {
                        fetchUserStatusInterval: {
                          type: "int32",
                          id: 1,
                        },
                        channelUserHeartbeatInterval: {
                          type: "int32",
                          id: 2,
                        },
                        networkQualityDetectionConfig: {
                          type: "NetworkQualityDetectionConfig",
                          id: 3,
                        },
                        inputtingTipDisplayInterval: {
                          type: "int32",
                          id: 4,
                        },
                        batchSendMessageMaxCount: {
                          type: "int32",
                          id: 5,
                        },
                        resourceUploadingDomain: {
                          type: "string",
                          id: 6,
                        },
                      },
                    },
                  },
                },
                Profile: {
                  fields: {},
                  nested: {
                    UserOnlineStatus: {
                      fields: {
                        user: {
                          type: "Basic.User",
                          id: 1,
                        },
                        lastOfflineTime: {
                          type: "int64",
                          id: 2,
                        },
                        status: {
                          type: "Status",
                          id: 3,
                        },
                      },
                      nested: {
                        Status: {
                          values: {
                            UNKNOWN: 0,
                            ONLINE: 1,
                            OFFLINE: 2,
                          },
                        },
                      },
                    },
                    ProfileBatchOnlineTimeRequest: {
                      fields: {
                        user: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 1,
                        },
                      },
                    },
                    ProfileBatchOnlineTimeResponse: {
                      fields: {
                        userOnlineStatus: {
                          rule: "repeated",
                          type: "UserOnlineStatus",
                          id: 1,
                        },
                      },
                    },
                  },
                },
                Data: {
                  fields: {},
                  nested: {
                    Update: {
                      fields: {},
                      nested: {
                        KsImDataUpdateType: {
                          values: {
                            INVALID: 0,
                            GROUP_INFO_UPDATE: 1,
                            GROUP_MEMBER_LIST_UPDATE: 2,
                            YOU_BE_KICKED: 3,
                            MESSAGE_READ_EVENT: 4,
                            MESSAGE_RECEIPT_EVENT: 5,
                            FRIEND_LIST_UPDATE: 6,
                            FRIEND_REQUEST_COUNT_UPDATE: 7,
                            BLACK_LIST_UPDATE: 8,
                          },
                        },
                        KsImDataUpdatePushPayload: {
                          fields: {
                            type: {
                              type: "KsImDataUpdatePushPayload",
                              id: 1,
                            },
                            content: {
                              type: "bytes",
                              id: 2,
                            },
                          },
                        },
                        GroupInfoDataUpdate: {
                          fields: {
                            groupId: {
                              type: "string",
                              id: 1,
                            },
                          },
                        },
                        GroupMemberListUpdate: {
                          fields: {
                            groupId: {
                              type: "string",
                              id: 1,
                            },
                          },
                        },
                        YouBeKicked: {
                          fields: {
                            groupId: {
                              type: "string",
                              id: 1,
                            },
                          },
                        },
                        MessageRead: {
                          fields: {
                            strTargetId: {
                              type: "string",
                              id: 1,
                            },
                            readSeq: {
                              type: "int64",
                              id: 2,
                            },
                            chatTargetType: {
                              type: "Im.Message.ChatTargetType",
                              id: 3,
                            },
                          },
                        },
                        MessageReceipt: {
                          fields: {
                            chatTarget: {
                              type: "Im.Message.ChatTarget",
                              id: 1,
                            },
                            receiptStatus: {
                              type: "Im.Message.MessageReceiptStatus",
                              id: 2,
                            },
                          },
                        },
                      },
                    },
                  },
                },
                Message: {
                  fields: {},
                  nested: {
                    ImcMessageType: {
                      values: {
                        TEXT: 0,
                        IMAGE: 1,
                        CUSTOM: 2,
                        AUDIO: 3,
                        VIDEO: 4,
                        EMOTICON: 5,
                        FILE: 6,
                        NOTICE: 10,
                        RECALLED: 11,
                        REFERENCE: 12,
                        MERGE_FORWARD: 13,
                        PLACE_HOLDER: 100,
                        REPLACE: 101,
                        INVISIBLE_TYPE_MAS: 199,
                        RICH_NOTICE: 200,
                      },
                    },
                    ImcRecalledMessage: {
                      fields: {
                        originMsg: {
                          type: "Im.Message.Message",
                          id: 1,
                        },
                        noticeMsg: {
                          type: "ImcNoticeMessage",
                          id: 2,
                        },
                      },
                    },
                    ImcReplaceMessage: {
                      fields: {
                        replaceMsg: {
                          type: "Im.Message.Message",
                          id: 1,
                        },
                      },
                    },
                    Text: {
                      fields: {
                        text: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    Image: {
                      fields: {
                        uri: {
                          type: "string",
                          id: 1,
                        },
                        width: {
                          type: "int32",
                          id: 2,
                        },
                        height: {
                          type: "int32",
                          id: 3,
                        },
                      },
                    },
                    Audio: {
                      fields: {
                        uri: {
                          type: "string",
                          id: 1,
                        },
                        duration: {
                          type: "int32",
                          id: 2,
                        },
                        type: {
                          type: "string",
                          id: 3,
                        },
                      },
                    },
                    Video: {
                      fields: {
                        uri: {
                          type: "string",
                          id: 1,
                        },
                        duration: {
                          type: "int32",
                          id: 2,
                        },
                        width: {
                          type: "int32",
                          id: 3,
                        },
                        height: {
                          type: "int32",
                          id: 4,
                        },
                        coverUri: {
                          type: "string",
                          id: 5,
                        },
                        type: {
                          type: "string",
                          id: 6,
                        },
                      },
                    },
                    Custon: {
                      fields: {
                        payload: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    PicUrl: {
                      fields: {
                        cdn: {
                          type: "string",
                          id: 1,
                        },
                        url: {
                          type: "string",
                          id: 2,
                        },
                        urlPattern: {
                          type: "string",
                          id: 3,
                        },
                        ip: {
                          type: "string",
                          id: 4,
                        },
                      },
                    },
                    Emoticon: {
                      fields: {
                        id: {
                          type: "string",
                          id: 1,
                        },
                        packageId: {
                          type: "string",
                          id: 2,
                        },
                        name: {
                          type: "string",
                          id: 3,
                        },
                        type: {
                          type: "Type",
                          id: 4,
                        },
                        bigUrl: {
                          rule: "repeated",
                          type: "PicUrl",
                          id: 5,
                        },
                        width: {
                          type: "int32",
                          id: 6,
                        },
                        height: {
                          type: "int32",
                          id: 7,
                        },
                        emoticonCOde: {
                          rule: "repeated",
                          type: "Code",
                          id: 8,
                        },
                      },
                      nested: {
                        Type: {
                          values: {
                            UNKNOWN: 0,
                            BASIC: 1,
                            IMAGE: 2,
                            GIF: 3,
                            SPECIAL_EFFECT: 4,
                            SCRIPT: 5,
                          },
                        },
                        Code: {
                          fields: {
                            language: {
                              type: "string",
                              id: 1,
                            },
                            code: {
                              rule: "repeated",
                              type: "string",
                              id: 2,
                            },
                          },
                        },
                      },
                    },
                    File: {
                      fields: {
                        uri: {
                          type: "string",
                          id: 1,
                        },
                        name: {
                          type: "string",
                          id: 2,
                        },
                        ext: {
                          type: "string",
                          id: 3,
                        },
                        extra: {
                          type: "string",
                          id: 4,
                        },
                      },
                    },
                    Reference: {
                      fields: {
                        originMsg: {
                          type: "Im.Message.Message",
                          id: 1,
                        },
                        referenceMsg: {
                          type: "ReferenceMessage",
                          id: 2,
                        },
                      },
                      nested: {
                        ReferenceMessage: {
                          fields: {
                            contentType: {
                              type: "int32",
                              id: 1,
                            },
                            content: {
                              type: "bytes",
                              id: 2,
                            },
                          },
                        },
                      },
                    },
                    ForwardMessageContent: {
                      fields: {
                        message: {
                          rule: "repeated",
                          type: "Im.Message.Message",
                          id: 1,
                        },
                      },
                    },
                    NoticePlaceholderMeta: {
                      fields: {
                        targetId: {
                          type: "string",
                          id: 1,
                        },
                        startIndex: {
                          type: "int32",
                          id: 2,
                        },
                        length: {
                          type: "int32",
                          id: 3,
                        },
                      },
                    },
                    ImcNoticeMessage: {
                      fields: {
                        text: {
                          type: "string",
                          id: 1,
                        },
                        noticePlaceholderMeta: {
                          rule: "repeated",
                          type: "NoticePlaceholderMeta",
                          id: 2,
                        },
                        noticeMetaType: {
                          type: "int32",
                          id: 3,
                        },
                        noticeMetaInfo: {
                          type: "bytes",
                          id: 4,
                        },
                      },
                    },
                    NoticeMetaType: {
                      values: {
                        UNKNOWN_NOTICE_META_TYPE: 0,
                        COMMON_NOTICE_META_TYPE: 1,
                        CONFIRM_INVITE_INTO_GROUP_META: 2,
                        CONFIRM_JOIN_INTO_GROUP_META: 3,
                        LINKED_PROFILE_META_TYPE: 4,
                      },
                    },
                    LinkedProfileMetaInfo: {
                      fields: {
                        userId: {
                          rule: "repeated",
                          type: "int64",
                          id: 1,
                        },
                      },
                    },
                    ConfirmInviteIntoGroupNoticeMetaInfo: {
                      fields: {
                        requestId: {
                          type: "int64",
                          id: 1,
                        },
                        groupId: {
                          type: "string",
                          id: 2,
                        },
                        status: {
                          type: "JoinRequestStatus",
                          id: 3,
                        },
                      },
                    },
                    ConfirmJoinIntoGroupNoticeMetaInfo: {
                      fields: {
                        requestId: {
                          type: "int64",
                          id: 1,
                        },
                        groupId: {
                          type: "string",
                          id: 2,
                        },
                        status: {
                          type: "JoinRequestStatus",
                          id: 3,
                        },
                      },
                    },
                    GroupFindType: {
                      values: {
                        BY_UNKNOWN: 0,
                        BY_ID: 1,
                        BY_NAME: 2,
                        BY_QR_CODE: 3,
                        BY_CARD: 4,
                        BY_INVITATION: 5,
                        BY_SHARE_LINK: 6,
                      },
                    },
                    GroupCreateRequest: {
                      fields: {
                        members: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 1,
                        },
                      },
                    },
                    GroupCreateReponse: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        groupInfo: {
                          type: "GroupInfo",
                          id: 2,
                        },
                        members: {
                          rule: "repeated",
                          type: "GroupMember",
                          id: 3,
                        },
                      },
                    },
                    GroupDeleteRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    GroupDeleteResponse: {
                      fields: {},
                    },
                    GroupInviteRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        members: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 2,
                        },
                        descContent: {
                          type: "string",
                          id: 3,
                        },
                      },
                    },
                    GroupInvideResponse: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        inviteStatus: {
                          type: "InviteStatus",
                          id: 2,
                        },
                      },
                      nested: {
                        InviteStatus: {
                          values: {
                            UNKNOWN_STATUS: 0,
                            SUCC: 1,
                            PENDING: 2,
                          },
                        },
                      },
                    },
                    GroupJoinRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        inviter: {
                          type: "Basic.User",
                          id: 2,
                        },
                        descContent: {
                          type: "string",
                          id: 3,
                        },
                        findType: {
                          type: "GroupFindType",
                          id: 4,
                        },
                      },
                    },
                    GroupJoinResponse: {
                      fields: {
                        joinStatus: {
                          type: "JoinStatus",
                          id: 1,
                        },
                      },
                      nested: {
                        JoinStatus: {
                          values: {
                            UNKNOWN_STATUS: 0,
                            SUCC: 1,
                            PENDING: 2,
                          },
                        },
                      },
                    },
                    GroupJoinRequestAckRequest: {
                      fields: {
                        reqId: {
                          type: "int64",
                          id: 1,
                        },
                        groupId: {
                          type: "string",
                          id: 2,
                        },
                        groupJoinAckType: {
                          type: "GroupJoinAckType",
                          id: 3,
                        },
                      },
                      nested: {
                        GroupJoinAckType: {
                          values: {
                            UNKNOWN_TYPE: 0,
                            AGREE: 1,
                            REFUSE: 2,
                            IGNORE: 3,
                          },
                        },
                      },
                    },
                    GroupJoinRequestAckResponse: {
                      fields: {},
                    },
                    GroupJoinRequestGetRequest: {
                      fields: {
                        reqSeq: {
                          type: "int64",
                          id: 1,
                        },
                        groupId: {
                          type: "string",
                          id: 2,
                        },
                      },
                    },
                    GroupJoinRequestGetResponse: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        inviter: {
                          type: "Basic.User",
                          id: 2,
                        },
                        invitees: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 3,
                        },
                        findWay: {
                          type: "GroupFindType",
                          id: 4,
                        },
                        descContent: {
                          type: "string",
                          id: 5,
                        },
                        status: {
                          type: "JoinRequestStatus",
                          id: 6,
                        },
                      },
                    },
                    GroupJoinRequestCancelRequest: {
                      fields: {
                        reqSeq: {
                          type: "int64",
                          id: 1,
                        },
                        groupId: {
                          type: "string",
                          id: 2,
                        },
                      },
                    },
                    GroupJoinRequestCancelResposne: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        inviter: {
                          type: "Basic.User",
                          id: 2,
                        },
                        invitees: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 3,
                        },
                        findWay: {
                          type: "GroupFindType",
                          id: 4,
                        },
                        descContent: {
                          type: "string",
                          id: 5,
                        },
                        status: {
                          type: "JoinRequestStatus",
                          id: 6,
                        },
                      },
                    },
                    JoinRequestStatus: {
                      values: {
                        UNKNOWN_STATUS: 0,
                        REQUESTED: 1,
                        APPROVED: 2,
                        REFUSED: 3,
                      },
                    },
                    GroupQuitRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    GroupQuitResponse: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    GroupKickRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        target: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 2,
                        },
                      },
                    },
                    GroupKickResponse: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    GroupSettingRequest: {
                      oneofs: {
                        GroupSetting: {
                          oneof: [
                            "rename",
                            "desc",
                            "joinNeedPermission",
                            "invitePermission",
                          ],
                        },
                      },
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        rename: {
                          type: "GroupSettingRename",
                          id: 2,
                        },
                        desc: {
                          type: "GroupSettingDesc",
                          id: 3,
                        },
                        joinNeedPermission: {
                          type: "GroupSettingJoinNeedPermission",
                          id: 4,
                        },
                        invitePermission: {
                          type: "GroupSettingInvitePermission",
                          id: 5,
                        },
                      },
                    },
                    GroupSettingRename: {
                      fields: {
                        groupName: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    GroupSettingDesc: {
                      fields: {
                        desc: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    GroupSettingJoinNeedPermission: {
                      fields: {
                        joinNeedPermission: {
                          type: "JoinNeedPermissionType",
                          id: 1,
                        },
                      },
                    },
                    GroupSettingInvitePermission: {
                      fields: {
                        invitePermissionType: {
                          type: "InvitePermissionType",
                          id: 1,
                        },
                      },
                    },
                    GroupSettingResponse: {
                      fields: {},
                    },
                    GroupMemberSettingRequest: {
                      oneofs: {
                        UserSetting: {
                          oneof: ["setNickname", "setAntiDisturbing"],
                        },
                      },
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        setNickname: {
                          type: "SetUserNickname",
                          id: 2,
                        },
                        setAntiDisturbing: {
                          type: "SetUserAntiDisturbing",
                          id: 3,
                        },
                      },
                    },
                    SetUserNickname: {
                      fields: {
                        nickname: {
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    SetUserAntiDisturbing: {
                      fields: {
                        antiDisturbing: {
                          type: "bool",
                          id: 1,
                        },
                      },
                    },
                    GroupMemberSettingResponse: {
                      fields: {},
                    },
                    GroupMemberListGetRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        syncCookie: {
                          type: "Basic.SyncCookie",
                          id: 2,
                        },
                      },
                    },
                    GroupMemberListGetResponse: {
                      fields: {
                        members: {
                          rule: "repeated",
                          type: "GroupMember",
                          id: 1,
                        },
                        syncCookie: {
                          type: "Basic.SyncCookie",
                          id: 2,
                        },
                      },
                    },
                    GroupMemberGetRequest: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        user: {
                          type: "Basic.User",
                          id: 2,
                        },
                      },
                    },
                    GroupMemberGetResponse: {
                      fields: {
                        member: {
                          type: "GroupMember",
                          id: 1,
                        },
                      },
                    },
                    UserGroupListRequest: {
                      fields: {
                        syncCookie: {
                          type: "Basic.SyncCookie",
                          id: 2,
                        },
                      },
                    },
                    UserGroupListResponse: {
                      fields: {
                        userGroupInfo: {
                          rule: "repeated",
                          type: "UserGroupInfo",
                          id: 1,
                        },
                        syncCookie: {
                          type: "Basic.SyncCookie",
                          id: 2,
                        },
                      },
                    },
                    UserGroupRecord: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        updateTime: {
                          type: "int64",
                          id: 2,
                        },
                      },
                    },
                    UserGroupGetRequest: {
                      fields: {
                        groupId: {
                          rule: "repeated",
                          type: "string",
                          id: 1,
                        },
                      },
                    },
                    UserGroupGetResponse: {
                      fields: {
                        userGroupInfo: {
                          rule: "repeated",
                          type: "UserGroupInfo",
                          id: 1,
                        },
                      },
                    },
                    UserGroupInfo: {
                      fields: {
                        groupInfo: {
                          type: "GroupInfo",
                          id: 1,
                        },
                        groupMember: {
                          type: "GroupMember",
                          id: 2,
                        },
                      },
                    },
                    GroupMember: {
                      fields: {
                        user: {
                          type: "Basic.User",
                          id: 1,
                        },
                        nickname: {
                          type: "string",
                          id: 2,
                        },
                        antiDisturbing: {
                          type: "bool",
                          id: 3,
                        },
                        status: {
                          type: "GroupMemberStatus",
                          id: 4,
                        },
                        inviterId: {
                          type: "int64",
                          id: 5,
                        },
                        joinTime: {
                          type: "int64",
                          id: 6,
                        },
                        createTime: {
                          type: "int64",
                          id: 7,
                        },
                        updateTime: {
                          type: "int64",
                          id: 8,
                        },
                        role: {
                          type: "GroupMemberRole",
                          id: 9,
                        },
                        findType: {
                          type: "GroupFindType",
                          id: 10,
                        },
                      },
                      nested: {
                        GroupMemberStatus: {
                          values: {
                            UNKNOWN_MEMBER_STATUS: 0,
                            NORMAL: 1,
                            QUITTED: 2,
                            KICKED: 3,
                            DISMISSED: 4,
                          },
                        },
                        GroupMemberRole: {
                          values: {
                            UNKNOWN_ROLE: 0,
                            COMMON: 1,
                            ADMIN: 2,
                          },
                        },
                      },
                    },
                    InvitePermissionType: {
                      values: {
                        UNKNOWN_INVITE_PERMISSION_TYPE: 0,
                        EVERYONE: 1,
                        ONLY_ADMIN: 2,
                      },
                    },
                    JoinNeedPermissionType: {
                      values: {
                        UNKNOWN_JOIN_NEED_PERMISSION_TYPE: 0,
                        NONE: 1,
                        ADMIN: 2,
                      },
                    },
                    GroupInfo: {
                      fields: {
                        basicInfo: {
                          type: "GroupBasicInfo",
                          id: 1,
                        },
                        groupMemberBriefInfo: {
                          type: "GroupMemberBriefInfo",
                          id: 2,
                        },
                      },
                    },
                    GroupStatus: {
                      values: {
                        UNKNOW_GROUP_STATUS: 0,
                        VALID: 1,
                        INVALID: 2,
                      },
                    },
                    GroupType: {
                      values: {
                        UNKNOW_GROUP_TYPE: 0,
                        PRIVATE: 3,
                        PUBLIC: 4,
                      },
                    },
                    ForbiddenState: {
                      values: {
                        UNKNOWN_FORBIDDEN_STATE: 0,
                        UN_FORBIDDEN: 1,
                        FORBID_MESSAGE: 2,
                      },
                    },
                    GroupBasicInfo: {
                      fields: {
                        groupId: {
                          type: "string",
                          id: 1,
                        },
                        groupName: {
                          type: "string",
                          id: 2,
                        },
                        admin: {
                          type: "Basic.User",
                          id: 3,
                        },
                        groupStatus: {
                          type: "GroupStatus",
                          id: 4,
                        },
                        description: {
                          type: "string",
                          id: 5,
                        },
                        joinNeedPermission: {
                          type: "JoinNeedPermissionType",
                          id: 6,
                        },
                        createTime: {
                          type: "int64",
                          id: 7,
                        },
                        updateTime: {
                          type: "int64",
                          id: 8,
                        },
                        groupType: {
                          type: "GroupType",
                          id: 9,
                        },
                        forbiddenState: {
                          type: "ForbiddenState",
                          id: 10,
                        },
                        invitePermissionType: {
                          type: "InvitePermissionType",
                          id: 11,
                        },
                        bizDefCode: {
                          type: "int32",
                          id: 12,
                        },
                        defalutGroupName: {
                          type: "string",
                          id: 13,
                        },
                        extra: {
                          type: "string",
                          id: 14,
                        },
                      },
                    },
                    GroupMemberBriefInfo: {
                      fields: {
                        memberCount: {
                          type: "int32",
                          id: 1,
                        },
                        topMembers: {
                          rule: "repeated",
                          type: "Basic.User",
                          id: 2,
                        },
                        lastUpdateTime: {
                          type: "int64",
                          id: 3,
                        },
                      },
                    },
                    ImcPassThroughRequest: {
                      fields: {
                        chatTarget: {
                          type: "Im.Message.ChatTarget",
                          id: 1,
                        },
                        content: {
                          type: "bytes",
                          id: 2,
                        },
                        contentType: {
                          type: "int32",
                          id: 3,
                        },
                      },
                    },
                    ImcPassThroughResponse: {
                      fields: {},
                    },
                    ImcPassThroughPush: {
                      fields: {
                        chatTarget: {
                          type: "Im.Message.ChatTarget",
                          id: 1,
                        },
                        fromUser: {
                          type: "Basic.User",
                          id: 2,
                        },
                        content: {
                          type: "bytes",
                          id: 3,
                        },
                        contentType: {
                          type: "int32",
                          id: 4,
                        },
                      },
                    },
                    InputtingContent: {
                      fields: {
                        displayInterval: {
                          type: "int32",
                          id: 1,
                        },
                      },
                    },
                    PassThroughType: {
                      values: {
                        INVALID_PTT: 0,
                        INPUTTING: 1,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        KeepAliveRequest: {
          fields: {
            presenceStatus: {
              type: "RegisterRequest.PresenceStatus",
              id: 1,
            },
            appActiveStatus: {
              type: "RegisterRequest.ActiveStatus",
              id: 2,
            },
            pushServiceToken: {
              type: "PushServiceToken",
              id: 3,
            },
            pushServiceTokenList: {
              rule: "repeated",
              type: "PushServiceToken",
              id: 4,
            },
            keepaliveIntervalSec: {
              type: "int32",
              id: 5,
            },
            ipv6Available: {
              type: "bool",
              id: 6,
            },
          },
        },
        KeepAliveResponse: {
          fields: {
            accessPointsConfig: {
              type: "AccessPointsConfig",
              id: 1,
            },
            serverMsec: {
              type: "int64",
              id: 2,
            },
            accessPointsConfigIpv6: {
              type: "AccessPointsConfig",
              id: 3,
            },
            accessPointsConfigQUic: {
              type: "AccessPointsConfig",
              id: 6,
            },
            accessPointsConfigQuicIpv6: {
              type: "AccessPointsConfig",
              id: 7,
            },
            flowCostSampleRate: {
              type: "float",
              id: 8,
            },
            commandSampleRate: {
              type: "float",
              id: 9,
            },
            accessPointsConfigWs: {
              type: "AccessPointsConfig",
              id: 10,
            },
          },
        },
        RegisterRequest: {
          fields: {
            appInfo: {
              type: "AppInfo",
              id: 1,
            },
            deviceInfo: {
              type: "DeviceInfo",
              id: 2,
            },
            envInfo: {
              type: "EnvInfo",
              id: 3,
            },
            presenceStatus: {
              type: "PresenceStatus",
              id: 4,
            },
            appActiveStatus: {
              type: "ActiveStatus",
              id: 5,
            },
            appCustomStatus: {
              type: "bytes",
              id: 6,
            },
            pushServiceToken: {
              type: "PushServiceToken",
              id: 7,
            },
            instanceId: {
              type: "int64",
              id: 8,
            },
            pushServiceTokenList: {
              rule: "repeated",
              type: "PushServiceToken",
              id: 9,
            },
            keepaliveIntervalSec: {
              type: "int32",
              id: 10,
            },
            ztCommonInfo: {
              type: "ZtCommonInfo",
              id: 11,
            },
            ipv6Available: {
              type: "bool",
              id: 12,
            },
          },
          nested: {
            PresenceStatus: {
              values: {
                kPresenceOffline: 0,
                kPresenceOnline: 1,
              },
            },
            ActiveStatus: {
              values: {
                kInvalid: 0,
                kAppInForeground: 1,
                kAppInBackground: 2,
              },
            },
          },
        },
        RegisterResponse: {
          fields: {
            accessPointsConfig: {
              type: "AccessPointsConfig",
              id: 1,
            },
            sessKey: {
              type: "bytes",
              id: 2,
            },
            instanceId: {
              type: "int64",
              id: 3,
            },
            sdkOption: {
              type: "SdkOption",
              id: 4,
            },
            accessPointsConfigIpv6: {
              type: "AccessPointsConfig",
              id: 5,
            },
            accessPointsConfigQUic: {
              type: "AccessPointsConfig",
              id: 6,
            },
            accessPointsConfigQuicIpv6: {
              type: "AccessPointsConfig",
              id: 7,
            },
            cleanAccessPoint: {
              type: "bool",
              id: 8,
            },
            flowCostSampleRate: {
              type: "float",
              id: 9,
            },
            commandSampleRate: {
              type: "float",
              id: 10,
            },
            accessPointsConfigWs: {
              type: "AccessPointsConfig",
              id: 11,
            },
          },
        },
        ZtCommonInfo: {
          fields: {
            kpn: {
              type: "string",
              id: 1,
            },
            kpf: {
              type: "string",
              id: 2,
            },
            subBiz: {
              type: "string",
              id: 3,
            },
            uid: {
              type: "int64",
              id: 4,
            },
            did: {
              type: "string",
              id: 5,
            },
            clientIp: {
              type: "int64",
              id: 6,
            },
            appVer: {
              type: "string",
              id: 7,
            },
            ver: {
              type: "string",
              id: 8,
            },
            lat: {
              type: "string",
              id: 9,
            },
            lon: {
              type: "string",
              id: 10,
            },
            mod: {
              type: "string",
              id: 11,
            },
            net: {
              type: "string",
              id: 12,
            },
            sys: {
              type: "string",
              id: 13,
            },
            c: {
              type: "string",
              id: 14,
            },
            language: {
              type: "string",
              id: 15,
            },
            countryCode: {
              type: "string",
              id: 16,
            },
          },
        },
        PushServiceToken: {
          fields: {
            pushType: {
              type: "PushType",
              id: 1,
            },
            token: {
              type: "bytes",
              id: 2,
            },
            isPassThrough: {
              type: "bool",
              id: 3,
            },
          },
          nested: {
            PushType: {
              values: {
                kPushTypeInvalid: 0,
                kPushTypeAPNS: 1,
                kPushTypeXmPush: 2,
                kPushTypeJgPush: 3,
                kPushTypeGtPUsh: 4,
                kPushTypeOpPush: 5,
                kPushTYpeVvPush: 6,
                kPushTypeHwPush: 7,
                kPushTYpeFcm: 8,
              },
            },
          },
        },
        SdkOption: {
          fields: {
            reportIntervalSeconds: {
              type: "int32",
              id: 1,
            },
            reportSecurity: {
              type: "string",
              id: 2,
            },
            lz4CompressionThresholdBytes: {
              type: "int32",
              id: 3,
            },
            netCheckServers: {
              rule: "repeated",
              type: "string",
              id: 4,
            },
          },
        },
        LinkErrorCode: {
          values: {
            SUCC: 0,
            BASIC_MIN: 10000,
            INTERNEL_ERROR: 10001,
            SERVICE_UNAVAILABLE: 10002,
            SERVICE_TIMEOUT: 10003,
            INVALID_TOKEN: 10004,
            REG_ENCYRPT_WITHOUT_TOKEN: 10005,
            PARSE_PB_HDR_FAIL: 10006,
            PARSE_PB_PLD_FAIL: 10007,
            PARSE_PB_FAIL: 10008,
            DECODED_LEN_FAIL: 10009,
            INVALID_KEY: 10010,
            ENCRYPT_FAIL: 10011,
            DECRYPT_FAIL: 10012,
            INVALID_TAG: 10013,
            INVALID_VER: 10014,
            INVALID_COMPRESS_TYPE: 10016,
            INVALID_ENCRYPT_TYPE: 10017,
            NOT_REGISTER: 10018,
            USER_NOT_ONLINE: 10019,
            INVALID_COMMAND: 10020,
            PUSH_UNREGISTER_ERROR: 10021,
            INVALID_SID: 10022,
            INVALID_INSTANCE_ID: 10023,
            CLIENT_LOCALE_NOT_MATCH: 10024,
            INVALID_TOKEN_PASSWORD_CHANGED: 10025,
            INVALID_TOKEN_TOKEN_EXPIRED: 10026,
            INVALID_TOKEN_TOKEN_VALUE_ERROR: 10027,
            INVALID_TOKEN_LOGIN_ON_OTHER_DEVICE: 10028,
            FORCE_RECONNECT: 10029,
            CLIENT_TIMEOUT: 10030,
            INVALID_ARGUMENT: 10031,
            INVALID_FORMAT_TOKEN: 10032,
            EMPTY_PAYLOAD: 10033,
            COMPRESS_FAIL: 10034,
            DECOMPRESS_FAIL: 10035,
            OUT_OF_ORDER: 10036,
            OUT_OF_LIMIT: 10037,
            TOO_LARGE_PAYLOAD: 10038,
            ANONYMOUSE_ERROR: 10039,
            BASIC_MAX: 19999,
          },
        },
        PacketHeader: {
          fields: {
            appId: {
              type: "int32",
              id: 1,
            },
            uid: {
              type: "int64",
              id: 2,
            },
            instanceId: {
              type: "int64",
              id: 3,
            },
            flags: {
              type: "uint32",
              id: 5,
            },
            encodingType: {
              type: "EncodingType",
              id: 6,
            },
            decodedPayloadLen: {
              type: "uint32",
              id: 7,
            },
            encryptionMode: {
              type: "EncryptionMode",
              id: 8,
            },
            tokenInfo: {
              type: "TokenInfo",
              id: 9,
            },
            seqId: {
              type: "int64",
              id: 10,
            },
            features: {
              rule: "repeated",
              type: "Feature",
              id: 11,
            },
            kpn: {
              type: "string",
              id: 12,
            },
          },
          nested: {
            Flags: {
              options: {
                allow_alias: true,
              },
              values: {
                kDirUpstream: 0,
                kDirDownstream: 1,
                kDirMask: 1,
              },
            },
            EncodingType: {
              values: {
                kEncodingNone: 0,
                kEncodingLz4: 1,
              },
            },
            EncryptionMode: {
              values: {
                kEncryptionNone: 0,
                kEncryptionServiceToken: 1,
                kEncryptionSessionKey: 2,
              },
            },
            Feature: {
              values: {
                kReserve: 0,
                kCompressLz4: 1,
              },
            },
          },
        },
        TokenInfo: {
          fields: {
            tokenType: {
              type: "TokenType",
              id: 1,
            },
            token: {
              type: "bytes",
              id: 2,
            },
          },
          nested: {
            TokenType: {
              values: {
                kInvalid: 0,
                kServiceToken: 1,
              },
            },
          },
        },
        PingRequest: {
          fields: {
            pingType: {
              type: "PingType",
              id: 1,
            },
            pingRound: {
              type: "uint32",
              id: 2,
            },
          },
          nested: {
            PingType: {
              values: {
                kInvalid: 0,
                kPriorRegister: 1,
                kPostRegister: 2,
              },
            },
          },
        },
        PingResponse: {
          fields: {
            serverTimestamp: {
              type: "sfixed32",
              id: 1,
            },
            clientIp: {
              type: "fixed32",
              id: 2,
            },
            redirectIp: {
              type: "fixed32",
              id: 3,
            },
            redirectPort: {
              type: "uint32",
              id: 4,
            },
            clientIpV6: {
              type: "bytes",
              id: 5,
            },
          },
        },
        RequestBasicInfo: {
          fields: {
            clientType: {
              type: "DeviceInfo.PlatformType",
              id: 1,
            },
            deviceId: {
              type: "string",
              id: 2,
            },
            clientIp: {
              type: "string",
              id: 3,
            },
            appVersion: {
              type: "string",
              id: 4,
            },
            channel: {
              type: "string",
              id: 5,
            },
            appInfo: {
              type: "AppInfo",
              id: 6,
            },
            deviceInfo: {
              type: "DeviceInfo",
              id: 7,
            },
            envInfo: {
              type: "EnvInfo",
              id: 8,
            },
            clientPort: {
              type: "int32",
              id: 9,
            },
            location: {
              type: "string",
              id: 10,
            },
            kpf: {
              type: "string",
              id: 11,
            },
            clientIpV6: {
              type: "string",
              id: 12,
            },
            countryCode: {
              type: "string",
              id: 13,
            },
          },
        },
        SettingInfo: {
          fields: {
            locale: {
              type: "string",
              id: 1,
            },
            timezone: {
              type: "sint32",
              id: 2,
            },
          },
        },
        SharePlatform: {
          values: {
            kSharePlatformInvalid: 0,
            kSharePlatformWechat: 1,
            kSharePlatformWechatMoments: 2,
            kSharePlatformQQ: 3,
            kSharePlatformQzone: 4,
            kSharePlatformWeibo: 5,
            kSharePlatformKuaishou: 6,
            kSharePlatformFacebook: 7,
            kSharePlatformTwitter: 8,
            kSharePlatformGoogle: 9,
            kSharePlatformKakao: 10,
            kSharePlatformZalo: 11,
          },
        },
        SyncCookie: {
          fields: {
            syncOffset: {
              type: "int64",
              id: 1,
            },
          },
        },
        UnregisterRequest: {
          fields: {},
        },
        UnregisterResponse: {
          fields: {},
        },
        UpstreamPayload: {
          fields: {
            command: {
              type: "string",
              id: 1,
            },
            seqId: {
              type: "int64",
              id: 2,
            },
            retryCount: {
              type: "uint32",
              id: 3,
            },
            payloadData: {
              type: "bytes",
              id: 4,
            },
            userInstance: {
              type: "UserInstance",
              id: 5,
            },
            errorCode: {
              type: "int32",
              id: 6,
            },
            settingInfo: {
              type: "SettingInfo",
              id: 7,
            },
            requestBasicInfo: {
              type: "RequestBasicInfo",
              id: 8,
            },
            subBiz: {
              type: "string",
              id: 9,
            },
            frontendInfo: {
              type: "FrontendInfo",
              id: 10,
            },
            kpn: {
              type: "string",
              id: 11,
            },
            anonymouseUser: {
              type: "bool",
              id: 12,
            },
            laneId: {
              type: "string",
              id: 13,
            },
          },
        },
        UserInstance: {
          fields: {
            user: {
              type: "User",
              id: 1,
            },
            instanceId: {
              type: "int64",
              id: 2,
            },
          },
        },
        User: {
          fields: {
            appId: {
              type: "int32",
              id: 1,
            },
            uid: {
              type: "int64",
              id: 2,
            },
          },
        },
        AuthorChatPlayerInfo: {
          fields: {
            player: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            liveId: {
              type: "string",
              id: 2,
            },
            enableJumpPeerLiveRoom: {
              type: "bool",
              id: 3,
            },
          },
        },
        ZtLiveUserInfo: {
          fields: {
            userId: {
              type: "int64",
              id: 1,
            },
            nickname: {
              type: "string",
              id: 2,
            },
            avatar: {
              rule: "repeated",
              type: "ImageCdnNode",
              id: 3,
            },
            badge: {
              type: "string",
              id: 4,
            },
            userIdentity: {
              type: "ZtLiveUserIdentity",
              id: 5,
            },
            f: {
              type: "bool",
              id: 6,
            },
            g: {
              type: "string",
              id: 7,
            },
          },
        },
        ImageCdnNode: {
          fields: {
            cdn: {
              type: "string",
              id: 1,
            },
            url: {
              type: "string",
              id: 2,
            },
            urlPattern: {
              type: "string",
              id: 3,
            },
          },
        },
        ZtLiveUserIdentity: {
          fields: {
            managerType: {
              type: "ManagerType",
              id: 1,
            },
          },
          nested: {
            ManagerType: {
              values: {
                UNKNOWN_MANAGER_TYPE: 0,
                NORMAL: 1,
              },
            },
          },
        },
        BackgroundStyle: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              rule: "repeated",
              type: "ImageCdnNode",
              id: 2,
            },
          },
          nested: {
            unknown: {
              values: {
                c: 0,
                d: 1,
                e: 2,
              },
            },
          },
        },
        Button: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "ZtLiveCommonModelProto",
              id: 3,
            },
            d: {
              type: "float",
              id: 4,
            },
          },
        },
        ZtLiveCommonModelProto: {
          values: {
            ZtLiveCommonModelProtoA: 0,
            ZtLiveCommonModelProtoB: 1,
            ZtLiveCommonModelProtoC: 2,
          },
        },
        ChatMediaType: {
          values: {
            UNKNOWN: 0,
            AUDIO: 1,
            VIDEO: 2,
          },
        },
        ClickEvent: {
          fields: {
            url: {
              type: "string",
              id: 1,
            },
            urlType: {
              type: "ZtLiveCommonModelProto",
              id: 2,
            },
            heightPercent: {
              type: "float",
              id: 3,
            },
          },
        },
        CommentNotice: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "bytes",
              id: 2,
            },
            c: {
              type: "string",
              id: 3,
            },
            d: {
              rule: "repeated",
              type: "ImageCdnNode",
              id: 4,
            },
            e: {
              rule: "repeated",
              type: "ImageCdnNode",
              id: 5,
            },
            f: {
              type: "string",
              id: 6,
            },
            g: {
              type: "string",
              id: 7,
            },
            h: {
              type: "Button",
              id: 8,
            },
            i: {
              type: "ClickEvent",
              id: 9,
            },
            j: {
              type: "int32",
              id: 10,
            },
            k: {
              type: "int64",
              id: 11,
            },
            l: {
              type: "int64",
              id: 12,
            },
            m: {
              type: "int32",
              id: 13,
            },
          },
        },
        CommonActionSignalComment: {
          fields: {
            content: {
              type: "string",
              id: 1,
            },
            sendTimeMs: {
              type: "int64",
              id: 2,
            },
            userInfo: {
              type: "ZtLiveUserInfo",
              id: 3,
            },
          },
        },
        CommonActionSignalGift: {
          fields: {
            userInfo: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            sendTimeMs: {
              type: "int64",
              id: 2,
            },
            giftId: {
              type: "int64",
              id: 3,
            },
            batchSize: {
              type: "int32",
              id: 4,
            },
            comboCount: {
              type: "int32",
              id: 5,
            },
            rank: {
              type: "int64",
              id: 6,
            },
            comboKey: {
              type: "string",
              id: 7,
            },
            slotDisplayDurationMs: {
              type: "int64",
              id: 8,
            },
            expireDurationMs: {
              type: "int64",
              id: 9,
            },
            drawGiftInfo: {
              type: "ZtDrawGiftInfo",
              id: 10,
            },
          },
        },
        ZtDrawGiftInfo: {
          fields: {
            screenWidth: {
              type: "int64",
              id: 1,
            },
            screenHeight: {
              type: "int64",
              id: 2,
            },
            drawPoint: {
              rule: "repeated",
              type: "ZtDrawPoint",
              id: 3,
            },
          },
          nested: {
            ZtDrawPoint: {
              fields: {
                marginLeft: {
                  type: "int64",
                  id: 1,
                },
                marginTop: {
                  type: "int64",
                  id: 2,
                },
                scaleRatio: {
                  type: "double",
                  id: 3,
                },
                handup: {
                  type: "bool",
                  id: 4,
                },
                pointWidth: {
                  type: "int64",
                  id: 5,
                },
                pointHeight: {
                  type: "int64",
                  id: 6,
                },
              },
            },
          },
        },
        CommonActionSignalLike: {
          fields: {
            userInfo: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            sendTimeMs: {
              type: "int64",
              id: 2,
            },
          },
        },
        CommonActionSignalRichText: {
          fields: {
            segments: {
              rule: "repeated",
              type: "RichTextSegment",
              id: 1,
            },
            sendTimeMs: {
              type: "int64",
              id: 2,
            },
          },
          nested: {
            ImageSegment: {
              fields: {
                pictures: {
                  rule: "repeated",
                  type: "ImageCdnNode",
                  id: 1,
                },
                alternativeText: {
                  type: "string",
                  id: 2,
                },
                alternativeColor: {
                  type: "string",
                  id: 3,
                },
                d: {
                  type: "string",
                  id: 4,
                },
              },
            },
            PlainSegment: {
              fields: {
                text: {
                  type: "string",
                  id: 1,
                },
                color: {
                  type: "string",
                  id: 2,
                },
                c: {
                  type: "string",
                  id: 3,
                },
              },
            },
            RichTextSegment: {
              oneofs: {
                segment: {
                  oneof: ["userInfo", "plain", "image"],
                },
              },
              fields: {
                userInfo: {
                  type: "UserInfoSegment",
                  id: 1,
                },
                plain: {
                  type: "PlainSegment",
                  id: 2,
                },
                image: {
                  type: "ImageSegment",
                  id: 3,
                },
              },
            },
            UserInfoSegment: {
              fields: {
                user: {
                  type: "ZtLiveUserInfo",
                  id: 1,
                },
                color: {
                  type: "string",
                  id: 2,
                },
              },
            },
          },
        },
        CommonActionSignalUserEnterRoom: {
          fields: {
            userInfo: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            sendTimeMs: {
              type: "int64",
              id: 2,
            },
          },
        },
        CommonActionSignalUserFollowAuthor: {
          fields: {
            userInfo: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            sendTimeMs: {
              type: "int64",
              id: 2,
            },
          },
        },
        CommonActionSignalUserShareLive: {
          fields: {
            userInfo: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            sharePlatformId: {
              type: "int32",
              id: 2,
            },
            sharePlatformIcon: {
              type: "string",
              id: 3,
            },
            sendTimeMs: {
              type: "int64",
              id: 4,
            },
          },
          nested: {
            unknown: {
              values: {
                e: 0,
                f: 1,
              },
            },
          },
        },
        CommonNotifySignalCoverAuditResult: {
          fields: {
            auditStatus: {
              type: "AuditStatus",
              id: 1,
            },
          },
          nested: {
            AuditStatus: {
              values: {
                SUCCESS: 0,
                COVER_AUDIT_FAILED: 1,
                CAPTION_AUDIT_FAILED: 2,
                BOTH_FAILED: 3,
              },
            },
          },
        },
        CommonNotifySignalKickedOut: {
          fields: {
            reason: {
              type: "string",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
          },
        },
        CommonNotifySignalLiveManagerState: {
          fields: {
            state: {
              type: "ManagerState",
              id: 1,
            },
          },
          nested: {
            ManagerState: {
              values: {
                MANAGER_STATE_UNKNOWN: 0,
                MANAGER_ADDED: 1,
                MANAGER_REMOVED: 2,
                IS_MANAGER: 3,
              },
            },
          },
        },
        CommonNotifySignalRemoveApplyUser: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
            b: {
              type: "unknown",
              id: 2,
            },
          },
          nested: {
            unknown: {
              values: {
                c: 0,
                d: 1,
                e: 2,
                f: 3,
              },
            },
          },
        },
        CommonNotifySignalViolationAlert: {
          fields: {
            violationContent: {
              type: "string",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
          },
        },
        CommonStateSignalAuthorChatAccept: {
          fields: {
            authorChatId: {
              type: "string",
              id: 1,
            },
            aryaSignalInfo: {
              type: "string",
              id: 2,
            },
          },
        },
        CommonStateSignalAuthorChatCall: {
          fields: {
            authorChatId: {
              type: "string",
              id: 1,
            },
            inviterUserInfo: {
              type: "AuthorChatPlayerInfo",
              id: 2,
            },
            callTimestampMs: {
              type: "int64",
              id: 3,
            },
          },
        },
        CommonStateSignalAuthorChatChangeSoundConfig: {
          fields: {
            authorChatId: {
              type: "string",
              id: 1,
            },
            soundConfigChangeType: {
              type: "SoundConfigChangeType",
              id: 2,
            },
          },
          nested: {
            SoundConfigChangeType: {
              values: {
                UNKNOWN: 0,
                OPEN_SOUND: 1,
                CLOSE_SOUND: 2,
              },
            },
          },
        },
        CommonStateSignalAuthorChatEnd: {
          fields: {
            authorChatId: {
              type: "string",
              id: 1,
            },
            endType: {
              type: "EndType",
              id: 2,
            },
            endLiveId: {
              type: "string",
              id: 3,
            },
          },
          nested: {
            EndType: {
              values: {
                UNKNOWN: 0,
                CANCEL_BY_INVITER: 1,
                END_BY_INVITER: 2,
                END_BY_INVITEE: 3,
                INVITEE_REJECT: 4,
                INVITEE_TIMEOUT: 5,
                INVITEE_HEARTBEAT_TIMEOUT: 6,
                INVITER_HEARTBEAT_TIMEOUT: 7,
                PEER_LIVE_STOPPED: 8,
              },
            },
          },
        },
        CommonStateSignalAuthorChatReady: {
          fields: {
            authorChatId: {
              type: "string",
              id: 1,
            },
            inviterUserInfo: {
              type: "AuthorChatPlayerInfo",
              id: 2,
            },
            inviteeUserInfo: {
              type: "AuthorChatPlayerInfo",
              id: 3,
            },
          },
        },
        CommonStateSignalAuthorPause: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "string",
              id: 3,
            },
          },
        },
        CommonStateSignalAuthorResume: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
          },
        },
        CommonStateSignalChatAccept: {
          fields: {
            chatId: {
              type: "string",
              id: 1,
            },
            mediaType: {
              type: "ChatMediaType",
              id: 2,
            },
            aryaSignalInfo: {
              type: "string",
              id: 3,
            },
          },
        },
        CommonStateSignalChatCall: {
          fields: {
            chatId: {
              type: "string",
              id: 1,
            },
            liveId: {
              type: "string",
              id: 2,
            },
            callTimestampMs: {
              type: "int64",
              id: 3,
            },
            mediaType: {
              type: "ChatMediaType",
              id: 4,
            },
          },
        },
        CommonStateSignalChatEnd: {
          fields: {
            chatId: {
              type: "string",
              id: 1,
            },
            endType: {
              type: "EndType",
              id: 2,
            },
            c: {
              type: "BannedInfo",
              id: 3,
            },
          },
          nested: {
            EndType: {
              values: {
                UNKNOWN: 0,
                CANCEL_BY_AUTHOR: 1,
                END_BY_AUTHOR: 2,
                END_BY_GUEST: 3,
                GUEST_REJECT: 4,
                GUEST_TIMEOUT: 5,
                GUEST_HEARTBEAT_TIMEOUT: 6,
                AUTHOR_HEARTBEAT_TIMEOUT: 7,
                PEER_LIVE_STOPPED: 8,
              },
            },
            BannedInfo: {
              fields: {
                a: {
                  type: "string",
                  id: 1,
                },
                b: {
                  type: "string",
                  id: 2,
                },
                c: {
                  type: "string",
                  id: 3,
                },
                d: {
                  type: "string",
                  id: 4,
                },
              },
            },
          },
        },
        CommonStateSignalChatReady: {
          fields: {
            chatId: {
              type: "string",
              id: 1,
            },
            guestUserInfo: {
              type: "ZtLiveUserInfo",
              id: 2,
            },
            mediaType: {
              type: "ChatMediaType",
              id: 3,
            },
          },
        },
        CommonStateSignalCurrentRedpackList: {
          fields: {
            redpacks: {
              rule: "repeated",
              type: "Redpack",
              id: 1,
            },
          },
          nested: {
            RedpackDisplayStatus: {
              values: {
                SHOW: 0,
                GET_TOKEN: 1,
                GRAB: 2,
                e: 3,
              },
            },
            Redpack: {
              fields: {
                sender: {
                  type: "ZtLiveUserInfo",
                  id: 1,
                },
                displayStatus: {
                  type: "RedpackDisplayStatus",
                  id: 2,
                },
                grabBeginTimeMs: {
                  type: "int64",
                  id: 3,
                },
                getTokenLatestTimeMs: {
                  type: "int64",
                  id: 4,
                },
                redPackId: {
                  type: "string",
                  id: 5,
                },
                redpackBizUnit: {
                  type: "string",
                  id: 6,
                },
                redpackAmount: {
                  type: "int64",
                  id: 7,
                },
                settleBeginTime: {
                  type: "int64",
                  id: 8,
                },
                i: {
                  type: "int64",
                  id: 9,
                },
              },
            },
          },
        },
        CommonStateSignalDisplayInfo: {
          fields: {
            watchingCount: {
              type: "string",
              id: 1,
            },
            likeCount: {
              type: "string",
              id: 2,
            },
            likeDelta: {
              type: "int32",
              id: 3,
            },
          },
        },
        CommonStateSignalFeatureStateSync: {
          fields: {
            featureState: {
              rule: "repeated",
              type: "LiveFeatureState",
              id: 1,
            },
          },
        },
        LiveFeatureState: {
          fields: {
            type: {
              type: "FeatureType",
              id: 1,
            },
            state: {
              type: "FeatureState",
              id: 2,
            },
          },
          nested: {
            FeatureType: {
              values: {
                FEATURE_UNKNOWN: 0,
                LANDSCAPE_COMMENT: 1,
              },
            },
            FeatureState: {
              values: {
                FEATURE_STATE_UNKNOWN: 0,
                FEATURE_STATE_OPEND: 1,
                FEATURE_STATE_CLOSED: 2,
              },
            },
          },
        },
        CommonStateSignalLiveState: {
          fields: {
            a: {
              type: "int32",
              id: 1,
            },
            b: {
              type: "int32",
              id: 2,
            },
            c: {
              type: "string",
              id: 3,
            },
          },
        },
        CommonStateSignalNewApplyUser: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
          },
        },
        CommonStateSignalPKAccept: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
          },
        },
        CommonStateSignalPkEnd: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "unknown",
              id: 2,
            },
            c: {
              type: "string",
              id: 3,
            },
          },
          nested: {
            unknown: {
              values: {
                d: 0,
                e: 1,
                f: 2,
                g: 3,
                h: 4,
                i: 5,
                j: 6,
                k: 7,
                l: 8,
                m: 9,
                n: 10,
                o: 11,
              },
            },
          },
        },
        CommonStateSignalPKInvitation: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "PkPlayerInfo",
              id: 2,
            },
            c: {
              type: "int64",
              id: 3,
            },
          },
        },
        PkPlayerInfo: {
          fields: {
            a: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "bool",
              id: 3,
            },
          },
        },
        CommonStateSignalPKReady: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              rule: "repeated",
              type: "PkPlayerInfo",
              id: 2,
            },
          },
        },
        CommonStateSignalPKSoundConfigChanged: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "unknown",
              id: 2,
            },
          },
          nested: {
            unknown: {
              values: {
                c: 0,
                d: 1,
                e: 2,
              },
            },
          },
        },
        CommonStateSignalPkStatistic: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "int64",
              id: 2,
            },
            c: {
              type: "int64",
              id: 3,
            },
            d: {
              type: "int64",
              id: 4,
            },
            e: {
              type: "bool",
              id: 5,
            },
            f: {
              type: "int64",
              id: 6,
            },
            g: {
              type: "int64",
              id: 7,
            },
            h: {
              type: "int64",
              id: 8,
            },
            i: {
              rule: "repeated",
              type: "PkAudienceContributionInfo",
              id: 9,
            },
            j: {
              rule: "repeated",
              type: "PkPlayerStatistic",
              id: 10,
            },
            k: {
              type: "PkRoundInfo",
              id: 11,
            },
            l: {
              type: "int64",
              id: 12,
            },
          },
        },
        PkAudienceContributionInfo: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
            b: {
              rule: "repeated",
              type: "PkAudienceContributionDetail",
              id: 2,
            },
          },
        },
        PkAudienceContributionDetail: {
          fields: {
            a: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            b: {
              type: "int64",
              id: 2,
            },
          },
        },
        PkPlayerStatistic: {
          fields: {
            a: {
              type: "ZtLiveUserInfo",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "int64",
              id: 3,
            },
            d: {
              rule: "repeated",
              type: "PkPlayerRoundStatistic",
              id: 4,
            },
            e: {
              type: "int32",
              id: 5,
            },
          },
        },
        PkPlayerRoundStatistic: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
            b: {
              type: "int32",
              id: 2,
            },
          },
        },
        PkRoundInfo: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
            b: {
              type: "int32",
              id: 2,
            },
            c: {
              type: "int32",
              id: 3,
            },
            d: {
              type: "int64",
              id: 4,
            },
            e: {
              type: "ZtLivePkProto",
              id: 5,
            },
          },
        },
        ZtLivePkProto: {
          values: {
            ZtLivePkProtoA: 0,
            ZtLivePkProtoB: 1,
            ZtLivePkProtoC: 2,
            ZtLivePkProtoD: 3,
          },
        },
        CommonStateSignalRecentComment: {
          fields: {
            comment: {
              rule: "repeated",
              type: "CommonActionSignalComment",
              id: 1,
            },
          },
        },
        CommonStateSignalShoppingCart: {
          fields: {
            a: {
              type: "unknown",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
          },
          nested: {
            unknown: {
              values: {
                c: 0,
                d: 1,
                e: 2,
              },
            },
          },
        },
        CommonStateSignalTopUsers: {
          fields: {
            user: {
              rule: "repeated",
              type: "TopUser",
              id: 1,
            },
          },
          nested: {
            TopUser: {
              fields: {
                userInfo: {
                  type: "ZtLiveUserInfo",
                  id: 1,
                },
                customWatchingListData: {
                  type: "string",
                  id: 3,
                },
                displaySendAmount: {
                  type: "string",
                  id: 4,
                },
                anonymousUser: {
                  type: "bool",
                  id: 5,
                },
              },
            },
          },
        },
        CommonStateSignalWidget: {
          fields: {
            a: {
              rule: "repeated",
              type: "WidgetItem",
              id: 1,
            },
          },
        },
        WidgetItem: {
          fields: {
            a: {
              type: "int64",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "int32",
              id: 3,
            },
            d: {
              type: "int64",
              id: 4,
            },
            e: {
              type: "int64",
              id: 5,
            },
            f: {
              type: "WidgetPictureInfo",
              id: 6,
            },
            g: {
              type: "string",
              id: 7,
            },
            h: {
              type: "ZtLiveWidgetProtoA",
              id: 8,
            },
            i: {
              type: "ZtLiveWidgetProtoB",
              id: 9,
            },
            j: {
              type: "WidgetDisplayStyle",
              id: 10,
            },
            k: {
              type: "ZtLiveWidgetProtoC",
              id: 11,
            },
            l: {
              rule: "repeated",
              type: "string",
              id: 12,
            },
            m: {
              rule: "repeated",
              type: "string",
              id: 13,
            },
            n: {
              type: "int64",
              id: 14,
            },
          },
        },
        WidgetDisplayStyle: {
          fields: {
            a: {
              type: "bool",
              id: 1,
            },
            b: {
              type: "bool",
              id: 2,
            },
          },
        },
        WidgetPictureInfo: {
          fields: {
            a: {
              type: "ImageCdnNode",
              id: 1,
            },
            b: {
              type: "int32",
              id: 2,
            },
            c: {
              type: "int32",
              id: 3,
            },
          },
        },
        ZtLiveWidgetProtoA: {
          values: {
            ZtLiveWidgetProtoAa: 0,
            ZtLiveWidgetProtoAb: 1,
            ZtLiveWidgetProtoAc: 2,
            ZtLiveWidgetProtoAd: 3,
            ZtLiveWidgetProtoAe: 4,
          },
        },
        ZtLiveWidgetProtoB: {
          values: {
            ZtLiveWidgetProtoBa: 0,
            ZtLiveWidgetProtoBb: 1,
            ZtLiveWidgetProtoBc: 2,
            ZtLiveWidgetProtoBd: 3,
            ZtLiveWidgetProtoBe: 4,
            ZtLiveWidgetProtoBf: 5,
          },
        },
        ZtLiveWidgetProtoC: {
          values: {
            ZtLiveWidgetProtoCa: 0,
            ZtLiveWidgetProtoCb: 1,
            ZtLiveWidgetProtoCc: 2,
            ZtLiveWidgetProtoCd: 3,
          },
        },
        CommonStateSignalWishSheetCurrentState: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              rule: "repeated",
              type: "WishCurrentState",
              id: 2,
            },
          },
          nested: {
            WishCurrentState: {
              fields: {
                a: {
                  type: "string",
                  id: 1,
                },
                b: {
                  type: "int64",
                  id: 2,
                },
                c: {
                  type: "int64",
                  id: 3,
                },
                d: {
                  type: "int64",
                  id: 4,
                },
                e: {
                  type: "string",
                  id: 5,
                },
                f: {
                  type: "string",
                  id: 6,
                },
              },
            },
          },
        },
        CsAckErrorCode: {
          values: {
            SUCCESS_CS_ACK: 0,
            LIVE_CLOSED: 1,
            TICKET_ILLEGAL: 2,
            ATTACH_ILLEGAL: 3,
            USER_NOT_IN_ROOM: 4,
            SERVER_ERROR: 5,
            REQUEST_PARAM_INVALID: 6,
            ROOM_NOT_EXIST_IN_STATE_MANAGER: 7,
            NEW_LIVE_OPENED: 8,
          },
        },
        KwaiStateSignalEcommerceCart: {
          fields: {
            a: {
              type: "unknown",
              id: 1,
            },
          },
          nested: {
            unknown: {
              values: {
                b: 0,
                c: 1,
              },
            },
          },
        },
        KwaiStateSignalEcommerceCartItemPopup: {
          fields: {
            a: {
              type: "unknown",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "string",
              id: 3,
            },
            d: {
              type: "string",
              id: 4,
            },
            e: {
              type: "string",
              id: 5,
            },
          },
          nested: {
            unknown: {
              values: {
                f: 0,
                g: 1,
              },
            },
          },
        },
        TopBannerNotice: {
          fields: {
            a: {
              type: "string",
              id: 1,
            },
            b: {
              type: "string",
              id: 2,
            },
            c: {
              type: "string",
              id: 3,
            },
            d: {
              type: "BackgroundStyle",
              id: 4,
            },
            e: {
              type: "int32",
              id: 5,
            },
            f: {
              type: "Button",
              id: 6,
            },
            g: {
              rule: "repeated",
              type: "ImageCdnNode",
              id: 7,
            },
            h: {
              type: "int64",
              id: 8,
            },
          },
        },
        ZtLiveActionSignalItem: {
          fields: {
            signalType: {
              type: "string",
              id: 1,
            },
            payload: {
              rule: "repeated",
              type: "bytes",
              id: 2,
            },
          },
        },
        ZtLiveChatProto: {
          values: {
            a: 0,
            b: 1,
            c: 2,
          },
        },
        ZtLiveCsCmd: {
          fields: {
            cmdType: {
              type: "string",
              id: 1,
            },
            payload: {
              type: "bytes",
              id: 2,
            },
            ticket: {
              type: "string",
              id: 3,
            },
            liveId: {
              type: "string",
              id: 4,
            },
          },
        },
        ZtLiveCsCmdAck: {
          fields: {
            cmdAckType: {
              type: "string",
              id: 1,
            },
            errorCode: {
              type: "int64",
              id: 2,
            },
            errorMsg: {
              type: "string",
              id: 3,
            },
            payload: {
              type: "bytes",
              id: 4,
            },
          },
        },
        ZtLiveCsEnterRoom: {
          fields: {
            isAuthor: {
              type: "bool",
              id: 1,
            },
            reconnectCount: {
              type: "int32",
              id: 2,
            },
            lastErrorCode: {
              type: "int32",
              id: 3,
            },
            enterRoomAttach: {
              type: "string",
              id: 4,
            },
            clientLiveSdkVersion: {
              type: "string",
              id: 5,
            },
          },
        },
        ZtLiveCsEnterRoomAck: {
          fields: {
            heartbeatIntervalMs: {
              type: "int64",
              id: 1,
            },
          },
        },
        ZtLiveCsHeartbeat: {
          fields: {
            clientTimestampMs: {
              type: "int64",
              id: 1,
            },
            sequence: {
              type: "int64",
              id: 2,
            },
          },
        },
        ZtLiveCsHeartbeatAck: {
          fields: {
            serverTimestampMs: {
              type: "int64",
              id: 1,
            },
            clientTimestampMs: {
              type: "int64",
              id: 2,
            },
            clientSequence: {
              type: "int64",
              id: 3,
            },
          },
        },
        ZtLiveCsUserExit: {
          fields: {},
        },
        ZtLiveCsUserExitAck: {
          fields: {},
        },
        ZtLiveDownstreamPayloadErrorCode: {
          values: {
            SUCCESS_DOWNSTREAM_PAYLOAD: 0,
            CS_CMD_PARSE_ERROR: 100001,
            CS_CMD_CMD_NOT_SUPPORT: 100002,
            CS_CMD_TICKET_ILLEGAL: 100003,
          },
        },
        ZtLiveNotifySignalItem: {
          fields: {
            signalType: {
              type: "string",
              id: 1,
            },
            payload: {
              type: "bytes",
              id: 2,
            },
          },
        },
        ZtLiveScActionSignal: {
          fields: {
            item: {
              rule: "repeated",
              type: "ZtLiveActionSignalItem",
              id: 1,
            },
          },
        },
        ZtLiveScMessage: {
          fields: {
            messageType: {
              type: "string",
              id: 1,
            },
            compressionType: {
              type: "CompressionType",
              id: 2,
            },
            payload: {
              type: "bytes",
              id: 3,
            },
            liveId: {
              type: "string",
              id: 4,
            },
            ticket: {
              type: "string",
              id: 5,
            },
            serverTimestampMs: {
              type: "int64",
              id: 6,
            },
          },
          nested: {
            CompressionType: {
              values: {
                UNKNOWN: 0,
                NONE: 1,
                GZIP: 2,
              },
            },
          },
        },
        ZtLiveScNotifySignal: {
          fields: {
            item: {
              rule: "repeated",
              type: "ZtLiveNotifySignalItem",
              id: 1,
            },
          },
        },
        ZtLiveScStateSignal: {
          fields: {
            item: {
              rule: "repeated",
              type: "ZtLiveStateSignalItem",
              id: 1,
            },
          },
        },
        ZtLiveStateSignalItem: {
          fields: {
            signalType: {
              type: "string",
              id: 1,
            },
            payload: {
              type: "bytes",
              id: 2,
            },
          },
        },
        ZtLiveScStatusChanged: {
          fields: {
            type: {
              type: "Type",
              id: 1,
            },
            maxRandomDelayMs: {
              type: "int64",
              id: 2,
            },
            bannedInfo: {
              type: "BannedInfo",
              id: 3,
            },
          },
          nested: {
            Type: {
              values: {
                UNKNOWN: 0,
                LIVE_CLOSED: 1,
                NEW_LIVE_OPENED: 2,
                LIVE_URL_CHANGED: 3,
                LIVE_BANNED: 4,
              },
            },
            BannedInfo: {
              fields: {
                banReason: {
                  type: "string",
                  id: 1,
                },
                b: {
                  type: "string",
                  id: 2,
                },
              },
            },
          },
        },
        ZtLiveScTicketInvalid: {
          fields: {},
        },
        ZtLiveStartPlaySourceTypeProto: {
          values: {
            ZtLiveStartPlaySourceTypeProtoA: 0,
            ZtLiveStartPlaySourceTypeProtoB: 1,
          },
        },
      },
    },
  },
};
