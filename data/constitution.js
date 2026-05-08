const constitutions = [
  {
    id: 'pinghe',
    name: '平和质',
    description: '阴阳气血调和，体态适中，面色润泽',
    features: ['面色红润有光泽', '精力充沛，睡眠好', '性格开朗，适应力强', '少生病，舌色淡红'],
    suitableIngredients: ['枸杞', '红枣', '山药', '百合', '莲子'],
    cautionIngredients: [],
    color: '#4CAF50',
    icon: '🌿',
    advice: '您的体质很好！保持规律作息、均衡饮食即可，顺应四时变化调养。'
  },
  {
    id: 'qixu',
    name: '气虚质',
    description: '元气不足，容易疲乏，气短懒言',
    features: ['容易疲劳，说话声音低', '稍微活动就出汗', '容易感冒，抵抗力差', '食欲不振，大便偏稀'],
    suitableIngredients: ['黄芪', '党参', '红枣', '山药', '桂圆', '白术', '黄精'],
    cautionIngredients: ['薄荷', '金银花', '菊花', '决明子', '桑叶'],
    color: '#FF9800',
    icon: '💨',
    advice: '宜补气健脾，可常食黄芪、党参、红枣等，避免过度劳累和大量出汗。'
  },
  {
    id: 'yangxu',
    name: '阳虚质',
    description: '阳气不足，手足不温，畏寒怕冷',
    features: ['手脚冰凉，怕冷', '喜欢喝热饮', '面色偏白，精神不振', '大便偏稀，小便清长'],
    suitableIngredients: ['生姜', '干姜', '肉桂', '丁香', '红枣', '桂圆', '核桃', '红茶'],
    cautionIngredients: ['金银花', '菊花', '决明子', '薄荷', '绿茶', '桑叶', '薏米'],
    color: '#2196F3',
    icon: '❄️',
    advice: '宜温补阳气，可常食生姜、桂圆、核桃等温性食材，少吃寒凉食物。'
  },
  {
    id: 'yinxu',
    name: '阴虚质',
    description: '阴液亏少，口燥咽干，手足心热',
    features: ['口干咽燥，喜欢喝冷饮', '手脚心发热', '皮肤偏干，容易心烦', '大便偏干，舌红少苔'],
    suitableIngredients: ['枸杞', '百合', '银耳', '麦冬', '石斛', '桑葚', '黄精', '熟地黄'],
    cautionIngredients: ['生姜', '干姜', '肉桂', '丁香', '桂圆', '核桃', '红花'],
    color: '#9C27B0',
    icon: '🔥',
    advice: '宜滋阴润燥，可常食百合、银耳、枸杞等，少吃辛辣温燥食物。'
  },
  {
    id: 'tanshi',
    name: '痰湿质',
    description: '痰湿凝聚，体形肥胖，腹部肥满松软',
    features: ['体形偏胖，腹部松软', '容易困倦，身重不爽', '口中黏腻，舌苔厚', '皮肤油脂多，嗜食肥甘'],
    suitableIngredients: ['薏米', '茯苓', '陈皮', '山楂', '荷叶', '白术', '苍术'],
    cautionIngredients: ['红枣', '桂圆', '银耳', '黑芝麻', '核桃', '熟地黄'],
    color: '#795548',
    icon: '💧',
    advice: '宜健脾祛湿化痰，可常食薏米、陈皮、茯苓等，少吃甜腻肥甘食物。'
  },
  {
    id: 'shire',
    name: '湿热质',
    description: '湿热内蕴，面垢油光，口苦口干',
    features: ['面部油光，易生痤疮', '口苦口干，体味较重', '大便黏滞，小便黄', '舌红苔黄腻'],
    suitableIngredients: ['薏米', '金银花', '菊花', '决明子', '绿豆', '鱼腥草', '竹叶'],
    cautionIngredients: ['生姜', '桂圆', '红枣', '黄芪', '核桃', '肉桂', '丁香'],
    color: '#F44336',
    icon: '🌡️',
    advice: '宜清热利湿，可常食薏米、菊花、金银花等，少吃辛辣油腻食物。'
  },
  {
    id: 'xueyu',
    name: '血瘀质',
    description: '血行不畅，肤色晦暗，容易出现瘀斑',
    features: ['面色晦暗，唇色偏暗', '容易出现瘀斑', '皮肤粗糙，有色素沉着', '舌质紫暗或有瘀点'],
    suitableIngredients: ['红花', '当归', '山楂', '玫瑰花', '川芎', '桃仁'],
    cautionIngredients: ['寒凉收涩之品'],
    color: '#E91E63',
    icon: '🩸',
    advice: '宜活血化瘀，可常食玫瑰花、山楂、当归等，适当运动促进气血运行。'
  },
  {
    id: 'qiyu',
    name: '气郁质',
    description: '气机郁滞，神情抑郁，忧虑脆弱',
    features: ['情绪低落，容易叹气', '胸胁胀满，乳房胀痛', '咽中如有异物', '睡眠较差，多梦'],
    suitableIngredients: ['玫瑰花', '陈皮', '佛手', '菊花', '百合', '酸枣仁', '薄荷'],
    cautionIngredients: ['收敛固涩之品'],
    color: '#607D8B',
    icon: '😔',
    advice: '宜疏肝理气解郁，可常食玫瑰花、陈皮、佛手等，保持心情舒畅。'
  },
  {
    id: 'tebing',
    name: '特禀质',
    description: '先天禀赋异常，易过敏体质',
    features: ['容易过敏（花粉、食物等）', '打喷嚏、流鼻涕', '皮肤容易起荨麻疹', '对季节变化敏感'],
    suitableIngredients: ['黄芪', '防风', '红枣', '山药'],
    cautionIngredients: ['过敏原相关食材需个体化判断'],
    color: '#FF5722',
    icon: '⚠️',
    advice: '宜益气固表，增强免疫力，可常食黄芪、山药等，避免已知过敏原。'
  }
]

