# pull official base image
FROM node:17-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATHs
# ENV PATH /app/node_modules/.bin:$PATH

COPY . .

# install app dependencies
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
#COPY . ./

# start app
CMD ["npm", "start"]
