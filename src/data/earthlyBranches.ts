/**
 * 十二地支信息
 * 其中包含：
 * 1. 阴阳（yinYang）
 * 2. 五行（fiveElements）
 * 3. 六冲（crash）
 *    - 子午相冲
 *    - 丑未相冲
 *    - 寅申相冲
 *    - 卯酉相冲
 *    - 辰戌相冲
 *    - 巳亥相冲
 * 4. 紫微斗数命主（soul）
 *    - 命主以命宫所在宫位地支定之
 * 5. 紫微斗数身主（body）
 *    - 身主以生年年支定之
 * 6. 身体部位【内】（inside）
 * 7. 身体部位【外】（outside）
 * 8. 健康提示（healthTip）
 */
export const earthlyBranches = {
  子: {
    yinYang: '阳',
    fiveElements: '水',
    crash: '午',
    soul: '贪狼',
    body: '火星',
    inside: '胆',
    outside: '下体',
    healthTip: '生殖系统、膀胱、尿道之疾病，听觉障碍',
  },
  丑: {
    yinYang: '阴',
    fiveElements: '土',
    crash: '未',
    soul: '巨门',
    body: '天相',
    inside: '肝',
    outside: '小腿、脚（右）',
    healthTip: '胸部、肋膜炎、胃病、脚部',
  },
  寅: {
    yinYang: '阳',
    fiveElements: '木',
    crash: '申',
    soul: '存禄',
    body: '天梁',
    inside: '肺',
    outside: '大腿（右）',
    healthTip: '胆囊、关节、胫部、神经痛、风湿',
  },
  卯: {
    yinYang: '阴',
    fiveElements: '木',
    crash: '酉',
    soul: '文曲',
    body: '天同',
    inside: '大肠',
    outside: '腰（右）、背',
    healthTip: '肝病、颜面神经、失眠、神经衰弱',
  },
  辰: {
    yinYang: '阳',
    fiveElements: '土',
    crash: '戌',
    soul: '廉贞',
    body: '文昌',
    inside: '胃',
    outside: '胸、胳膊（右）',
    healthTip: '消化系统、脊椎、皮肤疾病',
  },
  巳: {
    yinYang: '阴',
    fiveElements: '火',
    crash: '亥',
    soul: '武曲',
    body: '天机',
    inside: '脾',
    outside: '左肩',
    healthTip: '喉头、牙病、感冒',
  },
  午: {
    yinYang: '阳',
    fiveElements: '火',
    crash: '子',
    soul: '破军',
    body: '火星',
    inside: '心',
    outside: '头',
    healthTip: '心脏、视觉、味觉障碍、火难',
  },
  未: {
    yinYang: '阴',
    fiveElements: '土',
    crash: '丑',
    soul: '武曲',
    body: '天相',
    inside: '小肠',
    outside: '脸',
    healthTip: '消化系统、胰脏、健忘症、疲倦、手腕、嘴唇',
  },
  申: {
    yinYang: '阳',
    fiveElements: '金',
    crash: '寅',
    soul: '廉贞',
    body: '天梁',
    inside: '膀胱',
    outside: '胸、胳膊（左）',
    healthTip: '呼吸系统、肺部、消化系统、大肠',
  },
  酉: {
    yinYang: '阴',
    fiveElements: '金',
    crash: '卯',
    soul: '文曲',
    body: '天同',
    inside: '肾',
    outside: '腰（左）、腹',
    healthTip: '吐血、痢血、小肠之疾、脑出血、头腕部',
  },
  戌: {
    yinYang: '阳',
    fiveElements: '土',
    crash: '辰',
    soul: '存禄',
    body: '文昌',
    inside: '心包',
    outside: '大腿（左）',
    healthTip: '下半身之疾、子宫、痔疮、脚部',
  },
  亥: {
    yinYang: '阴',
    fiveElements: '水',
    crash: '巳',
    soul: '巨门',
    body: '天机',
    inside: '三焦',
    outside: '小腿、脚（左）',
    healthTip: '排泄机能障碍、肾脏、尿道、偏头痛',
  },
} as const;