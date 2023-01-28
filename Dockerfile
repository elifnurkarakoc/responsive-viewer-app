
FROM node:16.13.2-alpine
ENV PATH ./node_modules/.bin:$PATH
WORKDIR /src
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]