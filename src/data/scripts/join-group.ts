import type { ScenarioScript } from "@/lib/types";

const script: ScenarioScript = {
  scenarioId: "join-group",
  openingNarration:
    "餐廳二樓，紅燈籠下擠了八個人。你站在樓梯口，聽見笑聲從那桌傳來——是專案小組的同事們，聚餐已經開始半小時了。你遲到，手心微微出汗。往下走八階樓梯，推開那扇門，你就得想辦法把自己塞進那團熱絡裡。心跳在耳邊一下一下地響。",
  totalRounds: 5,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你拎著外套走下樓梯。那桌人抬起頭，坐在最外側的阿傑先看見你，眼睛一亮，揚起手招呼。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "npc",
      text: "「欸——你來了、你來了！快坐快坐，這邊擠一下還有空位！」阿傑往旁邊挪了挪，拍了拍身旁的椅子。其他幾個人轉頭看你，跟著笑了笑。",
      innerVoice: "他是真的高興我來，還是只是客套？我這時候才到，會不會打斷他們剛剛的氣氛⋯⋯",
      choices: [
        {
          text: "「謝謝啦！抱歉晚到，你們剛剛在聊什麼，聊得這麼開心？」一邊笑著一邊坐下",
          choiceType: "approach-express",
          nextNode: "r2",
          effectiveness: 3,
          feedback: {
            pros: [
              "抓住對方主動招呼的破冰時機，自然帶入話題",
              "用提問把注意力從『我遲到』轉到『話題』上，減輕被注視感",
              "釋放『我想參與』的訊號，降低對方揣測你意願的成本",
            ],
            cons: [
              "焦慮當下會先升高，因為你正在承擔被回應的風險",
              "得接住後續對話，無法再退回觀察者的位置",
            ],
            cbt: {
              automaticThought: "他們只是客套，我加入會打斷氣氛",
              bias: "算命／讀心術（預先認定別人內心在敷衍自己）",
              disputing: "阿傑主動挪位、拍椅子，這些是『歡迎』的行為證據，不是敷衍。",
              rationalResponse: "對方已用行動邀請我，我沒有證據說他在敷衍。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被這群人接納、成為其中一份子的歸屬渴望",
              note: "試著讓渴望連結的那一面被看見，順著它靠近，而非先退開。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "「謝謝、不好意思晚到了。」微笑點頭，先坐下，想先聽一輪再決定要不要開口",
          choiceType: "approach-partial",
          nextNode: "r2",
          effectiveness: 2,
          feedback: {
            pros: [
              "先觀察氣氛與話題，降低資訊不足的焦慮",
              "坐下本身已是一種趨近，比站在外圍更靠近群體",
            ],
            cons: [
              "若一直觀察不開口，可能被解讀為冷淡或不想融入",
              "錯過對方主動招呼這個最自然的破冰時機",
            ],
            cbt: {
              automaticThought: "先看看再說，免得一開口就講錯話",
              bias: "算命（預測自己一開口就會出錯）",
              disputing: "你還沒開口，『會講錯』只是預測，沒有實際證據。",
              rationalResponse: "我可以先觀察，同時也允許自己想說就說。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想被接納，又怕表現不好而被排除",
              note: "焦慮是訊號，提醒你在乎這段關係；不必等焦慮歸零才行動。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "「我先去洗個手、裝個水喔，你們先聊！」笑了笑，轉身往吧台走",
          choiceType: "avoid-escape",
          nextNode: "r2",
          effectiveness: 1,
          feedback: {
            pros: [
              "立即獲得喘息空間，焦慮暫時下降",
              "爭取一點時間整理情緒與開場白",
            ],
            cons: [
              "越晚入座，與群體的心理距離會越拉越遠",
              "反覆延遲會強化『我很難融入』的自我預言",
            ],
            cbt: {
              automaticThought: "等我準備好再去，現在去一定會搞砸",
              bias: "算命（預測災難）＋情緒推理（焦慮＝危險）",
              disputing: "『準備好』從來不會完整到來，拖延反而增加難度。",
              rationalResponse: "與其等準備好，不如帶著不完美直接進場。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "渴望被接納，卻先預期被拒絕而主動退縮",
              note: "退縮保護了你不被拒絕，卻也把渴望一起擋在門外了。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
      ],
    },

    r2: {
      id: "r2",
      speaker: "npc",
      text: "話題不知什麼時候轉到最近那部話題電影。小薇講得手舞足蹈：「那個結尾真的會讓人倒抽一口氣！」坐在對面的家豪忽然轉向你：「欸，你也看過吧？超好看的那部！」",
      innerVoice: "其實我還沒看⋯⋯要是直接說沒看，他們會不會覺得我搭不上話、很無趣？",
      choices: [
        {
          text: "「還沒耶！聽你們講得我也好想看，是什麼類型的啊？」",
          choiceType: "approach-express",
          nextNode: "r3",
          effectiveness: 3,
          feedback: {
            pros: [
              "誠實讓對話真實，對方反而樂於推薦、延續話題",
              "把『沒看』轉成好奇與提問，仍是積極參與",
              "示範了『不知道』並不會瓦解你在群體裡的位置",
            ],
            cons: [
              "坦白沒看會短暫覺得自己『跟不上』",
              "需要再投入精力聆聽對方的介紹",
            ],
            cbt: {
              automaticThought: "說沒看，他們會覺得我很無趣、搭不上話",
              bias: "算命（預測對方會貶低自己）",
              disputing: "他主動問你，是想把你納入話題，不是要考你。",
              rationalResponse: "他問我是想把我拉進來，而不是要淘汰我。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被當作圈內人，而不是被話題隔開的局外人",
              note: "允許自己『還不知道』，也仍是這桌的一份子。",
              source: "Frederick (2009), ch4",
            },
          },
        },
        {
          text: "「嗯⋯⋯好像有聽過、聽說不錯。」含糊帶過，沒明說看過也沒否認",
          choiceType: "safety-behavior",
          nextNode: "r3",
          effectiveness: 2,
          feedback: {
            pros: [
              "短暫避開『沒看』可能帶來的尷尬",
              "沒有直接說謊，仍保留一點參與的樣子",
            ],
            cons: [
              "模糊回應若被追問細節會更難接，反而更暴露",
              "維持『好像在』的表象會消耗心力，無法真正投入",
            ],
            cbt: {
              automaticThought: "如果我說沒看，場面會冷掉",
              bias: "算命（預測對話會因此崩塌）",
              disputing: "電影話題不會因一個人沒看就冷場，這是高估影響。",
              rationalResponse: "我沒看不會毀掉這場對話，他們會繼續聊。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想融入，卻用模糊話術把真實的自己藏起來",
              note: "用含糊維持在場，同時也藏住了能被真正認識的機會。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "「對啊！超讚的！那個結尾我也嚇到！」附和著，假裝看過",
          choiceType: "overcompensate",
          nextNode: "r3",
          effectiveness: 1,
          feedback: {
            pros: [
              "表面上立刻『接上』話題，免去『沒看』的窘迫",
              "短暫獲得『我跟大家一樣』的安全感",
            ],
            cons: [
              "謊言若被追問細節會更窘，焦慮反而加深",
              "用假我換來的歸屬是空的，事後更覺得『他們認識的不是真的我』",
            ],
            cbt: {
              automaticThought: "只有表現得跟大家一樣，我才會被接受",
              bias: "算命（預測真實的自己會被拒）＋全有全無思考",
              disputing: "你沒有證據說『不一樣就會被排除』，這是預設災難。",
              rationalResponse: "我不必跟大家一樣，也能被這桌接納。",
              source: "Beck (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "強烈想被接納，以至於用假我來換取歸屬",
              note: "用假我換來的接納，反而讓真實的孤單更難被看見。",
              source: "Frederick (2009), ch4",
            },
          },
        },
      ],
    },

    r3: {
      id: "r3",
      speaker: "npc",
      text: "不知誰提起一個你完全沒接觸過的投資話題。阿傑興奮地補充背景，大家你一言我一句，目光全回到彼此身上，暫時沒有人再看你。話題很熱，你插不太上話。",
      innerVoice: "他們都沒在看我⋯⋯是不是覺得我根本聽不懂、是個多餘的人？",
      choices: [
        {
          text: "「這個我完全門外漢耶，」笑著承認，「可以多說一點嗎？聽起來滿有意思的。」",
          choiceType: "approach-express",
          nextNode: "r4",
          effectiveness: 3,
          feedback: {
            pros: [
              "大方承認不懂，反而展現自信與好奇",
              "提問能把你自己重新拉回對話圈，而不是被動旁觀",
              "為話題注入新角度，大家通常樂於解釋",
            ],
            cons: [
              "承認『不懂』的瞬間會有一點暴露感",
              "需要持續專注聆聽才能接住對方的解釋",
            ],
            cbt: {
              automaticThought: "他們沒看我，代表覺得我多餘",
              bias: "聚光燈效應＋讀心術（把『沒被注視』解讀成『被排斥』）",
              disputing: "大家沒看你，是因為正投入話題，不是在評價你。",
              rationalResponse: "他們沒看我，是專注話題，而非在否定我。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被包含在內，而不是被話題圍牆隔在外面",
              note: "主動發問，是把『被隔開』的主動權拿回自己手上。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "安靜地聽著，適時點頭微笑，不勉強自己發表意見",
          choiceType: "approach-partial",
          nextNode: "r4",
          effectiveness: 2,
          feedback: {
            pros: [
              "用傾聽與肢體回應參與，壓力較低",
              "沒有硬插話，避免打斷熱絡的節奏",
            ],
            cons: [
              "若全程沉默，較難被記得『有參與』",
              "容易把『沒被點到』再次解讀成被忽略",
            ],
            cbt: {
              automaticThought: "我插不上話，乾脆別開口",
              bias: "聚光燈效應（覺得自己的一舉一動都被放大檢視）",
              disputing: "沉默傾聽也是參與，不必每句都發言才算在場。",
              rationalResponse: "我可以安靜地聽，這也是一種在場。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "怕一開口就暴露自己的不足",
              note: "焦慮底下是想被接納的渴望，不必急著把它消滅。",
              source: "Frederick (2009), ch3",
            },
          },
        },
        {
          text: "默默拿起手機滑了起來，假裝在回訊息，把自己從對話裡抽離",
          choiceType: "avoid-escape",
          nextNode: "r4",
          effectiveness: 1,
          feedback: {
            pros: [
              "暫時有了『正當理由』不參與，焦慮下降",
              "避免在不熟話題上說錯話",
            ],
            cons: [
              "滑手機會發出『我不想融入』的強烈訊號",
              "錯失話題轉回你熟悉的領域時重新加入的機會",
            ],
            cbt: {
              automaticThought: "反正插不上話，不如消失在他們視線裡",
              bias: "聚光燈效應＋算命（預測自己永遠接不上）",
              disputing: "話題會流轉，現在不熟不代表整場都被排除。",
              rationalResponse: "話題會變，現在不代表整晚都接不上。",
              source: "Hope, Heimberg & Turk (2019), ch10",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想被包含，卻先把自己排除，免得被別人排除",
              note: "先把自己推開，是怕等到被推開才更痛。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
      ],
    },

    r4: {
      id: "r4",
      speaker: "npc",
      text: "話題終於轉輕鬆。小薇講起上週出差的糗事，說到一半自己先笑場：「⋯⋯結果他整張臉綠掉，超好笑！」大家笑成一團，笑聲漸歇，出現一個短短的、可以接話的空檔。",
      innerVoice: "現在接話會不會太突兀？萬一我講了沒人笑，場子會不會冷掉？",
      choices: [
        {
          text: "「哈哈哈哈這讓我想到——我們部門上次也發生超扯的事⋯⋯」順著笑聲接上自己的小故事",
          choiceType: "approach-express",
          nextNode: "r5",
          effectiveness: 3,
          feedback: {
            pros: [
              "抓住空檔分享，自然延續笑點、深化連結",
              "把自己的故事貢獻給群體，從『聽眾』變『參與者』",
              "笑聲是最好的潤滑劑，此時風險最低",
            ],
            cons: [
              "說故事需要一點勇氣，講不好會有小小的失落",
              "若故事太長可能打斷原本節奏",
            ],
            cbt: {
              automaticThought: "現在接話很突兀，沒人笑會很丟臉",
              bias: "算命（預測冷場）＋聚光燈效應（放大被評價的風險）",
              disputing: "笑聲剛落、出現空檔，正是對話自然流轉的時機。",
              rationalResponse: "空檔就是邀請，接話是順水推舟而非突兀。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想與這群人共享笑聲、被當作能帶來歡樂的人",
              note: "把想分享的那一面放出來，讓渴望連結的聲音被聽見。",
              source: "Frederick (2009), ch5",
            },
          },
        },
        {
          text: "「真的假的！太好笑了哈哈哈！」跟著笑、簡短附和，但沒有延伸自己的故事",
          choiceType: "approach-partial",
          nextNode: "r5",
          effectiveness: 2,
          feedback: {
            pros: [
              "用笑聲與附和維持在場感，壓力較小",
              "沒有搶話，讓原本說故事的人保有焦點",
            ],
            cons: [
              "停留在附和層次，較難建立自己的存在感",
              "長期只附和不分享，容易被當成背景",
            ],
            cbt: {
              automaticThought: "我只要跟著笑就好，別搶風頭",
              bias: "算命（預測分享會搞砸）",
              disputing: "分享不等於搶風頭，群體對話本來就會流轉。",
              rationalResponse: "我可以在附和之外，也給自己一點發言空間。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想被看見，又怕被看見後不夠好",
              note: "在附和與分享之間，給自己一個選擇的餘地。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「這算什麼，我跟你們說一個更誇張的——」急著講一個更勁爆的故事，想把焦點拉到自己身上",
          choiceType: "overcompensate",
          nextNode: "r5",
          effectiveness: 1,
          feedback: {
            pros: [
              "確保自己被注意到，短暫解除『被忽略』的焦慮",
              "用力參與的背後，仍是想被群體接納",
            ],
            cons: [
              "搶焦點會打斷對方，顯得不在意別人",
              "用力過猛反而讓人退避，強化『我很難融入』",
            ],
            cbt: {
              automaticThought: "如果不更誇張，沒人會注意我",
              bias: "聚光燈效應（覺得必須用力才被看見）＋算命",
              disputing: "被接納不需要表演特技，平常的參與就足夠。",
              rationalResponse: "我不必更誇張，平常地分享就會被聽見。",
              source: "Beck (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "渴望被看見，卻用過度補償掩蓋真實的脆弱",
              note: "用力討來的目光，往往餵不飽想被真心接納的那個自己。",
              source: "Frederick (2009), ch4",
            },
          },
        },
      ],
    },

    r5: {
      id: "r5",
      speaker: "npc",
      text: "聚餐接近尾聲，大家起身收拾。阿傑拍拍你的肩，笑著說：「今天很高興你來喔，下次我們聚餐一定揪你一起！」小薇也在旁邊點頭：「對呀，下次別再遲到了啦，哈哈。」",
      innerVoice: "他是客套還是真的想揪我？我要當真嗎⋯⋯萬一只是禮貌說說，我當真了會不會很丟臉？",
      choices: [
        {
          text: "「好啊！謝謝你們揪我，今天真的很好玩，下次我一定到！」欣然接受，也表達期待",
          choiceType: "approach-express",
          nextNode: "end",
          effectiveness: 3,
          feedback: {
            pros: [
              "把對方的邀請當真，給關係一個明確的『要』",
              "表達期待會強化彼此連結，對方也會記得揪你",
              "為自己爭取到下一次被包含的機會",
            ],
            cons: [
              "當真後若對方沒揪，會有一點失落",
              "需要為『下次』付出實際行動",
            ],
            cbt: {
              automaticThought: "他只是客套，我當真會很丟臉",
              bias: "算命／讀心術（預先否定對方善意）",
              disputing: "他主動說『一定揪你』，是具體承諾，不是空話。",
              rationalResponse: "我可以先相信他的善意，日後再看他是否兌現。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被這群人持續接納、成為固定的一份子",
              note: "允許自己收下這份歸屬，不必先把它推開來測試真假。",
              source: "Malan (1979), ch10",
            },
          },
        },
        {
          text: "「好啊好啊，有機會的話～」客氣地回應，語氣保留，沒把話說死",
          choiceType: "approach-partial",
          nextNode: "end",
          effectiveness: 2,
          feedback: {
            pros: [
              "保留彈性，給自己日後選擇的空間",
              "沒有直接拒絕，關係上仍算友善",
            ],
            cons: [
              "模糊回應讓對方不確定你到底想不想來",
              "保留太多，下次對方可能就不再主動揪了",
            ],
            cbt: {
              automaticThought: "先別說死，免得日後想反悔很尷尬",
              bias: "算命（預測日後會出狀況）",
              disputing: "保留是中性的，但也可能被讀成『不那麼想來』。",
              rationalResponse: "我可以真誠說想來，日後真不行再調整。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想被接納，又怕承諾後會辜負期待",
              note: "在渴望與防衛之間，給自己一點時間感受那份想被包含的心情。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「不用啦不用啦，你們去就好，我比較愛自己待著～」笑著推辭，把自己先排除",
          choiceType: "avoid-escape",
          nextNode: "end",
          effectiveness: 1,
          feedback: {
            pros: [
              "先推開，免去日後被期待、被評價的壓力",
              "表面上看起來雲淡風輕，焦慮暫緩",
            ],
            cons: [
              "把對方遞來的歸屬機會推回去，下次可能不再有",
              "用『我愛獨處』掩飾『我怕被拒』，久了連自己都信了",
            ],
            cbt: {
              automaticThought: "他只是客套，我先推開才不會被拒絕",
              bias: "算命（預測被拒）＋情緒推理",
              disputing: "他主動揪你，是邀請的證據；推開反而實現了孤單。",
              rationalResponse: "我先收下邀請，而不是先預演被拒。",
              source: "Hope, Heimberg & Turk (2019), ch05",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "渴望被持續接納，卻先退縮以免被拒絕",
              note: "先推開，是怕等到被推開更痛；可那份歸屬仍在等你。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
      ],
    },

    end: {
      id: "end",
      speaker: "narrator",
      text: "你拿起外套，跟著大家走出餐廳。夜風涼涼的，阿傑還在群組裡傳了今天聚餐的照片。無論你今晚選擇怎麼靠近這群人，那都是一次練習——練習把『想被接納』說出口，而不是先把它藏起來。",
    },
  },

  endings: {
    approach: {
      summary:
        "你選擇一次次把自己推向這群人——開口、分享、提問、接受邀請。焦慮沒有消失，但你沒有讓它替你做決定。這就是『帶著焦慮而行動』的練習。",
      suggestion:
        "下一次，留意那些你差點退縮、卻還是留下的瞬間——那正是改變發生的地方。",
    },
    partial: {
      summary:
        "你試著靠近，也留了一些後路給自己。這是合理的起點：先觀察、先附和、先保留。但若長期停在這裡，『好像在場』會逐漸取代『真的在場』。",
      suggestion:
        "下次給自己一個小小的『多走一步』——多一句話、多一個故事、多一次把話說死。",
    },
    avoid: {
      summary:
        "你大部分時間選擇了退開——滑手機、推辭、延遲入座。這很常見，也很可以理解：先保護自己不被拒絕，是焦慮中很自然的反應。只是退縮保護了你的同時，也把你想被接納的渴望一起關在了門外。",
      suggestion:
        "下一次，試著至少做一件『留下來』的小事——哪怕只是放下手機、把話聽完。歸屬感往往是在『沒有逃走』的瞬間長出來的。",
    },
  },
};

export default script;
