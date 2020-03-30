FROM node:12.16.1-alpine3.11

#boostrap
#WORKDIR /app
#RUN npx create-react-app app --use-npm --template redux
# typescript

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install 
COPY tsconfig.json /app/tsconfig.json 
COPY src/ /app/src/
COPY public/ /app/public/

#VOLUMES /app

EXPOSE 3000

#CMD ["npm","start"]
CMD ["sleep","100000000"]
