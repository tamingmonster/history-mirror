import { Question } from '../types';

export const questions: Question[] = [
  // 第一部分：权力与控制（1-8题）
  {
    id: 1,
    text: "在群体中你更自然成为：",
    options: { A: "领导", B: "参谋", C: "调停者", D: "旁观者" }
  },
  {
    id: 2,
    text: "你最无法忍受：",
    options: { A: "被架空", B: "被误判", C: "被辜负", D: "被束缚" }
  },
  {
    id: 3,
    text: "面对挑战你：",
    options: { A: "直接压制", B: "制定计划", C: "争取支持", D: "退一步看" }
  },
  {
    id: 4,
    text: "你认为权力：",
    options: { A: "必须掌握", B: "可借势而用", C: "会腐蚀人", D: "无常" },
    isWeighted: true
  },
  {
    id: 5,
    text: "如果你是皇帝：",
    options: { A: "集权", B: "用人制衡", C: "重情治国", D: "顺势而治" }
  },
  {
    id: 6,
    text: "你更像：",
    options: { A: "狮子", B: "狐狸", C: "大象", D: "鹤" }
  },
  {
    id: 7,
    text: "被挑衅时：",
    options: { A: "反击", B: "记账", C: "忍耐", D: "不理" }
  },
  {
    id: 8,
    text: "你喜欢掌控：",
    options: { A: "人", B: "局", C: "情绪", D: "自己" }
  },
  // 第二部分：战略与思维（9-16题）
  {
    id: 9,
    text: "做决定时：",
    options: { A: "快", B: "深", C: "参考他人", D: "随缘" }
  },
  {
    id: 10,
    text: "你擅长：",
    options: { A: "定方向", B: "下棋", C: "建关系", D: "看趋势" }
  },
  {
    id: 11,
    text: "你更信：",
    options: { A: "实力", B: "策略", C: "人心", D: "天道" },
    isRealismCheck: true
  },
  {
    id: 12,
    text: "你的人生像：",
    options: { A: "征战", B: "布局", C: "守护", D: "修行" },
    isWeighted: true
  },
  {
    id: 13,
    text: "你更偏好：",
    options: { A: "掌权", B: "操盘", C: "维系", D: "独立" }
  },
  {
    id: 14,
    text: "面对复杂局势：",
    options: { A: "简化处理", B: "推演全局", C: "找人合作", D: "等待变化" }
  },
  {
    id: 15,
    text: "你对风险：",
    options: { A: "主动承担", B: "计算后承担", C: "尽量避免", D: "随遇而安" },
    isRealismCheck: true
  },
  {
    id: 16,
    text: "你更接近：",
    options: { A: "强人政治", B: "平衡术", C: "人情社会", D: "道家思维" }
  },
  // 第三部分：情感与价值（17-24题）
  {
    id: 17,
    text: "忠诚对你：",
    options: { A: "可交易", B: "可利用", C: "必须守", D: "可放下" }
  },
  {
    id: 18,
    text: "你最珍视：",
    options: { A: "成就", B: "智慧", C: "情义", D: "自由" }
  },
  {
    id: 19,
    text: "若被背叛：",
    options: { A: "反制", B: "等时机", C: "原谅一次", D: "远离" }
  },
  {
    id: 20,
    text: "你更痛苦于：",
    options: { A: "失败", B: "被低估", C: "失去重要的人", D: "被理解却无力改变" }
  },
  {
    id: 21,
    text: "你更像：",
    options: { A: "枭雄", B: "谋士", C: "侠客", D: "隐士" }
  },
  {
    id: 22,
    text: "你会为理想：",
    options: { A: "改写规则", B: "利用规则", C: "坚守规则", D: "超越规则" },
    isWeighted: true
  },
  {
    id: 23,
    text: "面对不公：",
    options: { A: "推翻", B: "改造", C: "忍耐", D: "看透" }
  },
  {
    id: 24,
    text: "你的人生主题：",
    options: { A: "扩张", B: "控局", C: "守护", D: "觉醒" }
  },
  // 第四部分：内心与压力（25-32题）
  {
    id: 25,
    text: "压力下你：",
    options: { A: "更强势", B: "更冷静", C: "更敏感", D: "更抽离" }
  },
  {
    id: 26,
    text: "你害怕：",
    options: { A: "失控", B: "失败布局", C: "情感破裂", D: "被束缚" }
  },
  {
    id: 27,
    text: "你对孤独：",
    options: { A: "不在乎", B: "习惯", C: "害怕", D: "享受" }
  },
  {
    id: 28,
    text: "若一切归零：",
    options: { A: "再打天下", B: "重新布局", C: "找人同行", D: "远走他乡" }
  },
  {
    id: 29,
    text: "你更认同：",
    options: { A: "成王败寇", B: "智胜于力", C: "情比金坚", D: "万物皆空" },
    isWeighted: true,
    isRealismCheck: true
  },
  {
    id: 30,
    text: "你更像哪种武器：",
    options: { A: "刀", B: "棋", C: "盾", D: "风" }
  },
  {
    id: 31,
    text: "你面对权威：",
    options: { A: "挑战", B: "研究", C: "依附", D: "无视" }
  },
  {
    id: 32,
    text: "你终极追求：",
    options: { A: "留名", B: "掌局", C: "被爱", D: "自由" }
  },
  // 第五部分：女性权力与柔性领导（33-40题）
  {
    id: 33,
    text: "你更欣赏女性力量：",
    options: { A: "强势统治", B: "智谋操盘", C: "温柔坚韧", D: "超脱自持" }
  },
  {
    id: 34,
    text: "若生于乱世为女性：",
    options: { A: "自立为王", B: "幕后执政", C: "守护家国", D: "隐而不争" }
  },
  {
    id: 35,
    text: "你对规则：",
    options: { A: "制定", B: "利用", C: "维护", D: "超越" }
  },
  {
    id: 36,
    text: "你处理关系：",
    options: { A: "主导", B: "平衡", C: "付出", D: "疏离" }
  },
  {
    id: 37,
    text: "你更怕：",
    options: { A: "被取代", B: "被算计", C: "被辜负", D: "被困住" }
  },
  {
    id: 38,
    text: "你相信：",
    options: { A: "力量改变命运", B: "智慧改变格局", C: "爱改变人生", D: "心改变世界" }
  },
  {
    id: 39,
    text: "你更像哪位原型女性：",
    options: { A: "女帝", B: "女军师", C: "忠烈之女", D: "隐逸之女" }
  },
  {
    id: 40,
    text: "如果历史记住你：",
    options: { A: "为权", B: "为智", C: "为义", D: "为道" },
    isWeighted: true
  }
];
