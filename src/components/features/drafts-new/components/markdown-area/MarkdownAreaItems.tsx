export const MARKDOWN_AREA = [
  {
    title: "文章を見やすく装飾する方法",
    linkLabel: "Markdown記法 チートシート",
    linkHref: "https://qiita.com/Qiita/items/c686397e4a0f4f11683d",
    children: (
      <div className="mt-4 flex justify-between gap-4">
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 font-semibold">見出し</p>
            <ul className="p-2">
              <li className="text-gray-600">## 見出し2</li>
              <li className="text-gray-600">### 見出し3</li>
              <li className="text-gray-600">#### 見出し4</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">コードブロック</p>
            <p className="p-2 text-gray-600">
              ```ruby:title.rb
              <br />
              puts 'code block.'
              <br />
              ```
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 font-semibold">インラインコード</p>
            <p className="p-2 text-gray-600">`インラインコード`</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">強調</p>
            <p className="p-2 text-gray-600">**強調**</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">リンク</p>
            <p className="p-2 text-gray-600">[リンクテキスト](http://...)</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 font-semibold">リスト</p>
            <ul className="p-2">
              <li className="text-gray-600">- リスト1</li>
              <li className="text-gray-600">- リスト2</li>
              <li className="text-gray-600">- リスト3</li>
            </ul>
          </div>
          <div>
            <ul className="p-2">
              <li className="text-gray-600">1. 番号付きリスト1</li>
              <li className="text-gray-600">1. 番号付きリスト2</li>
              <li className="text-gray-600">1. 番号付きリスト3</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "コマンドによる補完機能",
    linkLabel: "コマンド補完機能の詳細はこちら",
    linkHref:
      "https://qiita.com/Qiita/items/c686397e4a0f4f11683d#%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E8%A3%9C%E5%AE%8C%E6%A9%9F%E8%83%BD",
    children: <p className="mt-4">「/」を入力すると一部の記法が補完できるコマンドが表示されます</p>,
  },
  {
    title: "Qiitaに埋め込み可能なコンテンツ",
    linkLabel: "Qiitaで埋め込み可能なコンテンツ一覧",
    linkHref: "https://qiita.com/Qiita/items/612e2e149b9f9451c144",
    children: <p className="mt-4">X(Twitter)、CodeSandboxなどの埋め込み可能なコンテンツを一覧化しています</p>,
  },
  {
    title: "記事投稿のヒント",
    linkLabel: "コミュニティガイドライン",
    linkHref: "https://help.qiita.com/ja/articles/qiita-community-guideline",
    children: (
      <div className="mt-4">
        <p>ガイドラインの内容を理解し、エンジニアにとって再利用性・汎用性の高い内容を投稿しよう</p>
        <p className="mt-4">例えば、以下のような記事はやめましょう</p>
        <ul className="list-disc ml-6">
          <li>
            テスト投稿、日記など（
            <a
              href="https://help.qiita.com/ja/articles/qiita-private-article"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex gap-2 items-center text-blue-700 hover:text-gray-700 duration-300">
              限定共有投稿
            </a>
            をご活用ください）
          </li>
          <li>文章として成立していないメモや走り書き</li>
          <li>
            自己紹介記事（
            <a
              href="https://help.qiita.com/ja/articles/qiita-change-id"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex gap-2 items-center text-blue-700 hover:text-gray-700 duration-300">
              プロフィール
            </a>
            をご活用ください）
          </li>
          <li>AIが生成した内容で正しいかどうかを検証していないもの</li>
        </ul>
      </div>
    ),
  },
]
