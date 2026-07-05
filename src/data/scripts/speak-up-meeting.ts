import type { ScenarioScript } from "@/lib/types";

const script: ScenarioScript = {
  scenarioId: "speak-up-meeting",
  openingNarration:
    "部門週會，會議室冷氣有點涼。投影機嗡嗡響著，簡報翻到第六頁。你坐在橢圓桌中段，正低頭記筆記——主管忽然轉過來，你的名字落在安靜裡，十幾雙眼睛同時抬起。心跳撞上喉嚨。",
  totalRounds: 5,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "主管把筆擱下，視線直接停在你身上。會議室安靜下來，連冷氣聲都變得清楚。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "npc",
      text: "「○○，這個議題你第一線最熟，說說你的看法？」主管身體微微前傾，其他人停下打字的手，等著你開口。",
      innerVoice: "完了，大家都在等我說蠢話——只要一個詞講不對，全場都會記得。",
      choices: [
        {
          text: "「我觀察到的是，這個流程在第一線大概會卡三天，主要卡在簽核那關⋯⋯不過完整方案我還需要再整理一下。」",
          choiceType: "approach-express",
          nextNode: "r2",
          effectiveness: 3,
          feedback: {
            pros: [
              "把第一線觀察說清楚，展現你確實掌握狀況",
              "主動承認「還需整理」反而比假裝完整更可信",
              "為後續發言建立你的專業位置",
            ],
            cons: [
              "一開口就被放上「專家」位置，會被追問",
              "說出的觀察會被評價，無法收回",
            ],
            cbt: {
              automaticThought: "大家都在等我說蠢話",
              bias: "災難化＋讀心術（預先認定一開口就會出醜）",
              disputing: "最壞的情況是什麼？真的會被記住一輩子嗎？",
              rationalResponse: "我有第一線觀察，說錯一點不等於整個人失敗。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想把第一線的真實看見說出來的自我主張",
              note: "讓想貢獻的聲音被聽見，不必等完美才開口。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「嗯⋯⋯目前方向我覺得都還不錯，可以繼續觀察看看。」含糊帶過，沒有給出具體看法",
          choiceType: "safety-behavior",
          nextNode: "r2",
          effectiveness: 2,
          feedback: {
            pros: [
              "短期避開被追問細節的壓力",
              "表面算「有回應」，沒讓場面冷掉",
            ],
            cons: [
              "模糊回答會被當作「沒有看法」，下次更難被認真看待",
              "含糊帶過等於把發言權還回去，沒為自己爭取位置",
            ],
            cbt: {
              automaticThought: "只要不說具體，就不會被抓到把柄",
              bias: "災難化（預測具體發言必然被抓錯）",
              disputing: "模糊真的能保護我，還是只是延後暴露？",
              rationalResponse: "模糊不是安全，只是把風險累積到下次。",
              source: "Hope, Heimberg & Turk (2019), ch11",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想表達，卻用含糊擋住自我主張的出口",
              note: "含糊擋住的是羞愧，也擋住了想被看見的自己。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「這個議題⋯⋯可能請陳經理補充會比較完整。」把發言權轉給資深同事",
          choiceType: "avoid-escape",
          nextNode: "r2",
          effectiveness: 1,
          feedback: {
            pros: [
              "立即解除被注視的壓力，焦慮驟降",
              "把球丟給更資深的人，表面看是「尊重」",
            ],
            cons: [
              "主管點的是你，轉給別人等於否定了他的判斷",
              "反覆推出去，會被認定「不能承擔」，機會越來越少",
            ],
            cbt: {
              automaticThought: "我說一定會搞砸，讓給厲害的人比較安全",
              bias: "災難化（預測發言必然失敗）＋貶低自我",
              disputing: "如果我真的說了，最壞會發生什麼？我能承受嗎？",
              rationalResponse: "我有資格說，把機會推開不等於更安全。",
              source: "Beck, J.S. (2021), ch14",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想被信任，卻先把自己降級以免被看見不足",
              note: "讓出發言權，是用謙虛包裝對羞愧的恐懼。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
      ],
    },

    r2: {
      id: "r2",
      speaker: "npc",
      text: "你才剛起頭，主管點點頭追問：「嗯，所以具體來說，你覺得怎麼做比較好？」筆尖在筆記本上輕輕敲了兩下。",
      innerVoice: "具體？我只想到一半，現在講出來一定漏洞百出⋯⋯",
      choices: [
        {
          text: "「我初步的想法是分兩階段：先處理最卡的簽核，再調整通知流程。不過第二階段的數字我還要再確認。」",
          choiceType: "approach-express",
          nextNode: "r3",
          effectiveness: 3,
          feedback: {
            pros: [
              "給出結構化建議，展現思考的深度",
              "主動說明「還要確認」的範圍，反而顯得嚴謹",
              "把不確定說清楚，比硬撐完整更有說服力",
            ],
            cons: [
              "結構化建議會被進一步追問細節",
              "承認「還沒確認」會有一點暴露感",
            ],
            cbt: {
              automaticThought: "我只想到一半，講出來一定漏洞百出",
              bias: "災難化（把「不完整」誇大成「漏洞百出」）",
              disputing: "不完整等於漏洞百出嗎？有沒有中間地帶？",
              rationalResponse: "一半的想法也有價值，不完美不等於失敗。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想把第一線的判斷貢獻出來的自我主張",
              note: "承認不確定，反而是讓自我主張站穩的方式。",
              source: "Frederick (2009), ch7",
            },
          },
        },
        {
          text: "「可能⋯⋯可以先簡化簽核流程？我覺得這方向或許可行⋯⋯」語氣保留，不敢說太滿",
          choiceType: "approach-partial",
          nextNode: "r3",
          effectiveness: 2,
          feedback: {
            pros: [
              "給出一個方向，至少有參與",
              "語氣保留讓自己留有下台階",
            ],
            cons: [
              "「可能」「或許」太多會被當作沒把握",
              "保留語氣削弱了你意見的份量，較難被採納",
            ],
            cbt: {
              automaticThought: "說太肯定會被抓到把柄，保留比較安全",
              bias: "災難化（預測肯定會招來攻擊）",
              disputing: "保留真的較安全，還是讓意見失去力道？",
              rationalResponse: "我可以肯定地說，同時承認有調整空間。",
              source: "Hope, Heimberg & Turk (2019), ch11",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想表達，又怕說太滿會被反擊",
              note: "保留是怕羞愧，但也讓自我主張的聲音變弱。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「我覺得可以這樣：第一步先⋯⋯第二步再⋯⋯第三步還要⋯⋯另外A、B、C也都要考慮⋯⋯」列出一大串細節想證明自己懂很多",
          choiceType: "overcompensate",
          nextNode: "r3",
          effectiveness: 1,
          feedback: {
            pros: [
              "用資訊量把自己包裝得很完整，短期減少被抓漏洞的可能",
              "看似準備充分，可能短暫獲得肯定",
            ],
            cons: [
              "過多細節會讓人抓不到重點，反而顯得混亂",
              "用力證明自己，背後是「不夠好才要補」的焦慮",
            ],
            cbt: {
              automaticThought: "如果不多說一點，他們會覺得我什麼都不懂",
              bias: "災難化（預測不夠多就會被否定）",
              disputing: "說越多真的越有說服力，還是反而模糊焦點？",
              rationalResponse: "重點清晰比資訊量多更有力量。",
              source: "Beck, J.S. (2021), ch14",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "怕被看見不足，用過度補償掩蓋自我主張的脆弱",
              note: "用力填滿，是把怕暴露的那一面藏起來。",
              source: "Frederick (2009), ch7",
            },
          },
        },
      ],
    },

    r3: {
      id: "r3",
      speaker: "npc",
      text: "你說到一半，坐在對面的資深陳經理微微皺了下眉，視線落在你簡報的某個數字上，沒有出聲。會議室裡只剩下你的聲音。",
      innerVoice: "他皺眉了——他一定覺得我說的很糟，全場都看出來了⋯⋯",
      choices: [
        {
          text: "「⋯⋯這個數字我會後再跟財務核對一次。不過整體方向我還是認為值得推。」繼續把話說完，把皺眉當成中性訊號",
          choiceType: "approach-express",
          nextNode: "r4",
          effectiveness: 3,
          feedback: {
            pros: [
              "沒被一個表情打斷，展現抗壓性",
              "主動說會核對，反而把可能的錯誤變成負責任",
              "維持自己的論點立場，沒有被動搖",
            ],
            cons: [
              "繼續說要承受「他真的在否定我」的不確定",
              "若數字真的有錯，事後需要修正",
            ],
            cbt: {
              automaticThought: "他皺眉，代表我說的很糟，全場都知道",
              bias: "災難化＋讀心術（把一個表情解讀成全面否定）",
              disputing: "他皺眉有沒有別的可能？疲勞？在想別的事？",
              rationalResponse: "一個表情不等於全面否定，我沒有讀心證據。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想讓自己的觀點被聽完，而不是被一個眼神打斷",
              note: "把自我主張說完，是對羞愧最有力的回應。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「⋯⋯大概就是這樣啦，詳細之後再補充。」急著收尾，把後半段跳過去",
          choiceType: "safety-behavior",
          nextNode: "r4",
          effectiveness: 2,
          feedback: {
            pros: [
              "立即降低「繼續被否定」的焦慮",
              "草草收尾至少保住了已經說過的部分",
            ],
            cons: [
              "急著收尾讓原本想表達的重點沒講完",
              "用迴避反應把「皺眉＝失敗」的解讀強化得更深",
            ],
            cbt: {
              automaticThought: "再說下去只會更糟，趕快結束",
              bias: "災難化（預測繼續說會擴大災難）",
              disputing: "收掉真的能止血，還是讓我錯過澄清的機會？",
              rationalResponse: "我可以說完，一個表情不決定整段發言的成敗。",
              source: "Hope, Heimberg & Turk (2019), ch11",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想說完，卻被羞愧的預感逼著提前退場",
              note: "急著收尾，是讓羞愧替自我主張按下停止鍵。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「⋯⋯不過這只是我初步的想法啦，陳經理您覺得呢？」把球丟給皺眉的同事",
          choiceType: "avoid-escape",
          nextNode: "r4",
          effectiveness: 1,
          feedback: {
            pros: [
              "把焦點轉開，暫時解除被否定的壓力",
              "表面上是「請教」，看起來謙虛",
            ],
            cons: [
              "把自己的論點丟出去，等於承認「我說的不算數」",
              "轉移焦點會強化「我的意見不值得說完」的信念",
            ],
            cbt: {
              automaticThought: "他一定比我懂，交給他講比較不會出錯",
              bias: "災難化＋讀心術（預設對方在否定、且更權威）",
              disputing: "把話交出去，問題真解決了，還是換人承擔？",
              rationalResponse: "我有資格說完，交出去不是謙虛是退縮。",
              source: "Beck, J.S. (2021), ch14",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "怕被否定，先把自我主張讓出去以求安全",
              note: "讓出發言權，是用謙虛包裝對羞愧的恐懼。",
              source: "Malan (1979), ch10",
            },
          },
        },
      ],
    },

    r4: {
      id: "r4",
      speaker: "npc",
      text: "行銷組的林專員舉起手：「我反對這個方向，成本太高，第一線根本負擔不起。」會議室一陣騷動。主管轉向你：「○○，你怎麼看這個質疑？」",
      innerVoice: "他被說服我了⋯⋯我的意見站不住腳，被反駁就是失敗。",
      choices: [
        {
          text: "「成本確實是重要考量。不過從第一線看，現在的隱性成本其實更高——我可以會後整理數據再一起討論。」先承認對方有理，再補上自己的立場",
          choiceType: "approach-express",
          nextNode: "r5",
          effectiveness: 3,
          feedback: {
            pros: [
              "先承認對方的合理點，展現成熟度",
              "用第一線視角補充，沒有退讓自己的論點",
              "把爭論轉成「一起看數據」，降低對立感",
            ],
            cons: [
              "承認成本要冒「被認為讓步」的風險",
              "承諾提供數據，等於為自己增加工作",
            ],
            cbt: {
              automaticThought: "被反駁就是我的意見失敗了",
              bias: "災難化（把「被質疑」等同「整個人被否定」）",
              disputing: "被反駁是針對意見，還是針對我這個人？",
              rationalResponse: "意見被挑戰不等於我失敗，這是討論的一部分。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想讓自己的判斷在挑戰中站住，不被羞愧擊退",
              note: "在反對中守住立場，是自我主張真正的考驗。",
              source: "Frederick (2009), ch7",
            },
          },
        },
        {
          text: "「你說的也有道理⋯⋯那我們再看一看、再討論一下好了。」語氣偏軟，傾向附和反對意見",
          choiceType: "approach-partial",
          nextNode: "r5",
          effectiveness: 2,
          feedback: {
            pros: [
              "附和能降低當場的對立氣氛",
              "沒有硬碰硬，保留關係上的彈性",
            ],
            cons: [
              "一被反駁就退讓，等於放棄自己剛建立的論點",
              "「再看一看」會讓你的意見被歸類為「沒那麼重要」",
            ],
            cbt: {
              automaticThought: "與其被反駁得更慘，不如先認同",
              bias: "災難化（預測堅持會招來更大攻擊）",
              disputing: "退讓真保護了我，還是讓我失去發言位置？",
              rationalResponse: "我可以部分同意，不必全面退讓。",
              source: "Hope, Heimberg & Turk (2019), ch11",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想堅持，卻怕堅持會引來羞愧",
              note: "附和是焦慮，底下的自我主張還在等被聽見。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「對對對，我剛剛沒想清楚，你說得比較好。」立刻全盤認錯，把自己的立場整個丟掉",
          choiceType: "avoid-escape",
          nextNode: "r5",
          effectiveness: 1,
          feedback: {
            pros: [
              "立即終止被質疑的壓力，焦慮驟降",
              "表面上是「從善如流」，避免衝突",
            ],
            cons: [
              "全盤否定自己剛剛的意見，會被認定「沒有立場」",
              "反覆認錯會強化「我的判斷不可靠」的自我印象",
            ],
            cbt: {
              automaticThought: "只要我先認錯，就不會被進一步攻擊",
              bias: "災難化（預測不認錯會被持續圍攻）",
              disputing: "先認錯保護了我，還是連辯護機會都沒了？",
              rationalResponse: "我可以不全認錯，我的判斷有可取之處。",
              source: "Beck, J.S. (2021), ch14",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "怕被圍攻，先用認錯把自我主張整個讓出",
              note: "搶先認錯，是把羞愧的可能整個吞下以求安全。",
              source: "Malan (1979), ch10",
            },
          },
        },
      ],
    },

    r5: {
      id: "r5",
      speaker: "npc",
      text: "會議接近尾聲，主管把筆記本闔上，點點頭：「嗯，這個方向不錯。那之後就由你主導，下週給我一個初步計畫。」",
      innerVoice: "主導？我剛剛那樣也算不錯？萬一到時候搞砸，全公司都會知道是我⋯⋯",
      choices: [
        {
          text: "「好，我來主導。不過我會需要跨組的資源跟一點時間確認細節，下週先給您大方向。」接下任務，並誠實說明需要的支援",
          choiceType: "approach-express",
          nextNode: "end",
          effectiveness: 3,
          feedback: {
            pros: [
              "把被信任的時刻接住，為自己爭取到能見度",
              "主動說明資源需求，展現成熟的事實評估",
              "為「不完美地承擔」建立合理的範圍",
            ],
            cons: [
              "接下主導後，未來成敗會更明確歸到你身上",
              "承擔需要持續投入精力，壓力會延續",
            ],
            cbt: {
              automaticThought: "主導就會搞砸，全公司都會知道是我",
              bias: "災難化（預測必然失敗＋放大後果到全公司）",
              disputing: "搞砸真會到全公司層級嗎？最壞是什麼？",
              rationalResponse: "承擔有風險，但退縮會失去被信任的機會。",
              source: "Hope, Heimberg & Turk (2019), ch06",
            },
            psychodynamic: {
              trianglePole: "feeling",
              hiddenFeeling: "想被信任、想讓自己的能力被看見的自我主張",
              note: "接下信任，是讓自我主張從羞愧裡長出來。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「好⋯⋯不過這個可能要大家一起幫忙，我一個人也⋯⋯」接下任務，但急著把責任分攤出去",
          choiceType: "approach-partial",
          nextNode: "end",
          effectiveness: 2,
          feedback: {
            pros: [
              "接下了任務，至少沒有完全推開",
              "提前說明需要協助，降低孤軍奮戰的風險",
            ],
            cons: [
              "急著分攤會被解讀為「沒把握承擔」",
              "把主導權往外推一部分，削弱了被信任的份量",
            ],
            cbt: {
              automaticThought: "我一個人一定扛不住，先拉別人進來比較安全",
              bias: "災難化（預測獨自承擔必然失敗）",
              disputing: "分攤是為了更好，還是為了稀釋我的責任？",
              rationalResponse: "我可以主導，同時開口求援不丟臉。",
              source: "Hope, Heimberg & Turk (2019), ch11",
            },
            psychodynamic: {
              trianglePole: "anxiety",
              hiddenFeeling: "想承擔，又怕獨自被看見會暴露不足",
              note: "急著分攤，是羞愧在稀釋自我主張的份量。",
              source: "McCullough et al. (2003), ch8",
            },
          },
        },
        {
          text: "「我可能不太適合主導⋯⋯還是請陳經理來帶比較好，我可以從旁協助。」把主導權推回給資深同事",
          choiceType: "avoid-escape",
          nextNode: "end",
          effectiveness: 1,
          feedback: {
            pros: [
              "立即解除「被看見、被評價」的長期壓力",
              "退居協助角色，短期較安全",
            ],
            cons: [
              "把被信任的機會推回去，下次主管可能不再點你",
              "用「不適合」掩飾「我怕丟臉」，久了會信以為真",
            ],
            cbt: {
              automaticThought: "我主導一定會搞砸，推掉才不會被看笑話",
              bias: "災難化（預測主導必然失敗）＋情緒推理",
              disputing: "推掉真保護了我，還是把成長機會也推掉了？",
              rationalResponse: "我有資格承擔，推掉不是謙虛是退縮。",
              source: "Beck, J.S. (2021), ch14",
            },
            psychodynamic: {
              trianglePole: "defense",
              hiddenFeeling: "想被信任，卻先把自我主張讓出去以免羞愧",
              note: "推掉信任，是用謙虛包裝對被看見的恐懼。",
              source: "Malan (1979), ch10",
            },
          },
        },
      ],
    },

    end: {
      id: "end",
      speaker: "narrator",
      text: "主管站起身，會議室陸續傳來收拾的聲響。你把筆記本闔上，手心還有一點汗。無論你今天選擇怎麼把聲音放進會議室，那都是一次練習——練習讓「想貢獻的自己」被聽見，而不是先被「怕丟臉的自己」按住。",
    },
  },

  endings: {
    approach: {
      summary:
        "你選擇一次次把聲音放進會議室——說觀察、給建議、在皺眉裡把話說完、在反對中守住立場、接下信任。焦慮沒有消失，但你沒讓它替你決定要不要發言。這就是自我主張從羞愧裡長出來的過程。",
      suggestion:
        "下一次，留意那些你差點把話吞回去、卻還是說完的瞬間——那正是你想貢獻的聲音戰勝了怕丟臉的瞬間。",
    },
    partial: {
      summary:
        "你試著發言，也留了一些後路給自己——含糊、保留、附和、分攤。這是合理的起點：先觀察、先試水、先別說太滿。但若長期停在這裡，『好像有說』會逐漸取代『真的說了』，你的專業位置也會跟著模糊。",
      suggestion:
        "下次給自己一個『多走一步』——把『可能』拿掉一個、把沒說完的後半段補上、把推出去的發言權接回來一半。",
    },
    avoid: {
      summary:
        "你大部分時間選擇了把聲音收回去——轉給別人、草草收尾、全盤認錯、推掉主導。這很常見，也很可以理解：想在會議中保持安靜，往往是怕暴露後的羞愧先一步替你做了決定。只是退縮保護了你的同時，也把你想貢獻的那個自己一起關在了會議室外面。",
      suggestion:
        "下一次，試著至少做一件『把話留下』的小事——哪怕只是把一句『我覺得⋯⋯』說完。自我主張往往是在『沒有退回去』的瞬間長出來的。",
    },
  },
};

export default script;
