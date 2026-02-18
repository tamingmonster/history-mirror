import { HistoricalFigure } from '../types';

export const figures: HistoricalFigure[] = [
  // 权力极强型 (Power)
  {
    id: 'qin_shihuang',
    name: '秦始皇',
    dynasty: '秦朝',
    description: '千古一帝，统一度量衡，建立中央集权。你拥有极强的控制欲和宏大的愿景，是天生的统治者。',
    personality: { primary: 'P', secondary: 'S', extreme: 'P' },
    category: 'power',
    quote: '朕为始皇帝。后世以计数，二世三世至于万世，传之无穷。'
  },
  {
    id: 'han_wudi',
    name: '汉武帝',
    dynasty: '汉朝',
    description: '罢黜百家，独尊儒术，开疆拓土。你雄才大略，但也刚愎自用，为了目标不惜一切代价。',
    personality: { primary: 'P', secondary: 'I' },
    category: 'power',
    quote: '寇可往，我亦可往！'
  },
  {
    id: 'zhu_yuanzhang',
    name: '朱元璋',
    dynasty: '明朝',
    description: '开局一个碗，结局一个国。你出身草莽却心思缜密，对权力有着绝对的掌控，绝不容许背叛。',
    personality: { primary: 'P', secondary: 'R' },
    category: 'power',
    quote: '驱逐胡虏，恢复中华。'
  },
  {
    id: 'cao_cao',
    name: '曹操',
    dynasty: '东汉末年',
    description: '治世之能臣，乱世之奸雄。你兼具政治野心与诗人情怀，实用主义是你的人生哲学。',
    personality: { primary: 'P', secondary: 'R', extreme: 'R' },
    category: 'power',
    quote: '宁我负人，毋人负我。'
  },
  {
    id: 'wu_zetian',
    name: '武则天',
    dynasty: '唐朝/武周',
    description: '中国历史上唯一的女皇帝。你在男权社会中杀出一条血路，证明了能力不分性别。',
    personality: { primary: 'P', secondary: 'S', extreme: 'P' },
    category: 'power',
    quote: '日月当空，曌临天下。'
  },
  {
    id: 'cixi',
    name: '慈禧太后',
    dynasty: '清朝',
    description: '垂帘听政半个世纪。你精通权术，擅长平衡各方势力，是晚清实际的掌舵人。',
    personality: { primary: 'P', secondary: 'E', extreme: 'R' },
    category: 'power',
    quote: '量中华之物力，结与国之欢心。'
  },

  // 谋略操盘型 (Strategy)
  {
    id: 'zhuge_liang',
    name: '诸葛亮',
    dynasty: '三国',
    description: '鞠躬尽瘁，死而后已。你智慧超群，擅长长远规划，是忠诚与智慧的化身。',
    personality: { primary: 'S', secondary: 'I' },
    category: 'strategy',
    quote: '非淡泊无以明志，非宁静无以致远。'
  },
  {
    id: 'sima_yi',
    name: '司马懿',
    dynasty: '三国',
    description: '鹰视狼顾，隐忍待发。你极其擅长等待时机，最后的赢家往往是最能忍耐的人。',
    personality: { primary: 'S', secondary: 'R' },
    category: 'strategy',
    quote: '为人者，有大度成大器矣。'
  },
  {
    id: 'zhang_liang',
    name: '张良',
    dynasty: '汉朝',
    description: '运筹帷幄之中，决胜千里之外。你功成身退，深谙明哲保身之道，是智慧的极致。',
    personality: { primary: 'S', secondary: 'T' },
    category: 'strategy',
    quote: '运筹帷幄之中，决胜千里之外。'
  },
  {
    id: 'li_si',
    name: '李斯',
    dynasty: '秦朝',
    description: '谏逐客书，助秦统一。你才华横溢但也贪恋权位，最终因选择错误而身败名裂。',
    personality: { primary: 'S', secondary: 'P' },
    category: 'strategy',
    quote: '泰山不让土壤，故能成其大。'
  },
  {
    id: 'shangguan_waner',
    name: '上官婉儿',
    dynasty: '唐朝',
    description: '巾帼宰相，八面玲珑。你在复杂的宫廷斗争中游刃有余，兼具才情与政治手腕。',
    personality: { primary: 'S', secondary: 'E' },
    category: 'strategy',
    quote: '势如连璧，言若吐兰。'
  },
  {
    id: 'xiao_he',
    name: '萧何',
    dynasty: '汉朝',
    description: '镇国家，抚百姓，给馈饷。你是完美的后勤总管，默默付出，成就了大汉基业。',
    personality: { primary: 'S', secondary: 'R' },
    category: 'strategy',
    quote: '成也萧何，败也萧何。'
  },

  // 铁血理想型 (Idealism)
  {
    id: 'yue_fei',
    name: '岳飞',
    dynasty: '南宋',
    description: '精忠报国。你有着极高的道德标准和爱国情怀，宁折不弯，是民族精神的脊梁。',
    personality: { primary: 'I', secondary: 'E', extreme: 'E' },
    category: 'ideal',
    quote: '莫等闲，白了少年头，空悲切。'
  },
  {
    id: 'huo_qubing',
    name: '霍去病',
    dynasty: '汉朝',
    description: '封狼居胥。你是天才少年将军，为了国家荣誉一往无前，生命虽短却如流星般耀眼。',
    personality: { primary: 'I', secondary: 'P' },
    category: 'ideal',
    quote: '匈奴未灭，何以家为？'
  },
  {
    id: 'xiang_yu',
    name: '项羽',
    dynasty: '秦末',
    description: '西楚霸王。你力拔山兮气盖世，重情重义，却因妇人之仁错失天下。',
    personality: { primary: 'I', secondary: 'E' },
    category: 'ideal',
    quote: '力拔山兮气盖世。'
  },
  {
    id: 'wen_tianxiang',
    name: '文天祥',
    dynasty: '南宋',
    description: '人生自古谁无死，留取丹心照汗青。你在绝境中坚守气节，展现了儒家士大夫的最高风骨。',
    personality: { primary: 'I', secondary: 'T', extreme: 'E' },
    category: 'ideal',
    quote: '人生自古谁无死，留取丹心照汗青。'
  },
  {
    id: 'hua_mulan',
    name: '花木兰',
    dynasty: '北魏',
    description: '替父从军。你打破了性别的枷锁，为了家庭和责任勇敢站出来，是女性力量的象征。',
    personality: { primary: 'I', secondary: 'E' },
    category: 'ideal',
    quote: '谁说女子不如男？'
  },
  {
    id: 'liang_hongyu',
    name: '梁红玉',
    dynasty: '南宋',
    description: '击鼓退金兵。你出身风尘却有大将之风，与丈夫并肩作战，保家卫国。',
    personality: { primary: 'I', secondary: 'S' },
    category: 'ideal',
    quote: '击鼓退金兵，巾帼不让须眉。'
  },

  // 情义统合型 (Emotion)
  {
    id: 'liu_bei',
    name: '刘备',
    dynasty: '三国',
    description: '弘毅宽厚，知人待士。你以仁德服人，虽无曹操之才，却能聚拢天下英雄。',
    personality: { primary: 'E', secondary: 'I' },
    category: 'emotion',
    quote: '勿以恶小而为之，勿以善小而不为。'
  },
  {
    id: 'guan_yu',
    name: '关羽',
    dynasty: '三国',
    description: '义薄云天。你是忠义的化身，傲气冲天但也重情重义，被后世尊为武圣。',
    personality: { primary: 'E', secondary: 'I' },
    category: 'emotion',
    quote: '玉可碎而不可改其白，竹可焚而不可毁其节。'
  },
  {
    id: 'song_jiang',
    name: '宋江',
    dynasty: '北宋',
    description: '及时雨。你仗义疏财，急人之难，是江湖好汉们的精神领袖。',
    personality: { primary: 'E', secondary: 'S' },
    category: 'emotion',
    quote: '替天行道。'
  },
  {
    id: 'ban_zhao',
    name: '班昭',
    dynasty: '汉朝',
    description: '续写汉书。你是中国第一位女历史学家，才学渊博，同时也注重礼教与家庭。',
    personality: { primary: 'E', secondary: 'S' },
    category: 'emotion',
    quote: '敏而好学，不耻下问。'
  },
  {
    id: 'xiaozhuang',
    name: '孝庄太后',
    dynasty: '清朝',
    description: '辅佐三代帝王。你隐忍包容，为了大清江山牺牲个人情感，是伟大的政治家。',
    personality: { primary: 'E', secondary: 'S' },
    category: 'emotion',
    quote: '从大局出发，忍辱负重。'
  },
  {
    id: 'zhangsun',
    name: '长孙皇后',
    dynasty: '唐朝',
    description: '千古贤后。你温婉贤淑，善于规劝皇帝，是李世民背后的重要支柱。',
    personality: { primary: 'E', secondary: 'R' },
    category: 'emotion',
    quote: '以铜为镜，可以正衣冠；以人为镜，可以明得失。'
  },

  // 超然觉醒型 (Transcendence)
  {
    id: 'zhuang_zi',
    name: '庄子',
    dynasty: '战国',
    description: '逍遥游。你追求绝对的精神自由，视权势如腐鼠，看透了世俗的虚无。',
    personality: { primary: 'T', secondary: 'I', extreme: 'T' },
    category: 'transcend',
    quote: '天地与我并生，而万物与我为一。'
  },
  {
    id: 'wang_yangming',
    name: '王阳明',
    dynasty: '明朝',
    description: '知行合一。你在困境中悟道，不仅是哲学家，也是杰出的军事家，内心极其强大。',
    personality: { primary: 'T', secondary: 'S', extreme: 'I' },
    category: 'transcend',
    quote: '此心光明，亦复何言。'
  },
  {
    id: 'tao_yuanming',
    name: '陶渊明',
    dynasty: '东晋',
    description: '采菊东篱下。你不为五斗米折腰，向往田园生活，是隐士文化的代表。',
    personality: { primary: 'T', secondary: 'E', extreme: 'T' },
    category: 'transcend',
    quote: '采菊东篱下，悠然见南山。'
  },
  {
    id: 'guiguzi',
    name: '鬼谷子',
    dynasty: '战国',
    description: '谋圣。你隐居深山，却能左右天下局势，弟子遍布各国，是神秘的智慧源头。',
    personality: { primary: 'T', secondary: 'S', extreme: 'S' },
    category: 'transcend',
    quote: '捭阖者，道之大化，说之变也。'
  },
  {
    id: 'li_qingzhao',
    name: '李清照',
    dynasty: '宋朝',
    description: '千古第一才女。你的词清丽婉约，晚年虽流离失所，却依然保持着高洁的灵魂。',
    personality: { primary: 'T', secondary: 'E' },
    category: 'transcend',
    quote: '生当作人杰，死亦为鬼雄。'
  },
  {
    id: 'zhuo_wenjun',
    name: '卓文君',
    dynasty: '汉朝',
    description: '凤求凰。你敢爱敢恨，为了爱情不惜私奔，当爱情变质时也能决绝放手。',
    personality: { primary: 'T', secondary: 'E' },
    category: 'transcend',
    quote: '愿得一心人，白头不相离。'
  }
];
