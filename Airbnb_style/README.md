#### 動作確認環境

Windows10 Home Version1903 の

Ubuntu 18.04 LTS（WSL1）

#### npm パッケージのインストール

`package.json`作成

```
npm init -y
```

`ESLint` `Prettier`のインストール

```
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier
```

`Airbnb JavaScript Style`の設定用パッケージをインストール

```
npx install-peerdeps --dev eslint-config-airbnb
```
