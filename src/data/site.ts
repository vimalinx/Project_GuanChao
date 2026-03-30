export type FaqItem = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  image: string;
  excerpt: string;
  summary: string;
  description: string[];
  applications: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  faq: FaqItem[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  image: string;
  excerpt: string;
  challenge: string[];
  solution: string[];
  outcomes: string[];
};

export type NewsArticle = {
  slug: string;
  title: string;
  category: '企业动态' | '新闻动态';
  publishedAt: string;
  image: string;
  excerpt: string;
  body: string[];
  bullets?: string[];
};

export type VideoItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  embedUrl: string;
};

export const company = {
  name: '博恩科自动化',
  legalName: '莱州博恩科自动化科技有限公司',
  domain: 'https://www.boenke.cn',
  phone: '139 5350 7557',
  landline: '0535-2220055',
  contactPerson: '赵先生',
  address: '山东省莱州市文峰工业园',
  province: '山东省',
  city: '莱州市',
  icp: '鲁ICP备19014858号-1',
  tagline: '专注铸件自动打磨、抛光、去毛刺及非标自动化定制',
  description:
    '博恩科自动化专注铸件自动打磨机、数控自动抛光机和打磨机器人方案，服务铸造、压铸、五金及电力金具制造企业。',
  values: [
    '围绕铸件自动去飞边、毛刺、分型线与浇冒口清理构建设备方案。',
    '兼顾设备精度、柔性、性价比与维护便利性，帮助工厂稳定量产。',
    '支持自动化加工、装配等专用机床的非标定制和现场试样评估。'
  ]
};

export const navigation = [
  { label: '首页', href: '/' },
  { label: '关于博恩科', href: '/about/' },
  { label: '产品方案', href: '/products/' },
  { label: '成功案例', href: '/cases/' },
  { label: '视频中心', href: '/videos/' },
  { label: '新闻动态', href: '/news/' },
  { label: '联系我们', href: '/contact/' }
];

export const productCategories = [
  { slug: 'cnc-polishing', name: '数控自动抛光机' },
  { slug: 'auto-polishing', name: '自动抛光机' },
  { slug: 'auto-grinding', name: '自动打磨机' },
  { slug: 'grinding-robot', name: '打磨机器人' }
];

