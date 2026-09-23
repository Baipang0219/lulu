'use strict';
/* ============ 图片资源（生成 CDN URL） ============ */
const IMG = {
  dataviz:'https://aka.doubaocdn.com/s/b9dj7mQH2B',
  yungang:'https://aka.doubaocdn.com/s/k35tCDo5vs',
  xuankong:'https://aka.doubaocdn.com/s/l7VMOvvzV8',
  coal:'https://aka.doubaocdn.com/s/4PUnJB2sVs',
  yunnan:'https://aka.doubaocdn.com/s/Utg7BM9dvJ',
  day:'https://aka.doubaocdn.com/s/OUt9Vr6N6H',
  blink:'https://aka.doubaocdn.com/s/UXNEJ2wG90',
  route66:'https://aka.doubaocdn.com/s/0kRa29i4kz',
  monk:'https://aka.doubaocdn.com/s/BtXpXVRLZB',
  canyon:'https://aka.doubaocdn.com/s/UKATmHiHCQ'
};
const ICON = {
  aperture:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.3'><circle cx='12' cy='12' r='9.4'/><path d='M12 3.4l2 6.6 6.6-2-4.8 4.9 4.8 4.9-6.6-2-2 6.6-2-6.6-6.6 2 4.8-4.9-4.8-4.9 6.6 2z'/><circle cx='12' cy='12' r='2.2' fill='currentColor' stroke='none'/></svg>`,
  phone:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.7'><path d='M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z'/></svg>`,
  mail:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.7'><rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/></svg>`,
  arrow:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8'><path d='M5 12h14M13 6l6 6-6 6'/></svg>`,
  up:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8'><path d='M12 5v14M6 11l6-6 6 6'/></svg>`,
  cert:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='9' r='5'/><path d='M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5'/></svg>`,
  award:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='9' r='6'/><path d='M8.5 14.5L7 22l5-3 5 3-1.5-7.5'/></svg>`,
  menu:`<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.7'><path d='M4 7h16M4 12h16M4 17h16'/></svg>`
};

