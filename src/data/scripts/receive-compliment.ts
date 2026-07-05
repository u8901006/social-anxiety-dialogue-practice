import type { ScenarioScript } from "@/lib/types";

const script: ScenarioScript = {
  scenarioId: "receive-compliment",
  openingNarration:
    "部門月會，你剛結束專案簡報，正準備坐下，主管卻沒有放過你。接下來五分鐘，你會經歷一段被反覆肯定的過程——而最難的，往往不是別人怎麼說，而是你能不能讓這份稱讚真正進來。",
  totalRounds: 5,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "會議室裡十幾個人，投影機還亮著你的最後一張投影片。主管翻了一下手邊的筆記，抬起頭看向你——",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "npc",
      text: "「這次的專案成果很好，○○，你把使用者回饋那段處理得很細緻，方向抓得很準。我很欣賞。」全場十幾雙眼睛同時轉向你。",
      innerVoice:
        "他只是客套吧？大家心裡一定覺得我運氣好。等下他們就會發現我其實沒那麼厲害，到時候更丟臉。",
      choices: [
        {
          text: "「謝謝主管。使用者回饋那段我確實花了滿多時間整理，很高興這個方向是對的。」",
          choiceType: "approach-express",
          nextNode: "r2",
          effectiveness: 3,
          feedback: {
            pros: [
              "讓稱讚真正落地，而不是只停在客套層次",
              "具體回應你做過的事，別人會更記得你的貢獻",
              "示範了被肯定時可以不誇張、也不退縮",
            ],
            cons: [
              "承擔了「以後要保持這個水準」的隱形壓力",
              "若心裡其實很虛，這樣說會有短暫的不安湧上",
            ],
            cbt: {
              automaticThought: "他只是客套，不是真心的",
              bias: "否定正向訊息",
              disputing: "他具體指出了哪裡好，不是空泛誇獎，較像真實評價。",
              rationalResponse: "我可以先不急著否定，讓證據自己說話。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "被肯定的喜悅，與一絲陌生的自豪",
              note: "試著讓這份溫熱停留幾秒，不急著用謙虛把它沖淡。",
              source: "McCullough et al. (2003), ch7",
            },
          },
        },
        {
          text: "「喔，謝謝啦，其實是大家一起幫忙的。」",
          choiceType: "approach-partial",
          nextNode: "r2",
          effectiveness: 2,
          feedback: {
            pros: [
              "降低了「獨占功勞」的尷尬，也照顧到團隊",
              "算是接住了稱讚，沒有完全推開",
              "在台灣職場顯得得體，不會太搶眼",
            ],
            cons: [
              "把你個人的努力也分送出去，長期削弱自我效能感",
              "別人可能記不住你具體做了什麼",
              "暗暗示自己不太相信值得被單獨看見",
            ],
            cbt: {
              automaticThought: "這不算我的功勞，都是別人的",
              bias: "否定正向訊息",
              disputing: "團隊有貢獻為真，但核心確實是你負責的。",
              rationalResponse: "感謝團隊，同時也可以承認自己的角色。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "被看見時夾帶的不安",
              note: "把功勞推出去，是為了稀釋被注視的脆弱感。",
              source: "McCullough et al. (2003), ch7",
            },
          },
        },
        {
          text: "「沒有啦，其實我做得還不夠好，很多地方都還可以改，真的沒什麼啦。」",
          choiceType: "overcompensate",
          nextNode: "r2",
          effectiveness: 1,
          feedback: {
            pros: [
              "想把功勞往外推，是怕承擔期待後的脆弱，這很真實",
              "看起來很謙虛，符合職場的社交腳本",
              "暫時不用面對「我做得不錯」這個陌生感受",
            ],
            cons: [
              "重複否定會讓主管困惑，覺得你不夠相信自己",
              "把稱讚當威脅，強化「我不配」的核心信念",
              "久之別人會真的停止給你正向回饋",
            ],
            cbt: {
              automaticThought: "我沒那麼好，他們一定搞錯了",
              bias: "冒牌者想法",
              disputing: "成果是真實存在的，與你「配不配」無關。",
              rationalResponse: "收下評價，不代表我要從此完美。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對「原來我做得到」的喜悅感到恐懼",
              note: "急著撇清，是想把「我很好」的感覺推得遠遠的。",
              source: "McCullough et al. (2003), ch9",
            },
          },
        },
      ],
    },

    r2: {
      id: "r2",
      speaker: "npc",
      text: "「不要客氣。跟大家分享一下，你當初是怎麼處理使用者反彈那個難關的？我想讓大家學一下你的方法。」",
      innerVoice:
        "他要我分享方法？萬一我講出來只是土法煉鋼，根本沒有什麼方法論，大家就會知道我只是在硬撐。",
      choices: [
        {
          text: "「好。那時候我先把反彈分成三類，優先處理重複出現的。中間也卡關過，後來是跟工程那邊反覆測才穩下來。」",
          choiceType: "approach-express",
          nextNode: "r3",
          effectiveness: 3,
          feedback: {
            pros: [
              "具體分享，讓你的貢獻被真正看見",
              "誠實承認過程有困難，反而更可信",
              "給了團隊可學習的內容，建立專業形象",
            ],
            cons: [
              "公開說話本身就是壓力，這一步需要勇氣",
              "分享後可能引來更多提問與關注",
            ],
            cbt: {
              automaticThought: "我沒有方法，只是運氣好",
              bias: "冒牌者想法",
              disputing: "你能說出分類與處理順序，這就是方法。",
              rationalResponse: "我的做法不完美，但確實有效。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "對自己能力的自豪，與被認可的踏實感",
              note: "允許自己說「這是我做的」，不需要先貶低再開口。",
              source: "Frederick (2009), ch5",
            },
          },
        },
        {
          text: "「喔，就……就是照平常那樣處理啊，也沒什麼特別的方法。」",
          choiceType: "safety-behavior",
          nextNode: "r3",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有逃跑，至少還留在對話裡",
              "含糊帶過可以降低被檢視的焦慮",
              "避免說太多反而出錯的風險",
            ],
            cons: [
              "錯失讓貢獻被具體記住的機會",
              "「沒什麼特別」會被當真，下次功勞更難歸給你",
              "強化了「我不值得被看見」的隱性信念",
            ],
            cbt: {
              automaticThought: "如果我講清楚，他們會發現沒什麼",
              bias: "讀心術",
              disputing: "你無法知道別人怎麼評價，證據是你確實做到了。",
              rationalResponse: "分享做法不等於自誇，是正常的工作交流。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "怕被看透、怕自豪被拆穿的恐懼",
              note: "用模糊把自己藏起來，是怕清晰的自己會被評價。",
              source: "Malan (1979), ch10",
            },
          },
        },
        {
          text: "「其實那個難關不是我處理的，是小美幫忙的，我只是剛好在旁邊。」",
          choiceType: "avoid-escape",
          nextNode: "r3",
          effectiveness: 1,
          feedback: {
            pros: [
              "把焦點轉開，當下的壓力立刻減輕",
              "確實也照顧到協力同事，不全然是壞事",
              "避開了「被當成專家」的長期負擔",
            ],
            cons: [
              "把不屬於小美的責任也推過去，對她並不公平",
              "主管會記得「這不是你做的」，未來機會可能流失",
              "系統性地否定自己的努力，冒牌感會更牢固",
            ],
            cbt: {
              automaticThought: "這不算我的功勞，不能承認",
              bias: "否定正向訊息",
              disputing: "專案是你主責，求助與分工都是你的管理，仍是你的成果。",
              rationalResponse: "我可以感謝小美，同時承認這是我帶的案子。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "對「我是有能力的人」這個身分的恐懼",
              note: "把功勞完全送出去，是怕承認之後就再也沒有退路。",
              source: "McCullough et al. (2003), ch7",
            },
          },
        },
      ],
    },

    r3: {
      id: "r3",
      speaker: "npc",
      text: "「對啊，那段我真的覺得很棒。」旁邊的同事也開口附和，「我後來還跟我們組的人推薦你那個做法，大家都在問。」你被主管和同事雙重肯定包圍。",
      innerVoice:
        "兩個人同時誇我？太奇怪了。他們一定是串通好的，或是根本沒看仔細。等下真相大白，我會比現在更丟臉。",
      choices: [
        {
          text: "「謝謝你們。聽到這樣我真的滿開心的，因為那段我本來很沒把握。」",
          choiceType: "approach-express",
          nextNode: "r4",
          effectiveness: 3,
          feedback: {
            pros: [
              "接住喜悅，同時誠實說出不確定，反而真誠",
              "讓雙重肯定真正被吸收，不是左耳進右耳出",
              "示範了「我可以同時做得不錯，也曾經沒把握」",
            ],
            cons: [
              "承認「開心」會讓冒牌感短暫升高",
              "說出「沒把握」需要對脆弱的承受力",
            ],
            cbt: {
              automaticThought: "他們串通好了，不是真心的",
              bias: "讀心術",
              disputing: "兩人獨立給出正向回饋，串通的假設缺乏證據。",
              rationalResponse: "我可以先接受，再慢慢驗證，不需要立刻判斷真假。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "被兩個人同時肯定的喜悅，以及隨之而來的想哭",
              note: "雙重肯定最容易喚起想哭的衝動，那是喜悅在找出口。",
              source: "McCullough et al. (2003), ch7",
            },
          },
        },
        {
          text: "「你們太誇張了啦，我沒那麼厲害。」笑著把話題轉開。",
          choiceType: "approach-partial",
          nextNode: "r4",
          effectiveness: 2,
          feedback: {
            pros: [
              "用幽默化解尷尬，氣氛沒有僵住",
              "沒有完全否定，算是軟性地接住",
              "符合台灣職場「不能太得意」的潛規則",
            ],
            cons: [
              "把肯定變成玩笑，自己也不會當真",
              "笑著否認，久了會分不清是謙虛還是真的不信",
              "別人會學到「稱讚你會被推開」，漸漸不再說",
            ],
            cbt: {
              automaticThought: "他們誇大了，真相沒那麼好",
              bias: "否定正向訊息",
              disputing: "他們描述的是具體行為與效果，不是空泛吹捧。",
              rationalResponse: "我可以接受他們看到的，不需要先打折扣。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對「我真的不錯」這個念頭的抗拒",
              note: "笑著否認，是用幽默把喜悅擋在門外。",
              source: "Frederick (2009), ch5",
            },
          },
        },
        {
          text: "「沒有沒有，你們別這樣說，真的沒什麼啦。」連連擺手，急著打斷。",
          choiceType: "overcompensate",
          nextNode: "r4",
          effectiveness: 1,
          feedback: {
            pros: [
              "急著打斷，是因為雙重肯定太燙手，這是正常的",
              "擺手否認能快速終止被注視的難受",
              "暫時把冒牌感壓下去，不用正面處理",
            ],
            cons: [
              "公開否認兩位同事的好意，場面會有點尷尬",
              "強化「我不配被稱讚」的迴圈，下次更難接受",
              "同事會覺得稱讚你很累，漸漸選擇沉默",
            ],
            cbt: {
              automaticThought: "他們越誇我，越表示他們不了解我",
              bias: "冒牌者想法",
              disputing: "「不了解」是你的推論，他們看到的是具體成果。",
              rationalResponse: "我不需要他們完全了解我，也能接受他們的肯定。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對「被雙重肯定」的強烈喜悅感到失控的恐懼",
              note: "越大的喜悅越容易引發否認，因為它太陌生了。",
              source: "McCullough et al. (2003), ch9",
            },
          },
        },
      ],
    },

    r4: {
      id: "r4",
      speaker: "npc",
      text: "「所以，」主管轉向你，語氣認真起來，「之後這類使用者體驗的案子，就交給你負責帶，你覺得呢？」",
      innerVoice:
        "完了。他現在覺得我很行，等下我帶不起來，他就會發現我是騙他的。我應該先拒絕比較安全，免得摔得更慘。",
      choices: [
        {
          text: "「好，我願意接。不過我會需要一些資源和時間熟悉，到時候可能再跟您請教。」",
          choiceType: "approach-express",
          nextNode: "r5",
          effectiveness: 3,
          feedback: {
            pros: [
              "接受責任，讓正向評價轉化為實際的成長機會",
              "同時務實設限，沒有硬撐完美形象",
              "示範了「我可以被信任，也需要支持」的真實",
            ],
            cons: [
              "承擔更大責任，未來的焦慮門檻會提高",
              "若之後表現不如預期，失落感會更強",
            ],
            cbt: {
              automaticThought: "接了就會被發現我不行",
              bias: "災難化",
              disputing: "被賦予責任是基於已展現的能力，不是盲目信任。",
              rationalResponse: "我可以邊做邊學，不需要一開始就完美。",
              source: "Beck, J.S. (2021), ch17",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "被信任的踏實感，以及對未來的興奮",
              note: "接受責任等於接受「我是有能力的」，讓這個身分留下來。",
              source: "Frederick (2009), ch5",
            },
          },
        },
        {
          text: "「嗯……我先在旁邊觀摩一下別人怎麼帶好了，我可能還沒準備好。」",
          choiceType: "approach-partial",
          nextNode: "r5",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有完全拒絕，保留了未來參與的空間",
              "誠實表達還沒準備好，是健康的自我覺察",
              "降低一次跳太大幅度的風險",
            ],
            cons: [
              "把主導權推回去，錯失被正式授權的時機",
              "「還沒準備好」可能成為長期的迴避藉口",
              "主管會解讀為你對自己比較沒把握",
            ],
            cbt: {
              automaticThought: "我還沒準備好，會搞砸",
              bias: "災難化",
              disputing: "沒有人是「完全準備好」才接新任務的。",
              rationalResponse: "準備是在做的過程中補齊的，不是事前湊齊。",
              source: "Beck, J.S. (2021), ch18",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對「被正式託付」的恐懼與隱約的渴望",
              note: "退一步觀望，是怕接住期待後就沒有退路。",
              source: "Malan (1979), ch10",
            },
          },
        },
        {
          text: "「我覺得可能找資深一點的人比較合適，我怕我還不太行。」",
          choiceType: "avoid-escape",
          nextNode: "r5",
          effectiveness: 1,
          feedback: {
            pros: [
              "婉拒能避開「帶不起來被發現」的恐懼",
              "確實也尊重了資深同事的資歷",
              "當下壓力立刻解除，感到安全",
            ],
            cons: [
              "把成長機會推走，冒牌感會被鞏固為「我真的不行」",
              "主管會調整對你的期待，未來類似機會變少",
              "用迴避維持安全，長期會讓焦慮範圍越縮越小",
            ],
            cbt: {
              automaticThought: "接了會被拆穿，不如先逃",
              bias: "冒牌者想法",
              disputing: "「怕被拆穿」是預測，不是已發生的事實。",
              rationalResponse: "我可以接下並爭取支持，不必一次做到完美。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "對「被正式看見與託付」的強烈焦慮",
              note: "拒絕不是因為不想，是因為被信任太令人害怕。",
              source: "McCullough et al. (2003), ch7",
            },
          },
        },
      ],
    },

    r5: {
      id: "r5",
      speaker: "npc",
      text: "會議散場後，一位同事走過來，壓低聲音說：「欸，說真的，你剛剛那樣滿厲害的，我很羨慕你可以在大家面前那樣被肯定。」",
      innerVoice:
        "連私下都這樣說？他一定只是客套。如果他真的知道我每個禮拜都在懷疑自己，就不會說我厲害了。我到底在演什麼？",
      choices: [
        {
          text: "「謝謝，聽你這樣說我很感動。其實我也還在學，不過你這樣講我有點被鼓勵到。」",
          choiceType: "approach-express",
          nextNode: "end",
          effectiveness: 3,
          feedback: {
            pros: [
              "接住私下溫暖，讓這份肯定真正落地",
              "誠實說出感動，加深了真實的連結",
              "示範了「我可以被羨慕，也可以承認還在學」",
            ],
            cons: [
              "承認感動需要對脆弱的承受力",
              "關係會因此更近一些，這本身也帶來新的不安",
            ],
            cbt: {
              automaticThought: "他只是客套，知道真相就不會這樣說",
              bias: "否定正向訊息",
              disputing: "他在私下、無觀眾時主動說，較不像是社交客套。",
              rationalResponse: "我可以收下這份善意，不必先假設他在說謊。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "被另一個人真心肯定的想哭與溫暖",
              note: "私下的一對一肯定最容易觸動想哭，讓它停留。",
              source: "McCullough et al. (2003), ch9",
            },
          },
        },
        {
          text: "「啊，還好啦，你不要這樣說。」笑著打圓場，把話題帶開。",
          choiceType: "safety-behavior",
          nextNode: "end",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有直接否定對方，關係沒有受傷",
              "用笑鬧化解，氣氛保持輕鬆",
              "避免在私下場合流露太多情緒",
            ],
            cons: [
              "把對方的善意推開，他可能不會再說第二次",
              "打圓場也把自己想被肯定的渴望一起蓋住",
              "錯失讓正向感受真正停留的機會",
            ],
            cbt: {
              automaticThought: "他這樣說我會尷尬，快轉走",
              bias: "否定正向訊息",
              disputing: "尷尬是因為不習慣被肯定，不是因為對方說錯。",
              rationalResponse: "我可以先謝謝他，再決定要不要多說。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對「被一個人真心看見」的強烈感動",
              note: "打圓場是怕感動一旦停留，就會失控流露。",
              source: "Frederick (2009), ch5",
            },
          },
        },
        {
          text: "「沒有啦，我只是運氣好，剛好那陣子比較有空而已。」",
          choiceType: "overcompensate",
          nextNode: "end",
          effectiveness: 1,
          feedback: {
            pros: [
              "用運氣解釋一切，當下的冒牌感會緩解",
              "顯得謙虛，不會顯得太得意",
              "避免被期待「下次也要這樣」的壓力",
            ],
            cons: [
              "把所有努力歸給運氣，等於否定自己半年來的付出",
              "對方會覺得真心話被潑冷水，下次選擇沉默",
              "「我只是運氣好」說久了，會真的這樣相信自己",
            ],
            cbt: {
              automaticThought: "這一切都是運氣，跟我無關",
              bias: "冒牌者想法",
              disputing: "運氣無法解釋你反覆做出的具體判斷與處理。",
              rationalResponse: "運氣幫了一點忙，但能力是主要的。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對「我的努力是有價值的」這個真相的迴避",
              note: "歸功運氣，是把喜悅與自豪一起推開的最徹底方式。",
              source: "McCullough et al. (2003), ch9",
            },
          },
        },
      ],
    },

    end: {
      id: "end",
      speaker: "narrator",
      text: "會議結束，你走出會議室。一路上，腦海裡可能還在重播剛才的每一句稱讚。你不需要全部相信，也不需要全部推開——練習的是，讓一部分的肯定，真正留下來。",
    },
  },

  endings: {
    approach: {
      summary:
        "你試著讓稱讚落地——不是全盤相信，也沒有急著推開。你接住了具體的努力，誠實說出不確定，並在被賦予責任時保留了真實的設限。這是一種練習：允許自己短暫擁有「我做得不錯」的感覺，哪怕只有幾秒鐘。",
      suggestion:
        "下次被稱讚時，留意身體有沒有一股想把它推開的衝動。試著在心裡說「我收到了」，再決定要不要回應。冒牌感不會消失，但它會在你練習承接的過程中，慢慢失去否決權。",
    },
    partial: {
      summary:
        "你接住了一部分的肯定，也推開了一部分。在某些時刻你願意靠近，在另一些時刻你選擇用幽默或轉移來稀釋。這沒有關係——被稱讚本來就是一件令人不知所措的事，尤其是當它來得太密集。",
      suggestion:
        "下次也許可以試著多承接一點點，哪怕只是一句完整的「謝謝，我很開心」。先從一句不附帶否定的感謝開始，慢慢擴大你能承受的喜悅面積。",
    },
    avoid: {
      summary:
        "你把大部分的肯定都擋在外面。這幫你避開了被期待壓住的恐懼，也讓當下的焦慮快速降下來。但被推開的，其實不只是別人的稱讚，還有你對自己努力的承認。想把功勞往外推，是怕承擔期待後的脆弱，這是很真實的恐懼。",
      suggestion:
        "先不要勉強自己立刻接受。可以試著在私底下、沒有觀眾的時候，對自己說一次「這次我做得不錯」。當獨處時的自我肯定變得比較熟悉，公開承接就會慢慢變得不那麼陌生。",
    },
  },
};

export default script;
