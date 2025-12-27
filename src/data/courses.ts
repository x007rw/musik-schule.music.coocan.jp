import flBanner from '../assets/Fl_banner.gif';
import pfBanner from '../assets/Pf_banner.jpg';
import voBanner from '../assets/Vo_banner.jpg';
import sxBanner from '../assets/Sx_banner2.jpg';
import gtBanner from '../assets/Gt_banner.jpg';

export const courses = [
    {
        id: 'flute',
        title: 'フルート',
        en: 'Flute',
        description: '澄んだ音色で奏でるフルート。初心者から経験者まで、基礎から丁寧にレッスンします。アルテフルート教則本などを使用し、着実な上達を目指します。',
        features: ['楽器レンタルあり（初心者）', '個人レッスン', '年42回', '発表会あり'],
        price: '要問合せ',
        instructor: '要問合せ',
        youtubeId: 'eMZYtLgIRZw',
        image: flBanner
    },
    {
        id: 'piano',
        title: 'ピアノ',
        en: 'Piano',
        description: 'クラシックからポピュラーまで。グランドピアノを使用した本格的なレッスン。お子様から大人まで、幅広く指導しています。',
        features: ['個人レッスン', '年42回', '振替可能', 'グランドピアノ使用'],
        price: '8,000円〜 / 月',
        youtubeId: 'j1gW3zF0v4s',
        image: pfBanner
    },
    {
        id: 'sax',
        title: 'サックス',
        en: 'Saxophone',
        description: 'ジャズもクラシックも。憧れのサックスを自在に操れるようになります。初心者用楽器の貸出も行っています。',
        features: ['初心者～3年: 8,000円', '4年目～: 9,000円', '6年目～: 10,000円', 'サクソフォーン教本使用'],
        price: '8,000円〜 / 月',
        instructor: '吉村 太志',
        youtubeId: '',
        image: sxBanner
    },
    {
        id: 'voice',
        title: '声楽',
        en: 'Vocal',
        description: '正しい発声法で、あなたの声を最大限に響かせます。童謡、歌曲、オペラアリアなど、好きな曲でレッスンできます。',
        features: ['個人レッスン', '発声練習導入', '腹式呼吸習得'],
        price: '要問合せ',
        image: voBanner
    },
    {
        id: 'guitar',
        title: 'ギター・ウクレレ',
        en: 'Guitar & Ukulele',
        description: 'アコースティック、クラシック、ウクレレなど。弾き語りも夢じゃありません。楽譜が読めなくても大丈夫です。',
        features: ['個人レッスン', '楽器貸出あり', '初心者歓迎'],
        price: '要問合せ',
        image: gtBanner
    }
];