export const products: Product[] = [
  {
    slug: 'five-axis-cnc-polishing-machine',
    name: '博恩科五轴数控自动抛光机',
    category: 'cnc-polishing',
    categoryName: '数控自动抛光机',
    image: '/media/product-polishing-machine.jpg',
    excerpt: '卧式单工位五轴结构，适合五金件高一致性抛光。',
    summary:
      '五轴数控结构将 X、Y、Z 与 A、B 旋转轴组合在同一机床平台中，用于五金类工件的自动抛光和表面一致性控制。',
    description: [
      '设备采用卧式单工位结构，由 X、Y、Z 三坐标轴和 A、B 两个旋转轴组成，可覆盖较复杂的轮廓运动轨迹。',
      '床身刚性和吸震性经过强化，适合长时间连续运行，支持自动润滑、全封闭防护罩与独立电柜布置。',
      '适用于五金零件、卫浴配件、结构件等对表面光洁度和批次一致性要求较高的场景。'
    ],
    applications: ['五金件表面抛光', '曲面零件精修', '批量零件表面一致性控制'],
    highlights: [
      '五轴联动，覆盖复杂轮廓与多角度抛光。',
      '床身刚性好，工件轴跳动控制严格。',
      '全封闭防护罩，兼顾安全、清洁与维护便利性。',
      '支持非标工装与参数工艺联调。'
    ],
    specs: [
      { label: '设备型号', value: 'BNK-APM-5' },
      { label: '机床结构', value: '卧式单工位，XYZ + AB 五轴' },
      { label: '上下料方式', value: '人工或工装辅助上下料' },
      { label: '适配对象', value: '五金产品及复杂轮廓件' }
    ],
    faq: [
      {
        question: '五轴数控自动抛光机适合什么工件？',
        answer:
          '更适合有曲面、转角或多姿态加工需求的五金零件、结构件和需要高一致性表面的产品。'
      },
      {
        question: '是否支持定制夹具和工艺？',
        answer:
          '支持。博恩科可以结合工件形状、节拍和目标光洁度配置专用工装与工艺参数。'
      }
    ]
  },
  {
    slug: 'cnc-grinding-polishing-machine',
    name: '数控打磨抛光机',
    category: 'cnc-polishing',
    categoryName: '数控自动抛光机',
    image: '/media/product-polishing-machine.jpg',
    excerpt: '通过数控系统控制转速、行程和进给参数的打磨抛光设备方案。',
    summary:
      '适合金属、硬质材料和部分脆性材料表面打磨抛光的数控设备方案，强调加工精度、一致性和程序化重复生产能力。',
    description: [
      '这组内容来自旧站“数控打磨机”“全自动打磨机-数控打磨机”等文章。新版把它整理成更通用的数控打磨抛光方案页，用来承接“数控打磨机”这类搜索意图，而不仅限于单一五轴机型。',
      '数控打磨抛光机通过计算机控制系统精确管理转速、行程、进给速度等关键参数，在提高表面光洁度和一致性的同时，减少人工操作波动对产品质量的影响。',
      '它适合应用在金属件、五金件以及部分玻璃、陶瓷等材料的表面处理场景。如果工件轮廓更复杂、姿态要求更高，可进一步匹配具体五轴或多轴机型。'
    ],
    applications: ['金属件数控打磨抛光', '五金件高一致性表面处理', '多参数程序化重复加工'],
    highlights: [
      '数控系统统一管理转速、行程和进给速度，重复加工更稳定。',
      '相比手工打磨，效率更高，批量品质波动更小。',
      '适配金属、五金及部分脆性材料的表面精整场景。',
      '可作为通用数控方案页，进一步承接到五轴等具体机型。'
    ],
    specs: [
      { label: '控制方式', value: '数控程序控制转速、行程、进给等参数' },
      { label: '适配材料', value: '金属件、五金件及部分玻璃、陶瓷材料' },
      { label: '典型价值', value: '提升光洁度、一致性和批量加工效率' },
      { label: '方案延展', value: '可继续细分到五轴或多轴专用机型' }
    ],
    faq: [
      {
        question: '数控打磨抛光机适合哪些工件？',
        answer:
          '更适合需要较高表面一致性、重复加工稳定性和程序化控制的金属件、五金件以及部分硬质材料工件。'
      },
      {
        question: '数控打磨抛光机和五轴数控自动抛光机是什么关系？',
        answer:
          '数控打磨抛光机是更宽泛的方案概念，五轴数控自动抛光机则是其中更适合复杂轮廓和多姿态加工的具体机型。'
      }
    ]
  },
  {
    slug: 'automatic-polishing-machine-cell',
    name: '五金自动抛光机械设备',
    category: 'auto-polishing',
    categoryName: '自动抛光机',
    image: '/media/product-polishing-machine.jpg',
    excerpt: '面向不锈钢、铝件、铜件等五金制品的自动化抛光方案。',
    summary:
      '围绕五金件批量表面处理、光洁度一致性和节拍提升设计的自动抛光设备方案，适合家具五金、汽车零部件和金属外观件生产。',
    description: [
      '该方案来自旧站“自动抛光机应用领域”和“五金自动抛光机械设备”内容整理，重点不是单台设备参数，而是帮助工厂把五金抛光从人工波动工位转为更稳定的自动化节拍。',
      '设备通常由机架、控制系统、磨头组和输送定位单元组成，可根据工件材质、轮廓和目标表面效果调整磨头速度、接触力和加工节拍。',
      '相比传统人工抛光，它更适合需要批量一致性、表面光泽稳定和返工率可控的生产场景，也更方便结合防护、除尘和专用夹具一起落地。'
    ],
    applications: ['不锈钢五金件自动抛光', '铝件与铜件外观面处理', '汽车与家具五金件批量表面整理'],
    highlights: [
      '适合五金制品、结构件和外观件的连续抛光节拍。',
      '可按工件轮廓调整磨头形式、速度和接触力度。',
      '便于和输送、定位夹具、防护罩及除尘单元集成。',
      '帮助压缩人工抛光波动和批次间表面差异。'
    ],
    specs: [
      { label: '适配对象', value: '不锈钢、铝件、铜件等五金产品' },
      { label: '核心单元', value: '机架、控制系统、磨头组、输送与定位装置' },
      { label: '控制方式', value: '自动节拍运行，可结合非标工装调节' },
      { label: '典型价值', value: '提升光洁度一致性并降低人工抛光依赖' }
    ],
    faq: [
      {
        question: '自动抛光机更适合哪些工件？',
        answer:
          '更适合需要稳定光泽度、批量一致性和较明确表面目标的五金件、外观件和金属结构件。'
      },
      {
        question: '自动抛光机是否需要配套专用夹具？',
        answer:
          '通常建议配置。夹具和定位单元决定工件姿态稳定性，也会直接影响抛光一致性和节拍。'
      }
    ]
  },
  {
    slug: 'casting-automatic-grinding-machine',
    name: '博恩科铸件自动打磨机',
    category: 'auto-grinding',
    categoryName: '自动打磨机',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '针对铸件飞边、毛刺、分型线和浇冒口清理的核心机型。',
    summary:
      '面向铸件自动去飞边、毛刺、分型线和浇冒口清理，兼顾精度、效率、柔性与成本控制。',
    description: [
      '这是原站中最核心的主打机型之一，围绕铸件打磨痛点展开，强调自动去飞边、毛刺、分型线以及浇冒口清理能力。',
      '设备支持工件自动打磨和抛光，适合替代高粉尘、高劳动强度、节拍不稳定的传统人工工序。',
      '博恩科在该机型上强调精确、高效、灵活、绿色和性价比，适合作为工厂自动化升级的首台设备。'
    ],
    applications: ['铸造件去毛刺', '压铸件浇冒口清理', '批量铸件自动打磨抛光'],
    highlights: [
      '适配铸造件、压铸件常见打磨与清理工序。',
      '支持双工位或节拍化布局，提高上下料与加工并行效率。',
      '可根据工件表面起伏和去除量需求调整力度与路径。',
      '便于和夹具、集尘、防护舱等单元集成。'
    ],
    specs: [
      { label: '核心工艺', value: '去飞边、去毛刺、分型线清理、浇冒口处理' },
      { label: '适用行业', value: '铸造、压铸、汽车零部件、电力金具' },
      { label: '交付形式', value: '标准机型 + 非标工装与工艺联调' },
      { label: '典型收益', value: '降低人工强度并提升打磨一致性' }
    ],
    faq: [
      {
        question: '自动打磨机和传统人工打磨相比优势是什么？',
        answer:
          '自动打磨机在节拍稳定性、表面一致性、粉尘控制和用工成本上更具优势，适合连续批量生产。'
      },
      {
        question: '可以带工件到现场试样吗？',
        answer:
          '可以。博恩科可根据工件材质、毛刺位置和目标节拍做试样验证，确认设备与工艺方向。'
      }
    ]
  },
  {
    slug: 'automatic-column-grinding-machine',
    name: '自动立柱打磨机',
    category: 'auto-grinding',
    categoryName: '自动打磨机',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '立柱式自动打磨方案，适合铸件和金属件的节拍化去毛刺、修边与表面整理。',
    summary:
      '面向铸件和金属工件批量打磨的立柱式专机方案，强调压力、速度和路径可调，兼顾稳定性、效率与现场安全。',
    description: [
      '这组内容来自旧站“自动立柱打磨机”相关文章。相比更泛化的“自动打磨机”表述，这一页把它收敛成更清晰的立柱式设备方案，便于客户判断它是否适合自己的工件和节拍。',
      '自动立柱打磨机通常以立柱式机架、打磨执行单元和控制系统为核心，通过参数化方式调整接触压力、运行速度和加工路径，用于完成去毛刺、修边和表面整理等连续工序。',
      '它更适合希望把高粉尘、高重复性的人工作业转为稳定节拍生产的工厂，也便于与防护罩、除尘系统、夹具和上下料单元一起组成完整工位。'
    ],
    applications: ['铸件去毛刺与分型线清理', '金属件修边与表面整理', '批量工件节拍化自动打磨'],
    highlights: [
      '立柱式结构紧凑，便于围绕固定工位组织打磨节拍。',
      '可按工件情况调整压力、速度和路径，兼顾去除量与表面一致性。',
      '适合替代高粉尘、高重复性的人工打磨岗位。',
      '支持与夹具、防护、除尘和非标上下料单元联动落地。'
    ],
    specs: [
      { label: '设备形态', value: '立柱式自动打磨专机' },
      { label: '适配对象', value: '铸件、金属结构件及类似批量工件' },
      { label: '可调参数', value: '打磨压力、运行速度、加工路径' },
      { label: '交付方式', value: '标准机架 + 工装、防护、除尘联调' }
    ],
    faq: [
      {
        question: '自动立柱打磨机适合什么样的工件？',
        answer:
          '更适合规格相对集中、批量稳定、希望把去毛刺和修边工序做成固定节拍的铸件或金属件。'
      },
      {
        question: '自动立柱打磨机和通用打磨机器人怎么选？',
        answer:
          '如果工件变化不大、重点是效率和性价比，立柱式专机通常更直接；如果产品切换频繁、轨迹复杂，机器人工作站会更灵活。'
      }
    ]
  },
  {
    slug: 'casting-gate-riser-grinding-machine',
    name: '铸件浇冒口打磨机',
    category: 'auto-grinding',
    categoryName: '自动打磨机',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '面向铸件浇冒口、浇口残留和局部毛刺清理的专用打磨方案。',
    summary:
      '围绕铸件浇冒口去除、局部毛刺修整和表面平顺处理设计的自动打磨设备，强调效率、精度和对不同铸件尺寸的适配能力。',
    description: [
      '这组内容来自旧站“铸件浇冒口打磨机”相关文章。它比泛化的“铸件自动打磨机”更聚焦于浇冒口清理这个高频工序，适合做成更明确的独立产品页，方便搜索和方案筛选。',
      '设备通常由底座、电机、磨削工具和工件调整机构组成，通过控制磨削位置、角度和接触方式，对浇冒口残留、毛刺和局部凹凸进行连续处理。',
      '在实际项目中，这类设备常与除尘、防护和工装定位配合使用。如果工件变化较大，也可以进一步评估机器人版浇冒口清理工位，以兼顾柔性和一致性。'
    ],
    applications: ['铸件浇冒口清理', '浇口残留与边缘毛刺去除', '铸件局部表面修整与平顺处理'],
    highlights: [
      '围绕浇冒口处理做专用工序优化，比泛化打磨表述更聚焦。',
      '可稳定控制磨削力度和角度，提升局部清理一致性。',
      '适配不同铸件尺寸和浇冒口位置，便于按工件做工装调整。',
      '可联动抽风除尘和粉尘收集，降低现场污染与清理压力。'
    ],
    specs: [
      { label: '核心用途', value: '浇冒口、浇口残留、毛刺和局部凹陷清理' },
      { label: '核心单元', value: '底座、电机、磨削工具与工件调整机构' },
      { label: '扩展能力', value: '可加装传感器、PLC、抽风和粉尘收集单元' },
      { label: '适配方向', value: '铸造行业批量工件的局部定点打磨' }
    ],
    faq: [
      {
        question: '铸件浇冒口打磨机适合哪些工件？',
        answer:
          '更适合浇冒口位置较明确、批量稳定、希望把局部清理工序做成节拍化加工的铸件产品。'
      },
      {
        question: '浇冒口清理应该选专机还是机器人？',
        answer:
          '如果工件规格较集中、重点是效率和性价比，专机通常更直接；如果工件切换频繁或路径变化大，则可以进一步评估机器人清理工位。'
      }
    ]
  },
  {
    slug: 'metal-grinding-machine',
    name: '金属打磨机',
    category: 'auto-grinding',
    categoryName: '自动打磨机',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '面向金属件去氧化层、修整粗糙度和表面平顺处理的自动打磨方案。',
    summary:
      '围绕金属制品表面处理、毛刺去除、粗糙度调整和局部修复整理的打磨设备方案，适合批量零件表面质量提升。',
    description: [
      '这组内容来自旧站“金属打磨机”“自动打磨机-金属打磨机”等文章。相比铸件专用打磨机，它更偏向通用金属件表面处理，适合作为独立产品词页承接搜索和客户初筛。',
      '金属打磨机通常通过电机驱动砂轮、砂带或其他磨削工具，对工件表面的氧化层、锈蚀、毛刺和局部不平整进行处理，从而改善外观、尺寸一致性和后续装配条件。',
      '它适合应用在汽车零部件、五金结构件、金属装饰件和一般工业零件加工场景。若现场还要求更高柔性或多品类切换，可进一步评估机器人工作站方案。'
    ],
    applications: ['金属件表面去氧化层和去锈', '零件毛刺去除与局部修整', '五金和工业件表面粗糙度调整'],
    highlights: [
      '适合通用金属件表面处理，不局限于铸件单一工艺。',
      '可通过不同磨料和参数组合覆盖从粗磨到精整的需求。',
      '有助于改善外观质量、耐久性和后续装配表面条件。',
      '可结合夹具、防护和除尘单元形成更稳定的批量工位。'
    ],
    specs: [
      { label: '核心用途', value: '去氧化层、去锈、去毛刺、表面修整和粗糙度调整' },
      { label: '典型工具', value: '砂轮、砂带、刷轮等磨削单元' },
      { label: '适配工件', value: '汽车件、五金件、金属结构件和装饰件' },
      { label: '交付方向', value: '标准设备 + 工装、防护、除尘或工艺参数联调' }
    ],
    faq: [
      {
        question: '金属打磨机和铸件自动打磨机有什么区别？',
        answer:
          '金属打磨机更偏通用表面处理，适配更广的金属件；铸件自动打磨机则更聚焦飞边、毛刺、分型线和浇冒口这类铸造工序。'
      },
      {
        question: '通用金属件表面处理什么时候需要上机器人？',
        answer:
          '当工件品类多、曲面复杂或切换频繁时，机器人工作站更有柔性；如果工件规格稳定，专机或通用打磨设备通常更直接。'
      }
    ]
  },
  {
    slug: 'insulator-cap-grinding-machine',
    name: '绝缘子铁帽钢帽自动打磨机',
    category: 'auto-grinding',
    categoryName: '自动打磨机',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '面向绝缘子铁帽、电瓷钢帽铸造件的双工位自动打磨方案。',
    summary:
      '针对绝缘子铁帽、电瓷钢帽等铸造毛坯的飞边、毛刺、合模线与浇口清理，强调多重定位与双工位同步打磨。',
    description: [
      '该机型来自原站产品页，围绕电力金具场景展开，重点解决人工打磨效率低、一致性差、粉尘污染和招工难的问题。',
      '除卡盘夹持外，还可结合球窝等多重同步定位，减少安装不正和定位不准造成的返工。',
      '双工位同步打磨设计有利于将节拍压缩到更稳定的范围，适合批量一致性要求较高的铁帽、钢帽类工件。'
    ],
    applications: ['绝缘子铁帽打磨', '电瓷钢帽毛坯清理', '电力金具批量去毛刺'],
    highlights: [
      '比通用机器人打磨更强调成本控制与耐用性。',
      '多重同步定位，降低装夹误差。',
      '双工位同步打磨，提升效率。',
      '支持按产品规格定制方案。'
    ],
    specs: [
      { label: '适配工件', value: '绝缘子铁帽、电瓷钢帽及类似铸造金具' },
      { label: '定位方式', value: '卡盘夹持 + 球窝等多重同步定位' },
      { label: '作业方式', value: '双工位同步打磨' },
      { label: '目标', value: '提升一致性、降低装夹与人工成本' }
    ],
    faq: [
      {
        question: '这类专机和通用打磨机器人怎么选？',
        answer:
          '如果工件规格集中、产量稳定、关注性价比和维护成本，专机通常更合适；若产品变化大，可评估机器人柔性方案。'
      },
      {
        question: '多重定位的价值是什么？',
        answer:
          '多重定位可以减少二次装夹与搬运，降低偏差累积，帮助设备稳定控制打磨位置和节拍。'
      }
    ]
  },
  {
    slug: 'casting-grinding-robot-cell',
    name: '铸件打磨机器人工作站',
    category: 'grinding-robot',
    categoryName: '打磨机器人',
    image: '/media/hero-machine.jpg',
    excerpt: '面向铸件、压铸件和浇冒口清理场景的机器人打磨工作站。',
    summary:
      '围绕铸件后清理、压铸件去毛刺和浇冒口修整打造的机器人打磨方案，强调连续运行、轨迹精度和更安全的封闭式工位。',
    description: [
      '这组内容来自旧站“铸件机器人打磨”“铸件打磨机器人”“压铸件机器人打磨”等多篇文章。新版把它们整理成更明确的应用型产品页，重点服务铸造和压铸零部件场景，而不再只是泛泛描述机器人概念。',
      '相较传统人工打磨，这类工作站更强调程序化路径、稳定接触力和批量一致性，可围绕铸件表面修整、边缘去毛刺、浇冒口处理和复杂曲面打磨进行工艺配置。',
      '完整交付通常包含机器人本体、打磨工具、夹具、安全围栏、除尘或封闭防护单元，并可按需要与输送、检测和数据采集环节联动，形成更完整的自动化打磨工位。'
    ],
    applications: ['铸件后清理与表面打磨', '压铸件去毛刺与修边', '浇冒口与复杂曲面机器人修整'],
    highlights: [
      '适合铸件和压铸件这类劳动强度高、粉尘重的打磨岗位替代。',
      '通过程序控制轨迹、力度和节拍，提升批量一致性和表面稳定性。',
      '可在封闭工位中运行，降低操作者直接接触粉尘和火花的风险。',
      '便于与视觉检测、输送和除尘系统扩展成自动化单元。'
    ],
    specs: [
      { label: '方案形态', value: '机器人本体 + 打磨工具 + 夹具 + 围栏/除尘' },
      { label: '典型工件', value: '铸件、压铸件、带浇冒口或复杂曲面的金属件' },
      { label: '控制重点', value: '轨迹、接触力、速度与重复一致性' },
      { label: '部署目标', value: '替代高强度人工并形成稳定工位节拍' }
    ],
    faq: [
      {
        question: '铸件打磨机器人更适合哪些场景？',
        answer:
          '更适合工件批量稳定、表面路径较复杂、人工劳动强度大且希望提升一致性与安全性的铸造或压铸场景。'
      },
      {
        question: '压铸件去毛刺和浇冒口清理可以用机器人做吗？',
        answer:
          '可以。只要结合工件材质、余量和夹具做工艺配置，机器人工作站可以覆盖压铸件去毛刺、修边和部分浇冒口清理需求。'
      }
    ]
  },
  {
    slug: 'grinding-robot-workstation',
    name: '打磨机器人工作站',
    category: 'grinding-robot',
    categoryName: '打磨机器人',
    image: '/media/hero-machine.jpg',
    excerpt: '适合多品类铸件和复杂轨迹工况的柔性机器人打磨工作站。',
    summary:
      '面向多品类铸件、压铸件和复杂表面工况的柔性打磨需求，可结合力控、示教编程、夹具和集尘系统构成机器人工作站。',
    description: [
      '旧站中“铸件自动打磨机器人”类内容多次强调机器人在复杂表面、不同姿态和多品类工件上的灵活性，因此新版把它整理为更明确的柔性工位方案，而不是单一设备名词。',
      '机器人工作站更适合产品切换频繁、打磨轨迹复杂或希望逐步扩展工位能力的工厂，尤其适合铸件去毛刺、边缘修整和曲面打磨这类难以用固定专机覆盖的场景。',
      '完整方案通常会把机器人本体、安全围栏、除尘单元、夹具、力控与示教程序一起交付，以兼顾精度、稳定性和现场安全。'
    ],
    applications: ['柔性多品类铸件打磨', '复杂表面与多姿态去毛刺', '工位级机器人替代人工改造'],
    highlights: [
      '通过传感器和控制系统识别工件姿态并稳定执行打磨轨迹。',
      '适合工件变化大、表面复杂或需要预留后续扩展空间的产线。',
      '可接入力控、示教器、专用磨头、围栏和除尘等完整单元。',
      '有利于降低粉尘环境下的人工作业风险并提升一致性。'
    ],
    specs: [
      { label: '方案形态', value: '机器人本体 + 夹具 + 打磨头 + 安全围栏/除尘' },
      { label: '路径管理', value: '示教或离线规划结合工艺校准' },
      { label: '维护重点', value: '清洁、润滑、紧固件检查与校准' },
      { label: '适配目标', value: '柔性制造与中频切换生产' }
    ],
    faq: [
      {
        question: '打磨机器人适合所有工件吗？',
        answer:
          '不一定。若工件单一且产量大，专机效率和成本可能更优；若工件变化大、节拍多样，机器人柔性更强。'
      },
      {
        question: '机器人打磨是否必须配力控？',
        answer:
          '复杂曲面或需要稳定接触力的工况更建议配置力控，以便更稳定地控制去除量和表面质量。'
      }
    ]
  }
];

