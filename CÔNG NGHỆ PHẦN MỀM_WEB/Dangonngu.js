"use strict";


/* =========================================================
   DỮ LIỆU NGÔN NGỮ
   ========================================================= */

const languages = {

    vi: {
        speech: "vi-VN",
         eyebrow: "Địa điểm nổi tiếng của Việt Nam",
        ready: "Sẵn sàng",
        play: "▶ Phát",
        pause: "Ⅱ Tạm dừng",
        resume: "▶ Tiếp tục",
        replay: "▶ Phát lại",
        stop: "■ Dừng",
        stopped: "Đã dừng. Bấm Phát lại để nghe từ đầu.",
        paused: "Đang tạm dừng.",
        playing: "Đang thuyết minh...",
        autoStarted: "Đang tự động phát...",
        finished: "Đã phát xong.",
        choose: "Chọn một điểm tham quan để nghe thuyết minh.",
        journeyStarted: "Đã bắt đầu hành trình."
    },

    en: {
        speech: "en-US",
         eyebrow: "Famous Destinations in Vietnam",
        ready: "Ready",
        play: "▶ Play",
        pause: "Ⅱ Pause",
        resume: "▶ Resume",
        replay: "▶ Play again",
        stop: "■ Stop",
        stopped: "Stopped. Press Play again to start from the beginning.",
        paused: "Paused.",
        playing: "Narration is playing...",
        autoStarted: "Automatic narration is playing...",
        finished: "Narration finished.",
        choose: "Choose a destination to listen to the narration.",
        journeyStarted: "Journey started."
    },

    zh: {
        speech: "zh-CN",
        eyebrow: "越南著名景点",
        ready: "准备就绪",
        play: "▶ 播放",
        pause: "Ⅱ 暂停",
        resume: "▶ 继续",
        replay: "▶ 重新播放",
        stop: "■ 停止",
        stopped: "已停止。点击重新播放，从头开始。",
        paused: "已暂停。",
        playing: "正在播放导览...",
        autoStarted: "正在自动播放导览...",
        finished: "导览播放结束。",
        choose: "请选择一个景点收听导览。",
        journeyStarted: "旅程已开始。"
    },
    
zhTW: {
    speech: "zh-TW",
    eyebrow: "越南著名景點",
    ready: "準備就緒",
    play: "播放",
    pause: "暫停",
    resume: "繼續播放",
    replay: "重新播放",
    stop: "停止",
    stopped: "已停止",
    paused: "已暫停",
    playing: "播放中",
    autoStarted: "自動播放中",
    finished: "播放完成",
    choose: "請選擇一個景點收聽導覽。",
    journeyStarted: "旅程開始"
},


    ja: {
        speech: "ja-JP",
         eyebrow: "ベトナムの有名な観光地",
        ready: "準備完了",
        play: "▶ 再生",
        pause: "Ⅱ 一時停止",
        resume: "▶ 再開",
        replay: "▶ 最初から再生",
        stop: "■ 停止",
        stopped: "停止しました。最初から再生できます。",
        paused: "一時停止中です。",
        playing: "音声ガイドを再生しています...",
        autoStarted: "自動音声ガイドを再生しています...",
        finished: "音声ガイドが終了しました。",
        choose: "観光地を選択して音声ガイドを聞いてください。",
        journeyStarted: "旅を開始しました。"
    },

    ko: {
        speech: "ko-KR",
         eyebrow: "베트남의 유명한 관광지",
        ready: "준비 완료",
        play: "▶ 재생",
        pause: "Ⅱ 일시정지",
        resume: "▶ 계속",
        replay: "▶ 처음부터 재생",
        stop: "■ 정지",
        stopped: "정지되었습니다. 처음부터 다시 재생할 수 있습니다.",
        paused: "일시정지되었습니다.",
        playing: "음성 안내를 재생하고 있습니다...",
        autoStarted: "자동 음성 안내를 재생하고 있습니다...",
        finished: "음성 안내가 끝났습니다.",
        choose: "관광지를 선택하여 음성 안내를 들어보세요.",
        journeyStarted: "여행을 시작했습니다."
    },

    fr: {
        speech: "fr-FR",
        eyebrow: "Les destinations célèbres du Vietnam",
        ready: "Prêt",
        play: "▶ Lecture",
        pause: "Ⅱ Pause",
        resume: "▶ Continuer",
        replay: "▶ Rejouer",
        stop: "■ Arrêter",
        stopped: "Arrêté. Appuyez sur Lecture pour recommencer.",
        paused: "En pause.",
        playing: "La narration est en cours...",
        autoStarted: "La narration automatique est en cours...",
        finished: "La narration est terminée.",
        choose: "Choisissez une destination pour écouter la narration.",
        journeyStarted: "Le voyage a commencé."
    }

};


/* =========================================================
   DỮ LIỆU ĐỊA ĐIỂM
   ========================================================= */

