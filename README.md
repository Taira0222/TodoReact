# Todo App（React + DevContainer）

これは「【React18 対応】モダン JavaScript の基礎から始める挫折しないための React 入門」という Udemy の React 入門で作成した TodoApp です。

# 目的

このアプリは CodeSandBox や StackBlitz での実装を想定していますが、  
今回は **DevContainer を使ったコンテナアプリ開発の練習**として作成しました。

## 開発環境の構築方法

このプロジェクトは DevContainer 対応です。以下の手順で開発環境を構築できます：

1. このリポジトリをクローンする
2. VS Code でフォルダを開く
3. 「Reopen in Container」でコンテナを起動

## 使用技術

- Node.js 22（開発・ビルド用）
- React 19
- Vite
- JavaScript
- 拡張機能: ESLint / Prettier
- DevContainer
- Dockerfile

## 主な機能

- Todo の追加
- Todo の完了・削除
- Todo の完了/未完了一覧
- 完了済みの Todo を戻す

## 起動方法

1. 必要な依存関係をインストール：

```bash
npm install
```

2. 必要に応じて、package.json の scripts を以下のように変更してください
   （vite のデフォルト設定ではローカルホストからしかアクセスできないため、ホスト PC からのアクセスを許可します）：

```json
"scripts": {
    "dev": "vite --host",
    ...

}
```

3. アプリを起動

```bash
npm run dev

```
