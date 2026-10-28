export type PublicationCategory =
  | "first-authored-papers"
  | "co-authored-papers"
  | "first-authored-presentations"
  | "co-authored-presentations"
  | "workshop-presentations";

export type PaperType = "original" | "letter" | "technical-paper";
export type PresentationTag = "invited" | "oral" | "poster" | "domestic" | "international";
export type PublicationRemark = {
  label: string;
  url?: string;
};

export type Publication = {
  id: string;
  category: PublicationCategory;
  date: string;
  title: string;
  citation: string;
  venue: string;
  doi?: string;
  paperType?: PaperType;
  presentationTags?: PresentationTag[];
  remarks?: PublicationRemark[];
};

export const paperTypeLabels: Record<PaperType, string> = {
  original: "Original article",
  letter: "Letter",
  "technical-paper": "Technical paper",
};

export const presentationTagLabels: Record<PresentationTag, string> = {
  invited: "Invited",
  oral: "Oral",
  poster: "Poster",
  domestic: "Domestic",
  international: "International",
};

export const categoryLabels: Record<PublicationCategory, string> = {
  "first-authored-papers": "主著論文 / First-authored papers",
  "co-authored-papers": "共著論文 / Co-authored papers",
  "first-authored-presentations": "主著発表 / First-authored presentations",
  "co-authored-presentations": "共著発表 / Co-authored presentations",
  "workshop-presentations": "その他・研究会発表 / Workshop"
};