const places = [

    {
        id: 1,

        name: {
            vi: "Vịnh Hạ Long",
            en: "Ha Long Bay",
            zh: "下龙湾",
            zhTW:"下龍灣",
            ja: "ハロン湾",
            ko: "하롱베이",
            fr: "Baie d'Ha Long"
        },

        location: {
            vi: "Quảng Ninh",
            en: "Quang Ninh",
            zh: "广宁省",
            zhTW:"廣寧",
            ja: "クアンニン省",
            ko: "꽝닌성",
            fr: "Quang Ninh"
        },

        image:
            "images/vinhhalong.jpg",

        duration: "03:00",

        description: {

            vi: `
            Vịnh Hạ Long là một trong những điểm đến nổi tiếng nhất
            của Việt Nam, nằm ở tỉnh Quảng Ninh và nổi bật với hàng nghìn
            đảo đá vôi lớn nhỏ nhô lên giữa mặt nước xanh. Mỗi đảo đá có
            hình dáng riêng, tạo nên một cảnh quan tự nhiên rất đặc biệt.
            Khi di chuyển bằng tàu trên vịnh, du khách có thể quan sát
            những vách núi đá dựng đứng, những hang động tự nhiên và
            những vùng nước yên bình được bao quanh bởi núi đá.

            Không chỉ có giá trị về cảnh quan, Vịnh Hạ Long còn gắn liền
            với đời sống của cộng đồng cư dân ven biển. Nhiều thế hệ
            người dân đã sinh sống, đánh bắt hải sản và phát triển các
            hoạt động du lịch trên vùng biển này. Du khách có thể trải
            nghiệm đi thuyền, tham quan hang động, chèo kayak và thưởng
            thức các món hải sản đặc trưng của Quảng Ninh.

            Vẻ đẹp của Hạ Long thay đổi theo thời gian trong ngày.
            Buổi sáng, mặt nước thường yên ả và phủ một lớp sương nhẹ.
            Buổi chiều, ánh nắng tạo nên những mảng màu khác nhau trên
            các đảo đá. Khi hoàng hôn buông xuống, toàn bộ vịnh trở nên
            yên bình và tạo nên một khung cảnh rất ấn tượng.
            `,

            en: `
            Ha Long Bay is one of Vietnam's most famous destinations,
            located in Quang Ninh Province. The bay is well known for
            its thousands of limestone islands and islets rising from
            calm blue waters. Each island has a distinctive shape,
            creating a remarkable natural landscape that has attracted
            visitors from many countries.

            Traveling by boat allows visitors to see steep limestone
            cliffs, natural caves, quiet lagoons and small islands.
            The scenery changes throughout the day. Morning mist can
            create a peaceful atmosphere, while afternoon sunlight
            highlights the different shapes and colors of the limestone
            formations.

            Ha Long Bay is also connected with the life of coastal
            communities. Local people have traditionally depended on
            fishing and marine resources. Today, visitors can enjoy
            boat cruises, kayaking, cave exploration and local seafood.
            The combination of natural scenery, traditional coastal life
            and tourism makes Ha Long Bay an important destination in
            northern Vietnam.
            `,

            zh: `
            下龙湾位于越南广宁省，是越南最著名的旅游目的地之一。
            海湾中分布着数千座大小不同的石灰岩岛屿和小岛，许多
            岛屿从平静的海面上升起，形成独特的自然景观。不同的
            岛屿拥有不同的形状，因此从船上观看时，可以看到变化
            丰富的山海景色。

            游客可以乘船游览海湾，欣赏高耸的石灰岩峭壁、天然洞穴
            和宁静的水域。清晨的薄雾使海湾显得安静而神秘，下午的
            阳光则让岩石呈现不同的色彩。

            下龙湾不仅具有自然价值，也与当地沿海居民的生活密切
            相关。传统的捕鱼活动在这里有着悠久的历史。如今游客
            可以乘坐游船、划皮划艇、参观洞穴，并品尝广宁省特色
            海鲜。自然景观与当地文化共同构成了下龙湾独特的魅力。
            `,
           zhTW: `下龍灣是越南最著名的旅遊景點之一，位於廣寧省，以數千座大小不一、從碧綠海水中聳立而起的石灰岩島嶼聞名。每座島嶼都有獨特的形狀，共同構成了別具特色的自然景觀。搭乘遊船在海灣中航行時，遊客可以欣賞陡峭的石灰岩峭壁、天然洞穴，以及被群山環繞的寧靜水域。

除了壯麗的自然景觀之外，下龍灣也與沿海居民的生活息息相關。世世代代以來，許多居民在這片海域生活、捕撈海產，並發展各種觀光活動。遊客可以體驗乘船遊覽、探索洞穴、划獨木舟，還能品嚐廣寧省具有地方特色的海鮮料理。

下龍灣的美景會隨著一天中不同的時段而變化。清晨時分，海面通常十分平靜，周圍籠罩著一層淡淡的薄霧。到了下午，陽光在島嶼上映照出層次豐富的色彩。當夕陽西下時，整個海灣逐漸變得寧靜，呈現出令人印象深刻的迷人景色。`,
            ja: `
            ハロン湾はベトナム北部のクアンニン省に位置する、
            ベトナムを代表する観光地の一つです。海面から大小
            数千もの石灰岩の島や岩が姿を現し、独特で美しい景観
            を作り出しています。それぞれの島には異なる形があり、
            船から眺めることでさまざまな自然の表情を楽しめます。

            観光客はクルーズ船に乗って、険しい岩壁や自然の洞窟、
            静かな海域を見学することができます。朝には薄い霧が
            海面を包み、午後には太陽の光によって岩の色や形が
            美しく変化します。

            また、ハロン湾は沿岸地域の人々の生活とも深く関係して
            います。昔から漁業が重要な産業として行われてきました。
            現在では、クルーズ、カヤック、洞窟探検、地元の海鮮料理
            などを体験することができます。
            `,

            ko: `
            하롱베이는 베트남 북부 꽝닌성에 위치한 대표적인 관광지입니다.
            바다 위에는 수천 개의 석회암 섬과 바위섬이 솟아 있으며,
            각각 서로 다른 모양을 가지고 있어 독특한 자연 경관을
            만들어 냅니다.

            관광객들은 유람선을 타고 가파른 석회암 절벽과 자연 동굴,
            조용한 바다를 감상할 수 있습니다. 아침에는 안개가 바다를
            감싸 신비로운 분위기를 만들고, 오후에는 햇빛에 따라
            바위의 색과 형태가 다양하게 보입니다.

            하롱베이는 자연 경관뿐만 아니라 해안 지역 주민들의 생활과도
            관련이 있습니다. 전통적으로 어업이 중요한 생업이었으며,
            현재 관광객들은 유람선, 카약, 동굴 관광과 현지 해산물
            요리를 경험할 수 있습니다.
            `,

            fr: `
            La baie d'Ha Long est située dans la province de Quang Ninh,
            au nord du Vietnam. Elle est célèbre pour ses milliers d'îles
            et de formations calcaires qui émergent de la mer. Chaque
            formation possède une silhouette différente et contribue à
            créer un paysage naturel remarquable.

            Les visiteurs peuvent découvrir la baie en bateau, observer
            les falaises calcaires, visiter des grottes naturelles et
            naviguer sur des eaux calmes. Le paysage change selon le
            moment de la journée. La brume du matin apporte une ambiance
            paisible, tandis que la lumière de l'après-midi met en valeur
            les formes des îlots.

            La baie est également liée à la vie des communautés côtières.
            La pêche constitue une activité traditionnelle importante.
            Aujourd'hui, les visiteurs peuvent faire une croisière, du
            kayak, visiter des grottes et déguster les fruits de mer
            locaux de Quang Ninh.
            `
        }
    },


    {
        id: 2,

        name: {
            vi: "Động Thiên Cung",
            en: "Thien Cung Cave",
            zh: "天宫洞",
            zhTW:"天宮洞",
            ja: "ティエンクン洞窟",
            ko: "티엔꿍 동굴",
            fr: "Grotte de Thien Cung"
        },

        location: {
            vi: "Vịnh Hạ Long, Quảng Ninh",
            en: "Ha Long Bay, Quang Ninh",
            zh: "下龙湾，广宁省",
             zhTW:"下龍灣,廣寧",
            ja: "ハロン湾、クアンニン省",
            ko: "하롱베이, 꽝닌",
            fr: "Baie d'Ha Long, Quang Ninh"
        },

        image:
    "images/dongthiencung.jpg",

        duration: "02:40",

        description: {

            vi: `
            Động Thiên Cung là một hang động nổi tiếng nằm trong quần thể
            Vịnh Hạ Long. Hang được biết đến nhờ hệ thống thạch nhũ và
            măng đá có hình dạng phong phú. Bên trong động, ánh sáng được
            bố trí hợp lý giúp làm nổi bật những cấu trúc đá tự nhiên,
            tạo cảm giác như đang bước vào một không gian hoàn toàn khác
            bên trong lòng núi.

            Đường đi vào động đưa du khách qua khu vực có cây xanh và
            những bậc đá. Khi tiến sâu vào bên trong, không gian mở rộng
            với nhiều khoang lớn nhỏ. Trên trần và vách động có rất nhiều
            hình dạng đá do quá trình nước hòa tan và bồi tụ khoáng chất
            diễn ra trong thời gian rất dài.

            Thiên Cung cũng gắn với nhiều câu chuyện dân gian và truyền
            thuyết được người dân địa phương kể lại. Những câu chuyện này
            góp phần làm cho chuyến tham quan không chỉ mang tính khám phá
            thiên nhiên mà còn có thêm màu sắc văn hóa.
            `,

            en: `
            Thien Cung Cave is a well-known cave in Ha Long Bay. It is
            famous for its impressive stalactites and stalagmites, which
            have developed naturally over a very long period. Inside the
            cave, different chambers contain numerous rock formations
            shaped by water and mineral deposits.

            Visitors reach the cave through a pathway surrounded by
            vegetation and stone steps. As they enter deeper into the
            cave, the space becomes larger and reveals different chambers.
            Artificial lighting is used to highlight some of the natural
            formations without changing the basic character of the cave.

            The cave is also associated with local legends and traditional
            stories. These stories add a cultural dimension to the visit
            and help visitors understand how local communities have
            imagined and interpreted the mysterious landscape of Ha Long Bay.
            `,

            zh: `
            天宫洞是下龙湾著名的天然洞穴之一，以丰富的钟乳石和
            石笋景观而闻名。洞穴内部拥有多个大小不同的空间，岩壁
            和洞顶经过长期的水流侵蚀以及矿物沉积，形成了各种自然
            形态。

            游客需要沿着石阶和通道进入洞穴。随着深入洞内，空间
            逐渐开阔，可以看到不同形态的岩石。洞内灯光主要用于
            突出部分自然结构，使游客能够更加清楚地观察洞穴景观。

            天宫洞还与当地的民间传说有关。这些故事使游客在欣赏
            自然景观的同时，也能够了解越南当地文化和人们对自然
            奇观的传统想象。
            `,
            zhTW: "天宮洞位於越南廣寧省下龍灣地區，是一座以奇特鐘乳石和石筍景觀聞名的天然洞穴。洞內空間寬敞，岩石經過長時間的水流侵蝕與沉積，形成了各種令人驚嘆的形狀。洞穴中的燈光照亮了岩壁與岩柱，使整個空間呈現出神秘而夢幻的景象。遊客可以沿著洞內步道欣賞大自然的鬼斧神工，了解洞穴的地質形成過程，並感受下龍灣獨特的自然魅力。天宮洞是探索越南北部自然景觀時值得參觀的重要景點之一。",

            ja: `
            ティエンクン洞窟はハロン湾を代表する観光洞窟の一つです。
            洞窟の内部には長い時間をかけて形成された鍾乳石や石筍が
            数多く見られます。水と鉱物の作用によって生まれたさまざまな
            岩の形が、洞窟の壁や天井を飾っています。

            観光客は階段や遊歩道を通って洞窟の内部へ進みます。奥へ
            進むにつれて空間が広がり、いくつもの部屋のような場所を
            見ることができます。照明によって岩の形が見やすくなって
            おり、自然の造形を観察することができます。

            この洞窟には地元に伝わる伝説もあります。自然景観と文化的
            な物語を一緒に楽しめることが、この場所の魅力の一つです。
            `,

            ko: `
            티엔꿍 동굴은 하롱베이에 위치한 유명한 자연 동굴입니다.
            오랜 시간 동안 물과 광물의 작용으로 만들어진 종유석과
            석순이 동굴 곳곳에 분포하고 있습니다.

            관광객들은 계단과 산책로를 따라 동굴 안으로 들어갑니다.
            안쪽으로 들어갈수록 공간이 넓어지며 다양한 형태의 암석과
            동굴 천장을 볼 수 있습니다. 조명은 주요 암석의 형태를
            쉽게 관찰할 수 있도록 설치되어 있습니다.

            티엔꿍 동굴에는 지역의 전설과 민간 이야기도 전해집니다.
            이러한 이야기들은 자연 경관을 감상하는 것과 함께 베트남의
            문화적 분위기를 경험하는 데 도움을 줍니다.
            `,

            fr: `
            La grotte de Thien Cung est l'une des grottes célèbres de la
            baie d'Ha Long. Elle est connue pour ses stalactites et ses
            stalagmites formées naturellement pendant une très longue
            période. L'eau et les minéraux ont progressivement créé des
            formes rocheuses variées sur les parois et le plafond.

            Les visiteurs accèdent à la grotte par des escaliers et un
            chemin aménagé. À l'intérieur, plusieurs salles présentent
            des formations rocheuses différentes. L'éclairage permet
            d'observer plus facilement certains détails de la structure
            naturelle de la grotte.

            La grotte est également liée à des légendes locales. Ces
            histoires ajoutent une dimension culturelle à la découverte
            de ce paysage naturel.
            `
        }
    },


    {
        id: 3,

        name: {
            vi: "Đảo Ti Tốp",
            en: "Ti Top Island",
            zh: "蒂托夫岛",
             zhTW:"提托夫島",
            ja: "ティートップ島",
            ko: "티톱 섬",
            fr: "Île de Ti Top"
        },

        location: {
            vi: "Vịnh Hạ Long, Quảng Ninh",
            en: "Ha Long Bay, Quang Ninh",
            zh: "下龙湾，广宁省",
             zhTW:"下龍灣,廣寧",
            ja: "ハロン湾、クアンニン省",
            ko: "하롱베이, 꽝닌",
            fr: "Baie d'Ha Long, Quang Ninh"
        },

        image:
            "images/daotitov.jpeg",

        duration: "02:30",

        description: {

            vi: `
            Đảo Ti Tốp là một trong những điểm dừng chân được nhiều du
            khách lựa chọn khi tham quan Vịnh Hạ Long. Hòn đảo có bãi
            biển nhỏ với làn nước trong và khu vực núi đá xanh bao quanh.
            Từ chân đảo, du khách có thể đi theo hệ thống bậc thang để
            lên điểm cao hơn và quan sát cảnh quan của vịnh từ trên cao.

            Một trong những trải nghiệm nổi bật tại đây là ngắm toàn cảnh
            các đảo đá xung quanh. Khi đứng ở vị trí cao, du khách có thể
            nhìn thấy mặt biển rộng, những con tàu du lịch và nhiều đảo
            đá nằm rải rác. Đây là một góc nhìn khác so với việc ngắm vịnh
            từ trên tàu.

            Bãi biển tại đảo phù hợp cho những hoạt động nghỉ ngơi ngắn
            trong hành trình. Du khách có thể thư giãn, chụp ảnh hoặc
            tận hưởng không gian biển trước khi tiếp tục hành trình khám
            phá các điểm khác trong Vịnh Hạ Long.
            `,

            en: `
            Ti Top Island is a popular stop for visitors exploring Ha Long
            Bay. The island has a small sandy beach surrounded by green
            limestone hills. A staircase leads from the beach toward a
            higher viewpoint, where visitors can observe the surrounding
            islands and the wide waters of the bay.

            From the viewpoint, the scenery looks very different from the
            perspective of a cruise boat. Visitors can see numerous rocky
            islands, boats moving across the water and the changing colors
            of the sea. The climb also provides an opportunity to enjoy
            a panoramic view of the surrounding landscape.

            The beach offers a convenient place for a short break during
            a cruise. Visitors can relax, take photographs and enjoy the
            coastal atmosphere before continuing to other destinations
            in Ha Long Bay.
            `,

            zh: `
            蒂托夫岛是下龙湾游览线路中常见的停靠地点之一。岛上有
            一片小型沙滩，周围被绿色的石灰岩山体环绕。游客可以从
            海滩沿着台阶向上攀登，到达较高的位置欣赏周围的海湾景色。

            从高处可以看到许多分布在海面上的岛屿，也可以看到游船
            在海面上缓慢移动。与在船上观看相比，从山顶可以获得更
            开阔的视野，因此这里也是游客拍摄下龙湾景色的常见地点。

            岛上的海滩适合游客在旅途中短暂休息。游客可以在这里
            欣赏海景、拍照或者放松身体，然后继续前往下一个景点。
            `,
            zhTW: "提托夫島是越南下龍灣的一座著名小島，以清澈的海水、潔白的沙灘和優美的自然景色吸引遊客。島上設有通往山頂的階梯，遊客可以沿著步道登高，從觀景點俯瞰下龍灣中星羅棋布的石灰岩島嶼與碧綠海面。島上的沙灘也是休息、游泳和欣賞海景的好地方。提托夫島的名字與蘇聯太空人德米特里・提托夫有關，他曾在二十世紀六十年代到訪下龍灣。來到這裡，遊客可以同時享受海灘休閒與欣賞自然全景的樂趣。",

            ja: `
            ティートップ島は、ハロン湾を訪れる観光客に人気の立ち寄り
            スポットです。島には小さな砂浜があり、周囲を緑豊かな
            石灰岩の山々が囲んでいます。砂浜から階段を上ると高い
            展望場所へ行くことができます。

            展望場所からは、海に浮かぶ多くの島々や観光船を見渡す
            ことができます。船の上から見る景色とは違い、広い範囲
            を一度に眺められることが特徴です。

            島のビーチでは、クルーズの途中に短い休憩を取ることが
            できます。海を眺めたり写真を撮ったりしながら、ゆっくり
            とした時間を過ごすことができます。
            `,

            ko: `
            티톱 섬은 하롱베이를 여행할 때 많은 관광객이 방문하는
            대표적인 장소입니다. 섬에는 작은 해변이 있으며 주변은
            푸른 석회암 산으로 둘러싸여 있습니다. 해변에서 계단을
            따라 올라가면 높은 전망대에서 주변 풍경을 볼 수 있습니다.

            전망대에서는 바다 위에 흩어져 있는 여러 섬과 관광선을
            한눈에 볼 수 있습니다. 배에서 바라보는 것과 다른 넓은
            시야를 제공하기 때문에 사진을 촬영하기에도 좋은 장소입니다.

            해변은 여행 중 잠시 쉬어 가기에 적합합니다. 관광객들은
            바다를 바라보고 사진을 찍으며 휴식을 취한 후 다음 관광지로
            이동할 수 있습니다.
            `,

            fr: `
            L'île de Ti Top est une étape populaire des circuits dans la
            baie d'Ha Long. Elle possède une petite plage entourée de
            collines calcaires verdoyantes. Depuis la plage, un escalier
            permet d'accéder à un point de vue situé plus haut.

            Depuis ce point, les visiteurs peuvent observer les nombreuses
            îles rocheuses et les bateaux qui traversent la baie. La vue
            panoramique offre une perspective différente de celle que l'on
            découvre depuis un bateau de croisière.

            La plage constitue également un endroit agréable pour faire une
            courte pause. Les visiteurs peuvent se détendre, prendre des
            photos et profiter de l'atmosphère maritime avant de poursuivre
            leur découverte de la baie.
            `
        }
    },


    {
        id: 4,

        name: {
            vi: "Làng chài Cửa Vạn",
            en: "Cua Van Fishing Village",
            zh: "浮村渔村",
            zhTW:"舊萬漁村",
            ja: "クアヴァン漁村",
            ko: "꾸어반 어촌 마을",
            fr: "Village de pêcheurs de Cua Van"
        },

        location: {
            vi: "Vịnh Hạ Long, Quảng Ninh",
            en: "Ha Long Bay, Quang Ninh",
            zh: "下龙湾，广宁省",
             zhTW:"下龍灣,廣寧",
            ja: "ハロン湾、クアンニン省",
            ko: "하롱베이, 꽝닌",
            fr: "Baie d'Ha Long, Quang Ninh"
        },

        image:
            "images/langchaicuavan.jpg",

        duration: "03:10",

        description: {

            vi: `
            Làng chài Cửa Vạn là một điểm đến gắn liền với đời sống của
            cộng đồng cư dân trên Vịnh Hạ Long. Trong nhiều năm, người dân
            nơi đây đã sinh sống và làm việc trên mặt nước, chủ yếu dựa
            vào nghề đánh bắt và nuôi trồng thủy sản. Những ngôi nhà,
            phương tiện đánh bắt và sinh hoạt hàng ngày tạo nên một nét
            văn hóa đặc biệt của vùng biển.

            Khi đến khu vực làng chài, du khách có thể quan sát cách người
            dân di chuyển bằng thuyền và tìm hiểu những hoạt động gắn với
            biển. Khung cảnh những chiếc thuyền nhỏ giữa các đảo đá tạo
            nên một hình ảnh rất đặc trưng của Hạ Long.

            Bên cạnh giá trị cảnh quan, làng chài còn giúp du khách hiểu
            hơn về sự thích nghi của con người với môi trường tự nhiên.
            Cuộc sống trên mặt nước đòi hỏi người dân phải có những kỹ năng
            đặc biệt trong việc di chuyển, đánh bắt và bảo vệ nguồn lợi
            thủy sản.
            `,

            en: `
            Cua Van Fishing Village is closely connected with the traditional
            life of communities living on Ha Long Bay. For many years,
            local families depended on fishing and aquaculture as important
            sources of livelihood. Boats and floating homes became an
            essential part of everyday life.

            Visitors can learn about traditional fishing activities and
            observe how local residents travel by boat between the islands.
            The small boats surrounded by limestone formations create a
            distinctive image of life on the bay.

            The village also demonstrates how people have adapted to their
            natural environment. Living on the water requires specialized
            knowledge and skills related to navigation, fishing and the
            sustainable use of marine resources.
            `,

            zh: `
            浮村渔村与下龙湾沿岸居民的传统生活有着密切关系。过去，
            许多家庭主要依靠捕鱼和水产养殖维持生活。船只和水上
            住所成为当地居民日常生活的重要组成部分。

            游客可以了解传统捕鱼活动，并观察居民如何乘船在不同
            岛屿之间往来。小船、海水和石灰岩岛屿共同构成了具有
            地方特色的海上生活景象。

            这个渔村也展示了人们如何适应海洋环境。在水上生活需要
            掌握航行、捕鱼以及利用和保护海洋资源等方面的知识和技能。
            `,
            zhTW: "舊萬漁村是下龍灣具有代表性的傳統水上漁村之一，展現了當地漁民與海洋緊密相連的生活方式。過去，居民主要依靠捕魚、養殖水產和海上貿易維持生計，生活空間與海灣環境融為一體。遊客可以透過參觀漁村、了解傳統漁業工具與生活習俗，認識下龍灣獨特的海洋文化。村落周圍環繞著石灰岩山峰與平靜的海水，呈現出寧靜而迷人的景色。舊萬漁村不僅具有觀光價值，也讓人們更加了解沿海社區的歷史、文化與傳統生活。",

            ja: `
            クアヴァン漁村は、ハロン湾の水上で暮らしてきた人々の
            伝統的な生活と深く関係しています。昔から多くの家庭が
            漁業や水産養殖を生活の基盤としてきました。船や水上の
            住居は日常生活に欠かせない存在でした。

            観光客は伝統的な漁業について学び、島と島の間を船で移動
            する人々の姿を見ることができます。小さな船と石灰岩の
            島々が作り出す風景は、ハロン湾らしい特徴の一つです。

            また、この地域は人々が自然環境に適応してきたことを
            知ることができる場所でもあります。水上で生活するため
            には、航海や漁業、海洋資源の利用に関する知識が必要です。
            `,

            ko: `
            꾸어반 어촌 마을은 하롱베이에서 살아온 지역 주민들의
            전통적인 생활과 밀접한 관련이 있습니다. 과거에는 많은
            가정이 어업과 양식업을 주요 생계 수단으로 이용했습니다.
            배와 수상 주거 공간은 일상생활에서 중요한 역할을 했습니다.

            관광객들은 전통적인 어업 활동을 알아보고 주민들이 배를
            이용하여 섬과 섬 사이를 이동하는 모습을 볼 수 있습니다.
            작은 배와 석회암 섬이 어우러진 풍경은 하롱베이의 독특한
            모습을 보여 줍니다.

            또한 이 마을은 사람들이 자연환경에 적응하며 살아온 모습을
            보여 줍니다. 물 위에서 생활하기 위해서는 항해와 어업,
            해양 자원의 이용에 관한 특별한 지식과 기술이 필요합니다.
            `,

            fr: `
            Le village de pêcheurs de Cua Van est étroitement lié à la vie
            traditionnelle des communautés de la baie d'Ha Long. Pendant
            de nombreuses années, les familles locales ont dépendu de la
            pêche et de l'aquaculture. Les bateaux et les habitations
            flottantes faisaient partie de la vie quotidienne.

            Les visiteurs peuvent découvrir les techniques traditionnelles
            de pêche et observer les habitants se déplacer en bateau entre
            les îles. Les petites embarcations entourées de formations
            calcaires offrent une image caractéristique de la vie sur la baie.

            Le village montre également comment les populations se sont
            adaptées à leur environnement naturel. La vie sur l'eau demande
            des connaissances particulières concernant la navigation, la
            pêche et la gestion des ressources marines.
            `
        }
    },


    {
        id: 5,

        name: {
            vi: "Hang Sửng Sốt",
            en: "Sung Sot Cave",
            zh: "惊讶洞",
            zhTW:"驚訝洞",
            ja: "スンソット洞窟",
            ko: "승솟 동굴",
            fr: "Grotte de Sung Sot"
        },

        location: {
            vi: "Đảo Bồ Hòn, Vịnh Hạ Long",
            en: "Bo Hon Island, Ha Long Bay",
            zh: "下龙湾博汉岛",
             zhTW:"蒲荷島,下龍灣",
            ja: "ハロン湾ボーホン島",
            ko: "하롱베이 보혼 섬",
            fr: "Île de Bo Hon, baie d'Ha Long"
        },

        image:
            "images/hangsungsot.jpg",

        duration: "03:20",

        description: {

            vi: `
            Hang Sửng Sốt là một trong những hang động nổi tiếng của Vịnh
            Hạ Long và nằm trên đảo Bồ Hòn. Tên gọi của hang gợi lên cảm
            giác bất ngờ khi du khách bước vào bên trong và nhìn thấy
            không gian rộng lớn với nhiều cấu trúc đá tự nhiên.

            Hang gồm nhiều khu vực có kích thước khác nhau. Bên trong,
            các nhũ đá và măng đá được hình thành qua thời gian rất dài
            tạo nên nhiều hình dáng đặc biệt. Khi ánh sáng chiếu vào các
            bề mặt đá, những đường nét và kết cấu của hang trở nên rõ ràng
            hơn.

            Để tham quan, du khách đi theo hệ thống đường và bậc đá trên
            đảo trước khi vào hang. Sau khi vượt qua lối vào tương đối
            hẹp, không gian bên trong mở rộng đáng kể. Sự thay đổi này
            tạo ra cảm giác bất ngờ và cũng là lý do hang được nhiều du
            khách yêu thích.

            Hang Sửng Sốt là điểm tham quan tiêu biểu cho giá trị địa chất
            và cảnh quan của Vịnh Hạ Long.
            `,

            en: `
            Sung Sot Cave is one of the most famous caves in Ha Long Bay.
            It is located on Bo Hon Island and is known for the surprising
            change in space that visitors experience when entering the cave.
            A relatively narrow entrance leads into much larger chambers.

            Inside the cave, visitors can see many stalactites and
            stalagmites created through long-term geological processes.
            Water and minerals gradually shaped the walls and ceilings,
            producing a variety of natural formations.

            Visitors follow pathways and stone steps on the island before
            reaching the cave entrance. Once inside, the larger chambers
            provide a completely different atmosphere from the outside
            landscape.

            Sung Sot Cave is an important destination for understanding
            the geological and natural values of Ha Long Bay.
            `,

            zh: `
            惊讶洞是下龙湾最著名的洞穴之一，位于博汉岛上。游客
            进入洞穴后，会发现内部空间比入口处宽阔许多，这种明显
            的空间变化给人留下深刻印象。

            洞穴内部拥有大量钟乳石和石笋。这些自然结构经过长期的
            地质过程形成，水流和矿物质不断作用于岩壁和洞顶，最终
            产生了丰富的自然形态。

            游客需要沿着岛上的道路和石阶前往洞穴入口。进入洞穴后，
            内部空间逐渐扩大，可以看到不同区域的岩石景观。

            惊讶洞是了解下龙湾地质景观和自然价值的重要旅游地点。
            `,
            zhTW: "驚訝洞是越南下龍灣最著名的天然洞穴之一，因洞內寬廣的空間和壯觀的鐘乳石景觀而受到遊客喜愛。洞穴由多個不同大小的區域組成，入口相對隱蔽，進入後卻能看到開闊的岩洞空間，因此令人感到驚奇。洞內的石筍、鐘乳石和岩石形態經過漫長的地質過程逐漸形成，展現出大自然的奇妙力量。沿著規劃好的步道參觀時，遊客可以欣賞不同形狀的岩石景觀，並了解下龍灣石灰岩地形的形成特色。驚訝洞是探索下龍灣自然奇觀時不可錯過的景點之一。",

            ja: `
            スンソット洞窟はハロン湾を代表する有名な洞窟の一つで、
            ボーホン島に位置しています。入口は比較的狭いですが、
            中に入ると大きな空間が広がるため、訪問者に強い印象を
            与えます。

            洞窟の内部には長い地質学的な時間をかけて形成された
            鍾乳石や石筍があります。水や鉱物の作用によって壁や
            天井にはさまざまな自然の形が作られました。

            観光客は島の遊歩道や階段を進んで洞窟の入口へ向かいます。
            内部に入ると、外の景色とはまったく異なる広い空間を
            見ることができます。

            スンソット洞窟は、ハロン湾の地質と自然景観を理解する
            上で重要な観光スポットです。
            `,

            ko: `
            승솟 동굴은 하롱베이를 대표하는 유명한 동굴 가운데 하나이며
            보혼 섬에 위치하고 있습니다. 입구는 비교적 좁지만 안으로
            들어가면 넓은 공간이 나타나기 때문에 관광객들에게 강한
            인상을 줍니다.

            동굴 내부에는 오랜 지질학적 과정을 통해 만들어진 종유석과
            석순이 많이 있습니다. 물과 광물의 작용으로 벽과 천장에
            다양한 자연의 형태가 형성되었습니다.

            관광객들은 섬의 산책로와 계단을 따라 동굴 입구까지 이동합니다.
            동굴 안으로 들어가면 바깥 풍경과는 완전히 다른 넓은 공간을
            볼 수 있습니다.

            승솟 동굴은 하롱베이의 지질학적 특징과 자연 경관을 이해하는
            데 중요한 관광지입니다.
            `,

            fr: `
            La grotte de Sung Sot est l'une des grottes les plus célèbres
            de la baie d'Ha Long. Elle se trouve sur l'île de Bo Hon.
            L'entrée est relativement étroite, mais l'espace intérieur
            devient rapidement beaucoup plus vaste, ce qui crée une
            impression de surprise chez les visiteurs.

            La grotte contient de nombreuses stalactites et stalagmites
            formées par des processus géologiques très anciens. L'eau et
            les minéraux ont progressivement sculpté les parois et le
            plafond pour créer des formes naturelles variées.

            Les visiteurs suivent des chemins et des escaliers sur l'île
            avant d'atteindre l'entrée. À l'intérieur, les grandes salles
            offrent une atmosphère très différente du paysage extérieur.

            La grotte de Sung Sot constitue ainsi un lieu important pour
            découvrir les caractéristiques géologiques et naturelles de
            la baie d'Ha Long.
            `
        }
    },
    
{
    id: 6,

    name: {
        vi: "Kinh thành Huế",
        en: "Hue Imperial Citadel",
        zh: "顺化皇城",
        zhTW: "順化皇城",
        ja: "フエ王宮",
        ko: "후에 황성",
        fr: "Citadelle impériale de Hué"
    },

    location: {
        vi: "Thành phố Huế, Việt Nam",
        en: "Hue City, Vietnam",
        zh: "越南顺化市",
        zhTW: "越南順化市",
        ja: "ベトナム、フエ市",
        ko: "베트남 후에시",
        fr: "Ville de Hué, Vietnam"
    },

    image: "images/kinhthanhhue.jpg",

    duration: "04:00",

    description: {

        vi: `
        Kinh thành Huế là một công trình kiến trúc lịch sử nổi tiếng của
        Việt Nam, nằm bên bờ sông Hương thơ mộng tại thành phố Huế. Đây là
        trung tâm chính trị, hành chính và văn hóa của triều Nguyễn, triều
        đại phong kiến cuối cùng trong lịch sử Việt Nam, từ đầu thế kỷ XIX
        đến giữa thế kỷ XX.

        Kinh thành được xây dựng dưới thời vua Gia Long và tiếp tục được
        hoàn thiện dưới thời vua Minh Mạng. Công trình có hệ thống tường
        thành kiên cố, hào nước và nhiều cổng ra vào. Bên trong là Hoàng
        thành, Tử Cấm Thành cùng nhiều cung điện, điện thờ và công trình
        phục vụ đời sống hoàng gia.

        Khi tham quan, du khách có thể chiêm ngưỡng Ngọ Môn, điện Thái Hòa
        và những công trình mang đậm dấu ấn kiến trúc cung đình Việt Nam.
        Các chi tiết trang trí trên mái cung điện, hình tượng rồng phượng
        và những hoa văn truyền thống thể hiện sự tinh xảo của nghệ thuật
        kiến trúc thời Nguyễn.

        Không chỉ có giá trị về kiến trúc, Kinh thành Huế còn lưu giữ nhiều
        dấu tích quan trọng về lịch sử, văn hóa và đời sống của hoàng gia
        Việt Nam. Quần thể di tích Cố đô Huế được UNESCO công nhận là Di
        sản Văn hóa Thế giới vào năm 1993.

        Ngày nay, Kinh thành Huế là điểm đến hấp dẫn dành cho những ai
        muốn tìm hiểu lịch sử dân tộc, khám phá kiến trúc cổ và cảm nhận
        vẻ đẹp trầm mặc của cố đô bên dòng sông Hương.
        `,

        en: `
        The Hue Imperial Citadel is one of Vietnam's most remarkable
        historical landmarks, situated along the picturesque Perfume River
        in Hue City. It served as the political, administrative, and
        cultural center of the Nguyen Dynasty, Vietnam's last feudal
        dynasty, from the early nineteenth century to the mid-twentieth
        century.

        Construction began under Emperor Gia Long and continued under
        Emperor Minh Mang. The citadel features strong defensive walls,
        surrounding moats, and several entrance gates. Within its outer
        walls lie the Imperial City, the Forbidden Purple City, royal
        palaces, temples, and other structures associated with the
        imperial court.

        Visitors can explore famous landmarks such as Ngo Mon Gate and
        the Palace of Supreme Harmony. Traditional architectural details,
        including elaborate roof decorations, dragon and phoenix motifs,
        and intricate ornamental patterns, reflect the artistic
        achievements of the Nguyen Dynasty.

        Beyond its architectural beauty, the citadel preserves important
        evidence of Vietnam's royal history, cultural traditions, and
        court life. The Complex of Hue Monuments was inscribed on the
        UNESCO World Heritage List in 1993.

        Today, the Hue Imperial Citadel is a popular destination for
        travelers interested in Vietnamese history, traditional
        architecture, and the peaceful atmosphere of the ancient capital
        beside the Perfume River.
        `,

        zh: `
        顺化皇城是越南著名的历史建筑群之一，位于顺化市风景优美的
        香江之畔。这里曾是越南最后一个封建王朝——阮朝的政治、
        行政和文化中心，见证了十九世纪初至二十世纪中期的重要历史。

        皇城始建于嘉隆皇帝时期，并在明命皇帝时期继续扩建和完善。
        整个建筑群拥有坚固的城墙、护城河和多座城门。城内包括
        皇城、紫禁城、宫殿、寺庙以及许多与皇室生活有关的建筑。

        游客可以参观午门、太和殿等著名景点。宫殿屋顶上的精美装饰、
        龙凤图案和传统纹样展现了阮朝时期越南宫廷建筑艺术的特色。

        顺化皇城不仅具有重要的建筑价值，也保存了越南皇室历史、
        传统文化和宫廷生活的珍贵遗迹。顺化古迹群于1993年被联合国
        教科文组织列入世界文化遗产名录。

        如今，顺化皇城吸引着众多游客前来了解越南历史、欣赏传统
        建筑，并感受香江之畔古都宁静而深厚的文化氛围。
        `,

        zhTW: `
        順化皇城是越南著名的歷史建築群之一，位於順化市風景優美的
        香江之畔。這裡曾是越南最後一個封建王朝——阮朝的政治、
        行政與文化中心，見證了十九世紀初至二十世紀中期的重要歷史。

        皇城始建於嘉隆皇帝時期，並在明命皇帝時期持續擴建與完善。
        整個建築群擁有堅固的城牆、護城河與多座城門。城內包括
        皇城、紫禁城、宮殿、寺廟，以及許多與皇室生活有關的建築。

        遊客可以參觀午門、太和殿等著名景點。宮殿屋頂上的精美裝飾、
        龍鳳圖案與傳統紋樣，展現了阮朝時期越南宮廷建築藝術的特色。

        順化皇城不僅具有重要的建築價值，也保存了越南皇室歷史、
        傳統文化與宮廷生活的珍貴遺跡。順化古蹟群於1993年被聯合國
        教科文組織列入世界文化遺產名錄。

        如今，順化皇城吸引許多遊客前來了解越南歷史、欣賞傳統
        建築，並感受香江之畔古都寧靜而深厚的文化氛圍。
        `,

        ja: `
        フエ王宮は、ベトナム中部のフエ市に位置する有名な歴史的
        建造物群です。美しい香江のほとりにあり、19世紀初頭から
        20世紀中頃まで、ベトナム最後の王朝である阮朝の政治、
        行政、文化の中心地として重要な役割を果たしました。

        王宮の建設はザーロン帝の時代に始まり、ミンマン帝の時代に
        さらに整備されました。城壁や堀、複数の城門を備えた広大な
        建築群で、内部には皇城、紫禁城、宮殿、寺院などがあります。

        観光客は、午門や太和殿などの代表的な建造物を見学できます。
        宮殿の屋根を飾る精巧な装飾や龍と鳳凰の模様、伝統的な文様
        からは、阮朝時代の宮廷建築の美しさを感じることができます。

        フエ王宮は建築物としての価値だけでなく、ベトナムの王室の
        歴史や文化、宮廷生活を伝える貴重な遺産でもあります。
        フエの建造物群は1993年にユネスコ世界文化遺産に登録されました。

        現在、フエ王宮はベトナムの歴史や伝統建築を学び、香江の
        ほとりに広がる古都の静かな雰囲気を楽しめる人気の観光地です。
        `,

        ko: `
        후에 황성은 베트남 중부 후에시에 위치한 대표적인 역사 유적지로,
        아름다운 향강 주변에 자리하고 있습니다. 이곳은 베트남의 마지막
        봉건 왕조인 응우옌 왕조의 정치, 행정, 문화 중심지였으며,
        19세기 초부터 20세기 중반까지 중요한 역할을 했습니다.

        황성의 건설은 자롱 황제 시대에 시작되었으며 민망 황제 시대에
        더욱 확장되고 정비되었습니다. 견고한 성벽과 해자, 여러 성문을
        갖추고 있으며 내부에는 황성, 자금성, 궁전과 사원 등이 있습니다.

        방문객들은 응오몬 문과 타이호아 궁전 등 유명한 건축물을
        둘러볼 수 있습니다. 궁전 지붕의 정교한 장식과 용과 봉황 문양,
        전통적인 무늬는 응우옌 왕조 시대 궁중 건축의 아름다움을 보여 줍니다.

        후에 황성은 건축적 가치뿐만 아니라 베트남 왕실의 역사와 문화,
        궁중 생활을 이해할 수 있는 중요한 유산입니다. 후에 유적지는
        1993년 유네스코 세계문화유산으로 등재되었습니다.

        오늘날 후에 황성은 베트남의 역사와 전통 건축을 배우고 향강
        주변에 자리한 옛 수도의 고요한 분위기를 느낄 수 있는 인기
        관광 명소입니다.
        `,

        fr: `
        La citadelle impériale de Hué est l'un des sites historiques les
        plus remarquables du Vietnam. Située au bord de la pittoresque
        rivière des Parfums, elle fut le centre politique, administratif
        et culturel de la dynastie des Nguyen, la dernière dynastie
        impériale vietnamienne, du début du XIXe siècle au milieu du XXe siècle.

        Sa construction commença sous l'empereur Gia Long et se poursuivit
        sous le règne de l'empereur Minh Mang. Le complexe comprend des
        remparts imposants, des douves et plusieurs portes. À l'intérieur
        se trouvent la Cité impériale, la Cité pourpre interdite, des
        palais, des temples et d'autres bâtiments royaux.

        Les visiteurs peuvent découvrir des monuments célèbres tels que
        la porte Ngo Mon et le palais de l'Harmonie suprême. Les toitures
        richement décorées, les motifs de dragons et de phénix ainsi que
        les ornements traditionnels témoignent du raffinement de
        l'architecture de la dynastie des Nguyen.

        Au-delà de sa beauté architecturale, la citadelle conserve des
        témoignages précieux de l'histoire royale, des traditions
        culturelles et de la vie de cour au Vietnam. L'ensemble des
        monuments de Hué a été inscrit au patrimoine mondial de l'UNESCO
        en 1993.

        Aujourd'hui, la citadelle impériale de Hué attire les voyageurs
        qui souhaitent découvrir l'histoire vietnamienne, admirer
        l'architecture traditionnelle et apprécier l'atmosphère paisible
        de l'ancienne capitale au bord de la rivière des Parfums.
        `
    }
},


{
    id: 7,

    name: {
        vi: "Hoàng thành Thăng Long",
        en: "Thang Long Imperial Citadel",
        zh: "升龙皇城",
        zhTW: "昇龍皇城",
        ja: "タンロン皇城",
        ko: "탕롱 황성",
        fr: "Citadelle impériale de Thang Long"
    },

    location: {
        vi: "19C Hoàng Diệu, Ba Đình, Hà Nội, Việt Nam",
        en: "19C Hoang Dieu Street, Ba Dinh, Hanoi, Vietnam",
        zh: "越南河内市巴亭郡黄耀街19C号",
        zhTW: "越南河內市巴亭郡黃耀街19C號",
        ja: "ベトナム、ハノイ市バーディン区ホアンジエウ通り19C",
        ko: "베트남 하노이시 바딘군 호앙지에우 거리 19C",
        fr: "19C rue Hoang Dieu, district de Ba Dinh, Hanoï, Vietnam"
    },

    image: "images/hoangthanhthanglong.jpg",

    duration: "04:00",

    description: {

        vi: `
        Hoàng thành Thăng Long là một quần thể di tích lịch sử và văn hóa
        đặc biệt quan trọng của Việt Nam, nằm tại trung tâm thủ đô Hà Nội.
        Nơi đây gắn liền với lịch sử hình thành và phát triển của kinh đô
        Thăng Long, được vua Lý Thái Tổ lựa chọn làm kinh đô vào năm 1010
        khi dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long.

        Trong suốt nhiều thế kỷ, Hoàng thành Thăng Long là trung tâm quyền
        lực chính trị của nhiều triều đại phong kiến Việt Nam, bao gồm
        các triều Lý, Trần, Lê và những giai đoạn lịch sử tiếp theo.
        Qua thời gian, nơi đây đã trải qua nhiều lần xây dựng, mở rộng
        và thay đổi, để lại những dấu tích kiến trúc và khảo cổ có giá trị.

        Khi tham quan, du khách có thể khám phá Đoan Môn, cửa chính dẫn
        vào khu vực Hoàng thành xưa, nền điện Kính Thiên, nơi từng diễn
        ra nhiều nghi lễ quan trọng của triều đình, cùng khu khảo cổ
        tại số 18 Hoàng Diệu. Những dấu tích nền móng, giếng cổ, vật liệu
        kiến trúc và hiện vật khảo cổ giúp tái hiện phần nào đời sống
        cung đình trong quá khứ.

        Một trong những công trình nổi bật tại đây là Cột cờ Hà Nội,
        biểu tượng lịch sử của thủ đô, nằm trong khu vực di tích.
        Ngoài ra, khu di tích còn có Nhà và Hầm D67, gắn với hoạt động
        chỉ huy quân sự của Việt Nam trong thời kỳ kháng chiến.

        Năm 2010, Hoàng thành Thăng Long được UNESCO công nhận là Di sản
        Văn hóa Thế giới. Giá trị nổi bật của di tích nằm ở chiều sâu
        lịch sử lâu dài, sự giao thoa văn hóa và những bằng chứng khảo
        cổ phản ánh sự phát triển liên tục của trung tâm quyền lực
        Việt Nam qua nhiều thế kỷ.

        Ngày nay, Hoàng thành Thăng Long là điểm tham quan hấp dẫn dành
        cho những ai muốn tìm hiểu lịch sử dân tộc, khám phá kiến trúc
        cổ và cảm nhận những dấu ấn của các triều đại từng định hình
        nên diện mạo văn hóa của thủ đô Hà Nội.
        `,

        en: `
        The Thang Long Imperial Citadel is an important historical and
        cultural complex located in the heart of Hanoi, the capital of
        Vietnam. Its history is closely connected with the development
        of Thang Long, which became the capital in 1010 when Emperor
        Ly Thai To moved the royal seat from Hoa Lu to Dai La and
        renamed the city Thang Long.

        For many centuries, the citadel served as a political center
        for several Vietnamese dynasties, including the Ly, Tran, and
        Le dynasties. Over time, the complex underwent numerous
        construction projects and transformations, leaving behind
        valuable architectural remains and archaeological evidence.

        Visitors can explore Doan Mon, the historic main gate to the
        former imperial complex, and the foundations of Kinh Thien
        Palace, where important royal ceremonies once took place.
        The archaeological site at 18 Hoang Dieu Street reveals
        ancient foundations, wells, building materials, and artifacts
        that provide insights into life at the royal court.

        Another prominent landmark is the Hanoi Flag Tower, a historic
        symbol of the capital located within the wider monument area.
        The site also includes House and Bunker D67, which are
        associated with Vietnam's military command activities during
        the resistance wars.

        In 2010, the Central Sector of the Imperial Citadel of Thang
        Long was inscribed on the UNESCO World Heritage List. Its
        outstanding value lies in its long history, cultural
        interactions, and archaeological evidence documenting the
        development of Vietnam's centers of power over many centuries.

        Today, the Thang Long Imperial Citadel is a fascinating
        destination for visitors who want to discover Vietnamese
        history, explore ancient architecture, and learn how successive
        dynasties shaped the cultural identity of Hanoi.
        `,

        zh: `
        升龙皇城是越南重要的历史文化遗址群，位于首都河内市中心。
        这里与升龙古都的形成和发展密切相关。1010年，李太祖皇帝
        将都城从华闾迁至大罗，并将其改名为升龙，开启了这里悠久
        的都城历史。

        数百年来，升龙皇城一直是越南多个封建王朝的政治中心，
        包括李朝、陈朝和黎朝等。随着历史的发展，皇城经历了多次
        建造、扩建和改造，留下了珍贵的建筑遗迹和考古资料。

        游客可以参观端门，了解昔日皇城的主要入口；也可以欣赏
        敬天殿遗址，感受过去宫廷举行重要仪式的历史氛围。此外，
        黄耀街18号考古遗址出土了古代建筑基础、水井、建筑材料
        和各种文物，为研究古代宫廷生活提供了重要线索。

        河内旗台是该历史区域内著名的地标之一，也是河内的重要
        历史象征。遗址内还有D67指挥部及地下掩体，与越南抗战
        时期的军事指挥活动密切相关。

        2010年，升龙皇城中心区域被联合国教科文组织列入世界
        文化遗产名录。这里的突出价值体现在悠久的历史、不同
        文化之间的交流，以及反映越南数百年来政治中心持续发展
        的考古证据。

        如今，升龙皇城是了解越南历史、欣赏古代建筑以及探索
        河内文化传统的重要旅游景点。
        `,

        zhTW: `
        昇龍皇城是越南重要的歷史文化遺址群，位於首都河內市中心。
        這裡與昇龍古都的形成和發展密切相關。1010年，李太祖皇帝
        將都城從華閭遷至大羅，並將其改名為昇龍，開啟了這裡悠久
        的都城歷史。

        數百年來，昇龍皇城一直是越南多個封建王朝的政治中心，
        包括李朝、陳朝和黎朝等。隨著歷史的發展，皇城經歷多次
        建造、擴建與改造，留下珍貴的建築遺跡和考古資料。

        遊客可以參觀端門，了解昔日皇城的主要入口；也可以欣賞
        敬天殿遺址，感受過去宮廷舉行重要儀式的歷史氛圍。此外，
        黃耀街18號考古遺址出土了古代建築基礎、水井、建築材料
        和各種文物，為研究古代宮廷生活提供了重要線索。

        河內旗台是這個歷史區域內著名的地標之一，也是河內的重要
        歷史象徵。遺址內還有D67指揮部及地下掩體，與越南抗戰
        時期的軍事指揮活動密切相關。

        2010年，昇龍皇城中心區域被聯合國教科文組織列入世界
        文化遺產名錄。這裡的突出價值體現在悠久的歷史、不同
        文化之間的交流，以及反映越南數百年來政治中心持續發展
        的考古證據。

        如今，昇龍皇城是了解越南歷史、欣賞古代建築以及探索
        河內文化傳統的重要旅遊景點。
        `,

        ja: `
        タンロン皇城は、ベトナムの首都ハノイの中心部に位置する
        重要な歴史文化遺跡です。1010年、リー・タイ・トー皇帝が
        都をホアルーからダイラへ移し、タンロンと名付けたこと
        から、この地は長い都城の歴史を歩み始めました。

        その後、リー朝、チャン朝、レー朝など、さまざまな王朝の
        政治の中心地として数百年にわたり重要な役割を果たしました。
        時代ごとに建設や改修が繰り返され、現在も貴重な建築遺構や
        考古学的な資料が残されています。

        観光客は、かつて皇城の主要な入口だったドアンモンや、
        王朝の重要な儀式が行われたキンティエン殿の遺構を
        見学できます。また、ホアンジエウ通り18番地の考古学
        遺跡では、建物の基礎、古井戸、建築材料、さまざまな
        出土品を通じて、当時の宮廷生活を知ることができます。

        敷地周辺には、首都ハノイの歴史的な象徴であるハノイ旗台
        もあります。さらに、D67司令部と地下壕は、ベトナムの
        抵抗戦争期における軍事指揮活動を伝える重要な場所です。

        2010年、タンロン皇城の中心区域はユネスコ世界遺産に
        登録されました。長い歴史、多様な文化の交流、そして
        数世紀にわたる政治の中心地の発展を示す考古学的証拠が、
        この遺跡の大きな価値となっています。

        現在、タンロン皇城はベトナムの歴史や古代建築を学び、
        ハノイの文化的な伝統を深く知ることができる人気の観光地です。
        `,

        ko: `
        탕롱 황성은 베트남의 수도 하노이 중심부에 위치한 중요한
        역사 문화 유적지입니다. 1010년 리타이또 황제가 수도를
        호아르에서 다이라로 옮기고 탕롱이라는 이름을 붙이면서
        이곳은 오랜 수도의 역사를 시작했습니다.

        이후 리 왕조, 쩐 왕조, 레 왕조 등 여러 왕조의 정치 중심지로
        수백 년 동안 중요한 역할을 했습니다. 시대에 따라 여러 차례
        건설과 개조가 이루어졌으며, 오늘날에도 귀중한 건축 유적과
        고고학 자료가 남아 있습니다.

        방문객들은 옛 황성의 주요 출입문이었던 도안몬과 왕실의
        중요한 의식이 열렸던 킨티엔 궁전 터를 둘러볼 수 있습니다.
        또한 호앙지에우 거리 18번지의 고고학 유적에서는 옛 건물의
        기초, 우물, 건축 자재와 다양한 유물이 발견되어 당시 궁중
        생활을 이해하는 데 도움을 줍니다.

        유적지 주변에는 하노이의 역사적 상징인 하노이 깃대가
        있습니다. 또한 D67 지휘부와 지하 벙커는 베트남 항전 시기의
        군사 지휘 활동을 보여 주는 중요한 장소입니다.

        2010년 탕롱 황성 중심 구역은 유네스코 세계문화유산으로
        등재되었습니다. 오랜 역사와 문화 간 교류, 그리고 수세기
        동안 베트남의 정치 중심지가 발전해 온 모습을 보여 주는
        고고학적 증거가 이 유적지의 중요한 가치를 이룹니다.

        오늘날 탕롱 황성은 베트남의 역사와 전통 건축을 배우고
        하노이의 문화적 유산을 깊이 이해할 수 있는 인기 관광지입니다.
        `,

        fr: `
        La citadelle impériale de Thang Long est un ensemble historique
        et culturel majeur situé au cœur de Hanoï, la capitale du Vietnam.
        Son histoire est étroitement liée à la naissance de l'ancienne
        capitale de Thang Long. En 1010, l'empereur Ly Thai To transféra
        la capitale de Hoa Lu à Dai La et donna à la ville le nom de Thang Long.

        Pendant plusieurs siècles, la citadelle fut un centre politique
        essentiel pour différentes dynasties vietnamiennes, notamment
        les dynasties Ly, Tran et Le. Au fil du temps, le site fut
        agrandi et transformé à plusieurs reprises, laissant des vestiges
        architecturaux et archéologiques de grande valeur.

        Les visiteurs peuvent découvrir Doan Mon, l'ancienne porte
        principale de la citadelle, ainsi que les vestiges du palais
        Kinh Thien, où se déroulaient autrefois d'importantes cérémonies
        royales. Le site archéologique du 18 rue Hoang Dieu présente
        des fondations anciennes, des puits, des matériaux de construction
        et des objets qui éclairent la vie de la cour impériale.

        La tour du drapeau de Hanoï constitue un autre monument
        historique emblématique de la capitale, situé dans le secteur
        élargi du site. On y trouve également la maison et le bunker
        D67, liés aux activités de commandement militaire pendant les
        guerres de résistance du Vietnam.

        En 2010, le secteur central de la citadelle impériale de Thang
        Long a été inscrit sur la Liste du patrimoine mondial de l'UNESCO.
        Sa valeur exceptionnelle repose sur sa longue histoire, les
        échanges culturels et les preuves archéologiques qui témoignent
        de l'évolution des centres de pouvoir vietnamiens au fil des siècles.

        Aujourd'hui, la citadelle impériale de Thang Long est une
        destination incontournable pour découvrir l'histoire du Vietnam,
        admirer l'architecture ancienne et mieux comprendre le patrimoine
        culturel de Hanoï.
        `
    }
},

{
    id: 8,

    name: {
        vi: "Bảo tàng Lịch sử Việt Nam - Thành phố Hồ Chí Minh",
        en: "Vietnam History Museum",
        zh: "越南历史博物馆",
        zhTW: "越南歷史博物館",
        ja: "ベトナム歴史博物館",
        ko: "베트남 역사박물관",
        fr: "Musée d'histoire du Vietnam"
    },

    location: {
        vi: "Số 2 Nguyễn Bỉnh Khiêm, Quận 1, TP. Hồ Chí Minh",
        en: "2 Nguyen Binh Khiem Street, Ho Chi Minh City, Vietnam",
        zh: "越南胡志明市第一郡阮秉谦街2号",
        zhTW: "越南胡志明市第一郡阮秉謙街2號",
        ja: "ベトナム、ホーチミン市1区、グエン・ビン・キエム通り2番地",
        ko: "베트남 호찌민시 1군 응우옌빈키엠 거리 2번지",
        fr: "2 rue Nguyen Binh Khiem, Hô Chi Minh-Ville, Vietnam"
    },

    image: "images/baotanglichsutphcm.jpg",

    duration: "04:00",

    description: {

        vi: `
        Bảo tàng Lịch sử Thành phố Hồ Chí Minh là một trong những địa
        điểm văn hóa nổi bật của thành phố, tọa lạc tại số 2 Nguyễn
        Bỉnh Khiêm, Quận 1, gần khu vực Thảo Cầm Viên Sài Gòn. Đây là
        nơi lưu giữ và giới thiệu nhiều hiện vật quý giá phản ánh quá
        trình hình thành, phát triển của lịch sử và văn hóa Việt Nam
        qua nhiều thời kỳ.

        Bảo tàng được thành lập vào năm 1929 với tên gọi ban đầu là
        Bảo tàng Blanchard de la Brosse. Đến năm 1956, nơi đây mang
        tên Viện Bảo tàng Quốc gia Việt Nam tại Sài Gòn. Năm 1979,
        bảo tàng chính thức mang tên Bảo tàng Lịch sử Thành phố
        Hồ Chí Minh.

        Một trong những điểm đặc biệt của bảo tàng là công trình
        kiến trúc mang phong cách Đông Dương, kết hợp hài hòa giữa
        những nét kiến trúc phương Đông và phương Tây. Tòa nhà cổ
        với mái ngói, các họa tiết trang trí và khu vực tháp bát giác
        tạo nên vẻ đẹp trang nghiêm, cổ kính giữa lòng thành phố.

        Bước vào bên trong, du khách có thể khám phá các phòng trưng
        bày giới thiệu lịch sử Việt Nam từ thời tiền sử, thời dựng
        nước, các triều đại phong kiến cho đến những giai đoạn lịch
        sử tiếp theo. Các bộ sưu tập bao gồm tượng đá, tượng đồng,
        đồ gốm, đồ trang sức, tiền cổ và nhiều hiện vật khảo cổ có
        giá trị nghiên cứu.

        Bên cạnh lịch sử Việt Nam, bảo tàng còn giới thiệu những
        nét văn hóa đặc sắc của khu vực Đông Nam Á và một số quốc
        gia châu Á. Những hiện vật thuộc văn hóa Champa, Óc Eo và
        các nền văn hóa cổ khác giúp du khách hiểu rõ hơn về sự
        giao lưu văn hóa, tín ngưỡng và nghệ thuật trong khu vực.

        Mỗi hiện vật tại đây không chỉ mang giá trị lịch sử mà còn
        kể lại những câu chuyện về đời sống, phong tục, kỹ thuật
        chế tác và tư duy nghệ thuật của con người trong quá khứ.

        Ngày nay, Bảo tàng Lịch sử Thành phố Hồ Chí Minh là điểm
        đến phù hợp cho những ai yêu thích lịch sử, khảo cổ học
        và văn hóa. Chuyến tham quan giúp du khách có cái nhìn
        tổng quan về quá trình phát triển của dân tộc Việt Nam
        và thêm trân trọng những di sản được gìn giữ qua nhiều
        thế hệ.
        `,

        en: `
        The Ho Chi Minh City Museum of History is an important
        cultural destination located at 2 Nguyen Binh Khiem Street,
        in District 1, near the Saigon Zoo and Botanical Gardens.
        It preserves and displays valuable artifacts that tell the
        story of Vietnam's historical and cultural development
        across different periods.

        The museum was established in 1929 under the name Blanchard
        de la Brosse Museum. In 1956, it became the National Museum
        of Vietnam in Saigon. In 1979, it officially received its
        current name, the Ho Chi Minh City Museum of History.

        One of the museum's most distinctive features is its
        Indochinese architectural style, which combines Eastern
        and Western influences. The historic building, decorative
        details, tiled roofs, and central octagonal tower create
        an elegant and timeless atmosphere in the heart of the city.

        Inside, visitors can explore galleries presenting Vietnamese
        history from prehistoric times and early civilizations
        through the feudal dynasties and later historical periods.
        The collections include stone and bronze sculptures,
        ceramics, jewelry, ancient coins, and significant
        archaeological discoveries.

        In addition to Vietnamese history, the museum introduces
        the cultural heritage of Southeast Asia and other Asian
        countries. Artifacts associated with the Champa and Oc Eo
        cultures help visitors understand the development of
        ancient societies, religious traditions, and artistic
        exchanges throughout the region.

        Each artifact offers a glimpse into the lives, customs,
        craftsmanship, and artistic achievements of people who
        lived in earlier centuries.

        Today, the Ho Chi Minh City Museum of History is an
        excellent destination for anyone interested in history,
        archaeology, and cultural heritage. A visit provides a
        broader understanding of Vietnam's development and the
        importance of preserving its historical treasures for
        future generations.
        `,

        zh: `
        胡志明市历史博物馆位于越南胡志明市第一郡阮秉谦街2号，
        靠近西贡动物园和植物园，是当地重要的文化景点之一。
        博物馆收藏并展示了大量珍贵文物，介绍越南不同历史时期
        的发展过程与文化特色。

        博物馆于1929年建立，最初名为布兰沙尔·德·拉布罗斯
        博物馆。1956年，这里改称西贡越南国家博物馆。1979年，
        博物馆正式更名为胡志明市历史博物馆。

        博物馆的一大特色是具有印度支那风格的建筑，融合了
        东方与西方的建筑元素。古老的建筑、装饰图案、瓦顶
        以及中央的八角形塔楼，共同营造出庄重而典雅的氛围。

        进入馆内，游客可以按照不同历史时期参观展厅，了解
        越南从史前时代、早期文明到封建王朝及后续历史阶段
        的发展。展品包括石雕、铜像、陶瓷、珠宝、古钱币以及
        具有重要研究价值的考古文物。

        除了越南历史，博物馆还介绍东南亚及其他亚洲国家的
        文化遗产。与占婆文化、扶南时期及其他古代文化有关的
        文物，展现了古代社会的发展、宗教信仰和区域艺术交流。

        每一件文物都承载着历史记忆，让游客得以了解古人的
        生活方式、传统习俗、制作技艺和艺术成就。

        如今，胡志明市历史博物馆是历史、考古学和文化爱好者
        值得参观的地方。通过这次参观，游客能够更加全面地
        了解越南的发展历程，并认识到保护历史文化遗产的重要性。
        `,

        zhTW: `
        胡志明市歷史博物館位於越南胡志明市第一郡阮秉謙街2號，
        鄰近西貢動物園與植物園，是當地重要的文化景點之一。
        博物館收藏並展示大量珍貴文物，介紹越南不同歷史時期
        的發展過程與文化特色。

        博物館於1929年成立，最初名為布蘭沙爾·德·拉布羅斯
        博物館。1956年，這裡改稱西貢越南國家博物館。1979年，
        博物館正式更名為胡志明市歷史博物館。

        博物館的一大特色是具有印度支那風格的建築，融合東方
        與西方的建築元素。古老的建築、裝飾圖案、瓦頂以及
        中央的八角形塔樓，共同營造出莊重而典雅的氛圍。

        進入館內，遊客可以按照不同歷史時期參觀展廳，了解
        越南從史前時代、早期文明到封建王朝及後續歷史階段
        的發展。展品包括石雕、銅像、陶瓷、珠寶、古錢幣，
        以及具有重要研究價值的考古文物。

        除了越南歷史，博物館也介紹東南亞及其他亞洲國家的
        文化遺產。與占婆文化、扶南時期及其他古代文化有關的
        文物，展現古代社會的發展、宗教信仰與區域藝術交流。

        每一件文物都承載著歷史記憶，讓遊客得以了解古人的
        生活方式、傳統習俗、製作技藝與藝術成就。

        如今，胡志明市歷史博物館是歷史、考古學與文化愛好者
        值得參觀的地方。透過這次參觀，遊客能更全面地了解
        越南的發展歷程，並認識保存歷史文化遺產的重要性。
        `,

        ja: `
        ホーチミン市歴史博物館は、ホーチミン市1区の
        グエン・ビン・キエム通り2番地に位置する重要な文化施設
        です。サイゴン動植物園の近くにあり、ベトナムの歴史と
        文化の発展を伝える貴重な資料や遺物を保存・展示しています。

        博物館は1929年にブランシャール・ド・ラ・ブロス博物館
        として設立されました。1956年にはサイゴン国立ベトナム
        博物館となり、1979年に現在のホーチミン市歴史博物館
        という名称になりました。

        建物の大きな特徴は、東洋と西洋の建築様式を融合させた
        インドシナ様式です。歴史を感じさせる外観や装飾、瓦屋根、
        中央の八角形の塔が、落ち着いた雰囲気を生み出しています。

        館内では、先史時代や初期文明から封建王朝、さらに後の
        歴史時代まで、ベトナムの歩みを紹介する展示を見学できます。
        石像、青銅像、陶磁器、装身具、古銭、考古学的な出土品など、
        多彩なコレクションが収蔵されています。

        また、ベトナムの歴史だけでなく、東南アジアやほかの
        アジア諸国の文化も紹介しています。チャンパー文化や
        オケオ文化などに関する遺物から、古代社会の発展、
        宗教、芸術、地域間の文化交流について学ぶことができます。

        一つひとつの展示品は、昔の人々の暮らしや習慣、技術、
        芸術的な創造性を伝える歴史の証人です。

        現在、この博物館は歴史、考古学、文化に関心のある人々に
        おすすめの観光スポットです。館内を巡ることで、ベトナム
        の歴史をより深く理解し、文化遺産を守ることの大切さを
        感じることができます。
        `,

        ko: `
        호찌민시 역사박물관은 베트남 호찌민시 1군 응우옌빈키엠
        거리 2번지에 위치한 중요한 문화 시설입니다. 사이공 동식물원
        인근에 있으며, 베트남의 역사와 문화 발전을 보여 주는 귀중한
        유물과 자료를 보존하고 전시하고 있습니다.

        박물관은 1929년 블랑샤르 드 라 브로스 박물관이라는 이름으로
        설립되었습니다. 1956년에는 사이공 베트남 국립박물관으로
        불렸으며, 1979년에 현재의 호찌민시 역사박물관이라는 이름을
        갖게 되었습니다.

        건물의 대표적인 특징은 동양과 서양의 건축 양식이 결합된
        인도차이나 양식입니다. 오래된 건물과 장식 무늬, 기와지붕,
        중앙의 팔각형 탑이 고풍스럽고 우아한 분위기를 만들어 냅니다.

        내부 전시실에서는 선사 시대와 초기 문명부터 봉건 왕조와
        이후의 역사 시대까지 베트남의 발전 과정을 살펴볼 수 있습니다.
        석상, 청동상, 도자기, 장신구, 고대 동전과 다양한 고고학
        유물이 전시되어 있습니다.

        베트남 역사뿐만 아니라 동남아시아와 다른 아시아 지역의
        문화도 소개합니다. 참파 문화와 옥에오 문화 등과 관련된
        유물을 통해 고대 사회의 발전, 종교, 예술, 지역 간 문화
        교류를 이해할 수 있습니다.

        각각의 유물은 과거 사람들의 생활 방식과 풍습, 제작 기술,
        예술적 성취를 보여 주는 소중한 역사 자료입니다.

        오늘날 이 박물관은 역사와 고고학, 문화에 관심이 있는
        방문객에게 추천할 만한 관광 명소입니다. 전시를 관람하면
        베트남의 역사적 발전을 더 깊이 이해하고 문화유산 보존의
        중요성도 느낄 수 있습니다.
        `,

        fr: `
        Le Musée d'histoire de Hô Chi Minh-Ville est un important
        établissement culturel situé au 2, rue Nguyen Binh Khiem,
        dans le premier arrondissement, près du jardin zoologique
        et botanique de Saïgon. Il conserve et présente de nombreux
        objets précieux qui témoignent de l'évolution historique
        et culturelle du Vietnam à travers les siècles.

        Le musée a été fondé en 1929 sous le nom de musée Blanchard
        de la Brosse. En 1956, il est devenu le Musée national du
        Vietnam à Saïgon. En 1979, il a officiellement adopté son
        nom actuel : Musée d'histoire de Hô Chi Minh-Ville.

        L'un de ses principaux attraits est son architecture de
        style indochinois, qui associe harmonieusement des influences
        orientales et occidentales. Le bâtiment ancien, ses ornements,
        ses toitures et sa tour octogonale centrale lui confèrent
        une atmosphère élégante et historique.

        À l'intérieur, les visiteurs peuvent découvrir des salles
        consacrées à l'histoire du Vietnam, depuis la préhistoire
        et les premières civilisations jusqu'aux dynasties féodales
        et aux périodes historiques suivantes. Les collections
        comprennent des sculptures en pierre et en bronze, des
        céramiques, des bijoux, des monnaies anciennes et des
        objets archéologiques remarquables.

        Le musée présente également les cultures de l'Asie du
        Sud-Est et d'autres régions d'Asie. Les objets liés aux
        cultures du Champa et d'Oc Eo permettent de mieux comprendre
        les sociétés anciennes, les traditions religieuses, les
        arts et les échanges culturels régionaux.

        Chaque pièce raconte une partie de l'histoire et témoigne
        du mode de vie, des coutumes, du savoir-faire et de la
        créativité artistique des générations passées.

        Aujourd'hui, le musée constitue une destination intéressante
        pour les passionnés d'histoire, d'archéologie et de culture.
        La visite permet de mieux comprendre le développement du
        Vietnam et l'importance de préserver son patrimoine
        historique pour les générations futures.
        `
    }
},

{
    id: 9,

    name: {
        vi: "Chùa Dâu",
        en: "Dau Pagoda",
        zh: "沤寺",
        zhTW: "沤寺",
        ja: "ザウ寺",
        ko: "저우 사원",
        fr: "Pagode Dau"
    },

    location: {
        vi: "Thôn Khương Tự, phường Trí Quả, tỉnh Bắc Ninh, Việt Nam",
        en: "Khuong Tu, Tri Qua Ward, Bac Ninh Province, Vietnam",
        zh: "越南北宁省智果坊姜自村",
        zhTW: "越南北寧省智果坊姜自村",
        ja: "ベトナム、バクニン省、チークア地区、クオン トゥ村",
        ko: "베트남 박닌성 찌꽈 지역 크엉뜨 마을",
        fr: "Village de Khuong Tu, province de Bac Ninh, Vietnam"
    },

    image: "images/chuadau.jpg",

    duration: "04:00",

    description: {

        vi: `
        Chùa Dâu là một trong những ngôi chùa Phật giáo cổ nhất Việt Nam,
        tọa lạc tại vùng đất Luy Lâu xưa, thuộc tỉnh Bắc Ninh ngày nay.
        Ngôi chùa còn có nhiều tên gọi khác như Diên Ứng tự, Cổ Châu tự,
        Pháp Vân tự và chùa Bà Dâu. Với lịch sử gần hai nghìn năm,
        nơi đây giữ vị trí đặc biệt trong quá trình hình thành và phát
        triển của Phật giáo Việt Nam.

        Theo các tư liệu lịch sử, chùa được khởi dựng vào khoảng thế kỷ II
        sau Công nguyên. Vùng Luy Lâu từng là một trung tâm chính trị,
        kinh tế và giao lưu văn hóa quan trọng. Đây cũng là nơi Phật giáo
        từ bên ngoài truyền vào, giao thoa với tín ngưỡng dân gian của
        người Việt, tạo nên những nét văn hóa tâm linh đặc sắc.

        Một trong những điểm nổi bật nhất của chùa là tháp Hòa Phong,
        nằm giữa khuôn viên cổ kính. Tòa tháp gạch mang vẻ đẹp trầm mặc,
        trở thành biểu tượng quen thuộc của Chùa Dâu. Qua nhiều thế kỷ,
        chùa đã được trùng tu nhiều lần nhưng vẫn lưu giữ những giá trị
        kiến trúc và nghệ thuật truyền thống.

        Chùa Dâu còn nổi tiếng với tín ngưỡng thờ Tứ Pháp, gồm Pháp Vân,
        Pháp Vũ, Pháp Lôi và Pháp Điện, tượng trưng cho các hiện tượng
        tự nhiên như mây, mưa, sấm và chớp. Tín ngưỡng này thể hiện mong
        ước của cư dân nông nghiệp về thời tiết thuận lợi, mùa màng tốt
        tươi và cuộc sống bình an.

        Khi tham quan, du khách có thể chiêm ngưỡng hệ thống tượng Phật,
        các công trình thờ tự, hành lang và những chi tiết kiến trúc cổ.
        Không gian chùa mang đến cảm giác thanh tịnh, giúp mọi người
        tìm hiểu sâu hơn về đời sống tín ngưỡng và nghệ thuật điêu khắc
        truyền thống của người Việt.

        Hằng năm, lễ hội Chùa Dâu được tổ chức vào tháng Tư âm lịch,
        nổi bật với các nghi lễ rước Tứ Pháp và những hoạt động văn hóa
        dân gian đặc sắc. Đây là dịp để người dân tưởng nhớ truyền thống,
        cầu mong mưa thuận gió hòa và gìn giữ những giá trị văn hóa
        được truyền lại qua nhiều thế hệ.

        Năm 2013, Chùa Dâu được xếp hạng Di tích quốc gia đặc biệt.
        Ngày nay, nơi đây không chỉ là điểm hành hương linh thiêng mà
        còn là địa điểm có giá trị lớn về lịch sử, kiến trúc và nghiên
        cứu văn hóa Phật giáo Việt Nam.
        `,

        en: `
        Dau Pagoda is regarded as one of the oldest Buddhist temples
        in Vietnam. It is located in the ancient Luy Lau area, in
        present-day Bac Ninh Province. The temple is also known as
        Dien Ung Pagoda, Co Chau Pagoda, and Phap Van Pagoda.
        With a history stretching back nearly two thousand years,
        it holds an important place in the development of Vietnamese
        Buddhism.

        Historical records indicate that the pagoda was established
        around the second century CE. Luy Lau was once an important
        political, economic, and cultural center. It also became
        a place where Buddhism encountered local Vietnamese beliefs,
        creating distinctive religious and cultural traditions.

        One of the temple's most recognizable landmarks is Hoa Phong
        Tower, a historic brick structure standing within the temple
        grounds. Its ancient appearance gives the site a peaceful
        atmosphere. Although the pagoda has undergone several
        restorations over the centuries, it retains important
        architectural and artistic features.

        Dau Pagoda is particularly famous for the worship of the
        Four Dharma Deities: Phap Van, Phap Vu, Phap Loi, and
        Phap Dien, associated with clouds, rain, thunder, and lightning.
        This tradition reflects the hopes of agricultural communities
        for favorable weather, successful harvests, and peaceful lives.

        Visitors can admire Buddhist statues, traditional worship
        halls, covered corridors, and historic architectural details.
        The tranquil surroundings offer an opportunity to learn about
        Vietnamese spiritual traditions and traditional sculpture.

        The annual Dau Pagoda Festival takes place in the fourth lunar
        month. Ceremonial processions and folk activities celebrate
        local heritage and express wishes for favorable weather
        and abundant harvests.

        In 2013, Dau Pagoda was recognized as a Special National
        Monument. Today, it remains an important pilgrimage site
        and a valuable destination for exploring Vietnamese Buddhist
        history, architecture, and cultural heritage.
        `,

        zh: `
        沤寺是越南最古老的佛教寺庙之一，位于古代娄楼地区，
        即今天的北宁省。它也被称为延应寺、古珠寺和法云寺。
        这座寺庙拥有近两千年的历史，在越南佛教的发展过程中
        占有重要地位。

        根据历史文献，沤寺大约建于公元二世纪。古代娄楼曾是
        重要的政治、经济和文化交流中心，也是佛教传入越南并
        与当地民间信仰相融合的重要地区。

        寺内最引人注目的建筑之一是和风塔。这座古老的砖塔
        矗立在寺院中央，具有独特的历史风貌。虽然寺庙经历了
        多次修缮，但仍保留着许多传统建筑与艺术特色。

        沤寺以供奉四法神而闻名，包括法云、法雨、法雷和法电，
        分别与云、雨、雷和闪电有关。这种信仰体现了古代农业
        社会对风调雨顺、五谷丰登和生活安宁的美好愿望。

        游客可以欣赏佛像、传统殿堂、回廊以及古老的建筑细节。
        宁静的寺院环境有助于人们了解越南传统宗教信仰和雕刻艺术。

        每年农历四月，沤寺都会举行传统节庆活动，包括四法神
        巡游仪式和民间文化活动。当地居民借此传承文化传统，
        祈求天气适宜、农业丰收。

        2013年，沤寺被列为越南国家特别遗迹。如今，这里不仅是
        重要的朝圣地点，也是研究越南佛教历史、传统建筑和文化
        遗产的重要场所。
        `,

        zhTW: `
        沤寺是越南最古老的佛教寺廟之一，位於古代婁樓地區，
        也就是今天的北寧省。它也被稱為延應寺、古珠寺和法雲寺。
        這座寺廟擁有近兩千年的歷史，在越南佛教的發展過程中
        占有重要地位。

        根據歷史文獻，沤寺大約建於西元二世紀。古代婁樓曾是
        重要的政治、經濟與文化交流中心，也是佛教傳入越南並
        與當地民間信仰融合的重要地區。

        寺內最引人注目的建築之一是和風塔。這座古老的磚塔
        矗立在寺院中央，具有獨特的歷史風貌。雖然寺廟經歷多次
        修繕，但仍保留許多傳統建築與藝術特色。

        沤寺以供奉四法神而聞名，包括法雲、法雨、法雷和法電，
        分別與雲、雨、雷和閃電有關。這種信仰體現了古代農業
        社會對風調雨順、五穀豐收與生活安寧的美好願望。

        遊客可以欣賞佛像、傳統殿堂、迴廊以及古老的建築細節。
        寧靜的寺院環境有助於人們了解越南傳統宗教信仰與雕刻藝術。

        每年農曆四月，沤寺都會舉行傳統節慶活動，包括四法神
        遶境儀式與民間文化活動。當地居民藉此傳承文化傳統，
        祈求天氣適宜、農業豐收。

        2013年，沤寺被列為越南國家特別遺跡。如今，這裡不僅是
        重要的朝聖地點，也是研究越南佛教歷史、傳統建築與文化
        遺產的重要場所。
        `,

        ja: `
        ザウ寺は、ベトナムで最も古い仏教寺院の一つとされ、
        現在のバクニン省にある古代ルイラウ地域に位置しています。
        ジエンウン寺、コーチャウ寺、ファップヴァン寺とも呼ばれ、
        約二千年にわたる歴史を持つ重要な文化遺産です。

        歴史資料によると、この寺院は紀元二世紀ごろに建立された
        とされています。古代のルイラウは政治、経済、文化交流の
        重要な中心地であり、仏教がベトナムに伝わり、現地の
        民間信仰と融合していった場所でもあります。

        寺院の代表的な建造物は、境内の中央に立つホアフォン塔です。
        古いレンガ造りの塔が、静かで歴史を感じさせる景観を
        作り出しています。寺院は何度も修復されてきましたが、
        伝統的な建築や芸術の特徴が今も残されています。

        ザウ寺は、雲、雨、雷、稲妻に関係する四法信仰でも有名です。
        法雲、法雨、法雷、法電という四つの神格への信仰には、
        農業を営む人々が豊作や平穏な暮らしを願う思いが
        反映されています。

        境内では仏像、伝統的な礼拝堂、回廊、古い建築装飾を
        見学できます。静かな環境の中で、ベトナムの伝統的な
        信仰や彫刻芸術について学ぶことができます。

        毎年、旧暦四月にはザウ寺の祭りが開催されます。
        四法神の行列や民俗行事を通じて、地域の文化が受け継がれ、
        豊作や天候の安定が祈願されます。

        2013年、ザウ寺はベトナムの国家特別遺跡に指定されました。
        現在では、巡礼の場所としてだけでなく、ベトナム仏教の
        歴史や伝統建築、文化遺産を学ぶ重要な観光地となっています。
        `,

        ko: `
        저우 사원은 베트남에서 가장 오래된 불교 사원 가운데 하나로,
        오늘날 박닌성에 해당하는 고대 루이라우 지역에 위치하고 있습니다.
        디엔응 사원, 꼬쩌우 사원, 팝번 사원이라는 이름으로도 알려져
        있으며 약 2천 년의 역사를 지닌 중요한 문화유산입니다.

        역사 자료에 따르면 이 사원은 서기 2세기경에 세워졌습니다.
        고대 루이라우는 정치, 경제, 문화 교류의 중요한 중심지였으며,
        불교가 베트남에 전해져 현지의 민간 신앙과 융합된 지역입니다.

        사원에서 가장 눈에 띄는 건축물 가운데 하나는 경내 중앙에
        위치한 호아퐁 탑입니다. 오래된 벽돌탑은 고풍스럽고 평온한
        분위기를 만들어 줍니다. 사원은 여러 차례 보수되었지만
        전통 건축과 예술의 특징을 여전히 간직하고 있습니다.

        저우 사원은 구름, 비, 천둥, 번개와 관련된 사법 신앙으로
        유명합니다. 법운, 법우, 법뢰, 법전이라는 네 신격에 대한
        신앙에는 풍년과 평화로운 생활을 바라는 농경 사회의 소망이
        담겨 있습니다.

        방문객들은 불상과 전통 예배 공간, 회랑, 오래된 건축 장식을
        감상할 수 있습니다. 고요한 사원에서 베트남의 전통 신앙과
        조각 예술을 이해하는 시간을 가질 수 있습니다.

        매년 음력 4월에는 저우 사원 축제가 열립니다. 사법 신들의
        행렬과 민속 행사를 통해 지역의 전통을 이어 가며 풍년과
        좋은 날씨를 기원합니다.

        2013년 저우 사원은 베트남 국가 특별 유적으로 지정되었습니다.
        오늘날 이곳은 중요한 순례지이자 베트남 불교의 역사와
        전통 건축, 문화유산을 배울 수 있는 관광 명소입니다.
        `,

        fr: `
        La pagode Dau est considérée comme l'un des plus anciens
        temples bouddhistes du Vietnam. Elle se trouve dans l'ancienne
        région de Luy Lau, dans l'actuelle province de Bac Ninh.
        Également connue sous les noms de pagode Dien Ung, Co Chau
        et Phap Van, elle possède une histoire qui remonte à près
        de deux mille ans.

        Selon les sources historiques, sa construction aurait commencé
        vers le IIe siècle de notre ère. Luy Lau était alors un centre
        politique, économique et culturel important. C'est également
        dans cette région que le bouddhisme s'est développé au contact
        des croyances populaires vietnamiennes.

        L'un des monuments les plus remarquables du site est la tour
        Hoa Phong, une ancienne construction en briques située au cœur
        du temple. Son apparence historique contribue à l'atmosphère
        paisible du lieu. Malgré plusieurs restaurations au fil des
        siècles, la pagode conserve des caractéristiques architecturales
        et artistiques traditionnelles.

        La pagode Dau est célèbre pour le culte des Quatre Divinités
        du Dharma : Phap Van, Phap Vu, Phap Loi et Phap Dien,
        associées respectivement aux nuages, à la pluie, au tonnerre
        et à la foudre. Cette tradition exprime les souhaits des
        communautés agricoles pour des récoltes abondantes et une
        vie paisible.

        Les visiteurs peuvent admirer des statues bouddhiques,
        des salles de culte, des galeries couvertes et des détails
        architecturaux anciens. Le cadre serein permet de découvrir
        les traditions spirituelles et l'art de la sculpture au Vietnam.

        Chaque année, au quatrième mois lunaire, le festival de la
        pagode Dau rassemble des habitants et des pèlerins. Les
        processions liées aux Quatre Divinités et les activités
        populaires contribuent à préserver le patrimoine local.

        En 2013, la pagode Dau a été classée monument national spécial.
        Aujourd'hui, elle constitue à la fois un lieu de pèlerinage
        et une destination culturelle importante pour découvrir
        l'histoire du bouddhisme vietnamien, l'architecture ancienne
        et les traditions du pays.
        `
    }
},

{
    id: 10,

    name: {
        vi: "Điện Kính Thiên",
        en: "Kinh Thien Palace",
        zh: "敬天殿",
        zhTW: "敬天殿",
        ja: "キンティエン殿",
        ko: "낀티엔 전각",
        fr: "Palais Kinh Thien"
    },

    location: {
        vi: "Hoàng thành Thăng Long, 19C Hoàng Diệu, Ba Đình, Hà Nội",
        en: "Thang Long Imperial Citadel, 19C Hoang Dieu Street, Hanoi",
        zh: "越南河内市巴亭郡黄耀街19C号，升龙皇城内",
        zhTW: "越南河內市巴亭郡黃耀街19C號，昇龍皇城內",
        ja: "ベトナム、ハノイ市バーディン区、タンロン皇城内",
        ko: "베트남 하노이시 바딘군 탕롱 황성 내부",
        fr: "Citadelle impériale de Thang Long, Hanoï, Vietnam"
    },

    image: "images/dienkinhthien.jpg",

    duration: "03:30",

    description: {

        vi: `
        Điện Kính Thiên là một trong những di tích quan trọng nhất
        của Hoàng thành Thăng Long, nằm ở trung tâm khu di sản tại
        thủ đô Hà Nội. Công trình từng giữ vị trí đặc biệt trong
        đời sống chính trị và nghi lễ của các triều đại phong kiến
        Việt Nam, đặc biệt dưới thời Lê sơ.

        Điện được xây dựng vào năm 1428 dưới triều vua Lê Thái Tổ,
        trên nền cung điện cũ từ thời Lý và thời Trần. Đến thời
        vua Lê Thánh Tông, điện tiếp tục được hoàn thiện và trở
        thành nơi tổ chức nhiều nghi lễ quan trọng của triều đình.
        Đây là nơi các hoàng đế thiết triều, tiếp đón sứ thần và
        tiến hành những sự kiện lớn của quốc gia.

        Một trong những dấu tích nổi bật nhất còn lại là thềm
        rồng bằng đá ở phía trước nền điện. Hai bên thềm có những
        con rồng đá được chạm khắc tinh xảo, thể hiện trình độ
        nghệ thuật điêu khắc của người Việt thời Lê. Hình tượng
        rồng không chỉ là biểu tượng của quyền lực hoàng gia mà
        còn thể hiện quan niệm về sự thịnh vượng và uy nghiêm.

        Mặc dù kiến trúc chính của điện không còn nguyên vẹn,
        nền móng và các bậc thềm đá vẫn giúp du khách hình dung
        phần nào quy mô của công trình trong quá khứ. Không gian
        rộng lớn xung quanh cũng cho thấy vị trí trung tâm của
        điện trong tổng thể Hoàng thành Thăng Long.

        Trong lịch sử, Điện Kính Thiên từng là nơi diễn ra các
        nghi lễ đăng quang, thiết triều và đón tiếp các đoàn
        ngoại giao. Qua nhiều thời kỳ, khu vực này tiếp tục có
        vai trò quan trọng trong hoạt động quản lý và quân sự.
        Những dấu tích còn lại phản ánh nhiều lớp lịch sử chồng
        lên nhau của kinh đô Thăng Long.

        Điện Kính Thiên nằm trong khu trung tâm Hoàng thành
        Thăng Long, nơi được UNESCO công nhận là Di sản Văn hóa
        Thế giới vào năm 2010. Di tích có giá trị nổi bật trong
        việc nghiên cứu lịch sử cung đình, kiến trúc và nghệ thuật
        Việt Nam qua nhiều thế kỷ.

        Ngày nay, khi đến thăm Điện Kính Thiên, du khách không
        chỉ được tìm hiểu về một công trình hoàng gia xưa mà
        còn có cơ hội cảm nhận chiều sâu lịch sử của thủ đô
        Hà Nội, nơi từng là trung tâm quyền lực của nhiều
        triều đại Việt Nam.
        `,

        en: `
        Kinh Thien Palace is one of the most important historical
        sites within the Thang Long Imperial Citadel in Hanoi.
        It once served as a major center for royal ceremonies
        and political affairs, particularly during the Later
        Le Dynasty.

        The palace was built in 1428 during the reign of
        Emperor Le Thai To, on the foundations of earlier
        palaces dating back to the Ly and Tran dynasties.
        It was further developed during the reign of Emperor
        Le Thanh Tong and became a venue for important royal
        ceremonies, court audiences, and diplomatic receptions.

        One of the most remarkable surviving features is the
        stone dragon staircase in front of the former palace
        platform. The intricately carved dragons demonstrate
        the artistic skill of Vietnamese stone sculptors
        during the Le Dynasty. Dragons symbolized imperial
        authority, prosperity, and dignity.

        Although the main palace structure no longer survives
        intact, the foundations and stone steps help visitors
        imagine the scale and grandeur of the original building.
        The surrounding open space also reveals the palace's
        central position within the imperial complex.

        Throughout history, Kinh Thien Palace hosted royal
        ceremonies, court audiences, and diplomatic meetings.
        In later periods, the area also became associated
        with administrative and military activities, reflecting
        the many historical layers of the ancient capital.

        The palace is part of the Central Sector of the Imperial
        Citadel of Thang Long, which was inscribed on the UNESCO
        World Heritage List in 2010. The site is valuable for
        understanding Vietnamese royal history, architecture,
        and traditional sculpture.

        Today, visitors can explore the surviving remains and
        gain a deeper appreciation of Hanoi's historical
        significance as the political center of successive
        Vietnamese dynasties.
        `,

        zh: `
        敬天殿是越南河内升龙皇城内最重要的历史遗迹之一，
        曾经是越南封建王朝举行重要宫廷仪式和处理国家事务
        的场所，尤其在后黎朝时期具有重要地位。

        敬天殿建于1428年，即黎太祖统治时期，建筑位于
        李朝和陈朝时期旧宫殿的遗址之上。到了黎圣宗时期，
        宫殿进一步完善，成为皇帝举行朝会、接见使节和
        举办重要国家仪式的地方。

        遗址最引人注目的部分之一是殿前的石龙台阶。
        台阶两侧的石龙雕刻精美，展现了黎朝时期越南
        石雕艺术的高超技艺。龙不仅象征皇权，也代表
        繁荣、尊贵与威严。

        虽然原有的宫殿主体建筑已经不复完整，但现存的
        建筑基址和石阶仍然帮助游客想象昔日宫殿的规模。
        周围开阔的空间也体现了敬天殿在整个皇城建筑群
        中的中心地位。

        在历史上，敬天殿曾举行重要宫廷仪式、朝会和
        外交接待活动。后来的历史时期，这一地区也与
        行政管理和军事活动有关，反映了升龙古都丰富
        而复杂的历史变迁。

        敬天殿属于升龙皇城中心区域的一部分。该遗址
        于2010年被联合国教科文组织列入世界文化遗产名录，
        对研究越南宫廷历史、传统建筑和雕刻艺术具有
        重要价值。

        如今，游客可以在这里欣赏古老的石雕遗迹，
        进一步了解河内作为越南历代王朝政治中心的
        历史地位与文化意义。
        `,

        zhTW: `
        敬天殿是越南河內昇龍皇城內最重要的歷史遺跡之一，
        曾經是越南封建王朝舉行重要宮廷儀式與處理國家事務
        的場所，尤其在後黎朝時期具有重要地位。

        敬天殿建於1428年，也就是黎太祖統治時期，建築位於
        李朝與陳朝時期舊宮殿的遺址之上。到了黎聖宗時期，
        宮殿進一步完善，成為皇帝舉行朝會、接見使節及
        舉辦重要國家儀式的地方。

        遺址最引人注目的部分之一是殿前的石龍台階。
        台階兩側的石龍雕刻精美，展現了黎朝時期越南
        石雕藝術的高超技藝。龍不僅象徵皇權，也代表
        繁榮、尊貴與威嚴。

        雖然原有的宮殿主體建築已不復完整，但現存的
        建築基址與石階仍能幫助遊客想像昔日宮殿的規模。
        周圍開闊的空間也體現了敬天殿在整個皇城建築群
        中的中心地位。

        在歷史上，敬天殿曾舉行重要宮廷儀式、朝會與
        外交接待活動。後來的歷史時期，這一地區也與
        行政管理和軍事活動有關，反映了昇龍古都豐富
        而複雜的歷史變遷。

        敬天殿屬於昇龍皇城中心區域的一部分。該遺址
        於2010年被聯合國教科文組織列入世界文化遺產名錄，
        對研究越南宮廷歷史、傳統建築與雕刻藝術具有
        重要價值。

        如今，遊客可以在這裡欣賞古老的石雕遺跡，
        進一步了解河內作為越南歷代王朝政治中心的
        歷史地位與文化意義。
        `,

        ja: `
        キンティエン殿は、ハノイにあるタンロン皇城の中でも
        特に重要な歴史遺跡の一つです。かつては王朝の政治や
        宮廷儀式の中心的な場所であり、特に後黎朝の時代に
        大きな役割を果たしました。

        建物は1428年、黎太祖の時代に建設されました。
        その場所には李朝や陳朝の時代の宮殿の遺構があり、
        後に黎聖宗の時代にさらに整備されました。皇帝の
        朝廷儀式や外国使節の接見など、重要な行事が
        ここで行われました。

        現在も残る見どころの一つが、殿前の石造りの龍階段です。
        両側に施された精巧な龍の彫刻は、黎朝時代の
        ベトナム石彫芸術の高さを伝えています。龍は皇権や
        繁栄、威厳を象徴する重要な存在でした。

        宮殿の主要な建物は完全な形では残っていませんが、
        建物の基礎や石段から、かつての壮大な規模を
        想像することができます。周囲の広い空間からは、
        皇城全体におけるこの殿の重要性もうかがえます。

        歴史を通じて、キンティエン殿では宮廷儀式や朝廷の
        会議、外交使節の接待などが行われました。後の時代には
        行政や軍事活動とも関わり、古都タンロンの複雑な
        歴史を今に伝えています。

        キンティエン殿は、2010年にユネスコ世界遺産に登録された
        タンロン皇城中心区域の一部です。ベトナムの宮廷史や
        伝統建築、彫刻芸術を研究するうえで重要な遺跡です。

        現在、訪問者は残された石造遺構を見学しながら、
        ハノイが歴代王朝の政治の中心地として果たしてきた
        歴史的な役割を学ぶことができます。
        `,

        ko: `
        낀티엔 전각은 베트남 하노이에 있는 탕롱 황성의
        중요한 역사 유적 가운데 하나입니다. 과거 왕조의
        정치와 궁중 의례가 이루어지던 중심 공간이었으며,
        특히 후기 레 왕조 시대에 중요한 역할을 했습니다.

        이 전각은 1428년 레타이또 황제 시대에 건설되었습니다.
        그 자리는 이전 리 왕조와 쩐 왕조 시대의 궁전 유적과
        관련이 있으며, 레타인똥 황제 시대에 더욱 정비되었습니다.
        황제의 공식 의식과 외국 사절 접견 등 중요한 행사가
        이곳에서 열렸습니다.

        현재 남아 있는 대표적인 유적은 전각 앞의 돌계단과
        용 조각입니다. 정교하게 새겨진 용의 모습은 레 왕조
        시대 베트남 석조 예술의 뛰어난 수준을 보여 줍니다.
        용은 왕권과 번영, 위엄을 상징했습니다.

        궁전의 주요 건물은 온전하게 남아 있지 않지만,
        건물 터와 돌계단을 통해 과거 건축물의 규모와
        웅장함을 상상할 수 있습니다. 주변의 넓은 공간은
        황성 안에서 이 전각이 차지했던 중심적 위치를 보여 줍니다.

        역사적으로 낀티엔 전각에서는 궁중 의례와 조회,
        외교 사절 접견 등이 이루어졌습니다. 후대에는
        행정 및 군사 활동과도 관련되어 탕롱의 복잡한
        역사적 변화를 전해 줍니다.

        낀티엔 전각은 2010년 유네스코 세계문화유산으로
        등재된 탕롱 황성 중심 구역의 일부입니다. 베트남
        궁중 역사와 전통 건축, 조각 예술을 연구하는 데
        중요한 가치를 지니고 있습니다.

        오늘날 방문객들은 남아 있는 석조 유적을 둘러보며
        하노이가 여러 왕조의 정치 중심지로 발전해 온
        역사적 의미를 이해할 수 있습니다.
        `,

        fr: `
        Le palais Kinh Thien est l'un des sites historiques les plus
        importants de la citadelle impériale de Thang Long, à Hanoï.
        Il fut autrefois un centre majeur du pouvoir politique et des
        cérémonies royales, notamment sous la dynastie des Le postérieurs.

        Le palais fut construit en 1428, sous le règne de l'empereur
        Le Thai To, sur un emplacement associé à d'anciens palais des
        dynasties Ly et Tran. Il fut ensuite développé sous Le Thanh
        Tong et accueillit des audiences impériales, des cérémonies
        officielles et la réception de délégations étrangères.

        L'un des vestiges les plus remarquables est l'escalier de
        pierre orné de dragons, situé devant l'ancienne plateforme
        du palais. Les sculptures finement réalisées témoignent du
        savoir-faire des artisans vietnamiens de la dynastie des Le.
        Le dragon symbolisait le pouvoir impérial, la prospérité
        et la majesté.

        Bien que le bâtiment principal ne soit plus conservé dans
        son état d'origine, les fondations et les marches de pierre
        permettent d'imaginer les dimensions de l'ancien palais.
        L'espace environnant souligne également sa position centrale
        dans l'ensemble de la citadelle.

        Au cours de l'histoire, le palais accueillit des cérémonies
        royales, des audiences et des rencontres diplomatiques.
        À des périodes ultérieures, le secteur fut également lié
        aux activités administratives et militaires, témoignant
        des différentes étapes de l'histoire de Thang Long.

        Le palais Kinh Thien fait partie du secteur central de la
        citadelle impériale de Thang Long, inscrit au patrimoine
        mondial de l'UNESCO en 2010. Il constitue une source
        importante pour l'étude de l'histoire royale, de
        l'architecture et de la sculpture vietnamiennes.

        Aujourd'hui, les visiteurs peuvent découvrir les vestiges
        conservés et mieux comprendre le rôle historique de Hanoï,
        ancienne capitale politique de plusieurs dynasties vietnamiennes.
        `
    }
},
{
    id: 11,
    name: {
        vi: "Khu di tích Kim Liên",
        en: "Kim Lien Historical Site",
        zh: "金莲历史遗迹区",
        zhTW: "金蓮歷史遺跡區",
        ja: "キム・リエン歴史遺跡地区",
        ko: "낌리엔 역사 유적지",
        fr: "Site historique de Kim Liên"
    },
    location: {
        vi: "Xã Kim Liên, tỉnh Nghệ An, Việt Nam",
        en: "Kim Lien Commune, Nghe An Province, Vietnam",
        zh: "越南乂安省金莲乡",
        zhTW: "越南乂安省金蓮鄉",
        ja: "ベトナム、ゲアン省キム・リエン社",
        ko: "베트남 응에안성 낌리엔 지역",
        fr: "Commune de Kim Liên, province de Nghệ An, Vietnam"
    },
    image: "images/khuditichkimlien.jpg",
    duration: "04:00",
    description: {
        vi: `Khu di tích Kim Liên là một địa điểm lịch sử và văn hóa nổi tiếng của Việt Nam, nằm tại tỉnh Nghệ An, quê hương của Chủ tịch Hồ Chí Minh. Đây là nơi gắn liền với tuổi thơ, gia đình và những năm tháng đầu đời của Người. Khu di tích bao gồm quê nội ở làng Sen và quê ngoại ở làng Hoàng Trù, cùng nhiều công trình tưởng niệm có giá trị lịch sử.

        Khi đến làng Sen, du khách có thể tham quan ngôi nhà tranh giản dị, những hàng tre xanh, con đường làng và các vật dụng sinh hoạt quen thuộc của gia đình. Những hình ảnh mộc mạc ấy giúp tái hiện cuộc sống của người dân Việt Nam vào cuối thế kỷ XIX và đầu thế kỷ XX. Tại làng Hoàng Trù, du khách có thể tìm hiểu về quê ngoại và gia đình đã góp phần nuôi dưỡng nhân cách, tinh thần yêu nước của Chủ tịch Hồ Chí Minh.

        Khu di tích Kim Liên không chỉ là điểm tham quan dành cho những người yêu lịch sử mà còn là nơi giáo dục truyền thống, lòng biết ơn và niềm tự hào dân tộc. Đến đây, du khách có dịp tìm hiểu sâu hơn về cuộc đời của Chủ tịch Hồ Chí Minh, đồng thời cảm nhận vẻ đẹp bình dị của làng quê Nghệ An và con người xứ Nghệ.`,

        en: `Kim Lien Historical Site is one of Vietnam's important historical and cultural destinations, located in Nghe An Province, the homeland of President Ho Chi Minh. The site is closely associated with his childhood, family, and early years. It includes his paternal hometown in Sen Village and his maternal hometown in Hoang Tru Village, along with memorial structures that preserve important historical memories.

        In Sen Village, visitors can explore the simple thatched house where Ho Chi Minh spent part of his childhood, surrounded by green bamboo groves, quiet village paths, and traditional household objects. These humble surroundings offer a glimpse into rural Vietnamese life in the late nineteenth and early twentieth centuries. In Hoang Tru Village, visitors can learn more about his maternal family and the environment that helped shape his character and patriotic spirit.

        Kim Lien is more than a tourist attraction. It is a place for historical education, remembrance, and reflection on Vietnam's national heritage. A visit allows travelers to understand more about Ho Chi Minh's early life while appreciating the peaceful beauty, traditions, and warm hospitality of the Nghe An countryside.`,

        zh: `金莲历史遗迹区位于越南乂安省，是越南重要的历史文化景点，也是胡志明主席的故乡。这里与胡志明主席的童年、家庭以及早年生活有着密切的联系。遗迹区包括其父亲一方的故乡——森村，以及母亲一方的故乡——黄橘村，还有多处具有纪念意义的历史建筑。

        在森村，游客可以参观胡志明主席童年时期生活过的简朴茅屋，欣赏青翠的竹林、宁静的乡间小路以及传统的生活用品。这些朴素的景象展现了十九世纪末至二十世纪初越南农村的生活风貌。在黄橘村，游客可以进一步了解胡志明主席的外祖家庭，以及对其人格和爱国精神产生影响的成长环境。

        金莲历史遗迹区不仅是历史爱好者的重要旅游目的地，也是开展历史教育、缅怀先辈和弘扬民族传统的地方。来到这里，游客可以深入了解胡志明主席的早年生活，同时感受乂安乡村宁静质朴的风光和当地人民的热情。`,

        zhTW: `金蓮歷史遺跡區位於越南乂安省，是越南重要的歷史文化景點，也是胡志明主席的故鄉。這裡與胡志明主席的童年、家庭以及早年生活有著密切的聯繫。遺跡區包括其父親一方的故鄉——森村，以及母親一方的故鄉——黃橘村，還有多處具有紀念意義的歷史建築。

        在森村，遊客可以參觀胡志明主席童年時期生活過的簡樸茅屋，欣賞青翠的竹林、寧靜的鄉間小路以及傳統的生活用品。這些樸素的景象展現了十九世紀末至二十世紀初越南農村的生活風貌。在黃橘村，遊客可以進一步了解胡志明主席的外祖家庭，以及對其人格和愛國精神產生影響的成長環境。

        金蓮歷史遺跡區不僅是歷史愛好者的重要旅遊目的地，也是進行歷史教育、緬懷先輩和弘揚民族傳統的地方。來到這裡，遊客可以深入了解胡志明主席的早年生活，同時感受乂安鄉村寧靜樸實的風光和當地人民的熱情。`,

        ja: `キム・リエン歴史遺跡地区は、ベトナム中北部のゲアン省に位置する重要な歴史文化遺産であり、ホー・チ・ミン主席の故郷として知られています。この場所は、主席の幼少期や家族、そして人格形成に関わる初期の人生と深いつながりがあります。遺跡地区には、父方の故郷であるセン村と、母方の故郷であるホアンチュー村が含まれています。

        セン村では、ホー・チ・ミン主席が幼少期を過ごした質素な茅葺きの家や、青々とした竹林、静かな村道、当時の生活用品などを見学できます。これらの風景から、十九世紀末から二十世紀初頭にかけてのベトナム農村の暮らしを感じることができます。ホアンチュー村では、母方の家族や、主席の人格と愛国心を育んだ環境について学ぶことができます。

        キム・リエンは、歴史を学ぶだけでなく、国の伝統を振り返り、先人への感謝を深めることのできる場所です。訪問者はホー・チ・ミン主席の生い立ちへの理解を深めるとともに、ゲアン地方の素朴な田園風景や地域の人々の温かさに触れることができます。`,

        ko: `낌리엔 역사 유적지는 베트남 중북부 응에안성에 위치한 중요한 역사·문화 관광지로, 호찌민 주석의 고향으로 잘 알려져 있습니다. 이곳은 호찌민 주석의 어린 시절과 가족, 그리고 인격이 형성되던 초기 생애와 깊은 관련이 있습니다. 유적지에는 아버지 쪽 고향인 센 마을과 어머니 쪽 고향인 호앙쭈 마을을 비롯해 역사적 의미가 있는 여러 기념 시설이 있습니다.

        센 마을에서는 호찌민 주석이 어린 시절을 보냈던 소박한 초가집과 푸른 대나무 숲, 조용한 시골길, 당시의 생활용품을 살펴볼 수 있습니다. 이러한 풍경은 19세기 말과 20세기 초 베트남 농촌의 일상생활을 보여 줍니다. 호앙쭈 마을에서는 외가 가족의 이야기와 호찌민 주석의 인격 및 애국심 형성에 영향을 준 환경을 알아볼 수 있습니다.

        낌리엔 역사 유적지는 단순한 관광지를 넘어 베트남의 역사와 전통을 배우고 선조들의 정신을 되새기는 교육의 장소입니다. 방문객들은 호찌민 주석의 초기 생애를 이해하는 동시에 응에안 지역의 소박한 전원 풍경과 따뜻한 지역 문화를 경험할 수 있습니다.`,

        fr: `Le site historique de Kim Liên est une destination culturelle et historique importante du Vietnam, située dans la province de Nghệ An, région natale du président Hô Chi Minh. Ce lieu est étroitement lié à son enfance, à sa famille et à ses premières années. Le site comprend le village de Sen, du côté paternel, et le village de Hoàng Trù, du côté maternel, ainsi que plusieurs monuments commémoratifs.

        Dans le village de Sen, les visiteurs peuvent découvrir la modeste maison traditionnelle où Hô Chi Minh a passé une partie de son enfance, entourée de bambous, de chemins paisibles et d'objets domestiques d'autrefois. Ces éléments permettent d'imaginer la vie rurale vietnamienne à la fin du XIXe siècle et au début du XXe siècle. Dans le village de Hoàng Trù, les visiteurs peuvent en apprendre davantage sur sa famille maternelle et sur l'environnement qui a contribué à former sa personnalité et son patriotisme.

        Le site de Kim Liên n'est pas seulement une attraction touristique : c'est aussi un lieu de mémoire, d'éducation historique et de transmission des traditions nationales. Une visite permet de mieux comprendre les premières années de la vie de Hô Chi Minh tout en appréciant les paysages simples de la campagne de Nghệ An et l'accueil chaleureux de ses habitants.`
    }
},
{
    id: 12,
    name: {
        vi: "Bến Nhà Rồng",
        en: "Nha Rong Wharf",
        zh: "龙屋码头",
        zhTW: "龍屋碼頭",
        ja: "ニャーゾン埠頭",
        ko: "냐롱 부두",
        fr: "Quai de Nhà Rồng"
    },
    location: {
        vi: "Số 1 Nguyễn Tất Thành, phường Xóm Chiếu, Thành phố Hồ Chí Minh, Việt Nam",
        en: "1 Nguyen Tat Thanh Street, Ho Chi Minh City, Vietnam",
        zh: "越南胡志明市阮必成街1号",
        zhTW: "越南胡志明市阮必成街1號",
        ja: "ベトナム、ホーチミン市グエン・タット・タイン通り1番地",
        ko: "베트남 호찌민시 응우옌떳타인 거리 1번지",
        fr: "1 rue Nguyễn Tất Thành, Hô Chi Minh-Ville, Vietnam"
    },
    image: "images/bennharong.jpg",
    duration: "04:00",
    description: {
        vi: `Bến Nhà Rồng là một địa danh lịch sử nổi tiếng nằm bên sông Sài Gòn, tại Thành phố Hồ Chí Minh. Nơi đây gắn liền với sự kiện ngày 5 tháng 6 năm 1911, khi người thanh niên Nguyễn Tất Thành rời bến cảng để bắt đầu hành trình tìm đường cứu nước. Sau này, Người được biết đến với tên gọi Chủ tịch Hồ Chí Minh, vị lãnh tụ có vai trò đặc biệt quan trọng trong lịch sử hiện đại Việt Nam.

        Công trình Nhà Rồng được xây dựng vào đầu thế kỷ XX và nổi bật với kiến trúc kết hợp giữa phong cách phương Tây và những chi tiết trang trí mang nét Á Đông. Hình ảnh đôi rồng trên mái nhà đã tạo nên tên gọi quen thuộc của địa điểm này. Vị trí bên bờ sông cũng giúp du khách quan sát cảnh tàu thuyền qua lại và nhịp sống sôi động của khu vực cảng Sài Gòn xưa.

        Ngày nay, Bến Nhà Rồng là nơi đặt Bảo tàng Hồ Chí Minh – Chi nhánh Thành phố Hồ Chí Minh, trưng bày nhiều hình ảnh, tư liệu và hiện vật về cuộc đời, sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh. Khi tham quan, du khách có thể tìm hiểu về hành trình hoạt động của Người, những dấu mốc quan trọng trong lịch sử dân tộc và khát vọng độc lập của nhân dân Việt Nam. Bến Nhà Rồng là điểm đến ý nghĩa dành cho những ai muốn khám phá lịch sử, văn hóa và truyền thống yêu nước của Việt Nam.`,

        en: `Nha Rong Wharf is a famous historical landmark on the Saigon River in Ho Chi Minh City, Vietnam. It is closely associated with June 5, 1911, when a young man named Nguyen Tat Thanh departed from this port to begin his journey in search of a path to national liberation. He later became known as President Ho Chi Minh, one of the most influential figures in modern Vietnamese history.

        The Nha Rong building was constructed in the early twentieth century. Its architecture combines Western design with decorative details inspired by Asian traditions. The pair of dragon figures on the roof gave the building its familiar name, which can be translated as Dragon House. Its riverside location also offers views of boats and ships moving along the Saigon River, recalling the area's history as an important commercial port.

        Today, Nha Rong Wharf houses the Ho Chi Minh Museum – Ho Chi Minh City Branch. Exhibitions present photographs, documents, and artifacts related to Ho Chi Minh's life and revolutionary activities. Visitors can learn about his journey, important milestones in Vietnam's history, and the Vietnamese people's long-standing aspiration for independence. Nha Rong Wharf is a meaningful destination for travelers interested in history, culture, and the country's patriotic traditions.`,

        zh: `龙屋码头是越南胡志明市西贡河畔著名的历史地标。这里与1911年6月5日的一段重要历史紧密相连。当时，年轻的阮必成从这里乘船出发，开始寻找救国之路。后来，他以胡志明主席之名为世人所熟知，并成为越南现代历史上具有重要影响的人物。

        龙屋建筑建于二十世纪初，融合了西方建筑风格与东方装饰元素。屋顶上的一对龙形装饰使这座建筑获得了“龙屋”的名称。由于建筑位于河岸，游客还可以欣赏西贡河上的船只往来，感受昔日港口地区的历史氛围。

        如今，龙屋码头设有胡志明博物馆胡志明市分馆，展出与胡志明主席生平及革命活动有关的照片、文献和历史实物。游客可以在这里了解他的革命历程、越南历史上的重要事件，以及越南人民追求民族独立的愿望。对于希望深入认识越南历史、文化和爱国传统的游客来说，这里是一个意义深远的参观地点。`,

        zhTW: `龍屋碼頭是越南胡志明市西貢河畔著名的歷史地標。這裡與1911年6月5日的一段重要歷史緊密相連。當時，年輕的阮必成從這裡乘船出發，開始尋找救國之路。後來，他以胡志明主席之名為世人所熟知，並成為越南現代歷史上具有重要影響的人物。

        龍屋建築建於二十世紀初，融合了西方建築風格與東方裝飾元素。屋頂上的一對龍形裝飾使這座建築獲得了「龍屋」的名稱。由於建築位於河岸，遊客還可以欣賞西貢河上的船隻往來，感受昔日港口地區的歷史氛圍。

        如今，龍屋碼頭設有胡志明博物館胡志明市分館，展出與胡志明主席生平及革命活動有關的照片、文獻和歷史實物。遊客可以在這裡了解他的革命歷程、越南歷史上的重要事件，以及越南人民追求民族獨立的願望。對於希望深入認識越南歷史、文化和愛國傳統的遊客來說，這裡是一個意義深遠的參觀地點。`,

        ja: `ニャーゾン埠頭は、ベトナムのホーチミン市にあるサイゴン川沿いの有名な歴史的名所です。この場所は、1911年6月5日に若きグエン・タット・タインが国を救う道を探すため、ここから船で出発した出来事で知られています。彼は後にホー・チ・ミン主席として知られるようになり、現代ベトナムの歴史に大きな影響を与えました。

        ニャーゾンの建物は二十世紀初頭に建てられ、西洋建築の様式と東洋的な装飾が組み合わされています。屋根にある一対の龍の装飾が、この建物の名前の由来となりました。川沿いに位置しているため、訪問者はサイゴン川を行き交う船を眺めながら、かつて重要な港であった地域の歴史を感じることができます。

        現在、ニャーゾン埠頭にはホー・チ・ミン博物館のホーチミン市分館があり、主席の生涯や革命活動に関する写真、文書、歴史資料が展示されています。ここでは、彼の活動の歩みやベトナム史の重要な出来事、そして独立を求めたベトナムの人々の願いについて学べます。ベトナムの歴史、文化、愛国の伝統を知りたい人にとって、意義深い訪問先です。`,

        ko: `냐롱 부두는 베트남 호찌민시 사이공강변에 위치한 유명한 역사 유적지입니다. 이곳은 1911년 6월 5일, 젊은 응우옌떳타인이 조국을 구할 길을 찾기 위해 배를 타고 떠난 장소로 잘 알려져 있습니다. 그는 훗날 호찌민 주석으로 알려졌으며, 현대 베트남 역사에서 중요한 역할을 한 인물입니다.

        냐롱 건물은 20세기 초에 지어졌으며 서양식 건축 양식과 동양적인 장식 요소가 조화를 이루고 있습니다. 지붕 위에 놓인 한 쌍의 용 장식에서 이 건물의 이름이 유래했습니다. 강변에 자리하고 있어 방문객들은 사이공강을 오가는 배들을 바라보며 과거 이 지역이 중요한 항구였다는 사실을 떠올릴 수 있습니다.

        오늘날 냐롱 부두에는 호찌민 박물관 호찌민시 분관이 자리하고 있습니다. 박물관에는 호찌민 주석의 생애와 혁명 활동에 관한 사진, 문서, 역사 자료가 전시되어 있습니다. 방문객들은 그의 활동 과정과 베트남 역사의 주요 사건, 그리고 독립을 향한 베트남 국민의 열망을 배울 수 있습니다. 베트남의 역사와 문화, 애국 전통을 이해하고 싶은 사람들에게 의미 있는 관광지입니다.`,

        fr: `Le quai de Nhà Rồng est un célèbre lieu historique situé au bord de la rivière de Saïgon, à Hô Chi Minh-Ville, au Vietnam. Il est associé à un événement majeur du 5 juin 1911, lorsque le jeune Nguyễn Tất Thành quitta ce port pour commencer son voyage à la recherche d'une voie vers l'indépendance nationale. Il devint plus tard connu sous le nom de Hô Chi Minh, figure essentielle de l'histoire contemporaine vietnamienne.

        Le bâtiment de Nhà Rồng fut construit au début du XXe siècle. Son architecture associe des influences occidentales à des éléments décoratifs d'inspiration asiatique. Les deux dragons qui ornent son toit lui ont donné son nom, souvent traduit par « Maison du Dragon ». Situé au bord de la rivière, le site permet également d'observer les bateaux qui circulent sur la rivière de Saïgon et d'imaginer l'activité de cet ancien port commercial.

        Aujourd'hui, le quai abrite l'antenne de Hô Chi Minh-Ville du musée Hô Chi Minh. Les expositions présentent des photographies, des documents et des objets historiques consacrés à la vie et aux activités révolutionnaires de Hô Chi Minh. Les visiteurs peuvent découvrir son parcours, des événements importants de l'histoire du Vietnam et l'aspiration du peuple vietnamien à l'indépendance. C'est une visite particulièrement intéressante pour ceux qui souhaitent mieux comprendre l'histoire, la culture et les traditions patriotiques du Vietnam.`
    }
},



];