const quizQuestions = [
  {
    id: 1,
    question: '夏天别人觉得空调刚好时，你觉得冷吗？',
    options: [
      { text: '经常觉得冷，想调高温度', scores: { yangxu: 3, qixu: 1 } },
      { text: '还好，基本适应', scores: { pinghe: 2 } },
      { text: '不觉得冷，反而觉得热', scores: { yinxu: 2, shire: 1 } }
    ]
  },
  {
    id: 2,
    question: '你的精力状态如何？',
    options: [
      { text: '经常觉得累，提不起劲', scores: { qixu: 3, yangxu: 1 } },
      { text: '精力充沛，活力满满', scores: { pinghe: 3 } },
      { text: '时好时坏，看心情', scores: { qiyu: 2, yinxu: 1 } }
    ]
  },
  {
    id: 3,
    question: '你的皮肤状态怎样？',
    options: [
      { text: '偏干，容易起皮', scores: { yinxu: 3, xueyu: 1 } },
      { text: '润泽有弹性', scores: { pinghe: 3 } },
      { text: '偏油，容易长痘', scores: { shire: 3, tanshi: 1 } }
    ]
  },
  {
    id: 4,
    question: '你的睡眠质量如何？',
    options: [
      { text: '入睡困难，容易醒', scores: { yinxu: 2, qiyu: 2 } },
      { text: '一觉到天亮', scores: { pinghe: 3 } },
      { text: '睡不醒，总觉得很困', scores: { tanshi: 3, qixu: 1 } }
    ]
  },
  {
    id: 5,
    question: '遇到不顺心的事，你通常？',
    options: [
      { text: '闷在心里，独自消化', scores: { qiyu: 3, xueyu: 1 } },
      { text: '很快就能调整过来', scores: { pinghe: 3 } },
      { text: '容易发脾气，心烦意乱', scores: { shire: 2, yinxu: 1 } }
    ]
  },
  {
    id: 6,
    question: '你的大便情况如何？',
    options: [
      { text: '经常偏稀，容易拉肚子', scores: { yangxu: 2, qixu: 1, tanshi: 1 } },
      { text: '正常规律', scores: { pinghe: 3 } },
      { text: '偏干，容易便秘', scores: { yinxu: 2, shire: 1 } }
    ]
  },
  {
    id: 7,
    question: '你的口味偏好是？',
    options: [
      { text: '喜欢热饮热食', scores: { yangxu: 2, qixu: 1 } },
      { text: '冷热都行', scores: { pinghe: 3 } },
      { text: '喜欢冷饮冰食', scores: { yinxu: 2, shire: 1 } }
    ]
  },
  {
    id: 8,
    question: '你的体型特征更接近？',
    options: [
      { text: '偏瘦，不容易长肉', scores: { yinxu: 2, qixu: 1 } },
      { text: '匀称适中', scores: { pinghe: 3 } },
      { text: '偏胖，尤其腹部松软', scores: { tanshi: 3, qixu: 1 } }
    ]
  }
]

module.exports = { constitutions, quizQuestions }
