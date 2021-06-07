FROM node:latest

# Set node environment to production
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Create log folder
RUN mkdir ./logs

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependencies
RUN npm install

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose container port on 5000
EXPOSE 5000

HEALTHCHECK --interval=10s --timeout=2s --start-period=15s CMD curl --fail http://localhost:5000/health || exit 1   

# Run app
CMD [ "node", "index.js" ]