/* =========================================================
   BIẾN HỆ THỐNG
   ========================================================= */

let currentPlaceIndex = 0;

let currentLanguage = "vi";

let currentUtterance = null;

let voices = [];

let speechState = "stopped";
// stopped
// playing
// paused

let autoJourney = false;

let progressTimer = null;

let speechToken = 0;


/* =========================================================
   LẤY ELEMENT
   ========================================================= */

const $ = (id) => document.getElementById(id);


/* =========================================================
   KHỞI ĐỘNG
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initialize();

});


function initialize() {

    loadVoices();

    renderPlaceList();

    selectPlace(0, false);

    setupEvents();

    updateVolume();

    updateLanguage();

}

function updateHeroEyebrow() {
    const eyebrow = document.getElementById("heroEyebrow");

    if (eyebrow && languages[currentLanguage]) {
        eyebrow.textContent =
            languages[currentLanguage].eyebrow;
    }
}
function changeLanguage(language) {

    currentLanguage = language;

   
    // Các phần code còn lại của bạn...
}
/* =========================================================
   VOICE
   ========================================================= */

function loadVoices() {

    voices = speechSynthesis.getVoices();

}

speechSynthesis.onvoiceschanged = function () {

    voices = speechSynthesis.getVoices();

};


/* =========================================================
   EVENT
   ========================================================= */