export const cases: CaseStudy[] = [
  {
    slug: 'steel-cap-automatic-grinding',
    name: '钢帽自动打磨',
    industry: '电力金具',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '面向绝缘子铁帽、钢帽类工件的自动打磨案例。',
    challenge: [
      '人工打磨粉尘大、工伤风险高，且难以保持批次一致性。',
      '工件装夹误差会放大打磨偏差，导致返工和节拍损失。'
    ],
    solution: [
      '采用专用自动打磨机，围绕工件定位、双工位节拍和打磨路径做专机化设计。',
      '配合防护、除尘与工装，实现更稳定的自动去毛刺和浇口清理。'
    ],
    outcomes: [
      '改善用工依赖，降低高粉尘工位的人工强度。',
      '打磨一致性和生产节拍更稳定，适合连续批量生产。'
    ]
  },
  {
    slug: 'grooved-pipe-fitting-grinding',
    name: '沟槽管件（球铁）自动打磨',
    industry: '管件铸造',
    image: '/media/hero-machine.jpg',
    excerpt: '针对球铁沟槽管件的自动去飞边、去毛刺和表面修整。',
    challenge: [
      '球铁类管件毛刺位置复杂，人工节拍慢且品质波动大。',
      '批量订单对交付节拍和一致性提出更高要求。'
    ],
    solution: [
      '根据工件形状定制夹具和路径，实现稳定定位与重复加工。',
      '将自动打磨与防护、除尘和上下料节拍协同设计。'
    ],
    outcomes: [
      '减少人工打磨波动，提高连续加工能力。',
      '更适合工厂在订单稳定后做自动化替换。'
    ]
  }
];