/* ============ 双语内容数据 ============ */
const DATA = {
zh:{
  nav:['关于','经历','校园','作品集','技能','联系'],
  hero:{
    eyebrow:'Portfolio Resume · 个人作品简历',
    name:'张路欣',
    nameEn:'ZHANG LUXIN',
    role:'网络与新媒体',
    roles:['短视频剪辑','新媒体运营','摄影'],
    roleEn:'New Media & Communication · Short-video Editing / Content Operations / Photography',
    tagline:'热爱用镜头捕捉生活、用创意传递情感的 00 后内容创作者。',
    cta1:'查看作品集',
    cta2:'联系我',
    phone:'15003539910',
    email:'1010631266@qq.com',
    photoTag:'证件照 · ID PHOTO',
    photoCap:'出生 2003.02 · 山西阳泉 · 可替换为本人证件照',
    stats:[
      {n:3,unit:'',lab:'段实习经历',en:'Internships'},
      {n:3,unit:'',lab:'项校园经历',en:'Campus Roles'},
      {n:9,unit:'',lab:'组代表作品',en:'Featured Works'},
      {n:8,unit:'',lab:'项荣誉奖项',en:'Honors'}
    ]
  },
  about:{
    no:'FRAME 01',
    title:'关于我',
    en:'About Me',
    lead:'乐观开朗、积极向上的 00 后，具备较强的沟通能力，也有一双善于发现细节的眼睛。',
    p1:'热爱摄影，擅长捕捉生活中的美好瞬间，并通过创意表达情感。相信情怀是生活的一部分，懂得在工作中注入情感，让工作更有意义。',
    p2:'希望以创意与沟通为团队带来新的思路与活力，在内容创作的道路上持续成长。',
    traits:[
      {zh:'沟通力',en:'Communication'},
      {zh:'细节洞察',en:'Eye for Detail'},
      {zh:'摄影',en:'Photography'},
      {zh:'创意表达',en:'Creativity'},
      {zh:'工作注入情感',en:'Passion at Work'},
      {zh:'团队协作',en:'Teamwork'}
    ],
    eduTitle:'教育背景',
    eduEn:'Education',
    edu:[
      {
        school:'香港岭南大学',
        schoolEn:'Lingnan University, Hong Kong',
        major:'艺术科技与商业管理（研究生）',
        majorEn:'Arts Technology & Business Management (Postgraduate)',
        period:'2026.09 入学',
        status:'在读',
        statusEn:'In Progress',
        courses:null
      },
      {
        school:'武汉晴川学院',
        schoolEn:'Wuhan Qingchuan College',
        major:'网络与新媒体',
        majorEn:'Network & New Media',
        period:'2021.09 – 2024.06',
        courses:['新媒体概论','视听语言','传播学原理','市场营销','摄影与技术','融媒体广告','网络信息编辑','公共关系']
      }
    ]
  },
  exp:{
    no:'FRAME 02',
    title:'实习经历',
    en:'Experience',
    sub:'3 段实习 · 从头部直播平台到地方电视台与融媒体中心，完整覆盖短视频制作与新媒体运营链路。',
    items:[
      {
        company:'北京映客科技',
        orgEn:'Inke · Beijing',
        role:'短视频剪辑实习生',
        roleEn:'Short-video Editing Intern',
        period:'2024.06 – 2024.09',
        bullets:[
          {zh:'视频制作：负责短视频后期剪辑，完成素材筛选、剪辑与拼接，确保成品符合品牌风格与质量标准。',en:'Short-video post-production — selected, cut and assembled footage to match brand style and quality standards.'},
          {zh:'创意构思：参与内容创意构思，与团队协作提出优化建议，以剪辑节奏、配乐与特效提升视频吸引力。',en:'Joined creative ideation and optimization, boosting appeal through pacing, music and effects.'},
          {zh:'反馈改进：根据团队与客户反馈持续迭代修改，优化剪辑效果，确保作品达到预期并满足观众需求。',en:'Iterated on videos from team and client feedback, continuously refining edits to meet expectations.'}
        ]
      },
      {
        company:'阳泉市电视台',
        orgEn:'Yangquan TV Station',
        role:'探店视频运营实习生',
        roleEn:'Food-review Video Ops Intern',
        period:'2023.06',
        bullets:[
          {zh:'创作辅助：协助主播完成短视频创作全流程——创意构思、剧本撰写、拍摄与后期制作。',en:'Assisted hosts across the whole creation flow — ideation, scripting, shooting and post-production.'},
          {zh:'探店运营：参与探店视频项目运营，负责项目管理与策划执行。',en:'Ran food-review video projects, covering planning and execution.'},
          {zh:'拍摄协助：搭建拍摄场景、配置设备，协助主播完成拍摄任务。',en:'Set up scenes and equipment, supporting hosts during shoots.'},
          {zh:'筛选编辑：负责短视频内容筛选与编辑，保障内容质量与时效性。',en:'Curated and edited short-video content to ensure quality and timeliness.'},
          {zh:'学习提升：持续学习新技术与行业动态，提升视频制作与运营能力。',en:'Kept learning new tools and industry trends to grow production and ops skills.'}
        ]
      },
      {
        company:'盂县融媒体中心',
        orgEn:'Yuxian Converged Media Center',
        role:'实习生',
        roleEn:'Intern',
        period:'2022.04',
        bullets:[
          {zh:'排版编辑：负责抖音、微信公众号平台内容排版，完成文本、图片与视频的整合编辑。',en:'Laid out content for Douyin and WeChat accounts, integrating text, images and video.'},
          {zh:'设计传播：运用视觉设计技能制作配图与封面，提升品牌形象与传播效果。',en:'Designed graphics and covers to strengthen brand image and reach.'},
          {zh:'分析优化：结合数据分析结果调整排版方案，优化传播效果与用户互动率。',en:'Adjusted layouts from data analysis to improve engagement and reach.'},
          {zh:'拍摄参与：协助记者完成外出拍摄，搭建场景、配置设备并保证影像素材质量。',en:'Assisted reporters on field shoots, ensuring setup, equipment and footage quality.'}
        ]
      }
    ]
  },
  campus:{
    no:'FRAME 03',
    title:'校园经历',
    en:'Campus',
    items:[
      {
        badge:'个人IP运营',
        badgeEn:'Personal IP',
        title:'小红书个人IP账号运营',
        en:'Xiaohongshu Personal IP Account',
        period:'2023.09 – 2023.12',
        bullets:[
          {zh:'深研平台调性，定位学生群体，以平价穿搭主题切入，确立账号风格与内容方向。',en:'Studied the platform, targeted students with affordable-outfit styling, and set the account direction.'},
          {zh:'调研同类账号，收集超千条选题、标题与发布数据，支撑运营策略制定。',en:'Benchmarked 1,000+ similar posts for topics, titles and engagement data to shape strategy.'},
          {zh:'完成拍摄与精剪，打磨文案与封面，保持周更 1–2 篇。',en:'Shot and fine-cut videos, polished copy and covers, posting 1–2 pieces weekly.'},
          {zh:'每日复盘播放量、完播率、互动指数与粉丝净增，持续优化内容策略。',en:'Reviewed views, completion rates, engagement and follower growth daily to optimize content.'}
        ]
      },
      {
        badge:'班级管理',
        badgeEn:'Class Leadership',
        title:'副班长兼心理委员',
        en:'Vice Monitor & Psychology Rep',
        period:'2022.09 – 2025.06',
        bullets:[
          {zh:'及时传达课程通知、处理学生反馈，保障教学流程顺畅。',en:'Delivered course notices and handled student feedback to keep teaching running smoothly.'},
          {zh:'组织班级活动并跟进流程，确保活动顺利进行。',en:'Organized class activities and followed through for smooth execution.'}
        ],
        award:'带领全班荣获「特色团日评比活动」二等奖',
        awardEn:'Led the class to 2nd Prize, Special Youth League Day Contest'
      },
      {
        badge:'学生会',
        badgeEn:'Student Union',
        title:'组织部副部长',
        en:'Vice Director, Organization Dept.',
        period:'2021.09 – 2023.09',
        bullets:[
          {zh:'协调各部门，策划并组织学院学生代表大会。',en:'Coordinated departments to plan and run the college Student Congress.'},
          {zh:'参与新春晚会、夏日嘉年华与两届「金话筒」主持人大赛的筹备策划。',en:'Co-prepared the Spring Gala, Summer Carnival and two Golden Mic hosting contests.'},
          {zh:'大二期间举办为期四个月的团干培训班，组织线上线下活动。',en:'Ran a 4-month training program for Youth League cadres with online and offline sessions.'}
        ]
      }
    ]
  },
  portfolio:{
    no:'FRAME 04',
    title:'作品集',
    en:'Portfolio',
    sub:'3 大类 9 组代表作品 · 点击卡片查看详情',
    filters:['全部','视觉设计','短片作品','摄影作品'],
    typeTags:['视觉设计','短片作品','摄影作品'],
    works:[
      {id:'dataviz',type:0,img:'dataviz',ref:'作品集 P3',
        title:'《搞不懂的审美，穿不了的女装》数据可视化',
        en:'Unwearable Fashion — Data Visualization',
        desc:'聚焦「女装尺码趋小」议题，以词云、散点、气泡图呈现多维数据洞察，发布于院级官方公众号。',
        enDesc:'A data-viz feature on shrinking women』s sizing — word clouds, scatter and bubble charts, published on the college official account.',
        detail:'通过采集平台男女装销量占比、退货原因、话题热度及店铺尺码标注等多维度数据，以词云图、散点图、气泡图等可视化形式，分析「女装尺码趋小」议题及其衍生影响；最终成果发布于院级官方公众号。',
        enDetail:'Collected multi-dimensional data — sales share by gender, return reasons, topic heat and size labeling — and visualized the shrinking-size trend through word clouds, scatter and bubble charts. Published on the college official account.',
        process:'数据采集 → 可视化设计 → 公众号发布',
        enProcess:'Data collection → Visualization design → Publication'},
      {id:'shanxi',type:0,img:'shanxi',ref:'作品集 P5–P6',
        title:'山西文旅系列海报',
        en:'Shanxi Tourism Poster Series',
        desc:'以山西文旅为主题的海报系列，覆盖云冈石窟、应县木塔、悬空寺、雁门关等地标。',
        enDesc:'A travel-poster series celebrating Shanxi landmarks — Yungang Grottoes, Yingxian Wooden Pagoda, Hanging Temple, Yanmen Pass and more.',
        detail:'围绕山西文旅主题进行系列海报设计，从地标建筑中提炼视觉符号，以复古旅行海报的构图与色彩语言呈现，涵盖《看山西》《云冈石窟》《应县木塔》《悬空寺》《雁门关》五张主海报及更多延伸设计。',
        enDetail:'Designed a poster series around Shanxi tourism, distilling landmark architecture into vintage travel-poster compositions — five main posters (See Shanxi, Yungang Grottoes, Yingxian Wooden Pagoda, Hanging Temple, Yanmen Pass) plus extensions.',
        process:'主题调研 → 视觉符号提炼 → 系列化设计',
        enProcess:'Research → Visual icon extraction → Series design'},
      {id:'coal',type:1,img:'coal',ref:'作品集 P8',
        title:'专题报道《「煤」好生活：山西煤矿，点亮希望之光》',
        en:'Feature: Coal & Good Life — Shanxi Coal Mines Light Up Hope',
        role:'导演 / 拍摄 / 后期',
        roleEn:'Director · Cinematography · Editing',
        desc:'聚焦阳泉盂县煤矿产业，以真实镜头记录矿工生活与产业变迁，传递奋斗与希望。',
        enDesc:'A feature on Yuxian`s coal industry — real footage of miners` lives and industrial transformation, carrying a message of resilience and hope.',
        detail:'分三部分呈现：以数据与画面回溯煤矿发展历程；结合玉泉煤业智能化工作人员、「二哈兄弟」及矿工家属访谈强化纪实感；最终展现转型后盂县的崭新面貌。前期梳理网站、政府及行业报告夯实调研基础，赴当地与专业人士深度沟通、实地探访新型达标煤矿，后期独立完成拍摄、脚本、构思与剪辑封装。',
        enDetail:'Structured in three parts: data-driven history of the coal industry; documentary interviews with smart-mine staff, Erha Brothers and miners` families; and the transformed face of Yuxian. Research drew on government and industry reports, on-site visits to modern mines and interviews with professionals; directing, cinematography, scripting and editing were self-completed.',
        process:'调研 → 实地探访 → 拍摄剪辑封装',
        enProcess:'Research → On-site visits → Shooting & editing'},
      {id:'yunnan',type:1,img:'yunnan',ref:'作品集 P9',
        title:'H5《云南一方》',
        en:'H5 A Corner of Yunnan',
        desc:'卡通风格、黄绿主色调的长图 H5，带浏览者云游昆明、大理、香格里拉、普洱。',
        enDesc:'A cartoon-style, yellow-green H5 long-scroll taking viewers through Kunming, Dali, Shangri-La and Pu』s.',
        detail:'基于大量图片素材分析，采用卡通风格与黄绿主色调，以长图拖动形式呈现。聚焦昆明、大理、香格里拉、普洱等地，通过特色建筑与地道美食吸引浏览者，搭配各地区民族服饰人物引领，普及民族文化认知；辅以简洁文字介绍与实用攻略，帮助用户刷新对云南的印象。',
        enDetail:'Built from extensive image research, this H5 uses a cartoon style with yellow-green tones and a drag-to-scroll layout. Landmark architecture and local food draw viewers in, ethnic-costume characters guide the journey, and concise intros plus practical tips refresh users` impression of Yunnan.',
        process:'素材分析 → 风格设定 → 长图设计',
        enProcess:'Image research → Style direction → Long-scroll design'},
      {id:'day',type:2,img:'day',ref:'作品集 P10–P11',
        title:'摄影《DAY》',
        en:'Photography DAY',
        desc:'以「一天」为题的日常纪实系列，捕捉生活中的光影与瞬间。',
        enDesc:'A daily-life documentary series themed around a day, capturing light and fleeting moments.',
        detail:'以「一天」为线索的纪实摄影系列，记录日常生活中的光线、人物与瞬间情绪，追求自然光下的真实质感。',
        enDetail:'A documentary series following a day — light, people and fleeting moods captured in natural light with an authentic feel.',
        process:'选题 → 跟拍 → 后期调色',
        enProcess:'Concept → Follow-shooting → Color grading'},
      {id:'blink',type:2,img:'blink',ref:'作品集 P12',
        title:'摄影《眨眼间》',
        en:'Photography In the Blink of an Eye',
        desc:'定格「眨眼之间」的瞬间，留住流动时光中的细节与情绪。',
        enDesc:'Freezing moments in the blink of an eye — details and emotions held in flowing time.',
        detail:'以「眨眼间」为主题的艺术摄影，利用光影拖影与动态模糊捕捉转瞬即逝的意象，表达时间流逝中的情绪。',
        enDetail:'An artistic series using light trails and motion blur to capture fleeting imagery and the emotions of passing time.',
        process:'意象构思 → 快门实验 → 选片精修',
        enProcess:'Concept → Shutter experiments → Selection & retouch'},
      {id:'route66',type:2,img:'route66',ref:'作品集 P14',
        title:'人文风景 · Route 66',
        en:'Human Landscapes · Route 66',
        desc:'公路旅行摄影，记录 66 号公路沿线的人文与风景。',
        enDesc:'Road-trip photography along Route 66 — people, roadside life and desert scenery.',
        detail:'沿美国 66 号公路拍摄的旅行摄影，聚焦沿线汽车旅馆、荒漠公路与黄昏光线，呈现公路文化的人文温度。',
        enDetail:'Shot along America』s Route 66 — motels, desert highways and dusk light, capturing the human warmth of road culture.',
        process:'公路探访 → 沿途抓拍 → 胶片调色',
        enProcess:'Road trip → On-the-road shooting → Film grading'},
      {id:'monk',type:2,img:'monk',ref:'作品集 P14',
        title:'人文风景 · 僧人街巷',
        en:'Human Landscapes · Monk in the Alley',
        desc:'街头纪实，记录僧袍身影穿行市井街巷的瞬间。',
        enDesc:'Street documentary — a monk`s robe moving through the bustle of an old-town market street.',
        detail:'街头纪实摄影，以僧人行走于古城街巷为线索，记录市井烟火与人文气息的交融。',
        enDetail:'A street-documentary shot tracing a monk through an old-town alley, blending everyday bustle with human warmth.',
        process:'街巷观察 → 决定性瞬间 → 人文调色',
        enProcess:'Observation → Decisive moment → Humanist grading'},
      {id:'canyon',type:2,img:'canyon',ref:'作品集 P14',
        title:'人文风景 · 峡谷',
        en:'Human Landscapes · Canyon',
        desc:'自然风景摄影，呈现峡谷的壮阔与光影层次。',
        enDesc:'Landscape photography — the grandeur and layered light of a canyon.',
        detail:'以壮阔峡谷地貌为主题的风景摄影，捕捉黄昏光线下的岩壁层次与光影变化。',
        enDetail:'A landscape study of canyon geology, capturing rock layers and shifting light at dusk.',
        process:'踩点 → 光线等待 → 全景接片',
        enProcess:'Scouting → Waiting for light → Panorama stitching'}
    ]
  },
  skills:{
    no:'FRAME 05',
    title:'技能与荣誉',
    en:'Skills & Honors',
    certTitle:'技能证书',
    certEn:'Certificates',
    certs:[
      {zh:'大学英语四级',en:'CET-4'},
      {zh:'普通话水平测试等级证书',en:'Mandarin Proficiency Certificate'},
      {zh:'计算机二级',en:'NCRE Level 2'}
    ],
    abTitle:'专业能力',
    abEn:'Abilities',
    abilities:[
      {zh:'视频剪辑',en:'Video Editing'},
      {zh:'短视频运营',en:'Short-video Ops'},
      {zh:'摄影摄像',en:'Photography & Filming'},
      {zh:'内容策划',en:'Content Planning'},
      {zh:'平面设计',en:'Graphic Design'},
      {zh:'排版编辑',en:'Layout & Editing'},
      {zh:'数据分析',en:'Data Analysis'},
      {zh:'H5 制作',en:'H5 Production'},
      {zh:'项目管理',en:'Project Management'},
      {zh:'沟通表达',en:'Communication'},
      {zh:'团队协作',en:'Teamwork'},
      {zh:'创意构思',en:'Creative Ideation'}
    ],
    hnTitle:'荣誉奖项',
    hnEn:'Honors & Awards',
    honors:[
      {y:'2021',zh:'心理情景剧大赛 三等奖',en:'3rd Prize, Psychodrama Contest'},
      {y:'2021',zh:'「社会活动积极分子」',en:'Active Social Participant'},
      {y:'2022',zh:'「优秀学生干部」',en:'Outstanding Student Cadre'},
      {y:'2022',zh:'「社会活动积极分子」',en:'Active Social Participant'},
      {y:'2023',zh:'「传媒印象」摄影大赛《回家》最佳人气奖',en:'Best Popularity Award, Home — Chuanmei Impression Photo Contest'},
      {y:'2023',zh:'「优秀学生干部」',en:'Outstanding Student Cadre'},
      {y:'2024',zh:'「优秀共青团干部」',en:'Outstanding CYLC Cadre'},
      {y:'2025',zh:'「优秀毕业生」',en:'Outstanding Graduate'}
    ]
  },
  contact:{
    no:'FRAME 06',
    title:'联系我',
    en:'Contact',
    line:'感谢你的浏览，期待与你一起创造好内容。',
    lineEn:'Thanks for visiting — looking forward to creating great content together.',
    btnPhone:'拨打电话',
    btnMail:'发送邮件',
    footer:'© 2026 张路欣 ZHANG LUXIN · 交互式个人简历 · Hand-coded with HTML/CSS/JS'
  }
},
en:{
  nav:['About','Experience','Campus','Portfolio','Skills','Contact'],
  hero:{
    eyebrow:'Personal Portfolio · Resume',
    name:'ZHANG LUXIN',
    nameEn:'张路欣 Zhang Luxin',
    role:'Network & New Media',
    roles:['Short-video Editing','Content Operations','Photography'],
    roleEn:'网络与新媒体 · 短视频剪辑 / 新媒体运营 / 摄影',
    tagline:'A post-00s content creator who captures life through the lens and tells stories with creativity.',
    cta1:'View Portfolio',
    cta2:'Contact Me',
    phone:'15003539910',
    email:'1010631266@qq.com',
    photoTag:'ID PHOTO',
    photoCap:'Born Feb 2003 · Yangquan, Shanxi · Replace with your ID photo',
    stats:[
      {n:3,unit:'',lab:'Internships',en:'段实习经历'},
      {n:3,unit:'',lab:'Campus Roles',en:'项校园经历'},
      {n:9,unit:'',lab:'Featured Works',en:'组代表作品'},
      {n:8,unit:'',lab:'Honors',en:'项荣誉奖项'}
    ]
  },
  about:{
    no:'FRAME 01',
    title:'About Me',
    en:'关于我',
    lead:'An optimistic, energetic post-00s creator with strong communication skills and an eye for detail.',
    p1:'Passionate about photography, I love capturing life`s beautiful moments and expressing emotion through creativity. I believe passion is part of life — I bring heart into work to make it more meaningful.',
    p2:'I aim to bring fresh ideas and energy to a team through creativity and communication, growing steadily on the content-creation path.',
    traits:[
      {zh:'沟通力',en:'Communication'},
      {zh:'细节洞察',en:'Eye for Detail'},
      {zh:'摄影',en:'Photography'},
      {zh:'创意表达',en:'Creativity'},
      {zh:'工作注入情感',en:'Passion at Work'},
      {zh:'团队协作',en:'Teamwork'}
    ],
    eduTitle:'Education',
    eduEn:'教育背景',
    edu:[
      {
        school:'Lingnan University, Hong Kong',
        schoolEn:'香港岭南大学',
        major:'Arts Technology & Business Management (Postgraduate)',
        majorEn:'艺术科技与商业管理（研究生）',
        period:'Enrolled Sep 2026',
        status:'In Progress',
        statusEn:'在读',
        courses:null
      },
      {
        school:'Wuhan Qingchuan College',
        schoolEn:'武汉晴川学院',
        major:'Network & New Media',
        majorEn:'网络与新媒体',
        period:'Sep 2021 – Jun 2024',
        courses:['New Media Studies','Audiovisual Language','Communication Theory','Marketing','Photography & Tech','Converged Media Ads','Online Information Editing','Public Relations']
      }
    ]
  },
  exp:{
    no:'FRAME 02',
    title:'Experience',
    en:'实习经历',
    sub:'Three internships — from a leading livestream platform to a local TV station and a converged media center, covering the full short-video and new-media workflow.',
    items:[
      {
        company:'Inke · Beijing',
        orgEn:'北京映客科技',
        role:'Short-video Editing Intern',
        roleEn:'短视频剪辑实习生',
        period:'Jun – Sep 2024',
        bullets:[
          {en:'Short-video post-production — selected, cut and assembled footage to match brand style and quality standards.',zh:'视频制作：负责短视频后期剪辑，完成素材筛选、剪辑与拼接，确保成品符合品牌风格与质量标准。'},
          {en:'Joined creative ideation and optimization, boosting appeal through pacing, music and effects.',zh:'创意构思：参与内容创意构思，与团队协作提出优化建议，以剪辑节奏、配乐与特效提升视频吸引力。'},
          {en:'Iterated on videos from team and client feedback, continuously refining edits to meet expectations.',zh:'反馈改进：根据团队与客户反馈持续迭代修改，优化剪辑效果，确保作品达到预期并满足观众需求。'}
        ]
      },
      {
        company:'Yangquan TV Station',
        orgEn:'阳泉市电视台',
        role:'Food-review Video Ops Intern',
        roleEn:'探店视频运营实习生',
        period:'Jun 2023',
        bullets:[
          {en:'Assisted hosts across the whole creation flow — ideation, scripting, shooting and post-production.',zh:'创作辅助：协助主播完成短视频创作全流程——创意构思、剧本撰写、拍摄与后期制作。'},
          {en:'Ran food-review video projects, covering planning and execution.',zh:'探店运营：参与探店视频项目运营，负责项目管理与策划执行。'},
          {en:'Set up scenes and equipment, supporting hosts during shoots.',zh:'拍摄协助：搭建拍摄场景、配置设备，协助主播完成拍摄任务。'},
          {en:'Curated and edited short-video content to ensure quality and timeliness.',zh:'筛选编辑：负责短视频内容筛选与编辑，保障内容质量与时效性。'},
          {en:'Kept learning new tools and industry trends to grow production and ops skills.',zh:'学习提升：持续学习新技术与行业动态，提升视频制作与运营能力。'}
        ]
      },
      {
        company:'Yuxian Converged Media Center',
        orgEn:'盂县融媒体中心',
        role:'Intern',
        roleEn:'实习生',
        period:'Apr 2022',
        bullets:[
          {en:'Laid out content for Douyin and WeChat accounts, integrating text, images and video.',zh:'排版编辑：负责抖音、微信公众号平台内容排版，完成文本、图片与视频的整合编辑。'},
          {en:'Designed graphics and covers to strengthen brand image and reach.',zh:'设计传播：运用视觉设计技能制作配图与封面，提升品牌形象与传播效果。'},
          {en:'Adjusted layouts from data analysis to improve engagement and reach.',zh:'分析优化：结合数据分析结果调整排版方案，优化传播效果与用户互动率。'},
          {en:'Assisted reporters on field shoots, ensuring setup, equipment and footage quality.',zh:'拍摄参与：协助记者完成外出拍摄，搭建场景、配置设备并保证影像素材质量。'}
        ]
      }
    ]
  },
  campus:{
    no:'FRAME 03',
    title:'Campus',
    en:'校园经历',
    items:[
      {
        badge:'Personal IP',
        badgeEn:'个人IP运营',
        title:'Xiaohongshu Personal IP Account',
        en:'小红书个人IP账号运营',
        period:'Sep – Dec 2023',
        bullets:[
          {en:'Studied the platform, targeted students with affordable-outfit styling, and set the account direction.',zh:'深研平台调性，定位学生群体，以平价穿搭主题切入，确立账号风格与内容方向。'},
          {en:'Benchmarked 1,000+ similar posts for topics, titles and engagement data to shape strategy.',zh:'调研同类账号，收集超千条选题、标题与发布数据，支撑运营策略制定。'},
          {en:'Shot and fine-cut videos, polished copy and covers, posting 1–2 pieces weekly.',zh:'完成拍摄与精剪，打磨文案与封面，保持周更 1–2 篇。'},
          {en:'Reviewed views, completion rates, engagement and follower growth daily to optimize content.',zh:'每日复盘播放量、完播率、互动指数与粉丝净增，持续优化内容策略。'}
        ]
      },
      {
        badge:'Class Leadership',
        badgeEn:'班级管理',
        title:'Vice Monitor & Psychology Rep',
        en:'副班长兼心理委员',
        period:'Sep 2022 – Jun 2025',
        bullets:[
          {en:'Delivered course notices and handled student feedback to keep teaching running smoothly.',zh:'及时传达课程通知、处理学生反馈，保障教学流程顺畅。'},
          {en:'Organized class activities and followed through for smooth execution.',zh:'组织班级活动并跟进流程，确保活动顺利进行。'}
        ],
        award:'Led the class to 2nd Prize, Special Youth League Day Contest',
        awardEn:'带领全班荣获「特色团日评比活动」二等奖'
      },
      {
        badge:'Student Union',
        badgeEn:'学生会',
        title:'Vice Director, Organization Dept.',
        en:'组织部副部长',
        period:'Sep 2021 – Sep 2023',
        bullets:[
          {en:'Coordinated departments to plan and run the college Student Congress.',zh:'协调各部门，策划并组织学院学生代表大会。'},
          {en:'Co-prepared the Spring Gala, Summer Carnival and two Golden Mic hosting contests.',zh:'参与新春晚会、夏日嘉年华与两届「金话筒」主持人大赛的筹备策划。'},
          {en:'Ran a 4-month training program for Youth League cadres with online and offline sessions.',zh:'大二期间举办为期四个月的团干培训班，组织线上线下活动。'}
        ]
      }
    ]
  },
  portfolio:{
    no:'FRAME 04',
    title:'Portfolio',
    en:'作品集',
    sub:'9 featured works across 3 categories · click a card for details',
    filters:['All','Visual Design','Video Works','Photography'],
    typeTags:['Visual Design','Video Works','Photography'],
    works:[
      {id:'dataviz',type:0,img:'dataviz',ref:'Portfolio P3',
        title:'Unwearable Fashion — Data Visualization',
        en:'《搞不懂的审美，穿不了的女装》数据可视化',
        desc:'A data-viz feature on shrinking women』s sizing — word clouds, scatter and bubble charts, published on the college official account.',
        enDesc:'聚焦「女装尺码趋小」议题，以词云、散点、气泡图呈现多维数据洞察，发布于院级官方公众号。',
        detail:'Collected multi-dimensional data — sales share by gender, return reasons, topic heat and size labeling — and visualized the shrinking-size trend through word clouds, scatter and bubble charts. Published on the college official account.',
        enDetail:'通过采集平台男女装销量占比、退货原因、话题热度及店铺尺码标注等多维度数据，以词云图、散点图、气泡图等可视化形式，分析「女装尺码趋小」议题及其衍生影响；最终成果发布于院级官方公众号。',
        process:'Data collection → Visualization design → Publication',
        enProcess:'数据采集 → 可视化设计 → 公众号发布'},
      {id:'shanxi',type:0,img:'shanxi',ref:'Portfolio P5–P6',
        title:'Shanxi Tourism Poster Series',
        en:'山西文旅系列海报',
        desc:'A travel-poster series celebrating Shanxi landmarks — Yungang Grottoes, Yingxian Wooden Pagoda, Hanging Temple, Yanmen Pass and more.',
        enDesc:'以山西文旅为主题的海报系列，覆盖云冈石窟、应县木塔、悬空寺、雁门关等地标。',
        detail:'Designed a poster series around Shanxi tourism, distilling landmark architecture into vintage travel-poster compositions — five main posters (See Shanxi, Yungang Grottoes, Yingxian Wooden Pagoda, Hanging Temple, Yanmen Pass) plus extensions.',
        enDetail:'围绕山西文旅主题进行系列海报设计，从地标建筑中提炼视觉符号，以复古旅行海报的构图与色彩语言呈现，涵盖《看山西》《云冈石窟》《应县木塔》《悬空寺》《雁门关》五张主海报及更多延伸设计。',
        process:'Research → Visual icon extraction → Series design',
        enProcess:'主题调研 → 视觉符号提炼 → 系列化设计'},
      {id:'coal',type:1,img:'coal',ref:'Portfolio P8',
        title:'Feature: Coal & Good Life — Shanxi Coal Mines Light Up Hope',
        en:'专题报道《「煤」好生活：山西煤矿，点亮希望之光》',
        role:'Director · Cinematography · Editing',
        roleEn:'导演 / 拍摄 / 后期',
        desc:'A feature on Yuxian`s coal industry — real footage of miners` lives and industrial transformation, carrying a message of resilience and hope.',
        enDesc:'聚焦阳泉盂县煤矿产业，以真实镜头记录矿工生活与产业变迁，传递奋斗与希望。',
        detail:'Structured in three parts: data-driven history of the coal industry; documentary interviews with smart-mine staff, Erha Brothers and miners` families; and the transformed face of Yuxian. Research drew on government and industry reports, on-site visits to modern mines and interviews with professionals; directing, cinematography, scripting and editing were self-completed.',
        enDetail:'分三部分呈现：以数据与画面回溯煤矿发展历程；结合玉泉煤业智能化工作人员、「二哈兄弟」及矿工家属访谈强化纪实感；最终展现转型后盂县的崭新面貌。前期梳理网站、政府及行业报告夯实调研基础，赴当地与专业人士深度沟通、实地探访新型达标煤矿，后期独立完成拍摄、脚本、构思与剪辑封装。',
        process:'Research → On-site visits → Shooting & editing',
        enProcess:'调研 → 实地探访 → 拍摄剪辑封装'},
      {id:'yunnan',type:1,img:'yunnan',ref:'Portfolio P9',
        title:'H5 A Corner of Yunnan',
        en:'H5《云南一方》',
        desc:'A cartoon-style, yellow-green H5 long-scroll taking viewers through Kunming, Dali, Shangri-La and Pu』s.',
        enDesc:'卡通风格、黄绿主色调的长图 H5，带浏览者云游昆明、大理、香格里拉、普洱。',
        detail:'Built from extensive image research, this H5 uses a cartoon style with yellow-green tones and a drag-to-scroll layout. Landmark architecture and local food draw viewers in, ethnic-costume characters guide the journey, and concise intros plus practical tips refresh users` impression of Yunnan.',
        enDetail:'基于大量图片素材分析，采用卡通风格与黄绿主色调，以长图拖动形式呈现。聚焦昆明、大理、香格里拉、普洱等地，通过特色建筑与地道美食吸引浏览者，搭配各地区民族服饰人物引领，普及民族文化认知；辅以简洁文字介绍与实用攻略，帮助用户刷新对云南的印象。',
        process:'Image research → Style direction → Long-scroll design',
        enProcess:'素材分析 → 风格设定 → 长图设计'},
      {id:'day',type:2,img:'day',ref:'Portfolio P10–P11',
        title:'Photography DAY',
        en:'摄影《DAY》',
        desc:'A daily-life documentary series themed around a day, capturing light and fleeting moments.',
        enDesc:'以「一天」为题的日常纪实系列，捕捉生活中的光影与瞬间。',
        detail:'A documentary series following a day — light, people and fleeting moods captured in natural light with an authentic feel.',
        enDetail:'以「一天」为线索的纪实摄影系列，记录日常生活中的光线、人物与瞬间情绪，追求自然光下的真实质感。',
        process:'Concept → Follow-shooting → Color grading',
        enProcess:'选题 → 跟拍 → 后期调色'},
      {id:'blink',type:2,img:'blink',ref:'Portfolio P12',
        title:'Photography In the Blink of an Eye',
        en:'摄影《眨眼间》',
        desc:'Freezing moments in the blink of an eye — details and emotions held in flowing time.',
        enDesc:'定格「眨眼之间」的瞬间，留住流动时光中的细节与情绪。',
        detail:'An artistic series using light trails and motion blur to capture fleeting imagery and the emotions of passing time.',
        enDetail:'以「眨眼间」为主题的艺术摄影，利用光影拖影与动态模糊捕捉转瞬即逝的意象，表达时间流逝中的情绪。',
        process:'Concept → Shutter experiments → Selection & retouch',
        enProcess:'意象构思 → 快门实验 → 选片精修'},
      {id:'route66',type:2,img:'route66',ref:'Portfolio P14',
        title:'Human Landscapes · Route 66',
        en:'人文风景 · Route 66',
        desc:'Road-trip photography along Route 66 — people, roadside life and desert scenery.',
        enDesc:'公路旅行摄影，记录 66 号公路沿线的人文与风景。',
        detail:'Shot along America』s Route 66 — motels, desert highways and dusk light, capturing the human warmth of road culture.',
        enDetail:'沿美国 66 号公路拍摄的旅行摄影，聚焦沿线汽车旅馆、荒漠公路与黄昏光线，呈现公路文化的人文温度。',
        process:'Road trip → On-the-road shooting → Film grading',
        enProcess:'公路探访 → 沿途抓拍 → 胶片调色'},
      {id:'monk',type:2,img:'monk',ref:'Portfolio P14',
        title:'Human Landscapes · Monk in the Alley',
        en:'人文风景 · 僧人街巷',
        desc:'Street documentary — a monk`s robe moving through the bustle of an old-town market street.',
        enDesc:'街头纪实，记录僧袍身影穿行市井街巷的瞬间。',
        detail:'A street-documentary shot tracing a monk through an old-town alley, blending everyday bustle with human warmth.',
        enDetail:'街头纪实摄影，以僧人行走于古城街巷为线索，记录市井烟火与人文气息的交融。',
        process:'Observation → Decisive moment → Humanist grading',
        enProcess:'街巷观察 → 决定性瞬间 → 人文调色'},
      {id:'canyon',type:2,img:'canyon',ref:'Portfolio P14',
        title:'Human Landscapes · Canyon',
        en:'人文风景 · 峡谷',
        desc:'Landscape photography — the grandeur and layered light of a canyon.',
        enDesc:'自然风景摄影，呈现峡谷的壮阔与光影层次。',
        detail:'A landscape study of canyon geology, capturing rock layers and shifting light at dusk.',
        enDetail:'以壮阔峡谷地貌为主题的风景摄影，捕捉黄昏光线下的岩壁层次与光影变化。',
        process:'Scouting → Waiting for light → Panorama stitching',
        enProcess:'踩点 → 光线等待 → 全景接片'}
    ]
  },
  skills:{
    no:'FRAME 05',
    title:'Skills & Honors',
    en:'技能与荣誉',
    certTitle:'Certificates',
    certEn:'技能证书',
    certs:[
      {en:'CET-4',zh:'大学英语四级'},
      {en:'Mandarin Proficiency Certificate',zh:'普通话水平测试等级证书'},
      {en:'NCRE Level 2',zh:'计算机二级'}
    ],
    abTitle:'Abilities',
    abEn:'专业能力',
    abilities:[
      {en:'Video Editing',zh:'视频剪辑'},
      {en:'Short-video Ops',zh:'短视频运营'},
      {en:'Photography & Filming',zh:'摄影摄像'},
      {en:'Content Planning',zh:'内容策划'},
      {en:'Graphic Design',zh:'平面设计'},
      {en:'Layout & Editing',zh:'排版编辑'},
      {en:'Data Analysis',zh:'数据分析'},
      {en:'H5 Production',zh:'H5 制作'},
      {en:'Project Management',zh:'项目管理'},
      {en:'Communication',zh:'沟通表达'},
      {en:'Teamwork',zh:'团队协作'},
      {en:'Creative Ideation',zh:'创意构思'}
    ],
    hnTitle:'Honors & Awards',
    hnEn:'荣誉奖项',
    honors:[
      {y:'2021',en:'3rd Prize, Psychodrama Contest',zh:'心理情景剧大赛 三等奖'},
      {y:'2021',en:'Active Social Participant',zh:'「社会活动积极分子」'},
      {y:'2022',en:'Outstanding Student Cadre',zh:'「优秀学生干部」'},
      {y:'2022',en:'Active Social Participant',zh:'「社会活动积极分子」'},
      {y:'2023',en:'Best Popularity Award, Home — Chuanmei Impression Photo Contest',zh:'「传媒印象」摄影大赛《回家》最佳人气奖'},
      {y:'2023',en:'Outstanding Student Cadre',zh:'「优秀学生干部」'},
      {y:'2024',en:'Outstanding CYLC Cadre',zh:'「优秀共青团干部」'},
      {y:'2025',en:'Outstanding Graduate',zh:'「优秀毕业生」'}
    ]
  },
  contact:{
    no:'FRAME 06',
    title:'Contact',
    en:'联系我',
    line:'Thanks for visiting — looking forward to creating great content together.',
    lineEn:'感谢你的浏览，期待与你一起创造好内容。',
    btnPhone:'Call Me',
    btnMail:'Send Email',
    footer:'© 2026 ZHANG LUXIN · Interactive Resume · Hand-coded with HTML/CSS/JS'
  }
}
};

