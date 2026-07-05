import type { ScenarioScript } from "@/lib/types";

const script: ScenarioScript = {
  scenarioId: "express-disagreement",
  openingNarration:
    "週六午後，咖啡廳靠窗的位置。你的好友小嵐把你約出來，筆電轉向你——螢幕上是一份密密麻麻的九州七日遊行程表，每一格都填滿了景點。她的眼睛發亮，手指在觸控板上滑來滑去。你才看了三行，胃就開始微微揪緊：第三天排了四個景點，住宿總價比你們上個月說好的上限多出近五千。但你怎麼開口？她是那麼興奮。",
  totalRounds: 5,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "小嵐把筆電往你面前推了推，兩手托著下巴，笑得像個等著被誇獎的小孩——",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "npc",
      text: "「我想好下次旅遊了！你看你看，行程排出來給你看！第一天到福岡，第二天太宰府，第三天直接殺到由布院再回來，住宿我都訂好口袋名單了——」她越講越快，螢幕上的格子一列一列往下延伸。",
      innerVoice:
        "如果我說實話，她一定覺得我在潑冷水。她排了這麼久，我潑下去她會不會翻臉？還是先別說，忍一下就好⋯⋯可是第三天真的太趕了，我也沒辦法裝作沒看見。",
      choices: [
        {
          text: "「哇，看得出來你花好多心思排。我有一個小擔心——第三天由布院來回福岡，行程會不會太緊？我怕我們到時候會累壞。」",
          choiceType: "approach-express",
          nextNode: "r2",
          effectiveness: 3,
          feedback: {
            pros: [
              "先肯定對方的用心，再說出具體擔心，關係不被否定",
              "用「我」開頭＋具體事實，而非「你排得太誇張」的指責",
              "趁對方還沒投入更多前提出，調整成本最低",
            ],
            cons: [
              "對方正在興頭上，當下氣氛難免會頓一下",
              "說出口的那一刻，自己心跳會明顯加快",
            ],
            cbt: {
              automaticThought: "我說實話她一定覺得我在潑冷水",
              bias: "讀心術",
              disputing: "她還沒回應，你無法知道她會怎麼想；過去你們意見不同，真的每次都翻臉嗎？",
              rationalResponse: "我可以先肯定她的用心，再誠實說擔心，這不等於否定她。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "對這段友誼真誠的在意，以及健康的不滿",
              note: "想把不同意說出來，正是因為你在乎這趟旅行、在乎你們的關係。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「哇，排得好詳細喔⋯⋯第三天看起來滿滿的耶。」用語氣暗示，但不明說自己覺得有問題。",
          choiceType: "approach-partial",
          nextNode: "r2",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有完全附和，留下了一條可以說實話的縫隙",
              "比直接否定柔和，對方有機會自己接話",
              "焦慮感比直接講低，自己比較承受得住",
            ],
            cons: [
              "暗示很容易被忽略，對方興奮時往往聽不出弦外之音",
              "把判斷責任丟回給對方，問題仍沒被說清楚",
              "久了會累積「我都暗示過了是你沒聽」的委屈",
            ],
            cbt: {
              automaticThought: "我暗示一下就好，她自己會懂吧",
              bias: "讀心術",
              disputing: "你假設她能讀懂你的語氣，但她正興奮，線索很可能被淹沒。",
              rationalResponse: "暗示是起點，若她沒接住，我可以再說清楚一點。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想說真話，又怕直接說會傷害關係",
              note: "用暗示代替直說，是罪惡感把健康的不滿壓成了耳語。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「哇，好厲害！你排得好用心，看起來很不錯耶！」笑著點頭，把心裡的擔心吞下去。",
          choiceType: "safety-behavior",
          nextNode: "r2",
          effectiveness: 1,
          feedback: {
            pros: [
              "把不同意吞下去，是怕衝突會傷害你重視的關係，這很真實",
              "當下氣氛維持熱絡，對方的興奮不被打斷",
              "暫時不用面對說出來之後的不確定",
            ],
            cons: [
              "問題沒有消失，只是被壓進去，之後只會更難講",
              "附和等於為自己不認同的計畫背書，日後會更難翻案",
              "一路忍到旅途爆發，衝突反而更大，災難化會成真",
            ],
            cbt: {
              automaticThought: "忍一下就好，講出來一定會吵架",
              bias: "災難化",
              disputing: "你預測「一定會吵架」，但過去你們意見不合真的每次都吵架嗎？",
              rationalResponse: "說出擔心不等於吵架，我可以溫和而具體地表達。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "健康的不滿被罪惡感抑制，連帶真誠也被吞下",
              note: "附和不是因為認同，是因為說不出口——罪惡感擋住了真實的你。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
      ],
    },

    r2: {
      id: "r2",
      speaker: "npc",
      text: "小嵐抬起頭，眼睛亮亮的，直接把問題丟過來：「那你覺得怎麼樣？很棒吧？我查了好久才排出來的！」她雙手撐著下巴等你回答，像在等你給她一個掌聲。",
      innerVoice:
        "她在等我背書。如果我說「其實有點趕」，她會不會覺得我不挺她？她查了那麼久，我說一句「太趕」，等於否定她一整個禮拜的心血⋯⋯",
      choices: [
        {
          text: "「整體方向我覺得滿有趣的。不過預算那部分我有點擔心——住宿加上機票，可能會超過我們之前說的上限。要不要我們一起看一下？」",
          choiceType: "approach-express",
          nextNode: "r3",
          effectiveness: 3,
          feedback: {
            pros: [
              "先肯定方向，再點出預算這個具體可討論的項目",
              "用「我們一起看」把對話框架從對立改成合作",
              "擔心被說清楚，對方才有機會回應而非猜測",
            ],
            cons: [
              "講「預算超支」會讓對方的笑容短暫凝固",
              "你必須承受她可能露出失望表情的那一刻",
            ],
            cbt: {
              automaticThought: "我說預算有問題，她會覺得我在否定她的心血",
              bias: "災難化",
              disputing: "指出一個具體項目，不等於否定整份計畫；過去她被你提醒時，真的每次都受傷嗎？",
              rationalResponse: "我可以肯定她的努力，同時指出需要調整的地方，兩者不衝突。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "對這趟旅行能順利的真誠期盼，與合理的財務焦慮",
              note: "願意談錢，是因為你在乎這趟旅行能否長久開心，而非只顧當下氣氛。",
              source: "Frederick (2009), ch7",
            },
          },
        },
        {
          text: "「嗯⋯⋯滿豐富的啦。我有點好奇，預算你大概抓多少？」用提問代替直接說覺得貴。",
          choiceType: "approach-partial",
          nextNode: "r3",
          effectiveness: 2,
          feedback: {
            pros: [
              "沒有附和也沒有否定，把球輕輕拋回去",
              "用提問引導對方自己檢視預算，比指責柔和",
              "保留退路，若對方數字合理你也可以接受",
            ],
            cons: [
              "對方可能直接報一個數字就帶過，問題仍沒被討論",
              "把自己的判斷藏起來，久了會覺得「都是我在配合」",
              "若對方興奮地報數，你更難踩剎車",
            ],
            cbt: {
              automaticThought: "我問問題就好，不要直接說我覺得貴",
              bias: "算命",
              disputing: "你預設「直接說」會引發衝突，但你還沒試過，這只是預測。",
              rationalResponse: "提問是好的開始，若答案不對，我可以接著誠實說。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "真實的判斷被包裝成好奇，怕直接說會破壞氣氛",
              note: "把意見藏進問句裡，是怕說「我覺得」會顯得在反對。",
              source: "McCullough et al. (2003), ch6",
            },
          },
        },
        {
          text: "「很棒啊！就照你排的吧，你比較會規劃。」笑著把螢幕推回去，想趕快結束這個話題。",
          choiceType: "avoid-escape",
          nextNode: "r3",
          effectiveness: 1,
          feedback: {
            pros: [
              "把決定權交出去，當下壓力立刻解除",
              "維持了表面和諧，不用面對她的表情變化",
              "確實也尊重了對方花在規劃上的心力",
            ],
            cons: [
              "為自己不認同的計畫背書，等於自願走進不舒服的旅途",
              "把「你比較會規劃」當退路，其實是放棄了參與權",
              "問題累積到旅途爆發時，衝突規模會更大",
            ],
            cbt: {
              automaticThought: "照她說的就好了，不要節外生枝",
              bias: "災難化",
              disputing: "你假設「說出來就會節外生枝」，但事實上不說才會節外生枝——在旅途裡。",
              rationalResponse: "我可以在出發前溫和地說，比在旅途崩潰時說好得多。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "對衝突的恐懼，壓過了對旅行品質的真實在意",
              note: "把決定權送出去不是慷慨，是怕承擔說實話之後的關係波動。",
              source: "Malan, ch10",
            },
          },
        },
      ],
    },

    r3: {
      id: "r3",
      speaker: "npc",
      text: "小嵐看你一臉猶豫，歪了歪頭，語氣放軟：「⋯⋯你是不是覺得哪裡不好？沒關係啦，你可以直說，我不會生氣。」她把筆電往中間挪了挪，像在重新把球交給你。",
      innerVoice:
        "她說不會生氣，但我怎麼覺得這是個陷阱？如果我現在說了，她表情一變怎麼辦？可是她都開口問了，我再含糊過去，是不是更怪？",
      choices: [
        {
          text: "「其實⋯⋯我對預算跟第三天的行程有點擔心。我知道你花了很多時間排，我不想讓你覺得我在否定你，但這兩個我真的有點過不去。」",
          choiceType: "approach-express",
          nextNode: "r4",
          effectiveness: 3,
          feedback: {
            pros: [
              "抓住對方主動開口的時機，誠實說出具體擔心",
              "先說「不想否定你」照顧了對方的用心，降低防衛",
              "把擔心收斂成兩個明確項目，而非全面否定，較易討論",
            ],
            cons: [
              "對方仍可能短暫露出受傷或防衛的表情",
              "你得穩住自己不被那個表情嚇退",
            ],
            cbt: {
              automaticThought: "她說不會生氣是假的，我一講她就會變臉",
              bias: "讀心術",
              disputing: "她主動追問、把筆電挪過來，這些是「她想聽真話」的行為證據。",
              rationalResponse: "她給了台階，我可以試著踏上去；就算她變臉，也不等於關係結束。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "對關係真誠的在意，讓你願意冒著不愉快把話說清楚",
              note: "誠實本身就是一種修復的開始——關係因真實而靠近，而非因附和。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「沒有不好啦⋯⋯就覺得如果中間能留個空檔緩衝一下，可能會比較舒服一點。」把擔心稀釋成一個模糊的建議。",
          choiceType: "safety-behavior",
          nextNode: "r4",
          effectiveness: 2,
          feedback: {
            pros: [
              "至少把「需要空檔」這個訊號送出去了",
              "語氣柔軟，對方較不會覺得被攻擊",
              "為自己留了退路，如果對方不接受也不算撕破臉",
            ],
            cons: [
              "「空檔」太模糊，對方可能隨口答應卻沒真的調整",
              "把預算這個更硬的問題完全藏起來，日後仍會爆",
              "強化「我的需求要包裝才能說」的習慣",
            ],
            cbt: {
              automaticThought: "我說個大概就好，講太細她會不高興",
              bias: "算命",
              disputing: "你預測「講太細她會不高興」，但她剛剛才請你直說。",
              rationalResponse: "我可以先講一個，看她反應再決定要不要說第二個。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "真實的不滿被稀釋成建議，怕完整說出會太尖銳",
              note: "把意見磨圓，是怕鋒利的真實會劃傷關係——但磨掉的不只是鋒利。",
              source: "McCullough et al. (2003), ch6",
            },
          },
        },
        {
          text: "「沒有沒有，都很好啦，我剛剛只是隨口想的，你想怎麼排就怎麼排。」連忙擺手，把自己剛浮上來的擔心壓回去。",
          choiceType: "overcompensate",
          nextNode: "r4",
          effectiveness: 1,
          feedback: {
            pros: [
              "對方都開口問了還選擇否認，是因為說實話的風險感覺太大，這可以理解",
              "快速終止這個令人緊張的話題，氣氛回到安全",
              "避免了自己不知道怎麼接續討論的尷尬",
            ],
            cons: [
              "對方主動給台階你卻退縮，她可能解讀為你不在乎或不信任她",
              "否認自己的擔心，等於告訴自己「我的感受不重要」",
              "問題完整地留到旅途，屆時抱怨會顯得更不合理",
            ],
            cbt: {
              automaticThought: "她追問是想抓我把柄，我趕快否認比較安全",
              bias: "讀心術",
              disputing: "「想抓把柄」是你的假設；她放軟語氣、挪筆電，證據比較指向她想溝通。",
              rationalResponse: "她給了機會，我可以先講一個最小的擔心試水溫。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "剛浮上来的真實感受，被恐懼一把壓回水底",
              note: "連對方遞來的台階都不敢踩，是因為相信「真話=危險」這個舊劇本。",
              source: "Malan, ch10",
            },
          },
        },
      ],
    },

    r4: {
      id: "r4",
      speaker: "npc",
      text: "小嵐的笑收了一點，肩膀微微繃起：「可是⋯⋯大家都說這樣排很好啊，我查網路上由布院一定要去，難得去一趟不排滿不是很可惜嗎？」她的語速變快，手指無意識地點著觸控板。",
      innerVoice:
        "來了，她開始防衛了。我就知道說了會變這樣。再講下去我們一定會吵起來，然後她就再也不找我一起出國了。我是不是現在收手還來得及？",
      choices: [
        {
          text: "「我不是說排得不好，我知道由布院很值得去。只是我自己會擔心體力跟預算，想跟你商量有沒有調整空間，不是要你重排。」",
          choiceType: "approach-express",
          nextNode: "r5",
          effectiveness: 3,
          feedback: {
            pros: [
              "對方防衛升高時，先區隔「你的用心」與「我的擔心」",
              "強調「商量」而非「要求重排」，把對話留在合作框架",
              "示範了衝突升溫時仍能穩住、不退縮也不反擊",
            ],
            cons: [
              "對方情緒正在升溫，這句話需要你頂住當下的壓力",
              "若她繼續防衛，你得承受「講了也沒用」的挫敗感",
            ],
            cbt: {
              automaticThought: "再講下去我們一定會吵，然後她就再也不找我出國了",
              bias: "災難化",
              disputing: "「一定會吵」「再也不找我」——過去你們意見不同，真的有哪次讓友誼斷了嗎？",
              rationalResponse: "她防衛是暫時的情緒，不等於關係破裂；我可以穩住，等情緒過去。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "在對方防衛中仍願意溫和表達，是對關係最深的信任",
              note: "不退縮也不反擊，本身就是修復——你正在經歷「衝突不會毀掉關係」的新經驗。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「對啦，大家是這樣排⋯⋯我只是怕自己體力負荷不來，到時候拖累你就不好了。」把擔心包裝成「是我自己的問題」。",
          choiceType: "approach-partial",
          nextNode: "r5",
          effectiveness: 2,
          feedback: {
            pros: [
              "用「是我自己的問題」降低對方的防衛，較易被接受",
              "沒有完全退縮，仍留下調整的可能",
              "照顧了當下劍拔弩張的氣氛",
            ],
            cons: [
              "把合理的意見扭曲成個人缺陷，久了會相信「都是我太弱」",
              "對方可能順勢說「那你自己調整」，問題回到你身上",
              "強化「我的需求是不合理的」這個底層信念",
            ],
            cbt: {
              automaticThought: "如果說是我的問題，她就比較不會生氣",
              bias: "讀心術",
              disputing: "你預測「說是我的問題她就不氣」，但你是在用自己的尊嚴換取安全。",
              rationalResponse: "我可以照顧她的情緒，同時不必把合理的擔心說成自己的錯。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "真實的不滿被改寫成自我貶低，以換取關係的安全",
              note: "把「你排太趕」改成「我體力差」，是為了不讓自己顯得在反對。",
              source: "McCullough et al. (2003), ch5",
            },
          },
        },
        {
          text: "「也是啦，大家說的一定有道理，你查得比較清楚。那就這樣吧，沒事沒事。」趕緊把話題收掉，心裡卻想著「到時候再說」。",
          choiceType: "avoid-escape",
          nextNode: "r5",
          effectiveness: 1,
          feedback: {
            pros: [
              "對方一防衛就收手，是因為衝突的壓力讓你喘不過氣，這很真實",
              "當下緊張立刻降溫，氣氛恢復表面平靜",
              "爭取時間讓自己消化情緒",
            ],
            cons: [
              "在對方防衛高峰退縮，會讓她以為剛才的擔心只是隨口說說",
              "「到時候再說」幾乎等於把問題推到旅途爆發的那一刻",
              "事後私下跟別人抱怨的衝動會升高，但那無助於修復關係",
            ],
            cbt: {
              automaticThought: "她防衛了就代表沒得談，我現在收手是明智的",
              bias: "災難化",
              disputing: "防衛是情緒反應，不是最終立場；你怎麼知道下一秒她不會冷靜下來？",
              rationalResponse: "她現在防衛，但我可以不退縮、不反擊，等情緒過去再談。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "對衝突的恐懼讓你寧願委屈自己，也要維持表面和平",
              note: "退縮的代價不只是這次旅行，而是又一次確認「真話是危險的」。",
              source: "Malan, ch10",
            },
          },
        },
      ],
    },

    r5: {
      id: "r5",
      speaker: "npc",
      text: "小嵐沉默了幾秒，深吸一口氣，肩膀慢慢放鬆下來：「⋯⋯好啦，那你到底覺得哪裡不行，直說沒關係。我剛才有點急，抱歉。」她把筆電轉向兩人中間，重新看著你。",
      innerVoice:
        "她⋯⋯冷靜下來了？還道歉了？這跟我預期的完全不一樣。原來說出來，關係不會崩——它好像還更靠近了一點。那我可以把話講清楚了。",
      choices: [
        {
          text: "「謝謝你願意聽。我主要擔心兩個：第三天四個景點太密，可能會很累；還有住宿加起來可能超預算大概五千。如果你覺得可行，我們一起調一下，好嗎？」",
          choiceType: "approach-express",
          nextNode: "end",
          effectiveness: 3,
          feedback: {
            pros: [
              "在關係修復的開放時刻完整表達，擔心被真正聽見",
              "用具體數字（五千、四個景點）讓討論有著力點",
              "以「一起調」收尾，把分歧重新框為共同解決的問題",
            ],
            cons: [
              "完整說出來需要對脆弱的承受力，此刻仍有壓力",
              "對方雖冷靜，仍可能對某個數字有意見，討論會繼續",
            ],
            cbt: {
              automaticThought: "說出來關係會崩——結果她反而冷靜下來了",
              bias: "災難化",
              disputing: "你剛剛預測的災難沒有發生；她甚至道歉了。過去那些「一定會完」的預測，有多少真的發生？",
              rationalResponse: "原來衝突不會毀掉關係；這次經驗可以成為下次說真話的證據。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "表達後關係不但沒崩，反而修復——這是被擋住已久的健康經驗",
              note: "你剛剛經歷了「說真話→對方冷靜→關係更近」的修復經驗，讓它留下來。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「就是⋯⋯第三天的行程跟預算，其他部分我都很喜歡。你覺得呢？」點到為止，把決定權交回對方。",
          choiceType: "approach-partial",
          nextNode: "end",
          effectiveness: 2,
          feedback: {
            pros: [
              "在關鍵時刻至少說出了兩個具體項目，比前面都好",
              "先肯定再提擔心，語氣上照顧了對方",
              "把球交給對方，避免顯得在主導",
            ],
            cons: [
              "「你覺得呢」把責任推回去，她可能又被動接受而非調整",
              "沒有提出具體建議，討論容易停在原地",
              "錯失了用這次修復經驗建立「我可以完整表達」信念的機會",
            ],
            cbt: {
              automaticThought: "點到就好，講太多她又會覺得我在主導",
              bias: "讀心術",
              disputing: "她剛道歉並請你直說，你卻假設她不想聽完整意見——證據在哪？",
              rationalResponse: "她此刻是開放的，我可以多說一點具體建議，而非只點到為止。",
              source: "Beck, J.S. (2021), ch12",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "真實的完整意見仍被收著，怕說滿了會破壞剛修復的氣氛",
              note: "點到為止是怕「太完整會前功盡棄」——但剛才的修復證明關係比你以為的結實。",
              source: "Frederick (2009), ch7",
            },
          },
        },
        {
          text: "「真的沒什麼啦，你排得很好，我剛剛只是隨口說說。就照原來的吧。」在最後的開放時刻選擇全部收回。",
          choiceType: "overcompensate",
          nextNode: "end",
          effectiveness: 1,
          feedback: {
            pros: [
              "對方都道歉、冷靜下來了你還是收回，是因為不確定自己值不值得被聽見，這很真實",
              "當下完全沒有衝突風險，氣氛最安全",
              "不用再面對後續討論的不確定性",
            ],
            cons: [
              "在最關鍵的修復時刻退縮，等於錯失了「真話會被接住」的寶貴經驗",
              "對方會困惑：她道歉、請你說，你卻收回，她不知道你到底怎麼想",
              "問題完整保留，旅途爆發時再抱怨會顯得不講理",
            ],
            cbt: {
              automaticThought: "她都道歉了我還講，會不會太過分？算了算了",
              bias: "災難化",
              disputing: "她道歉並請你直說，正是你最該完整表達的時刻；「太過分」是你的恐懼，不是她的訊號。",
              rationalResponse: "她開口了，這就是時機；我可以溫和而完整地說。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "連關係修復的禮物都不敢收，因為深信「我的需求是負擔」",
              note: "在最該收下修復經驗的時刻退縮，會讓「真話=危險」的舊劇本更加牢固。",
              source: "Malan, ch10",
            },
          },
        },
      ],
    },

    end: {
      id: "end",
      speaker: "narrator",
      text: "小嵐把筆電轉過去，開始修改第三天的欄位。咖啡廳的陽光斜斜照在螢幕上，你發現自己的肩膀不知道什麼時候鬆了下來。原來，說出不一樣的意見，不會讓一段關係消失——有時候，它反而讓關係變得更真。",
    },
  },

  endings: {
    approach: {
      summary:
        "你練習了一件最困難的事：在重視的人面前說出不一樣的意見。你用「我」開頭、用具體事實、先肯定對方的用心，然後誠實地說出擔心。對方一度防衛，但你沒有退縮也沒有反擊——你等到了她冷靜下來、重新開口的那一刻。這是一次「表達後關係修復」的真實經驗：衝突沒有毀掉友誼，反而讓它更靠近。",
      suggestion:
        "留意一下身體——你會發現肩膀比剛開始時鬆了。把這個「鬆」記住，它就是證據，證明「說真話會毀掉關係」這個舊劇本，可以被新的經驗改寫。下次遇到類似情境，允許自己回想這一次。",
    },
    partial: {
      summary:
        "你在某些時刻靠近了真實，在某些時刻又退回了安全。你用暗示、提問、把問題包裝成自己的不足——這些都是為了在說真話與保護關係之間找到平衡。你的出發點是珍惜這段友誼，這份在意本身沒有錯。",
      suggestion:
        "下次也許可以試著多說一句完整的「我覺得⋯⋯，因為⋯⋯」。先從一個最小的、具體的擔心開始，看看對方的反應。你會發現，多數時候關係比你以為的更結實。",
    },
    avoid: {
      summary:
        "你把大部分的不同意都吞了下去。這幫你避開了衝突升溫的恐懼，也讓當下的氣氛維持熱絡。想把不同意吞下去，是怕衝突會傷害你重視的關係——這份珍惜很真實。只是被吞下去的，不只是意見，還有你對這趟旅行真實的參與，以及讓對方認識真實的你的機會。",
      suggestion:
        "先不勉強自己立刻說。可以試著在旅途結束後，回頭想一想：那些你忍住的話，如果用最溫和的方式說出來，對方真的會因此不跟你往來嗎？把這個問題留著，慢慢累積你自己的證據庫。",
    },
  },
};

export default script;