export const newsArticles: NewsArticle[] = [
  {
    slug: 'automatic-grinding-machine-workshop-upgrade',
    title: '还在为人工打磨头疼？博恩科自动打磨机让生产车间改头换面',
    category: '新闻动态',
    publishedAt: '2025-06-19',
    image: '/media/news-upgrade-detail.jpg',
    excerpt:
      '从粉尘、返工和招工难切入，解释自动打磨机如何帮助铸造厂完成节拍和品质升级。',
    body: [
      '在很多铸造车间里，人工打磨意味着粉尘、火花、疲劳操作和高返工风险并存。订单一旦集中，现场很容易出现效率下降、品质不稳和人手不足的问题。',
      '博恩科将自动打磨机定位为一套面向现场痛点的设备方案，而不是单纯的机械替代。设备围绕接触力控制、工件识别、节拍组织和防护除尘协同设计，目标是稳定去除飞边和毛刺，同时减少过打磨。',
      '对于管理者而言，价值不仅在于一台设备替代多人，更在于节拍稳定、返工减少、环保风险降低，以及夜班和高强度工位压力的缓解。'
    ],
    bullets: [
      '针对铸造件的飞边、合模线和毛刺进行稳定去除。',
      '帮助企业降低对熟练人工的依赖。',
      '通过防护与除尘设计改善现场环境。'
    ]
  },
  {
    slug: 'automatic-grinding-machine-usage-guide',
    title: '自动打磨机使用方法',
    category: '新闻动态',
    publishedAt: '2025-06-13',
    image: '/media/news-usage.jpg',
    excerpt: '梳理自动打磨机的安全准备、工件固定、耗材选择和路径规划要点。',
    body: [
      '自动打磨机使用前首先要做的是安全和设备状态确认，包括防护罩、漏电保护、空载试运转和个人防护装备检查。',
      '在工件和耗材准备阶段，关键是确保夹具刚性、表面清洁以及砂轮或砂带与材质匹配。薄板件、异形件和易变形件尤其需要专用工装支持。',
      '参数与路径决定最终效果。针对复杂曲面，需要更密集的路径点和更合理的多道次工艺安排，以兼顾去除量、表面一致性和节拍。'
    ],
    bullets: [
      '先做安全检查，再做空载试运行。',
      '按材质选择耗材与转速、接触力参数。',
      '复杂工件建议采用粗磨到精磨的分道次工艺。'
    ]
  },
  {
    slug: 'grinding-robot-maintenance-tips',
    title: '打磨机器人有哪些保养技巧',
    category: '新闻动态',
    publishedAt: '2025-02-07',
    image: '/media/news-maintenance.jpg',
    excerpt: '围绕清洁、紧固检查、润滑和校准给出机器人打磨工站的维护建议。',
    body: [
      '机器人打磨工作站的维护重点首先是日常清洁，尤其是底座、手臂、中空手腕和打磨头周边，避免粉尘和油污长期积累影响动作精度。',
      '其次是对紧固件、安全装置、润滑点和连接部件进行周期性检查。打磨场景震动和粉尘较多，松动和磨损往往会逐步放大。',
      '对于长期连续运行的工作站，还应建立定期校准机制，包括轨迹、工具中心点和关键传感器的复核，以保障稳定性。'
    ]
  },
  {
    slug: 'grinding-robot-operation-guide',
    title: '打磨机器人的使用方法有哪些',
    category: '企业动态',
    publishedAt: '2025-06-13',
    image: '/media/news-maintenance.jpg',
    excerpt: '从安全、工件准备、工具安装和参数设置四个层面解释机器人打磨的核心流程。',
    body: [
      '机器人打磨并不是简单示教即可投产，前期需要同时处理安全围栏、通风除尘、工件固定和工具安装等基础条件。',
      '不同工件材质和表面要求，对接触力、进给速度、磨头转速和轨迹重叠率的要求差异明显，实际生产中需要结合样件反复调整。',
      '如果希望真正发挥机器人柔性价值，建议把路径管理、工装更换、耗材策略和保养机制一起纳入项目交付范围。'
    ]
  },
  {
    slug: 'automatic-grinding-machine-fault-repair',
    title: '自动打磨机的常见故障及维修方法',
    category: '新闻动态',
    publishedAt: '2025-02-07',
    image: '/media/news-maintenance.jpg',
    excerpt: '把自动打磨机常见的电源、磨头、传动和过热问题拆成可排查的维修清单。',
    body: [
      '自动打磨机常见故障通常集中在电源、磨头、传动部件、调速与电机散热几个环节。设备无法启动、转速不稳、异响增加或打磨效果突然变差，往往不是单点问题，而是日常检查不到位后逐步累积出来的结果。',
      '现场排查时建议先从最容易确认的项开始，例如电源连接、插头、电压、磨头磨损和固定状态，再进一步看电机、轴承、皮带、齿轮和调速器。这样可以先排除低成本问题，避免一上来就拆解核心部件。',
      '真正有效的维修策略不是“坏了再修”，而是把清洁、润滑、紧固、散热和试运行检查前置到日常点检表中。这样既能减少突发停机，也能让备件和维护节奏更可控。'
    ],
    bullets: [
      '先查电源、插头、电压和电线，再查电机与调速器。',
      '磨头磨损、固定松动和材质不匹配是高频原因。',
      '建立点检和散热清洁机制，比故障后抢修更有效。'
    ]
  },
  {
    slug: 'casting-grinding-machine-maintenance',
    title: '铸件自动打磨机如何保养和维护',
    category: '新闻动态',
    publishedAt: '2025-02-07',
    image: '/media/product-casting-grinder.jpg',
    excerpt: '围绕清洁、润滑、电气检查和定期校准整理铸件自动打磨机的维护重点。',
    body: [
      '铸件自动打磨机的维护核心在于把粉尘、震动和连续运行带来的损耗控制在可预期范围内。日常保养首先要做好机体表面清洁、磨头检查、润滑补充和电气连接确认，避免小问题在高粉尘环境里迅速放大。',
      '定期维护则应进一步覆盖内部深度清洁、齿轮与皮带磨损检查、电机散热状态确认，以及控制系统稳定性和参数复核。对连续生产工位来说，维护不只是延长寿命，更直接关系到节拍稳定和表面一致性。',
      '从管理角度看，最实用的做法是把“日常保养、周期维护、操作培训”一起标准化。让操作人员知道什么是当天必须做的，什么是周检和月检内容，设备才能在量产场景里真正稳定发挥。'
    ],
    bullets: [
      '每次使用前后检查磨头、紧固件和机体清洁状态。',
      '按周期做内部除尘、传动件检查和润滑补充。',
      '把维护流程写进班组点检和培训制度，减少异常停机。'
    ]
  },
  {
    slug: 'automatic-polishing-machine-applications',
    title: '自动抛光机应用领域',
    category: '企业动态',
    publishedAt: '2025-02-19',
    image: '/media/product-polishing-machine.jpg',
    excerpt: '介绍自动抛光机在机械制造、汽车零部件和金属表面处理中的应用。',
    body: [
      '自动抛光机适合需要稳定光洁度和批量一致性的工件，尤其是在汽车零部件、金属结构件和五金制品加工中更常见。',
      '设备的核心价值在于稳定控制表面质量，减少人工抛光的波动，同时压缩节拍和返工成本。',
      '在选择机型时，应重点看工件形状、产量、目标表面效果以及是否需要非标工装。'
    ]
  },
  {
    slug: 'cnc-polishing-machine-applications',
    title: '数控自动抛光机应用领域',
    category: '企业动态',
    publishedAt: '2025-02-19',
    image: '/media/product-polishing-machine.jpg',
    excerpt: '适合多轴联动、复杂轮廓和一致性要求更高的数控抛光工况。',
    body: [
      '数控自动抛光机更适合几何形状复杂、轨迹控制要求高的工件，通过程序化路径实现更稳定的重复加工。',
      '与普通自动抛光机相比，其优势主要体现在多轴联动、姿态控制和工艺复现能力上。',
      '若企业计划提升产品一致性并逐步沉淀标准工艺，数控机型通常更具长期价值。'
    ]
  },
  {
    slug: 'automatic-cnc-polishing-machine-guide',
    title: '自动数控抛光机如何选型、安装与保养',
    category: '新闻动态',
    publishedAt: '2025-02-19',
    image: '/media/product-polishing-machine.jpg',
    excerpt: '把自动数控抛光机的类型、选购、安装、安全操作和日常保养整理成一篇可执行的参考指南。',
    body: [
      '自动数控抛光机并不是一个单一机型，而是一类通过程序控制抛光路径、速度和工艺参数的设备方案。选型时首先要看工件材质、轮廓复杂度、目标表面效果，以及是否需要连续批量生产。',
      '在采购和安装阶段，建议重点看厂家经验、售后能力、设备稳定性和现场空间条件。设备落地后，安全操作规程、部件紧固、电源检查、齿轮与传动润滑等基础维护，决定了后续能否稳定运行。',
      '如果希望设备长期发挥价值，不能只关注买设备本身，还要同步考虑耗材、日常点检、自动润滑、防尘防护和故障预防机制。把选型、安装、操作和保养一起标准化，才更适合企业持续量产。'
    ],
    bullets: [
      '选型先看工件材质、轮廓、表面效果和产量，再看厂家与售后能力。',
      '安装与启用前要确认电源、防护、紧固件和基础安全操作规程。',
      '齿轮、轴承、润滑、电控和防尘维护是日常保养重点。'
    ]
  }
];

