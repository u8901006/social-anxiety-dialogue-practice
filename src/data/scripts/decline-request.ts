import type { ScenarioScript } from "@/lib/types";

const script: ScenarioScript = {
  scenarioId: "decline-request",
  openingNarration:
    "接近下班，你桌上還攤著三個同時在跑的專案，期限都壓在下週。這時候，同事小陳端著咖啡走過來，臉上帶著那種「想拜託你一件事」的笑。接下來五個回合，他會一步一步測試你的底線——而最難的，從來不是拒絕這件事本身，而是開口的時候，心裡那個「這樣會不會破壞關係」的聲音。",
  totalRounds: 5,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你抬起頭，小陳已經在你桌邊站定了，手指無意識地敲著你的隔板。他清了清喉嚨——",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "npc",
      text: "「欸，我有個專案啦，客戶那邊臨時加進來的。我想來想去，整個辦公室就你最細心、最靠得住了，這個能不能幫忙接一下？」他看著你，語氣誠懇。",
      innerVoice:
        "他說「整個辦公室就你最細心」——如果我拒絕，他一定覺得我不給面子。而且以後他有什麼好康的，大概也不會再找我了。",
      choices: [
        {
          text: "「謝謝你想到我，這份信任我很感激。不過我現在手上三個專案都在趕下週，真的沒辦法再接新的。如果你願意，我可以跟你一起想怎麼拆，或幫你看看找誰比較合適。」",
          choiceType: "approach-express",
          nextNode: "r2",
          effectiveness: 3,
          feedback: {
            pros: [
              "清楚說明了真實負荷，沒有含糊帶過",
              "先肯定了對方的善意，設限但沒有否定關係",
              "主動提出替代方向，讓對方有台階下",
            ],
            cons: [
              "當下要直接說出「沒辦法」，罪惡感會立刻湧上",
              "同事可能短暫失望，氣氛會停頓一下",
            ],
            cbt: {
              automaticThought: "如果我拒絕，他以後一定不會再找我、不會幫我",
              bias: "高估社交代價",
              disputing: "你會因為朋友拒絕一次幫忙，就永遠不理他嗎？（雙重標準）",
              rationalResponse: "一次拒絕不會毀掉關係，關係是長期累積出來的。",
              source: "Beck, J.S. (2021), ch15",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想保護自己不被壓垮的需求，與健康的設限衝動",
              note: "說出「我沒辦法」，是讓被擋住的自我主張第一次有了出口。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「喔……我看看行程喔，可能要看一下時間排不排得進來，我再回你。」",
          choiceType: "safety-behavior",
          nextNode: "r2",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有直接拒絕，當下的關係沒有衝突",
              "給自己爭取了一點緩衝時間去想怎麼說",
              "避免了當下立刻被情緒淹沒",
            ],
            cons: [
              "含糊拖延會讓對方解讀成「還有機會」，繼續施壓",
              "把難題往後推，下次要拒絕反而更難開口",
              "沒有真正設限，等於把決定權交給了對方",
            ],
            cbt: {
              automaticThought: "如果我現在就說不行，場面會很僵",
              bias: "高估社交代價",
              disputing: "拖延只是延後衝突，沒辦法真的避開它。",
              rationalResponse: "明確的回覆，比模糊的等待更不傷關係。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想設限卻不敢說出口的真實需求",
              note: "用「再看看」包裝，是怕明確會引發對方失望的焦慮。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「好啊，沒問題，你直接丟過來就好。」",
          choiceType: "overcompensate",
          nextNode: "r2",
          effectiveness: 1,
          feedback: {
            pros: [
              "關係暫時安全，不用承受拒絕的罪惡感",
              "當下氣氛輕鬆，不用面對尷尬的停頓",
              "維持了「好合作、好相處」的形象",
            ],
            cons: [
              "手上已經超載，再加一個會壓垮既有的專案",
              "答應後的焦慮與怨氣會累積，反而更傷關係",
              "示範了「我的底線可以被無限推移」，下次壓力更大",
            ],
            cbt: {
              automaticThought: "只要答應了，關係就安全了",
              bias: "災難化",
              disputing: "你會要求一個已經超載的朋友硬接下你的事嗎？",
              rationalResponse: "短暫的和諧，換來的往往是長期的失衡。",
              source: "Beck, J.S. (2021), ch15",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對設限的恐懼，以及想被需要的心情",
              note: "想把所有請求都扛下來，是怕拒絕會破壞關係。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
      ],
    },

    r2: {
      id: "r2",
      speaker: "npc",
      text: "見你猶豫，小陳連忙補一句：「不會太久啦，真的就幫我看一下就好，很快的，不會花你太多時間。」他邊說邊把手機上的檔案頁面秀給你看。",
      innerVoice:
        "他說「很快的」，可是每次人家說很快，最後都很花時間。但如果我現在才說不行，會不會顯得我剛剛只是在敷衍他？",
      choices: [
        {
          text: "「我知道你想盡快處理掉。但就算只是『看一下』，我也得把脈絡搞清楚才有辦法給意見，那就不是看一下的時間了。這週我真的排不進來。你可以試試找OO，他上個月剛做過很類似的case。」",
          choiceType: "approach-express",
          nextNode: "r3",
          effectiveness: 3,
          feedback: {
            pros: [
              "點破「很快」其實不快，避免事後被綁住",
              "把替代人選具體化，幫對方往前走",
              "語氣溫和但立場清楚，沒有攻擊對方",
            ],
            cons: [
              "反駁「很快的」可能讓對方一時語塞",
              "推薦別人等於把自己排除在外，會有一點失落",
            ],
            cbt: {
              automaticThought: "他說很快，我就應該能騰得出來",
              bias: "讀心術",
              disputing: "對方輕描淡寫，不等於你的負荷會變輕。",
              rationalResponse: "我對自己的負荷最清楚，不是他說了算。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想守護自己時間與精力的清晰意識",
              note: "不被對方的「很快」綁架，是讓設限站穩的練習。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「好吧……那我真的只能快速看一下喔，不能保證什麼，有問題你再去找別人。」",
          choiceType: "approach-partial",
          nextNode: "r3",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有完全拒絕，保留了幫忙的意願",
              "加了「不能保證」，試圖幫自己留一條退路",
              "降低了當下拒絕所帶來的壓力",
            ],
            cons: [
              "「看一下」通常會演變成全程投入，退路形同虛設",
              "模糊的承諾讓對方期待升高，事後更難抽身",
              "設限被自己稀釋，等於半放棄了底線",
            ],
            cbt: {
              automaticThought: "至少幫一下，他就應該不會生氣了吧",
              bias: "高估社交代價",
              disputing: "半答應換來的，往往是更難脫身的處境。",
              rationalResponse: "打折的設限，會被當成還可以再談的空間。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想設限卻害怕對方失望的拉扯",
              note: "用「不能保證」安撫自己，其實已經讓步了。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「好啦好啦，那我等下快速幫你掃一下。」",
          choiceType: "overcompensate",
          nextNode: "r3",
          effectiveness: 1,
          feedback: {
            pros: [
              "答應了就不用面對拒絕的不舒服",
              "同事會覺得你夠意思，當下氣氛愉快",
              "暫時擺脫被反覆拜託的壓力",
            ],
            cons: [
              "「快速掃一下」幾乎一定會擴大成完整工作",
              "默許了「你最細心所以可以無限加碼」的設定",
              "累積的疲憊會在其他專案上以失誤的形式爆發",
            ],
            cbt: {
              automaticThought: "幫一下沒關係，應該不會花太久",
              bias: "災難化",
              disputing: "你會叫一個已經滿檔的人「順便幫一下」嗎？",
              rationalResponse: "「一下」很少真的只是一下。",
              source: "Beck, J.S. (2021), ch15",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對說「不」的強烈恐懼",
              note: "用討好換取暫時的安全，是怕拒絕會破壞關係。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
      ],
    },

    r3: {
      id: "r3",
      speaker: "npc",
      text: "你暗示了現在真的很忙，小陳卻沒有退，反而往前靠了一步：「不然這樣，你先幫我起個頭就好嘛，後面我自己來。起頭對你來說很快啦！」",
      innerVoice:
        "他都已經退一步了，我如果連「起個頭」都不肯，是不是太過分？可是起頭之後，他一定又會回來找我接下去的……",
      choices: [
        {
          text: "「我懂你想先找個切入點。但『起頭』其實是最需要把脈絡想清楚的環節，沒辦法隨便交差。我現在沒辦法給這個專案應有的注意力。等我下下週這批結束，如果你還需要，我們再來談。」",
          choiceType: "approach-express",
          nextNode: "r4",
          effectiveness: 3,
          feedback: {
            pros: [
              "誠實說明「起頭」並不輕鬆，破解了縮小化",
              "給出明確的時間條件，不是無限期的拒絕",
              "保留了「未來可能幫忙」的善意空間",
            ],
            cons: [
              "連續設限兩次，當下會有明顯的壓力",
              "同事可能解讀成「你根本不想幫我」",
            ],
            cbt: {
              automaticThought: "他都退一步了，我不能再拒絕",
              bias: "高估社交代價",
              disputing: "對方退一步，不代表你欠他一個答應。",
              rationalResponse: "設限是可以重複的，不必一次讓到底。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想守護自己節奏與專注力的真實需要",
              note: "面對步步進逼仍站得住，是設限最關鍵的一步。",
              source: "Frederick (2009), ch4",
            },
          },
        },
        {
          text: "「呃……起頭喔……那我真的只能起個大概的框架，細節你自己補喔。」",
          choiceType: "safety-behavior",
          nextNode: "r4",
          effectiveness: 2,
          feedback: {
            pros: [
              "用最小幅度的讓步，試圖止住對方的攻勢",
              "「只起框架」聽起來負擔比較輕",
              "沒有正面衝突，氣氛勉強維持住",
            ],
            cons: [
              "「起框架」會自然延伸成完整責任，界線被沖淡",
              "對方學到「再逼一下，你就會讓步」",
              "自己內心會因為再次妥協而更沮喪",
            ],
            cbt: {
              automaticThought: "至少起個頭，他應該就會放過我了",
              bias: "讀心術",
              disputing: "退讓通常換來的是更多要求，不是放過。",
              rationalResponse: "半步的退讓，往往通往完全的承擔。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想堅持卻扛不住壓力的疲憊",
              note: "用最小讓步安撫對方，討好正在取代設限。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「嗯……其實這個我真的不熟啦，你去找OO會比較快，他比較擅長這一塊。」",
          choiceType: "avoid-escape",
          nextNode: "r4",
          effectiveness: 1,
          feedback: {
            pros: [
              "把焦點轉開，當下的壓力立刻減輕",
              "推薦了人選，看起來也算是幫上忙",
              "不用正面面對「我選擇不幫」的尷尬",
            ],
            cons: [
              "用「不熟」當藉口，下次很難再拿出來用",
              "把責任丟給OO，對方未必願意，也可能反彈",
              "沒有真正練習設限，只是換個方式逃開",
            ],
            cbt: {
              automaticThought: "只要推給別人，我就不用當壞人了",
              bias: "高估社交代價",
              disputing: "逃避設限，等於把界線的決定權交給運氣。",
              rationalResponse: "我可以直接說忙，不需要用藉口包裝。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "對直接設限的強烈恐懼",
              note: "用藉口脫身，是怕說「我不願意」會引爆關係。",
              source: "Malan (1979), ch10",
            },
          },
        },
      ],
    },

    r4: {
      id: "r4",
      speaker: "npc",
      text: "小陳的表情變了，語氣裡帶上一點委屈：「唉，好吧。只是……上次你那個報告趕不出來，我也是加班幫你弄到半夜的耶。我一直以為，我們是那種互相幫忙的關係。」",
      innerVoice:
        "他說得對，上次他真的幫過我。如果我現在不幫他，我就是個忘恩負義的人。其他人知道了，一定都會覺得我很自私。",
      choices: [
        {
          text: "「我一直記得你上次幫我，真的很感謝。也正因為我重視我們的關係，我不想隨便接下來做不到、反而拖累你。我現在是真的過載，不是不願意。等這批結束，我主動回來幫你。」",
          choiceType: "approach-express",
          nextNode: "r5",
          effectiveness: 3,
          feedback: {
            pros: [
              "承認人情，沒有否認對方的好意",
              "把「人情」和「這次能不能接」分成兩件事處理",
              "用具體承諾取代含糊，保住了關係的厚度",
            ],
            cons: [
              "要開口「感謝但仍拒絕」，罪惡感會非常強",
              "對方可能一時聽不進去，場面會冷下來",
            ],
            cbt: {
              automaticThought: "他幫過我，我拒絕就是忘恩負義",
              bias: "高估社交代價",
              disputing: "上次他幫你是自願；這次你拒也是合理的。（雙重標準）",
              rationalResponse: "感恩不等於無限期償還，關係不是一本帳。",
              source: "Beck, J.S. (2021), ch15",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "對關係的真實看重，與設限的勇氣同時並存",
              note: "在人情壓力下仍守住界線，是最難也最珍貴的練習。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「好啦……那我幫你做一小部分，就當作還上次的人情，但其他你要自己想辦法喔。」",
          choiceType: "approach-partial",
          nextNode: "r5",
          effectiveness: 2,
          feedback: {
            pros: [
              "想還人情是合理的，部分幫忙也算是一種交代",
              "沒有完全崩盤，試圖守住一部分界線",
              "緩和了人情壓力所帶來的緊張",
            ],
            cons: [
              "用「還人情」合理化讓步，界線又被推進了",
              "對方會記住「搬人情這招有效」，下次故技重施",
              "半幫不幫最容易演變成全包",
            ],
            cbt: {
              automaticThought: "至少還一部分人情，他應該就不會記恨了",
              bias: "讀心術",
              disputing: "你會用「上次幫過你」逼朋友還債嗎？（雙重標準）",
              rationalResponse: "人情可以真心感謝，不必用過載來償還。",
              source: "Beck, J.S. (2021), ch15",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "被罪惡感壓住的真實負荷",
              note: "用「還人情」包裝討好，是怕被看成自私。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「好好好，你說得對啦，上次真的麻煩你了，這次我來，沒問題。」",
          choiceType: "overcompensate",
          nextNode: "r5",
          effectiveness: 1,
          feedback: {
            pros: [
              "人情帳當下結清，關係看似修復",
              "不用背負「忘恩負義」的標籤",
              "對方的委屈立刻被安撫下來",
            ],
            cons: [
              "用過載去償還人情，既有的專案會被拖垮",
              "等於承認「人情可以用來無限加碼」",
              "累積的怨氣會在日後以其他方式爆發",
            ],
            cbt: {
              automaticThought: "不幫他，就是我太自私、忘恩負義",
              bias: "災難化",
              disputing: "你會要求一個滿檔的朋友，為了還人情而崩潰嗎？",
              rationalResponse: "感謝和過載是兩回事，可以同時存在。",
              source: "Beck, J.S. (2021), ch15",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對被認為自私的強烈恐懼",
              note: "用過度償還換取不被討厭，討好正在越界。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
      ],
    },

    r5: {
      id: "r5",
      speaker: "npc",
      text: "小陳嘆了口氣，態度軟了下來：「好吧好吧，那如果真的很忙，你什麼時候可以幫？下禮拜？還是下下禮拜？總有個時間吧。」他把台階遞到你面前，等著你接。",
      innerVoice:
        "他都退到這個地步了，我如果連一個時間都不肯給，會不會太絕情？可是只要我給了時間，不就等於答應了嗎……",
      choices: [
        {
          text: "「我真的沒辦法給你一個確定的時間，因為接下來幾週都已經排滿了，我不想隨口答應然後做不到。這個專案我建議你先找OO或小美，他們現在比較有餘裕。如果你之後想找人討論，隨時可以來找我聊。」",
          choiceType: "approach-express",
          nextNode: "end",
          effectiveness: 3,
          feedback: {
            pros: [
              "明確表示無法接，不給對方虛假的期待",
              "把「幫忙討論」和「接下專案」分開，留住了善意",
              "推薦了實際可行的人選，負責任地收尾",
            ],
            cons: [
              "連台階都不接，當下會有強烈的罪惡感",
              "對方可能短暫覺得你「真的不幫了」",
            ],
            cbt: {
              automaticThought: "不給他時間，就是太絕情、不近人情",
              bias: "高估社交代價",
              disputing: "你會希望朋友為了給你面子，隨口答應做不到的事嗎？",
              rationalResponse: "誠實的「不行」，比虛假的「再看看」更尊重對方。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被允許說「不」的深切渴望",
              note: "在台階面前仍選擇真實，是設限最完整的樣貌。",
              source: "Frederick (2009), ch4",
            },
          },
        },
        {
          text: "「嗯……下下禮拜好了，到時候我再看看。」",
          choiceType: "safety-behavior",
          nextNode: "end",
          effectiveness: 2,
          feedback: {
            pros: [
              "給了對方一個答案，當下的壓力緩解",
              "「到時候再看看」幫自己留了一絲退路",
              "沒有正面撕破臉，氣氛平和",
            ],
            cons: [
              "「下下禮拜」通常到時還是做不到，變成更大的失信",
              "含糊的時間等於變相答應，責任沒有真正卸下",
              "對方會記在心裡，到期再來催，壓力只是被延後",
            ],
            cbt: {
              automaticThought: "先給個時間，他就會先放過我了",
              bias: "高估社交代價",
              disputing: "拖延一個做不到的承諾，是另一種失信。",
              rationalResponse: "如果給不出真實的時間，不如直接說清楚。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想脫身卻不敢明說的壓力",
              note: "用模糊的時間換取脫身，是怕「不行」會傷關係。",
              source: "McCullough et al. (2003), ch2",
            },
          },
        },
        {
          text: "「好啦好啦，那就下下禮拜，我到時候一定幫你弄。」",
          choiceType: "overcompensate",
          nextNode: "end",
          effectiveness: 1,
          feedback: {
            pros: [
              "給了明確承諾，對方滿意收場",
              "當下的關係緊張完全解除",
              "暫時擺脫了被反覆施壓的疲憊",
            ],
            cons: [
              "「一定幫你弄」在過載狀態下幾乎做不到",
              "許下做不到的承諾，事後失信傷關係更深",
              "再次示範「只要持續施壓，我最終會鬆口」",
            ],
            cbt: {
              automaticThought: "答應了，就不用再撐著拒絕了",
              bias: "災難化",
              disputing: "你會把一個做不到的承諾，當成關係的贖金嗎？",
              rationalResponse: "為了脫身而許諾，最後賠上的是信任。",
              source: "Hope, Heimberg & Turk (2019), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "對持續設限的疲憊與放棄",
              note: "用承諾換取脫身，是討好接管了最後的界線。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
      ],
    },

    end: {
      id: "end",
      speaker: "narrator",
      text: "小陳最後還是端著咖啡離開了。你盯著螢幕，心跳還沒完全平復。拒絕一個人的請求，從來就不會變得「很輕鬆」——但你可以慢慢練習，讓它在心裡的重量，不再等於「關係的死刑」。",
    },
  },

  endings: {
    approach: {
      summary:
        "你試著把「拒絕」和「破壞關係」分開來看。你說明了真實的負荷，承認了人情卻沒有被它綁架，也在最後的台階面前，選擇了誠實而不是敷衍。設限從來不是冷漠——正因為你看重這段關係，才不想用一個做不到的承諾去敷衍它。",
      suggestion:
        "下次再遇到類似的情境，留意身體那股「答應了就解脫」的衝動。試著在心裡問自己一句：「我會要求一個已經超載的朋友，硬接下這件事嗎？」把這個雙重標準翻過來，往往就是設限的起點。",
    },
    partial: {
      summary:
        "你在某些時刻守住了界線，在另一些時刻讓了步。這很正常——面對同事一步步施壓、再加上人情和台階，要每一次都站穩，幾乎是不可能的。你已經開始練習「拒絕不等於關係破裂」這件事，只是還沒有完全相信它。",
      suggestion:
        "下次也許可以試著，在最少一個回合裡，給出一個明確的「沒辦法」——不附帶藉口、也不附帶模糊的時間。先從一次乾淨的設限開始，慢慢累積「拒絕了，關係其實沒有崩塌」的真實經驗。",
    },
    avoid: {
      summary:
        "你最後還是把專案接了下來，或給了一個做不到的承諾。這幫你避開了拒絕當下的痛苦，也暫時保住了關係的表面和諧。想把所有請求都扛下來，是怕拒絕會破壞關係——這是很真實的恐懼，尤其是在不好意思拒絕的職場文化裡。只是被壓住的，不只是這個專案，還有你說「我已經滿了」的權利。",
      suggestion:
        "先不要責怪自己。可以試著在沒有真實壓力的時候，對著鏡子或在心裡，把「我現在沒辦法，謝謝你想到我」這句話說出口。當這句話對你不再陌生，下一次面對真實的請求，它會比較容易自然地溜出來。",
    },
  },
};

export default script;
