# ベースイメージを指定
FROM node:14

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "start"]

# コンテナが使用するポートを指定
EXPOSE 3000