/* ============ 渲染 ============ */
let lang = 'zh';
let filter = 0;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
try{ lang = localStorage.getItem('zlx-lang') || 'zh'; }catch(e){}

function T(d){ return DATA[lang][d]; }

function bi(main, sub, cls){
  return `<span class='`+(cls||'main')+`'>`+main+`</span><span class='sub'>`+sub+`</span>`;
}

function renderHeader(){
  const d = T('nav');
  const links = ['about','exp','campus','portfolio','skills','contact'].map((id,i)=>
    `<a href='#`+id+`' data-nav='`+id+`' class='`+(i===0?'active':'')+`'>`+d[i]+`</a>`).join('');
  return `<header class='topbar'><div class='container topbar-inner'>`+
    `<a class='brand' href='#top' data-nav='top'>`+ICON.aperture+`<span class='brand-name'>张路欣<em>ZHANG LUXIN</em></span></a>`+
    `<nav class='nav'>`+links+`</nav>`+
    `<div style='display:flex;align-items:center;gap:12px'>`+
      `<div class='lang'>`+
        `<button data-lang='zh' class='`+(lang==='zh'?'on':'')+`'>中</button>`+
        `<button data-lang='en' class='`+(lang==='en'?'on':'')+`'>EN</button>`+
      `</div>`+
      `<button class='burger' data-burger aria-label='Menu'>`+ICON.menu+`</button>`+
    `</div>`+
  `</div></header>`+
  `<div class='mnav' data-mnav>`+d.map((x,i)=>`<a href='#`+['about','exp','campus','portfolio','skills','contact'][i]+`' data-nav='`+['about','exp','campus','portfolio','skills','contact'][i]+`'>`+x+`</a>`).join('')+`</div>`;
}

