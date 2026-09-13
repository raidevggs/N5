/* =====================================================
   JAPANESE N5 SPEAKING PRACTICE
   200 RANDOM QUESTIONS
===================================================== */


/* =====================================================
   QUESTION DATABASE
===================================================== */

const questions = [

    // 1–20: Basic introduction

    {
        japanese: "お名前は何ですか。",
        kana: "おなまえは なんですか。",
        romaji: "Onamae wa nan desu ka?",
        meaning: "What is your name?"
    },
    {
        japanese: "どこから来ましたか。",
        kana: "どこから きましたか。",
        romaji: "Doko kara kimashita ka?",
        meaning: "Where did you come from?"
    },
    {
        japanese: "何歳ですか。",
        kana: "なんさいですか。",
        romaji: "Nansai desu ka?",
        meaning: "How old are you?"
    },
    {
        japanese: "お誕生日はいつですか。",
        kana: "おたんじょうびは いつですか。",
        romaji: "Otanjoubi wa itsu desu ka?",
        meaning: "When is your birthday?"
    },
    {
        japanese: "国籍は何ですか。",
        kana: "こくせきは なんですか。",
        romaji: "Kokuseki wa nan desu ka?",
        meaning: "What is your nationality?"
    },
    {
        japanese: "どこに住んでいますか。",
        kana: "どこに すんでいますか。",
        romaji: "Doko ni sunde imasu ka?",
        meaning: "Where do you live?"
    },
    {
        japanese: "家族は何人ですか。",
        kana: "かぞくは なんにんですか。",
        romaji: "Kazoku wa nannin desu ka?",
        meaning: "How many people are in your family?"
    },
    {
        japanese: "兄弟がいますか。",
        kana: "きょうだいが いますか。",
        romaji: "Kyoudai ga imasu ka?",
        meaning: "Do you have brothers or sisters?"
    },
    {
        japanese: "お仕事は何ですか。",
        kana: "おしごとは なんですか。",
        romaji: "Oshigoto wa nan desu ka?",
        meaning: "What is your job?"
    },
    {
        japanese: "学生ですか。",
        kana: "がくせいですか。",
        romaji: "Gakusei desu ka?",
        meaning: "Are you a student?"
    },
    {
        japanese: "日本語を勉強していますか。",
        kana: "にほんごを べんきょうしていますか。",
        romaji: "Nihongo o benkyou shiteimasu ka?",
        meaning: "Are you studying Japanese?"
    },
    {
        japanese: "日本にいつ来ましたか。",
        kana: "にほんに いつ きましたか。",
        romaji: "Nihon ni itsu kimashita ka?",
        meaning: "When did you come to Japan?"
    },
    {
        japanese: "日本に住んで何か月ですか。",
        kana: "にほんに すんで なんかげつですか。",
        romaji: "Nihon ni sunde nankagetsu desu ka?",
        meaning: "How many months have you lived in Japan?"
    },
    {
        japanese: "日本語は難しいですか。",
        kana: "にほんごは むずかしいですか。",
        romaji: "Nihongo wa muzukashii desu ka?",
        meaning: "Is Japanese difficult?"
    },
    {
        japanese: "日本語は楽しいですか。",
        kana: "にほんごは たのしいですか。",
        romaji: "Nihongo wa tanoshii desu ka?",
        meaning: "Is Japanese fun?"
    },
    {
        japanese: "日本語をどのくらい勉強しましたか。",
        kana: "にほんごを どのくらい べんきょうしましたか。",
        romaji: "Nihongo o dono kurai benkyou shimashita ka?",
        meaning: "How long have you studied Japanese?"
    },
    {
        japanese: "日本語で何が言えますか。",
        kana: "にほんごで なにが いえますか。",
        romaji: "Nihongo de nani ga iemasu ka?",
        meaning: "What can you say in Japanese?"
    },
    {
        japanese: "将来何になりたいですか。",
        kana: "しょうらい なにに なりたいですか。",
        romaji: "Shourai nani ni naritai desu ka?",
        meaning: "What do you want to become in the future?"
    },
    {
        japanese: "日本で何をしたいですか。",
        kana: "にほんで なにを したいですか。",
        romaji: "Nihon de nani o shitai desu ka?",
        meaning: "What do you want to do in Japan?"
    },
    {
        japanese: "日本のどこへ行きたいですか。",
        kana: "にほんの どこへ いきたいですか。",
        romaji: "Nihon no doko e ikitai desu ka?",
        meaning: "Where in Japan do you want to go?"
    },

    // 21–40: Daily life

    {
        japanese: "毎朝何時に起きますか。",
        kana: "まいあさ なんじに おきますか。",
        romaji: "Maiasa nanji ni okimasu ka?",
        meaning: "What time do you wake up every morning?"
    },
    {
        japanese: "何時に寝ますか。",
        kana: "なんじに ねますか。",
        romaji: "Nanji ni nemasu ka?",
        meaning: "What time do you go to bed?"
    },
    {
        japanese: "朝ご飯を食べますか。",
        kana: "あさごはんを たべますか。",
        romaji: "Asagohan o tabemasu ka?",
        meaning: "Do you eat breakfast?"
    },
    {
        japanese: "朝ご飯は何を食べますか。",
        kana: "あさごはんは なにを たべますか。",
        romaji: "Asagohan wa nani o tabemasu ka?",
        meaning: "What do you eat for breakfast?"
    },
    {
        japanese: "毎日何をしますか。",
        kana: "まいにち なにを しますか。",
        romaji: "Mainichi nani o shimasu ka?",
        meaning: "What do you do every day?"
    },
    {
        japanese: "学校へ何で行きますか。",
        kana: "がっこうへ なんで いきますか。",
        romaji: "Gakkou e nande ikimasu ka?",
        meaning: "How do you go to school?"
    },
    {
        japanese: "学校までどのくらいかかりますか。",
        kana: "がっこうまで どのくらい かかりますか。",
        romaji: "Gakkou made dono kurai kakarimasu ka?",
        meaning: "How long does it take to get to school?"
    },
    {
        japanese: "学校は何時からですか。",
        kana: "がっこうは なんじからですか。",
        romaji: "Gakkou wa nanji kara desu ka?",
        meaning: "What time does school start?"
    },
    {
        japanese: "学校は何時までですか。",
        kana: "がっこうは なんじまでですか。",
        romaji: "Gakkou wa nanji made desu ka?",
        meaning: "What time does school finish?"
    },
    {
        japanese: "学校で何を勉強しますか。",
        kana: "がっこうで なにを べんきょうしますか。",
        romaji: "Gakkou de nani o benkyou shimasu ka?",
        meaning: "What do you study at school?"
    },
    {
        japanese: "学校の先生はどんな人ですか。",
        kana: "がっこうの せんせいは どんな ひとですか。",
        romaji: "Gakkou no sensei wa donna hito desu ka?",
        meaning: "What kind of person is your teacher?"
    },
    {
        japanese: "授業は楽しいですか。",
        kana: "じゅぎょうは たのしいですか。",
        romaji: "Jugyou wa tanoshii desu ka?",
        meaning: "Are your classes fun?"
    },
    {
        japanese: "宿題が多いですか。",
        kana: "しゅくだいが おおいですか。",
        romaji: "Shukudai ga ooi desu ka?",
        meaning: "Do you have a lot of homework?"
    },
    {
        japanese: "家で何をしますか。",
        kana: "いえで なにを しますか。",
        romaji: "Ie de nani o shimasu ka?",
        meaning: "What do you do at home?"
    },
    {
        japanese: "部屋を掃除しますか。",
        kana: "へやを そうじしますか。",
        romaji: "Heya o souji shimasu ka?",
        meaning: "Do you clean your room?"
    },
    {
        japanese: "料理ができますか。",
        kana: "りょうりが できますか。",
        romaji: "Ryouri ga dekimasu ka?",
        meaning: "Can you cook?"
    },
    {
        japanese: "何を作ることができますか。",
        kana: "なにを つくることが できますか。",
        romaji: "Nani o tsukuru koto ga dekimasu ka?",
        meaning: "What can you make?"
    },
    {
        japanese: "洗濯をしますか。",
        kana: "せんたくを しますか。",
        romaji: "Sentaku o shimasu ka?",
        meaning: "Do you do laundry?"
    },
    {
        japanese: "毎日テレビを見ますか。",
        kana: "まいにち テレビを みますか。",
        romaji: "Mainichi terebi o mimasu ka?",
        meaning: "Do you watch TV every day?"
    },
    {
        japanese: "毎日音楽を聞きますか。",
        kana: "まいにち おんがくを ききますか。",
        romaji: "Mainichi ongaku o kikimasu ka?",
        meaning: "Do you listen to music every day?"
    },

    // 41–60: Time and schedule

    {
        japanese: "今日は何曜日ですか。",
        kana: "きょうは なんようびですか。",
        romaji: "Kyou wa nanyoubi desu ka?",
        meaning: "What day is it today?"
    },
    {
        japanese: "今日は何月何日ですか。",
        kana: "きょうは なんがつ なんにちですか。",
        romaji: "Kyou wa nangatsu nannichi desu ka?",
        meaning: "What is today's date?"
    },
    {
        japanese: "今何時ですか。",
        kana: "いま なんじですか。",
        romaji: "Ima nanji desu ka?",
        meaning: "What time is it now?"
    },
    {
        japanese: "今日は忙しいですか。",
        kana: "きょうは いそがしいですか。",
        romaji: "Kyou wa isogashii desu ka?",
        meaning: "Are you busy today?"
    },
    {
        japanese: "明日は暇ですか。",
        kana: "あしたは ひまですか。",
        romaji: "Ashita wa hima desu ka?",
        meaning: "Are you free tomorrow?"
    },
    {
        japanese: "明日何をしますか。",
        kana: "あした なにを しますか。",
        romaji: "Ashita nani o shimasu ka?",
        meaning: "What will you do tomorrow?"
    },
    {
        japanese: "昨日何をしましたか。",
        kana: "きのう なにを しましたか。",
        romaji: "Kinou nani o shimashita ka?",
        meaning: "What did you do yesterday?"
    },
    {
        japanese: "先週何をしましたか。",
        kana: "せんしゅう なにを しましたか。",
        romaji: "Senshuu nani o shimashita ka?",
        meaning: "What did you do last week?"
    },
    {
        japanese: "来週何をしたいですか。",
        kana: "らいしゅう なにを したいですか。",
        romaji: "Raishuu nani o shitai desu ka?",
        meaning: "What do you want to do next week?"
    },
    {
        japanese: "週末は何をしますか。",
        kana: "しゅうまつは なにを しますか。",
        romaji: "Shuumatsu wa nani o shimasu ka?",
        meaning: "What do you do on weekends?"
    },
    {
        japanese: "休みの日は何をしますか。",
        kana: "やすみの ひは なにを しますか。",
        romaji: "Yasumi no hi wa nani o shimasu ka?",
        meaning: "What do you do on your day off?"
    },
    {
        japanese: "何曜日が好きですか。",
        kana: "なんようびが すきですか。",
        romaji: "Nanyoubi ga suki desu ka?",
        meaning: "What day of the week do you like?"
    },
    {
        japanese: "一年で何月が好きですか。",
        kana: "いちねんで なんがつが すきですか。",
        romaji: "Ichinen de nangatsu ga suki desu ka?",
        meaning: "Which month do you like in the year?"
    },
    {
        japanese: "夏と冬とどちらが好きですか。",
        kana: "なつと ふゆと どちらが すきですか。",
        romaji: "Natsu to fuyu to dochira ga suki desu ka?",
        meaning: "Which do you like better, summer or winter?"
    },
    {
        japanese: "春に何をしたいですか。",
        kana: "はるに なにを したいですか。",
        romaji: "Haru ni nani o shitai desu ka?",
        meaning: "What do you want to do in spring?"
    },
    {
        japanese: "夏は暑いですか。",
        kana: "なつは あついですか。",
        romaji: "Natsu wa atsui desu ka?",
        meaning: "Is summer hot?"
    },
    {
        japanese: "冬は寒いですか。",
        kana: "ふゆは さむいですか。",
        romaji: "Fuyu wa samui desu ka?",
        meaning: "Is winter cold?"
    },
    {
        japanese: "毎日何時間寝ますか。",
        kana: "まいにち なんじかん ねますか。",
        romaji: "Mainichi nanjikan nemasu ka?",
        meaning: "How many hours do you sleep every day?"
    },
    {
        japanese: "何時に学校へ行きますか。",
        kana: "なんじに がっこうへ いきますか。",
        romaji: "Nanji ni gakkou e ikimasu ka?",
        meaning: "What time do you go to school?"
    },
    {
        japanese: "何時に家へ帰りますか。",
        kana: "なんじに いえへ かえりますか。",
        romaji: "Nanji ni ie e kaerimasu ka?",
        meaning: "What time do you return home?"
    },

    // 61–80: Food and drinks

    {
        japanese: "好きな食べ物は何ですか。",
        kana: "すきな たべものは なんですか。",
        romaji: "Suki na tabemono wa nan desu ka?",
        meaning: "What is your favorite food?"
    },
    {
        japanese: "嫌いな食べ物は何ですか。",
        kana: "きらいな たべものは なんですか。",
        romaji: "Kirai na tabemono wa nan desu ka?",
        meaning: "What food do you dislike?"
    },
    {
        japanese: "日本料理が好きですか。",
        kana: "にほんりょうりが すきですか。",
        romaji: "Nihon ryouri ga suki desu ka?",
        meaning: "Do you like Japanese food?"
    },
    {
        japanese: "寿司を食べたことがありますか。",
        kana: "すしを たべたことが ありますか。",
        romaji: "Sushi o tabeta koto ga arimasu ka?",
        meaning: "Have you ever eaten sushi?"
    },
    {
        japanese: "ラーメンが好きですか。",
        kana: "ラーメンが すきですか。",
        romaji: "Raamen ga suki desu ka?",
        meaning: "Do you like ramen?"
    },
    {
        japanese: "カレーが好きですか。",
        kana: "カレーが すきですか。",
        romaji: "Karee ga suki desu ka?",
        meaning: "Do you like curry?"
    },
    {
        japanese: "朝ご飯に何を食べますか。",
        kana: "あさごはんに なにを たべますか。",
        romaji: "Asagohan ni nani o tabemasu ka?",
        meaning: "What do you eat for breakfast?"
    },
    {
        japanese: "昼ご飯に何を食べましたか。",
        kana: "ひるごはんに なにを たべましたか。",
        romaji: "Hirugohan ni nani o tabemashita ka?",
        meaning: "What did you eat for lunch?"
    },
    {
        japanese: "晩ご飯は何を食べたいですか。",
        kana: "ばんごはんは なにを たべたいですか。",
        romaji: "Bangohan wa nani o tabetai desu ka?",
        meaning: "What do you want to eat for dinner?"
    },
    {
        japanese: "何を飲みたいですか。",
        kana: "なにを のみたいですか。",
        romaji: "Nani o nomitai desu ka?",
        meaning: "What do you want to drink?"
    },
    {
        japanese: "水をよく飲みますか。",
        kana: "みずを よく のみますか。",
        romaji: "Mizu o yoku nomimasu ka?",
        meaning: "Do you often drink water?"
    },
    {
        japanese: "コーヒーを飲みますか。",
        kana: "コーヒーを のみますか。",
        romaji: "Koohii o nomimasu ka?",
        meaning: "Do you drink coffee?"
    },
    {
        japanese: "お茶が好きですか。",
        kana: "おちゃが すきですか。",
        romaji: "Ocha ga suki desu ka?",
        meaning: "Do you like tea?"
    },
    {
        japanese: "甘い物が好きですか。",
        kana: "あまいものが すきですか。",
        romaji: "Amai mono ga suki desu ka?",
        meaning: "Do you like sweet things?"
    },
    {
        japanese: "辛い食べ物が好きですか。",
        kana: "からい たべものが すきですか。",
        romaji: "Karai tabemono ga suki desu ka?",
        meaning: "Do you like spicy food?"
    },
    {
        japanese: "料理をするのが好きですか。",
        kana: "りょうりを するのが すきですか。",
        romaji: "Ryouri o suru no ga suki desu ka?",
        meaning: "Do you like cooking?"
    },
    {
        japanese: "よく外食しますか。",
        kana: "よく がいしょくしますか。",
        romaji: "Yoku gaishoku shimasu ka?",
        meaning: "Do you often eat out?"
    },
    {
        japanese: "どんなレストランが好きですか。",
        kana: "どんな レストランが すきですか。",
        romaji: "Donna resutoran ga suki desu ka?",
        meaning: "What kind of restaurants do you like?"
    },
    {
        japanese: "一番好きな果物は何ですか。",
        kana: "いちばん すきな くだものは なんですか。",
        romaji: "Ichiban suki na kudamono wa nan desu ka?",
        meaning: "What is your favorite fruit?"
    },
    {
        japanese: "昨日何を食べましたか。",
        kana: "きのう なにを たべましたか。",
        romaji: "Kinou nani o tabemashita ka?",
        meaning: "What did you eat yesterday?"
    },

    // 81–100: Hobbies and interests

    {
        japanese: "趣味は何ですか。",
        kana: "しゅみは なんですか。",
        romaji: "Shumi wa nan desu ka?",
        meaning: "What is your hobby?"
    },
    {
        japanese: "音楽が好きですか。",
        kana: "おんがくが すきですか。",
        romaji: "Ongaku ga suki desu ka?",
        meaning: "Do you like music?"
    },
    {
        japanese: "どんな音楽が好きですか。",
        kana: "どんな おんがくが すきですか。",
        romaji: "Donna ongaku ga suki desu ka?",
        meaning: "What kind of music do you like?"
    },
    {
        japanese: "好きな歌手は誰ですか。",
        kana: "すきな かしゅは だれですか。",
        romaji: "Suki na kashu wa dare desu ka?",
        meaning: "Who is your favorite singer?"
    },
    {
        japanese: "映画を見るのが好きですか。",
        kana: "えいがを みるのが すきですか。",
        romaji: "Eiga o miru no ga suki desu ka?",
        meaning: "Do you like watching movies?"
    },
    {
        japanese: "どんな映画が好きですか。",
        kana: "どんな えいがが すきですか。",
        romaji: "Donna eiga ga suki desu ka?",
        meaning: "What kind of movies do you like?"
    },
    {
        japanese: "本を読むのが好きですか。",
        kana: "ほんを よむのが すきですか。",
        romaji: "Hon o yomu no ga suki desu ka?",
        meaning: "Do you like reading books?"
    },
    {
        japanese: "どんな本を読みますか。",
        kana: "どんな ほんを よみますか。",
        romaji: "Donna hon o yomimasu ka?",
        meaning: "What kind of books do you read?"
    },
    {
        japanese: "スポーツが好きですか。",
        kana: "スポーツが すきですか。",
        romaji: "Supootsu ga suki desu ka?",
        meaning: "Do you like sports?"
    },
    {
        japanese: "何のスポーツが好きですか。",
        kana: "なんの スポーツが すきですか。",
        romaji: "Nan no supootsu ga suki desu ka?",
        meaning: "What sport do you like?"
    },
    {
        japanese: "サッカーができますか。",
        kana: "サッカーが できますか。",
        romaji: "Sakkaa ga dekimasu ka?",
        meaning: "Can you play soccer?"
    },
    {
        japanese: "泳ぐことができますか。",
        kana: "およぐことが できますか。",
        romaji: "Oyogu koto ga dekimasu ka?",
        meaning: "Can you swim?"
    },
    {
        japanese: "写真を撮るのが好きですか。",
        kana: "しゃしんを とるのが すきですか。",
        romaji: "Shashin o toru no ga suki desu ka?",
        meaning: "Do you like taking photos?"
    },
    {
        japanese: "ゲームをしますか。",
        kana: "ゲームを しますか。",
        romaji: "Geemu o shimasu ka?",
        meaning: "Do you play games?"
    },
    {
        japanese: "どんなゲームが好きですか。",
        kana: "どんな ゲームが すきですか。",
        romaji: "Donna geemu ga suki desu ka?",
        meaning: "What kind of games do you like?"
    },
    {
        japanese: "絵を描くことができますか。",
        kana: "えを かくことが できますか。",
        romaji: "E o kaku koto ga dekimasu ka?",
        meaning: "Can you draw pictures?"
    },
    {
        japanese: "歌を歌うのが好きですか。",
        kana: "うたを うたうのが すきですか。",
        romaji: "Uta o utau no ga suki desu ka?",
        meaning: "Do you like singing?"
    },
    {
        japanese: "ダンスができますか。",
        kana: "ダンスが できますか。",
        romaji: "Dansu ga dekimasu ka?",
        meaning: "Can you dance?"
    },
    {
        japanese: "休みの日に何をしたいですか。",
        kana: "やすみの ひに なにを したいですか。",
        romaji: "Yasumi no hi ni nani o shitai desu ka?",
        meaning: "What do you want to do on your day off?"
    },
    {
        japanese: "新しい趣味を始めたいですか。",
        kana: "あたらしい しゅみを はじめたいですか。",
        romaji: "Atarashii shumi o hajimetai desu ka?",
        meaning: "Do you want to start a new hobby?"
    },

    // 101–120: Places and travel

    {
        japanese: "京都へ行ったことがありますか。",
        kana: "きょうとへ いったことが ありますか。",
        romaji: "Kyouto e itta koto ga arimasu ka?",
        meaning: "Have you ever been to Kyoto?"
    },
    {
        japanese: "大阪へ行きたいですか。",
        kana: "おおさかへ いきたいですか。",
        romaji: "Oosaka e ikitai desu ka?",
        meaning: "Do you want to go to Osaka?"
    },
    {
        japanese: "東京へ行ったことがありますか。",
        kana: "とうきょうへ いったことが ありますか。",
        romaji: "Toukyou e itta koto ga arimasu ka?",
        meaning: "Have you ever been to Tokyo?"
    },
    {
        japanese: "一番行きたい場所はどこですか。",
        kana: "いちばん いきたい ばしょは どこですか。",
        romaji: "Ichiban ikitai basho wa doko desu ka?",
        meaning: "Where do you want to go the most?"
    },
    {
        japanese: "旅行が好きですか。",
        kana: "りょこうが すきですか。",
        romaji: "Ryokou ga suki desu ka?",
        meaning: "Do you like traveling?"
    },
    {
        japanese: "旅行をしたいですか。",
        kana: "りょこうを したいですか。",
        romaji: "Ryokou o shitai desu ka?",
        meaning: "Do you want to travel?"
    },
    {
        japanese: "どこへ旅行したいですか。",
        kana: "どこへ りょこうしたいですか。",
        romaji: "Doko e ryokou shitai desu ka?",
        meaning: "Where do you want to travel?"
    },
    {
        japanese: "旅行で何をしたいですか。",
        kana: "りょこうで なにを したいですか。",
        romaji: "Ryokou de nani o shitai desu ka?",
        meaning: "What do you want to do on a trip?"
    },
    {
        japanese: "電車に乗ったことがありますか。",
        kana: "でんしゃに のったことが ありますか。",
        romaji: "Densha ni notta koto ga arimasu ka?",
        meaning: "Have you ever ridden a train?"
    },
    {
        japanese: "新幹線に乗りたいですか。",
        kana: "しんかんせんに のりたいですか。",
        romaji: "Shinkansen ni noritai desu ka?",
        meaning: "Do you want to ride the bullet train?"
    },
    {
        japanese: "駅はどこですか。",
        kana: "えきは どこですか。",
        romaji: "Eki wa doko desu ka?",
        meaning: "Where is the station?"
    },
    {
        japanese: "コンビニはどこですか。",
        kana: "コンビニは どこですか。",
        romaji: "Konbini wa doko desu ka?",
        meaning: "Where is the convenience store?"
    },
    {
        japanese: "銀行はどこですか。",
        kana: "ぎんこうは どこですか。",
        romaji: "Ginkou wa doko desu ka?",
        meaning: "Where is the bank?"
    },
    {
        japanese: "病院はどこですか。",
        kana: "びょういんは どこですか。",
        romaji: "Byouin wa doko desu ka?",
        meaning: "Where is the hospital?"
    },
    {
        japanese: "郵便局はどこですか。",
        kana: "ゆうびんきょくは どこですか。",
        romaji: "Yuubinkyoku wa doko desu ka?",
        meaning: "Where is the post office?"
    },
    {
        japanese: "この近くに公園がありますか。",
        kana: "この ちかくに こうえんが ありますか。",
        romaji: "Kono chikaku ni kouen ga arimasu ka?",
        meaning: "Is there a park near here?"
    },
    {
        japanese: "公園で何をしますか。",
        kana: "こうえんで なにを しますか。",
        romaji: "Kouen de nani o shimasu ka?",
        meaning: "What do you do at the park?"
    },
    {
        japanese: "海へ行きたいですか。",
        kana: "うみへ いきたいですか。",
        romaji: "Umi e ikitai desu ka?",
        meaning: "Do you want to go to the sea?"
    },
    {
        japanese: "山に登ったことがありますか。",
        kana: "やまに のぼったことが ありますか。",
        romaji: "Yama ni nobotta koto ga arimasu ka?",
        meaning: "Have you ever climbed a mountain?"
    },
    {
        japanese: "どこで写真を撮りたいですか。",
        kana: "どこで しゃしんを とりたいですか。",
        romaji: "Doko de shashin o toritai desu ka?",
        meaning: "Where do you want to take photos?"
    },

    // 121–140: Shopping and money

    {
        japanese: "買い物が好きですか。",
        kana: "かいものが すきですか。",
        romaji: "Kaimono ga suki desu ka?",
        meaning: "Do you like shopping?"
    },
    {
        japanese: "昨日買い物をしましたか。",
        kana: "きのう かいものを しましたか。",
        romaji: "Kinou kaimono o shimashita ka?",
        meaning: "Did you go shopping yesterday?"
    },
    {
        japanese: "何を買いたいですか。",
        kana: "なにを かいたいですか。",
        romaji: "Nani o kaitai desu ka?",
        meaning: "What do you want to buy?"
    },
    {
        japanese: "何を買いましたか。",
        kana: "なにを かいましたか。",
        romaji: "Nani o kaimashita ka?",
        meaning: "What did you buy?"
    },
    {
        japanese: "この服はいくらですか。",
        kana: "この ふくは いくらですか。",
        romaji: "Kono fuku wa ikura desu ka?",
        meaning: "How much is this clothing?"
    },
    {
        japanese: "高い物が好きですか。",
        kana: "たかい ものが すきですか。",
        romaji: "Takai mono ga suki desu ka?",
        meaning: "Do you like expensive things?"
    },
    {
        japanese: "安い物を探していますか。",
        kana: "やすい ものを さがしていますか。",
        romaji: "Yasui mono o sagashite imasu ka?",
        meaning: "Are you looking for something inexpensive?"
    },
    {
        japanese: "デパートへ行きますか。",
        kana: "デパートへ いきますか。",
        romaji: "Depaato e ikimasu ka?",
        meaning: "Do you go to department stores?"
    },
    {
        japanese: "コンビニで何を買いますか。",
        kana: "コンビニで なにを かいますか。",
        romaji: "Konbini de nani o kaimasu ka?",
        meaning: "What do you buy at a convenience store?"
    },
    {
        japanese: "スーパーで何を買いますか。",
        kana: "スーパーで なにを かいますか。",
        romaji: "Suupaa de nani o kaimasu ka?",
        meaning: "What do you buy at the supermarket?"
    },
    {
        japanese: "現金を持っていますか。",
        kana: "げんきんを もっていますか。",
        romaji: "Genkin o motte imasu ka?",
        meaning: "Do you have cash?"
    },
    {
        japanese: "カードで払いますか。",
        kana: "カードで はらいますか。",
        romaji: "Kaado de haraimasu ka?",
        meaning: "Do you pay by card?"
    },
    {
        japanese: "お金を貯めていますか。",
        kana: "おかねを ためていますか。",
        romaji: "Okane o tamete imasu ka?",
        meaning: "Are you saving money?"
    },
    {
        japanese: "毎月いくら使いますか。",
        kana: "まいつき いくら つかいますか。",
        romaji: "Maitsuki ikura tsukaimasu ka?",
        meaning: "How much do you spend every month?"
    },
    {
        japanese: "どんな服が好きですか。",
        kana: "どんな ふくが すきですか。",
        romaji: "Donna fuku ga suki desu ka?",
        meaning: "What kind of clothes do you like?"
    },
    {
        japanese: "新しい靴が欲しいですか。",
        kana: "あたらしい くつが ほしいですか。",
        romaji: "Atarashii kutsu ga hoshii desu ka?",
        meaning: "Do you want new shoes?"
    },
    {
        japanese: "プレゼントを買いましたか。",
        kana: "プレゼントを かいましたか。",
        romaji: "Purezento o kaimashita ka?",
        meaning: "Did you buy a present?"
    },
    {
        japanese: "誰にプレゼントをあげたいですか。",
        kana: "だれに プレゼントを あげたいですか。",
        romaji: "Dare ni purezento o agetai desu ka?",
        meaning: "Who do you want to give a present to?"
    },
    {
        japanese: "何色が好きですか。",
        kana: "なにいろが すきですか。",
        romaji: "Naniiro ga suki desu ka?",
        meaning: "What color do you like?"
    },
    {
        japanese: "赤い服を持っていますか。",
        kana: "あかい ふくを もっていますか。",
        romaji: "Akai fuku o motte imasu ka?",
        meaning: "Do you have red clothes?"
    },

    // 141–160: Family, friends, and people

    {
        japanese: "家族と住んでいますか。",
        kana: "かぞくと すんでいますか。",
        romaji: "Kazoku to sunde imasu ka?",
        meaning: "Do you live with your family?"
    },
    {
        japanese: "家族はどこに住んでいますか。",
        kana: "かぞくは どこに すんでいますか。",
        romaji: "Kazoku wa doko ni sunde imasu ka?",
        meaning: "Where does your family live?"
    },
    {
        japanese: "お父さんは何をしていますか。",
        kana: "おとうさんは なにを していますか。",
        romaji: "Otousan wa nani o shite imasu ka?",
        meaning: "What does your father do?"
    },
    {
        japanese: "お母さんは料理が上手ですか。",
        kana: "おかあさんは りょうりが じょうずですか。",
        romaji: "Okaasan wa ryouri ga jouzu desu ka?",
        meaning: "Is your mother good at cooking?"
    },
    {
        japanese: "兄弟は何人いますか。",
        kana: "きょうだいは なんにん いますか。",
        romaji: "Kyoudai wa nannin imasu ka?",
        meaning: "How many brothers and sisters do you have?"
    },
    {
        japanese: "お兄さんがいますか。",
        kana: "おにいさんが いますか。",
        romaji: "Oniisan ga imasu ka?",
        meaning: "Do you have an older brother?"
    },
    {
        japanese: "妹がいますか。",
        kana: "いもうとが いますか。",
        romaji: "Imouto ga imasu ka?",
        meaning: "Do you have a younger sister?"
    },
    {
        japanese: "友達がたくさんいますか。",
        kana: "ともだちが たくさん いますか。",
        romaji: "Tomodachi ga takusan imasu ka?",
        meaning: "Do you have many friends?"
    },
    {
        japanese: "親友は誰ですか。",
        kana: "しんゆうは だれですか。",
        romaji: "Shinyuu wa dare desu ka?",
        meaning: "Who is your best friend?"
    },
    {
        japanese: "友達と何をしますか。",
        kana: "ともだちと なにを しますか。",
        romaji: "Tomodachi to nani o shimasu ka?",
        meaning: "What do you do with your friends?"
    },
    {
        japanese: "友達と映画を見ますか。",
        kana: "ともだちと えいがを みますか。",
        romaji: "Tomodachi to eiga o mimasu ka?",
        meaning: "Do you watch movies with your friends?"
    },
    {
        japanese: "友達とよく話しますか。",
        kana: "ともだちと よく はなしますか。",
        romaji: "Tomodachi to yoku hanashimasu ka?",
        meaning: "Do you often talk with your friends?"
    },
    {
        japanese: "どんな人が好きですか。",
        kana: "どんな ひとが すきですか。",
        romaji: "Donna hito ga suki desu ka?",
        meaning: "What kind of person do you like?"
    },
    {
        japanese: "先生は優しいですか。",
        kana: "せんせいは やさしいですか。",
        romaji: "Sensei wa yasashii desu ka?",
        meaning: "Is your teacher kind?"
    },
    {
        japanese: "日本人の友達がいますか。",
        kana: "にほんじんの ともだちが いますか。",
        romaji: "Nihonjin no tomodachi ga imasu ka?",
        meaning: "Do you have Japanese friends?"
    },
    {
        japanese: "友達に日本語を話しますか。",
        kana: "ともだちに にほんごを はなしますか。",
        romaji: "Tomodachi ni nihongo o hanashimasu ka?",
        meaning: "Do you speak Japanese with your friends?"
    },
    {
        japanese: "家族に電話をしますか。",
        kana: "かぞくに でんわを しますか。",
        romaji: "Kazoku ni denwa o shimasu ka?",
        meaning: "Do you call your family?"
    },
    {
        japanese: "家族にメールを送りますか。",
        kana: "かぞくに メールを おくりますか。",
        romaji: "Kazoku ni meeru o okurimasu ka?",
        meaning: "Do you send emails to your family?"
    },
    {
        japanese: "誰と一緒に住んでいますか。",
        kana: "だれと いっしょに すんでいますか。",
        romaji: "Dare to issho ni sunde imasu ka?",
        meaning: "Who do you live with?"
    },
    {
        japanese: "誰と一緒に学校へ行きますか。",
        kana: "だれと いっしょに がっこうへ いきますか。",
        romaji: "Dare to issho ni gakkou e ikimasu ka?",
        meaning: "Who do you go to school with?"
    },

    // 161–180: Weather, health, and feelings

    {
        japanese: "今日の天気はどうですか。",
        kana: "きょうの てんきは どうですか。",
        romaji: "Kyou no tenki wa dou desu ka?",
        meaning: "How is the weather today?"
    },
    {
        japanese: "今日は晴れていますか。",
        kana: "きょうは はれていますか。",
        romaji: "Kyou wa harete imasu ka?",
        meaning: "Is it sunny today?"
    },
    {
        japanese: "今日は雨が降っていますか。",
        kana: "きょうは あめが ふっていますか。",
        romaji: "Kyou wa ame ga futte imasu ka?",
        meaning: "Is it raining today?"
    },
    {
        japanese: "雪を見たことがありますか。",
        kana: "ゆきを みたことが ありますか。",
        romaji: "Yuki o mita koto ga arimasu ka?",
        meaning: "Have you ever seen snow?"
    },
    {
        japanese: "暑い日が好きですか。",
        kana: "あつい ひが すきですか。",
        romaji: "Atsui hi ga suki desu ka?",
        meaning: "Do you like hot days?"
    },
    {
        japanese: "寒い日が好きですか。",
        kana: "さむい ひが すきですか。",
        romaji: "Samui hi ga suki desu ka?",
        meaning: "Do you like cold days?"
    },
    {
        japanese: "今日は元気ですか。",
        kana: "きょうは げんきですか。",
        romaji: "Kyou wa genki desu ka?",
        meaning: "Are you well today?"
    },
    {
        japanese: "今疲れていますか。",
        kana: "いま つかれていますか。",
        romaji: "Ima tsukarete imasu ka?",
        meaning: "Are you tired now?"
    },
    {
        japanese: "お腹が痛いですか。",
        kana: "おなかが いたいですか。",
        romaji: "Onaka ga itai desu ka?",
        meaning: "Does your stomach hurt?"
    },
    {
        japanese: "頭が痛いですか。",
        kana: "あたまが いたいですか。",
        romaji: "Atama ga itai desu ka?",
        meaning: "Do you have a headache?"
    },
    {
        japanese: "病気になったことがありますか。",
        kana: "びょうきに なったことが ありますか。",
        romaji: "Byouki ni natta koto ga arimasu ka?",
        meaning: "Have you ever been sick?"
    },
    {
        japanese: "毎日運動しますか。",
        kana: "まいにち うんどうしますか。",
        romaji: "Mainichi undou shimasu ka?",
        meaning: "Do you exercise every day?"
    },
    {
        japanese: "歩くのが好きですか。",
        kana: "あるくのが すきですか。",
        romaji: "Aruku no ga suki desu ka?",
        meaning: "Do you like walking?"
    },
    {
        japanese: "よく休みますか。",
        kana: "よく やすみますか。",
        romaji: "Yoku yasumimasu ka?",
        meaning: "Do you rest often?"
    },
    {
        japanese: "何をすると楽しいですか。",
        kana: "なにを すると たのしいですか。",
        romaji: "Nani o suru to tanoshii desu ka?",
        meaning: "What is fun for you to do?"
    },
    {
        japanese: "何をすると嬉しいですか。",
        kana: "なにを すると うれしいですか。",
        romaji: "Nani o suru to ureshii desu ka?",
        meaning: "What makes you happy?"
    },
    {
        japanese: "何をすると悲しいですか。",
        kana: "なにを すると かなしいですか。",
        romaji: "Nani o suru to kanashii desu ka?",
        meaning: "What makes you sad?"
    },
    {
        japanese: "日本の生活に慣れましたか。",
        kana: "にほんの せいかつに なれましたか。",
        romaji: "Nihon no seikatsu ni naremashita ka?",
        meaning: "Have you gotten used to life in Japan?"
    },
    {
        japanese: "日本の生活はどうですか。",
        kana: "にほんの せいかつは どうですか。",
        romaji: "Nihon no seikatsu wa dou desu ka?",
        meaning: "How is life in Japan?"
    },
    {
        japanese: "今どんな気持ちですか。",
        kana: "いま どんな きもちですか。",
        romaji: "Ima donna kimochi desu ka?",
        meaning: "How are you feeling now?"
    },

    // 181–200: Work, plans, and general questions

    {
        japanese: "アルバイトをしていますか。",
        kana: "アルバイトを していますか。",
        romaji: "Arubaito o shite imasu ka?",
        meaning: "Do you have a part-time job?"
    },
    {
        japanese: "どんな仕事をしたいですか。",
        kana: "どんな しごとを したいですか。",
        romaji: "Donna shigoto o shitai desu ka?",
        meaning: "What kind of work do you want to do?"
    },
    {
        japanese: "レストランで働きたいですか。",
        kana: "レストランで はたらきたいですか。",
        romaji: "Resutoran de hatarakitai desu ka?",
        meaning: "Do you want to work at a restaurant?"
    },
    {
        japanese: "仕事は大変ですか。",
        kana: "しごとは たいへんですか。",
        romaji: "Shigoto wa taihen desu ka?",
        meaning: "Is your work difficult?"
    },
    {
        japanese: "仕事で何をしますか。",
        kana: "しごとで なにを しますか。",
        romaji: "Shigoto de nani o shimasu ka?",
        meaning: "What do you do at work?"
    },
    {
        japanese: "何時から働きたいですか。",
        kana: "なんじから はたらきたいですか。",
        romaji: "Nanji kara hatarakitai desu ka?",
        meaning: "From what time do you want to work?"
    },
    {
        japanese: "何時間働きたいですか。",
        kana: "なんじかん はたらきたいですか。",
        romaji: "Nanjikan hatarakitai desu ka?",
        meaning: "How many hours do you want to work?"
    },
    {
        japanese: "将来日本で働きたいですか。",
        kana: "しょうらい にほんで はたらきたいですか。",
        romaji: "Shourai Nihon de hatarakitai desu ka?",
        meaning: "Do you want to work in Japan in the future?"
    },
    {
        japanese: "日本語を上手になりたいですか。",
        kana: "にほんごを じょうずに なりたいですか。",
        romaji: "Nihongo o jouzu ni naritai desu ka?",
        meaning: "Do you want to become better at Japanese?"
    },
    {
        japanese: "日本語で何を話したいですか。",
        kana: "にほんごで なにを はなしたいですか。",
        romaji: "Nihongo de nani o hanashitai desu ka?",
        meaning: "What do you want to talk about in Japanese?"
    },
    {
        japanese: "今年何をしたいですか。",
        kana: "ことし なにを したいですか。",
        romaji: "Kotoshi nani o shitai desu ka?",
        meaning: "What do you want to do this year?"
    },
    {
        japanese: "来年何をしたいですか。",
        kana: "らいねん なにを したいですか。",
        romaji: "Rainen nani o shitai desu ka?",
        meaning: "What do you want to do next year?"
    },
    {
        japanese: "今週何をしたいですか。",
        kana: "こんしゅう なにを したいですか。",
        romaji: "Konshuu nani o shitai desu ka?",
        meaning: "What do you want to do this week?"
    },
    {
        japanese: "何か新しいことをしたいですか。",
        kana: "なにか あたらしいことを したいですか。",
        romaji: "Nanika atarashii koto o shitai desu ka?",
        meaning: "Do you want to do something new?"
    },
    {
        japanese: "日本で何が一番好きですか。",
        kana: "にほんで なにが いちばん すきですか。",
        romaji: "Nihon de nani ga ichiban suki desu ka?",
        meaning: "What do you like most about Japan?"
    },
    {
        japanese: "日本で何が一番便利ですか。",
        kana: "にほんで なにが いちばん べんりですか。",
        romaji: "Nihon de nani ga ichiban benri desu ka?",
        meaning: "What is the most convenient thing in Japan?"
    },
    {
        japanese: "日本で困ったことがありますか。",
        kana: "にほんで こまったことが ありますか。",
        romaji: "Nihon de komatta koto ga arimasu ka?",
        meaning: "Have you had any difficulties in Japan?"
    },
    {
        japanese: "日本でびっくりしたことは何ですか。",
        kana: "にほんで びっくりしたことは なんですか。",
        romaji: "Nihon de bikkuri shita koto wa nan desu ka?",
        meaning: "What surprised you in Japan?"
    },
    {
        japanese: "日本人に何を聞きたいですか。",
        kana: "にほんじんに なにを ききたいですか。",
        romaji: "Nihonjin ni nani o kikitai desu ka?",
        meaning: "What do you want to ask Japanese people?"
    },
    {
        japanese: "今一番したいことは何ですか。",
        kana: "いま いちばん したいことは なんですか。",
        romaji: "Ima ichiban shitai koto wa nan desu ka?",
        meaning: "What do you want to do most right now?"
    }

];


