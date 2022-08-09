/**
 * token 
 * 
 * @param {timestamp = now} 从这个时间节点往前获取竖条状态
 * @param {number = 20} 获取多少条数据
 * @param {id = ''} 从这个id往前拉
 * 
 * @return {res: []}
 * res.user 谁发的一个状态。 id: strign, name: string, avatar:string ...
 * res.msg 消息本身.  text: string, pictures: [], time: number,
 * res.commets [] 
 * comment , id: string, user:{}, text, time: number, 
 * 
 * 
 */

