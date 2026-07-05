import type { ScenarioScript } from "@/lib/types";

const script: ScenarioScript = {
  scenarioId: "coffee-chat",
  openingNarration:
    "下午三點，你走進茶水間想裝杯水。日光燈嗡嗡地響，冰箱壓縮機低低地震動，冷氣吹得後頸有點涼。你剛按下飲水機的按鈕，身後傳來腳步聲——是這週才報到的新同事。你的胸口突然縮緊了一下，手指不自覺握緊杯子，腦中閃過一個念頭：『他會不會來跟我說話？』",
  totalRounds: 5,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你低頭裝著水，餘光注意到他走到咖啡機前面，東按西按，然後轉頭看向了你。",
      next: "r1",
    },
    r1: {
      id: "r1",
      speaker: "npc",
      text: "嗨，不好意思打擾喔——這台咖啡機要怎麼用啊？我按了半天都沒反應。對了我叫 Jason，這週第一天啦。",
      innerVoice: "他在問我……可是我也不太會用，講錯怎麼辦。他會不會覺得連這個都不會的人，好沒用。",
      choices: [
        {
          text: "其實我剛來的時候也不會用，研究了半天。來，按住這個鍵就好——你坐哪一區啊？",
          choiceType: "approach-express",
          nextNode: "r2",
          effectiveness: 3,
          feedback: {
            pros: [
              "把『不會用』從困窘變成可分享的經驗，話題自然打開",
              "主動幫忙＋反問，讓對方有東西可以接",
              "示範了『不知道也沒關係』的態度，自己也跟著放鬆",
            ],
            cons: [
              "開口的瞬間焦慮會先升高，這是承擔風險的正常反應",
              "得在對方注視下操作，被看著的感覺不太舒服",
              "反問之後要接住對方的回答",
            ],
            cbt: {
              automaticThought: "他會覺得連咖啡機都不會的人很笨。",
              bias: "讀心術（篤定對方正在負面評價自己）",
              disputing: "你有任何證據顯示他心裡這樣想嗎？他自己也說不會用啊。",
              rationalResponse: "他只是需要幫忙，不是在考核我。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被看見、想跟新同事產生一點連結",
              note: "你允許自己靠近『想跟他說話』的念頭，而不是先把它壓下去。",
              source: "Frederick (2009), ch3",
            },
          },
        },
        {
          text: "喔你按這個鍵就好——那個我杯子滿了，先回去囉。",
          choiceType: "safety-behavior",
          nextNode: "r2",
          effectiveness: 2,
          feedback: {
            pros: [
              "至少回答了對方，沒有完全沉默",
              "給自己一個台階下，焦慮不會一下子爆衝",
            ],
            cons: [
              "『杯子滿了』是典型的退場藉口，短期舒服但長期強化『社交很危險』",
              "對話在開頭就被自己切斷，關係沒機會展開",
            ],
            cbt: {
              automaticThought: "只要說完必要的話趕快離開，就不會出錯。",
              bias: "安全行為（以為退場才能保護自己）",
              disputing: "如果多留十秒鐘，最壞會發生什麼？這個『危險』有實際證據嗎？",
              rationalResponse: "對話多撐一下，不會把我怎麼樣。",
              source: "Hope, Heimberg & Turk (2019), ch07",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想留下來，但又怕被卡住",
              note: "你一邊前進一邊替自己留後路，這是焦慮還在掌舵的訊號。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "我也不太熟耶，不好意思喔。（搖搖頭，快步走出茶水間）",
          choiceType: "avoid-escape",
          nextNode: "r2",
          effectiveness: 1,
          feedback: {
            pros: [
              "想脫身是焦慮下最自然的反應——你立刻得到焦慮下降的解脫",
              "最省力，不必面對不確定的對話",
            ],
            cons: [
              "Jason 可能會把你的冷淡解讀成不想理他",
              "錯過一個低壓力的破冰機會，下次要開口更難",
              "強化『我應付不來這種場合』的自我形象",
            ],
            cbt: {
              automaticThought: "我現在狀態不好，離開才不會搞砸。",
              bias: "逃離行為＋情緒推理（因為覺得焦慮，就認定當下真的危險）",
              disputing: "離開後，你真的覺得比較好嗎？還是鬆一口氣之後，又開始後悔？",
              rationalResponse: "不舒服，不代表我得立刻撤退。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "渴望連結，卻不敢冒被拒絕的險",
              note: "想躲開是焦慮下最自然的反應——只是它替你做了決定，沒問過那個想留下來的你。",
              source: "Frederick (2009), ch5",
            },
          },
        },
      ],
    },
    r2: {
      id: "r2",
      speaker: "npc",
      text: "原來是這樣，謝謝喔！對了你來這間公司很久了嗎？我看你好像跟大家都蠻熟的。",
      innerVoice: "他說我跟大家都熟……是反諷嗎？我其實一個朋友都沒有。要是被他發現我其實很孤僻，會怎麼想。",
      choices: [
        {
          text: "其實也才一年多啦，剛來的時候我超安靜的，連訂便當都不敢舉手。你呢，之前在哪邊工作？",
          choiceType: "approach-express",
          nextNode: "r3",
          effectiveness: 3,
          feedback: {
            pros: [
              "誠實承認自己也曾內向，反而讓對方放鬆",
              "用自我揭露換取信任，關係往前一步",
              "把球丟回去，讓對話自然延續",
            ],
            cons: [
              "揭露『以前很安靜』需要一點勇氣，心會跳快",
              "反問之後要接住對方的回答",
            ],
            cbt: {
              automaticThought: "他說我熟一定是客套或反諷，不能當真。",
              bias: "否定正向（直接把對方的善意打折扣）",
              disputing: "有沒有可能他單純覺得你看起來友善？為什麼要預設他在挖苦你？",
              rationalResponse: "我可以先收下這份善意，再看看接下來怎麼樣。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被當成友善的人，也想要這份善意是真的",
              note: "你願意相信對方的善意可能是真的，而不是先把它打成客套。",
              source: "Frederick (2009), ch3",
            },
          },
        },
        {
          text: "嗯，一年多了。大家都還不錯啦。（笑一下，低頭看杯子）",
          choiceType: "safety-behavior",
          nextNode: "r3",
          effectiveness: 2,
          feedback: {
            pros: [
              "回答了，沒有讓話掉在地上",
              "保有隱私，不必透露太多",
            ],
            cons: [
              "用『大家都還不錯』把焦點推開，話題容易停在表面",
              "低頭看杯子是安全行為，傳遞『不太想聊』的訊號",
            ],
            cbt: {
              automaticThought: "講越少越安全，不要讓他太了解我。",
              bias: "安全行為（用簡短回答控制情境）",
              disputing: "如果你只給最短的答案，對方還有什麼理由繼續跟你聊？",
              rationalResponse: "多講一點，不會讓我暴露在危險裡。",
              source: "Hope, Heimberg & Turk (2019), ch07",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想被了解，卻怕被看穿",
              note: "你用『剛剛好』的距離保護自己，連結的渴望被焦慮半路攔下。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "對啊超久的！這邊超棒的大家都超好，你有問題都可以問我喔真的！（音量偏高，笑得太用力）",
          choiceType: "overcompensate",
          nextNode: "r3",
          effectiveness: 1,
          feedback: {
            pros: [
              "想表現友善的出發點是好的",
              "至少沒讓場面冷掉",
            ],
            cons: [
              "過度熱絡反而顯得不自然，對方可能感到壓力",
              "在演一個『社交達人』，消耗大且偏離真實的自己",
              "事後容易反芻自己剛剛『太假』",
            ],
            cbt: {
              automaticThought: "只要我表現得夠開朗，就不會被發現我其實很緊張。",
              bias: "過度補償（用誇張表演蓋住焦慮）",
              disputing: "如果他發現你有點緊張，會發生什麼可怕的事嗎？",
              rationalResponse: "稍微緊張的我，也是可以聊天的人。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "怕被看穿真實的、不夠亮的自己",
              note: "面具戴越用力，底下的不安越沒機會被接住。",
              source: "Frederick (2009), ch5",
            },
          },
        },
      ],
    },
    r3: {
      id: "r3",
      speaker: "npc",
      text: "……（Jason 點點頭，喝了口咖啡）……喔，這個味道還不錯。",
      innerVoice: "他沒講話了。是不是覺得我很無聊？我應該要接點什麼，可是腦袋一片空白……安靜超尷尬的，再不講話場面就毁了。",
      choices: [
        {
          text: "（也停一下，喝口水）這個產季的豆子好像換了。你有在喝咖啡嗎？",
          choiceType: "approach-express",
          nextNode: "r4",
          effectiveness: 3,
          feedback: {
            pros: [
              "允許自己安靜一下，沒有把沉默當成災難",
              "用一個輕鬆的開放式問題重啟對話",
              "示範了『冷場不等於完蛋』",
            ],
            cons: [
              "主動開口那一下還是會緊張",
              "對方回答後要繼續接話",
            ],
            cbt: {
              automaticThought: "只要超過三秒沒人講話，場面就毁了。",
              bias: "沉默高估＋災難化（把正常停頓當成社交失敗）",
              disputing: "你跟熟人聊天時也會有安靜的時刻吧？那時候你也覺得毁了嗎？",
              rationalResponse: "幾秒鐘的安靜，對方多半根本沒注意。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想延續這份剛萌芽的連結",
              note: "你沒有被空白嚇跑，反而穩穩地再把話題遞出去。",
              source: "Frederick (2009), ch3",
            },
          },
        },
        {
          text: "嗯嗯對啊，還不錯。（點頭）……（小聲說）這台機器蠻好用的。",
          choiceType: "approach-partial",
          nextNode: "r4",
          effectiveness: 2,
          feedback: {
            pros: [
              "有回應，沒讓對方覺得被冷落",
              "附和式的短句門檻低，比較好開口",
            ],
            cons: [
              "都是封閉式短句，話題撐不久",
              "聲音偏小，其實是在降低自己的存在感",
            ],
            cbt: {
              automaticThought: "我只要發出一點聲音，尷尬就會消失。",
              bias: "沉默高估（以為安靜本身就是問題）",
              disputing: "你急著填補空白，是因為對方尷尬，還是因為你自己受不了？",
              rationalResponse: "沉默不可怕，是我自己受不了而已。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想留下，但受不了安靜帶來的不確定",
              note: "你用碎話填補空白，其實是想安撫自己，不是為了對話。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "那……我先回去工作了喔。（快步走出茶水間）",
          choiceType: "avoid-escape",
          nextNode: "r4",
          effectiveness: 1,
          feedback: {
            pros: [
              "想逃是焦慮下最自然的反應——你立刻脫離那個讓人坐立難安的沉默",
              "回到座位就能恢復安全感",
            ],
            cons: [
              "Jason 會記得這段尷尬的收尾，下次見面更彆扭",
              "把『冷場＝失敗』的信念又加固一次",
            ],
            cbt: {
              automaticThought: "再不離開就要尷尬死了。",
              bias: "沉默高估＋逃離行為",
              disputing: "如果硬撐三十秒，真的會『尷尬死』嗎？這個『死』是修辭，還是事實？",
              rationalResponse: "不舒服，跟危險，是兩件事。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "渴望被接住，卻受不了懸而未決",
              note: "逃開是焦慮下最自然的反應——只是它替你做了決定，沒問過那個想留下來的你。",
              source: "Frederick (2009), ch5",
            },
          },
        },
      ],
    },
    r4: {
      id: "r4",
      speaker: "npc",
      text: "對了，這週末你有什麼計畫嗎？我自己剛搬來這區，還在想說要去哪裡逛逛。",
      innerVoice: "週末我什麼都沒安排，就只是要在家躺著……講出來他一定覺得我很廢、很沒生活。",
      choices: [
        {
          text: "其實我這週也沒什麼特別安排，就想在家休息哈哈。不過你剛搬來的話，附近那個市場週末蠻好逛的，我可以推薦幾家。",
          choiceType: "approach-express",
          nextNode: "r5",
          effectiveness: 3,
          feedback: {
            pros: [
              "誠實承認沒安排，反而顯得自在",
              "給出實用建議，創造『我有東西可以給』的正向經驗",
              "等於暗示可以再聊這個話題，為下次鋪路",
            ],
            cons: [
              "承認『在家休息』要先跨過『我好像很無趣』的念頭",
              "推薦店家後對方可能追問，要繼續投入",
            ],
            cbt: {
              automaticThought: "沒有精采的週末計畫，等於我這個人很無聊。",
              bias: "標籤化（用一個週末定義整個人的價值）",
              disputing: "一個週末沒出門，就代表你整個人無趣嗎？你認識的有趣的人，難道每週都排滿？",
              rationalResponse: "休息也是正當的週末，不等於我無聊。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想分享自己的一點什麼，也想要被需要",
              note: "你願意把『沒什麼大事』的週末端出來，而不是先編一個體面的版本。",
              source: "Frederick (2009), ch3",
            },
          },
        },
        {
          text: "喔就……還好啦，可能出去晃晃吧。你呢？",
          choiceType: "safety-behavior",
          nextNode: "r5",
          effectiveness: 2,
          feedback: {
            pros: [
              "有回應，沒讓話題斷掉",
              "把焦點轉回對方，自己不用揭露太多",
            ],
            cons: [
              "『出去晃晃』是含糊的安全說法，對方無從接話",
              "錯過分享自己、讓對方認識你的機會",
            ],
            cbt: {
              automaticThought: "只要把話題推回給他，我就不用冒險揭露自己。",
              bias: "安全行為（用反問閃避自我揭露）",
              disputing: "如果連週末做什麼都不能講，你跟別人還能聊什麼？這條界線畫在哪？",
              rationalResponse: "分享小事，不會讓我陷入危險。",
              source: "Hope, Heimberg & Turk (2019), ch07",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想被認識，又怕被認識",
              note: "你把鏡頭轉向對方，把自己留在景深之外——連結的渴望還卡在半路。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "喔我週末超滿的！跟朋友約吃飯、要看展、還要去運動，超忙的哈哈。",
          choiceType: "overcompensate",
          nextNode: "r5",
          effectiveness: 1,
          feedback: {
            pros: [
              "想維持一個體面的形象，動機可以理解",
              "當下避免了自己『看起來很廢』的羞恥感",
            ],
            cons: [
              "編造的內容之後要圓謊，壓力更大",
              "對方若約你下次，會被戳破",
              "等於承認『真實的我不值得被看見』",
            ],
            cbt: {
              automaticThought: "真實的我太無趣，必須包裝才會被接受。",
              bias: "過度補償＋核心信念（我不夠好）",
              disputing: "如果他知道你週末其實在家休息，會因此討厭你嗎？你為什麼篤定真實的你不夠？",
              rationalResponse: "我不必精采，才值得被喜歡。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "怕赤裸的真實會被嫌棄",
              note: "你用一個比較亮的版本把自己蓋住，那個沒被裝飾的你還在底下等。",
              source: "Frederick (2009), ch5",
            },
          },
        },
      ],
    },
    r5: {
      id: "r5",
      speaker: "npc",
      text: "欸，跟你聊還蠻開心的耶。那改天中午要不要一起吃飯？我想多認識一下這邊的人。",
      innerVoice: "他約我吃飯……一對一更可怕，到時候沒話講怎麼辦。可是拒絕他，會不會顯得我很難搞，以後就不理我了。",
      choices: [
        {
          text: "好啊，那就這禮拜五中午？我平常都自己吃，不過跟你聊聊還蠻輕鬆的，去試試看。",
          choiceType: "approach-express",
          nextNode: "end",
          effectiveness: 3,
          feedback: {
            pros: [
              "接下邀請，讓剛建立的連結有機會長出來",
              "誠實說『平常自己吃』反而讓對方知道你的界線，降低後續壓力",
              "給自己一個明確的小目標，比模糊的『改天』好",
            ],
            cons: [
              "答應的當下心跳會加速，這是承擔風險的正常反應",
              "午餐約會是新的社交場合，焦慮會跟著升級",
            ],
            cbt: {
              automaticThought: "一對一吃飯如果冷場，他就會發現我很無聊，然後後悔約我。",
              bias: "算命（預言會冷場）＋讀心術（篤定對方會失望）",
              disputing: "你怎麼知道一定會冷場？他約你是因為想認識你，不是要考你口才。",
              rationalResponse: "他是來吃飯聊天的，不是來評分我的。",
              source: "Hope, Heimberg & Turk (2019), ch11",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "渴望有人作伴，也想要這段關係繼續",
              note: "你接住了他的伸手，讓那份『想要靠近』真的發生，而不只在心裡發生。",
              source: "Frederick (2009), ch3",
            },
          },
        },
        {
          text: "嗯……好啊，那到時候看狀況喔，我中午有時候會比較忙。我們再約？",
          choiceType: "approach-partial",
          nextNode: "end",
          effectiveness: 2,
          feedback: {
            pros: [
              "原則上答應了，關係沒有斷",
              "保留彈性，給自己時間準備",
            ],
            cons: [
              "『看狀況』是半退路，對方會感覺到你其實不太確定",
              "模糊的約定容易不了了之，連結又退回原點",
            ],
            cbt: {
              automaticThought: "我先含糊答應，這樣到時候反悔也沒關係。",
              bias: "安全行為（用模糊承諾保留逃脫空間）",
              disputing: "如果你連『星期五中午』都不敢講死，你到底在保護自己免於什麼？",
              rationalResponse: "把時間講清楚，其實沒那麼可怕。",
              source: "Hope, Heimberg & Turk (2019), ch07",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想要這份連結，又怕被它綁住",
              note: "你一手伸出去、一手收回來，焦慮替你把承諾打了折扣。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "喔這禮拜有點忙耶，改天再說好了，哈哈。（其實沒有特別忙）",
          choiceType: "avoid-escape",
          nextNode: "end",
          effectiveness: 1,
          feedback: {
            pros: [
              "想推掉是焦慮下最自然的反應——你立刻免除一對一的壓力",
              "短期內不用面對更密集的社交場合",
            ],
            cons: [
              "婉拒會讓對方解讀成你沒興趣，這扇門可能就此關上",
              "『改天再說』多半不會再說，連結就此錯過",
              "強化『一對一很危險』的信念，下次更難答應",
            ],
            cbt: {
              automaticThought: "推掉最安全，反正他以後還會約別人。",
              bias: "逃離行為＋否定正向（主動推掉對方遞來的善意）",
              disputing: "推掉之後，你心裡是鬆一口氣，還是又有點悶？那一點悶是什麼？",
              rationalResponse: "我可以怕，同時還是答應。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "其實想要這頓飯，卻不敢承受它的重量",
              note: "拒絕是焦慮下最自然的反應——只是它替你把門關上時，沒問過那個想進去的你。",
              source: "Frederick (2009), ch5",
            },
          },
        },
      ],
    },
    end: {
      id: "end",
      speaker: "narrator",
      text: "Jason 拿著咖啡走了，茶水間又剩下你一個人。飲水機的水剛好煮好，咕嚕嚕地響。你在心裡把剛剛的對話播放了一遍——不論你選了什麼，這都是一次練習。",
    },
  },
  endings: {
    approach: {
      summary:
        "你在這段對話裡多次選擇靠近，而不是退開。雖然每一步都伴隨心跳加速，但你給了『想要連結』一個真正發生的機會。",
      suggestion:
        "下次遇到類似場合，給自己一個小目標：開口說出一句真話，然後讓對方接。不必每一句都完美。",
    },
    partial: {
      summary:
        "你在趨近與退縮之間來回。有前進，但也常用安全行為保護自己，讓連結停在表面。",
      suggestion:
        "挑一個你常用的安全行為（例如低頭、簡短回答、找藉口離開），下次刻意減少一點點就好，不用一次到位。",
    },
    avoid: {
      summary:
        "你多半選擇了迴避或補償。這是最自然的防衛，短期內焦慮確實下降，但長期會讓『我應付不來』的信念越來越穩固。",
      suggestion:
        "從最低風險的一步開始——例如只多留十秒鐘、多說一句話。改變不必從最難的那一步起步。",
    },
  },
};

export default script;
