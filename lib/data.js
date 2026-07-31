export const BRAND = {
  name: "quanxuanle-AI",
  short: "quanxuanle",
  tagline: "Nơi giao thoa công nghệ.",
  year: 2026,
};

// Ghi chú cố định hiển thị trong modal chi tiết template
export const TEMPLATE_NOTES = {
  premium: "Chú ý: Để dùng template bạn phải có bản Premium Video.",
  drive:
    "Template này đã có sẵn trong công cụ, nếu thiếu vui lòng truy cập link drive để tải.",
};

// Câu lệnh tạo video. `path` là đường dẫn template đầy đủ, ví dụ "creative/pixel-style-sfx".
export function buildCommand(path) {
  return `/gen-video --template ${path} <nội dung hoặc link bài viết>`;
}

// Link nhúng trình phát YouTube (nocookie) từ video ID — bản đầy đủ (có điều khiển).
export function ytEmbed(id) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
}

// Link nhúng kiểu GIF: tự chạy, tắt tiếng, lặp lại, ẩn điều khiển.
export function ytEmbedGif(id) {
  const p = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id, // bắt buộc để loop hoạt động
    controls: "0",
    modestbranding: "1",
    playsinline: "1",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
    rel: "0",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${p.toString()}`;
}

// Đường dẫn video MP4 nội bộ (tuỳ chọn): public/videos/<ns>-<slug>.mp4
export function videoSrc(ns, slug) {
  return `/videos/${ns}-${slug}.mp4`;
}

// Mỗi template có thể khai báo:
//   cmd  – đường dẫn template cho câu lệnh (nếu bỏ trống, tự ghép từ ns/slug)
//   yt   – YouTube video ID cho preview (ưu tiên cao nhất)
//   video – URL/đường dẫn MP4 (dùng khi không có yt)
//   fit  – nội dung mục "Phù hợp cho"
export const categories = [
  {
    slug: "ai-tu-sang-tao",
    ns: "creative",
    name: "AI tự sáng tạo",
    desc: "Nhóm template mở, cho phép AI tự quyết định bố cục, màu sắc, chuyển cảnh và nhịp dựng theo nội dung đầu vào.",
    templates: [
      { title: "AI tự sáng tạo phong cách", slug: "auto-style", cmd: "creative/free-style-sfx", yt: "KmRW6-uIJ4w", price: "Miễn Phí", desc: "AI tự dựng cảnh, chọn màu, animation và chuyển cảnh theo nội dung, có thêm nhạc nền và hiệu ứng âm thanh ở mỗi cảnh để video giàu nhịp hơn.", fit: "Video social sáng tạo đa phong cách, cần cảm giác sống động, có nhịp chuyển cảnh và âm thanh hỗ trợ." },
      { title: "Không gian spatial flow", slug: "spatial-flow", cmd: "creative/spatial-flow", price: "39K", tag: "Mới", desc: "Phong cách bay trong không gian qua từng step, hiệu ứng 3d, cảm giác mới lạ và cuốn hút.", fit: "Video giới thiệu quy trình, timeline hoặc concept cần cảm giác không gian 3D." },
      { title: "Pixel Editorial", slug: "pixel-style-sfx", cmd: "creative/pixel-style-sfx", yt: "jCVp5dgYfwA", price: "Miễn Phí", desc: "Bản pixel có nhạc nền và transition sound, phù hợp video cần cảm giác arcade/editorial rõ hơn.", fit: "Series ngắn có tính giải trí, review tool, trend công nghệ và nội dung visual mạnh." },
      { title: "Hiển thị website trong video", slug: "website-demo", cmd: "creative/demo-scroll-sfx", yt: "LbLoDFJ2HWY", price: "Miễn Phí", desc: "Bản demo màn hình có thêm nhạc nền và âm chuyển cảnh để phần hướng dẫn bớt khô.", fit: "Video giới thiệu sản phẩm, onboarding, tutorial ngắn và bán hàng bằng demo." },
    ],
  },
  {
    slug: "bat-dong-san",
    ns: "realestate",
    name: "Bất động sản",
    desc: "Bản tin quy hoạch, thị trường nhà đất, kiến trúc, nhà đẹp và câu chuyện dân sinh xoay quanh đô thị, dự án và chính sách.",
    templates: [
      { title: "BĐS dân sinh sáng", slug: "civic-light", cmd: "news/real-estate-civic-light", yt: "oWXeXEG4DjM", price: "Miễn Phí", desc: "Bản tin bất động sản, quy hoạch và đô thị với nền hồng phấn, timeline, quote và ảnh nguồn.", fit: "Tin quy hoạch, nhà ở xã hội, dự án đô thị, hạ tầng và câu chuyện dân sinh." },
      { title: "BĐS đô thị tối", slug: "urban-dark", cmd: "news/real-estate-civic-dark", yt: "3PlZF9UgwYA", price: "Miễn Phí", desc: "Bản tin BĐS nền đêm đô thị, accent vàng/cyan, ảnh mở shutter và timeline sắc nét.", fit: "Video thị trường BĐS, quy hoạch, pháp lý dự án và biến động đô thị có sắc thái cao cấp." },
      { title: "Kiến trúc, nhà ở", slug: "architecture", cmd: "news/real-estate-architecture", price: "39K", tag: "Mới", desc: "Bản tin bất động sản, quy hoạch, đô thị, kiến trúc, nhà đất mang phong cách sang trọng hiện đại.", fit: "Nội dung kiến trúc, nhà đẹp, review dự án cần tone sang trọng." },
    ],
  },
  {
    slug: "con-nguoi",
    ns: "life",
    name: "Nhân sinh - Cuộc đời",
    desc: "Template cho những video về tiềm thức con người, lối sống, bài học, sự trưởng thành, nhân sinh, triết lý sống.",
    templates: [
      { title: "Cinematic Light", slug: "cinematic-light", cmd: "life/cinematic-light", price: "49K", tag: "Mới", desc: "Video triết lý, nhân sinh, tiềm thức con người, tone sáng và ấm, hình ảnh được tự động tạo miễn phí theo cảnh.", fit: "Nội dung truyền cảm hứng, bài học cuộc sống cần tone sáng, ấm." },
      { title: "Cinematic Dark", slug: "cinematic-dark", cmd: "life/cinematic-dark", price: "49K", tag: "Mới", desc: "Video triết lý, nhân sinh, tiềm thức con người, tone tối và trầm, hình ảnh được tự động tạo miễn phí theo cảnh.", fit: "Video chiêm nghiệm, triết lý sâu cần tone tối, trầm lắng." },
      { title: "Cinematic dark background", slug: "cinematic-dark-bg", cmd: "life/cinematic-dark-bg", price: "49K", tag: "Mới", desc: "Video triết lý, nhân sinh, tiềm thức con người, video nền được lấy tự động miễn phí theo cảnh.", fit: "Kể chuyện nhân sinh cần video nền chuyển động làm không khí." },
      { title: "Podcast youtube 16:9", slug: "podcast-16-9", cmd: "life/podcast-16-9", price: "39K", tag: "Mới", desc: "Video podcast dạng ngang, thiết kế thời lượng khoảng 5 phút, thích hợp kể chuyện video youtube.", fit: "Podcast, kể chuyện dài dạng ngang cho YouTube." },
    ],
  },
  {
    slug: "giai-tri",
    ns: "entertainment",
    name: "Giải trí",
    desc: "Tin phim, nhạc, nhân vật, thời trang và văn hóa đại chúng theo phong cách tạp chí hoặc sân khấu premiere.",
    templates: [
      { title: "Tạp chí giải trí", slug: "magazine", cmd: "news/entertainment-magazine-light", yt: "6hpgNln92O4", price: "Miễn Phí", desc: "Tin giải trí tone sáng kiểu tạp chí với ảnh nguồn, quote, timeline và ranking.", fit: "Tin âm nhạc, phim, nhân vật, sách, thời trang và văn hóa đại chúng." },
      { title: "Premiere giải trí", slug: "premiere-dark", cmd: "news/entertainment-premiere-dark", yt: "AHHqgsILDio", price: "Miễn Phí", desc: "Tin giải trí nền tối kiểu sân khấu premiere với poster, quote, timeline và ranking.", fit: "Video về phim, nhạc, awards, nhân vật nổi bật và sự kiện giải trí lớn." },
    ],
  },
  {
    slug: "the-thao",
    ns: "sports",
    name: "Thể thao",
    desc: "Template scoreboard, timeline, thống kê và điểm nhấn trận đấu cho kênh thể thao tốc độ cao.",
    templates: [
      { title: "Thể thao tone tối", slug: "stadium-dark", cmd: "news/sports-arena-dark", yt: "KdTSDna7lKU", price: "Miễn Phí", desc: "Tin thể thao tone tối kiểu sân vận động với scoreboard, tỉ số, timeline, stat board và quote.", fit: "Tổng hợp trận đấu, recap bóng đá, lịch thi đấu, thống kê và điểm nóng thể thao." },
      { title: "Thể thao briefing sáng", slug: "briefing-light", cmd: "news/sports-briefing-light", yt: "GJwgQ-AVFbU", price: "Miễn Phí", desc: "Bản tin thể thao nền giấy editorial, scoreboard sạch, ảnh/video nguồn và bảng thống kê.", fit: "Recap nhẹ, tin chuyển nhượng, thông tin trước trận và video thể thao dễ đọc." },
    ],
  },
  {
    slug: "suc-khoe",
    ns: "health",
    name: "Sức khỏe",
    desc: "Bản tin y tế, cảnh báo cộng đồng, checklist triệu chứng và khuyến cáo sức khỏe trình bày sạch, dễ tin cậy.",
    templates: [
      { title: "Sức khỏe briefing", slug: "briefing", cmd: "news/health-briefing-light", yt: "mmqHlbAM8sc", price: "Miễn Phí", desc: "Tin sức khỏe sáng, sạch, bám nguồn với ảnh/video, số liệu, khuyến cáo và timeline y tế.", fit: "Tin y tế, dinh dưỡng, nghiên cứu sức khỏe và nội dung cộng đồng cần độ tin cậy." },
      { title: "Cảnh báo sức khỏe", slug: "alert", cmd: "news/health-public-alert", yt: "Gwv4lALPKzE", price: "Miễn Phí", desc: "Bulletin cảnh báo sức khỏe với mức độ rủi ro, nhóm ảnh hưởng, checklist và hành động cần làm.", fit: "Cảnh báo dịch bệnh, an toàn thực phẩm, rủi ro sức khỏe và thông tin khẩn cấp." },
    ],
  },
  {
    slug: "kinh-doanh",
    ns: "business",
    name: "Kinh doanh",
    desc: "Tin tài chính, thị trường, doanh nghiệp và chỉ số kinh tế với biểu đồ, ticker và góc nhìn phân tích.",
    templates: [
      { title: "Terminal kinh doanh", slug: "terminal-dark", cmd: "news/business-terminal-dark", yt: "zPK7aKkKjfk", price: "Miễn Phí", desc: "Bản tin kinh doanh/tài chính tone tối kiểu market terminal với ticker, số liệu và biểu đồ.", fit: "Tin thị trường, chứng khoán, doanh nghiệp, crypto và phân tích rủi ro." },
      { title: "Sổ cái tài chính", slug: "ledger-light", cmd: "news/business-ledger-light", yt: "fnDEg5-JR0I", price: "Miễn Phí", desc: "Bản tin tài chính sáng kiểu financial newspaper với bảng ledger, chỉ số và memo kinh tế.", fit: "Video giải thích chỉ số, báo cáo doanh nghiệp, thị trường và kinh tế vĩ mô." },
    ],
  },
  {
    slug: "du-lich",
    ns: "travel",
    name: "Du lịch",
    desc: "Template cho bản tin điểm đến, lịch trình, chi phí, checklist và mẹo du lịch dạng tạp chí mobile.",
    templates: [
      { title: "Postcard du lịch", slug: "postcard", cmd: "news/travel-postcard-light", yt: "yfTvxZbuzHg", price: "Miễn Phí", desc: "Bản tin du lịch sáng kiểu postcard với ảnh nguồn, tem địa điểm, route strip và fact card.", fit: "Tin điểm đến, cảnh đẹp, trải nghiệm địa phương và nội dung du lịch cảm hứng." },
      { title: "Cẩm nang du lịch", slug: "handbook", cmd: "news/travel-guide-light", yt: "8QL-ErCuqGc", price: "Miễn Phí", desc: "Bản tin hướng dẫn du lịch thực dụng với chi phí, lịch trình, checklist, mùa đi và lưu ý.", fit: "Video mẹo du lịch, lịch trình ngắn, hướng dẫn ngân sách và checklist chuẩn bị." },
    ],
  },
  {
    slug: "xe-co",
    ns: "auto",
    name: "Xe cộ",
    desc: "Tin xe, thị trường ô tô, ra mắt mẫu mới, thông số, so sánh và xu hướng xe điện.",
    templates: [
      { title: "Showroom xe tối", slug: "showroom-dark", cmd: "news/auto-showroom-dark", yt: "B8aXxk-CPkE", price: "Miễn Phí", desc: "Tin xe tone tối kiểu showroom/road test với ánh đèn, spec cards, gauge và compare board.", fit: "Tin ra mắt xe, đánh giá nhanh, thông số, triệu hồi và so sánh mẫu xe." },
      { title: "Thị trường xe sáng", slug: "market-light", cmd: "news/auto-market-light", yt: "itfRawjPb_M", price: "Miễn Phí", desc: "Bản tin thị trường xe sáng cho ra mắt, khai tử, xe điện, giá bán và hành vi người mua.", fit: "Tin ngành xe, xu hướng EV, giá bán, chính sách và vòng đời sản phẩm." },
    ],
  },
  {
    slug: "giao-duc",
    ns: "education",
    name: "Giáo dục",
    desc: "Bản tin tuyển sinh, du học, đổi mới giáo dục, deadline và dữ liệu học thuật cho người học.",
    templates: [
      { title: "Giáo dục briefing", slug: "briefing", cmd: "news/education-briefing-light", yt: "a2PZtVXurP4", price: "Miễn Phí", desc: "Bản tin giáo dục sáng cho tuyển sinh, du học, đổi mới, deadline, checklist và dữ liệu học thuật.", fit: "Tin tuyển sinh, chính sách giáo dục, du học, chân dung học thuật và deadline quan trọng." },
      { title: "Campus bulletin", slug: "campus-bulletin", cmd: "news/education-campus-light", yt: "25zA0Q4Qpf0", price: "Miễn Phí", desc: "Bản tin giáo dục kiểu campus bulletin với nền sky, notebook cards, deadline và insight học tập.", fit: "Nội dung trường học, tuyển sinh, học bổng, sự kiện campus và thông báo học thuật." },
    ],
  },
  {
    slug: "thoi-su",
    ns: "news",
    name: "Thời sự",
    desc: "Bản tin chính luận, dân sinh, giao thông và biến động xã hội với nhịp trình bày rõ ràng, nghiêm túc.",
    templates: [
      { title: "Thời sự tone sáng", slug: "light", cmd: "news/current-affairs-light", yt: "_uPcoENe5GI", price: "Miễn Phí", desc: "Bản tin chính trị, dân sinh, việc làm và giao thông với nền giấy sáng, accent đỏ son và navy.", fit: "Tin thời sự hằng ngày, chính sách mới, dân sinh và các biến động xã hội cần trình bày rõ." },
      { title: "Thời sự tone tối", slug: "dark", cmd: "news/current-affairs-dark", yt: "6EP_VWaTdSY", price: "Miễn Phí", desc: "Bản tin thời sự nghiêm túc với nền tối kiểu briefing room, hợp tin chính sách và xã hội.", fit: "Tin chính sách, giao thông, an sinh, cảnh báo xã hội và các chủ đề cần sắc thái nghiêm trang." },
      { title: "Thời sự ảnh slide", slug: "photo-slide", cmd: "news/media-showcase", yt: "ZoVYD0YvqzM", price: "Miễn Phí", tag: "Mới", desc: "Bản tin thời sự nghiêm túc với nhiều ảnh đường show, viền đỏ, nền trắng, kèm ngày đăng, tiêu đề.", fit: "Tin chính sách, giao thông, an sinh, cảnh báo xã hội và các chủ đề cần sắc thái nghiêm trang." },
    ],
  },
  {
    slug: "cong-nghe",
    ns: "tech",
    name: "Công nghệ",
    desc: "Template cho tin AI, startup, thiết bị, phần mềm và xu hướng số với cảm giác hiện đại, dễ theo dõi.",
    templates: [
      { title: "Công nghệ nền tối", slug: "dark-future", cmd: "news/tech-dark", yt: "P9iZJZMPVME", price: "Miễn Phí", desc: "Bản tin công nghệ với nền tối sâu, gradient cyan-xanh, particle network và cảm giác tương lai.", fit: "Tin AI, startup, chip, thiết bị mới, cybersecurity và các xu hướng công nghệ." },
      { title: "Công nghệ sáng sạch", slug: "clean-light", cmd: "news/tech-light", yt: "TGesLl5J-Wo", price: "Miễn Phí", desc: "Tin công nghệ nền trắng, headline lớn, accent đỏ và ảnh nguồn rõ ràng cho bản tin dễ đọc.", fit: "Video tổng hợp công nghệ, sản phẩm mới, AI tools và tin startup dễ tiếp cận." },
    ],
  },
];

export const pricing = [
  {
    name: "Basic Video",
    blurb: "Video animation, thêm audio thủ công.",
    price: "79K",
    unit: "VNĐ / trọn đời",
    who: "Bạn đã có giọng đọc hoặc chỉ cần video animation để đăng nhanh.",
    features: [
      "AI lên kịch bản và chia cảnh",
      "Tạo nội dung chuyển động",
      "Render MP4 chất lượng cao",
      "Hỗ trợ video dọc 9:16 và ngang 16:9",
      "Tương thích Claude, ChatGPT, Gemini...",
      "Không cần biết dựng video hoặc lập trình",
      "Giọng nói AI tự động",
      "Đồng bộ animation với audio",
      "Phụ đề tự động từ giọng nói",
      "Sử dụng kho template",
    ],
    cta: "Chọn Basic",
  },
  {
    name: "Pro Video",
    blurb: "Video hoàn chỉnh có giọng nói AI.",
    price: "129K",
    unit: "VNĐ / trọn đời",
    who: "Bạn muốn nhập nội dung và nhận video có tiếng, phụ đề, hoạt ảnh đồng bộ audio.",
    featured: true,
    features: [
      "Tất cả tính năng của Basic",
      "Giọng nói AI tự nhiên",
      "Phụ đề tự động từ nhận dạng giọng nói",
      "Đồng bộ hoạt ảnh chính xác với từng câu thoại",
      "Pipeline đầy đủ 8 bước tự động",
      "Hỗ trợ nhiều giọng nói khác nhau",
      "Không cần tự ghi âm hoặc thêm audio thủ công",
      "Hoạt ảnh phong phú theo sự sáng tạo của AI",
      "Tự động thêm nhạc nền, update nhạc nền mới",
      "Tích hợp kho template, thêm template mới",
    ],
    cta: "Chọn Pro",
  },
  {
    name: "Premium Video",
    blurb: "Chế độ chuyên nghiệp cho cá nhân, doanh nghiệp.",
    price: "299K",
    unit: "VNĐ / trọn đời",
    who: "Bạn thích AI sáng tạo và cả theo template, nhạc nền, giọng đọc, mẫu video update liên tục.",
    features: [
      "Tất cả tính năng Basic và Pro Video",
      "Kho 30+ template miễn phí",
      "Template mọi lĩnh vực thời sự, kinh tế, nhà đất, thể thao...",
      "AI hoạt động hiệu quả với template, tiết kiệm token",
      "Hỗ trợ update version liên tục",
      "Đa phong cách AI sáng tạo hoặc theo template sẵn",
      "Tự động thêm nhạc nền",
      "Thêm nhạc nền, giọng đọc mới tuỳ ý",
      "Tự tạo template theo phong cách cá nhân",
      "Thêm template mới từ quanxuanle",
    ],
    cta: "Chọn Premium",
  },
];

export const faqs = [
  {
    q: "Tôi không biết lập trình, edit video, có dùng được không?",
    a: "Được. Bạn chỉ cần cài AI agent như Cursor, Gemini, Claude, ChatGPT... mở project, rồi dùng lệnh tạo video. Phần kỹ thuật đã được đóng gói sẵn.",
  },
  {
    q: "Nên chọn gói nào?",
    a: "Nếu bạn muốn video có tiếng và phụ đề ngay, Pro là lựa chọn cân bằng nhất. Basic hợp khi bạn tự thêm audio. Và Premium giúp bạn đi đường dài và chuyên nghiệp hơn.",
  },
  {
    q: "Nếu chỉ dùng gói Pro Video thì video trông như thế nào?",
    a: "Gói Pro Video, AI sẽ tự sáng tạo cách hiển thị nội dung dựa trên ý tưởng của bạn, chất lượng video phụ thuộc vào độ thông minh Model AI bạn sử dụng.",
  },
  {
    q: "Premium khác Pro ở điểm nào?",
    a: "Premium mở thêm kho template, update version, nhạc nền tự động, giọng đọc, nhạc nền mới tùy ý và khả năng tự tạo template phong cách riêng, có nhiều lệnh thông minh và tự động.",
  },
  {
    q: "Chi phí vận hành?",
    a: "Project mua một lần dùng trọn đời, không mất thêm phí. Giọng nói miễn phí, hoạt ảnh miễn phí. AI Agents để chạy tool tuỳ theo bạn dùng gì, miễn phí hay có phí là ở bạn (Claude, Gemini, ChatGPT, Cursor...)",
  },
  {
    q: "Sau khi thanh toán tôi nhận công cụ và chạy như thế nào?",
    a: "PayOS chuyển bạn quay lại trang. Hệ thống xác thực đơn hàng và hiện link tải, bạn có thể tải về ngay. Sau đó mở lên với 1 công cụ AI Agents (Claude, Gemini, ChatGPT, Cursor...). Đồng thời có hướng dẫn đầy đủ để bạn làm theo (gồm file hướng dẫn Pdf và video).",
  },
  {
    q: "Tôi có thể làm video về đa lĩnh vực, đa phong cách mà tôi muốn không?",
    a: "Hoàn toàn được, đặc biệt mạnh mẽ với gói Premium Video, đa phong cách, đa template.",
  },
  {
    q: "Một ngày tôi tạo được bao nhiêu video?",
    a: "Nếu bạn dùng AI Agents PRO (Claude, ChatGPT, Gemini...), ngày bạn có thể tạo khoảng 10-20 video, còn các gói cao hơn thì số lượng nhiều hơn nữa. Nếu AI Agents Free ngày bạn tạo 2-3 video.",
  },
  {
    q: "Điều kiện để chạy được công cụ?",
    a: "Bạn phải có 1 công cụ AI Agents (Claude, Gemini, ChatGPT, Cursor...) để chạy, khuyên dùng ChatGPT Plus hoặc Claude Pro. Một máy tính cấu hình tối thiểu cơ bản (CPU 2 cores, RAM 8G, Ổ cứng trống 2G), máy càng khoẻ render càng nhanh.",
  },
  {
    q: "AI Agents có quyết định chất lượng video không?",
    a: "Có, với những model thông minh như ChatGPT, Claude thường cho kết quả tốt hơn. Nhưng với phiên bản Premium Video có template, AI kém thông minh hơn vẫn làm việc tốt.",
  },
];