function setupEvents() {

    const playPause = $("playPause");

    const stopAudio = $("stopAudio");

    const startJourney = $("startJourney");

    const volume = $("volume");

    const languageTop = $("languageTop");

    const languageSide = $("languageSide");

    const progress = $("progress");


    /* PLAY / PAUSE */

    if (playPause) {

        playPause.addEventListener("click", function () {

            handlePlayPause();

        });

    }


    /* STOP */

    if (stopAudio) {

        stopAudio.addEventListener("click", function () {

            stopSpeech();

        });

    }


    /* BẮT ĐẦU HÀNH TRÌNH */

    if (startJourney) {

        startJourney.addEventListener("click", function () {

            startAutomaticJourney();

        });

    }


    /* ÂM LƯỢNG */

    if (volume) {

        volume.addEventListener("input", function () {

            updateVolume();

        });

    }


    /* NGÔN NGỮ TRÊN */

    if (languageTop) {

        languageTop.addEventListener("change", function () {

            changeLanguage(this.value);

        });

    }


    /* NGÔN NGỮ BÊN PHẢI */

    if (languageSide) {

        languageSide.addEventListener("change", function () {

            changeLanguage(this.value);

        });

    }


    /* TIẾN TRÌNH */

    if (progress) {

        progress.addEventListener("input", function () {

            /*
             * SpeechSynthesis không hỗ trợ seek chính xác
             * như file MP3.
             *
             * Vì vậy thanh này chỉ hiển thị tiến trình.
             */

        });

    }


    /* CHẾ ĐỘ */

    document.querySelectorAll(
        'input[name="mode"]'
    ).forEach(function (radio) {

        radio.addEventListener("change", function () {

            if (this.value === "manual") {

                autoJourney = false;

            }

        });

    });

}