function renderHero(){
  const h = T('hero');
  const roleSep = lang==='zh' ? `<span class='sep'>/</span>` : ` &middot; `;
  return `<section class='hero' id='top'><div class='container'>`+
    `<div class='hero-inner'>`+
      `<div class='hero-text reveal'>`+
        `<p class='eyebrow'>`+h.eyebrow+`</p>`+
        `<h1 class='hero-name'>`+h.name+`<span class='en'>`+h.nameEn+`</span></h1>`+
        `<p class='role'>`+h.role+`<span class='sep'>·</span>`+h.roles.join(roleSep)+`</p>`+
        `<p class='role-en'>`+h.roleEn+`</p>`+
        `<p class='tagline'>「`+h.tagline+`」</p>`+
        `<div class='hero-cta'>`+
          `<a class='btn btn-primary' href='#portfolio'>`+h.cta1+ICON.arrow+`</a>`+
          `<a class='btn btn-ghost' href='#contact'>`+h.cta2+`</a>`+
        `</div>`+
        `<div class='hero-meta'>`+
          `<span class='chip'>`+ICON.phone+`<span>电话 <b>`+h.phone+`</b></span></span>`+
          `<span class='chip'>`+ICON.mail+`<span>邮箱 <b>`+h.email+`</b></span></span>`+
        `</div>`+
      `</div>`+
      `<div class='vf-wrap reveal'>`+
        `<div class='vf'>`+
          `<i class='c c1'></i><i class='c c2'></i><i class='c c3'></i><i class='c c4'></i>`+
          ICON.aperture+
          `<span class='mono'>ZLX</span>`+
          `<span class='mono-cap'>`+h.photoTag+`</span>`+
        `</div>`+
        `<p class='vf-cap'>`+h.photoCap+`</p>`+
      `</div>`+
    `</div>`+
    `<div class='stats reveal'>`+
      h.stats.map(s=>`<div class='stat'><div class='stat-num'><span data-count='`+s.n+`'>0</span>`+s.unit+`</div><div class='stat-lab'>`+s.lab+` · `+s.en+`</div></div>`).join('')+
    `</div>`+
  `</div></section>`;
}

