FROM node
COPY . /app
WORKDIR /app
RUN npm run start
EXPOSE 3000