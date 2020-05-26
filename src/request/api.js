import { get, getParamString, post, postParamString } from './http'
// apis等于根root，以下加wtactivity代表文体协会模块，加topic代表文体协会H5模块
// 9F33FA581E894771AFACB5441522D1CA
// DE3E83EAAEBD40C4B946B37FF546DD4F
// 招聘外网测试接口
export const recruitTest = p => get('apis/api-gateway/zhaopin-content/webAuthCode', p);
// 已加入协会列表
export const joinedActivityList = p => postParamString('apis/wtactivity/cloudMember/findMyCloud/' + p.userId);
// 相册列表
export const getPhotoList = p => getParamString('apis/topic/ghAlbum/findAlbumLimitCount/' + p.count);

