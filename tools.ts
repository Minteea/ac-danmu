import { url, config, USER_AGENT } from "./config";
import { GiftList, LoginInfo, StartPlayInfo } from "./types";

/** 从Headers获取cookie */
export function getSetCookie(headers: Headers) {
  const cookie: Record<string, string> = {};
  headers.forEach((val, key) => {
    if (key == "set-cookie") {
      const coo = val.split(";")[0].split("=");
      const key = coo[0]?.trim();
      const value = coo[1]?.trim();
      cookie[key] = value;
    }
  });
  return cookie;
}

/** 获取字符串 */
export function queryStringify(data: Record<string, any>) {
  const query = [];
  for (const k in data) {
    query.push(`${k}=${data[k]}`);
  }
  return "?" + query.join("&");
}

export async function getDid() {
  const res = await fetch(url.LOGIN);
  const cookie = getSetCookie(res.headers);
  return cookie._did;
}

export async function visitorLogin(did: string): Promise<LoginInfo> {
  const res = await fetch(url.VISITOR_LOGIN, {
    method: "POST",
    body: `sid=${config.acfun_visitor_sid}`,
    headers: {
      Cookie: "_did=" + did,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await res.json();
  if (data.result == 0) {
    return {
      security: data["acSecurity"],
      st: data[config.acfun_visitorSt_name],
      userId: data["userId"],
    };
  } else throw data;
}

export async function userLogin(
  did: string,
  acPasstoken: string,
  authKey: string
): Promise<LoginInfo> {
  const res = await fetch(
    "https://id.app.acfun.cn/rest/web/token/get?sid=acfun.midground.api",
    {
      method: "POST",
      headers: {
        Cookie: `_did=${did};acPasstoken=${acPasstoken};auth_key=${authKey}`,
      },
    }
  );
  const data = await res.json();
  if (data.result == 0) {
    return {
      security: data["ssecurity"],
      st: data["acfun.midground.api_st"],
      userId: data["userId"],
    };
  } else throw data;
}

export async function userSignIn(did: string, user: any) {
  const res = await fetch(url.SIGN_IN + queryStringify(user), {
    headers: {
      Cookie: "_did=" + did,
      credentials: "include",
    },
    // from: user,
    method: "POST",
  });
  const data = await res.json();
  if (data.result != 0) {
    throw new Error(data.result);
  }
  const cookie = getSetCookie(res.headers);
  return {
    acPasstoken: cookie.acPasstoken,
    authKey: cookie.auth_key,
  };
}

/** 获取开播信息 */
export async function getStartPlayInfo({
  did,
  userId,
  st,
  authorId,
}: {
  did: string;
  userId: number;
  st: string;
  authorId: number;
}): Promise<StartPlayInfo> {
  const startPlayUrl =
    url.START_PLAY +
    queryStringify({
      subBiz: config.kuaishou.subBiz,
      kpn: config.kuaishou.kpn,
      userId: userId,
      did: did,
      kpf: config.kuaishou.kpf,
      [userId > 0 && userId < 1000000000000000
        ? config.acfun_userSt_name
        : config.acfun_visitorSt_name]: st,
    });
  const res = await fetch(startPlayUrl, {
    method: "POST",
    headers: {
      Referer: url.LIVE + authorId,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `authorId=${authorId}&pullStreamType=FLV`,
  });
  const data = await res.json();
  if (data.result != 1) {
    throw data;
  }
  return data.data;
}

/** 获取礼物列表 */
export async function getGiftList({
  did,
  userId,
  st,
  authorId,
  liveId,
}: {
  did: string;
  userId: number;
  st: string;
  authorId: number;
  liveId: string;
}): Promise<GiftList> {
  const getGiftInfoListURL =
    url.GIFT_LIST +
    queryStringify({
      subBiz: config.kuaishou.subBiz,
      kpn: config.kuaishou.kpn,
      userId: userId,
      did: did,
      kpf: config.kuaishou.kpf,
      [userId > 0 && userId < 1000000000000000
        ? config.acfun_userSt_name
        : config.acfun_visitorSt_name]: st,
    });
  const res = await fetch(getGiftInfoListURL, {
    method: "POST",
    headers: {
      Referer: url.LIVE + authorId,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `visitorId=${userId}&liveId=${liveId}`,
  });
  const data = await res.json();
  if (data.result != 1) {
    throw data;
  }
  return data.data.giftList;
}