/* =====================================================
   HTML ELEMENTS
===================================================== */

const questionJapanese = document.getElementById("questionJapanese");
const questionKana = document.getElementById("questionKana");
const questionRomaji = document.getElementById("questionRomaji");
const questionMeaning = document.getElementById("questionMeaning");

const questionCount = document.getElementById("questionCount");

const generateBtn = document.getElementById("generateBtn");
const micBtn = document.getElementById("micBtn");

const answerText = document.getElementById("answerText");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

const statusMessage = document.getElementById("statusMessage");


/* =====================================================
   CURRENT QUESTION
===================================================== */

let currentQuestion = questions[0];
let questionNumber = 1;


/* =====================================================
   DISPLAY QUESTION
===================================================== */

function displayQuestion(question) {
    currentQuestion = question;

    questionJapanese.textContent = question.japanese;
    questionKana.textContent = question.kana;
    questionRomaji.textContent = question.romaji;
    questionMeaning.textContent = question.meaning;

    questionCount.textContent = `Question ${questionNumber}`;
}


/* =====================================================
   GENERATE RANDOM QUESTION
===================================================== */

function generateRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);

    questionNumber++;

    displayQuestion(questions[randomIndex]);

    answerText.value = "";

    statusMessage.textContent =
        "New question generated. Answer in Japanese.";

    statusMessage.style.color = "#737b95";
}