function renderAbout(){
  const a = T('about');
  return `<section class='section' id='about'><div class='container'>`+
    `<div class='sec-head reveal'><div class='sec-no'>`+a.no+`</div><h2 class='sec-title'>`+a.title+`<em>`+a.en+`</em></h2></div>`+
    `<div class='about-grid'>`+
      `<div class='about-text reveal'>`+
        `<p class='lead'>`+a.lead+`</p>`+
        `<p>`+a.p1+`</p>`+
        `<p>`+a.p2+`</p>`+
        `<div class='traits'>`+a.traits.map(t=>`<span class='trait'>`+t.zh+` <b>`+t.en+`</b></span>`).join('')+`</div>`+
      `</div>`+
      `<div class='edu reveal'>`+
        a.edu.map(e=>{
          var badge = ``;
          if(e.status){ badge = `<span class='edu-status'>`+e.status+` · `+e.statusEn+`</span>`; }
          var courseBox = ``;
          if(e.courses){ courseBox = `<div class='edu-courses'>`+e.courses.map(function(c){return `<span>`+c+`</span>`;}).join(``)+`</div>`; }
          return `<div class='edu-item'>`+
            `<div class='edu-head'>`+
              `<span class='edu-school'>`+e.school+`</span>`+
              badge+
              `<span class='edu-major'>`+e.major+` · `+e.majorEn+`</span>`+
              `<span class='edu-period'>`+e.period+`</span>`+
            `</div>`+
            courseBox+
          `</div>`;
        }).join(``)+
      `</div>`+
    `</div>`+
  `</div></section>`;
}

