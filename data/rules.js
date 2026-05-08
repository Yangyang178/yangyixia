const rules = [
  {
    id: 'r001',
    ingredientA: '绿茶',
    ingredientB: '枸杞',
    relation: '不宜',
    reason: '绿茶中的鞣酸会影响枸杞中多糖和营养素的吸收，降低枸杞的滋补效果',
    source: '《中药学》配伍禁忌'
  },
  {
    id: 'r002',
    ingredientA: '人参',
    ingredientB: '萝卜',
    relation: '不宜',
    reason: '人参补气，萝卜破气，两者同食会抵消人参的补气功效',
    source: '《本草纲目》配伍禁忌'
  },
  {
    id: 'r003',
    ingredientA: '人参',
    ingredientB: '茶',
    relation: '不宜',
    reason: '茶叶中的鞣酸与人参有效成分结合，降低药效',
    source: '《中药学》配伍禁忌'
  },
  {
    id: 'r004',
    ingredientA: '甘草',
    ingredientB: '大戟',
    relation: '不宜',
    reason: '十八反：甘草与大戟相反，同用可能产生毒副作用',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r005',
    ingredientA: '甘草',
    ingredientB: '芫花',
    relation: '不宜',
    reason: '十八反：甘草与芫花相反，同用可能产生毒副作用',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r006',
    ingredientA: '甘草',
    ingredientB: '甘遂',
    relation: '不宜',
    reason: '十八反：甘草与甘遂相反，同用可能产生毒副作用',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r007',
    ingredientA: '甘草',
    ingredientB: '海藻',
    relation: '不宜',
    reason: '十八反：甘草与海藻相反，传统配伍禁忌',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r008',
    ingredientA: '藜芦',
    ingredientB: '党参',
    relation: '不宜',
    reason: '十八反：藜芦与人参类（含党参）相反',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r009',
    ingredientA: '藜芦',
    ingredientB: '白芍',
    relation: '不宜',
    reason: '十八反：藜芦与芍药相反',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r010',
    ingredientA: '丁香',
    ingredientB: '郁金',
    relation: '不宜',
    reason: '十九畏：丁香畏郁金，同用可能降低疗效',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r011',
    ingredientA: '肉桂',
    ingredientB: '赤石脂',
    relation: '不宜',
    reason: '十九畏：官桂畏石脂，同用可能降低疗效',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r012',
    ingredientA: '生姜',
    ingredientB: '黄芩',
    relation: '谨慎',
    reason: '生姜温中散寒，黄芩清热燥湿，性味相反，需辨证使用',
    source: '《伤寒论》配伍原则'
  },
  {
    id: 'r013',
    ingredientA: '枸杞',
    ingredientB: '菊花',
    relation: '宜',
    reason: '枸杞滋补肝肾，菊花清肝明目，一补一清，相辅相成',
    source: '《本草纲目》'
  },
  {
    id: 'r014',
    ingredientA: '红枣',
    ingredientB: '枸杞',
    relation: '宜',
    reason: '红枣补气养血，枸杞滋补肝肾，气血双补',
    source: '《食疗本草》'
  },
  {
    id: 'r015',
    ingredientA: '红枣',
    ingredientB: '桂圆',
    relation: '宜',
    reason: '红枣补气，桂圆养血安神，气血双补安神',
    source: '《本草纲目》'
  },
  {
    id: 'r016',
    ingredientA: '红枣',
    ingredientB: '生姜',
    relation: '宜',
    reason: '红枣补中益气，生姜温中散寒，经典搭配',
    source: '《伤寒论》'
  },
  {
    id: 'r017',
    ingredientA: '陈皮',
    ingredientB: '玫瑰花',
    relation: '宜',
    reason: '陈皮理气健脾，玫瑰花疏肝解郁，理气效果增强',
    source: '《本草正义》'
  },
  {
    id: 'r018',
    ingredientA: '薏米',
    ingredientB: '红豆',
    relation: '宜',
    reason: '薏米利水渗湿，红豆利水消肿，经典祛湿搭配',
    source: '《本草纲目》'
  },
  {
    id: 'r019',
    ingredientA: '黄芪',
    ingredientB: '党参',
    relation: '宜',
    reason: '黄芪补气升阳，党参补中益气，补气效果倍增',
    source: '《脾胃论》'
  },
  {
    id: 'r020',
    ingredientA: '百合',
    ingredientB: '莲子',
    relation: '宜',
    reason: '百合养阴润肺，莲子养心安神，润肺安神',
    source: '《本草纲目》'
  },
  {
    id: 'r021',
    ingredientA: '银耳',
    ingredientB: '百合',
    relation: '宜',
    reason: '银耳滋阴润肺，百合养阴润肺，养阴润肺效果增强',
    source: '《饮片新参》'
  },
  {
    id: 'r022',
    ingredientA: '决明子',
    ingredientB: '菊花',
    relation: '宜',
    reason: '决明子清肝明目，菊花清肝泻火，清肝明目效果增强',
    source: '《药性论》'
  },
  {
    id: 'r023',
    ingredientA: '山楂',
    ingredientB: '陈皮',
    relation: '宜',
    reason: '山楂消食化积，陈皮理气健脾，消食理气',
    source: '《本草纲目》'
  },
  {
    id: 'r024',
    ingredientA: '金银花',
    ingredientB: '菊花',
    relation: '宜',
    reason: '金银花清热解毒，菊花疏散风热，疏风清热',
    source: '《温病条辨》'
  },
  {
    id: 'r025',
    ingredientA: '当归',
    ingredientB: '黄芪',
    relation: '宜',
    reason: '当归补血，黄芪补气，气血双补经典搭配（当归补血汤）',
    source: '《内外伤辨惑论》'
  },
  {
    id: 'r026',
    ingredientA: '茯苓',
    ingredientB: '薏米',
    relation: '宜',
    reason: '茯苓利水渗湿，薏米利水渗湿，渗湿健脾效果增强',
    source: '《和剂局方》'
  },
  {
    id: 'r027',
    ingredientA: '麦冬',
    ingredientB: '百合',
    relation: '宜',
    reason: '麦冬养阴润肺，百合养阴润肺，润肺养阴效果增强',
    source: '《本草纲目》'
  },
  {
    id: 'r028',
    ingredientA: '酸枣仁',
    ingredientB: '桂圆',
    relation: '宜',
    reason: '酸枣仁养心安神，桂圆补心脾安神，安神效果增强',
    source: '《金匮要略》'
  },
  {
    id: 'r029',
    ingredientA: '玫瑰花',
    ingredientB: '红枣',
    relation: '宜',
    reason: '玫瑰花理气解郁，红枣补气养血，理气养血',
    source: '《饮片新参》'
  },
  {
    id: 'r030',
    ingredientA: '罗汉果',
    ingredientB: '菊花',
    relation: '宜',
    reason: '罗汉果清热润肺，菊花清肝泻火，清热利咽',
    source: '《岭南采药录》'
  },
  {
    id: 'r031',
    ingredientA: '何首乌',
    ingredientB: '黑芝麻',
    relation: '宜',
    reason: '何首乌补肝肾益精血，黑芝麻补肝肾，乌发养血',
    source: '《本草纲目》'
  },
  {
    id: 'r032',
    ingredientA: '核桃',
    ingredientB: '黑芝麻',
    relation: '宜',
    reason: '核桃补肾固精，黑芝麻补肝肾，补肾健脑',
    source: '《本草纲目》'
  },
  {
    id: 'r033',
    ingredientA: '桑葚',
    ingredientB: '枸杞',
    relation: '宜',
    reason: '桑葚滋阴补血，枸杞滋补肝肾，滋阴补血效果增强',
    source: '《本草纲目》'
  },
  {
    id: 'r034',
    ingredientA: '石斛',
    ingredientB: '麦冬',
    relation: '宜',
    reason: '石斛益胃生津，麦冬养阴润肺，养阴生津',
    source: '《温病条辨》'
  },
  {
    id: 'r035',
    ingredientA: '黄精',
    ingredientB: '枸杞',
    relation: '宜',
    reason: '黄精补气养阴，枸杞滋补肝肾，补气养阴',
    source: '《本草正》'
  },
  {
    id: 'r036',
    ingredientA: '山楂',
    ingredientB: '红枣',
    relation: '谨慎',
    reason: '山楂活血化瘀，红枣补气养血，体质偏热者不宜长期大量同用',
    source: '《本草纲目》'
  },
  {
    id: 'r037',
    ingredientA: '红花',
    ingredientB: '当归',
    relation: '宜',
    reason: '红花活血通经，当归补血活血，活血调经效果增强',
    source: '《本草纲目》'
  },
  {
    id: 'r038',
    ingredientA: '薄荷',
    ingredientB: '人参',
    relation: '不宜',
    reason: '薄荷疏散风热，人参补气固表，一散一补可能相互影响',
    source: '《本草新编》'
  },
  {
    id: 'r039',
    ingredientA: '乌梅',
    ingredientB: '甘草',
    relation: '宜',
    reason: '乌梅敛肺生津，甘草补气和中，酸甘化阴，生津止渴',
    source: '《伤寒论》'
  },
  {
    id: 'r040',
    ingredientA: '荷叶',
    ingredientB: '山楂',
    relation: '宜',
    reason: '荷叶清热解暑，山楂消食化积，消脂化积',
    source: '民间验方'
  },
  {
    id: 'r041',
    ingredientA: '人参',
    ingredientB: '白术',
    relation: '宜',
    reason: '人参大补元气，白术健脾益气，益气健脾效果倍增',
    source: '《和剂局方》四君子汤'
  },
  {
    id: 'r042',
    ingredientA: '人参',
    ingredientB: '麦冬',
    relation: '宜',
    reason: '人参补气生津，麦冬养阴润肺，益气养阴',
    source: '《医学启源》生脉散'
  },
  {
    id: 'r043',
    ingredientA: '人参',
    ingredientB: '蛤蚧',
    relation: '宜',
    reason: '人参补肺益气，蛤蚧补肺纳气，补肺平喘',
    source: '《卫生宝鉴》人参蛤蚧散'
  },
  {
    id: 'r044',
    ingredientA: '西洋参',
    ingredientB: '麦冬',
    relation: '宜',
    reason: '西洋参补气养阴，麦冬养阴生津，养阴生津',
    source: '《温病条辨》'
  },
  {
    id: 'r045',
    ingredientA: '西洋参',
    ingredientB: '石斛',
    relation: '宜',
    reason: '西洋参养阴清热，石斛益胃生津，养阴清热生津',
    source: '《本草从新》'
  },
  {
    id: 'r046',
    ingredientA: '阿胶',
    ingredientB: '熟地黄',
    relation: '宜',
    reason: '阿胶补血滋阴，熟地黄补血填精，补血滋阴效果增强',
    source: '《景岳全书》'
  },
  {
    id: 'r047',
    ingredientA: '鹿茸',
    ingredientB: '人参',
    relation: '宜',
    reason: '鹿茸补肾壮阳，人参大补元气，峻补元气温肾壮阳',
    source: '《本草纲目》参茸固本丸'
  },
  {
    id: 'r048',
    ingredientA: '肉苁蓉',
    ingredientB: '菟丝子',
    relation: '宜',
    reason: '肉苁蓉补肾阳益精血，菟丝子补肾固精，补肾益精',
    source: '《本草纲目》'
  },
  {
    id: 'r049',
    ingredientA: '杜仲',
    ingredientB: '续断',
    relation: '宜',
    reason: '杜仲补肝肾强筋骨，续断补肝肾续筋骨，补肝肾强筋骨',
    source: '《本草纲目》'
  },
  {
    id: 'r050',
    ingredientA: '淫羊藿',
    ingredientB: '仙茅',
    relation: '宜',
    reason: '淫羊藿补肾壮阳，仙茅温肾壮阳，温肾壮阳祛寒除湿',
    source: '《景岳全书》二仙汤'
  },
  {
    id: 'r051',
    ingredientA: '女贞子',
    ingredientB: '旱莲草',
    relation: '宜',
    reason: '女贞子滋补肝肾，旱莲草滋阴凉血，滋补肝肾养阴止血',
    source: '《医方集解》二至丸'
  },
  {
    id: 'r052',
    ingredientA: '沙参',
    ingredientB: '麦冬',
    relation: '宜',
    reason: '沙参养阴清肺，麦冬润肺养阴，养阴润肺益胃生津',
    source: '《温病条辨》沙参麦冬汤'
  },
  {
    id: 'r053',
    ingredientA: '玉竹',
    ingredientB: '沙参',
    relation: '宜',
    reason: '玉竹养阴润燥，沙参养阴清肺，养阴生津润肺益胃',
    source: '《温病条辨》'
  },
  {
    id: 'r054',
    ingredientA: '天冬',
    ingredientB: '麦冬',
    relation: '宜',
    reason: '天冬清肺降火，麦冬润肺养阴，滋阴润燥清肺养阴',
    source: '《本草纲目》二冬膏'
  },
  {
    id: 'r055',
    ingredientA: '龟甲',
    ingredientB: '鳖甲',
    relation: '宜',
    reason: '龟甲滋阴潜阳，鳖甲软坚散结，滋阴潜阳软坚散结',
    source: '《温病条辨》'
  },
  {
    id: 'r056',
    ingredientA: '龟甲',
    ingredientB: '熟地黄',
    relation: '宜',
    reason: '龟甲滋阴潜阳，熟地黄补血滋阴，滋阴补肾填精养血',
    source: '《丹溪心法》大补阴丸'
  },
  {
    id: 'r057',
    ingredientA: '灵芝',
    ingredientB: '酸枣仁',
    relation: '宜',
    reason: '灵芝补气安神，酸枣仁养心安神，安神助眠效果增强',
    source: '《本草纲目》'
  },
  {
    id: 'r058',
    ingredientA: '燕窝',
    ingredientB: '百合',
    relation: '宜',
    reason: '燕窝养阴润燥，百合养阴润肺，滋阴润燥养肺安神',
    source: '《本草从新》'
  },
  {
    id: 'r059',
    ingredientA: '芡实',
    ingredientB: '莲子',
    relation: '宜',
    reason: '芡实益肾固精，莲子补脾止泻，健脾补肾固涩止遗',
    source: '《本草纲目》'
  },
  {
    id: 'r060',
    ingredientA: '黑豆',
    ingredientB: '红枣',
    relation: '宜',
    reason: '黑豆补肾益阴，红枣补气养血，补肾养血健脾益气',
    source: '《本草纲目》'
  },
  {
    id: 'r061',
    ingredientA: '黄芩',
    ingredientB: '黄连',
    relation: '宜',
    reason: '黄芩清热燥湿，黄连清热燥湿泻火，清热燥湿泻火解毒',
    source: '《伤寒论》黄连解毒汤'
  },
  {
    id: 'r062',
    ingredientA: '知母',
    ingredientB: '黄柏',
    relation: '宜',
    reason: '知母清热泻火滋阴，黄柏清热燥湿泻火，清虚热降相火',
    source: '《丹溪心法》知柏地黄丸'
  },
  {
    id: 'r063',
    ingredientA: '栀子',
    ingredientB: '菊花',
    relation: '宜',
    reason: '栀子清热泻火，菊花清肝泻火，清肝泻火明目',
    source: '《本草纲目》'
  },
  {
    id: 'r064',
    ingredientA: '葛根',
    ingredientB: '菊花',
    relation: '宜',
    reason: '葛根解肌退热，菊花疏风清热，疏风解表清热明目',
    source: '《伤寒论》'
  },
  {
    id: 'r065',
    ingredientA: '青蒿',
    ingredientB: '鳖甲',
    relation: '宜',
    reason: '青蒿清透虚热，鳖甲滋阴退虚热，滋阴退热凉血除蒸',
    source: '《温病条辨》青蒿鳖甲汤'
  },
  {
    id: 'r066',
    ingredientA: '地骨皮',
    ingredientB: '银柴胡',
    relation: '宜',
    reason: '地骨皮清虚热，银柴胡退虚热，清虚热退骨蒸',
    source: '《本草纲目》'
  },
  {
    id: 'r067',
    ingredientA: '半夏',
    ingredientB: '陈皮',
    relation: '宜',
    reason: '半夏燥湿化痰，陈皮理气化痰，燥湿化痰理气和中',
    source: '《和剂局方》二陈汤'
  },
  {
    id: 'r068',
    ingredientA: '猪苓',
    ingredientB: '茯苓',
    relation: '宜',
    reason: '猪苓利水渗湿，茯苓利水渗湿健脾，利水渗湿效果增强',
    source: '《伤寒论》五苓散'
  },
  {
    id: 'r069',
    ingredientA: '泽泻',
    ingredientB: '茯苓',
    relation: '宜',
    reason: '泽泻利水渗湿泄热，茯苓利水渗湿健脾，利水渗湿泄热',
    source: '《伤寒论》五苓散'
  },
  {
    id: 'r070',
    ingredientA: '车前子',
    ingredientB: '薏米',
    relation: '宜',
    reason: '车前子利水通淋，薏米利水渗湿，利水渗湿通淋',
    source: '《本草纲目》'
  },
  {
    id: 'r071',
    ingredientA: '茵陈',
    ingredientB: '栀子',
    relation: '宜',
    reason: '茵陈清热利湿退黄，栀子清热泻火，清热利湿退黄',
    source: '《伤寒论》茵陈蒿汤'
  },
  {
    id: 'r072',
    ingredientA: '香附',
    ingredientB: '玫瑰花',
    relation: '宜',
    reason: '香附疏肝理气，玫瑰花疏肝解郁，疏肝理气解郁',
    source: '《本草纲目》'
  },
  {
    id: 'r073',
    ingredientA: '木香',
    ingredientB: '陈皮',
    relation: '宜',
    reason: '木香行气止痛，陈皮理气健脾，行气止痛健脾',
    source: '《和剂局方》'
  },
  {
    id: 'r074',
    ingredientA: '远志',
    ingredientB: '酸枣仁',
    relation: '宜',
    reason: '远志宁心安神，酸枣仁养心安神，安神效果增强',
    source: '《千金方》'
  },
  {
    id: 'r075',
    ingredientA: '合欢花',
    ingredientB: '玫瑰花',
    relation: '宜',
    reason: '合欢花解郁安神，玫瑰花疏肝解郁，疏肝解郁安神',
    source: '《本草纲目》'
  },
  {
    id: 'r076',
    ingredientA: '延胡索',
    ingredientB: '川芎',
    relation: '宜',
    reason: '延胡索活血行气止痛，川芎活血行气祛风，活血行气止痛',
    source: '《本草纲目》'
  },
  {
    id: 'r077',
    ingredientA: '郁金',
    ingredientB: '姜黄',
    relation: '宜',
    reason: '郁金活血行气解郁，姜黄活血行气通经，活血行气效果增强',
    source: '《本草纲目》'
  },
  {
    id: 'r078',
    ingredientA: '鸡内金',
    ingredientB: '山楂',
    relation: '宜',
    reason: '鸡内金消食积，山楂消食化积，消食化积效果增强',
    source: '《本草纲目》'
  },
  {
    id: 'r079',
    ingredientA: '麦芽',
    ingredientB: '山楂',
    relation: '宜',
    reason: '麦芽消食健胃，山楂消食化积，消食化积健胃',
    source: '《本草纲目》'
  },
  {
    id: 'r080',
    ingredientA: '五味子',
    ingredientB: '人参',
    relation: '宜',
    reason: '五味子敛肺滋肾，人参补气生津，益气敛阴生津',
    source: '《医学启源》生脉散'
  },
  {
    id: 'r081',
    ingredientA: '覆盆子',
    ingredientB: '菟丝子',
    relation: '宜',
    reason: '覆盆子益肾固精，菟丝子补肾固精，补肾固精缩尿',
    source: '《本草纲目》'
  },
  {
    id: 'r082',
    ingredientA: '麻黄',
    ingredientB: '桂枝',
    relation: '宜',
    reason: '麻黄发汗解表，桂枝温经解肌，发汗解表温经散寒',
    source: '《伤寒论》麻黄汤'
  },
  {
    id: 'r083',
    ingredientA: '紫苏',
    ingredientB: '生姜',
    relation: '宜',
    reason: '紫苏解表散寒，生姜温中散寒，解表散寒温中和胃',
    source: '《和剂局方》'
  },
  {
    id: 'r084',
    ingredientA: '荆芥',
    ingredientB: '防风',
    relation: '宜',
    reason: '荆芥解表散风，防风祛风解表，祛风解表散寒',
    source: '《和剂局方》荆防败毒散'
  },
  {
    id: 'r085',
    ingredientA: '桔梗',
    ingredientB: '甘草',
    relation: '宜',
    reason: '桔梗宣肺利咽，甘草清热解毒，宣肺利咽清热解毒',
    source: '《伤寒论》桔梗汤'
  },
  {
    id: 'r086',
    ingredientA: '川贝母',
    ingredientB: '百合',
    relation: '宜',
    reason: '川贝母润肺止咳，百合养阴润肺，润肺止咳养阴',
    source: '《本草纲目》'
  },
  {
    id: 'r087',
    ingredientA: '瓜蒌',
    ingredientB: '陈皮',
    relation: '宜',
    reason: '瓜蒌清热化痰，陈皮理气化痰，清热化痰理气宽胸',
    source: '《伤寒论》'
  },
  {
    id: 'r088',
    ingredientA: '人参',
    ingredientB: '萝卜',
    relation: '不宜',
    reason: '人参补气，萝卜破气下气，同食会抵消人参补气功效',
    source: '《本草纲目》配伍禁忌'
  },
  {
    id: 'r089',
    ingredientA: '人参',
    ingredientB: '茶',
    relation: '不宜',
    reason: '茶叶含鞣酸，与人参有效成分结合降低药效',
    source: '《中药学》配伍禁忌'
  },
  {
    id: 'r090',
    ingredientA: '人参',
    ingredientB: '藜芦',
    relation: '不宜',
    reason: '十八反：人参类（含党参、西洋参）与藜芦相反',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r091',
    ingredientA: '沙参',
    ingredientB: '藜芦',
    relation: '不宜',
    reason: '十八反：沙参与藜芦相反',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r092',
    ingredientA: '细辛',
    ingredientB: '藜芦',
    relation: '不宜',
    reason: '十八反：细辛与藜芦相反',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r093',
    ingredientA: '半夏',
    ingredientB: '乌头',
    relation: '不宜',
    reason: '十八反：半夏与乌头相反，同用可能产生毒副作用',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r094',
    ingredientA: '贝母',
    ingredientB: '乌头',
    relation: '不宜',
    reason: '十八反：贝母与乌头相反，同用可能产生毒副作用',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r095',
    ingredientA: '白蔹',
    ingredientB: '乌头',
    relation: '不宜',
    reason: '十八反：白蔹与乌头相反',
    source: '《本草经集注》十八反'
  },
  {
    id: 'r096',
    ingredientA: '硫磺',
    ingredientB: '朴硝',
    relation: '不宜',
    reason: '十九畏：硫磺畏朴硝，同用可能产生毒副作用',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r097',
    ingredientA: '水银',
    ingredientB: '砒霜',
    relation: '不宜',
    reason: '十九畏：水银畏砒霜，同用剧毒',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r098',
    ingredientA: '狼毒',
    ingredientB: '密陀僧',
    relation: '不宜',
    reason: '十九畏：狼毒畏密陀僧',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r099',
    ingredientA: '巴豆',
    ingredientB: '牵牛子',
    relation: '不宜',
    reason: '十九畏：巴豆畏牵牛子，同用泻下力过猛',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r100',
    ingredientA: '郁金',
    ingredientB: '丁香',
    relation: '不宜',
    reason: '十九畏：丁香畏郁金，同用可能降低疗效',
    source: '《本草经集注》十九畏'
  },
  {
    id: 'r101',
    ingredientA: '阿胶',
    ingredientB: '大黄',
    relation: '谨慎',
    reason: '阿胶补血滋阴，大黄泻下攻积，一补一泻需辨证使用',
    source: '《伤寒论》配伍原则'
  },
  {
    id: 'r102',
    ingredientA: '鹿茸',
    ingredientB: '黄柏',
    relation: '谨慎',
    reason: '鹿茸补肾壮阳，黄柏清热燥湿，性味相反需辨证使用',
    source: '《本草纲目》配伍原则'
  },
  {
    id: 'r103',
    ingredientA: '蜂蜜',
    ingredientB: '葱',
    relation: '不宜',
    reason: '蜂蜜润肠通便，葱辛温发散，同食易致腹泻',
    source: '《金匮要略》配伍禁忌'
  },
  {
    id: 'r104',
    ingredientA: '蜂蜜',
    ingredientB: '豆腐',
    relation: '不宜',
    reason: '蜂蜜含有机酸，豆腐含矿物质，同食可能影响消化',
    source: '民间饮食禁忌'
  },
  {
    id: 'r105',
    ingredientA: '螃蟹',
    ingredientB: '柿子',
    relation: '不宜',
    reason: '螃蟹含蛋白质，柿子含鞣酸，同食易形成不易消化的络合物',
    source: '民间饮食禁忌'
  },
  {
    id: 'r106',
    ingredientA: '菠菜',
    ingredientB: '豆腐',
    relation: '谨慎',
    reason: '菠菜含草酸，豆腐含钙，同食可能影响钙吸收，焯水后可减少影响',
    source: '《随息居饮食谱》'
  },
  {
    id: 'r107',
    ingredientA: '麻黄',
    ingredientB: '黄芪',
    relation: '谨慎',
    reason: '麻黄发汗解表，黄芪固表止汗，一散一收需辨证使用',
    source: '《伤寒论》配伍原则'
  },
  {
    id: 'r108',
    ingredientA: '半夏',
    ingredientB: '生姜',
    relation: '宜',
    reason: '半夏燥湿化痰降逆，生姜温中止呕，温中化痰降逆止呕',
    source: '《金匮要略》小半夏汤'
  },
  {
    id: 'r109',
    ingredientA: '黄连',
    ingredientB: '吴茱萸',
    relation: '宜',
    reason: '黄连清热泻火，吴茱萸散寒止痛，寒热并用调和肝胃',
    source: '《丹溪心法》左金丸'
  },
  {
    id: 'r110',
    ingredientA: '补骨脂',
    ingredientB: '肉豆蔻',
    relation: '宜',
    reason: '补骨脂补肾助阳，肉豆蔻温脾止泻，温脾肾止泻',
    source: '《本草纲目》二神丸'
  }
]

module.exports = rules