generateBtn.addEventListener("click", generateRandomQuestion);


/* =====================================================
   CLEAR ANSWER
===================================================== */

clearBtn.addEventListener("click", function () {
    answerText.value = "";

    statusMessage.textContent = "Answer cleared.";
    statusMessage.style.color = "#737b95";
});


/* =====================================================
   SPEECH RECOGNITION
===================================================== */

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;
let isRecognizing = false;

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.lang = "ja-JP";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function () {
        isRecognizing = true;

        micBtn.textContent = "⏹ Stop Speaking";
        micBtn.classList.add("recording");

        statusMessage.textContent =
            "Listening... Please speak in Japanese.";

        statusMessage.style.color = "#bd284c";
    };

    recognition.onresult = function (event) {
        const spokenText = event.results[0][0].transcript;

        answerText.value = spokenText;

        statusMessage.textContent =
            "Your answer was recognized successfully.";

        statusMessage.style.color = "#42a878";
    };

    recognition.onerror = function (event) {
        statusMessage.textContent =
            "Microphone error: " + event.error;

        statusMessage.style.color = "#bd284c";
    };

    recognition.onend = function () {
        isRecognizing = false;

        micBtn.textContent = "🎤 Start Speaking";
        micBtn.classList.remove("recording");
    };

} else {

    micBtn.disabled = true;
    micBtn.textContent = "🎤 Voice Not Supported";

    statusMessage.textContent =
        "Speech recognition is not supported. Try Google Chrome or Microsoft Edge.";
}


