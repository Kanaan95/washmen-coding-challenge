
FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY ./client ./client
RUN cd ./client &&  npm install && npm run build


FROM node:latest AS server-build

WORKDIR /root/
# Set node environment to production
ENV NODE_ENV production

# Create log folder
RUN mkdir ./logs

COPY --from=ui-build /usr/src/app/client/dist ./client/dist

# Install app dependencies
COPY package*.json ./
RUN npm install

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose container port on 5000
EXPOSE 5000

HEALTHCHECK --interval=10s --timeout=2s --start-period=15s CMD curl --fail http://localhost:5000/health || exit 1   

# Run app
CMD ["node", "index.js"]