export const videos: VideoItem[] = [
  {
    slug: 'casting-automatic-grinding-video',
    title: '铸件自动打磨机视频展示',
    category: '打磨机器人',
    image: '/media/product-casting-grinder.jpg',
    summary: '展示铸件自动打磨机的典型工位形态和设备运行方式。',
    embedUrl: 'https://player.youku.com/embed/XNTg5NTA2Njc0OA=='
  },
  {
    slug: 'casting-grinder-demo',
    title: '博恩科铸件自动打磨机演示',
    category: '自动打磨机',
    image: '/media/product-casting-grinder.jpg',
    summary: '围绕铸件去飞边、去毛刺和浇冒口清理的演示视频。',
    embedUrl: 'https://player.youku.com/embed/XNTkyNjUwMTA4OA=='
  }
];

export const homepageFaq: FaqItem[] = [
  {
    question: '博恩科主要做什么设备？',
    answer:
      '主要围绕铸件自动打磨机、数控自动抛光机、打磨机器人工作站以及相关非标自动化设备展开。'
  },
  {
    question: '是否支持按工件定制方案？',
    answer:
      '支持。可以根据工件材质、结构、毛刺位置、目标节拍与场地条件定制工装和设备方案。'
  },
  {
    question: '什么情况下更适合自动打磨专机？',
    answer:
      '当工件规格相对集中、产量稳定并且希望重点优化成本和节拍时，自动打磨专机通常更合适。'
  },
  {
    question: '可以先做试样验证吗？',
    answer:
      '可以。建议带工件样品做试样评估，先验证路径、效果和节拍，再确定设备与工艺方向。'
  }
];

export const featuredProductSlugs = [
  'five-axis-cnc-polishing-machine',
  'casting-automatic-grinding-machine',
  'automatic-column-grinding-machine',
  'casting-gate-riser-grinding-machine',
  'metal-grinding-machine',
  'casting-grinding-robot-cell',
  'insulator-cap-grinding-machine',
  'grinding-robot-workstation'
];

export const featuredNewsSlugs = [
  'automatic-grinding-machine-workshop-upgrade',
  'automatic-grinding-machine-usage-guide',
  'automatic-grinding-machine-fault-repair'
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getCaseStudy(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getNewsArticle(slug: string) {
  return newsArticles.find((item) => item.slug === slug);
}

export function getVideo(slug: string) {
  return videos.find((item) => item.slug === slug);
}