/* =====================================================
   MICROPHONE BUTTON
===================================================== */

micBtn.addEventListener("click", function () {

    if (!recognition) {
        return;
    }

    if (isRecognizing) {
        recognition.stop();
    } else {
        recognition.start();
    }

});


/* =====================================================
   SAVE ANSWER
===================================================== */

saveBtn.addEventListener("click", function () {

    const answer = answerText.value.trim();

    if (answer === "") {

        statusMessage.textContent =
            "Please speak or type an answer before saving.";

        statusMessage.style.color = "#bd284c";

        return;
    }

    const savedAnswers =
        JSON.parse(localStorage.getItem("japaneseAnswers")) || [];

    const answerData = {
        questionJapanese: currentQuestion.japanese,
        questionKana: currentQuestion.kana,
        questionRomaji: currentQuestion.romaji,
        questionMeaning: currentQuestion.meaning,
        answer: answer,
        date: new Date().toLocaleString()
    };

    savedAnswers.push(answerData);

    localStorage.setItem(
        "japaneseAnswers",
        JSON.stringify(savedAnswers)
    );

    statusMessage.textContent =
        "Your answer was saved. Open History to review it.";

    statusMessage.style.color = "#42a878";

});


/* =====================================================
   INITIAL QUESTION
===================================================== */

displayQuestion(currentQuestion);