function renderExp(){
  const e = T('exp');
  const items = e.items.map(it=>
    `<div class='tl-item reveal'>`+
      `<div class='tl-head'>`+
        `<h3 class='tl-company'>`+it.company+`<span class='org-en'>`+it.orgEn+`</span></h3>`+
        `<span class='tl-period'>`+it.period+`</span>`+
      `</div>`+
      `<p class='tl-role'><b>`+it.role+`</b> · `+it.roleEn+`</p>`+
      `<ul class='tl-bullets'>`+it.bullets.map(b=>`<li>`+b[lang]+`<span class='sub'>`+b[lang==='zh'?'en':'zh']+`</span></li>`).join('')+`</ul>`+
    `</div>`).join('');
  return `<section class='section' id='exp'><div class='container'>`+
    `<div class='sec-head reveal'><div class='sec-no'>`+e.no+`</div><h2 class='sec-title'>`+e.title+`<em>`+e.en+`</em></h2><p class='sec-sub'>`+e.sub+`</p></div>`+
    `<div class='tl'>`+items+`</div>`+
  `</div></section>`;
}

function renderCampus(){
  const c = T('campus');
  const cards = c.items.map(it=>{
    var award = ``;
    if(it.award){ award = `<p class='cp-award'><b>`+it.award+`</b><span class='sub'>`+it.awardEn+`</span></p>`; }
    return `<div class='cp-card reveal'>`+
      `<span class='cp-badge'>`+it.badge+`</span>`+
      `<h4>`+it.title+`</h4>`+
      `<p class='cp-en'>`+it.en+`</p>`+
      `<p class='cp-period'>`+it.period+`</p>`+
      `<ul>`+it.bullets.map(b=>`<li>`+b[lang]+`<span class='sub'>`+b[lang==='zh'?'en':'zh']+`</span></li>`).join('')+`</ul>`+
      award+
    `</div>`;
  }).join(``);
  return `<section class='section' id='campus'><div class='container'>`+
    `<div class='sec-head reveal'><div class='sec-no'>`+c.no+`</div><h2 class='sec-title'>`+c.title+`<em>`+c.en+`</em></h2></div>`+
    `<div class='campus-grid'>`+cards+`</div>`+
  `</div></section>`;
}