export const publications: Publication[] = [
  // 主著論文
  {
    id: "pmc-tonga-2025",
    category: "first-authored-papers",
    date: "2025-10-29",
    title:
      "Responses of Polar Mesospheric Clouds to Water Vapor Anomalies Caused by the 2022 Hunga Tonga-Hunga Ha'apai Eruption",
    citation:
      "Moriyama, Y., T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka, K. T. Murata, and J. Yue",
    venue: "Earth Planets Space, 77(1), 162",
    doi: "10.1186/s40623-025-02298-3",
    paperType: "letter",
    remarks: [
      { label: "電通大プレスリリース / UEC Press Release", url: "https://www.uec.ac.jp/news/newsrelease/2025/20251029_7253.html" },
      { label: "明治大プレスリリース / Meiji Univ. Press Release", url: "https://www.meiji.ac.jp/koho/press/2025/qfki0t00000a12qh.html" },
      { label: "東北大プレスリリース / Tohoku Univ. Press Release", url: "https://www.tohoku.ac.jp/japanese/2025/10/press20251029-02-cloud.html" },
      { label: "極地研プレスリリース / NIPR Press Release", url: "https://www.nipr.ac.jp/info2025/20251029.html" },
      { label: "地球研プレスリリース / RIHN Press Release", url: "https://www.chikyu.ac.jp/rihn/news/detail/639/" },
      { label: "EPS Highlighted Papers 2025", url: "#EPS_highlight_2025" },
    ],
  },
  {
    id: "himawari-comparison-2025",
    category: "first-authored-papers",
    date: "2025-03-11",
    title: "Comparison of Polar Mesospheric Cloud Observations by Himawari-8/AHI and Himawari-9/AHI",
    citation: "Moriyama, Y., T. T. Tsuda, and Y. Ando",
    venue: "Earth Planets Space, 77(1), 30",
    doi: "10.1186/s40623-025-02163-3",
    paperType: "technical-paper",
  },
  // 主著発表
  {
    id: "iugonet-2026",
    category: "first-authored-presentations",
    date: "2026-09-09",
    title: "Himawari/AHI による PMC の観測とデータ解析: 2022 年 HTHH 噴火水蒸気注入に伴う PMC の変動について",
    citation: "森山陽介, 津田卓雄, 安藤芳晃",
    venue: "太陽地球系物理学分野のデータ解析手法，ツールの理解と応用, 千葉",
    presentationTags: ["oral", "invited", "domestic"],
  },
  {
    id: "aogs-2026",
    category: "first-authored-presentations",
    date: "2026-08-04",
    title: "Himawari/AHI observations of polar mesospheric cloud variations associated with the 2022 Tonga eruption",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka, K. T. Murata, J. Yue",
    venue: "AOGS 2026, Fukuoka, Japan",
    presentationTags: ["oral", "international"],
  },
  {
    id: "jpgu-2026",
    category: "first-authored-presentations",
    date: "2026-05-01",
    title: "Research on polar mesospheric cloud variations associated with the 2022 HTHH eruption based on Himawari/AHI observation",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka, K. T. Murata, J. Yue",
    venue: "JpGU-AGU Joint Meeting 2026, Chiba, Japan",
    presentationTags: ["oral", "international"],
    remarks: [{label:"学生優秀発表賞 / OSPA", }],
  },
  {
    id: "sgepss-2025",
    category: "first-authored-presentations",
    date: "2025-11-01",
    title: "Research on the impact of the 2022 Tonga Eruption's water vapor anomaly on polar mesospheric cloud activities based on Himawari-8/9 observations",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka, K. T. Murata, J. Yue",
    venue: "SGEPSS 2025 Fall Meeting, Kobe, Japan",
    presentationTags: ["oral", "domestic"],
    remarks: [{label:"オーロラメダル / Auroral medal", }],
  },
  {
    id: "isar-8-2025",
    category: "first-authored-presentations",
    date: "2025-10-01",
    title: "Impact of the HTHH eruption's water vapor on polar mesospheric cloud activities observed by Himawari-8/9",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka",
    venue: "ISAR-8, Hachioji, Tokyo, Japan",
    presentationTags: ["oral", "international"],
  },
  {
    id: "mti-2025",
    category: "first-authored-presentations",
    date: "2025-09-01",
    title: "2022年トンガ噴火水蒸気注入に対する極中間圏雲応答の観測的調査: ひまわり/AHIとAura/MLSの連携解析",
    citation: "森山陽介, 津田卓雄, 安藤芳晃, 鈴木秀彦, 中川広務, 西山尚典, 田中良昌, 村田健史, Jia Yue",
    venue: "令和7年度 MTI研究集会, 調布",
    presentationTags: ["poster", "domestic"],
  },
  {
    id: "jpgu-2025",
    category: "first-authored-presentations",
    date: "2025-05-01",
    title: "Research on polar mesospheric cloud response to the water vapor injection by the 2022 Tonga eruption based on Himawari-8/9 observations",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka",
    venue: "JpGU Meeting 2025, Chiba, Japan",
    presentationTags: ["poster", "international"],
  },
  {
    id: "sgepss-2024",
    category: "first-authored-presentations",
    date: "2024-11-01",
    title: "Polar mesospheric cloud variations from 2015 to 2024 observed by Himawari-8/9",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, K. T. Murata",
    venue: "SGEPSS 2024 Fall Meeting, Tachikawa, Tokyo",
    presentationTags: ["poster", "domestic"],
  },
  {
    id: "mti-2024",
    category: "first-authored-presentations",
    date: "2024-09-01",
    title: "ひまわり8号/9号のPMC検出結果の比較と2015--2024年のPMC変動の解析",
    citation: "森山陽介, 津田卓雄, 安藤芳晃, 村田健史",
    venue: "令和6年度 MTI研究集会, 北九州",
    presentationTags: ["poster", "domestic"],
  },
  {
    id: "jpgu-2024",
    category: "first-authored-presentations",
    date: "2024-05-01",
    title: "A comparison of polar mesospheric cloud observations by Himawari-8/AHI and Himawari-9/AHI",
    citation: "Y. Moriyama, T. T. Tsuda, Y. Ando, K. T. Murata",
    venue: "JpGU Meeting 2024, Chiba, Japan",
    presentationTags: ["poster", "international"],
  },
  // 共著発表
  {
    id: "jpgu-agu-2026-coauthored",
    category: "co-authored-presentations",
    date: "2026-05-01",
    title: "Development and principal experiment of a time-delayed multi-beam method for an upgrade of the Tromsø Na lidar",
    citation: "K. Sato, T. T. Tsuda, J. Hu, Y. Moriyama, Y. Sonoyama, N. Wada, T. Aoki, N. Saito, S. Nozawa, T. Kawabata, T. D. Kawahara, T. Takahashi",
    venue: "JpGU-AGU Joint Meeting 2026, Chiba, Japan",
    presentationTags: ["oral", "international"],
  },
  {
    id: "eiscat-2026",
    category: "co-authored-presentations",
    date: "2026-03-01",
    title: "トロムソNaライダーの改良に向けた時間差マルチビーム観測システムの開発と試験観測",
    citation: "佐藤洸太, 津田卓雄, J. Hu, 森山陽介, 園山雄基, 和田奈津希, 青木猛, 斎藤徳人, 野澤悟徳, 川端哲也, 川原琢也, 髙橋透",
    venue: "EISCAT研究集会",
    presentationTags: ["oral", "domestic"],
  },
  {
    id: "agu25",
    category: "co-authored-presentations",
    date: "2025-12-01",
    title: "Polar mesospheric cloud observations by the Japanese geostationary-Earth-orbit meteorological satellites Himawari-8/9",
    citation: "T. T. Tsuda, Y. Ando, Y. Moriyama, J. Yue, H. Suzuki, H. Nakagawa, T. Nishiyama, Y.-M. Tanaka, and K. T. Murata",
    venue: "AGU25, New Orleans, USA",
    presentationTags: ["poster", "international"],
  },
  {
    id: "sgepss-2025-coauthored",
    category: "co-authored-presentations",
    date: "2025-11-01",
    title: "Development of the time-delayed multi-beam observation method applied to the Tromsø Na lidar",
    citation: "K. Sato, T. T. Tsuda, J. Hu, Y. Moriyama, Y. Sonoyama, N. Wada, T. Aoki, N. Saito, S. Nozawa, T. Kawa-bata, T. D. Kawahara, T. Takahashi",
    venue: "SGEPSS 2025 Fall Meeting, Kobe, Japan",
    presentationTags: ["oral", "domestic"],
  },
  {
    id: "jpgu-2025-coauthored",
    category: "co-authored-presentations",
    date: "2025-05-01",
    title: "Polar mesospheric cloud observations by the Japanese geostationary satellites Himawari-8/9",
    citation: "T. T. Tsuda, Y. Ando, H. Suzuki, H. Nakagawa, T. Nishiyama, Y. Tanaka, Y. Moriyama, T. Shibuya, M. Sakai, and M. Tanaka",
    venue: "JpGU Meeting 2025, Chiba, Japan",
    presentationTags: ["oral", "invited", "international"],
  },
  // Workshop
  {
    id: "sgepss-wakate-2026",
    category: "workshop-presentations",
    date: "2026-08-27",
    title: "静止軌道衛星ひまわりによる約11年分の極中間圏雲観測と変動の解析",
    citation: "森山陽介",
    venue: "シンポジウムー太陽地球環境研究の現状と将来, 泉南, 大阪",
    presentationTags: ["poster", "domestic"],
    remarks: [{label: "宇宙地球惑星科学若手会夏の学校2026 (at SORA RINKU)", url: "https://sites.google.com/view/sgepssnatsunogakkou-2026/研究発表?authuser=0"}]
  },
  {
    id: "sgepss-wakate-2025",
    category: "workshop-presentations",
    date: "2025-08-28",
    title: "トンガ噴火水蒸気注入に対する極中間圏雲応答の観測的調査",
    citation: "森山陽介",
    venue: "シンポジウムー太陽地球環境研究の現状と将来, 野蒜, 宮城",
    presentationTags: ["oral", "domestic"],
    remarks: [{label: "宇宙地球惑星科学若手会夏の学校2025 (at 未来学舎 KIBOTCHA)", url: "https://pparc.tohoku.ac.jp/sympo/sps/sgepss-summer2025/プログラム/"}]
  },
];

export function sortPublications(items: Publication[]) {
  return [...items].sort(
    (a, b) =>
      b.date.localeCompare(a.date) ||
      a.title.localeCompare(b.title),
  );
}

export function latestPublications(category: PublicationCategory, count = 3) {
  return sortPublications(publications.filter((item) => item.category === category)).slice(0, count);
}
