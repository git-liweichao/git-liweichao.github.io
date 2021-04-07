const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "夜空中最亮的星",
        artist: '逃跑计划',
        url: 'http://music.163.com/song/media/outer/url?id=25706282.mp3',
        cover: 'http://p2.music.126.net/Eef2K2KV9dT3XUA6_Ve-Rw==/109951165543196748.jpg',
      },
      {
        name: '知足',
        artist: '五月天',
        url: 'http://music.163.com/song/media/outer/url?id=385965.mp3',
        cover: 'http://p3.music.126.net/_B1Fn_Z1WxHzqGLzLZDf-w==/109951163263882447.jpg',
      },
      {
        name: '一千年以后',
        artist: '林俊杰',
        url: 'http://music.163.com/song/media/outer/url?id=26305531.mp3',
        cover: 'http://p3.music.126.net/CcthX_ZCexIdriZADoNn3g==/109951165628166191.jpg',
      },
      {
        name: '逍遥叹',
        artist: '胡歌',
        url: 'http://music.163.com/song/media/outer/url?id=4875306.mp3',
        cover: 'http://p4.music.126.net/4tTN8CnR7wG4E1cauIPCvQ==/109951163240682406.jpg',
      },
      {
        name: '如果我们不曾相遇',
        artist: '五月天',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3530?authkey=!AHW9IkqGsDbC1dQ',
        cover: 'http://cdnmusic.migu.cn/picture/2020/1127/0409/AS05afa3ef1ed4b6873d22bf7f96c89a3f.jpg',
      },
      {
        name: '顽固',
        artist: '五月天',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3531?authkey=!AGD0W8G_tX4GKnA',
        cover: 'http://cdnmusic.migu.cn/picture/2019/0513/1349/AS1610080912178824.jpg',
      },
      {
        name: '温柔20th',
        artist: '五月天',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3533?authkey=!ADzRbKN3CnK3t6g',
        cover: 'http://cdnmusic.migu.cn/picture/2020/0103/1023/AScafa0f37681f477299507737accd1b86.jpg',
      },
      {
        name: '笔记',
        artist: '周笔畅',
        url: 'http://music.163.com/song/media/outer/url?id=350909.mp3',
        cover: 'http://p3.music.126.net/9WvlVAqDesQshpIuZ_Knew==/112150186046307.jpg',
      },
      {
        name: '最后的8/31（万人合唱版）',
        artist: '八三夭',
        url: 'http://music.163.com/song/media/outer/url?id=1354221306.mp3',
        cover: 'http://p3.music.126.net/koIpRfrRBKw82I-Wr-s48w==/109951163950573716.jpg',
      },
      {
        name: '情歌',
        artist: '梁静茹',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3529?authkey=!AEi9rawgCotSSdY',
        cover: 'http://cdnmusic.migu.cn/picture/2020/0902/0300/AS8d38ba1f29636cc0bb53903641e6420a.jpg',
      },
      {
        name: '宁夏',
        artist: '梁静茹',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3532?authkey=!AHaPe4Q_eyiJqBE',
        cover: 'http://cdnmusic.migu.cn/picture/2020/1124/1800/ASa81c0afd39d869255879e9051c98fb2b.jpg',
      },
      {
        name: '如果当时',
        artist: '许嵩',
        url: 'http://music.163.com/song/media/outer/url?id=167870.mp3',
        cover: 'http://p3.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
      },
      {
        name: '世界末日(live)',
        artist: '周杰伦',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3538?authkey=!ACK3Sqf2vXezl7E',
        cover: 'https://imgessl.kugou.com/stdmusic/20150720/20150720175413227058.jpg'
      },
      {
        name: '有多少爱可以重来(live)',
        artist: '迪克牛仔',
        url: 'http://music.163.com/song/media/outer/url?id=77028.mp3',
        cover: 'https://p1.music.126.net/l7OoeTaz636FaJFNmmqqEA==/107752139527296.jpg',
      },
      {
        name: '大鱼',
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=413812448.mp3',
        cover: 'https://p2.music.126.net/aiPQXP8mdLovQSrKsM3hMQ==/1416170985079958.jpg',
      },
      {
        name: '星月神话',
        artist: '金莎',
        url: 'http://music.163.com/song/media/outer/url?id=406730463.mp3',
        cover: 'http://p1.music.126.net/Ka9mTytJ3bEOLG0Gz-HqkA==/3274345638672304.jpg',
      },
      {
        name: '太多',
        artist: '陈冠蒲',
        url: 'http://music.163.com/song/media/outer/url?id=69827.mp3',
        cover: 'http://p3.music.126.net/iPexHWjKcKCjMoTYHZFMaA==/109951165293600860.jpg',
      },
      {
        name: '需要人陪',
        artist: '王力宏',
        url: 'http://music.163.com/song/media/outer/url?id=33497051.mp3',
        cover: 'http://p4.music.126.net/Y8_pmsNld7rFuN9HTv-wOQ==/3344714371752550.jpg',
      },
      {
        name: '蝴蝶泉边',
        artist: '黄雅莉',
        url: 'http://music.163.com/song/media/outer/url?id=239682.mp3',
        cover: 'http://p4.music.126.net/yyMuGVix7sQMejkZhFrwPg==/109951163077718442.jpg',
      },
      {
        name: '我们的冒险',
        artist: '曹寅',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3524?authkey=!AODWAxMNvDHqAZ8',
        cover: 'https://imgessl.kugou.com/stdmusic/20201029/20201029170806485912.jpg',
      },
      {
        name: '人生如棋',
        artist: '钟菌波',
        url: 'http://music.163.com/song/media/outer/url?id=31645206.mp3',
        cover: 'https://p1.music.126.net/22AFRy2wqgaBDeqmJ-rFiQ==/109951163926961482.jpg',
      },
      {
        name: '依兰爱情故事',
        artist: '方磊',
        url: 'http://music.163.com/song/media/outer/url?id=35618549.mp3',
        cover: 'http://p1.music.126.net/AiRGO6o7-i6p52QJRmF5_Q==/3345813884662970.jpg',
      },
      {
        name: 'Butter-Fly',
        artist: '和田光司',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3526?authkey=!ABJ8PpDSi7O1stY',
        cover: 'https://p1.music.126.net/jWV56lNZod308s8sGNAItA==/109951163297574192.jpg',
      },
      {
        name: 'break up',
        artist: '宮崎歩',
        url: 'http://music.163.com/song/media/outer/url?id=4940928.mp3',
        cover: 'http://p2.music.126.net/o8ZfncjFF5frq8Q8iJJ9QQ==/2321069046256264.jpg'
      },
      {
        name: '虹',
        artist: '菅田将暉(すだ まさき)',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3525?authkey=!AL-1piECxKOsuwA',
        cover: 'https://imgessl.kugou.com/stdmusic/20201026/20201026154108837966.jpg',
      },
      {
        name: 'XY&Z',
        artist: '松本梨香',
        url: 'http://music.163.com/song/media/outer/url?id=41643682.mp3',
        cover: 'https://p1.music.126.net/R2zhPE4JgN14XH26jmtpHw==/3273246124629175.jpg',
      },
      {
        name: 'めざせポケモンマスタ-20th Anniversary Ballad ver.-',
        artist: '松本梨香',
        url: 'http://music.163.com/song/media/outer/url?id=521493117.mp3',
        cover: 'https://p1.music.126.net/_sllrC16IS8z8txtBaA2dw==/109951163073303849.jpg',
      }, 
      {
        name: '小小的手心',
        artist: 'Key Sounds Label',
        url: 'https://storage.live.com/items/1AF2905C36584ECB!3534?authkey=!AAjgll6RnJ_ANc8',
        cover: 'https://imgessl.kugou.com/stdmusic/20200909/20200909134317111123.jpg',
      },      
      {
        name: 'Someone Like You',
        artist: 'Adele',
        url: 'http://music.163.com/song/media/outer/url?id=16435049.mp3',
        cover: 'http://p4.music.126.net/l-lffSJW45DaETAp7Vi22Q==/109951165341361103.jpg',
      },
      {
        name: 'My Heart Will Go On',
        artist: 'Celine Dion',
        url: 'http://music.163.com/song/media/outer/url?id=2308499.mp3',
        cover: 'http://p4.music.126.net/mO1OUNjZtCEIvAGdr7YXaA==/813638604607979.jpg',
      }      
    ]
});