function renderWorks(){
  const p = T('portfolio');
  const list = p.works.filter(w=> filter===0 || w.type===filter-1);
  return `<div class='wk-grid'>`+list.map(w=>{
    const collage = w.id==='shanxi';
    let media = `<img src='`+IMG[w.img]+`' alt='`+w.title+`' loading='lazy'>`;
    if(collage){
      media = `<img src='`+IMG.yungang+`' alt='`+w.title+`' loading='lazy'>`+
              `<img src='`+IMG.xuankong+`' alt='`+w.title+`' loading='lazy'>`;
    }
    return `<article class='wk reveal' data-wk='`+w.id+`' role='button' tabindex='0' aria-label='`+w.title+`'>`+
      `<div class='wk-media`+(collage?' collage':'')+`'>`+media+`<span class='wk-tag'>`+p.typeTags[w.type]+`</span></div>`+
      `<div class='wk-body'>`+
        `<h4>`+w.title+`</h4>`+
        `<p class='wk-en'>`+w.en+`</p>`+
        `<p class='wk-desc'>`+w.desc+`</p>`+
        `<div class='wk-foot'><span class='wk-ref'>`+w.ref+`</span><span class='wk-more'>`+(lang==='zh'?'查看详情':'Details')+` `+ICON.arrow+`</span></div>`+
      `</div>`+
    `</article>`;
  }).join('')+`</div>`;
}

function renderPortfolio(){
  const p = T('portfolio');
  return `<section class='section' id='portfolio'><div class='container'>`+
    `<div class='sec-head reveal'><div class='sec-no'>`+p.no+`</div><h2 class='sec-title'>`+p.title+`<em>`+p.en+`</em></h2><p class='sec-sub'>`+p.sub+`</p></div>`+
    `<div class='filters reveal'>`+p.filters.map((f,i)=>`<button class='fbtn `+(i===filter?'on':'')+`' data-filter='`+i+`'>`+f+`</button>`).join('')+`</div>`+
    `<div id='works'>`+renderWorks()+`</div>`+
  `</div></section>`;
}