/* =========================================================
   HIỂN THỊ DANH SÁCH
   ========================================================= */

function renderPlaceList() {

    const list = $("placeList");

    if (!list) return;

    list.innerHTML = "";

    places.forEach(function (place, index) {

        const item = document.createElement("div");

        item.className = "place-item";

        item.dataset.index = index;

        item.innerHTML = `
            <span class="place-number">
                ${index + 1}
            </span>

            <span class="place-name">
                ${escapeHtml(place.name[currentLanguage])}
            </span>
        `;

        item.addEventListener("click", function () {

            selectPlace(index, true);

        });

        list.appendChild(item);

    });

    updateActivePlace();

}


/* =========================================================
   CHỌN ĐỊA ĐIỂM
   ========================================================= */

function selectPlace(index, speakAutomatically) {

    if (
        index < 0 ||
        index >= places.length
    ) {
        return;
    }


    /*
     * Khi chọn địa điểm mới:
     * - Hủy bài cũ.
     * - Không resume bài cũ.
     * - Reset trạng thái.
     */

    cancelSpeech();


    currentPlaceIndex = index;

    const place = places[index];


    $("placeImage").src = place.image;

    $("placeImage").alt =
        place.name[currentLanguage];

    $("placeTitle").textContent =
        place.name[currentLanguage];

    $("placeLocation").textContent =
        place.location[currentLanguage];

    $("placeDuration").textContent =
        place.duration;

    $("placeDescription").textContent =
        cleanText(
            place.description[currentLanguage]
        );


    resetProgress();

    updateActivePlace();

    updateButton();

    setStatus(
        getText("choose")
    );


    /*
     * Chế độ tự động
     */

    const mode =
        document.querySelector(
            'input[name="mode"]:checked'
        );


    if (
        speakAutomatically &&
        mode &&
        mode.value === "auto"
    ) {

        setTimeout(function () {

            speakCurrentPlace();

        }, 200);

    }

}


