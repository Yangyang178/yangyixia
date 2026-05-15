var solarTerms = [
  {
    name: '小寒',
    month: 1,
    day: 6,
    description: '一年中最冷的时期',
    advice: '宜温补御寒，多食姜枣桂圆',
    ingredientIds: ['shengjiang', 'hongzao', 'guiyuan']
  },
  {
    name: '大寒',
    month: 1,
    day: 20,
    description: '寒气极盛，春将至',
    advice: '继续温补，适当进补',
    ingredientIds: ['hongzao', 'huangqi', 'dangshen']
  },
  {
    name: '立春',
    month: 2,
    day: 4,
    description: '春季开始，万物复苏',
    advice: '宜疏肝理气，少酸多甘',
    ingredientIds: ['chenpi', 'meiguihua', 'juhua']
  },
  {
    name: '雨水',
    month: 2,
    day: 19,
    description: '降雨开始，雨量渐增',
    advice: '宜养肝脾，防湿气',
    ingredientIds: ['shanyao', 'fuling', 'yimi']
  },
  {
    name: '惊蛰',
    month: 3,
    day: 6,
    description: '春雷始鸣，蛰虫惊醒',
    advice: '宜养肝护阳，清淡饮食',
    ingredientIds: ['juhua', 'gouqi', 'chenpi']
  },
  {
    name: '春分',
    month: 3,
    day: 21,
    description: '昼夜平分，阴阳平衡',
    advice: '宜调和阴阳，均衡饮食',
    ingredientIds: ['gouqi', 'shanyao', 'lianzi']
  },
  {
    name: '清明',
    month: 4,
    day: 5,
    description: '天气清朗，万物明洁',
    advice: '宜养肝祛湿，多户外活动',
    ingredientIds: ['yimi', 'fuling', 'chenpi']
  },
  {
    name: '谷雨',
    month: 4,
    day: 20,
    description: '雨生百谷，春雨绵绵',
    advice: '宜健脾祛湿，防过敏',
    ingredientIds: ['yimi', 'fuling', 'huangqi']
  },
  {
    name: '立夏',
    month: 5,
    day: 6,
    description: '夏季开始，气温升高',
    advice: '宜养心安神，清淡饮食',
    ingredientIds: ['juhua', 'suanzaoren', 'baihe']
  },
  {
    name: '小满',
    month: 5,
    day: 21,
    description: '麦类等夏熟作物籽粒渐满',
    advice: '宜清热利湿，防暑降温',
    ingredientIds: ['yimi', 'jinyinhua', 'luohanguo']
  },
  {
    name: '芒种',
    month: 6,
    day: 6,
    description: '麦类等有芒作物成熟',
    advice: '宜清热解暑，健脾祛湿',
    ingredientIds: ['yimi', 'jinyinhua', 'juhua']
  },
  {
    name: '夏至',
    month: 6,
    day: 21,
    description: '一年中白昼最长',
    advice: '宜清热降火，忌贪凉',
    ingredientIds: ['juhua', 'luohanguo', 'lvcha']
  },
  {
    name: '小暑',
    month: 7,
    day: 7,
    description: '进入伏天，暑气上升',
    advice: '宜清热解暑，多饮水',
    ingredientIds: ['luohanguo', 'jinyinhua', 'juhua']
  },
  {
    name: '大暑',
    month: 7,
    day: 23,
    description: '一年中最热的时期',
    advice: '宜防暑降温，清淡饮食',
    ingredientIds: ['luohanguo', 'jinyinhua', 'yimi']
  },
  {
    name: '立秋',
    month: 8,
    day: 7,
    description: '秋季开始，暑去凉来',
    advice: '宜滋阴润燥，养肺为先',
    ingredientIds: ['yiner', 'baihe', 'gouqi']
  },
  {
    name: '处暑',
    month: 8,
    day: 23,
    description: '暑气渐消，秋意渐浓',
    advice: '宜润肺生津，防秋燥',
    ingredientIds: ['baihe', 'yiner', 'shihu']
  },
  {
    name: '白露',
    month: 9,
    day: 8,
    description: '天气转凉，露水凝白',
    advice: '宜滋阴润肺，防寒保暖',
    ingredientIds: ['baihe', 'gouqi', 'sangshen']
  },
  {
    name: '秋分',
    month: 9,
    day: 23,
    description: '昼夜再次平分',
    advice: '宜调和阴阳，润燥养肺',
    ingredientIds: ['gouqi', 'baihe', 'yiner']
  },
  {
    name: '寒露',
    month: 10,
    day: 8,
    description: '露水更凉，将凝成霜',
    advice: '宜温补润肺，防寒',
    ingredientIds: ['hongzao', 'gouqi', 'chenpi']
  },
  {
    name: '霜降',
    month: 10,
    day: 23,
    description: '天气渐冷，开始降霜',
    advice: '宜温补养胃，防寒保暖',
    ingredientIds: ['shanyao', 'hongzao', 'chenpi']
  },
  {
    name: '立冬',
    month: 11,
    day: 7,
    description: '冬季开始，万物收藏',
    advice: '宜温补收藏，养肾为先',
    ingredientIds: ['shengjiang', 'hongzao', 'huangqi']
  },
  {
    name: '小雪',
    month: 11,
    day: 22,
    description: '开始降雪，雪量不大',
    advice: '宜温补御寒，养肾藏精',
    ingredientIds: ['guiyuan', 'hongzao', 'hetao']
  },
  {
    name: '大雪',
    month: 12,
    day: 7,
    description: '降雪量增大',
    advice: '宜温阳补肾，防寒保暖',
    ingredientIds: ['rougui', 'hongzao', 'hetao']
  },
  {
    name: '冬至',
    month: 12,
    day: 22,
    description: '一年中白昼最短',
    advice: '宜温补阳气，冬至进补',
    ingredientIds: ['shengjiang', 'guiyuan', 'hongzao']
  }
]

module.exports = { solarTerms: solarTerms }