function renderSkills(){
  const s = T('skills');
  return `<section class='section' id='skills'><div class='container'>`+
    `<div class='sec-head reveal'><div class='sec-no'>`+s.no+`</div><h2 class='sec-title'>`+s.title+`<em>`+s.en+`</em></h2></div>`+
    `<div class='sk-grid'>`+
      `<div class='sk-card reveal'><h4>`+ICON.cert+`<span>`+s.certTitle+` <small style='color:var(--muted);font-size:11px;letter-spacing:.14em;text-transform:uppercase'>`+s.certEn+`</small></span></h4>`+
        s.certs.map(c=>`<div class='cert'><span class='cert-ic'>`+ICON.cert+`</span><span><b>`+c[lang==='zh'?'zh':'en']+`</b><small>`+c[lang==='zh'?'en':'zh']+`</small></span></div>`).join('')+
      `</div>`+
      `<div class='sk-card reveal'><h4>`+ICON.award+`<span>`+s.abTitle+` <small style='color:var(--muted);font-size:11px;letter-spacing:.14em;text-transform:uppercase'>`+s.abEn+`</small></span></h4>`+
        `<div class='ability'>`+s.abilities.map(a=>`<span>`+a[lang==='zh'?'zh':'en']+`<small>`+a[lang==='zh'?'en':'zh']+`</small></span>`).join('')+`</div>`+
      `</div>`+
    `</div>`+
    `<div class='honors reveal'><h4>`+s.hnTitle+` <small style='color:var(--muted);font-size:11px;letter-spacing:.14em;text-transform:uppercase'>`+s.hnEn+`</small></h4>`+
      `<div class='honors-grid'>`+s.honors.map(h=>`<div class='hn'><span class='hn-year'>`+h.y+`</span><span><b>`+h[lang==='zh'?'zh':'en']+`</b><small>`+h[lang==='zh'?'en':'zh']+`</small></span></div>`).join('')+`</div>`+
    `</div>`+
  `</div></section>`;
}

function renderContact(){
  const c = T('contact');
  return `<section class='section' id='contact'><div class='container'>`+
    `<div class='contact-box reveal'>`+
      `<div class='sec-no' style='justify-content:center'>`+c.no+`</div>`+
      `<h2 class='sec-title'>`+c.title+`<em style='text-align:center'>`+c.en+`</em></h2>`+
      `<p class='contact-line'>`+c.line+`<br><span style='font-size:12.5px;color:var(--muted);letter-spacing:.06em'>`+c.lineEn+`</span></p>`+
      `<div class='contact-actions'>`+
        `<a class='btn btn-primary' href='tel:15003539910'>`+ICON.phone+c.btnPhone+`</a>`+
        `<a class='btn btn-ghost' href='mailto:1010631266@qq.com'>`+ICON.mail+c.btnMail+`</a>`+
      `</div>`+
    `</div>`+
    `<footer class='footer'><span class='f-brand'>`+ICON.aperture+`ZHANG LUXIN</span><br>`+c.footer+`</footer>`+
  `</div></section>`;
}

function render(){
  document.documentElement.lang = lang;
  document.getElementById('app').innerHTML =
    renderHeader()+renderHero()+renderAbout()+renderExp()+renderCampus()+renderPortfolio()+renderSkills()+renderContact();
  initObservers();
  runCounters();
  closeMobileNav();
}

/* ============ 交互 ============ */
function initObservers(){
  /* 滚动显现 */
  const els = document.querySelectorAll('.reveal');
  const ro = new IntersectionObserver((es)=>{
    es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); ro.unobserve(en.target);} });
  },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(el=>ro.observe(el));

  /* 导航高亮 */
  const secs = document.querySelectorAll('section[id]');
  const so = new IntersectionObserver((es)=>{
    es.forEach(en=>{
      if(!en.isIntersecting) return;
      const id = en.target.id;
      document.querySelectorAll('[data-nav]').forEach(a=>{
        a.classList.toggle('active', a.getAttribute('data-nav')===id);
      });
    });
  },{rootMargin:'-38% 0px -55% 0px'});
  secs.forEach(s=>so.observe(s));
}

function runCounters(){
  const nums = document.querySelectorAll('[data-count]');
  if(prefersReduced){ nums.forEach(n=>{ n.textContent = n.getAttribute('data-count'); }); return; }
  const io = new IntersectionObserver((es)=>{
    es.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target, target = parseInt(el.getAttribute('data-count'),10), t0 = performance.now();
      function tick(t){
        const p = Math.min((t-t0)/1100,1), ease = 1-Math.pow(1-p,3);
        el.textContent = Math.round(target*ease);
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  },{threshold:.6});
  nums.forEach(n=>io.observe(n));
}

function openLightbox(id){
  const w = T('portfolio').works.find(x=>x.id===id);
  if(!w) return;
  const mediaEl = document.getElementById('lbMedia');
  if(w.id==='shanxi'){
    mediaEl.innerHTML = `<img src='`+IMG.yungang+`' alt='`+w.title+`'>`+
                        `<img src='`+IMG.xuankong+`' alt='`+w.title+`'>`;
  }else{
    mediaEl.innerHTML = `<img src='`+IMG[w.img]+`' alt='`+w.title+`'>`;
  }
  const cap = document.getElementById('lbCap');
  const process = w.process ? `<span>`+(lang==='zh'?'创作流程':'Process')+`：`+w.process+`</span>` : '';
  cap.innerHTML =
    `<h4>`+w.title+`</h4>`+
    `<p class='lb-en'>`+w.en+(w.role?` · `+w.role:'')+`</p>`+
    `<p class='lb-desc'>`+w.desc+`</p>`+
    `<p class='lb-detail'>`+w.detail+`</p>`+
    `<p class='lb-detail' style='margin-top:4px'>`+w.enDetail+`</p>`+
    `<div class='lb-meta'>`+
      `<span>`+T('portfolio').typeTags[w.type]+`</span>`+
      `<span>`+w.ref+`</span>`+
      process+
    `</div>`;
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
function closeMobileNav(){
  document.querySelectorAll('[data-mnav]').forEach(n=>n.classList.remove('open'));
}

/* ============ 全局事件（事件委托） ============ */
document.addEventListener('click',(ev)=>{
  /* 语言切换 */
  const lbtn = ev.target.closest('[data-lang]');
  if(lbtn){ lang = lbtn.getAttribute('data-lang'); try{ localStorage.setItem('zlx-lang',lang); }catch(e){} render(); return; }

  /* 作品筛选 */
  const fbtn = ev.target.closest('[data-filter]');
  if(fbtn){ filter = parseInt(fbtn.getAttribute('data-filter'),10); document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('on', b===fbtn)); document.getElementById('works').innerHTML = renderWorks(); const els=document.getElementById('works').querySelectorAll('.reveal'); const ro=new IntersectionObserver((es)=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');ro.unobserve(en.target);}});},{threshold:.1}); els.forEach(el=>ro.observe(el)); return; }

  /* 作品卡片 → lightbox */
  const wk = ev.target.closest('[data-wk]');
  if(wk){ openLightbox(wk.getAttribute('data-wk')); return; }

  /* lightbox 关闭 */
  if(ev.target.closest('[data-lbclose]')){ closeLightbox(); return; }
  const lb = document.getElementById('lightbox');
  if(ev.target===lb){ closeLightbox(); return; }

  /* 移动端菜单 */
  if(ev.target.closest('[data-burger]')){
    document.querySelectorAll('[data-mnav]').forEach(n=>n.classList.toggle('open'));
  }
  /* 导航点击后收起移动菜单 */
  if(ev.target.closest('[data-nav]')){ closeMobileNav(); }
});

/* 键盘：ESC 关闭 lightbox；卡片回车打开 */
document.addEventListener('keydown',(ev)=>{
  if(ev.key==='Escape') closeLightbox();
  if(ev.key==='Enter'){
    const t = ev.target.closest('[data-wk]');
    if(t) openLightbox(t.getAttribute('data-wk'));
  }
});

/* 滚动：进度条 + 回到顶部 */
window.addEventListener('scroll',()=>{
  const h = document.documentElement;
  const pct = h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('progress').style.width = pct+'%';
  const top = document.getElementById('toTop');
  if(h.scrollTop>700){ top.classList.add('show'); } else { top.classList.remove('show'); }
},{passive:true});

document.getElementById('toTop').addEventListener('click',()=>{
  window.scrollTo({top:0,behavior: prefersReduced?'auto':'smooth'});
});

/* 初始渲染 */
render();
