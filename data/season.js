var seasons = [
  {
    month: 1,
    name: '冬季',
    solarTerms: ['小寒', '大寒'],
    description: '寒气最盛，宜温补御寒',
    ingredientIds: ['shengjiang', 'hongzao', 'guiyuan', 'hetao'],
    recipeIds: ['rc002']
  },
  {
    month: 2,
    name: '冬末春初',
    solarTerms: ['立春', '雨水'],
    description: '阳气初生，宜养肝护阳',
    ingredientIds: ['chenpi', 'juhua', 'gouqi', 'hongzao'],
    recipeIds: ['rc003']
  },
  {
    month: 3,
    name: '春季',
    solarTerms: ['惊蛰', '春分'],
    description: '肝气旺盛，宜疏肝理气',
    ingredientIds: ['meiguihua', 'chenpi', 'juhua', 'shanyao'],
    recipeIds: ['rc003']
  },
  {
    month: 4,
    name: '春末',
    solarTerms: ['清明', '谷雨'],
    description: '湿气渐重，宜健脾祛湿',
    ingredientIds: ['yimi', 'fuling', 'chenpi', 'shanyao'],
    recipeIds: ['rc003']
  },
  {
    month: 5,
    name: '初夏',
    solarTerms: ['立夏', '小满'],
    description: '心火渐旺，宜清心降火',
    ingredientIds: ['juhua', 'jinyinhua', 'yimi', 'luohanguo'],
    recipeIds: ['rc001']
  },
  {
    month: 6,
    name: '夏季',
    solarTerms: ['芒种', '夏至'],
    description: '暑湿当令，宜清热祛湿',
    ingredientIds: ['yimi', 'jinyinhua', 'juhua', 'lvcha'],
    recipeIds: ['rc001']
  },
  {
    month: 7,
    name: '盛夏',
    solarTerms: ['小暑', '大暑'],
    description: '酷暑难耐，宜清热解暑',
    ingredientIds: ['juhua', 'jinyinhua', 'yimi', 'luohanguo'],
    recipeIds: ['rc001']
  },
  {
    month: 8,
    name: '夏末秋初',
    solarTerms: ['立秋', '处暑'],
    description: '暑湿未消，宜清热润燥',
    ingredientIds: ['yiner', 'baihe', 'gouqi', 'shihu'],
    recipeIds: []
  },
  {
    month: 9,
    name: '秋季',
    solarTerms: ['白露', '秋分'],
    description: '秋燥伤肺，宜滋阴润燥',
    ingredientIds: ['baihe', 'yiner', 'gouqi', 'sangshen'],
    recipeIds: []
  },
  {
    month: 10,
    name: '深秋',
    solarTerms: ['寒露', '霜降'],
    description: '寒凉渐重，宜温补润肺',
    ingredientIds: ['hongzao', 'gouqi', 'chenpi', 'shanyao'],
    recipeIds: ['rc002']
  },
  {
    month: 11,
    name: '初冬',
    solarTerms: ['立冬', '小雪'],
    description: '冬气初至，宜温补收藏',
    ingredientIds: ['shengjiang', 'hongzao', 'guiyuan', 'huangqi'],
    recipeIds: ['rc002']
  },
  {
    month: 12,
    name: '隆冬',
    solarTerms: ['大雪', '冬至'],
    description: '阴寒极盛，宜温阳补肾',
    ingredientIds: ['rougui', 'dingxiang', 'hongzao', 'hetao'],
    recipeIds: ['rc002']
  }
]

module.exports = { seasons: seasons }
