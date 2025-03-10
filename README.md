# README

## 概要
以下を検証するためのrepository

- swaggerからAPI仕様を参照し、フロントにAPI clientファイルを自動生成
- Vue側でAPI clientの型や関数を呼び出し、期待できる挙動が行えるか

※labolのswaggerから、一部ずつ切り取ってコピペして検証  
※バックエンドコードはなく、DBはmock用のものです

## スクリプトコマンド一覧

### Nuxtアプリケーションをビルド
```
$ npm run build
```

### 開発サーバーを起動
```
$ npm run dev
```

### 静的サイトを生成
```
$ npm run generate
```

### プロダクションビルドをローカルでプレビュー
```
$ npm run preview
```

### Nuxtの準備
```
$ npm run postinstall
```

### API clientを生成
```
$ npm run openapi
```
このコマンドで、以下4つのlibraryのコマンドが実行されます
- @openapitools/openapi-generator-cli
- openapi-typescript
- openapi-typescript-codegen
- swagger-typescript-api

### JSON Serverを使用してモックAPIを起動 (ポート3001)
```
$ npm run mock-api
```
