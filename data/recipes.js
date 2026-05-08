const recipes = [
  {
    id: 'rc001',
    name: '枸杞菊花茶',
    ingredients: [
      { name: '枸杞', amount: '5-8粒' },
      { name: '菊花', amount: '3-5朵' }
    ],
    effect: '养肝明目，清肝泻火',
    suitableConstitutions: ['阴虚质', '气郁质', '湿热质'],
    unsuitableConstitutions: ['阳虚质', '脾胃虚寒者'],
    source: '《本草纲目》',
    method: '将枸杞和菊花放入杯中，用沸水冲泡5分钟即可饮用',
    tips: '可反复冲泡2-3次，枸杞最后可食用'
  },
  {
    id: 'rc002',
    name: '红枣桂圆茶',
    ingredients: [
      { name: '红枣', amount: '3-5颗' },
      { name: '桂圆', amount: '5-8粒' }
    ],
    effect: '补气养血，安神助眠',
    suitableConstitutions: ['气虚质', '血虚质', '阳虚质'],
    unsuitableConstitutions: ['湿热质', '阴虚质', '痰湿质'],
    source: '《本草纲目》',
    method: '红枣去核，与桂圆一同放入杯中，沸水冲泡10分钟',
    tips: '晚上饮用安神效果更佳，糖尿病患者不宜'
  },
  {
    id: 'rc003',
    name: '陈皮玫瑰饮',
    ingredients: [
      { name: '陈皮', amount: '3克' },
      { name: '玫瑰花', amount: '5朵' }
    ],
    effect: '理气解郁，健脾化痰',
    suitableConstitutions: ['气郁质', '痰湿质'],
    unsuitableConstitutions: ['阴虚质', '实热质'],
    source: '《本草正义》',
    method: '陈皮切丝，与玫瑰花一同用沸水冲泡5分钟',
    tips: '经前饮用可缓解乳房胀痛，经期血量多者暂停'
  },
  {
    id: 'rc004',
    name: '四神汤',
    ingredients: [
      { name: '山药', amount: '15克' },
      { name: '茯苓', amount: '15克' },
      { name: '莲子', amount: '15克' },
      { name: '薏米', amount: '15克' }
    ],
    effect: '健脾祛湿，养心安神',
    suitableConstitutions: ['痰湿质', '气虚质', '湿热质'],
    unsuitableConstitutions: ['阴虚质', '便秘者'],
    source: '《本草纲目》民间验方',
    method: '所有材料洗净，加水1000ml，大火煮开后小火炖煮40分钟',
    tips: '可加猪骨同炖增加鲜味，孕妇去薏米'
  },
  {
    id: 'rc005',
    name: '五红汤',
    ingredients: [
      { name: '红豆', amount: '30克' },
      { name: '红枣', amount: '5颗' },
      { name: '花生', amount: '20克' }
    ],
    effect: '补血养心，利水消肿',
    suitableConstitutions: ['血虚质', '气虚质'],
    unsuitableConstitutions: ['湿热质', '糖尿病患者'],
    source: '民间验方',
    method: '红豆提前浸泡2小时，所有材料加水煮1小时至红豆软烂',
    tips: '可加红糖调味，经期饮用暖宫效果更佳'
  },
  {
    id: 'rc006',
    name: '黄芪党参茶',
    ingredients: [
      { name: '黄芪', amount: '10克' },
      { name: '党参', amount: '10克' },
      { name: '红枣', amount: '3颗' }
    ],
    effect: '补气健脾，升阳举陷',
    suitableConstitutions: ['气虚质', '阳虚质'],
    unsuitableConstitutions: ['实热质', '阴虚质', '湿热质'],
    source: '《脾胃论》',
    method: '黄芪、党参洗净，红枣去核，加水500ml煮20分钟',
    tips: '感冒发热时暂停饮用'
  },
  {
    id: 'rc007',
    name: '银耳百合羹',
    ingredients: [
      { name: '银耳', amount: '半朵' },
      { name: '百合', amount: '10克' },
      { name: '枸杞', amount: '5粒' },
      { name: '冰糖', amount: '适量' }
    ],
    effect: '滋阴润肺，养颜润肤',
    suitableConstitutions: ['阴虚质', '气虚质'],
    unsuitableConstitutions: ['痰湿质', '湿热质', '糖尿病患者'],
    source: '《饮片新参》',
    method: '银耳泡发撕小朵，与百合同煮1小时至粘稠，加枸杞和冰糖',
    tips: '秋季饮用最佳，可加雪梨增强润肺效果'
  },
  {
    id: 'rc008',
    name: '决明子菊花茶',
    ingredients: [
      { name: '决明子', amount: '10克' },
      { name: '菊花', amount: '5朵' }
    ],
    effect: '清肝明目，润肠通便',
    suitableConstitutions: ['湿热质', '阴虚质', '实热质'],
    unsuitableConstitutions: ['阳虚质', '气虚质', '脾胃虚寒者'],
    source: '《药性论》',
    method: '决明子微炒，与菊花一同用沸水冲泡10分钟',
    tips: '决明子需炒过后再用，生用泻下力强'
  },
  {
    id: 'rc009',
    name: '酸枣仁桂圆茶',
    ingredients: [
      { name: '酸枣仁', amount: '10克' },
      { name: '桂圆', amount: '5粒' },
      { name: '红枣', amount: '3颗' }
    ],
    effect: '养心安神，补血助眠',
    suitableConstitutions: ['阴虚质', '气虚质', '气郁质'],
    unsuitableConstitutions: ['实热质', '湿热质'],
    source: '《金匮要略》',
    method: '酸枣仁捣碎，与桂圆、红枣一同加水煮15分钟',
    tips: '睡前1小时饮用效果最佳'
  },
  {
    id: 'rc010',
    name: '山楂陈皮茶',
    ingredients: [
      { name: '山楂', amount: '10克' },
      { name: '陈皮', amount: '3克' }
    ],
    effect: '消食化积，理气健脾',
    suitableConstitutions: ['痰湿质', '气郁质', '血瘀质'],
    unsuitableConstitutions: ['孕妇', '胃溃疡者', '气虚质'],
    source: '《本草纲目》',
    method: '山楂、陈皮洗净，用沸水冲泡10分钟',
    tips: '饭后饮用助消化，空腹不宜'
  },
  {
    id: 'rc011',
    name: '金银花菊花茶',
    ingredients: [
      { name: '金银花', amount: '5克' },
      { name: '菊花', amount: '5朵' },
      { name: '甘草', amount: '3克' }
    ],
    effect: '疏风清热，解毒利咽',
    suitableConstitutions: ['湿热质', '实热质'],
    unsuitableConstitutions: ['阳虚质', '气虚质', '脾胃虚寒者'],
    source: '《温病条辨》',
    method: '所有材料用沸水冲泡5分钟即可',
    tips: '风热感冒初期饮用效果最佳，不宜长期饮用'
  },
  {
    id: 'rc012',
    name: '麦冬百合茶',
    ingredients: [
      { name: '麦冬', amount: '5克' },
      { name: '百合', amount: '10克' },
      { name: '枸杞', amount: '5粒' }
    ],
    effect: '养阴润肺，生津止渴',
    suitableConstitutions: ['阴虚质', '气郁质'],
    unsuitableConstitutions: ['阳虚质', '痰湿质'],
    source: '《本草纲目》',
    method: '麦冬、百合洗净，加水煮15分钟，最后加枸杞',
    tips: '秋季干燥时饮用最佳，可加蜂蜜调味'
  },
  {
    id: 'rc013',
    name: '当归黄芪茶',
    ingredients: [
      { name: '当归', amount: '5克' },
      { name: '黄芪', amount: '15克' }
    ],
    effect: '气血双补，当归补血汤思路',
    suitableConstitutions: ['血虚质', '气虚质'],
    unsuitableConstitutions: ['湿热质', '实热质', '孕妇'],
    source: '《内外伤辨惑论》',
    method: '当归、黄芪洗净，加水500ml煮20分钟',
    tips: '黄芪用量为当归5倍，此为当归补血汤比例'
  },
  {
    id: 'rc014',
    name: '罗汉果菊花茶',
    ingredients: [
      { name: '罗汉果', amount: '1/4个' },
      { name: '菊花', amount: '5朵' }
    ],
    effect: '清热润肺，利咽开音',
    suitableConstitutions: ['阴虚质', '实热质', '湿热质'],
    unsuitableConstitutions: ['阳虚质', '气虚质'],
    source: '《岭南采药录》',
    method: '罗汉果掰碎，与菊花一同用沸水冲泡10分钟',
    tips: '教师、主播等用嗓多者常备，天然甜味无需加糖'
  },
  {
    id: 'rc015',
    name: '石斛麦冬茶',
    ingredients: [
      { name: '石斛', amount: '5克' },
      { name: '麦冬', amount: '5克' },
      { name: '枸杞', amount: '5粒' }
    ],
    effect: '养阴生津，益胃润肺',
    suitableConstitutions: ['阴虚质', '湿热质'],
    unsuitableConstitutions: ['阳虚质', '痰湿质'],
    source: '《温病条辨》',
    method: '石斛、麦冬洗净，加水煮20分钟，加枸杞焖5分钟',
    tips: '铁皮石斛效果更佳，可反复煎煮'
  },
  {
    id: 'rc016',
    name: '薏米红豆粥',
    ingredients: [
      { name: '薏米', amount: '30克' },
      { name: '红豆', amount: '30克' }
    ],
    effect: '利水渗湿，健脾消肿',
    suitableConstitutions: ['痰湿质', '湿热质', '气虚质'],
    unsuitableConstitutions: ['阳虚质', '孕妇', '阴虚质'],
    source: '《本草纲目》',
    method: '薏米、红豆提前浸泡4小时，加水煮1小时至软烂',
    tips: '祛湿经典搭配，可加少量冰糖调味'
  },
  {
    id: 'rc017',
    name: '桑葚枸杞茶',
    ingredients: [
      { name: '桑葚', amount: '10克' },
      { name: '枸杞', amount: '5克' }
    ],
    effect: '滋阴补血，补肝肾',
    suitableConstitutions: ['阴虚质', '血虚质'],
    unsuitableConstitutions: ['阳虚质', '脾胃虚寒者', '痰湿质'],
    source: '《本草纲目》',
    method: '桑葚、枸杞用温水冲洗后，沸水冲泡10分钟',
    tips: '可加蜂蜜调味，糖尿病患者不宜'
  },
  {
    id: 'rc018',
    name: '黄精枸杞茶',
    ingredients: [
      { name: '黄精', amount: '10克' },
      { name: '枸杞', amount: '5克' }
    ],
    effect: '补气养阴，健脾润肺',
    suitableConstitutions: ['气虚质', '阴虚质'],
    unsuitableConstitutions: ['痰湿质', '湿热质'],
    source: '《本草正》',
    method: '黄精洗净切片，与枸杞加水煮20分钟',
    tips: '制黄精比生黄精滋补效果更好'
  },
  {
    id: 'rc019',
    name: '生姜红枣茶',
    ingredients: [
      { name: '生姜', amount: '3片' },
      { name: '红枣', amount: '5颗' }
    ],
    effect: '温中散寒，补气养血',
    suitableConstitutions: ['阳虚质', '气虚质', '寒湿质'],
    unsuitableConstitutions: ['阴虚质', '实热质', '湿热质'],
    source: '《伤寒论》',
    method: '生姜切片，红枣去核，加水煮10分钟',
    tips: '冬季及经期饮用最佳，上午饮用优于晚上'
  },
  {
    id: 'rc020',
    name: '洛神花山楂茶',
    ingredients: [
      { name: '洛神花', amount: '5克' },
      { name: '山楂', amount: '10克' }
    ],
    effect: '消食化积，清热解暑',
    suitableConstitutions: ['湿热质', '痰湿质', '实热质'],
    unsuitableConstitutions: ['阳虚质', '气虚质', '胃溃疡者'],
    source: '民间验方',
    method: '洛神花、山楂用沸水冲泡10分钟',
    tips: '酸甜可口，可加冰糖调味，冰镇后更佳'
  }
]

module.exports = recipes