/* =========================================================
   ACTIVE PLACE
   ========================================================= */

function updateActivePlace() {

    document.querySelectorAll(
        ".place-item"
    ).forEach(function (item) {

        const index =
            Number(item.dataset.index);

        item.classList.toggle(
            "active",
            index === currentPlaceIndex
        );

    });

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

function handlePlayPause() {

    /*
     * Nếu đang đọc
     */

    if (speechState === "playing") {

        speechSynthesis.pause();

        speechState = "paused";

        updateButton();

        setStatus(
            getText("paused")
        );

        return;
    }


    /*
     * Nếu đang tạm dừng
     *
     * Trường hợp này mới dùng resume().
     */

    if (speechState === "paused") {

        speechSynthesis.resume();

        speechState = "playing";

        updateButton();

        setStatus(
            getText("playing")
        );

        return;
    }


    /*
     * Nếu đã STOPPED
     *
     * KHÔNG resume.
     *
     * Đọc lại từ đầu.
     */

    speakCurrentPlace();

}


/* =========================================================
   PHÁT ĐỊA ĐIỂM HIỆN TẠI
   ========================================================= */

function speakCurrentPlace() {

    const place =
        places[currentPlaceIndex];

    if (!place) return;


    /*
     * Hủy hoàn toàn utterance cũ.
     *
     * Đây là phần quan trọng để:
     *
     * STOP → PLAY
     *
     * không tiếp tục bài đang tạm dừng.
     */

    cancelSpeech();


    const text =
        cleanText(
            place.description[currentLanguage]
        );


    if (!text) return;


    const utterance =
        new SpeechSynthesisUtterance(text);


    currentUtterance = utterance;


    utterance.lang =
        languages[currentLanguage].speech;


    utterance.volume =
        getVolume();


    utterance.rate = 0.95;

    utterance.pitch = 1;


    const voice =
        findVoice(
            currentLanguage
        );


    if (voice) {

        utterance.voice = voice;

    }


    /*
     * Token chống event cũ.
     */

    const token =
        ++speechToken;


    utterance.onstart = function () {

        if (token !== speechToken) {
            return;
        }

        speechState = "playing";

        updateButton();

        setStatus(
            autoJourney
                ? getText("autoStarted")
                : getText("playing")
        );

        startProgress();

    };


    utterance.onpause = function () {

        if (token !== speechToken) {
            return;
        }

        speechState = "paused";

        updateButton();

        setStatus(
            getText("paused")
        );

    };


    utterance.onresume = function () {

        if (token !== speechToken) {
            return;
        }

        speechState = "playing";

        updateButton();

    };


    utterance.onend = function () {

        if (token !== speechToken) {
            return;
        }


        speechState = "stopped";

        currentUtterance = null;

        stopProgress();

        setProgress(100);

        updateButton();

        setStatus(
            getText("finished")
        );


        /*
         * Tự động chuyển sang địa điểm tiếp theo
         */

        if (autoJourney) {

            const nextIndex =
                currentPlaceIndex + 1;


            if (nextIndex < places.length) {

                setTimeout(function () {

                    selectPlace(
                        nextIndex,
                        false
                    );

                    speakCurrentPlace();

                }, 700);

            } else {

                autoJourney = false;

                if ($("startJourney")) {

                    $("startJourney").textContent =
                        "▶ Bắt đầu hành trình";

                }

            }

        }

    };


    utterance.onerror = function (event) {

        if (token !== speechToken) {
            return;
        }


        speechState = "stopped";

        currentUtterance = null;

        stopProgress();

        updateButton();


        /*
         * cancel() có thể tạo lỗi interrupted.
         * Không hiển thị lỗi trong trường hợp người dùng
         * chủ động dừng.
         */

        if (
            event.error !== "interrupted" &&
            event.error !== "canceled"
        ) {

            setStatus(
                "Không thể phát giọng đọc. " +
                "Hãy kiểm tra trình duyệt và thiết bị âm thanh."
            );

        }

    };


    speechSynthesis.speak(
        utterance
    );

}


/* =========================================================
   STOP
   ========================================================= */

function stopSpeech() {

    /*
     * Tăng token để event cũ không được xử lý.
     */

    speechToken++;


    /*
     * Hủy SpeechSynthesis.
     */

    speechSynthesis.cancel();


    /*
     * Xóa utterance.
     */

    currentUtterance = null;


    /*
     * Quan trọng:
     *
     * STOPPED khác PAUSED.
     *
     * Sau khi Stop:
     *
     * Play = đọc lại từ đầu.
     *
     * Không dùng speechSynthesis.resume().
     */

    speechState = "stopped";


    autoJourney = false;


    stopProgress();

    resetProgress();

    updateButton();


    if ($("startJourney")) {

        $("startJourney").textContent =
            "▶ Bắt đầu hành trình";

    }


    setStatus(
        getText("stopped")
    );

}


/* =========================================================
   CANCEL
   ========================================================= */

function cancelSpeech() {

    speechToken++;

    speechSynthesis.cancel();

    currentUtterance = null;

    speechState = "stopped";

    stopProgress();

    resetProgress();

}


/* =========================================================
   TÌM VOICE
   ========================================================= */

function findVoice(language) {

    if (!voices || voices.length === 0) {

        voices =
            speechSynthesis.getVoices();

    }


    const prefix =
        language.split("-")[0];


    let voice =
        voices.find(function (v) {

            return v.lang
                .toLowerCase()
                .startsWith(prefix);

        });


    if (!voice) {

        voice =
            voices.find(function (v) {

                return v.lang
                    .toLowerCase()
                    .includes(prefix);

            });

    }


    return voice || null;

}


/* =========================================================
   ÂM LƯỢNG
   ========================================================= */

function getVolume() {

    const volume =
        $("volume");

    if (!volume) {

        return 0.8;

    }


    return (
        Number(volume.value) / 100
    );

}


function updateVolume() {

    const volume =
        $("volume");

    const value =
        $("volumeValue");


    if (!volume) return;


    const number =
        Number(volume.value);


    volume.style.setProperty(
        "--volume-progress",
        number + "%"
    );


    if (value) {

        value.textContent =
            number + "%";

    }


    /*
     * SpeechSynthesis không thay đổi volume
     * của utterance đã bắt đầu trên mọi trình duyệt.
     *
     * Vì vậy giá trị mới sẽ chắc chắn áp dụng
     * cho lần phát tiếp theo.
     */

    if (
        currentUtterance &&
        speechState === "playing"
    ) {

        currentUtterance.volume =
            number / 100;

    }

}


/* =========================================================
   NGÔN NGỮ
   ========================================================= */

function changeLanguage(language) {

    if (!languages[language]) {

        language = "vi";

    }


    currentLanguage = language;


    if ($("languageTop")) {

        $("languageTop").value =
            language;

    }


    if ($("languageSide")) {

        $("languageSide").value =
            language;

    }


    /*
     * Nếu đang đọc:
     *
     * - Dừng hoàn toàn.
     * - Không tiếp tục câu cũ.
     * - Sau khi đổi ngôn ngữ, đọc lại từ đầu.
     */

    const wasPlaying =
        speechState === "playing";


    const wasPaused =
        speechState === "paused";


    cancelSpeech();


    renderPlaceList();

    updatePlaceInterface();

    updateLanguage();


    if (wasPlaying || wasPaused) {

        setTimeout(function () {

            speakCurrentPlace();

        }, 250);

    }

}


/* =========================================================
   CẬP NHẬT GIAO DIỆN ĐỊA ĐIỂM
   ========================================================= */

function updatePlaceInterface() {

    const place =
        places[currentPlaceIndex];

    if (!place) return;


    $("placeImage").alt =
        place.name[currentLanguage];

    $("placeTitle").textContent =
        place.name[currentLanguage];

    $("placeLocation").textContent =
        place.location[currentLanguage];

    $("placeDescription").textContent =
        cleanText(
            place.description[currentLanguage]
        );

}


/* =========================================================
   GIAO DIỆN NGÔN NGỮ
   ========================================================= */

function updateLanguage() {

    /*
     * Cập nhật mô tả Hero theo ngôn ngữ
     */

    const place =
        places[currentPlaceIndex];

    if (!place) return;


    if ($("heroTitle")) {

        $("heroTitle").textContent =
            place.name[currentLanguage];

    }


    if ($("heroSubtitle")) {

        const subtitles = {
        vi: "CÁC ĐỊA ĐIỂM THAM QUAN CỦA VIỆT NAM",
    en: "TOURIST ATTRACTIONS IN VIETNAM",
    zh: "越南旅游景点",
    zhTW: "越南旅遊景點",
    ja: "ベトナムの観光スポット",
    ko: "베트남의 관광 명소",
    fr: "LES SITES TOURISTIQUES DU VIETNAM"
            

        };


        $("heroSubtitle").textContent =
            subtitles[currentLanguage];

    }


    if ($("heroDescription")) {

        const descriptions = {

            vi:
                "Khám phá vẻ đẹp thiên nhiên, văn hóa và lịch sử cùng hệ thống thuyết minh tự động đa ngôn ngữ.",

            en:
                "Discover Vietnam's natural beauty, culture and history through an automatic multilingual audio guide.",

            zh:
                "通过多语言自动语音导览，探索越南的自然、美丽、文化和历史。",

            ja:
                "多言語の自動音声ガイドを通して、ベトナムの自然、文化、歴史を発見しましょう。",

            ko:
                "다국어 자동 음성 안내를 통해 베트남의 자연과 문화, 역사를 만나보세요.",

            fr:
                "Découvrez la nature, la culture et l'histoire du Vietnam grâce à un guide audio automatique multilingue."

        };


        $("heroDescription").textContent =
            descriptions[currentLanguage];

    }

}


/* =========================================================
   BẮT ĐẦU HÀNH TRÌNH TỰ ĐỘNG
   ========================================================= */

function startAutomaticJourney() {

    autoJourney = true;


    currentPlaceIndex = 0;


    selectPlace(
        0,
        false
    );


    setStatus(
        getText("journeyStarted")
    );


    if ($("startJourney")) {

        $("startJourney").textContent =
            "■ Đang phát hành trình";

    }


    setTimeout(function () {

        speakCurrentPlace();

    }, 300);

}


/* =========================================================
   PROGRESS
   ========================================================= */

function startProgress() {

    stopProgress();


    let value = 0;


    /*
     * Đây là tiến trình mô phỏng.
     * SpeechSynthesis không cung cấp duration chính xác.
     */

    progressTimer =
        setInterval(function () {

            if (speechState !== "playing") {

                return;

            }


            value += 0.15;


            if (value >= 99) {

                value = 99;

            }


            setProgress(value);


            updateAudioTime(value);

        }, 100);

}


function stopProgress() {

    if (progressTimer) {

        clearInterval(progressTimer);

        progressTimer = null;

    }

}


function resetProgress() {

    setProgress(0);

    updateAudioTime(0);

}


function setProgress(value) {

    const progress =
        $("progress");

    if (!progress) return;


    progress.value =
        Math.max(
            0,
            Math.min(100, value)
        );

}


function updateAudioTime(value) {

    const audioTime =
        $("audioTime");

    if (!audioTime) return;


    if (value <= 0) {

        audioTime.textContent =
            getText("ready");

        return;

    }


    audioTime.textContent =
        Math.round(value) + "%";

}


/* =========================================================
   BUTTON
   ========================================================= */

function updateButton() {

    const button =
        $("playPause");

    if (!button) return;


    const text =
        languages[currentLanguage];


    if (speechState === "playing") {

        button.textContent =
            text.pause;

        button.classList.add(
            "playing"
        );

        return;

    }


    if (speechState === "paused") {

        button.textContent =
            text.resume;

        button.classList.remove(
            "playing"
        );

        return;

    }


    /*
     * stopped
     */

    button.textContent =
        text.replay;

    button.classList.remove(
        "playing"
    );

}


/* =========================================================
   STATUS
   ========================================================= */

function setStatus(message) {

    const status =
        $("status");

    if (status) {

        status.textContent =
            message;

    }

}


/* =========================================================
   LẤY TEXT
   ========================================================= */

function getText(key) {

    return (
        languages[currentLanguage][key] ||
        languages.vi[key]
    );

}


/* =========================================================
   XỬ LÝ TEXT
   ========================================================= */

function cleanText(text) {

    if (!text) return "";

    return text
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================================
   CHỐNG HTML
   ========================================================= */

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}

