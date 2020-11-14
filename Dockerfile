# Nodejs Base image
FROM node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install and app dependencies
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build --prod
# add app
COPY . /app
# start app
CMD ng serve --host 0.0.0.0